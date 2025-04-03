// import React, { useState } from "react";

// const XDictionary = () => {
//   const dictionary = [
//     { word: "React", meaning: "A JavaScript library for building user interfaces." },
//     { word: "Component", meaning: "A reusable building block in React." },
//     { word: "State", meaning: "An object that stores data for a component." }
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [definition, setDefinition] = useState("");

//   const handleSearch = () => {
//     const foundWord = dictionary.find(
//       (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
//     );
//     setDefinition(foundWord ? foundWord.meaning : "Word not found in the dictionary.");
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>XDictionary</h1>
//       <input
//         type="text"
//         placeholder="Enter a word..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <div>
//         {definition && (
//           definition === "Word not found in the dictionary." ? (
//             <p>Word not found in the dictionary.</p>
//           ) : (
//             <div>
//               <h3>Definition:</h3>
//               <p>{definition}</p>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default XDictionary;
import React, { useState } from "react";

const XDictionary = () => {
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    setDefinition(foundWord ? foundWord.meaning : "Word not found in the dictionary.");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>XDictionary</h1>
      <input
        type="text"
        placeholder="Enter a word to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", width: "300px", marginRight: "10px" }}
      />
      <button 
        onClick={handleSearch} 
        style={{ padding: "10px", fontSize: "16px" }}
      >
        Search
      </button>
      <div>
        {definition && (
          definition === "Word not found in the dictionary." ? (
            <p>Word not found in the dictionary.</p>
          ) : (
            <div>
              <h3>Definition:</h3>
              <p>{definition}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default XDictionary;
