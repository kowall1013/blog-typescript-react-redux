//Outter
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

//Inner
import { store } from './state';
import { Start, Blog, Podcast, About } from './pages';
import { Header, Navigation, Logo } from './components';

//Styles
import GlobalStyle from './App.css';
import { myTheme } from './utils/theme';

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
    </ThemeProvider>
  );
}

//https://jsonplaceholder.typicode.com/
//Działanie: Na stronie głównej wyświetlamy listę artykułów z odnośnikiem do pełnej wersji. Artykuł zawiera pełny opis, listę komentarzy. Dodatkowo użytkownik ma możliwość dodania komentarza i artykułu do ulubionych.
