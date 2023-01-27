import React from "react";
import "../App.css";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const { favorites, addToFavorites, removeFavorites } = useAppContext();

  const navigate = useNavigate();

  const favoritesChecker = function (id) {
    const boolean = favorites.some((book) => book.id === id);

    return boolean;
  };

  return (
    <div>
      {favorites.length > 0 ? (
        favorites.map((book) => {
          return (
            <div key={book.id} className="book">
              <h3 className="book-title">{book.title}</h3>
              <img className="book-image" src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)} />
              {favoritesChecker(book.id) ? (
                <button
                  className="remove-from-favorites"
                  onClick={() => removeFavorites(book.id)}
                >
                  Remove from Favorites
                </button>
              ) : (
                <button
                  className="add-to-favorites"
                  onClick={() => addToFavorites(book)}
                >
                  Add to Favorites
                </button>
              )}
            </div>
          );
        })
      ) : (
        <h1>You don't have favorite book</h1>
      )}
    </div>
  );
}

export default Favorites;
