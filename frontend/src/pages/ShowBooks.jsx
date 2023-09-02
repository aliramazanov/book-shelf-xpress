import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8 flex items-center justify-center flex-col">
      <BackButton />
      <h1 className="text-5xl my-8 text-blue-500"> Book Details:</h1>

      <div className="flex flex-col border-2 border-gray rounded-xl w-fit p-10">
        <div className="my-4">
          <span className="text-3xl mr-4 text-black font-semibold">Title:</span>
          <span className="text-2xl">{book.title}</span>
        </div>
        <div className="my-4">
          <span className="text-3xl mr-4 text-black font-semibold">
            Author:
          </span>
          <span className="text-2xl">{book.author}</span>
        </div>
        <div className="my-4">
          <span className="text-3xl mr-4 text-black font-semibold">
            Publish Year:
          </span>
          <span className="text-2xl">{book.year}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
