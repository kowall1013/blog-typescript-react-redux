//Outter
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

//Inner
import { store } from './state';
import { Start, Favourite, Podcast, About } from './pages';
import { Header, Navigation, Logo } from './components';

//Styles
import GlobalStyle from './App.css';
import { myTheme } from './utils/theme';
import { ArticleDetails } from './pages/start/components/article/articleDetails';

export function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Router>
        <Header>
          <Logo />
          <Navigation />
        </Header>
        <Provider store={store}>
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>
            <Route exact path="/posts/:id">
              <ArticleDetails />
            </Route>
            <Route path="/favourite">
              <Favourite />
            </Route>
            <Route path="/podcast">
              <Podcast />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Provider>
      </Router>
    </ThemeProvider>
  );
}

//https://jsonplaceholder.typicode.com/
//Działanie: Na stronie głównej wyświetlamy listę artykułów z odnośnikiem do pełnej wersji. Artykuł zawiera pełny opis, listę komentarzy. Dodatkowo użytkownik ma możliwość dodania komentarza i artykułu do ulubionych.
