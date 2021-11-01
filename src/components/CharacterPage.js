import React, { useState } from 'react';
import { useFetchCharacter } from '../api/useFetchCharacter';
import styled from 'styled-components';
import Laser from '../laser-gun.png'

// styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Showcase = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem;
`;
const Card = styled.div`
  text-align: center;
  color: white;
  background: var(--dark);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.1),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.072),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.06),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.05),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.04),
    100px 100px 80px rgba(0, 0, 0, 0.028);

  &:hover {
    outline: 5px solid var(--pink);
  }
`;
const Name = styled.h3`
  margin-block: 1rem;
`;
const SearchBar = styled.input`
  text-align: center;
  font-family: 'Amatic SC', cursive, sans-serif;
  font-size: 20px;
`;
const Results = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: var(--blue);
`;
const PageToggle = styled.div `
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 20px;
  color: var(--dark);
  min-width: 150px;
  margin-block: 1rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center:
    align-items: center;
    text-align: center;
  }

  img {
    max-width: 55px;
    filter: drop-shadow(0 0 3px var(--dark));
  }

  .prev {
    transform: scaleX(-1);
  }
`;

// helpers
function randomNumber(max) {
  const num = Math.floor(Math.random() * max);
  return num;
};

const CharacterPage = () => {
  const [ inputValue, setInputValue ] = useState("");
  const [ query, setQuery ] = useState(null);
  const [ page, setPage ] = useState(randomNumber(35));

  const [ allCharacterData, allCharactersLoading ] = useFetchCharacter({
    type: 'character',
    query: query ? `name=${query}&` : "",
    page: page ? `page=${page}&` : ""
  });

  if(allCharactersLoading) return (
    <Showcase><h3>loading...</h3></Showcase>
  );

  if(allCharacterData.error) return(
    <Showcase><h3>No results for {query}. <span onClick={() => window.location.reload(false)}>Try again!</span></h3></Showcase>
  );

  return (
    <Wrapper>
      <form
        onSubmit={e => {
          e.preventDefault();
          setPage(1);
          setQuery(inputValue);
          }}>
      <SearchBar
        type="text"
        placeholder="search by name"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        />
      </form>
      <div>
        {query && <Results>{`Results: ${allCharacterData.info.count}`}</Results>}
      </div>
      <PageToggle>
      <div onClick={() => setPage((initial) => initial - 1)}>
        <img className="prev" src={Laser} alt="laser gun" />
        <span>PREV</span>
      </div>
      <div onClick={() => setPage((initial) => initial - 1)}>
        <img src={Laser} alt="laser gun" />
        <span>NEXT</span>
      </div>
      {/* <button className="prev" onClick={() => setPage((initial) => initial - 1)}>Prev</button>
      <button onClick={() => setPage((initial) => initial + 1)}>Next</button> */}
      </PageToggle>

      <Showcase>
        {allCharacterData.results.map((character) => {
          return (
            <Card key={character.id}>
              <img src={character.image} alt={character.name}/>
              <Name>{character.name}</Name>
            </Card>
          );
        })}
      </Showcase>
    </Wrapper>
  )
}

export default CharacterPage
