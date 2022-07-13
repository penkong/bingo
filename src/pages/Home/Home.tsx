import { HomeCtrStyled } from './Home.styled'
import { useGame, gameInitState, ManagedGameContext } from '../../context'
import { GameBoard, GameFooter, GameNav } from '../../components'

// ---

export const Home = () => {
  const { message } = useGame()

  return (
    <>
      <ManagedGameContext {...gameInitState}>
        <HomeCtrStyled>
          <section>
            <GameNav />
            <GameBoard />
            <GameFooter />
          </section>
        </HomeCtrStyled>
      </ManagedGameContext>
    </>
  )
}
