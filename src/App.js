import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <div class="container">
        
        <a class="active" href="movies">Movies</a>
        <img src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504965.png?token=exp=1658304678~hmac=07dcb8d16ab8e19bea944a24adc80588" width="40" height="40" alt="" title=""
          class="img-small"></img>
        <a class="active" href="/" style="color: white;">Home</a>
        <a href="#" style="color: white;">Video</a>
        <a href="#" style="color: white;">Contact</a>
        <div class="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search"></input>
            <button type="submit" style="color: white;"><i class="fa fa-search"></i></button>
          </form>
        </div>


        <div id="root"></div>
      </div>
    </div>


  );
}

export default App;
