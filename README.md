# Lab 02 Homework — Huynh Quoc Minh Thong (22521432)

## Setup
Requires Node.js 20+ and npm. In this directory:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To test compilation:

```bash
npm run build
npm run preview
```

## Included tasks
- HW1: Searchable, sortable, paginated semantic HTML data-grid; keyboard arrows and Enter/Space row toggling; accessible labels and focus.
- HW2: AudioTaskQueue for FIFO fetch and decode with AbortController cancellation, Web Audio API analyzer FFT 256/512, requestAnimationFrame canvas visualization, stop/unmount cleanup.
- HW3: Date.now()-based anti-drift requestAnimationFrame countdown, inventory reservation, expiration, checkout, reducer-based state machine.

## Important submission notes
- This code is a complete demonstration but **not an independently audited production deployment**.
- Lighthouse 100 Accessibility / Best Practices is **not verified**. Run Chrome DevTools > Lighthouse on your own deployment, record genuine results, and fix flagged issues.
- Git history cannot be fabricated; create the required 8+ meaningful atomic commits yourself while building/refining and retain a truthful history.
- Capture genuine screenshots of app output, keyboard navigation, DevTools, and Lighthouse on your machine. Never submit invented audit evidence.
- HW2: multi-file loading is FIFO; currently **only the first audio track is played**; later files are decoded in sequence but not automatically played. Full sequential playback can be added if instructor expects it.
- HW3: inventory is local to one client, not backed by an atomic server lock, so it cannot guarantee concurrency protection between multiple browsers.
