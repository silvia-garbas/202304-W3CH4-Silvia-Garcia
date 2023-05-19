/* eslint-disable no-unused-vars */
export type SeriesStructure = {
  id: string;
  name: string;
  creator: string;
  year: number;
  poster: string;
  Iswatched: boolean;
  score: number;
  emmies: number;
};

export class Serie implements SeriesStructure {
  static generateID() {
    return Math.trunc(Math.random() * 1_000_000_000_000).toString();
  }

  id: string;
  Iswatched: boolean;
  score: number;
  // eslint-disable-next-line max-params
  constructor(
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public emmies: number
  ) {
    this.id = Serie.generateID();
    this.Iswatched = false;
    this.score = 0;
  }
}
