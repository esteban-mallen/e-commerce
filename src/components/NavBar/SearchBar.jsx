import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("search") || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = query.trim();
        if (trimmed) {
            navigate(`/?search=${encodeURIComponent(trimmed)}`);
        } else {
            navigate("/");
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit} role="search">
            <input
                className="search-input"
                type="search"
                placeholder="Search flowers..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search products"
            />
            <button className="search-button" type="submit" aria-label="Submit search">
                &#128269;
            </button>
        </form>
    );
};

export default SearchBar;
