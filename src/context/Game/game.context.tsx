import React, { FC, useMemo, useReducer, useContext, useCallback } from 'react'

// ---

import {
  ITurnEnum,
  IGameState,
  GameContextType,
  IGameActionType,
  IGameActionEnum,
} from './game.types'

// ---

export const gameInitState = {
  started: false,
  turn: ITurnEnum.User1,
  message: 'NOTHIN YET',
}

// ---

export const GameContext = React.createContext<IGameState | any>(gameInitState)

// ---

GameContext.displayName = 'GameContext'

// ---

function gameReducer(state: IGameState, action: IGameActionType) {
  switch (action.type) {
    case IGameActionEnum.TOGGLE_GAME_ACTION: {
      return {
        ...state,
        started: !state.started,
      }
    }

    default:
      return state
  }
}

// ---

export const GameProvider: FC<IGameState> = props => {
  const [state, dispatch] = useReducer(gameReducer, gameInitState)

  const toggleGameAction = useCallback(() => {
    return dispatch({ type: IGameActionEnum.TOGGLE_GAME_ACTION })
  }, [dispatch])


  const toggleUserAction = useCallback(() => {
    return dispatch({ type: IGameActionEnum.TOGGLE_USER_ACTION })
  }, [dispatch])

  const value = useMemo(
    () => ({
      ...state,
      toggleGameAction,
      toggleUserAction
    }),
    [state, toggleGameAction, toggleUserAction]
  )

  return <GameContext.Provider value={value} {...props} />
}

// ---

export const useGame = () => {
  const context = useContext<GameContextType>(GameContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

// ---

export const ManagedGameContext: FC<IGameState> = ({ children, ...props }) => (
  <GameProvider {...props}>{children}</GameProvider>
)
