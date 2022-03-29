import './App.css';
import { Link, Route } from 'wouter';

import Home from './pages/Home';
import Pow from './pages/pow';

function App() {
  return (
    <div className='App'>
      <header className='app-header'>
        <Link to='/'>
          <h1 className='app--title'>Fórmulas matemáticas App</h1>
        </Link>
      </header>

      <main className='app-content'>
        <Route component={Home} path='/' />
        <Route component={Pow} path='/pow' />
      </main>
    </div>
  );
}

export default App;
