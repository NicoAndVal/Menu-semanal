import React from 'react'
import {withFormik, Field, ErrorMessage, Form} from 'formik'

function Formulario(props){
    const {
        isSubmitting,
        handleSubmit,
        isValid
    } = props

    return (
        <Form onSubmit={handleSubmit}>
            <div className='row'>
                Email:
            <Field name='email' type='email' />
                <ErrorMessage name='email'>
                    {message => <div className='error'>{message}</div>}
                </ErrorMessage>

            </div>
            <div className='row'>
                Password:
            <Field name='password' type='password' />
                <ErrorMessage name='password'>
                    {message => <div className='error'>{message}</div>}
                </ErrorMessage>
            </div>
            <div className='row'>

                <button type='submit'
                    className={`submit ${isSubmitting || !isValid ? 'disabled' : ''}`}
                    disabled={isSubmitting || !isValid}>Boton</button>
            </div>
        </Form>
    )
}

export default withFormik({

    mapPropsToValues(props){
        return{
            email: '',
            password : ''
        }
    },
    
    validate(values){
        const errors ={}

        if(!values.password){
            errors.password = 'EL PASSWORD ES REQUERIDO'
        }else if(values.password.length < 8){
            errors.password = 'La contraseña debe tener más de 8 caracteres'
        }

        return errors
    },


    handleSubmit(values, formikBag){
        formikBag.setSubmitting(false)
        console.log(values)
    }
}) (Formulario) 