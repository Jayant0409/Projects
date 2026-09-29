import { useState } from "react"
import Start_game from "./Components/Start_game"
import Game_page from "./Components/Game_page"


function App() {
  const [isGameStarted, setGameStarted] = useState(false)

  const toggle_function = () => {
    setGameStarted((prev) => !prev)
  }

  return (
    <>
    {
    isGameStarted ?  <Game_page/> : <Start_game toggle= {toggle_function}/> 
    }

    </>
  )
}

export default App
