import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, isLoggedIn, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => {
                return !isLoggedIn ? <Redirect to="/login" /> : children;
            }}
        />
    );
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
}

export default connect(mapStateToProps)(PrivateRoute);
