import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles'
import ArticleCard from './ArticleCard'
import ArticleItem from './ArticleItem'


class App extends React.Component {

  state = {
    articles: articles,
    displayCards: true,
    light: true
  }

  renderArticles = () => {
    return this.state.articles.map(article => {
      return <ArticleCard 
              key={article.id} 
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              />
    })
  }

  renderList = () => {
    return this.state.articles.map(article => {
      return <ArticleItem
          key={article.id}
          title={article.title}
          />
    })
  }

  handleClick = event => {
    this.setState({[event.target.name]: !this.state[event.target.name]})
  }

  render(){
    return (
      <div className={this.state.light ? "light" : "dark"}>
        <button name="light" onClick={this.handleClick}>{this.state.light ? "Switch to Dark Mode" : "Switch to Light Mode"}</button>
        <button name="displayCards" onClick={this.handleClick}>{this.state.displayCards ? 'Switch to List View' : 'Switch to Card View'}</button>
        {this.state.displayCards ? 
          <div className="cards">
            {this.renderArticles()}
          </div> :
          <div className='list'>
            {this.renderList()}
          </div>
          }
      </div>
    );
  }
}

export default App;
