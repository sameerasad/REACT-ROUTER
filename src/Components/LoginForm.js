import React,{useRef} from 'react'


function LoginForm() {
   const formRef = useRef() 
   //const formRef1 =useRef(null)
   console.log(formRef)
 function handleSubmit(e){
     e.preventDefault()
     console.log(formRef)
 }

    return (
    
        <form onSubmit={handleSubmit()}>
            <br/>
            <br/>
         <label htmlfor="name"></label><input type="text" id="name" ref={formRef} />
            <br/>
            <br/>
         <label htmlfor="pass"></label><input type="password" id="pass" />
            <br/> 
            <br/>
         <button type="submit" > submit </button>


        </form>
            
        
    );
}

export default LoginForm;

