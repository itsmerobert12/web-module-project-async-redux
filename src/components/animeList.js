import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AnimeList = (props) => {
    const [list, setList] = useState([])

    useEffect( () => {
        axios.get('https://anime-facts-rest-api.herokuapp.com/api/v1/ ')
        .then(res => {
          setList(res.data.data)
        })
        .catch(err => {
          console.error(err)
        })  
      },[])

    return(
        <div className="animeListContainer">
            {
                list.map(anime => {
                    return (
                        <div className="anime list" key={anime.anime_id}>
                            <h2>{anime.anime_name}</h2>
                            <Link to={`/anime/${anime.anime_name}`}>
                                <img src={anime.anime_img}/>
                            </Link>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default AnimeList; 