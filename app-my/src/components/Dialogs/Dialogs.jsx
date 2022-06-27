import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../helpers/validators/validators';
import { TextArea } from '../common/FormsControls/FormsControls';
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItems/DialogItem';
import Messages from './Messages/Messages';

const maxLength10 =  maxLengthCreator(50)

const AddMessageForm = (props) => {
  return <form onSubmit={props.handleSubmit}  className={s.addForm}>
    <Field validate={[maxLength10, required]} name="newMessageBody" component={TextArea} />
    <div></div>
    <button>Send</button>
  </form>
}

const AddMessageFormRedux = reduxForm({form: "addNewMessageForm"})(AddMessageForm)


const Dialogs = (props) => {

  const onSubmit = (formData) => {
    props.onSendNewMessage(formData.newMessageBody);
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props?.dialogsData?.map(item => (
          <DialogsItem name={item.name} id={item.id} key={item.id} />
        ))}
      </div>
      <div className={s.messages}>
        {props?.messagesData?.map((data) => (
          <Messages
            number={data.id}
            message={data.message}
            position={data.position}
            key={data.id}
          />)
        )}
        <AddMessageFormRedux onSubmit={onSubmit}/>
      </div>

    </div>
  )
}



export default Dialogs;