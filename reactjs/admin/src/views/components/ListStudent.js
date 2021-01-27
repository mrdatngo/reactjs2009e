import React, { Component } from "react";
import { Table, Tag, Space, Input } from "antd";
import { connect } from "react-redux";
import { fetchStudentsAction } from "../../actions";

const { Search } = Input;

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
    state = {
        keyword: "",
        pageSize: 5,
        current: 1,
        total: 0,
    };
    componentDidMount() {
        // load student by api
        let { keyword, pageSize, current } = this.state;
        this.props.fetchStudentsAction({ keyword, pageSize, current });
    }

    onSearch = (value) => {
        console.log("value: ", value);
    };

    onPageChange = (current) => {
        let { keyword, pageSize } = this.state;
        this.props.fetchStudentsAction({ keyword, pageSize, current });
        this.setState({ current });
    };

    render() {
        let { list } = this.props;
        let { pageSize, current, total } = this.state;
        return (
            <>
                <Search
                    placeholder="input search text"
                    onSearch={this.onSearch}
                    style={{ width: 200 }}
                />
                <Table
                    loading={list.isLoading}
                    columns={columns}
                    dataSource={list.students}
                    pagination={{
                        pageSize,
                        current,
                        total: list.total,
                        onChange: this.onPageChange,
                    }}
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
