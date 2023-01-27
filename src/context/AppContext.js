import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = function () {
    const context = useContext(AppContext);

    return context;
}

const AppContextProvider = function ({children}) {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = function (book) {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.concat(book);

        setFavorites(newFavorites);
    };

    const removeFavorites = function (id) {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.filter((book) => book.id !== id);

        setFavorites(newFavorites);
    };

    return (
        <AppContext.Provider value={{favorites, addToFavorites, removeFavorites}}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;