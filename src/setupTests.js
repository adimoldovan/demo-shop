// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// jsdom does not implement <canvas>. holderjs runs a preflight on import that
// calls canvas.toDataURL(), which returns null and crashes on .indexOf().
// Stub it so components importing holderjs can render under tests.
HTMLCanvasElement.prototype.getContext = () => null;
HTMLCanvasElement.prototype.toDataURL = () => 'data:image/png;base64,';
