import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { initializeApp } from 'firebase/app';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';


// ----------------------------------------------------------------------

export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDAdJlSbYPvdgLrWUNofB9FzKQjyBc5o3I",
    authDomain: "system-park-da0d6.firebaseapp.com",
    projectId: "system-park-da0d6",
    storageBucket: "system-park-da0d6.appspot.com",
    messagingSenderId: "530535048372",
    appId: "1:530535048372:web:b669a870791e485e8d63e1",
    measurementId: "G-KQ5HM8S4MZ"
  };
  initializeApp(firebaseConfig);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
