import { getMockSerie } from '../data/series';
import { Serie } from '../models/series';
import { Component } from './component';

import {} from '../components/styles.css';
export class SeriesList extends Component {
  tasks: Serie[];
  constructor(selector: string, public title: string) {
    super(selector);
    this.tasks = getMockSerie();
    this.render();
    console.log(this.element);
    console.log(this.tasks);
  }

  render() {
    super.cleanHtml();
    this.template = this.createTemplate();
    const element = super.render();

    return element;
  }

  // TEMP HandleDelete(event: Event) {
  //   const element = event.target as HTMLElement;
  //   this.tasks = this.tasks.filter((item) => item.id !== element.dataset.id);
  //   console.log(this.tasks);
  //   this.render();
  // }

  createTemplate() {
    const list = this.tasks
      .map(
        (item) => `
          <li class="serie">
              <img class="serie__poster"
                src="${item.poster}"
                alt="${item.name} poster" />
              <h4 class="serie__title">${item.name}</h4>
              <p class="serie__info">${item.creator} (${item.year})</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete"></i>
            </li>`
      )
      .join('');

    return `<ul class="series-list">${list}</ul>`
  }
}
