import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ConfigProvider appearance="light">
      <AdaptivityProvider>
        <AppRoot>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </Provider>
  // </React.StrictMode>,
)
