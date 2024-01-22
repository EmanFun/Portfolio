//import React from "react";
import {divider, container, form} from './Contact.module.css';
import {useForm} from 'react-hook-form';


const Contact = () => {

  const {register, handleSubmit, formState:{ errors }} = useForm()

  return (<>
    <section className={divider}>
    </section>
    <section className={container}>
    {/* 
        <form className={form} onSubmit={handleSubmit((data)=> console.log(data))}>
          
          <h3>¡Contactame!</h3>
          
          <label>Nombre</label>
          <input  {...register('name', {required: true})}/>
          <label>Mensaje</label>
          <textarea  {...register('message', {required: true})}/>

          <input  type='submit' value='Enviar' />
        </form>
      */}
    </section> 

  </>
  );
};

export default Contact;






