import React from 'react';
import VehicleDetails from '../vehicleDetails/VehicleDetails';
import header from '../../images/Bg.png';

const Home = () => {
    const vehicles =[
        {
            id:1,
            img:'https://i.ibb.co/vh4mG4R/Frame.png',
            name:'Bike',
            capacity:4,
            cost:120
        },
        {
            id:2,
            img:'https://i.ibb.co/Qjq5bPd/Frame-1.png',
            name:'Bus',
            capacity:20,
            cost:30 
        },
        {
            id:3,
            img:'https://i.ibb.co/Scsbssh/Frame-2.png',
            name:'Car',
            capacity:2,
            cost:44
        },
        {
            id:4,
            img:'https://i.ibb.co/HPgHkvM/Group.png',
            name:'Train',
            capacity:500,
            cost:90
        }
    ]
    return (
        <div style={{ backgroundImage: ` url(${header})` }} className="header img-fluid">
           {
               vehicles.map(vehicle=> <VehicleDetails key={vehicle.id} vehicle={vehicle}></VehicleDetails>)
           }
        </div>
    );
};

export default Home;