import PropTypes from "prop-types";

const Props = (props) => {
  return (
    <div>
      <p>Name: {props.name} </p>
      <p>Age: {props.age} </p>
      <p>isStudent: {props.isStudent ? "Yes" : "No"} </p>
    </div>
  );
};

Props.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Props.defaultProps = {
  name: "Karan",
  age: 20,
  isStudent: false,
};

export default Props;
