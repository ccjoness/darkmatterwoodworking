import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import TagManager from 'react-gtm-module';
import App from './App';

ReactGA.initialize('G-WDC00BWNFK');
const tagManagerArgs = {
  gtmId: 'G-WDC00BWNFK',
};
TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
