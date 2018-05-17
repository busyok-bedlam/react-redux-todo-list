import List from "../components/list";
import { connect } from "react-redux";
import { changeFlagAction,deleteItemAction } from "../actions";


const mapDispatchToProps = {
    changeFlag: changeFlagAction,
    deleteItem: deleteItemAction
}
const mapStateToProps = state => ({ todos: state.todos })
const TodoList = connect(mapStateToProps,mapDispatchToProps)(List);
export default TodoList;