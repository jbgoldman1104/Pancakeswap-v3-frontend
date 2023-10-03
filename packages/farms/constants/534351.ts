import { scrollTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   * Goldman Todo
   */
  {
    pid: 0,
    lpSymbol: 'ZTK',
    lpAddress: '0x6542F0f0831dCF256ceb1bd2b4E4A2C52bA3e707',
    token: scrollTestnetTokens.syrup,
    quoteToken: scrollTestnetTokens.weth,
  },
  {
    pid: 1,
    lpSymbol: 'ZTK-ETH LP',
    lpAddress: '0xf3efe666bBa17ea547Cb856BfFfAB4b0af6bDf96',
    token: scrollTestnetTokens.cake,
    quoteToken: scrollTestnetTokens.weth,
  },

  {
    pid: 2,
    lpSymbol: 'ZKH-ETH LP',
    lpAddress: '0x5B17951be7e9388e034bf56a111577e79A546e1C',
    token: scrollTestnetTokens.zkh,
    quoteToken: scrollTestnetTokens.weth,
  },
  {
    pid: 3,
    lpSymbol: 'GOLD-ZKH LP',
    lpAddress: '0x3244BA514FEe2F28Ce5F3E86fbaE7bD1c28e1B7e',
    token: scrollTestnetTokens.gold,
    quoteToken: scrollTestnetTokens.zkh,
  },
  
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
