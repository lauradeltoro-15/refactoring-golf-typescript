import { Incalculable } from "./incalculable";


export class Money {
  public value: number;
  public currency: string;

  constructor(value: number, currency: string) {
    this.value = value;
    this.currency = currency;
  }
  plus(next: Money) {
    if (next.currency != this.currency) {
      throw new Incalculable();
    }
    return money(this.value + next.value, next.currency);
  }
  minus(next: Money) {
    if (next.currency != this.currency) {
      throw new Incalculable();
    }
    return money(this.value - next.value, next.currency);
  }

  static money(value: number, currency: string) {
    return new Money(value, currency);
  }
}

export function money(value: number, currency: string): Money {
  return Money.money(value, currency);
}