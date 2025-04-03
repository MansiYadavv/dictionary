import React, { useState } from "react";

const XDictionary = () => {
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState(null);

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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dictionary App</h1>
      <input
        data-testid="search-input"
        type="text"
        placeholder="Enter a word to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "12px", fontSize: "18px", width: "320px", marginRight: "10px" }}
      />
      <button
        data-testid="search-button"
        onClick={handleSearch}
        style={{ padding: "12px", fontSize: "18px" }}
      >
        Search
      </button>
      <div data-testid="definition-result" style={{ marginTop: "20px" }}>
        <h3>Definition:</h3>
        <p>{definition !== null ? definition : "Waiting for search..."}</p>
      </div>
    </div>
  );
};

export default XDictionary;