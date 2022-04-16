import illustration from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'

export function NewRoom(){
  return(
    <div id="page-auth">
      <aside>
        <img src={illustration} alt="" />
        <strong>Crie sua sala ao-vivo</strong>
        <p> Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="" />
          <h2>Criar uma nova sala</h2>
          
         
          <form action="">
            <input 
            type="text"
            placeholder="Nome da sala" 
            />
            <Button type="submit">Criar sala</Button>
            
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
} 