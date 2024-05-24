import './App.css';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { ThemeProvider } from '@emotion/react';
import { theme } from './helpers';
import store from './store/store';
import { NewChatPage } from './pages/NewChatPage';
import { Home } from './pages/Home';
import { History } from './pages/History';

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-chat" element={<NewChatPage />} />
                {/* <Route path="/chat/:id" element={<History/>} /> */}
              </Routes>
            </Layout>
          </Router>
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
}

export default App;
