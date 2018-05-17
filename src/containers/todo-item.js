import ListItem from "../components/list-item";
import { connect } from "react-redux";
import { changeFlagAction,deleteItemAction, toggleEditAction } from "../actions";

const mapDispatchToProps = {
    changeFlag: changeFlagAction,
    deleteItem: deleteItemAction,
    toggleEdit: toggleEditAction
}
const TodoItem = connect(null,mapDispatchToProps)(ListItem);
export default TodoItem;