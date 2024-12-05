import { useState } from "react";

export default function SearchBar({ data }) {
  const [searchInput, setSearchInput] = useState("");

  const filteredData =
    data && data.length > 0
      ? data.filter((item) =>
          item.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      : [];

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div>
        {filteredData.map((post) => (
          <div className="post-card">
            <h2>Post ID: {post.userId}</h2>
            <h3>Title: {post.title}</h3>
            <p>Description: {post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
