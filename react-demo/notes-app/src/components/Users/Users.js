import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';

const Users = () => {
    return (
        <div>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>

                <Switch>
                    <Route exact path="/"> <Home /> </Route>
                    <Route path="/users"> <AllUsers /> </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Users;

const Home = () => {
    return (
        <div>
            <h2>Home Component Works</h2>
        </div>
    );
}

const AllUsers = () => {

    const { url, path } = useRouteMatch();

    return (
        <div>
            <h2>Users Component Works</h2>

            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/users/user1">User 1</Link>
                    {/* <Link to={`${url}/user1`}>User 1</Link> */}
                </li>
                <li className="list-group-item">
                    <Link to="/users/user2">User 2</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/users/user3">User 3</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select user....</h3>
                </Route>
                <Route path={`${path}/:user`}>
                    <User />
                </Route>
            </Switch>

        </div>
    );
}

const User = (props) => {
    // console.log(useParams())
    const {user} = useParams();

    return (
        <div>
            <h3>Selected User - {user} </h3>
        </div>
    )
}



