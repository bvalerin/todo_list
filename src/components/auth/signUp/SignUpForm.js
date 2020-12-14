import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import email from "../../../images/email.svg";
import pass from "../../../images/pass.svg";
import user from "../../../images/user.svg";

const SignUpForm = (props) => {
  // Formulario y validación con formik y Yup

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
      isSubmitting: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El Nombre es Obligatorio"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El Email es Obligatorio"),
      password: Yup.string()
        .required("El password no puede ir vacio")
        .min(2, "El password debe contener al menos 6 caracteres"),
    }),
    onSubmit: (values) => {
        
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
          
          {formik.touched.email && formik.errors.email ? <p className="red">{formik.errors.email}</p>: null}

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

        <button className="iniciarSesion" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
