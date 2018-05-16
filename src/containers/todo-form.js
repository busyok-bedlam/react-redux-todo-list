import Form from "../components/form";
import { connect } from "react-redux";
import { addAction } from "../actions";

const mapDispatchToProps = { addItem: addAction }

const TodoForm = connect(null,mapDispatchToProps)(Form)
export default TodoForm;