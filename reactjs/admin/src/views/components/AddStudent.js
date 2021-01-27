import React, { useState } from "react";
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from "antd";

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export default function AddStudent() {
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
                <Form.Item {...tailLayout}>
                    <Button onClick={submit} htmlType="submit">
                        Add student
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}
