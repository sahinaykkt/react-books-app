import React, { useState, useEffect } from "react";
import "../App.css";
import { API_URL } from "../API";
import axios from "axios";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Booklist() {
  const [books, setBooks] = useState([]);

  const { favorites, addToFavorites, removeFavorites } = useAppContext();

  const navigate = useNavigate();

  const favoritesChecker = function (id) {
    const boolean = favorites.some((book) => book.id === id);

    return boolean;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => {
        return (
          <div key={book.id} className="book">
            <h3 className="book-title">{book.title}</h3>
            <img className="book-image" src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)} />
            {favoritesChecker(book.id) ? (<button
                className="remove-from-favorites"
                onClick={() => removeFavorites(book.id)}>
                Remove from Favorites
              </button>) : 
              (<button
                className="add-to-favorites"
                onClick={() => addToFavorites(book)}>
                Add to Favorites
              </button>)}
          </div>
        );
      })}
    </div>
  );
}

export default Booklist;
