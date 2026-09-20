import Header from '../components/Header';
import JobList from '../components/JobList';
import Footer from '../components/Footer';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <JobList />
      <Footer />
    </div>
  );
}

export default App;
