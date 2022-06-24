import * as React from 'react';
import {useDispatch} from 'react-redux'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import {useForm} from '../hooks/useForm'
import { FileUpload } from '../helpers/FileUpload';
import {addPlantaAsync} from '../redux/actions/actionPlantas'

function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
        if (focused) {
            return 'This field is being focused';
        }

        return 'Helper text';
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
}

export default function AgregarPlantas() {

    const dispatch = useDispatch()

   const  [formValue, handleInputChange, reset] = useForm({
       nombre: '',
       precio: '',
       imagen: ''
   })

   
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formValue)
        dispatch(addPlantaAsync(formValue))
        reset()

    }

    const handleFileChange =(e)=>{
       const file= e.target.files[0]
       //llamar a la configuracion de Cloudinary
       FileUpload(file)
       .then((resp)=>{
           formValue.imagen = resp
           console.log(resp)
       })
       .catch((error)=>{console.warn(error)});

    }

    return (
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <FormControl sx={{ width: '25ch' }} >
                <OutlinedInput placeholder="Nombre" type="text" name="nombre" onChange={handleInputChange} value={formValue.nombre}/>
                <MyFormHelperText />
            </FormControl>
            <FormControl sx={{ width: '25ch' }} >
                <OutlinedInput placeholder="Precio" type="number" name="precio" onChange={handleInputChange} value={formValue.precio}/>
                <MyFormHelperText />
            </FormControl>
            <FormControl sx={{ width: '25ch' }} >
                <OutlinedInput placeholder="Imagen" type="file" name="imagen" onChange={handleFileChange} />
                <MyFormHelperText />
            </FormControl>
            <Button variant="contained" color="success" type="submit" style={{ margin: "2%" }}>
                Guardar
            </Button>
        </Box>
    );
}
