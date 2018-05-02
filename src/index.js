import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyA0qSHkaTC6hucOsDrrWM_F2yPw7LKAzEo'
// This is the way to create a new component that produces some HTML
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  )
}


//Takes the generated component and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container') )