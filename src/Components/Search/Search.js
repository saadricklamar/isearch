import React from 'react';

const Search = (props) => {
    return(
        <input 
            type="text"
            placeholder="Search iTunes..." 
            onChange={props.grabUserInput}
        />
    )
} 

export default Search; 