import React, { Component } from 'react';
import Searchbar from './components/SearchBar';
import axios from 'axios'
import ImageGallery from './components/ImageGallery'
import Button from './components/Button'
import Spinner from './components/Loader'

export default class App extends Component {
  state = {
    sQuery: '',
    loading: false,
    page: 1,
    articles: [],
  };



  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.sQuery;
    const nextQuery = this.state.sQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page
    if(prevQuery !== nextQuery) {
      this.fetchArticles()
    };
    if(this.state.articles.length > 12) {
      console.log('я появился')
      window.scrollTo({
           top: document.documentElement.scrollHeight,
           behavior: 'smooth',
       });
    }
  }

  handleSearchFormSubmit = query => {
    this.setState({ sQuery: query, articles: [], page: 1})
  };

  fetchArticles = () => {
    this.setState({
      loading: true, 
    });
    const {sQuery, page} = this.state
    axios
    .get(`https://pixabay.com/api/?q=${sQuery}&page=${page}&key=16979743-523237a41d7b002c0229d3266&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => this.setState(prevState => ({ articles: [...prevState.articles, ...response.data.hits], page: prevState.page + 1, loading: false})))
  };


  render() {
    return(
      <>
      <Searchbar
      onSubmit={this.handleSearchFormSubmit}
      ></Searchbar>
      <ImageGallery 
      images={this.state.articles}
      />
      {this.state.loading === true && <Spinner></Spinner>}
      {this.state.articles.length > 0 && <Button loadMore={this.fetchArticles}></Button>}
     </>
    )
  }
}
