import React from 'react';
import ReactDOM from 'react-dom';

const text = require('./hellow.jsx');
require('./index.scss');

class App extends React.Component {
    render() {
        return (
            <div>{text}</div>
        )
    }
}

ReactDOM.render(<App />, document.body);