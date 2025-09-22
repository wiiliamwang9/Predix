import { createConfig } from 'wagmi';
import { mainnet, arbitrum, optimism, polygon } from 'wagmi/chains';
import { http } from 'viem';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
  coinbaseWallet
} from '@rainbow-me/rainbowkit/wallets';

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID || 'demo_project_id';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [
        metaMaskWallet,
        rainbowWallet,
        walletConnectWallet,
        coinbaseWallet,
        injectedWallet
      ]
    }
  ],
  {
    appName: 'Predix Markets',
    projectId
  }
);

export const config = createConfig({
  connectors,
  chains: [mainnet, arbitrum, optimism, polygon],
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http()
  }
});

export const SUPPORTED_CHAINS = [mainnet, arbitrum, optimism, polygon];