import { HomeCtrStyled } from './Home.styled'
import { gameInitState, ManagedGameContext } from '../../context'

// ---

export const Home = () => {
  return (
    <>
      <ManagedGameContext {...gameInitState}>
        <HomeCtrStyled>hello</HomeCtrStyled>
      </ManagedGameContext>
    </>
  )
}
