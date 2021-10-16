import React, { useState }  from 'react';
import CharacterCard from './components/CharacterCard';

function App() {
  const [ characterId, setCharacterId ] = useState(1);

  const increment = () => {
    setCharacterId((initial) => initial + 1);
  }

  const decrement = () => {
    setCharacterId((initial) => initial - 1);
  }

  return (
    <main>
      <CharacterCard id={characterId}/>
      <div className="buttonWrapper">
        <button onClick={decrement}>⬅️ Previous</button>
        <button onClick={increment}>Next ➡️</button>
      </div>
    </main>
  );
}

export default App;
