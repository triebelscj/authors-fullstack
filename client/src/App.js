import './App.css';
import { Router } from '@reach/router'
import Dashboard from './views/dashboard';
import Edit from './views/edit';
import New from './views/new';


function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard path="/" />
        <Edit path="/rentals/:id/edit" />
        <New path="/authors/new" />
      </Router>
    </div>
  );
}

export default App;
