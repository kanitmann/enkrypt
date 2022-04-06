// import  Navbar, Welcome, Footer, Services, Transactions  from './Components';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Transactions from './Components/Transactions';

const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <h1>Somethings's wrong I can feel it</h1>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;