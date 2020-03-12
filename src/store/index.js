import { persistStore } from 'redux-persist';

import createStore from './createStore';
import createSagaMiddleware from './createSagaMiddleware';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducer from './persistReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(persistReducer(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
