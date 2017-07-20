export interface IHero {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly health: number;
  readonly armour: number;
  readonly shield: number;
  readonly real_name: string;
  readonly age: number;
  readonly height?: any;
  readonly affiliation: string;
  readonly base_of_operations: string;
  readonly difficulty: number;
  readonly url: string;
}
