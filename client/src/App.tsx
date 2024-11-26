import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import routes, { RouteConfig } from "./utils/routes";

function App() {
  const renderRoutes = (routes: RouteConfig[]) =>
    routes.map(({ path, element, children }) => (
      <Route key={path} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    ));

  return (
    <div className="p-4">
      <Header />
      <Routes>{renderRoutes(routes)}</Routes>
    </div>
  );
}

export default App;