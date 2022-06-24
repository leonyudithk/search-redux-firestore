import React from 'react';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import { GoogleLogin, loginAsync } from '../redux/actions/actionsRegister';
import { useDispatch } from 'react-redux';

const SignupSchema = Yup.object().shape({
   
    email: Yup.string().email('debe ser del tipo ana@ana.com').required("Este email se requiere"),
    pass1: Yup.string().min(6, 'Password muy corto').max(20, 'Password muy Largo').required("este campo es obligatorio"),
   
})
const Login = () => {
    const dispatch = useDispatch()
    return (
        <div>
             <Formik
                initialValues={
                    {
                       
                        email: '',
                        pass1: '',
                 
                    }
                }
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values.email, values.pass1)
                    dispatch(loginAsync(values.email, values.pass1))
                   
                }}
            >
                {({ errors, touched, handleReset}) => (

                    <Form>
                        <Field type="email" placeholder="Email" name="email" style={{margin: "2%"}}/>
                        {errors.email && touched.email ?
                            (<div>{errors.email}</div>) : null}

                        <Field type="password" placeholder="Password 1" name="pass1" style={{margin: "2%"}}/>
                        {errors.pass1 && touched.pass1 ?
                            (<div>{errors.pass1}</div>) : null}

                        <Button variant="contained" color="success" type="submit" style={{margin: "2%"}}>
                            Entrar
                        </Button>
                        <Button variant="contained" color="success"  onClick={()=> dispatch(GoogleLogin())} style={{margin: "2%"}}>
                            Google
                        </Button>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;