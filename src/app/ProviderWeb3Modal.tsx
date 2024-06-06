"use client"
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet, polygon,bsc,bscTestnet,polygonMumbai, polygonZkEvm, dogechain, bitTorrent,
   bitTorrentTestnet, opBNB, opBNBTestnet, aurora, auroraTestnet, avalanche, optimism, thunderTestnet,
   taraxaTestnet, base, linea, etherlinkTestnet, eos, 
   telos} from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'


const queryClient = new QueryClient()


const projectId = '7824584149521017fe0f255a57696ae8'


const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [arbitrum, mainnet, polygon,etherlinkTestnet,bsc,bscTestnet,polygonMumbai,
   polygonZkEvm, dogechain, bitTorrent, telos, bitTorrentTestnet, opBNB, opBNBTestnet,
    aurora, auroraTestnet, avalanche, optimism, thunderTestnet, taraxaTestnet, base, 
    linea, eos] as const
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,

})


createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, 
  enableOnramp: true 
})

export default function ProviderWeb3Modal({ children }:{children:ReactNode}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}