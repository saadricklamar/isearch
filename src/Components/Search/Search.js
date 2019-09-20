import React from 'react';

const Search = (props) => {
    return(
        <form>
            <input 
                type="text"
                placeholder="Search iTunes..." 
                onChange={props.grabUserInput}
            />
            <button onClick={props.fetchItunes}>Submit</button>
        </form>
    )
} 

export default Search; 