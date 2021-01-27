import React, { useState } from "react";
import { Form, Input, Button, Select, Typography } from "antd";
import { connect } from "react-redux";
import { addStudentAction } from "../../actions/students";

const { Text } = Typography;

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

function AddStudent({ addStudentAction, add }) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState(19);
    const [email, setEmail] = useState("");

    const onIdChange = (event) => {
        setId(event.target.value);
    };

    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const onAgeChange = (value) => {
        // setAge(event.target.value);
        setAge(Number(value));
    };

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const submit = () => {
        console.log("Send data to server:", id, name, age, email);
        addStudentAction({ id, name, age, email });
    };

    return (
        <>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
            >
                <Form.Item label="Id">
                    <Input value={id} onChange={onIdChange} />
                </Form.Item>
                <Form.Item label="Name">
                    <Input value={name} onChange={onNameChange} />
                </Form.Item>
                <Form.Item label="Age">
                    <Select onChange={onAgeChange} defaultValue={age}>
                        <Select.Option value="19">19</Select.Option>
                        <Select.Option value="20">20</Select.Option>
                        <Select.Option value="21">21</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Email">
                    <Input value={email} onChange={onEmailChange} />
                </Form.Item>
                {add.message && (
                    <Form.Item label="Error">
                        <Text type={add.success ? "success" : "danger"}>
                            {add.message}
                        </Text>
                    </Form.Item>
                )}
                <Form.Item {...tailLayout}>
                    <Button
                        loading={add.isLoading}
                        onClick={submit}
                        htmlType="submit"
                    >
                        Add student
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

function mapStateToProps(state) {
    return {
        add: state.students.add,
    };
}

export default connect(mapStateToProps, { addStudentAction })(AddStudent);
