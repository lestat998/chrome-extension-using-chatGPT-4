global.chrome = {
  browsingData: {
    removeCache: jest.fn(),
  },
  runtime: {
    onInstalled: {
      addListener: jest.fn(),
    },
    onMessage: {
      addListener: jest.fn(),
    },
  },
};
