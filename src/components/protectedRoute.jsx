// filepath: e:\GitHub\E-Commerce-Project\src\components\protectedRoute.jsx
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { token, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <div>Loading...</div>; // Yüklenme durumunda bir yükleniyor mesajı gösterin
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
