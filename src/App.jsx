import { Route } from 'wouter'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'

function App() {


  return (
    <>
     <Route path='/' component={Register}/>
     <Route path='/login'component={Login}/>

    </>
  )
}

export default App
