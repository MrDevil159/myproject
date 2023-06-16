import React from 'react';
import { useLocation } from "react-router-dom";
import Card from './Card';
const Detail = () => {
    const location = useLocation();
    console.log(location.state);
    console.log(location.state.items);
  return (
    <div>
      <Card title={location.state.title} desc={location.state.description} src={location.state.img} />
    </div>
  );
}

export default Detail;
