import { HomeCtrStyled } from './Home.styled'
import { useGame, gameInitState, ManagedGameContext } from '../../context'

// ---

export const Home = () => {

  const { message } = useGame()

  return (
    <>
      <ManagedGameContext {...gameInitState}>
        <HomeCtrStyled>
          
        
        
        </HomeCtrStyled>
      </ManagedGameContext>
    </>
  )
}
