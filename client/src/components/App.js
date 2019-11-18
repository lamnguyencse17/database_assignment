import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Headnav from './Headnav/Headnav';
import Body from './Body/Body';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Headnav/>
                <Body/>
            </Fragment>
            )
    }
}

ReactDOM.render (<App/>, document.getElementById("app"));
