/**
 * Lumen icon set.
 *
 * Filled glyphs with rounded joins on a 24×24 grid, in the Apple manner:
 * solid shapes, soft corners, optically centred. Transport glyphs (play,
 * pause, volume, captions) are filled silhouettes; directional and utility
 * glyphs use a single 2-weight stroke in `currentColor` with round caps and
 * joins. Registered over the Scaffold family so every
 * `<media-icon family="scaffold">` in the skin markup renders the Lumen
 * versions.
 */

const line = (body: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24">${body}</svg>`;

const filled = (body: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">${body}</svg>`;

/** Filled triangle with rounded corners, shifted +1px right of geometric
 *  centre so it sits optically centred in the button. */
export const playIcon = filled(
  `<path d="M9.3 5.7c0-.95 1.05-1.55 1.88-1.06l8.35 5.16c.78.48.78 1.56 0 2.04l-8.35 5.16c-.83.49-1.88-.11-1.88-1.06V5.7z"/>`,
);

/** Two filled bars with fully rounded ends. */
export const pauseIcon = filled(
  `<rect x="6.2" y="4.8" width="4" height="14.4" rx="2"/><rect x="13.8" y="4.8" width="4" height="14.4" rx="2"/>`,
);

/** Circular arrow, clockwise, arrowhead at the top. */
export const restartIcon = line(
  `<path d="M19.3 12a7.3 7.3 0 1 1-2.14-5.16"/><path d="M21.2 2.8v3.9h-3.9"/>`,
);

/** Circular arrow used by the ±10s seek buttons (the label carries the 10). */
export const seekIcon = line(
  `<path d="M19.3 12a7.3 7.3 0 1 1-2.14-5.16"/><path d="M21.2 2.8v3.9h-3.9"/>`,
);

const speaker = `<path d="M4 9.4v5.2c0 .6.4 1 1 1h2.6L12 19.4c.6.5 1.6.1 1.6-.7V5.3c0-.8-1-1.2-1.6-.7L7.6 8.4H5c-.6 0-1 .4-1 1z"/>`;

export const volumeHighIcon =
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24"><g fill="currentColor" stroke="none">${speaker}</g><path d="M16.4 9.3a3.9 3.9 0 0 1 0 5.4"/><path d="M18.7 6.9a7.2 7.2 0 0 1 0 10.2"/></svg>`;

export const volumeLowIcon =
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24"><g fill="currentColor" stroke="none">${speaker}</g><path d="M16.4 9.3a3.9 3.9 0 0 1 0 5.4"/></svg>`;

export const volumeOffIcon =
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24"><g fill="currentColor" stroke="none">${speaker}</g><path d="M16.6 9.7l4.7 4.7M21.3 9.7l-4.7 4.7"/></svg>`;

const captionsFrame = `<rect x="3" y="5" width="18" height="14" rx="4"/>`;
const captionsMarks = `<path d="M10.7 10.1a2.7 2.7 0 1 0 0 3.8M17.3 10.1a2.7 2.7 0 1 0 0 3.8"/>`;

export const captionsOffIcon = line(captionsFrame + captionsMarks);

/** Filled frame with the CC marks knocked out — state reads by shape. */
export const captionsOnIcon = filled(
  `<path fill-rule="evenodd" d="M6.5 5h11A3.5 3.5 0 0 1 21 8.5v7a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 15.5v-7A3.5 3.5 0 0 1 6.5 5zm4.2 5.1a2.7 2.7 0 1 0 0 3.8 2.7 2.7 0 0 0 0-3.8zm6.6 0a2.7 2.7 0 1 0 0 3.8 2.7 2.7 0 0 0 0-3.8z"/>`,
);

export const checkIcon = line(`<path d="M4.8 12.6l4.7 4.7L19.2 6.8"/>`);

export const chevronIcon = line(`<path d="M9.2 4.8l7.3 7.2-7.3 7.2"/>`);

export const fullscreenEnterIcon = line(
  `<path d="M4 9.2V6a2 2 0 0 1 2-2h3.2M14.8 4H18a2 2 0 0 1 2 2v3.2M20 14.8V18a2 2 0 0 1-2 2h-3.2M9.2 20H6a2 2 0 0 1-2-2v-3.2"/>`,
);

export const fullscreenExitIcon = line(
  `<path d="M9.2 4v3.2A2 2 0 0 1 7.2 9.2H4M20 9.2h-3.2a2 2 0 0 1-2-2V4M14.8 20v-3.2a2 2 0 0 1 2-2H20M4 14.8h3.2a2 2 0 0 1 2 2V20"/>`,
);

/** Filled cog: a donut ring (punched centre) plus eight chunky teeth — the
 *  hollow centre keeps it reading as a gear at 20px. */
export const gearIcon = filled(
  `<path fill-rule="evenodd" d="M12 6.4a5.6 5.6 0 1 0 0 11.2 5.6 5.6 0 1 0 0-11.2Zm0 3.4a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 1 1 0-4.4Z"/>` +
    [0, 45, 90, 135, 180, 225, 270, 315]
      .map(
        (deg) =>
          `<rect x="10.6" y="1.4" width="2.8" height="4.4" rx="1.4" transform="rotate(${deg} 12 12)"/>`,
      )
      .join(''),
);

const pipFrame = `<rect x="3" y="5" width="18" height="14" rx="4"/>`;

export const pipEnterIcon =
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24">${pipFrame}<rect x="12.4" y="11.9" width="6.2" height="4.6" rx="1.6" fill="currentColor" stroke="none"/></svg>`;

export const pipExitIcon =
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24">${pipFrame}<rect x="5.4" y="7.4" width="6.2" height="4.6" rx="1.6" fill="currentColor" stroke="none"/></svg>`;

/** Screen outline with the AirPlay triangle filled beneath. */
export const airplayEnterIcon =
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24"><rect x="3.5" y="4.5" width="17" height="12" rx="3"/><path d="M12 13.4l2.9 3.9H9.1L12 13.4z" fill="currentColor" stroke="none"/></svg>`;

/** Connected state: the triangle grows into the screen. */
export const airplayExitIcon =
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="12" rx="3"/><path d="M12 16.1l3.2 4.2H8.8L12 16.1z" fill="currentColor" stroke="none"/></svg>`;

const castWaves = `<path d="M4.6 16.4a8.3 8.3 0 0 1 6.7 6.7M4.6 13.3a12.3 12.3 0 0 1 10 10M4.6 19.5a4.4 4.4 0 0 1 3.6 3.5"/>`;

export const castEnterIcon = line(
  `<path d="M4.6 6.6A2.6 2.6 0 0 1 7.2 4h9.6a2.6 2.6 0 0 1 2.6 2.6v6.8a2.6 2.6 0 0 1-2.6 2.6h-3.2"/>` + castWaves,
);

export const castExitIcon =
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24"><path d="M4.6 6.6A2.6 2.6 0 0 1 7.2 4h9.6a2.6 2.6 0 0 1 2.6 2.6v6.8a2.6 2.6 0 0 1-2.6 2.6h-3.2"/>${castWaves}<rect x="10.2" y="7.6" width="5.8" height="4.8" rx="1" fill="currentColor" stroke="none"/></svg>`;

/** Speech bubble with two lines — the audio-track menu glyph. */
export const speechIcon = line(
  `<path d="M5 4.6h14a1.6 1.6 0 0 1 1.6 1.6v7.6a1.6 1.6 0 0 1-1.6 1.6h-8l-4.4 3.8v-3.8H5a1.6 1.6 0 0 1-1.6-1.6V6.2A1.6 1.6 0 0 1 5 4.6z"/><path d="M7.6 9.1h8.8M7.6 12.1h5.2"/>`,
);

/** Gauge arc with a needle and a filled hub. */
export const speedIcon =
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24"><path d="M4.8 18.4a8.8 8.8 0 1 1 14.4 0"/><path d="M12 14.2l3.7-5.4"/><circle cx="12" cy="14.2" r="1.5" fill="currentColor" stroke="none"/></svg>`;

/** Three sliders with filled round knobs — the settings-menu glyph. */
export const switchesIcon =
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 7.4h9.4M17.6 7.4H20M4 16.6h3.4M11.6 16.6H20"/><circle cx="15.4" cy="7.4" r="2.2" fill="currentColor" stroke="none"/><circle cx="9.4" cy="16.6" r="2.2" fill="currentColor" stroke="none"/></svg>`;

/** Lumen spinner: a single calm arc in the foreground colour, spun by the
 * component's `--media-spinner-animation` variable (which the base styles
 * switch off under reduced motion and when the indicator hides). */
export const spinnerIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" aria-hidden="true" viewBox="0 0 24 24"><style>@keyframes lumen-spin{to{transform:rotate(360deg)}}</style><path stroke="currentColor" stroke-width="2.4" stroke-linecap="round" d="M12 3.4a8.6 8.6 0 1 1-8.6 8.6" style="transform-box:view-box;transform-origin:center;animation:var(--media-spinner-animation, lumen-spin 0.9s linear infinite)"/></svg>`;

export const lumenIcons: Record<string, string> = {
  'airplay-enter': airplayEnterIcon,
  'airplay-exit': airplayExitIcon,
  'captions-off': captionsOffIcon,
  'captions-on': captionsOnIcon,
  'cast-enter': castEnterIcon,
  'cast-exit': castExitIcon,
  check: checkIcon,
  chevron: chevronIcon,
  'fullscreen-enter': fullscreenEnterIcon,
  'fullscreen-exit': fullscreenExitIcon,
  gear: gearIcon,
  pause: pauseIcon,
  'pip-enter': pipEnterIcon,
  'pip-exit': pipExitIcon,
  play: playIcon,
  restart: restartIcon,
  seek: seekIcon,
  speech: speechIcon,
  speed: speedIcon,
  spinner: spinnerIcon,
  switches: switchesIcon,
  'volume-high': volumeHighIcon,
  'volume-low': volumeLowIcon,
  'volume-off': volumeOffIcon,
};
