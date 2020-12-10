import "./App.css";
import Login from "./components/auth/Login";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="container_app">
      <Router>
        <Login />
      </Router>
    </div>
  );
}

export default App;
