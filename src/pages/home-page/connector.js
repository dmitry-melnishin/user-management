import {connect} from "react-redux";
import HomePage from "./home-page";
import {createUser, deleteUser, getUsers, updateUser} from "./actions";

const mapStateToProps = state => ({
   users: state?.homePage?.users
});

const mapDispatchToProps = dispatch => ({
   onGetUsers: () => dispatch(getUsers()),
   onCreateUser: data => dispatch(createUser(data)),
   onUpdateUser: data => dispatch(updateUser(data)),
   onDeleteUser: id => dispatch(deleteUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);