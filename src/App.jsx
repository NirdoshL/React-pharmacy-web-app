import { Header } from './components/heading';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import { Home } from './components/home';
import { About } from './components/about';
import { Contact } from './components/contact';
import { ErrorPage } from './components/404';

import './styles/App.scss'
import './styles/heading.scss'
import './styles/home.scss'
import './styles/about.scss'
import './styles/contact.scss'
import './styles/404.scss'




function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
