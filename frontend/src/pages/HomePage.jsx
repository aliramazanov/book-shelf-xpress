import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import axios from "axios";

import BooksTable from "../components/BookTable.jsx";
import BooksCard from "../components/BooksCard.jsx";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-blue-500 hover:bg-violet-800 text-white px-10 py-3 rounded-2xl text-2xl"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-blue-500 hover:bg-violet-800 text-white px-10 py-3 rounded-2xl text-2xl"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl mt-8" text-center>
          List of the Books On the Shelf:
        </h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-blue-500 text-5xl m-5" />
        </Link>
      </div>
      {showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default HomePage;
