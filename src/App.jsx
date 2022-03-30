import './App.css';
import { Link, Route } from 'wouter';

import Home from './pages/Home';
import Pow from './pages/pow';
import GeneralFormula from './pages/generalFormula';
import Factorial from './pages/factorial';

import imageLogo from './static/img/header-logo.png';

function App() {
  return (
    <div className='App'>
      <header className='app-header'>
        <Link to='/'>
          {/* <h1 className='app--title'>Fórmulas matemáticas App</h1> */}
          <div className='app--container-logo'>
            <img className='app--logo' src={imageLogo} alt='' />
          </div>
        </Link>
      </header>

      <main className='app-content'>
        <Route component={Home} path='/' />
        <Route component={Pow} path='/pow' />
        <Route component={GeneralFormula} path='/generalFormula' />
        <Route component={Factorial} path='/factorial' />
      </main>
    </div>
  );
}

export default App;
