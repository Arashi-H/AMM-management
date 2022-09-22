
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Mainnet, Goerli, DAppProvider, Config } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

// Mainnet, Goerli, Kovan, Rinkeby, Ropsten, BSC, Cronos, xDai, Polygon, Moonriver, Moonbeam, Mumbai, OasisEmerald, Harmony, Theta, Palm, Fantom, Avalanche, Songbird,Velas

const config: Config = {
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: `https://goerli.infura.io/v3/`,
  },
  refresh: 'never'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	  <DAppProvider config={config}>
		<BrowserRouter basename="/amm">
		  <App />
		</BrowserRouter>
	  </DAppProvider>
  </React.StrictMode>
);

reportWebVitals();
