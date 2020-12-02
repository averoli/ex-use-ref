import React, {useEffect, useRef, useState} from 'react';

const Formvalid = () => {

    const firstRender = useRef(true);

    const [username, setUsername] = useState('');

    const [id, setId] = useState('');

    const [age, setAge] = useState('');

    const [usernameErr, setUserNameErr] = useState(null);

    const[idErr, setIdErr] = useState(null);

    const[ageErr, setAgeErr] = useState(null);

    const [disable, setDisabled] = useState(true)


    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        setDisabled(Formvalidation())
    },[username, id, age])

    const Formvalidation = () => {
    if(username === ''){
        setUserNameErr('Name cant be blank!')
        return true;
    }else if(id ===! Number){
        setIdErr('Id should de a number!')
        return true;
    }else if(age < 18){
        setAgeErr('Age cant be <18!')
        return true;
    }else{
        setUserNameErr(null);
        setIdErr(null);
        setAgeErr(null);
        return false;
    }
    }


    const ChangeSubmit = (e) =>{
        alert(username + ' thank you for your feedback!')
    }

    return(
        <form onSubmit={ChangeSubmit}>
            <input className='u-full-width' type='text' placeholder='Your name'
                   name='username'
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
            />
            <input className='u-full-width' type='text' placeholder='Your id'
                   name='id'
                   value={id}
                   onChange={e => setId(e.target.value)}
            />
            <input className='u-full-width' type='number' placeholder='You age'
                name='age'
                   value={age}
                   onChange={ e => setAge(e.target.value)}

            />
            <textarea className='u-full-width'></textarea>
            { usernameErr && <p>{usernameErr}</p> }
            { idErr && <p>{idErr}</p> }
            { ageErr && <p>{ageErr}</p> }
            <button className='button-primary' disabled = {disable}>Submit</button>
        </form>
    )
}

export default Formvalid;