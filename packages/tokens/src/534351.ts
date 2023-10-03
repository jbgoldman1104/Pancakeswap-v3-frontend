import { ChainId, ERC20Token, WBNB, WETH9 } from '@pancakeswap/sdk'
import { BUSD_TESTNET, CAKE_TESTNET, USDT_SCROLL_TESTNET } from './common'

export const scrollTestnetTokens = {
  weth: WETH9[ChainId.SCROLL_TESTNET],
  cake: CAKE_TESTNET,
  busd: BUSD_TESTNET,
  usdc: new ERC20Token(
    ChainId.SCROLL_TESTNET,
    '0x02a3e7E0480B668bD46b42852C58363F93e3bA5C',
    18,
    'USDC',
    'USD Coin',
  ),
  gold: new ERC20Token(
    ChainId.SCROLL_TESTNET,
    '0x2F6D1FEF02c9cF2d1febF951a2110b325166BC4F',
    18,
    'GOLD',
    'Gold Token',
  ),
  syrup: new ERC20Token(
    ChainId.SCROLL_TESTNET,
    '0x81ddaED1A0f48fB9b72Cbb6D41B9A6C82c19541F',
    18,
    'ZST',
    'ZProtocol SyrupBar Token',
  ),
  zkh: new ERC20Token(
    ChainId.SCROLL_TESTNET,
    '0x64785543342904592be6A3eD0afa2f4036e81ae8',
    18,
    'ZKH',
    'ZProtocol Harvest',
  ),
  usdt: USDT_SCROLL_TESTNET,
}
