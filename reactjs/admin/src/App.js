import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./views/pages/LoginPage";
import DefaultLayout from "./views/layouts/DefaultLayout";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/">
                    <DefaultLayout />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
