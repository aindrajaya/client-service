import {combineReducers} from 'redux';
import customizationReducer from './reducers/customizationReducer';
import snackbarReducer from './reducers/snackbarReducer';
import channelReducer from './reducers/Channel'
import channelLists from './reducers/ChannelList';
import depositReducer from './reducers/depositChannel';
import lastKeyReducer from './reducers/GetLastKey';
import offChainReducer from './reducers/OffChain';
import onChainReducer from './reducers/OnChain';

const reducer = combineReducers({
    customization: customizationReducer,
    snackbar: snackbarReducer,
    channel: channelReducer,
    listsChannel: channelLists,
    deposit: depositReducer,
    lastKey: lastKeyReducer,
    offChain: offChainReducer,
    onChain: onChainReducer
});

export default reducer;
