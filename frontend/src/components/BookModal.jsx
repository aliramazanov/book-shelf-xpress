import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[400px] max-w-full h-[300px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-4 text-4xl text-white bg-red-500 rounded-md cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit text-lg px-6 py-2 bg-blue-300 rounded-lg p-2">
          {book.year}
        </h2>
        <div className="flex text-lg justify-start items-center gap-x-2 mt-5">
          <PiBookOpenTextLight className="text-blue-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex text-lg justify-start items-center gap-x-2">
          <BiUserCircle className="text-blue-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          architecto explicabo facere? Quod veritatis natus, illo quasi eius
          vitae ducimus quas optio deserunt atque officia culpa et ad molestias
          labore.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
