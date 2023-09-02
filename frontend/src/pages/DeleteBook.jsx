import React, { useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book has been deleted", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <BackButton />
      <h1 className="text-3xl my-8">Delete Book</h1>
      <div className="flex flex-col items-center border-2 border-red-800 rounded-2xl w-[300px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure?</h3>

        <button
          className="p-4 rounded-xl bg-red-800 hover:bg-red-500 text-white m-8 w-half"
          onClick={handleDeleteBook}
        >
          Yes, Delete It!
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
