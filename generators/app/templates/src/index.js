<% if(info.useReact){ %>
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

const node = document.getElementById('app-node');

ReactDOM.render(
  <App/>, node
);
<%} else{ %>
document.write('My App...');
console.log('Working...');
<%}%>
