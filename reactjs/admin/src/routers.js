import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";

let routers = [
    {
        name: "Dashboard",
        icon: <PieChartOutlined />,
        path: "/dashboard",
        component: <h3>Dashboard</h3>,
    },
    {
        name: "Option 2",
        icon: <PieChartOutlined />,
        path: "/option2",
        component: <h3>Option 2</h3>,
    },
    {
        name: "User",
        icon: <UserOutlined />,
        children: [
            {
                name: "Tom",
                icon: <FileOutlined />,
                path: "/user/tom",
                component: <h2>TOM</h2>,
            },
            {
                name: "Bill",
                icon: <FileOutlined />,
                path: "/user/bill",
                component: <h2>Bill</h2>,
            },
        ],
    },
];

export default routers;
