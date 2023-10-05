import React, { useEffect, useState } from "react";
import "./Search.css";

const Search = () => {
  const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Punithify/punithify.github.io/main/properties.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilterData(data);
      })
      .catch((err) => console.log(err));
  }, []); // Empty dependency array to run the effect only once

  const handleFilter = (value) => {
    const res = filterdata.filter((f) =>
      f.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(res);
  };

  return (
    <div className="form-control flex items-center gap-2">
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full"
          onChange={(e) => handleFilter(e.target.value)}
        />
        <button className="btn btn-ghost btn-circle absolute inset-y-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div style={{ position: "relative" }}>
        {data.length > 0 && (
          <div className="search-result">
            {data.map((d, i) => (
              <div key={i}>{d.name}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
