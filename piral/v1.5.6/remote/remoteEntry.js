// hand-written micro-frontend remote entry (static sub-app emitter under dist/remote/)
export const REMOTE_APP_NAME = 'dj-remote';
export const REMOTE_APP_VERSION = '1.0.0';

export function boot(host) {
  const tag = document.createElement('div');
  tag.dataset.remote = REMOTE_APP_NAME;
  tag.textContent = 'dj-remote boots';
  (host || document.body).appendChild(tag);
}

// nested dynamic load inside the static sub-app: pulls the follow-up module
import('/remote/remoteApp1.js')
  .then((m) => m.init())
  .catch((e) => console.warn('remoteApp1 failed', e));