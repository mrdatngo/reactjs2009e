import React, { Component } from "react";
import { Table, Tag, Space } from "antd";
import { connect } from "react-redux";
import { fetchStudentsAction } from "../../actions";

const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Name",
        dataIndex: "last_name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Class",
        key: "class",
        dataIndex: "class",
        render: (tag) => (
            <>
                <Tag color={"green"} key={tag}>
                    {tag && tag.toUpperCase()}
                </Tag>
            </>
        ),
    },
    {
        title: "Action",
        key: "action",
        render: () => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        id: "RJ1",
        first_name: "Anh",
        last_name: "Tu",
        age: 20,
        class: "REACT2009E",
        email: "anhtu@gmail.com",
    },
    {
        id: "RJ2",
        first_name: "Huynh",
        last_name: "Minh Thang",
        age: 20,
        class: "REACT2009E",
        email: "thang@gmail.com",
    },
];

class ListStudent extends Component {
    componentDidMount() {
        // load student by api
        this.props.fetchStudentsAction();
    }

    render() {
        return (
            <>
                <Table columns={columns} dataSource={data} />
            </>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, { fetchStudentsAction })(ListStudent);
