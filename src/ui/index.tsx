import * as React from 'react';
import ReactDOM from 'react-dom';
import text from './hellow';
import './index.scss';

class App extends React.Component {
    render() {
        return (
            <div>{text}</div>
        )
    }
}

ReactDOM.render(<App />, document.body);