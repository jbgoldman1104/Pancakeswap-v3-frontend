import { ChainId, ERC20Token } from '@pancakeswap/sdk'

export const CAKE_MAINNET = new ERC20Token(
  ChainId.BSC,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const CAKE_TESTNET = new ERC20Token(
  ChainId.SCROLL_TESTNET,
  '0x6542F0f0831dCF256ceb1bd2b4E4A2C52bA3e707',
  18,
  'ZKH',
  'ZKHToken',
  'https://www.zprotocol.xyz/',
)

export const CAKE_ZKSYNC = new ERC20Token(
  ChainId.ZKSYNC_TESTNET,
  '0xbD424eDa9aE7fB38cF30b235Ff2bB31E2d55E1BF',
  18,
  'ZKH',
  'ZKHToken',
  'https://www.zprotocol.xyz/',
)

export const USDC_BSC = new ERC20Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_TESTNET = new ERC20Token(
  ChainId.SCROLL_TESTNET,
  '0x02a3e7E0480B668bD46b42852C58363F93e3bA5C',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
  'USDC',
  'USD Coin',
)

export const USDC_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDT_BSC = new ERC20Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_SCROLL_TESTNET = new ERC20Token(
  ChainId.SCROLL_TESTNET,
  '0x551197e6350936976DfFB66B2c3bb15DDB723250',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_ZKSYNC_TESTNET = new ERC20Token(
  ChainId.ZKSYNC_TESTNET,
  '0xfcEd12dEbc831D3a84931c63687C395837D42c2B',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)



export const BUSD_BSC = new ERC20Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_TESTNET = new ERC20Token(
  ChainId.SCROLL_TESTNET,
  '0xC72e15551717923a7a7A162F4771De96C6E6f546',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ZKSYNC_TESTNET = new ERC20Token(
  ChainId.ZKSYNC_TESTNET,
  '0x108F6704bEc2E7E57f35b9Bbd575CB20cBB45d8A',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_BSC,
}

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.SCROLL_TESTNET]: CAKE_TESTNET,
  [ChainId.ZKSYNC_TESTNET]: CAKE_ZKSYNC,
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.GOERLI]: USDC_GOERLI,
}

export const USDT = {
[ChainId.BSC]: USDT_BSC,
  [ChainId.ETHEREUM]: USDT_ETH,
  [ChainId.SCROLL_TESTNET]: USDT_SCROLL_TESTNET,
  [ChainId.ZKSYNC_TESTNET]: USDT_ZKSYNC_TESTNET,
}

export const WBTC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC',
)
