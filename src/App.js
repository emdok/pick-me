import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './index.css';

function App() {
  return (
    <div className='root-child'>
      <Header></Header>
      <main>
        {/* <About></About> */}
        {/* <Portfolio></Portfolio> */}
        {/* <Contact></Contact> */}
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
