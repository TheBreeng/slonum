import Benefits from './components/Benefits/Benefits';
import Description from './components/Description/Description';
import Diploma from './components/Diploma/Diploma';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Plan from './components/Plan/Plan';
import Request from './components/Request/Request';
import Sending from './components/Sending/Sending';
import './scss/App.scss';
import 'animate.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Description />
            <Benefits />
            <Plan />
            <Diploma />
            <Request />
            <FAQ />
            <Sending />
            <Footer />
        </div>
    );
}

export default App;
