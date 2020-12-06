import React, {Component} from 'react'
import data from '../data/data.json'
import dataPoints from '../data/dataPoints.json'
import {QuestionCards} from '../Components/QuestionCards'
import ResultCard from '../Components/ResultCard'
import { MDBRow } from 'mdbreact';

let arr = []//
let QuestionId = null;//save id in feature

export default class QuizPage extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            question: null,
            points: 0,
            result: null,
            value: [],
            dataPointsObject: null
        }
        this.updateData = this.updateData.bind(this)
        this.refreshdata = this.refreshdata.bind(this)
        this.scroll = this.scroll.bind(this)
    }


    componentWillMount()
    {
        const {id} = this.props.match.params// get our URL like (:id)
        QuestionId = id.split('')[1]//normailize URL id and save
        this.setState({question:data.find(function(e){return e.id === parseInt(QuestionId)})}) //save our data(question and answers) from the json by id
        arr = [] //refresh arr (before rendering) when we go to the page
        
    }

    refreshdata()//going up and delete all data made by preople
    {
        window.scrollTo(0, 0)
        arr=[]
        this.setState({result:null})
        this.setState({value:[]})
        this.setState({dataPointsObject: null})
    }

    scroll()
    {
        window.scrollTo(0,0)
    }


    updateData(value)
    {
        const valueArr = []
        let QuestionsLength = this.state.question.questions.length//save how many questions we have
        this.state.question.questions.forEach((e)=>
        {
          e.Answers.forEach((p)=>
          {
              if(p.answerName === value)
              {
                let obj = { //create object with question id,questionName and answer piont
                    id: e.id,
                    value: value,
                    points: p.points
                }
                
                    arr.forEach((ex,index)=> // delete the anwer from arr if questionId is match
                    {
                        if(ex.id === e.id)
                        {
                            arr.splice(index,1)//delete element if idQuestion is match
                        }
                    })
                   arr.push(obj) // push objects in our arr
              }
          })
        })



        arr.forEach((e)=>
        {
            valueArr.push(e.value) // in new arr push only values of questionNmae
        })
        this.setState({value: valueArr}) // setstate with QuestionName values arr

        if(arr.length === QuestionsLength)//when arr with our answers == 5 (we have only 5 questions) preparation data to show the resultPoint and type of personality
        {
            let result = 0

            arr.forEach((e)=>
            {
                result +=e.points//sum of all our points
            })
            this.setState({result:result})//save our result to state

            let ResultObject = { //our ResultObject (here will be obkect with Result of Quiz)
                result: null,
                description: null
            }   

            dataPoints.forEach((elements) => 
            {
                if(elements.questionId === parseInt(QuestionId))//check id's
                {
                    //this.setState({dataPointsArray:elements.questionResults})//save array of the points and resultMark to the state
                    elements.questionResults.forEach((resultAnswer)=>
                    {
                        if(result >= resultAnswer.minPoints && result <=resultAnswer.maxPoints)//check ponts of Result and give full result of Quiz
                        {
                            ResultObject.result = resultAnswer.result // our result
                            ResultObject.description = resultAnswer.description// result describe
                        }
                    })
                }
            })
            if(ResultObject.result && ResultObject.description)
            {
            this.setState({dataPointsObject: ResultObject}) //save our resultObject to rhe state
            }

        }

    }



    render()
    {       
        return(
            <>
            <h3 className='h4-responsive font-weight-bold text-center my-5'>{this.state.question.title }</h3>
            {this.state.dataPointsObject &&
                 <ResultCard 
                 data={this.state.dataPointsObject} 
                 ref={this.myRef} 
                 refreshdata={this.refreshdata} 
                 scroll={this.scroll}/>}
               {this.state.question.questions.map((e,index) => 
               <section className='text-center my-5'>
               <h3 className='dark-text text-center w-responsive mx-auto mb-5' >{e.questionName}</h3 > 
                <MDBRow className="QuizCard">
                {e.Answers.map((p => this.state.value.includes(p.answerName) ?
               <QuestionCards 
               datas = {p.answerName} 
               image={p.image} 
               updateData = {this.updateData} 
               active ={"activeCard"}/>:
                <QuestionCards 
                datas = {p.answerName} 
                image={p.image} 
                updateData = {this.updateData} 
                check={this.state.dataPointsObject}/>
                )) }
                </MDBRow>
                </section>)
                }
                    </>
        )
    }

}