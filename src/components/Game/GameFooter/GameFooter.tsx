import { GamefooterStyled } from './GameFooter.styled'
import { useGame } from '../../../context'

// ---

export const GameFooter = () => {
  const { won, turn } = useGame()

  return (
    <GamefooterStyled>
      {won ? turn + ' You Are Winner' : 'Welcome to Bingo!'}
    </GamefooterStyled>
  )
}
