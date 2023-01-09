import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"

const Root = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    )
}

export default Root