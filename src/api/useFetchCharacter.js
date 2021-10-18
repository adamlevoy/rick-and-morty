import { useState, useEffect } from 'react';

export const useFetchCharacter = ({
  type,
  id}) => {

  const [ data, setData] = useState({});
  const [ loading, setLoading ] = useState(true);
  const baseUrl = `https://rickandmortyapi.com/api/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}${type}/${id? id : ''}`);
        const data = await response.json();
        setData(data);

      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    fetchData();
  },[baseUrl, type, id]);

  return [ data, loading ];
}
