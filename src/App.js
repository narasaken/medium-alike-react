import './App.css';
import { Header } from './components/header/Header';
import { Posts } from './components/posts/Posts';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className='Posts'>
        <Posts />
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
