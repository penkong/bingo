import { ReactNode } from 'react'

// ---

export enum ITurnEnum {
  User1 = 'Player 1',
  User2 = 'Player 2',
}

export interface IGameState {
  started: boolean
  turn: ITurnEnum
  won: boolean
  winner: ITurnEnum | ''
  message: string
  children?: ReactNode
}

export enum IGameActionEnum {
  TOGGLE_GAME_ACTION = 'TOGGLE_GAME_ACTION',
  TOGGLE_USER_ACTION = 'TOGGLE_USER_ACTION',
}

export type IGameActionType =
  | { type: IGameActionEnum.TOGGLE_GAME_ACTION }
  | { type: IGameActionEnum.TOGGLE_USER_ACTION }

export type GameContextType = IGameState & {
  toggleGameAction: () => void
  toggleUserAction: () => void
}
