const flushPromise = (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export default flushPromise;
