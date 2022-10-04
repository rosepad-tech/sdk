import JSBI from 'jsbi'
import { Token } from './entities/token'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  OASIS_MAINNET = 26863,
  EMERALD_TESTNET = 42261,
  EMERALD_MAINNET = 42262
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x8fA72dE7e5635188F0fbcA122C86D67Dd8429fF1'

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.EMERALD_MAINNET]: FACTORY_ADDRESS,
  [ChainId.EMERALD_TESTNET]: '0x69ef1662D9544b007D5B8FF827C86793D8F04E79'
}
export const INIT_CODE_HASH = '0xadb8ced8622f5a41096bc3443794fdcb518f1f9d9aa5b5c98fa1f9bda862638b'
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.EMERALD_MAINNET]: INIT_CODE_HASH,
  [ChainId.EMERALD_TESTNET]: '0xadb8ced8622f5a41096bc3443794fdcb518f1f9d9aa5b5c98fa1f9bda862638b'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _9975 = JSBI.BigInt(9975)
export const _10000 = JSBI.BigInt(10000)

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const WROSE = {
  [ChainId.EMERALD_MAINNET]: new Token(
    ChainId.EMERALD_MAINNET,
    '0x21C718C22D52d0F3a789b752D4c2fD5908a8A733',
    18,
    'WROSE',
    'Wrapped ROSE',
    'https://rose.io'
  ),
  [ChainId.EMERALD_TESTNET]: new Token(
    ChainId.EMERALD_TESTNET,
    '0x966be6f726C6D600Fd199aF3E6396cC4930cFbCC',
    18,
    'WROSE',
    'Wrapped ROSE',
    'https://rose.io'
  )
}

export const WNATIVE: Record<number, Token> = {
  [ChainId.EMERALD_MAINNET]: WROSE[ChainId.EMERALD_MAINNET],
  [ChainId.EMERALD_TESTNET]: WROSE[ChainId.EMERALD_TESTNET]
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.EMERALD_MAINNET]: {
    name: 'Oasis Network Native Token',
    symbol: 'ROSE',
    decimals: 18
  },
  [ChainId.EMERALD_TESTNET]: {
    name: 'Oasis Network Native Token',
    symbol: 'ROSE',
    decimals: 18
  }
}
