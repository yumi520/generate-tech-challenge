import './App.css';
import Nav from "./components/Nav/nav.jsx"
import Top from "./components/Top/top.jsx"
import Api from "./api/api.jsx"

function App() {
  return (
    <div>
      <Nav/>
      <div className="flex justify-center items-center min-h-screen">
        <Top/>
        <Api/>
      </div>
    </div>
  );
}

export default App;
