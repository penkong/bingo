import React, {
  FC,
  useMemo,
  ReactNode,
  useReducer,
  useContext,
  useCallback,
} from "react"

interface IGameState {
  message: string
  children?: ReactNode
}

export const gameInitState = {
  message: "NOTHIN YET",
}

type IGameActionType = { type: "SET_ACTION"; payload: any }

type GameContextType = IGameState & {
  setSthAction: (payload: any) => void
}

export const GameContext = React.createContext<IGameState | any>(gameInitState)

GameContext.displayName = "GameContext"

function gameReducer(state: IGameState, action: IGameActionType) {
  switch (action.type) {
    case "SET_ACTION": {
      return state
    }

    default:
      return state
  }
}

export const GameProvider: FC<IGameState> = props => {
  const [state, dispatch] = useReducer(gameReducer, gameInitState)

  const setSthAction = useCallback(
    (payload: any) => {
      return dispatch({ type: "SET_ACTION", payload })
    },
    [dispatch]
  )

  const value = useMemo(
    () => ({
      ...state,
      setSthAction,
    }),
    [state, setSthAction]
  )

  return <GameContext.Provider value={value} {...props} />
}

export const useGame = () => {
  const context = useContext<GameContextType>(GameContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const ManagedGameContext: FC<IGameState> = ({ children, ...props }) => (
  <GameProvider {...props}>{children}</GameProvider>
)
