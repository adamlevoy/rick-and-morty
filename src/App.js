import React, {}  from 'react';
import Header from './components/Header';
// import CharacterCard from './components/CharacterCard';
import CharacterPage from './components/CharacterPage';


function App() {
  // const [ characterId, setCharacterId ] = useState(1);

  // const increment = () => {
  //   setCharacterId((initial) => initial + 1);
  // }

  // const decrement = () => {
  //   setCharacterId((initial) => initial - 1);
  // }

  return (
    <>
      <Header />
      <main>
        <CharacterPage />
      </main>
    </>
  );
}

export default App;
