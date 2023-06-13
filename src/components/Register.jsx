import React from 'react'
import { Link } from 'wouter'

export default function Register() {

  function handleSubmit(e){
    e.preventDefault()
    const data = new FormData(e.target)
    const nombreUsuario = data.get('usuario').toString()
    const contraseña = data.get('contraseña').toString()
    const usuario = {
      nombreUsuario,
      contraseña
    }
    let usuarios = JSON.parse(sessionStorage.getItem('usuarios'))||[]
    const newUsuarios = [
      ...usuarios,
      usuario
    ]
    sessionStorage.setItem('usuarios',JSON.stringify(newUsuarios))
  }

  return (
    <div>
      <Link to='/login'>ir a login</Link>
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name='usuario' placeholder='usuario' />
        </div>
        <div>
          <input type="password" name='contraseña' placeholder='contraseña' />
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
      
    </div>
  )
}
