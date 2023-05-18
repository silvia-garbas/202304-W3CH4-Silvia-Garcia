/* eslint-disable no-new */

import { Header } from './components/header';
import { SectionTitle } from './components/sectiontitle';
import { SeriesList } from './components/series.list';

new Header('.container', "Próximamente estreno de: 'No puedo con la vida'");
new SectionTitle('.container');

// eslint-disable-next-line no-new
new SeriesList('.container', "serie");


