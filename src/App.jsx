import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <button className="btn btn-primary">
        Click Me
      </button>
    </div>
  );
}

export default App;
