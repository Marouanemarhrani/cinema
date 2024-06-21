import React, { useEffect, useState } from "react";
import './style/cinemas.css'
import CineReservation from "./CineReservation";

const Cinemas = () => {

    const [cinemas, setCinemas] = useState([])
    const [favorite, setFavorite] = useState([])
    const [favoriteId, setFavoriteId] = useState([])
    const [modal , setModal] = useState(false)
    const [actual, setActual] = useState("")
    const user_id = "666d9c99c812abef0ed55f78"

    const change_modal = (cinema_id) =>{
        if(cinema_id == ""){
            setActual("")
        }
        else{
            setActual(cinema_id)
        }
        setModal(!modal)

    }

    const get_cinemas = async () => {
        let data = []
        const url = "http://localhost:8000/api/cinemas"
        const fetcher = await fetch(url)
        const json = await fetcher.json()
        for(let e = 0 ; e != json.length; e++){
            data.push(json[e])
        }

        setCinemas(data)

    }

    const get_favorite = async () => {
        let data = []
        const url = "http://localhost:8000/api/favorite"
        const fetcher = await fetch(url)
        const json = await fetcher.json()
        for(let e = 0; e != json.length; e++){
            data.push(json[e])
        }

        setFavorite(data)
    }

    const get_favorite_cinema = () => {
        let response = []
        for(let e = 0; e != favorite.length; e++){
            let in_res = false
            for(let i = 0; i != response.length; i++){
                if(response[i]["id"] == favorite[e]["cinema"]){
                    response[i]["number"] += 1
                    in_res = true
                    break
                }
            }
            if(in_res == false){
                response.push({"id" : favorite[e]["cinema"] , "number" : 1})
            }
        }

        response.sort((a, b) => b.number - a.number);

        console.log(response)
        return [response[0] , response[1], response[2]]
    }

    const cinema_by_id = (id) => {
        for(let e = 0; e != cinemas.length; e++){
            if(cinemas[e]["_id"] == id){
                return cinemas[e]["name"]
            }
        }
    }

    const get_favorite_id = () =>{
        let response = []
        for(let e = 0; e != favorite.length; e++){
            if(favorite[e]["user"] == user_id){
                response.push(favorite[e]["cinema"])
            }
        }

        setFavoriteId(response)
    }

    useEffect(() => {
        get_cinemas()
        get_favorite()
    }, [])
    useEffect(() => {
        get_favorite_id()
        console.log("FAVORITE ----------------------")
        console.log(favoriteId)
    }, [favorite])

    return( 
        <div className="container-cinemas">
            <h2>Les cinémas favories</h2>
            {favorite.length == 0 ? "" : get_favorite_cinema().map((elem) => {
                return(
                    <div>
                        <p>{cinema_by_id(elem["id"])}</p>
                    </div>
                )
            })}
            {cinemas.length == 0 ? "" : cinemas.map((elem) => {
                return(
                    <div className="cinema-card">
                        <h2 style={{cursor: "pointer"}} onClick={() => {change_modal(elem["_id"])}}>{elem["name"]}</h2>
                        <form action="http://localhost:8000/api/favorite" method="POST">
                            <input type="hidden" name="user" value={user_id}  />
                            <input type="hidden" name="cinema" value={elem["_id"]} />
                            {favoriteId.includes(elem["_id"]) ?<button type={`submit`} className="favorite" disabled>Favorite</button> : <button type={`submit`} className="not_fav">Add Favorite</button> }
                            
                        </form>
                    </div>
                )
            })}
            {
                modal ? <div><p onClick={() => {change_modal("")}} className="close_modal">X</p><CineReservation user={user_id} cinema_id={actual} /></div> : <div style={{display: "none"}}></div>
            }
            {console.log(favorite)}
            {console.log(cinemas)}
        </div>
    )   
}

export default Cinemas