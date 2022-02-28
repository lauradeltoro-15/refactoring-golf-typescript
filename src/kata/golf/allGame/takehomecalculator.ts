import { Incalculable } from "./incalculable";

export class Pair {
  public value: number;
  public currency: string;

  constructor(value: number, currency: string) {
    this.value = value;
    this.currency = currency;
  }
}

export class Takehomecalculator {
  private percent: number;

  constructor(percent: number) {
    this.percent = percent;
  }

  netAmount(
    first: Pair,
    ...rest: Pair[]
  ): Pair {
    const pairs: Array<Pair> = Array.from(rest);
    let total: Pair = first;

    for (let next of pairs) {
      if (next.currency != total.currency) {
        throw new Incalculable();
      }
    }

    for (const next of pairs) {
      total = new Pair(total.value + next.value, next.currency);
    }

    const amount: number = total.value * (this.percent / 100.0);
    const tax: Pair = new Pair(
      Math.trunc(amount),
      first.currency
    );

    if (total.currency != tax.currency) {
      throw new Incalculable();
    }
    return new Pair(total.value - tax.value, first.currency);
  }
}
