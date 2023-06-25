import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
    apiKey: "AIzaSyDAdJlSbYPvdgLrWUNofB9FzKQjyBc5o3I",
    authDomain: "system-park-da0d6.firebaseapp.com",
    projectId: "system-park-da0d6",
    storageBucket: "system-park-da0d6.appspot.com",
    messagingSenderId: "530535048372",
    appId: "1:530535048372:web:b669a870791e485e8d63e1",
    measurementId: "G-KQ5HM8S4MZ"
  };



// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<App />);

initializeApp(firebaseConfig);
// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
