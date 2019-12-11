import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchUsers } from "../actions";
// import * as actions from '../actions';


class App extends Component {

  componentWillMount(){
    this.props.fetchUsers();
  }

  renderUser(user) {
    if (!user) return <div>Loading</div>;

    const {id, name, email} = user;
    return (
      <tr key={id}>
        <td>{name}</td>
        <td> <a href={email}>{email}</a></td>
      </tr>
    )
  }


  render() {
    const { users } = this.props;
    // console.log('users: ', users);
    return (
      <div>
        <h1>Redux Thunk</h1>
        <table className='table'>
          <thead>
          <tr>
            <th>name</th>
            <th>email</th>
          </tr>
          </thead>
          <tbody>
          {users.map(user => this.renderUser(user))}
          </tbody>
        </table>
      </div>
    );

  }
}

function mapStateToProps(state) {
  // console.log('state:', state);
  return {
    users: state.users.userList,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchUsers: fetchUsers
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

