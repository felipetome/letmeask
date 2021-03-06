 import {  useNavigate } from 'react-router-dom'
 import illustration from '../assets/images/illustration.svg'
 import logoImg from '../assets/images/logo.svg'
 import googleIconImg from '../assets/images/google-icon.svg'
 import { Button } from '../components/Button'
 import { useAuth } from '../hooks/UseAuth'
 import '../styles/auth.scss'
 
export function Home(){
  const history = useNavigate();
  const { user, signInWithGoogle} = useAuth()
 

  async function handleCreateRoom(){

    if(!user){
      await signInWithGoogle();
    }

    history('/rooms/new')
  }
  
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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form action="">
            <input 
            type="text"
            placeholder="Digite o código da sala" 
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
} 