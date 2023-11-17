import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="text-title">Desafio Github API</h1>
            <h6 className="text-subtitle">Bootcamp Spring React</h6>
            <Link to="/">
                <button className="btn btn-primary btn-lg start-button">Começar</button>
            </Link>
        </div>
    );
}

export default Home;
