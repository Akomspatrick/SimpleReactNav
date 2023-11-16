import { ReactNode } from "react";
import { RouteType } from "./config";
import { Route } from "react-router-dom";

import  appRoutes  from "./appRoutes";  
import PageWrapper from "../components/layouts/PageWrapper";

const generateRoutes = (routes: RouteType[]): ReactNode => {
    return routes.map((route, index) => (
        route.index ? (
            <Route
                index
                path={route.path}
                element={<PageWrapper state={route.state}>
                    {route.element}
                </PageWrapper>}
             key={index}
            />
           ) : (
            <Route
                path={route.path}
                element={
                    <PageWrapper state={route.state ? undefined: route.state}>
                        {route.element}
                    </PageWrapper>
                }
                    key={index}
                >
                    {route.child && (
                        generateRoutes(route.child)
                )}
            </Route>
        )
    ));
};
export const routes: ReactNode = generateRoutes(appRoutes);
