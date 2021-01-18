import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import ListStudent from "./views/components/ListStudent";
import AddStudent from "./views/components/AddStudent";

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
        name: "Students",
        icon: <UserOutlined />,
        children: [
            {
                name: "Student List",
                icon: <FileOutlined />,
                path: "/student/list",
                component: <ListStudent />,
            },
            {
                name: "Add Student",
                icon: <FileOutlined />,
                path: "/student/add",
                component: <AddStudent />,
            },
        ],
    },
];

export default routers;
