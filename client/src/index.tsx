// node_modules
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

// components
import App from 'App'

// styles
import 'index.css'

// redux
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);