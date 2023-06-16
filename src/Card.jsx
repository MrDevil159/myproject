import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({entire, title, desc, src, id}) => {
const navigate = useNavigate();
  return (
    <div className='cards'>
      <img src={src} alt=""/><br/>
      <p>{id}</p><br/> 
      <h3>{title}</h3><br/>
      <p style={{fontSize:"0.6rem"}}>{desc}</p>
      <button onClick={() => navigate("/detail", {
            state: {
              title: title,
              description: desc,
              id: id,
              img: src,
              items : entire
            },
          })}>View Details</button>
    </div>
  );
}

export default Card;
