import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import UserStateTest from './pages/use-state'
import UserEffectTest from './pages/use-effect-test'
const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/use-state" component={UserStateTest} />
      <Route exact path="/use-effect" component={UserEffectTest} />
    </Switch>
  )
}

export default Routers
