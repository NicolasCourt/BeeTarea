import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Autos from './Autos/Autos'

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Autos} />
        </Switch>
    )
}

export default App