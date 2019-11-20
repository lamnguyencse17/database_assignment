import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import ReactDOM from 'react-dom';

import Headnav from './Headnav/Headnav';
import Body from './Body/Body';

class App extends Component {
    render() {
        return (<Provider store={store}>
            <Fragment>
                <Headnav/>
                <Body/>
            </Fragment>
            </Provider>
            )
    }
}

ReactDOM.render (<App/>, document.getElementById("app"));
