import React, { useEffect, useState } from "react";
import './style/cinemas.css'

const CineReservation = ({user, cinema_id}) => {

    const [movies, setMovies] = useState([])

    const get_movies_by_number = (number) => {
        let data = []
        for(let e = 0; e != number; e++){
            data.push(movies[e])
        }
        return data
    }

    const get_movie = async () => {
        let data = []
        let url = "http://localhost:8000/api/movies"
        let fetcher = await fetch(url)
        let json_data = await fetcher.json()
        
        for(let e = 0; e != json_data.length; e++){
            data.push(json_data[e])
        }
        setMovies(data)
        console.log(movies)
    }

    useEffect(() => {get_movie()}, [])

    return(
        <div className="container-reservation">
            {movies.length == 0 ? "" : get_movies_by_number(10).map((elem) => {
                return(
                    <div className="card-reservation">
                        <img src={elem["cover"]} alt="" />
                        <p>{elem["description"]}</p>
                        <form className="reservation-form" action="http://localhost:8000/api/reservations" method="POST">
                            <input type="hidden" name="user" value={user} />
                            <input type="hidden" name="cinema" value={cinema_id} />
                            <input type="hidden" name="movie" value={elem["_id"]} />
                            <input type="hidden" name="date" value={new Date().toJSON().slice(0,10).replace(/-/g,'/')} />
                            <input type="hidden" name="seats" value={300} />
                            <input type="hidden" name="price" value={7} />
                            <button type="submit">Réserver</button>
                        </form>
                    </div>
                )
            })}
        </div>
    )
}

export default CineReservation