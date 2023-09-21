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
  usdt: USDT_SCROLL_TESTNET,
}
