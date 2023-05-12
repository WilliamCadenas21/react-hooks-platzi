import React, {
  useEffect,
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { REDUCER_ACTIONS } from "../config";
import Search from "./Search";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTIONS.ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const handleSearch = useCallback(() => {
    // when we have more than one input, we can use the ref to get the value of the input
    // setSearch(event.target.value);
    // Ref is a reference to an element in the DOM
    setSearch(searchInput.current.value);
  }, []);

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  const handleClick = (favorite) => {
    dispatch({ type: REDUCER_ACTIONS.ADD_TO_FAVORITE, payload: favorite });
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="character">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      {filteredUsers.map((character) => (
        <div className="item" key={character.id}>
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)}>
            {" "}
            Agregar a favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default Character;
