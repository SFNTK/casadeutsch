import React from 'react';
import "./info.css"
const Info = () => {
    return (
        <div id='info'>
            <div id='map'>
                <div id='rectangle'></div>
                <iframe
                    id='mapel'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6646.976952302332!2d-7.622053162004463!3d33.5926281804087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d36609f0f403%3A0xad69cb069a5fb068!2sYassora%20Germany%20Consulting%20%26%20Immigration!5e0!3m2!1sen!2sus!4v1724847303517!5m2!1sen!2sus"
                    width="600" height="450"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
          
        </div>
    );
}

export default Info;
