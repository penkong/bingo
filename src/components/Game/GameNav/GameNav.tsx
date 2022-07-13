import { GameNavStyled } from './GameNav.styled'
import { useGame } from '../../../context'

// ---

export const GameNav = () => {
  const { started, turn, toggleGameAction } = useGame()

  return (
    <GameNavStyled started={started}>
      <button onClick={toggleGameAction}>{started ? 'Reset' : 'Start'}</button>
      {started && <span>{turn} turn</span>}
    </GameNavStyled>
  )
}
