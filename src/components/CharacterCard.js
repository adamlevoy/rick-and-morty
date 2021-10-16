import React from 'react';
import { useFetchCharacter } from '../api/useFetchCharacter';
import styled from 'styled-components';

const CardWrapper = styled.article`
  display: flex;
  background-color: var(--dark);
  color: white;
  width: 600px;
  border-radius: 0.5rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  flex: 2 1 0%;
`;

const CharacterImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  padding: 0.75rem;
  flex: 3 1 0%;
`;

const Status = styled.span`
  display: flex;
  align-items: center;
`;

const StatusIcon = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  background: ${props => props.status === 'Alive' ? "var(--green)" : "var(--red)"};
`;


const CharacterCard = ({id}) => {
  const [ characterData, characterLoading ] = useFetchCharacter({id});

  if(characterLoading) return (
    <div className="characterCard_Wrapper">
      <h1>Loading...</h1>
    </div>
  )
  return (
    <CardWrapper>
        <ImgWrapper>
          <CharacterImg src={characterData.image} alt={characterData.name} />
        </ImgWrapper>
        <ContentWrapper>
          <h1>{characterData.name}</h1>
          <p>{characterData.species}</p>
          <Status>
            <StatusIcon status={characterData.status} />
            <span>{characterData.status}</span>
          </Status>
          <p>{characterData.location.name}</p>
        </ContentWrapper>
      </CardWrapper>
  )
}

export default CharacterCard;
