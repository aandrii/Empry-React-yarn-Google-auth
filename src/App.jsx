import React from 'react';

import './style/style.less'

class App extends React.Component {
    render() {
        const name = 'Andrii';
        return (
            <div className='App'>
                <nav>
                    Hello react. App.jsx is working Go { console.log(`${name}`)}
                </nav>
            </div>
        );
    }
};

export default App;
