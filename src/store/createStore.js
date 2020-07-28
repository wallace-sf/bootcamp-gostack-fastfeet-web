import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer =
    process.env.NODE_ENV === 'development'
      ? composeEnhancers(
          console.tron && console.tron.createEnhancer(),
          applyMiddleware(...middlewares)
        )
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
