import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <div class="container">

        <a class="#" href="movies">Movies</a>
        <img src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504965.png?token=exp=1658304678~hmac=07dcb8d16ab8e19bea944a24adc80588" width="40" height="40" alt="" title=""
          class="img-small"></img>
        <a class="html" href="home" style="color: rgb(24, 12, 250) white;">Home</a>
        <a class="html" href="video" style="color: rgb(24, 12, 250) white;">Video</a>
        <a class="html" href="drama" style="color: rgb(24, 12, 250) white;">Drama</a>
        <a class="html" href="kid" style="color: rgb(24, 12, 250) white;">Kids</a>




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
