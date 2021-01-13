import React, { Component } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { connect } from "react-redux";

import { loginAction } from "../../actions";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

class LoginPage extends Component {
    onFinish = (values) => {
        // console.log("Success:", values);
        // start action
        this.props.loginAction(values);
    };

    onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    render() {
        return (
            <Card
                title="Login"
                // extra={<a href="#">Forgot password</a>}
                style={{ width: 400, margin: "50px auto" }}
            >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                            // custom validator
                            {
                                validator: (_, value) => {
                                    if (value.length < 3) {
                                        return Promise.reject(
                                            "Username length must bigger than 3!"
                                        );
                                    }
                                    if (value.length > 24) {
                                        return Promise.reject(
                                            "Username length must smaller or equal than 24!"
                                        );
                                    }
                                    return Promise.resolve();
                                },
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <p style={{ textAlign: "center" }}>
                        <Typography.Text type="danger">
                            {this.props.errMessage}
                        </Typography.Text>
                    </p>

                    <Form.Item {...tailLayout}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={this.props.isLoading}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.auth.isLoading,
        errMessage: state.auth.errMessage,
    };
}

let ConnectLoginPage = connect(mapStateToProps, { loginAction })(LoginPage);

export default ConnectLoginPage;

// function mapDispatchToProp() {
//     return {
//         loginAction
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProp())(LoginPage);
