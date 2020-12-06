import React from 'react'
import {Switch, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import QuizPage from './Pages/QuizPage'
import {NotFound} from './Components/NotFound'

export const useRoute = () =>
{
    return (
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/quiz/:id' component={QuizPage}/>
            <Route component={NotFound}/>
        </Switch>
    )
}