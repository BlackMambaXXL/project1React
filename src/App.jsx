import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import RoundedAvatar from './components/RoundedAvatar/RoundedAvatar'
import Skills from './components/Skills/Skills'

const isAdmin = false;

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <div>
        <RoundedAvatar isHidden url="https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/8bdb8bb0-ea35-4e03-ab8b-1c32e985acfb/300x450"/>
        <h2>Крутой Свинья</h2>
        {isAdmin === true ? <p>Вы администратор</p> : <p>Вы пользователь</p> }
        <Skills />
      </div>
      <Footer />
    </div>
  )
}

export default App
