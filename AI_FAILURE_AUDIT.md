# AI Failure Mode Audit — Lab 02 Homework

Student: Huynh Quoc Minh Thong — 22521432

This is a **risk-analysis checklist**, not evidence of bugs discovered by a completed DevTools audit. Replace each "To verify" with genuine observed results and screenshots.

## Risk 01 — Unsafe HTML injection (XSS)
- Faulty pattern: `element.innerHTML = userInput`.
- Risk: attacker-controlled HTML can execute code.
- Safe design: React text interpolation (`{value}`) or `document.createTextNode`.
- To verify: enter `<img src=x onerror=alert(1)>` in a test data value; ensure it renders as harmless text.

## Risk 02 — Event listener / audio resource leaks
- Faulty pattern: adding listeners and source nodes on every render, without teardown.
- Risk: duplicated handlers, increasing memory usage, phantom playback.
- Refactor in this project: `AudioTaskQueue.cancelAll()/dispose()`, source disconnect, requestAnimationFrame cancellation, audio context close.
- To verify: repeat upload/stop/unmount cycles; inspect Chrome DevTools Performance and memory allocation.

## Risk 03 — Unstable React list keys
- Faulty pattern: `key={Math.random()}` or index keys for reordered records.
- Risk: remounts and incorrect state association.
- Refactor in this project: stable product `id` used as `key` in the grid.
- To verify: sort table and confirm row selection continues to match item IDs.

## Risk 04 — Timer drift
- Faulty pattern: decrementing a variable by 1000 each `setInterval` tick.
- Risk: long or backgrounded tabs drift and checkout deadlines become inaccurate.
- Refactor in this project: `targetTime - Date.now()` recalculated each frame; reservation expiry checked against absolute timestamps.
- To verify: background tab and compare actual wall-clock expiry.

## Verification log (fill using actual testing)
| Check | Evidence / screenshot | Result |
|---|---|---|
| XSS text escaping | Pending | Not tested |
| Audio teardown | Pending | Not tested |
| Stable row selection | Pending | Not tested |
| Timer drift | Pending | Not tested |
| Lighthouse accessibility | Pending | Not tested |
| Lighthouse best practices | Pending | Not tested |
