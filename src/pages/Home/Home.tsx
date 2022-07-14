import { HomeCtrStyled } from './Home.styled'
import { useGame, gameInitState, ManagedGameContext } from '../../context'
import { GameBoard, GameFooter, GameNav } from '../../components'
import './Home.scss';

// ---

export const Home = () => {
  const { won } = useGame()

  const winAnime = () =>
    Array.apply(0, Array(200)).map((el, idx) => (
      <div key={idx} className="snow"></div>
    ))

  return (
    <>
      <ManagedGameContext {...gameInitState}>
        <HomeCtrStyled>
          {won && winAnime()}
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
