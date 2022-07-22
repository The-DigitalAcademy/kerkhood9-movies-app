import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <div class="container">

        <a aria-selected="true">
          <i class="fa fa-bars" style="font-size:40px" aria-hidden="true"> Menu</i>
        </a>

        <a href="video" aria-selected="true">
          <i class="fa fa-video-camera" href="http://localhost:3000/" style="font-size:40px" aria-hidden="true"></i>
          Video
        </a>
        <a href="home" aria-selected="true">
          <i class="fa fa-home" href="http://localhost:3000/" style="font-size:40px" aria-hidden="true"></i>
          Home
        </a>
        <a href="flim" aria-selected="true">
          <i class="fa fa-film" href="http://localhost:3000/" style="font-size:40px" aria-hidden="true"></i>
          Flim
        </a>
        <a href="language" aria-selected="true">
          <i class="fa fa-cc" href="http://localhost:3000/" style="font-size:40px" aria-hidden="true"></i>
          Language
        </a>
        <a href="kid" aria-selected="true">
          <i class="fa fa-child" href="http://localhost:3000/" style="font-size:40px" aria-hidden="true"></i>
          Kids
        </a>



        <div id="root"></div>
      </div>
    </div>


  );
}

export default App;
