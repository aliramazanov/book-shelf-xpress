import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex items-center justify-center">
      <Link
        to={destination}
        className="bg-blue-500 hover:bg-violet-800 text-white px-6 py-3 rounded-lg"
      >
        <BsArrowLeft className="text-3xl" />
      </Link>
    </div>
  );
};

BackButton.propTypes = {
  destination: PropTypes.string,
};

export default BackButton;
