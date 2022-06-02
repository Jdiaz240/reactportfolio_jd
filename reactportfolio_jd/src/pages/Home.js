import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Home = () => {

    return (
        <>
        <header>
            <Nav>
                <Link to={{ pathname: '/projects' }}>
                    <button>Projects</button>
                </Link>
                <Link to={{ pathname: '/aboutme' }}>
                    <button>Projects</button>
                </Link>
                <Link to={{ pathname: '/contact' }}>
                    <button>Contact Me</button>
                </Link>
            </Nav>
        </header>
        <div class="bio">
            <h1>About Me</h1>
            <p>This is the about me, muahahahahahaha
                
            </p>

        </div>
        </>
    )
}