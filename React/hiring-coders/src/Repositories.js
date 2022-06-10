import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export default function Repositories(){
    const [repositories, setRepositories] = useState([])

    useEffect(() => {

        let repositoriesName = localStorage.getItem('repositoriesName')

        repositoriesName = JSON.parse(repositoriesName)
        setRepositories(repositoriesName)
        //localStorage.clear()

    }, [])

    return(
        <>
            <h1>Repositórios</h1>
            {repositories.map(repository => {
                return( 
                    <li> {repository}</li>
                )
            })}

            <Link to='/'> Voltar</Link>
        </>
    )
}
