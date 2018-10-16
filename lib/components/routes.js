import React from 'react'
import { Switch, Route,Redirect } from 'react-router-dom'
import Home from 'components/Home'
import InvestigatorList from 'components/InvestigatorList'
import NotFound from 'components/NotFound'
import Login from 'components/login/Login'
import Resume from 'components/Resume'
import ProfilePic from 'components/ProfilePic'
import AdminProfiles from 'components/AdminProfiles';

const isLoggedIn = () => {
  return sessionStorage.getItem('userInfo') == null;
}

const requireAuth = (Comp) =>
  (
    isLoggedIn() ? (
      <Redirect to="/login"/>
    ) : (
      <Comp />
    )
  )
  const notLogin =(Comp) =>
  (
    isLoggedIn() ? (
      <Comp/> 
    ) : (
     <Redirect to="/resume"/>
    )
  )

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/investigator" component={InvestigatorList}/>
      <Route path="/other" component={InvestigatorList}/>
      <Route path="/login"  render={() => notLogin(Login)}/>
      <Route path="/resume" render={() => requireAuth(Resume)}/>
      <Route path="/picture" render={() => requireAuth(ProfilePic)}/>
      <Route path="/admin" render={() => requireAuth(AdminProfiles)}/>
      <Route component={NotFound}/>
    </Switch>
  </main>
);

export default Main;