import Templet from "../components/Templet";

const Login = ({ setIsLoggedIn }) => {
  return (
    <Templet
      Title="Login to CodiPrax"
      Heading="Welcome Back!"
      Description="Login to access your account and continue your journey with us."
      FormType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Login;