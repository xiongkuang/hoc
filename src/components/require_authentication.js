import React, {Component} from 'react';
import {connect} from 'react-redux' ;


export default function (ComposedComponent) {
    class Authentication extends Component{
        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount(){
            if (!this.props.authenticated){
                this.context.router.push('/');
            }

        }

        render(){
            // console.log(this.props.authenticated);
            // console.log(this.props.resources)  //s hould get resourceList
            return <ComposedComponent {...this.props} />
        }

        componentWillUpdate(nextProps){
            if (!nextProps.authenticated){
                this.context.router.push('/');
            }
        }

    }



    function mapStateToProps(state) {
        return {authenticated: state.authenticated}
    }

    return connect(mapStateToProps)(Authentication);
}


//In some other location, we want to use this HOC
/*

import Authtication // this is my HOC
import Resources // this is the component I want to wrap


const ComposedComponent = Authentication(Resources);

//In sonme render method
<ComposedComponent resources={resourceList}/>

*/