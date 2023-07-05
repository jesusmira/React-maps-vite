import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context';
import { SearchResult } from '.';

export const SearchBar = () => {

  // This package contains type definitions for Node.js --> npm install --save @types/node
  const debounceRef = useRef<NodeJS.Timeout>();
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const onQueryChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    if( debounceRef.current )
      clearTimeout( debounceRef.current);

    debounceRef.current = setTimeout(() => {
      // todo: buscar o ejecutar 
      searchPlacesByTerm( event.target.value);
    }, 350);
  }

  return (
    <div className="search-container">
        <input 
            type="text" 
            className="form-control"
            placeholder="Buscar lugar..."
            onChange={ onQueryChange }
            />

        <SearchResult/>
    </div>
  )
}
