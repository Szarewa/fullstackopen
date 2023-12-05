const Search = ({ persons, handleSearch }) =>{
    return(
        <div>
            <input onChange={handleSearch} type="search" placeholder='Search...'/>
        </div>
    )
}

export default Search;