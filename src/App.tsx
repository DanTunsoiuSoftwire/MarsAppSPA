import './App.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import MainPage from "./Components/Part4/MainPage.tsx";
import Task1Page from "./Components/Part4/Task1Page.tsx";
import Task2Page from "./Components/Part4/Task2Page.tsx";

function App() {
  return (
    <>
      <Router>
        <h1>Welcome to my first ever React SPA!</h1>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/task1" element={<Task1Page />} />
          <Route path="/task2" element={<Task2Page />} />
          <Route path="" element={
            <div>
              <div className="sorry">Sorry - that page dose not exist, try there:</div>
              <div>
                <Link to="/main">Go to main page</Link>
              </div>
              <div>
                <Link to="/task1">Go to task 1</Link>
              </div>
              <div>
                <Link to="/task2">Go to task 2</Link>
              </div>
            </div>}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
