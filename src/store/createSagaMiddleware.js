import createSagaMiddleware from 'redux-saga';

export default () => {
  const sagaMonitor =
    process.env.NODE_ENV === 'development'
      ? console.tron.createSagaMonitor()
      : null;

  return createSagaMiddleware({ sagaMonitor });
};
