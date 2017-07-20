import { IHero } from './';

export interface IHeroes {
  readonly total: number;
  readonly first: string;
  readonly next: any;
  readonly previous: any;
  readonly last: string;
  readonly data: IHero[];
}
