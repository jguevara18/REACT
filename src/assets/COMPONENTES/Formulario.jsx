import React from 'react';
import { Formik } from 'formik';

const Formulario = () => {
return (
<>
  <Formik
        initialValues={{
          nombres: "",
          apellidos: "",
          email: "",
        }}
        onSubmit={(valores)=>{
        
        }}

        validate = {(valores)=>{
            let errores = {};
            if (!valores.nombres) {
              errores.nombres = "Por favor ingrese su nombre";
              } else if (!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(valores.nombres)) 
              {
              errores.nombres =
                "El nombre solo puede tener letras";
            }
            if (!valores.apellidos) {
              errores.apellidos = "Por favor ingrese su apellido";
              } else if (!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(valores.apellidos)) 
              {
              errores.apellidos =
                  "El apellido solo puede tener letras";
              }

            if (!valores.email) {
              errores.email = "Por favor ingrese su email";
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) 
                {
                  errores.email =
                    "El correo solo puede tener letras, numeros,puntos y guiones bajos";
                }
            return errores;
        }}
        >
        {({handleSubmit, values, handleChange, handleBlur, errors})=>(
        <form className='App' onSubmit={handleSubmit}>
            <div className='formulario'>
                <label htmlFor='nombres'>Nombres</label>
                <input type= 'text' name='nombres' id='nombres'              
                placeholder='Nombre'
                value={values.nombres}
                onChange={handleChange}
                onBlur={handleBlur}/>
                {errors.nombres && <div className="error">{errors.nombres}</div>}
               
                <label htmlFor='apellidos'>Apellidos</label>
                <input type= 'text' name='apellidos' id='apellidos' 
                placeholder='Apellidos'
                value={values.apellidos}
                onChange={handleChange}
                onBlur={handleBlur}/>
                {errors.apellidos && <div className="error">{errors.apellidos}</div>}
          
            
                <label htmlFor='email'>Email</label>
                <input type= 'email' name='email' id='email' 
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}/>
                {errors.email && <div className="error">{errors.email}</div>}
              
              
            
                <button  type='submit'>Enviar</button>
           </div> 
                    
        </form>
        )}
  </Formik>
</>
);
}
export default Formulario;