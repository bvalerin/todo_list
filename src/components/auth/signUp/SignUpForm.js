import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import email from "../../../images/email.svg";
import pass from "../../../images/pass.svg";
import user from "../../../images/user.svg";
import { withSnackbar, useSnackbar } from 'notistack';

const SignUpForm = (props) => {
  // Formulario y validación con formik y Yup

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function handleClick() {
    if(formik.touched.name && formik.errors.name){
      enqueueSnackbar(formik.errors.name, {variant:"error"});
    } else if (formik.touched.email && formik.errors.email) {
      enqueueSnackbar(formik.errors.email, {variant:"error"});
    } else if (formik.touched.password && formik.errors.password) {
      enqueueSnackbar(formik.errors.password, {variant:"error"});
    } else if (formik.touched.password2 && formik.errors.password2) {
      enqueueSnackbar(formik.errors.password2, {variant:"error"});
    }
  };






  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El Nombre es Obligatorio"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El Email es Obligatorio"),
      password: Yup.string()
        .required("El password no puede ir vacio")
        .min(2, "El password debe contener al menos 6 caracteres"),
      password2: Yup.string()
      .required("El password no puede ir vacio")
      .min(2, "El password debe contener al menos 6 caracteres"),
    }),
    onSubmit: (values) => {
      enqueueSnackbar("Formulario enviado", {variant:"success"});
      try {
        console.log(values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="inputLogin">
          <img src={user} alt="Email" />

          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            type="text"
            placeholder="Nombre"
            name="name"
          />
        </div>

        <div className="inputLogin">
          <img src={email} alt="Email" />
          
          {/* {formik.touched.email && formik.errors.email ? <p className="red">{formik.errors.email}</p>: null} */}

          {/* {formik.touched.email && formik.errors.email ? props.enqueueSnackbar("Error de conexión", {variant: "error",}): null} */}

          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            type="email"
            name="email"
            placeholder="Correo"
          />

        </div>

        <div className="inputLogin">
          <img src={pass} alt="Password" />
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formik.values.password}
          />
        </div>

        <div className="inputLogin">
          <img src={pass} alt="Password" />
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            name="password2"
            placeholder="Repetir Contraseña"
            value={formik.values.password2}
          />
        </div>

        <button className="iniciarSesion" type="submit" onClick={handleClick}>
          Registrar
        </button>
      </form>
    </div>
  );
};

export default withSnackbar(SignUpForm);
