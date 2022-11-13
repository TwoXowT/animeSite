import {BrowserRouter, Link,  Route,Switch} from "react-router-dom";
import {App} from "../App";
import {AnimePage} from "./AnimePage";


export const Root = ()=>{



    return(
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/anime'> AnimeList</Link>
                    </li>
                    <li>
                        <Link to='/profile'> profile</Link>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path="/anime">
                    <App/>
                 </Route>
                <Route exact path="/anime/:id">
                    <AnimePage/>
                </Route>
                <Route exact path="/profile">
                    <h1>Profile</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}