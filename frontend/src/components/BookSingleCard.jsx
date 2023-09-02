import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      onClick={() => setShowModal(true)}
      className="flex flex-col border-2 border-gray rounded-lg px-8 py-4 m-4 relative hover:shadow-xl cursor-pointer"
    >
      <h2 className="absolute text-xl top-2 right-3 px-4 py-1 bg-blue-300 rounded-md">
        {book.year}
      </h2>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-blue-300 mt-10  text-2xl" />
        <h2 className="mt-10 my-1 text-xl ">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-blue-300 text-2xl" />
        <h2 className="my-1 text-xl">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-blue-600" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-green-600" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
