import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-[70%] border-separate border-spacing-2 m-auto">
      <thead>
        <tr>
          <th className="border-2 border-blue-500 rounded-xl text-blue-500 text-xl p-3">
            Title
          </th>
          <th className="border-2 border-blue-500 rounded-xl text-blue-500 text-xl p-3">
            Author
          </th>
          <th className="border-2 border-blue-500 rounded-xl text-blue-500 text-xl p-3">
            Year
          </th>
          <th className="border-2 border-blue-500 rounded-xl text-blue-500 text-xl p-3">
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id} className="h-8">
            <td className="border text-xl border-gray-500 rounded-xl text-center">
              {book.title}
            </td>
            <td className="border text-xl border-gray-500 rounded-xl text-center">
              {book.author}
            </td>
            <td className="border text-xl border-gray-500 rounded-xl text-center">
              {book.year}
            </td>
            <td className="border text-xl border-gray-500 rounded-xl text-center">
              <div className="flex justify-center gap-x-6 p-3">
                <Link to={`/books/details/${book.id}`}>
                  <BsInfoCircle className="text-2xl text-blue-600" />
                </Link>
                <Link to={`/books/edit/${book.id}`}>
                  <AiOutlineEdit className="text-2xl text-green-600" />
                </Link>
                <Link to={`/books/delete/${book.id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

BooksTable.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BooksTable;
