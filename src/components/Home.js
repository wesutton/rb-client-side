import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'
import AuthNavbar from './AuthNavbar';

const Home = (props) => {
    return (
    <div>
     <Router>
         <AuthNavbar token = {props.token} />
     </Router>
    </div>    
    )
}

export default Home;
