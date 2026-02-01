import Templet from "../components/Templet";

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Templet
      Title="Create your account"
      Heading="Join CodiPrax"
      Description="Sign up to start learning, building, and sharing."
      FormType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Signup;