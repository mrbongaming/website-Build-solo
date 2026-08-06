function SearchBar(){
    return (
        <div className="flex items-center justify-center mt-4">
            <div className="flex w-150 rounded-lg border-2 shadow">
            <input type="text" placeholder="Search products..." className="flex-12 outline-none p-2"/>
            <div className="flex items-center justify-center flex-1">🔍</div>
            </div>
        </div>
    );
}

export default SearchBar;