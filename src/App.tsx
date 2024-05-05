import './App.css'
import JobCardList from './components/JobCardList';
import Navbar from './components/Navbar';
function App() {
  return <main className="main-container">
    <Navbar />
    <JobCardList />
  </main>;
}

export default App;
