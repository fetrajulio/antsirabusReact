import { Switch, Route } from 'react-router';
import Login from './components/login/Login'
import { Suspense } from 'react';
const Routes2 = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact  path='/login' component={Login} />
                </Switch>
                <Switch>
                    <Route exact  path='/login2' component={Login} />
                </Switch>
        </Suspense>
    )
}

export default Routes2;