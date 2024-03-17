import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <ConfigProvider appearance="light">
    <AdaptivityProvider>
      <AppRoot>
        <App />
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>
  // </React.StrictMode>,
)
