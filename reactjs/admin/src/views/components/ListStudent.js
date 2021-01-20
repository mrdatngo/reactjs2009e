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

class ListStudent extends Component {
    componentDidMount() {
        // load student by api
        this.props.fetchStudentsAction();
    }

    render() {
        let { list } = this.props;
        return (
            <>
                <Table
                    loading={list.isLoading}
                    columns={columns}
                    dataSource={list.students}
                />
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.students.list,
    };
}

export default connect(mapStateToProps, { fetchStudentsAction })(ListStudent);
