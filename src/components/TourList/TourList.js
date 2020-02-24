import React from 'react';
import {Tour} from '../Tour';
import './tourList.scss';
import {tourData} from "../../tourData";

//const [tourData , setTourData] = useState(tourData);

const removeTour = (id) => {
    console.log(id);
};
export const TourList = () => {
    //console.log(tourData);
    return (
        <section className={"tourList"}>
            {
                tourData.map((tour, index) => (
                        <Tour key={index} tour={tour} removeTour={removeTour}/>
                    )
                )
            }
        </section>
    )
};
