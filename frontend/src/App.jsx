import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ShowBooks from "./pages/ShowBooks.jsx";
import EditBook from "./pages/EditBook.jsx";
import DeleteBook from "./pages/Deletebook.jsx";
import CreateBooks from "./pages/CreateBooks.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
