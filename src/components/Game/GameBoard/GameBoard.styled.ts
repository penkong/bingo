import styled from 'styled-components'

export const GameBoardStyled = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  section {
    min-width: 80%;
    height: 95%;
    div {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      span {
        width: 100%;
        height: 100%;
        border: 1px dashed gray;
        border-radius: 10px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
        &:hover {
          background-color: #9fed9c;
          border: 1px dashed transparent;
          cursor: pointer;
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    section {
      min-width: 100%;
      height: 85%;
    }
  }

  @media only screen and (max-width: 550px) {
    section {
      min-width: 100%;
      height: 80%;
    }
  }
`
