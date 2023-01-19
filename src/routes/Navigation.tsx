import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import {
  LazyPage1,
  LazyPage2,
  LazyPage3,
} from "../01-lazyload/components/pages/index";
import logo from "../logo.svg";
import { routes } from "../routes/routes";
import { Suspense } from "react";
export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map((route) => (
                <li key={route.path}>
                  <NavLink
                    key={route.to}
                    to={route.to}
                    activeClassName="nav-active"
                    exact
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route path={path} key={path}>
                {<Component />}
              </Route>
            ))}
          </Switch>
        </div>
      </Router>{" "}
    </Suspense>
  );
};
