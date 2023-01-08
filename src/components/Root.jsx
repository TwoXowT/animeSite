import {BrowserRouter Route, Switch} from "react-router-dom";
import {App} from "../App";
import {AnimePage} from "../pages/AnimePage";
import {Navbar} from "./Navbar";
import {SearchPage} from "../pages/SearchPage";
import {FavoritePage} from "../pages/FavoritePage";


export const Root = ()=>{

    return(
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact={true} path="/anime" component={App}/>
                <Route  path="/anime/:mal_id" component={AnimePage}/>
                <Route  path="/search" component={SearchPage}/>
                <Route  path="/favorite" component={FavoritePage}/>
                <Route path="/search/:id_genre" component={SearchPage}/>
                <Route >
                   <h1>ERROR</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}