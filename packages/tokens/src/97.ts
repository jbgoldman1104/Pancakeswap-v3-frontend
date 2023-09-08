import { ChainId, ERC20Token, WBNB } from '@pancakeswap/sdk'
import { BUSD_TESTNET, CAKE_TESTNET } from './common'

export const bscTestnetTokens = {
  wbnb: WBNB[ChainId.BSC_TESTNET],
  cake: CAKE_TESTNET,
  busd: BUSD_TESTNET,
  usdc: new ERC20Token(
    ChainId.BSC_TESTNET,
    '0x02a3e7E0480B668bD46b42852C58363F93e3bA5C',
    18,
    'USDC',
    'USD Coin',
  ),
  usdt: new ERC20Token(ChainId.BSC_TESTNET, '0x551197e6350936976DfFB66B2c3bb15DDB723250', 18, 'USDT', 'Tether USD'),
}
