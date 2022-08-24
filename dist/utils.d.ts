import JSBI from 'jsbi';
import { BigintIsh, SolidityType } from './constants';
import { CurrencyAmount, Percent, Price, Currency } from '.';
export declare function validateSolidityTypeInstance(value: JSBI, solidityType: SolidityType): void;
export declare function validateAndParseAddress(address: string): string;
export declare function parseBigintIsh(bigintIsh: BigintIsh): JSBI;
export declare function sqrt(y: JSBI): JSBI;
export declare function sortedInsert<T>(items: T[], add: T, maxSize: number, comparator: (a: T, b: T) => number): T | null;
/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */
export declare function computePriceImpact<TBase extends Currency, TQuote extends Currency>(midPrice: Price<TBase, TQuote>, inputAmount: CurrencyAmount<TBase>, outputAmount: CurrencyAmount<TQuote>): Percent;
