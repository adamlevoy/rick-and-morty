import React, { useState }  from 'react';
import CharacterCard from './components/CharacterCard';
import Rick from './rick.png'

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
      <img className="Rick-logo" src={Rick} alt="react logo" />
      <CharacterCard id={characterId}/>
      <div className="buttonWrapper">
        <button onClick={decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
    </main>
  );
}

export default App;
