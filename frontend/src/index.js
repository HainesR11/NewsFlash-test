import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Navigation from "./components/Navigation"

const App = () => {
  return(
    <Navigation/>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
