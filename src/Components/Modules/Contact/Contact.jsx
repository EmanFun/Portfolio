//import React from "react";
import {divider, container, form, label, input} from './Contact.module.css';
import {useForm} from 'react-hook-form';


const Contact = () => {

  const {register, handleSubmit, formState:{ errors }} = useForm()



  return (<>
    <section className={divider}>

      
    </section>
    <section className={container}>
        <form className={form} onSubmit={handleSubmit((data)=> console.log(data))}>
          
        <h3 className={label}>Contactame!</h3>
          
          <label>Nombre</label>
          <input className={input} {...register('name', {required: true})}/>
          <label>Mensaje</label>
          <textarea className={input} {...register('message', {required: true})}/>

          <input  type='submit' value='Enviar' />

        </form>
    </section>
  </>
  );
};

export default Contact;






