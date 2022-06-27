import React  from "react";
import { connect } from "react-redux";
import Todos from "./Todos";
import { addTodosAC, deleteTodosAC } from "../../redux/todosReducer";



const TodosContainer = (props) => {
  return <Todos {...props}/>
}

const mapStateToProps = (state) => ({
  data: state.todos
})
export default connect(mapStateToProps, {
  addTodosAC,
  deleteTodosAC
})(TodosContainer);