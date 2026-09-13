export const page = 'lazy-about';

export function render(host) {
  const el = document.createElement('div');
  el.textContent = 'lazy-about rendered';
  host.appendChild(el);
}

console.log('lazy-about loaded');