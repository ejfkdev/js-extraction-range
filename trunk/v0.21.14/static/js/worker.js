self.onmessage = (event) => {
  console.log('worker got', event.data);
  self.postMessage('pong');
};

console.log('worker ready');