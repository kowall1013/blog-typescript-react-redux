//Outter
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Inner
import { store } from './state';
import { Start, Blog, Podcast, About } from './pages';
import { Header, Navigation } from './components';

export function App() {
  return (
    <Router>
      <Header>
        <Navigation />
      </Header>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/podcast">
            <Podcast />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

//https://jsonplaceholder.typicode.com/
//Działanie: Na stronie głównej wyświetlamy listę artykułów z odnośnikiem do pełnej wersji. Artykuł zawiera pełny opis, listę komentarzy. Dodatkowo użytkownik ma możliwość dodania komentarza i artykułu do ulubionych.
