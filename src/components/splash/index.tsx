import React, { useState, FC, useEffect } from 'react';
import "./styles.css";
import Lottie from 'react-lottie';
import { useHistory } from "react-router-dom";



let watchAnimationData = require('./splash.json')



const Spinner: FC = () => {

    const [animationData] = useState(watchAnimationData);
    const history = useHistory();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    


    return (
        <div >
            <div>
                <div className="spinner">
                    <div className="overlay">
                        <div className="overlay__content">
                            <Lottie options={defaultOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Spinner;
