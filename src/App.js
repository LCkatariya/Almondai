import React from 'react';
import Layout from './Component/Layout/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TermsCondition from './Component/Ui/Footer/terms'
import PrivacyPolicy from './Component/Ui/Footer/Privacy Policy';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Layout} />
        <Route path="/terms" component={TermsCondition} />
        <Route path="/privacy" component={PrivacyPolicy} />
      </Switch>
    </Router>
  );
}

export default App;
