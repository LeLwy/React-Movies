import Header from '../components/Header';
import Movies from '../components/Movies';

const Home = () => {

    return (
        <div className='home-container'>
            <h1 className='sr-only'>React Movies - Accueil</h1>
            <Header />
            <Movies />
        </div>
    );
};

export default Home;