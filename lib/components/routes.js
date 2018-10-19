import React from 'react'
import { Switch, Route,Redirect } from 'react-router-dom'
import Home from 'components/Home'
import InvestigatorList from 'components/InvestigatorList'
import NotFound from 'components/NotFound'
import Login from 'components/login/Login'
import Register from 'components/login/Register'
import Resume from 'components/Resume'
import ProfilePic from 'components/ProfilePic'
import AdminProfiles from 'components/AdminProfiles'
import AdminPanel from 'components/AdminPanel'
import ChangePassword from 'components/login/ChangePassword'
const isLoggedIn = () => {
  return sessionStorage.getItem('userInfo') == null
}

const isAdmin = () => {
  if (sessionStorage.getItem('userInfo') != null){
    const userLog = JSON.parse(sessionStorage.userInfo);
    return userLog.isAdmin == 1
  }else
    return false;
}

const requireAuth = (Comp) =>
  (
    isLoggedIn() ? (
      <Redirect to="/login"/>
    ) : (
      <Comp />
    )
  )

const requireAdmin = (Comp) =>
  (
    isAdmin() ? (
      <Comp/>
    ) : (
      <Redirect to="/notfound"/>
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
      <Route path="/restore" render={() => requireAuth(ChangePassword)}/>
      <Route path="/picture" render={() => requireAuth(ProfilePic)}/>
      <Route path="/admin" render={() => requireAdmin(AdminProfiles)}/>
      <Route path="/register" render={() => requireAdmin(Register)}/>
      <Route path="/config" render={() => requireAdmin(AdminPanel)}/>

      <Route component={NotFound}/>
    </Switch>
  </main>
);

export default Main;