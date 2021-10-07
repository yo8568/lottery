import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from '@/store';
import Layout from '@/layout';
import Home from '@/pages/Home';
import Participants from '@/pages/Participants';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/participants">
              <Participants />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
