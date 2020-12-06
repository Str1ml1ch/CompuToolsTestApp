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
       const sortData = data.sort(function(a,b) // sort data by date
                {
                    if (Date.parse(a.date) > Date.parse(b.date)) {
                        return -1;
                      }
                      if (Date.parse(a.date) < Date.parse(b.date)) {
                        return 1;
                      }
                      return 0;
                })
            this.setState({datas: sortData})
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