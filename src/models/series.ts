export type SeriesStructure = {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
};

export class Serie implements SeriesStructure {
  static createId = 1;
  static generateID() {
    return this.createId++;
  }

  id: number;
  watched: boolean;
  score: number;
  constructor(
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public emmies: number
  ) {
    this.id = Serie.generateID();
    this.watched = false;
    this.score = 0;
  }
}
