import styled from 'styled-components'

// ---

export const HomeCtrStyled = styled.div`
  background-color: #aeffae;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    width: 65%;
    background-color: red;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    section {
      width: 95%;
      background-color: lightblue;
    }
  }
`
