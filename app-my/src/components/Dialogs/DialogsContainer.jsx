import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageActionCreator } from '../../redux/dialogsReducer';
import withAuthRedirect from '../common/Preloader/redirect/redirectLogin';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.messagesData,
    messagesData: state.messagesPage.messagesData,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSendNewMessage: (newMessageBody) => {
    dispatch(addMessageActionCreator(newMessageBody))
  },
}
)

const DialogsContainer = (props) => {
  return (
    <Dialogs {...props} />
  )
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsContainer)


