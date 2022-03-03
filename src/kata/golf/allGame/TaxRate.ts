import { money, Money } from "./Money";

export class TaxRate {
  private readonly percent: number;

  private constructor(percent: number) {
    this.percent = percent;
  }

  public static taxRate(percent: number) {
    return new TaxRate(percent);
  }

  public apply(total: Money) {
    const amount: number = total.value * (this.percent / 100.0);
    const tax: Money = money(Math.trunc(amount), total.currency);
    return tax;
  }
}

export function taxRate(percent: number): TaxRate {
  return TaxRate.taxRate(percent);
}
