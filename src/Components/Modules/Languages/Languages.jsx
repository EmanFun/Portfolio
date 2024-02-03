import React from "react";
import { Each } from "../../../utils/common/Each";


const langList = [
    {languague: 'Ingles', certification: 'A2 Elementary'}
  ]

const Languages = () => {
  return (
    <section >
        <h2>Idiomas</h2>
        <div >
            <Each of={langList} render={(item, index)=>(
              <div key={index}>
                <p>{item.languague} {item.certification}</p>
              </div>
            )}/>
        </div>
      </section>
    );
};

export default Languages;
