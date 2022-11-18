import {BrowserRouter, Link,  Route,Switch} from "react-router-dom";
import {App} from "../App";
import {AnimePage} from "./AnimePage";
import {Navbar} from "./Navbar";
import {SearchPage} from "./SearchPage";


export const Root = ()=>{

    return(
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact={true} path="/anime" component={App}/>
                <Route  path="/anime/:mal_id" component={AnimePage}/>
                <Route  path="/search" component={SearchPage}/>
                <Route >
                   <h1>ERROR</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}