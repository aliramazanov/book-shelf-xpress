import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex items-center justify-center">
      <Link
        to={destination}
        className="bg-blue-500 hover:bg-violet-800 text-white px-8 py-1 rounded-lg "
      >
        <BsArrowLeft className="text-3xl" />
      </Link>
    </div>
  );
};

export default BackButton;
