import React, { useState } from "react";
import './dictionary.css';
const XDictionary = () => {
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setDefinition("Word not found in the dictionary.");
      return;
    }

    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    setDefinition(foundWord ? foundWord.meaning : "Word not found in the dictionary.");
  };

  return (
    <div className="container">
      <h1>Dictionary App</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="definition-box">
        <strong>Definition:</strong> <span>{definition}</span>
      </div>
    </div>
  );
};

export default XDictionary;
