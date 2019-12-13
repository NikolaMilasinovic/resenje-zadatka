import React, { Component } from 'react';
import NewsList from '../components/NewsList';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { fetchTodo,getMoreNews,getPrevNews } from "../store/todos/actions";
import { connect } from "react-redux";
import PropTypes from 'prop-types';


class App extends Component {

  componentDidMount() {
    this.props.fetchTodo();
    setInterval(() => { this.props.fetchTodo()}, 30000);
  }


  render() {
    const {loading, error, currentPage, getMoreNews,getPrevNews } = this.props

    if (loading) {
      return <Loading/>
    }
    if (error) {
      return <h1>{error}</h1>
    }
    return (
      <div className="Todo ">
        <Header />
        <NewsList/>
        <div className="container btn">
        {
          currentPage === 1 ? <span onClick={getMoreNews}>More</span> : (


            <div>
            <span onClick={getPrevNews}>Prev</span><span> | </span>
            <span onClick={getMoreNews}>More</span>
            </div>
          )
        }
        </div>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  loading: state.news.loading,
  error: state.news.error,
  currentPage: state.news.currentPage
});

const mapDispatchToProps = {
  fetchTodo,
  getMoreNews,
  getPrevNews
};


App.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  fetchTodo: PropTypes.func.isRequired,
  getMoreNews: PropTypes.func.isRequired,
  getPrevNews: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(App);








