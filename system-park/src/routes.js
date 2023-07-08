// import
import React, { Component }  from 'react';
import Dashboard from "../src/views/Dashboard/Dashboard";
import Tables from "../src/views/Dashboard/Tables.js";
import Billing from "../src/views/Dashboard/Billing.js";
import RTLPage from "../src/views/RTL/RTLPage.js";
import Profile from "../src/views/Dashboard/Profile.js";
import SignIn from "../src/views/Pages/SignIn.js";
import SignUp from "../src/views/Pages/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "../src/components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    rtlName: "لوحة القيادة",
    name: "Tables",
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    icon: <CreditIcon color='inherit' />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/rtl-support-page",
    name: "RTL",
    rtlName: "آرتيإل",
    icon: <SupportIcon color='inherit' />,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
  
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
  
        icon: <DocumentIcon color='inherit' />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
  
        icon: <RocketIcon color='inherit' />,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
