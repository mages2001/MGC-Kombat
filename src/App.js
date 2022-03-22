import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/home';
import Course from './pages/course';

function App() {
  return (
    <div>
      <nav class="navbar navbar-light">
        <div class="container-fluid mx-auto">
          <img src='https://mgcchennai.ac.in/admin/about/header.jpg' alt='' width={"100%"}/>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#" style={{ fontSize: 30,fontWeight:"bold" }}>MGC</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto" style={{fontSize:25}}>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/course">Course</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Course/>} />
        </Routes>
      </BrowserRouter>
      <div style={{ backgroundColor: "black", borderRadius: 20, margin: 10, padding: 30, color: "white",textAlign:"center",marginTop:0, }}>
        <h2>Contact Us</h2>
        <p>Block No.8,College Road,Mogappair West,Chennai-37</p>
        <p>044 - 26533140 , 044 - 26530978</p>
        <p>mail@mgcchennai.ac.in</p>
      </div>
    </div>
  );
}

export default App;
