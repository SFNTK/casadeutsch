
import React, { useEffect, useState } from 'react';
import "./faq.css";
import { InstagramEmbed } from 'react-social-media-embed';

const Faq = () => {
    const [faqcontent,setfaq]=useState(<div></div>)
    useEffect(()=>{
        try{
            setfaq(<><InstagramEmbed url="https://www.instagram.com/p/C_F-FkroV7u/" className='instagrampost' />
                <InstagramEmbed url="https://www.instagram.com/p/C--AKDhoDOJ/" className='instagrampost' />
                <InstagramEmbed url="https://www.instagram.com/p/C-5qBpiMhZf/" className='instagrampost' />
                 </>)
        }catch(e){
            setfaq(<div></div>)

        }
    },[])
    return (
        <div id='faq'>
            <div>
                <h2>س ج</h2>
                <h2>MIT YASSINE</h2>
            </div>
            <div id='instacont'>
 {faqcontent}
            </div>
        </div>
    );
}

export default Faq;
