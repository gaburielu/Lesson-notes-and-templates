import { useEffect, useState } from 'react';
import axios from 'axios';

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const apiUrl = 'https://ghibliapi.vercel.app/films';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setFilms(response.data);
      } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
      }
    };

    fetchData();
  }, []); // The empty dependency array means this effect runs once on component mount

  return (
    <div>
      <h1>Film List</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <h2>{film.title}</h2>
            <img src={film.image} alt={`${film.title} Poster`} style={{ maxWidth: '200px' }} />
            <p>{film.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;