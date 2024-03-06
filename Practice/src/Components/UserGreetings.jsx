import PropTypes from "prop-types";

const UserGreetings = (props) => {
  const WelcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username} </h2>
  );
  const LoginPrompt = (
    <h2 className="login-message">Please Login to continue </h2>
  );

  return props.isLoggedIn ? WelcomeMessage : LoginPrompt;
};

UserGreetings.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreetings.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreetings;
