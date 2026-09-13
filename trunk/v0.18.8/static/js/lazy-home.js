export const page = 'lazy-home';

export function render(host) {
  const el = document.createElement('div');
  el.textContent = 'lazy-home rendered';
  host.appendChild(el);
}

console.log('lazy-home loaded');