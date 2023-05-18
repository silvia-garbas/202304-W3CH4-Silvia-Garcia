/* eslint-disable no-new */

import { Header } from './components/header';
import { SectionTitle } from './components/sectiontitle';
import { SeriesList } from './components/series.list';

new Header(
  '.container',
  "Ya disponible la premier de: 'Me ha faltado tiempo O_o'"
);
new SectionTitle('.container');

// eslint-disable-next-line no-new
new SeriesList('.container', 'serie');
