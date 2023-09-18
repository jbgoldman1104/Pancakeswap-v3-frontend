import { ChainId } from '@pancakeswap/sdk'
import FarmsBscPriceHelper from './56'
import FarmsScrollTestnetPriceHelper from './534351'
import FarmsZKSyncTestnetPriceHelper from './280'
import FarmsEthereumPriceHelper from './1'
import FarmsGoerliPriceHelper from './5'

export const getFarmsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.BSC:
      return FarmsBscPriceHelper
    case ChainId.SCROLL_TESTNET:
      return FarmsScrollTestnetPriceHelper
    case ChainId.ZKSYNC_TESTNET:
      return FarmsZKSyncTestnetPriceHelper
    case ChainId.ETHEREUM:
      return FarmsEthereumPriceHelper
    case ChainId.GOERLI:
      return FarmsGoerliPriceHelper
    default:
      return []
  }
}
