import { connect } from 'react-redux'
import { RootState } from '../../rootState.type'
import { actions } from '../counter.duck'
import Counter from '../components/Counter/Counter'

const mapStateToProps = (state: RootState) => ({
  counter: state.counter.num,
})

export default connect(
  mapStateToProps,
  actions,
)(Counter)
