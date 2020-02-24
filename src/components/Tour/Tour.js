import React, {useState} from 'react';
import './tour.scss'

export const Tour = (props) => {
    const [showInfo, setInfo] = useState(false);

    function handleInfo() {
        if (showInfo) {
            setInfo(false)
        } else {
            setInfo(true);
        }
    }
    const {id, city, img, name, info} = props.tour;
    const { removeTour } = props;
    return (
        <section className={"tour"}>
            <div className={"img-container"}>
                <img src={img} alt="city tour"/>
                <span className={"close-btn"} onClick={() =>removeTour(id)}>
                <i className="fas fa-window-close"/>
            </span>
            </div>
            <div className={"tour-info"}>
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>Info <span onClick={handleInfo}><i className="fas fa-caret-square-down"/></span></h5>
                {showInfo && <p>{info}</p>}
            </div>
        </section>
    );
};