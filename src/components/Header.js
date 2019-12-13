import React, { Component } from 'react';
import PropTypes from 'prop-types';
import refresh from './refresh.png';
import { fetchTodo } from "../store/todos/actions";
import { connect } from "react-redux";


class Header extends Component {

 
  render() {
    return (
      <div className="header">
        <div className="headeTitle">
          <h3>Hacker News</h3>
        </div>
        <div className="refresh">
          <span onClick={this.props.fetchTodo}><img src={refresh}/></span> 
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = {
  fetchTodo
};

Header.propTypes = {
  fetchTodo: PropTypes.func.isRequired
}
export default connect(null, mapDispatchToProps)(Header);
