import styled from 'styled-components'

export const GameNavStyled = styled.div<{ started: boolean }>`
  width: 100%;
  height: 10%;
  display: flex;
  color: rgb(107, 107, 107);
  justify-content: space-around;
  align-items: center;
  background: rgba(174, 255, 174, 0.45);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12.7px);
  -webkit-backdrop-filter: blur(12.7px);

  button {
    min-width: 20%;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 10px;
    color: rgb(107, 107, 107);
    background: rgba(235, 255, 235, 0.517);
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: ${({started}) => started ? 'red' : '#3f5800' };
      border: 1px solid ${({started}) => started ? 'red' : '#3f5800' };
    }
  }
`
