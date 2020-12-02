import React from 'react';

class Formvalidclass extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username: '',
            id: '',
            age: '',
            email: '',
            cardnumber: '',
            description: '',
            nameerr: '',
            iderr: '',
            ageerr:'',
            emailerr: '',
            //cardnumbererr: ''
        }
    }

    handleChange = (e) =>{
        let nam = e.target.name;
        let val = e. target.value;
        this.setState({[nam]:val})
        let err = '';
        if (nam === 'username') {
            if (val === '') {
                err = <strong>Name cant be blank!</strong>;
                this.setState({nameerr: err})
            }else{this.setState({nameerr: ''})}
        }else if(nam === 'id'){
            if(val === '' ){
                err = <strong>Your id must be a number</strong>;
                this.setState({iderr: err});
            }else{this.setState({iderr: ''})}
        }else if(nam === 'age'){
            if(val < 18){
                err = <strong>Your age must be  > 18!</strong>;
                this.setState({ageerr: err});
            }else{this.setState({ageerr: ''})}
        }else if(nam === 'cardnumber'){
            if(!Number(val) || val.length < 16){
                err = <strong>Card number must be a number and > 16 characters!</strong>;
                this.setState({cardnumbererr: err});
            }else{this.setState({cardnumbererr: ''})}
        }else if(nam === 'email'){
            if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)){
                err = <strong>Not valid email!</strong>;
                this.setState({emailerr: err});
            }else{this.setState({emailerr: ''})
            }
        }

        this.setState({[nam]: val});
    }

    handleSubmit = (e) => {
        alert('Thank you ' + this.state.username + ' for your feedback!')
}

    render() {

        return(
            <form onSubmit={this.handleSubmit}>

                    <input className="u-full-width" type='text' placeholder='Your name'
                           name='username'
                           onChange={this.handleChange}
                    />
                {this.state.nameerr && <b>{this.state.nameerr}</b>}

                    <input className="u-full-width" type="text"   placeholder='ID number'
                           name='id'
                           onChange={this.handleChange}
                    />
                {this.state.iderr && <b>{this.state.iderr}</b>}

                    <input className="u-full-width" type='number' placeholder='Your age'
                           name='age'
                           onChange={this.handleChange}
                    />
                {this.state.ageerr && <b>{this.state.ageerr}</b>}

                <input className="u-full-width" type='email'  placeholder='Your email'
                       name='email'
                       onChange={this.handleChange}

                />
                {this.state.emailerr && <b>{this.state.emailerr}</b>}

                <input className="u-full-width" type='text'  placeholder='Your card number'
                       name='cardnumber'
                       onChange={this.handleChange}
                />
                    <textarea className="u-full-width" placeholder='Your feedback'></textarea>

                {/*{this.state.errormessage && <p>{this.state.errormessage}</p>}*/}
                    <button className='button-primary' disabled={this.disable}>Submit</button>

            </form>
        )
    }
}

export default Formvalidclass;