import React from 'react';
import { useFetchCharacter } from '../api/useFetchCharacter';

const CharacterCard = ({id}) => {
  const [ characterData, characterLoading ] = useFetchCharacter({id});

  if(characterLoading) return (
    <div className="characterCard_Wrapper">
      <h1>Loading...</h1>
    </div>
  )
  return (
    <div className="characterCard_Wrapper">
        <div className="characterCard_ImageWrapper">
          <img className="characterImage" src={characterData.image} alt={characterData.name} />
        </div>
        <div className="characterCard_ContentWrapper">
          <h1>{characterData.name}</h1>
          <p>{characterData.species}</p>
          <span className="status">
          <span
            className="status-icon"
            style={characterData.status === 'Alive' ? {background: "var(--green)"} : {background: "var(--red)"}}
            ></span>
            <span>{characterData.status}</span>
          </span>
          <p>{characterData.location.name}</p>
        </div>
      </div>
  )
}

export default CharacterCard;
