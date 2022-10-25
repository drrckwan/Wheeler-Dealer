import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function loadSales(){
  const response = await fetch('http://localhost:8090/api/sales');
  if(response.ok){
    // code gets the data from the responses json method
    const data = await response.json();
    console.log('data', data);

    root.render(
      <React.StrictMode>
        <App sales={data.sales_record} />
      </React.StrictMode>
    );

  } else {
    console.error(response);
  }
}
loadSales();