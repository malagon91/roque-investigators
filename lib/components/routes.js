import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'components/Home'
import InvestigatorList from 'components/InvestigatorList'
import NotFound from 'components/NotFound'
import Login from 'components/login/Login'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/investigator" component={InvestigatorList}/>
      <Route path="/other" component={InvestigatorList}/>
      <Route path="/login" component={Login}/>
      <Route component={NotFound}/>
    </Switch>
  </main>
);

export default Main;