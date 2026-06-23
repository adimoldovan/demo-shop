// Lightweight replacement for the unmaintained holder.js library.
// Returns an inline SVG data URI so product thumbnails render without a
// runtime dependency that scans the DOM and draws into a <canvas>.

function escapeXml(value) {
  return String(value).replace(/[<>&"']/g, (char) => {
    switch (char) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '"': return '&quot;';
      default: return '&apos;';
    }
  });
}

export function placeholderImage(text, { width = 100, height = 150, bg = '#969494', fg = '#ffffff' } = {}) {
  const label = escapeXml(String(text || '').trim());
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">` +
    `<rect width="100%" height="100%" fill="${bg}"/>` +
    `<text x="50%" y="50%" fill="${fg}" font-family="sans-serif" font-size="8" ` +
    `text-anchor="middle" dominant-baseline="middle">${label}</text>` +
    `</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
