import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './cartApp/App1.jsx'
// import "./index.css"


import { Provider } from 'react-redux'
import store from './cartApp/App/store.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App2 from './axiosredux/App2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
  <App/>
  </Provider>,
)
