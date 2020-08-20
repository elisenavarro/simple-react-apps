import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamUpdate from './streams/StreamUpdate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' exact component={StreamCreate} />
            <Route path='/streams/update/:id' exact component={StreamUpdate} />
            <Route path='/streams/delete/:id' exact component={StreamDelete} />
            <Route path='/streams/show/:id' exact component={StreamShow} />
          </Switch>
        </div>
      </Router> 
    </div>
  );
};

export default App;