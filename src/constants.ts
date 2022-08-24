import JSBI from 'jsbi'
import { Token } from './entities/token'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  OASIS_MAINNET = 26863,
  EMERALD_TESTNET = 42261
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

export const FACTORY_ADDRESS = ''

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.OASIS_MAINNET]: FACTORY_ADDRESS,
  [ChainId.EMERALD_TESTNET]: '0xc33e9d33F36170dB24B2000f08bbab25cC8D627b'
}
export const INIT_CODE_HASH = '0xcc31b2afde0e74ef335d55d24e073c4dc47eb4ac71d4f021a227c56c5555a972'
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.OASIS_MAINNET]: INIT_CODE_HASH,
  [ChainId.EMERALD_TESTNET]: '0xcc31b2afde0e74ef335d55d24e073c4dc47eb4ac71d4f021a227c56c5555a972'
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
  [ChainId.OASIS_MAINNET]: new Token(
    ChainId.OASIS_MAINNET,
    '0x21C718C22D52d0F3a789b752D4c2fD5908a8A733',
    18,
    'WROSE',
    'Wrapped ROSE',
    'https://www.oasis.org'
  ),
  [ChainId.EMERALD_TESTNET]: new Token(
    ChainId.EMERALD_TESTNET,
    '0xFEa03d709361547E99CC927D3717ed96e94e32aC',
    18,
    'WROSE',
    'Wrapped ROSE',
    'https://www.oasis.org'
  )
}

export const WNATIVE: Record<number, Token> = {
  [ChainId.OASIS_MAINNET]: WROSE[ChainId.OASIS_MAINNET],
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
  [ChainId.OASIS_MAINNET]: {
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
