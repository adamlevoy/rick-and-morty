import { useState, useEffect } from 'react';

export const useFetchCharacter = ({id}) => {
  const [ data, setData] = useState({});
  const [ loading, setLoading ] = useState(true);

  const url = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    fetchData();
  },[url]);

  return [ data, loading ];
}
