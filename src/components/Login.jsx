import React, { useState } from 'react'
import Confetti from 'react-confetti'
import { Link } from 'wouter'

export default function Login() {

  const [encontrado, setEncontrado] = useState()

  function handleLogin(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const nombreUsuario = data.get('usuario').toString()
    const contraseña = data.get('contraseña').toString()

    let usuarios = JSON.parse(sessionStorage.getItem('usuarios'))
    const existe = usuarios.some(e => e.nombreUsuario === nombreUsuario && e.contraseña === contraseña)

    if (existe) {
      setEncontrado(true)
    } else {
      setEncontrado(false)
    }
  }

  return (
    <div>
      <Link to='/'>ir a registro</Link>
      <h2>Formulario de Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input type="text" name='usuario' placeholder='usuario' />
        </div>
        <div>
          <input type="password" name='contraseña' placeholder='contraseña' />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
      {encontrado === true && <>
        <Confetti/>
        <h1>Correcto</h1>
      </>}
      {encontrado === false && <>
        <h1>Incorrecto</h1>
      </>}
      
    </div>
  )
}
