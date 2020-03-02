import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header'
import Footer from './components/site/Footer'
import Sidebar from './components/site/Sidebar'
import{
  BrowserRouter as Router,
} from 'react-router-dom';
// import FunctionalComponentDemo from './components/concepts/FunctionalComponentDemo'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Sidebar />
        {/* <FunctionalComponentDemo /> */}
      </Router>
      <Footer/>
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <FunctionalComponentDemo />
//       </div>
//     );
//   }
// }

export default App;
