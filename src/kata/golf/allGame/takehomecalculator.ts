import { taxRate, TaxRate } from "./TaxRate";
import { Incalculable } from "./incalculable";
import { money, Money } from "./Money";

export class Takehomecalculator {
  private readonly taxRate: TaxRate;

  constructor(percent: number) {
    this.taxRate = taxRate(percent);
  }

  netAmount(first: Money, ...rest: Money[]): Money {
    const total: Money = rest.reduce(
      (previousValue, currentValue) => previousValue.plus(currentValue),
      first
    );
    const tax: Money = this.taxRate.apply(total);
    return total.minus(tax);
  }
}
