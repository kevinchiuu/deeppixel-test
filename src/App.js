import './App.css';
import SideBar from './components/Sidebar';
import Main from './components/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <main className="App">
      <section className="side-nav">
        <SideBar/>
      </section>

      <section className="main">
        <Main/>
      </section>
    </main>
    </Router>
  );
}

export default App;
