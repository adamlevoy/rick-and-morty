import { useState, useEffect } from 'react';

export const useFetchCharacter = ({
  type,
  query,
  status
}) => {

  const [ data, setData] = useState({});
  const [ loading, setLoading ] = useState(true);
  const baseUrl = `https://rickandmortyapi.com/api/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}${type}/${query? query : ''}${status? status : ''}`);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    fetchData();
  },[ baseUrl, type, query, status ]);

  return [ data, loading ];
}
