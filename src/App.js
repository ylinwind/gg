import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import { Link } from 'react-router';
import Artcle from './container/artcle';
import {change} from './action';
import './App.css';

class App extends React.Component{
  
    render(){
        return(
            <div>
                <div className="leftSide">
                    msg
                    <hr/>
                    {this.props.state.name}
                    <button onClick={this.handleClick.bind(this)}>变变变</button>
                    <br/>
                    <Link to="artcle">artcle</Link>
                    <br/>
                    <Link to="story">story</Link>
                </div>
                <div className="rightSide">
                    {this.props.children}
                </div>
            </div>
        )
    }
    handleClick(){
        if(this.props.state.isRuning){
            this.props.change('right')
        }else{
            this.props.change('wrong')
        }
    }
}
// ---------------------
function mapStateToProps(state){
    return{
        state
    }
}
function mapDispatchToProps(dispatch){
    return{
        change:bindActionCreators(change, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);