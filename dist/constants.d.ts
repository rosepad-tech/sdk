import JSBI from 'jsbi';
import { Token } from './entities/token';
export declare type BigintIsh = JSBI | number | string;
export declare enum ChainId {
    OASIS_MAINNET = 26863,
    EMERALD_TESTNET = 42261
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "";
export declare const FACTORY_ADDRESS_MAP: Record<number, string>;
export declare const INIT_CODE_HASH = "0xadb8ced8622f5a41096bc3443794fdcb518f1f9d9aa5b5c98fa1f9bda862638b";
export declare const INIT_CODE_HASH_MAP: Record<number, string>;
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _9975: JSBI;
export declare const _10000: JSBI;
export declare const MaxUint256: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
export declare const WROSE: {
    26863: Token;
    42261: Token;
};
export declare const WNATIVE: Record<number, Token>;
export declare const NATIVE: Record<number, {
    name: string;
    symbol: string;
    decimals: number;
}>;
