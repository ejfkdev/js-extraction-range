// hand-written micro-frontend remote entry (static, under dist/remote/)
export const REMOTE_APP_NAME = 'emp-remote';
export const REMOTE_APP_VERSION = '1.0.0';

export function boot(host) {
  const tag = document.createElement('div');
  tag.dataset.remote = REMOTE_APP_NAME;
  tag.textContent = 'emp-remote boots';
  (host || document.body).appendChild(tag);
}

// nested dynamic load inside the static sub-app
import('/remote/remoteApp1.js')
  .then((m) => m.init())
  .catch((e) => console.warn('remoteApp1 failed', e));