import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from './helper'
import Protected from "./Protected";
import Login from "../pages/Authentication/Login";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard/index";
const Router = () => {


    return (
        <>
            <Routes>
                <Route path={routes.LOGIN} element={<Login />}> </Route>
                <Route element={<Protected />}>
                    <Route path={routes.SEARCH} element={<Home />}></Route>
                    <Route path={routes.DASHBOARD} element={<Dashboard />}></Route>
                </Route>

                {/* <Route path="*"></Route> */}
            </Routes>
        </>
    );
};
export default Router