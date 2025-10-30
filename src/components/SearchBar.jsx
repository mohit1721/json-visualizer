import React, { useState } from "react";
import searchTree from "../utils/searchTree";

function SearchBar({ treeData, searchQuery, setSearchQuery, setSearchResult }) {
    const [status, setStatus] = useState("");

    const handleSearch = () => {
        const result = searchTree(treeData, searchQuery);
        if (result) {
            setSearchResult(result);
            setStatus("Match found");
        } else {
            setSearchResult(null);
            setStatus("No match found");
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by JSON path (e.g., $.user.address.city)"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <span>{status}</span>
        </div>
    );
}

export default SearchBar;
