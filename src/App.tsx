import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import HeroesContainer from './containers/heroesContainer';
import Layout from './components/Layout';

const App: React.SFC = () =>
  <Provider store={store}>
    <Layout>
      <HeroesContainer />
    </Layout>
  </Provider>;

export default App;
