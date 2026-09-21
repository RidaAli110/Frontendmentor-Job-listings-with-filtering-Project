import Header from '../components/Header';
import JobList from '../components/JobList';
import Footer from '../components/Footer';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main>
        <h1 className='sr-only'>Job Listings</h1>
        <JobList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
