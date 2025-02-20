import {Takehomecalculator} from "./takehomecalculator";
import { Money } from "./Money";

describe('TakeHomeCalculator', () => {
    it("can calculate tax", () => {
        const first: number = new Takehomecalculator(10).netAmount(new Money(40, "GBP"), new Money(50, "GBP"), new Money(60, "GBP")).value;
        expect(Math.trunc(first)).toBe(135)
    })

    it("cannot sum different currencies", () => {
        expect(() => new Takehomecalculator(10).netAmount(new Money(4, "GBP"), new Money(5, "USD"))).toThrow()
    })
})