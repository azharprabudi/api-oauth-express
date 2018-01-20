if (module.hot) {
    module.hot.accept();
}

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/App';

class Index extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);