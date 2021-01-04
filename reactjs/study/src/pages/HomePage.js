import React from "react";
import { Layout, Menu, Result, Button } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";

import { Switch, Route, Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class HomePage extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    theme="dark"
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.onCollapse}
                >
                    {/* <div className="logo" /> */}
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                    >
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            <Link to="/option1">Option 1</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            <Link to="/option2">Option 2</Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            icon={<UserOutlined />}
                            title="User"
                        >
                            <Menu.Item key="3">
                                <Link to="/tom">Tom</Link>
                            </Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            icon={<TeamOutlined />}
                            title="Team"
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    />
                    <Content style={{ margin: "0 16px" }}>
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, minHeight: 360 }}
                        >
                            <Switch>
                                <Route path="/option1">Option1</Route>
                                <Route path="/option2">Option2</Route>
                                <Route path="/tom">Tom</Route>
                                <Route path="/">
                                    <Result
                                        status="404"
                                        title="404"
                                        subTitle="Sorry, the page you visited does not exist."
                                        extra={
                                            <Button type="primary">
                                                Back Home
                                            </Button>
                                        }
                                    />
                                </Route>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by MrDat
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default HomePage;
