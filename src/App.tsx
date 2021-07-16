//Outter
import { Provider } from 'react-redux';

//Inner
import { store } from './state';
import { ArticlesList } from './components';

export function App() {
  return (
    <Provider store={store}>
      <ArticlesList />
    </Provider>
  );
}

//https://jsonplaceholder.typicode.com/
//Działanie: Na stronie głównej wyświetlamy listę artykułów z odnośnikiem do pełnej wersji. Artykuł zawiera pełny opis, listę komentarzy. Dodatkowo użytkownik ma możliwość dodania komentarza i artykułu do ulubionych.
