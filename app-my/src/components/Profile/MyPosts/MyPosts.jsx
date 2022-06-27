import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../helpers/validators/validators";
import {TextArea} from '../../common/FormsControls/FormsControls'


import s from './MyPosts.module.css'
import Post from "./Post/Post";
const maxLength10 =  maxLengthCreator(10)


const Posts = (props) => {


  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[required, maxLength10]} component={TextArea} name={'newPost'} placeholder={'new post?'} />
      </div>
      <div>
        <button>AddPost</button>
      </div>
    </form>
  )
}

const MyPostsForm = reduxForm({
  form: 'posts'
})(Posts)


const MyPosts = React.memo((props) => {
  console.log('render')
  const onSubmit = (formData) => {
    props.addNewPost(formData.newPost)

  }

  return (

    <div className={s.posts}>
      <div>
        <h1>My Posts</h1>
        <MyPostsForm
          {...props}
          onSubmit={onSubmit} /></div>
      {props.posts.map((obj) => (
        <Post
          key={obj.id}
          image={obj.image}
          message={obj.message}
          likesCount={obj.likesCount}
        ></Post>
      ))}

    </div>
  )
}
)
export default MyPosts;
