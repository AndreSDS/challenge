import React, { useRef, useState } from "react";
import Input from "../Input";

import { SearchBarContainer} from "./style";

function SearchBar() {
  const formSearch = useRef(null);
  const [searchText, setSearchText] = useState('');

  const updateText = (e) => {
    console.log("texto digitado ", e.target.value);
    setSearchText(e.target.value);
  }
  
  const submitSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (searchText && searchText !== '') {
      console.log("submitou ", searchText)
    }
  }

  return (
    <SearchBarContainer>
      <Input ref={formSearch} type="text" name="search-input" placeholder="Busque por algo" value={searchText} handleText={updateText} handleSubmit={submitSearch} />
    </SearchBarContainer>
  );
}

export default SearchBar;
