import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const bscProvider = new StaticJsonRpcProvider(
  {
    url: 'https://nodes.pancakeswap.info',
    skipFetchSetup: true,
  },
  56,
)

export const bscTestnetProvider = new StaticJsonRpcProvider(
  {
    url: 'https://bsc-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
    skipFetchSetup: true,
  },
  97,
)

/** Goldman */
export const scrollTestnetProvider = new StaticJsonRpcProvider(
  {
    url: 'https://sepolia-rpc.scroll.io',
    skipFetchSetup: true,
  },
  534351,
)

export const zksyncTestnetProvider = new StaticJsonRpcProvider(
  {
    url: "https://testnet.era.zksync.dev",
    skipFetchSetup: true,
  },
  280,
)


export const goerliProvider = new StaticJsonRpcProvider(
  {
    url: 'https://eth-goerli.nodereal.io/v1/8a4432e42df94dcca2814fde8aea2a2e',
    skipFetchSetup: true,
  },
  5,
)
