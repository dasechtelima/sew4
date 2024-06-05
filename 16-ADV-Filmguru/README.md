SEW | ADV | Filmguru

## User Story 1
*As a film enthusiast, I want to be able to search for films, so that I can choose the right one for my next weekend.*

### Acceptance Criteria
- An app for searching the Open Movie Database (http://www.omdbapi.com/) is available.
- A field for entering a search term is available.
- A search is only possible if the search term is longer than three characters. [Debounce](https://stackoverflow.com/a/53486112) the input.
- Once a string is entered in the search field, a search request to the API of the Open Movie Database is sent.
- The results are displayed as a list, showing the cover art, the title, and a description of the entry.


## User Story 2
*As a film enthusiast, I want to be able to only search for a certain type, so that I can reduce the amount of entries in my search results.*

### Acceptance Criteria
- A list of types is displayed.
- The following types are used: movie, series, or episode.
- For each type a radio button and the name of this type is displayed.
- Once a radio button is clicked, a parameter for the next request is set and a new request is performed.


## User Story 3
*As a film enthusiast, I want to see only a part of all entries, so that I will not get confused.*

### Acceptance Criteria
- The list of results is limited to 10 entries per page.
- If there are multiple result pages, navigating between the pages is possible.

