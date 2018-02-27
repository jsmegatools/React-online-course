import { connect } from 'react-redux';
import MainArea from './MainArea';
import * as actions from '../../redux/modules/mainArea';

const mapStateToProps = ({ mainArea }) => ({
  locations: mainArea.locations,
  isFetching: mainArea.isFetching,
  error: mainArea.error
});

export default connect(mapStateToProps, actions)(MainArea);
