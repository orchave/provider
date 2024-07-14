"use client";
import React from 'react'
import {
    DynamicContextProvider,
  } from "@dynamic-labs/sdk-react-core";
  import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
  import {
    createConfig,
    WagmiProvider,
  } from 'wagmi';
  import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
  import { http } from 'viem';
  import { filecoinCalibration } from 'viem/chains';
  
  import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const Provider = ({
    children
}: {
    children: React.ReactNode   
}) => {
    const config = createConfig({
      chains: [filecoinCalibration],
      multiInjectedProviderDiscovery: false,
      transports: {
        [filecoinCalibration.id]: http(),
      },
      });
        
      const queryClient = new QueryClient();

  return (
    <DynamicContextProvider
    settings={{
      environmentId: "bb090266-3639-4382-bf56-47fe1ce90f7a",
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <DynamicWagmiConnector >
            {children}
        </DynamicWagmiConnector>
      </QueryClientProvider>
    </WagmiProvider> 
  </DynamicContextProvider>
  )
}

export default Provider

