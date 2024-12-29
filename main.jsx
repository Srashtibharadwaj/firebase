import React from 'react';  
import ReactDOM from 'react-dom/client';  
import App from './App.jsx';  
import './index.css';  

// You can wrap your rendering logic in an event listener or just make sure this runs after the DOM is ready  
document.addEventListener("DOMContentLoaded", () => {  
  ReactDOM.createRoot(document.getElementById('root')).render(  
    <React.StrictMode>  
      <App />  
    </React.StrictMode>,  
  );  
});