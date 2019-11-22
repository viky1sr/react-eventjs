
import React, {Component,Fragment} from 'react';

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            address : '',
            hoby : '',
            age : null
        }
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        let age = this.state.age;
        if (!Number(age)) {
            alert("silakan isi usia anda")
        }
    }
    ChangeHandler= (event) => {
        let name = event.target.name;
        let address = event.target.address;
        let hoby = event.target.hoby;
        let val = event.target.value;
        this.setState({
            [name]: val,
            [address]: val,
            [hoby]: '',
        });
    }

    render() {
        return(
            <Fragment>
            <div className="wr-form">
                <from onSubmit={this.onSubmitHandler}>
                    <h1>Hallo : {this.state.name}</h1>
                    <input type="text" onChange={this.ChangeHandler} placeholder="your name" name="name" className="text" />
                    <h1> your hoby is : {this.state.hoby}</h1>
                    <input type="text" onChange={this.ChangeHandler} placeholder="you'r hoby" name="hoby" className="text" />
                    <h1>your age is : {this.state.age}</h1>
                    <input type="text" onChange={this.ChangeHandler} placeholder="you'r age" name="age" className="text" />
                    <h1>your address : {this.state.address}</h1>
                    <input type="text" onChange={this.ChangeHandler} placeholder="you'r address" name="address" className="textarea" />
                    <hr />
                    <input type="submit" onClick={this.updateState} value="save data" className="button"/>
                </from>
            </div>
            </Fragment>
        );
    }
}
