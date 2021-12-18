import { useWalletManager } from '@metaphor-xyz/hooks';
import WalletConnectProvider from '@walletconnect/web3-provider';
import React, { useCallback, useEffect, createContext, useContext } from 'react';
import Web3Modal from 'web3modal';

export interface Props {
  infuraId?: string;
}

export interface Context {
  connect: () => void;
  connected: boolean;
}

const WalletSelectorContext = createContext<Context>(null!);

let web3Modal: Web3Modal | null = null;

export default function WalletSelectorProvider({ infuraId, children }: React.PropsWithChildren<Props>) {
  const { connectProvider, connected } = useWalletManager();

  useEffect(() => {
    web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId,
          },
        },
      },
    });
  }, []);

  const connect = useCallback(async () => {
    if (web3Modal) {
      const provider = await web3Modal.connect();
      connectProvider(provider);
    }
  }, []);

  return <WalletSelectorContext.Provider value={{ connect, connected }}>{children}</WalletSelectorContext.Provider>;
}

export function useWalletSelector() {
  const context = useContext(WalletSelectorContext);

  if (!context) {
    throw new Error('useWalletSelector must be used inside WalletSelectorProvider');
  }

  return context;
}
