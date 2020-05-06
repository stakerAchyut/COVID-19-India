import DashboardScreen from "../Screens/DashboardScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignupScreen from "../Screens/SignupScreen";
import Home from "../Screens/Home";

export const routes = [
    {
        isExact: false,
        path: "/login",
        component: LoginScreen
    },
    {
        isExact: false,
        path: "/signup",
        component: SignupScreen
    },
    {
        isExact: false,
        path: "/dashboard",
        component: DashboardScreen
    },
    {
        isExact: false,
        path: "/",
        component: Home
    },
]