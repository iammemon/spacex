import {createStore,applyMiddleware,compose} from 'redux';

import rootEpic from './actions/rootEpic';
import reducers from './reducers/index';

 
export default createStore(
    reducers,
    compose(
        applyMiddleware(rootEpic),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
    )
)



