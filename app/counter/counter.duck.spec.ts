import { spy } from 'sinon'
import counter, { actions, CounterActionType } from './counter.duck'

describe('actions', () => {
  it('should incrementIfOdd should create increment action', () => {
    const dispatch = spy()
    const getState = () => ({ num: 1 })
    actions.incrementIfOdd()(dispatch, getState)
    expect(dispatch.calledWith({ type: CounterActionType.INCREMENT_COUNTER })).toBe(true)
  })

  it('should incrementIfOdd shouldnt create increment action if counter is even', () => {
    const dispatch = spy()
    const getState = () => ({ num: 2 })
    actions.incrementIfOdd()(dispatch, getState)
    expect(dispatch.called).toBe(false)
  })

  it('should incrementAsync', done => {
    const dispatch = spy()
    actions.incrementAsync(1)(dispatch)
    setTimeout(() => {
      expect(
        dispatch.calledWith({
          type: CounterActionType.INCREMENT_COUNTER,
        }),
      ).toBe(true)
      done()
    }, 5)
  })
})

describe('reducers', () => {
  describe('counter', () => {
    it('should handle INCREMENT_COUNTER', () => {
      expect(
        counter(
          { num: 1 },
          {
            type: CounterActionType.INCREMENT_COUNTER,
          },
        ),
      ).toEqual({ num: 2 })
    })

    it('should handle DECREMENT_COUNTER', () => {
      expect(
        counter(
          { num: 1 },
          {
            type: CounterActionType.DECREMENT_COUNTER,
          },
        ),
      ).toEqual({ num: 0 })
    })
  })
})
