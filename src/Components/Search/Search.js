import React from 'react';

const Search = (props) => {
    return(
        <form>
            <input 
                type="text"
                placeholder="Search iTunes..." 
                onChange={props.grabUserInput}
            />
            <button>
                {/* <i className="fas fa-search" /> */}
                Submit
            </button>
        </form>
    )
} 

export default Search; 