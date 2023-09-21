import { ChainId } from '@pancakeswap/sdk'

export const verifyBscNetwork = (chainId: number) => {
  return chainId === ChainId.BSC || chainId === ChainId.SCROLL_TESTNET || chainId === ChainId.ZKSYNC_TESTNET
}
