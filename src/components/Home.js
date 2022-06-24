import React from 'react';
import { Carousel } from 'react-bootstrap';
import ListarPlantas from './ListarPlanta';

const Home = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1649345660/plantas-3-e1586222650112_fprx9q.jpg"
                        alt="First slide"
                        height="300px"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1649345660/plantas-4-e1586223358927_owmfbb.jpg"
                        alt="Second slide"
                        height="300px"
                    />

                 </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/danimel/image/upload/v1649345660/autotrofo-e1589745520443_vd9xe3.jpg"
                        alt="Third slide"
                        height="300px"
                    />

                   
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Home;