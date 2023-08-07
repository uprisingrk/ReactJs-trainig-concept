import React , {Component} from "react";

class MyClassComp extends Component {
    render(){
        return(
            <><h1>Class Component - {this.props.name} - {this.props.sal}  </h1></>
        )
    }
}
export default MyClassComp
