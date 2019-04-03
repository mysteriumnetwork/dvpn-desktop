import { RootState } from '../rootState.type'

export type CounterState = {
  num: number
}

export enum CounterActionType {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
  DECREMENT_COUNTER = 'DECREMENT_COUNTER',
}

interface IncrementAction {
  type: CounterActionType.INCREMENT_COUNTER
}

interface DecrementAction {
  type: CounterActionType.DECREMENT_COUNTER
}

export type CounterAction = IncrementAction | DecrementAction

const increment = () => ({
  type: CounterActionType.INCREMENT_COUNTER,
})

const decrement = () => ({
  type: CounterActionType.DECREMENT_COUNTER,
})

const incrementIfOdd = () => (dispatch, getState) => {
  const { num } = getState()

  if (num % 2 === 0) {
    return
  }

  dispatch(increment())
}

const incrementAsync = (delay: number = 1000) => dispatch => {
  setTimeout(() => {
    dispatch(increment())
  }, delay)
}

const defaultState: CounterState = {
  num: 0,
}

const reducer = (state: CounterState = defaultState, action: CounterAction) => {
  switch (action.type) {
    case CounterActionType.INCREMENT_COUNTER:
      return {
        ...state,
        num: state.num + 1,
      }
    case CounterActionType.DECREMENT_COUNTER:
      return {
        ...state,
        num: state.num - 1,
      }
    default:
      return state
  }
}
export default reducer

export const actions = {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync,
}

export const selector = (state: RootState) => state.counter
