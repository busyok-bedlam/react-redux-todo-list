import List from "../components/list";
import { connect } from "react-redux";


const mapStateToProps = state => ({ todos: state.todos })
const TodoList = connect(mapStateToProps)(List);
export default TodoList;