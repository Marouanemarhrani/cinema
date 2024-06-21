import React, { useEffect, useState } from "react"
import './style/SearchView.css'

const SearchView = () => {

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

    useEffect(() => {
        get_movie()
    }, [])

    return(
        <div className="container-search">
            <input type="search" name="search" id="search-bar" placeholder="Search movie..."/>
            <button onClick={() => {get_movie()}}>Search</button>
            <div className="search-grid">
                {console.log(movies)}
                {
                    movies.length != 0 ?
                    get_movies_by_number(200).map(elem => 
                    <div>
                        <img src={elem["cover"]} alt={elem["title"]} />
                        <p>{elem["title"]}</p>
                    </div>
                ) : ""
                }
            </div>
        </div>
    )
}

export default SearchView