import React from 'react';

class EmailForm extends React.Component{
    constructor() {
        super();
        this.state={
            name: '',
            mastercard: '',
            email: '',
            nameerr: '',
            mastercarderr: '',
            emailerr: ''
        }
    }
    handleChange=(e) => {
        let nam = e.target.name;
        let val = e.target.value;

        // name validation
        if(nam === 'name'){
            if (val.length === 0)
                // (val === '')
            {
                this.setState({nameerr: 'Name cant be blank!'})
            }else{
                this.setState({nameerr: ''})
            }
        }

        //mastercard validation
        if(nam === 'mastercard'){
            if(/^(?:3[47][0-9]{13})$/.match(val)){
                this.setState({mastercarderr: ''})
            }else{
                this.setState({mastercarderr: 'Card must be a number and >16 symbols!'})
            }
        }

        // email validation
        if(nam === 'email'){
            if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)){
                // The test() method tests for a match/соответствие in a string.
                // This method returns true if it finds a match, otherwise it returns false.
                this.setState({emailerr: ''})
                console.log(val)
            }else{
                this.setState({emailerr: 'Your email is not correct!'})
            }

        }

        this.setState({[nam]:val})
    }

    handleSubmit = (e) => {
        alert ('Hello ' + this.state.name)
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input name='name' type='text'  placeholder='Your name'
                       value={this.state.name}
                       onChange={this.handleChange}/>
                <input name='mastercard' type='text'  placeholder='Mastercard number'
                       value={this.state.mastercard}
                       onChange={this.handleChange}/>
                <input name='email' type='text' placeholder='Your email'
                       value={this.state.email}
                       onChange={this.handleChange}/>
                {this.state.nameerr}
                {this.state.mastercarderr}
                {this.state.emailerr}
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default EmailForm;