const fetchFromITunes = searchedTerm => {
   return fetch(`https://itunes.apple.com/search?term=${searchedTerm}`)
        .then(response => {
            if(!response.ok) {
                throw new Error("Failed to fetch ITunes data")
            } else {
                return response.json();
            }
        });
}

export { fetchFromITunes }
