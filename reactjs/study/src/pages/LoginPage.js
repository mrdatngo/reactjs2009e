import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import apis from "../apis";
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
        console.log("Success:", values);
        // apis.login(values);
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
                                    console.log("value");
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

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

export default LoginPage;
