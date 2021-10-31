import React from 'react';
import { useFetchCharacter } from '../api/useFetchCharacter';
import styled from 'styled-components';

const CardWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--dark);
  color: white;
  width: minmax(90%, 600px);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.1),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.072),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.06),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.05),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.04),
    100px 100px 80px rgba(0, 0, 0, 0.028);
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

const Section = styled.div`
  margin-block: 1rem;

  span {
    color: var(--grey);
  }
`

const CharacterCard = ({id}) => {
  const [ characterData, characterLoading ] = useFetchCharacter({
    type: 'character',
    id});

  if(characterLoading) return (
    <CardWrapper>
      <h1>Loading...</h1>
    </CardWrapper>
  )

  return (
    <CardWrapper>
        <ImgWrapper>
          <CharacterImg src={characterData.image} alt={characterData.name} />
        </ImgWrapper>
        <ContentWrapper>
          <h1>{characterData.name}</h1>

          <Status>
            <StatusIcon status={characterData.status} />
            <span>{`${characterData.status} - ${characterData.species}`}</span>
          </Status>
        <Section>
          <span>Origin:</span>
          <p>{characterData.origin.name}</p>
        </Section>
        <Section>
          <span>Last known location:</span>
          <p>{characterData.location.name}</p>
        </Section>
        <Section>
          <span>First seen on:</span>
          {/* <p>{firstEpisodeName}</p> */}
        </Section>
        </ContentWrapper>
      </CardWrapper>
  )
}

export default CharacterCard;
