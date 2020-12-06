import React, {Component} from 'react'
import {Cards} from '../Components/Cards'
import data from '../data/data.json'

export default class MainPage extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            datas: null,
            ready: false
        }
    }

    componentWillMount()
    {
            this.setState({datas: data})
            this.setState({ready: true})
    }
    

    render()
    {
        return (
            <div>
                {this.state.ready &&
                this.state.datas.map((e) =>
                (
                    <Cards 
                    id ={e.id} 
                    image={e.image} 
                    title={e.title} 
                    description={e.describe} 
                    date={e.date}></Cards>
                ))
                }      
            </div>
        )
    }

}