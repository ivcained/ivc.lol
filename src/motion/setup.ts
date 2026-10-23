// Site motion for ivc.lol: the phosphor field (signature), the tuner loader format,
// and the clock in the header. One clock: everything goes through GSAP's ticker.
import { gsap } from 'gsap';
import { setBackground, setLoaderFormat, setLoaderExit, ease } from '../engine';

// The signature: a dithered phosphor field. Interleaved-gradient-noise ordered dither
// on a 3px grid, fbm carrier, pointer bump, scroll-velocity excitation, idle breathe.
const phosphor = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform float uTime, uScroll, uVelocity;
uniform vec2 uMouse, uResolution;
uniform vec3 uGround, uAccent;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 2; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; }
  return v;
}
// Interleaved gradient noise: ordered dither threshold, one per dither cell.
float ign(vec2 px) { return fract(52.9829189 * fract(dot(px, vec2(0.06711056, 0.00583715)))); }

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;
  vec2 p = vec2(uv.x * aspect, uv.y);

  // Dither cells: 3px grid for crisp phosphor grain (DPR-safe: gl_FragCoord is device px).
  vec2 cell = floor(gl_FragCoord.xy / 3.0);
  float th = ign(cell);

  // Carrier: slow breathing field
  float t = uTime * 0.05;
  float f = fbm(p * 2.4 + vec2(t * 0.5, -t * 0.35));
  f = f * 0.55 + 0.45 * fbm(p * 5.4 + vec2(-t * 0.3, t * 0.22));

  // Pointer: a soft radar pulse around the pointer position
  vec2 m = vec2(uMouse.x * aspect, uMouse.y);
  float d = distance(p, m);
  f += 0.38 * smoothstep(0.32, 0.0, d) * (0.72 + 0.28 * sin(uTime * 2.2 - d * 26.0));

  // Idle breathe: the field never fully rests
  f *= 0.84 + 0.16 * sin(uTime * 0.45);

  // Scroll velocity excites the signal
  f += clamp(abs(uVelocity) * 0.003, 0.0, 0.18);

  // The signal fades back as you leave the hero
  f *= mix(1.0, 0.34, smoothstep(0.02, 0.22, uScroll));

  // Quantize into 3 phosphor levels with the dither threshold
  float q = clamp(floor(f * 3.0 + th) / 3.0, 0.0, 1.0);

  // Scanlines: 1px in 3 is darker
  float scan = 0.88 + 0.12 * step(0.66, fract(gl_FragCoord.y / 3.0));

  vec3 col = uGround;
  col = mix(col, uAccent * 0.42, q * 0.34 * scan);
  col = mix(col, uAccent, step(0.98, q) * 0.85 * scan);

  // Vignette: the tube falls off at the corners
  float vig = smoothstep(1.3, 0.3, length(uv - 0.5) * 1.7);
  col *= mix(0.5, 1.0, vig);

  gl_FragColor = vec4(col, 1.0);
}`;

export function setupMotion() {
  // The loader reads like a tuner sweeping the band to lock on.
  setLoaderFormat((p) => `${(87.5 + (p / 100) * 20.5).toFixed(1)} MHz`);

  // The loader exits like a lock-on: the frequency stops drifting, then the tube opens.
  setLoaderExit((root) =>
    gsap.timeline()
      .to(root.querySelectorAll('[data-loader-out]'), { yPercent: -110, duration: 0.35, ease: ease.inOut, stagger: 0.03 })
      .to(root, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.65, ease: ease.inOut }, '-=0.12')
  );

  const hex = (h: string) => {
    const n = parseInt(h.replace('#', ''), 16);
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
  };
  setBackground(phosphor, {
    uGround: { value: hex('#0A0D06') },
    uAccent: { value: hex('#7FFF00') },
  });

  // Header clock: real information, ticking on the one clock.
  const clock = document.querySelector<HTMLElement>('[data-clock]');
  if (clock) {
    gsap.ticker.add(() => {
      const d = new Date();
      clock.textContent = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
    });
  }
}
