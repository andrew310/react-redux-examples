/**
 * Created by andrew on 5/19/16.
 */
import React, { Component } from 'react'; //create and manaege components
//separate library to deal with the DOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDwe63Z8XWh1Y-tow3kAAZ1pl5DT9b9NXQ';


//JSX
//const because we are not going to reassign app at any time
//this is a class or a type of component not an instance
// => called a fat arrow
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      //this.setState({videos: videos})
    });
  }


  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video = {this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

//render it to the dom
ReactDOM.render(<App/>, document.querySelector('.container'));
//ALWAYS MAKE JUST ONE COMPONENT PER FILE
