import { Switch } from 'react-router-dom';
import PrivateRoute from './components/commons/private-route/Inedx2';
import Login from './components/login/Login'
import { Suspense } from 'react';
const Routes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <PrivateRoute
                    path="/creation_vente"
                    component={Login}
                    exact
                    />
                </Switch>
        </Suspense>
    )
}