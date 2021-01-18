import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./views/pages/LoginPage";
import DefaultLayout from "./views/layouts/DefaultLayout";
import PrivateRoute from "./views/router/PrivateRoute";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <PrivateRoute path="/">
                    <DefaultLayout />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App;
