import { addPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
  }
)

const mapDispatchToProps = (dispatch) => ({
    addNewPost: (text) => {
      dispatch(addPostActionCreator(text)) 
    },
  

  }
)
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
