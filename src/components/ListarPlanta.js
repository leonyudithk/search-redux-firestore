import React, { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import { listaplantaAsync } from '../redux/actions/actionPlantas';
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material';
import ReactImageMagnify from 'react-image-magnify';



export default function ListarPlanta() {

    const dispatch = useDispatch()
    const { planta } = useSelector(store => store.plantas)

    useEffect(() => {
        dispatch(listaplantaAsync())
    }, [dispatch])

    return (
        <div style={{ margin: "5%" }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    planta.map((p, idx) => (
                        <div key={idx}>
                             {/* <ReactImageMagnify {...{
                                          smallImage: {
                                              alt: 'Wristwatch by Ted Baker London',
                                                isFluidWidth: true,
                                                src: p.imagen
                                            },
                                           largeImage: {
                                                src: p.imagen,
                                               width: 1200,
                                                height: 1800
                                           }
                                        }} /> */}
                            <Card sx={{ maxWidth: 345 }} style={{ margin: "2%" }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }

                                    title={p.nombre}
                                    subheader="Junio 24 2022"
                                />
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: p.imagen
                                    },
                                    largeImage: {
                                        src: p.imagen,
                                        width: 1200,
                                        height: 1800
                                    }
                                }} />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {p.precio}
                                    </Typography>
                                </CardContent>


                            </Card>
                        </div>
                    ))
                }
            </Grid>
        </div>

    );
}
