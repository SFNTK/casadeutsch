import React, { useState } from 'react';
import './contact.css'
import ReactJsAlert from "reactjs-alert"

const Contact = () => {
    const[status,setstatus]=useState(false);
    const[nom,setnom]=useState("");
    const[tele,setele]=useState("");
    const[email,setmail]=useState("");
    const[message,setmessage]=useState("");
    const[message1,setmessage1]=useState();
    const[type,settype]=useState()
    return (

        <div id='contactsection'>
            <img src='./contactimg.webp' id='backcpntact' />
           
            <div id='contactcontainer'>
                <h2>CONTACT US</h2>

                <form >

                    <div className="group">
                        <img src='user(2).png' className='icon'/>
                        <input className="input" onChange={(e)=>{setnom(e.target.value)}} type="text" placeholder="TON NOM COMPLET" />
                    </div>
                    <div className="group">
                       <img src='./phone-call(2).png' className='icon'/>
                        <input className="input" onChange={(e)=>{setele(e.target.value)}}  type="tel" placeholder=" NUMERO DU TELEPHONE" />
                    </div>
                    <div className="group">
                       <img src='./mail.png' className='icon'/>
                        <input className="input" onChange={(e)=>{setmail(e.target.value)}}  type="text" placeholder="TON EMAIL" />
                    </div>
                    <div className="group">
                       <img src='./writing.png' className='icon'/>
                        <textarea className="input2" onChange={(e)=>{setmessage(e.target.value)}}  placeholder="TON Message" rows={2} />
                    </div>
                <div id="contactbtn" onClick={()=>{
                    setstatus(true)
                    if(email.length>0 && message.length>0 && nom.length>0 && tele.length>0){
                        setstatus(true)
                        settype("success")
                        setmessage1("nous avons bien reçu votre message")

                    }else{
                        setstatus(true)
                        setmessage1("il faut remplir tous les champs")
                        settype("error")

                    }
                }}>
                            ENVOYER
                            </div>

                  
                </form>

            </div>
            <ReactJsAlert
    status={status}   // true or false
    type={type}   // success, warning, error, info
    title={message1}   // title you want to display
    Close={() => setstatus(false)}  // callback method for hide
/>
        </div>

    );
}

export default Contact;
