import { Button } from '@mui/material';
import React from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import { searchPlantaAsync } from '../redux/actions/actionPlantas';
import ListarPlanta from './ListarPlanta';

const Search = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues:{
            search: ''
        },
        validationSchema: Yup.object({
            search: Yup.string().required('Debes ingresar valor a buscar')
        }),
        onSubmit: ({search})=>{
            console.log(search)
            dispatch(searchPlantaAsync(search))

        }

    })
    return (
        <div>
            <center>
                <form onSubmit={formik.handleSubmit}>
                    <input placeholder="Search" name="search" onChange={formik.handleChange}/>
                    <Button variant="contained" color="success" type="submit" style={{margin: "2%"}}>
                                Buscar
                        </Button>
                </form>
                <ListarPlanta/>
            </center>
        </div>
    );
};

export default Search;