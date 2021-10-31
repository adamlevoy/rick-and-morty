import React, { useState }  from 'react';
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import CharacterPage from './components/CharacterPage';


function App() {
  const [ characterId, setCharacterId ] = useState(1);

  const increment = () => {
    setCharacterId((initial) => initial + 1);
  }

  const decrement = () => {
    setCharacterId((initial) => initial - 1);
  }

  return (
    <>
      <Header />
      <main>
        {/* <CharacterCard id={characterId}/> */}
        {/* <div className="buttonWrapper">
          <button onClick={decrement}>Previous</button>
          <button onClick={increment}>Next</button>
        </div> */}
        <CharacterPage />
      </main>
    </>
  );
}

export default App;
