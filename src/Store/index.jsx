import { createStore, applyMiddleware } from "redux";
import reducer from "../Reducer";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

export default function configureStore(initialState) {
    const loggerMiddleware = createLogger()

    const store = createStore(
        reducer,
        applyMiddleware(
            thunk, // позволяет нам отправлять функции
            loggerMiddleware // аккуратно логируем экшены
        )
    )
    if (module.hot) {
        module.hot.accept('../Reducer', () => {
            const nextRootReducer = require('../Reducer')
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}
