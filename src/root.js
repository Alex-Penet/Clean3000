import { Switch, Route } from "react-router-dom"
import Formulaire from "./components/Formulaire"
import Formule from "./components/Formule"
import Home from "./components/Home"

const Root = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Formulaire" component={Formulaire} />
            <Route path="/Formule" component={Formule} />
        </Switch>
    )
}

export default Root