import { GameBoardStyled } from './GameBoard.styled'

// ---

export const GameBoard = () => {
  const renderer = () =>
    Array.apply(0, Array(5)).map((el, idx) => (
      <div key={idx}>
        {Array.apply(0, Array(5)).map((item, inx) => (
          <span key={inx}>hellow</span>
        ))}
      </div>
    ))

  return (
    <GameBoardStyled>
      <section>{renderer()}</section>
    </GameBoardStyled>
  )
}
