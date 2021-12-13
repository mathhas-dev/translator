import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { useRestrito } from 'utils'
import { Redirect } from 'react-router-dom'
import { userStore } from 'stores'

const User = React.lazy(() => import('modulos/User'))

const Routes = props => {
  const forceLogin = useRestrito()
  const location = useLocation();

  if (forceLogin) {
    userStore.redirect_after_login = location.pathname;
    return <Redirect to='/login' />
  }

  return (
    <Switch>

      <Route
        path='/'
        component={User}
      />

    </Switch>
  )
}

export default Routes
