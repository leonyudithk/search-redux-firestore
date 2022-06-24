
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AgregarPlantas from '../components/AgregarPlantas';
import Home from '../components/Home';
import ListarPlantas from '../components/ListarPlanta';
import Login from '../components/Login';
import NavBars from '../components/NavBars';
import RegisterUser from '../components/RegisterUser';
import RickandMorty from '../components/RickandMorty';


const AppRouters = () => {

    return (
        <BrowserRouter>
        <NavBars/>
            <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/register" element={<RegisterUser/>} />
                    <Route path="/" element={<Login/>} />
                    <Route path="/api" element={<RickandMorty/>} />
                    <Route path="/agregar" element={<AgregarPlantas/>} />
                    <Route path="/listar" element={<ListarPlantas/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;