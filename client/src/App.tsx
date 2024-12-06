import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import routes from "./utils/routes";
import { axiosSetup } from "./utils/axios";

function App() {
  axiosSetup()
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="p-4">
     {!isLoginPage && <Header />}
      <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      </Routes>
    </div>
  );
}

export default App;