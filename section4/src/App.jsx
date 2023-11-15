import Viewer from './components/Viewer';
import Controller from './components/controller';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller />
      </section>
    </div>
  );
}

export default App;
