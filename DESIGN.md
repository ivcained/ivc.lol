# ivc.lol — design contract

## Brief (phase 0)
- Subject: ivc — digital artist & builder (audio, video, 3D, NFT, interactive; hackathon winner, grant recipient; founder of Fiddy + LegitClub).
- Audience: collaborators, hackathon crews, clients, curious visitors from Farcaster/GitHub.
- Job: get collaborators and showcase work. Primary CTA: "Let's talk".
- Constraints: single-page-first, deploys GitHub → Vercel, Ghost (ghost.ivc.lol) feeds a Journal section at build time once DNS is live. Old Vite/React site is lost; content rebuilt from extracted copy.

## Concept card (phase 1)
- Idea: ivc's work is signal engineering — this page IS a phosphor display showing the signal.
- Metaphor: a calibrated green-phosphor monitor. Chartreuse is the owner's favourite colour and the literal colour of phosphor signal; this is why, not decoration.
- Signature: the hero is a live dithered phosphor WebGL field carrying the IVC mark; it drifts on idle, answers the pointer, and breathes on a single clock.
- Emotion (first 3s): a tuned instrument waking up, not a landing page loading.
- Motion verb: things **settle like a signal locking in** — fast attack, slight over-scan, then still.
- Screenshot: the hero frame — giant dithered IVC mark in chartreuse on deep green-black.

Territories considered (rejected): stationery/desk (Ephemera-style, doesn't fit a digital-signal artist); sketch/hand-drawn (Rough.js, too soft for this subject); retro-OS (98.css, gimmick over substance). Phosphor wins on fit and portability: nobody else owns chartreuse-as-physics.

## Art direction (phase 2)
- Palette (roles, hex):
  - ground `#0A0D06` (deep green-black, mean L ≈ 0.12 — deliberate dark: the concept IS a phosphor tube; checked, not reflex)
  - panel `#12160C` (surface)
  - ink `#EAF0DA` (soft phosphor-white)
  - muted `#8E9779` (≥4.5:1 on ground for small text? kept for large/meta only; body uses ink)
  - line `#1E2513`
  - accent `#7FFF00` (chartreuse — literal)
  - dim accent `#4E9900` (secondary signal)
- Type:
  - Display: **Schabo Display** (Fontshare) — condensed, angular; reads like a broadcast slate. Not Inter (banned), not a serif reflex.
  - Text: **General Sans** (Fontshare) — neutral humanist counterpart.
  - Meta/mono: **IBM Plex Mono** — the oscilloscope readout voice.
- Grid: 12-col, 24px gutter; one deliberate break: the hero canvas bleeds full-bleed while the index list hugs the left rail; sections alternate dense/airy rhythm.
- Radius: 2px everywhere (instruments, not furniture).
- Motion: one clock (GSAP ticker), ease family = custom `power2.out` + signal-lock overshoot; durations 120–220ms UI, reveals settle 400–700ms; ≤3 scroll pattern families: (1) heading split-lock, (2) index-row signal hover, (3) scroll-progress signal sweep on the hero field.

## Reflex check
- Generic AI would do: purple gradient blob hero, Inter, glass cards, "passionate about crafting experiences" copy.
- Second-order AI would do: terminal green-on-black hacker aesthetic.
- Deviation: phosphor is treated as calibrated instrument physics (dither + scanline + slow drift), type is condensed display + mono readouts, copy is plain and concrete. Chartreuse, not neon hacker green.

## House tells deliberately broken (auteur §2.5)
- Not doing: wordmark-as-hero-only / logo-status-action header. Instead: header is a thin instrument strip with a live clock; the hero IS the field itself.
- Not doing: scroll-instruction footer ("scroll to explore" from the old site is dead). Instead: the field's drift signals aliveness without instructions.

## Sections (home)
1. Hero — live phosphor field, wordmark, one line, one CTA.
2. Signal (about) — who ivc is, in concrete words.
3. Work — index list of real projects (links out).
4. Numbers — hackathon/grant counts as ticking readouts.
5. Collaborate — what ivc is looking for (teammates who stay after the confetti).
6. Journal — Ghost-fed when content key exists; hidden otherwise.
7. Footer — connect links + colophon.
Plus /404, plus one case-study template ready for real entries.
