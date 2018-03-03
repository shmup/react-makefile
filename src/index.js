import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

console.log('git date', GIT_COMMIT_DATE);
console.log('git message', GIT_COMMIT_MESSAGE);
console.log('git rev', GIT_COMMIT_REV);

const container = document.getElementById('root');

ReactDOM.render(<App />, container);
