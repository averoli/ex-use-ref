import React from 'react';
import Formvalid from "./Formvalid";
import Card from "./Card";
import Formvalidclass from "./Formvalidclass";
import EmailForm from "./EmailForm";


 const App = () => {
  return (
      <div className='container'>
       <h1 className='text-align-center'>Feedback Form</h1>
       <div className='row'>
           <div className='six columns'>
               <h3>with Hooks</h3>
    <Formvalid />
           </div>
           <div className='six columns'>
               <h3>with Class component</h3>
               {/*<Formvalidclass />*/}
               <EmailForm />
           </div>
      </div>
          <Card title="something" body="very very interesting"/>
 </div>
  );
}

export default App;
