import React from 'react';
import ReactDOM from 'react-dom';
import props from './props';

ReactDOM.render(
    <props saludo="Oli" >
        Buenas
    </props>,
    document.getElementById('root')
);