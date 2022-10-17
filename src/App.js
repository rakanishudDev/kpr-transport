import './styles/App.css';
import {Routes, Route} from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Teenused from './pages/Teenused';
import Kontakt from './pages/Kontakt';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Avaleht />} />
          <Route path="/hinnakiri" element={<Teenused />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
