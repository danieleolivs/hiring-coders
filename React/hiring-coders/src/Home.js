import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [erro, setErro] = useState(false)

  function handlePesquisa(){

    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
        const repositories = response.data
        const repositoriesName = []

        repositories.map((repository) => {
            repositoriesName.push(repository.name)
        })
        
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
        navigate('/repositories')
        
    })
    .catch(err => {
        setErro(true)
    })

  }

  return (
    <>
      <input  name='usuario' id='usuario' className='usuarioInput' placeholder='Usuário' value={usuario} onChange={ e => setUsuario(e.target.value)}/>

      <button type='button' onClick={handlePesquisa}>Pesquisar</button>
      
      {erro ? alert('Ocorreu um erro. Tente novamente!') : ''}
    </>
  );
}

export default App;