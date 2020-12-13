import { withFormik } from "formik";
import email from "../../../images/email.svg";
import pass from "../../../images/pass.svg";
import user from "../../../images/user.svg";


function signUpForm(props) {

    const { handleSubmit,} = props;

    return (<div>
            <form onSubmit = {handleSubmit}>

            <div className="inputLogin">
            <img src={user} alt="user" />
            <input
                type="user"
                name="name"
                placeholder="Nombre"
            />
            </div>

            <div className="inputLogin">
            <img src={email} alt="Email" />
            <input
                type="email"
                name="email"
                placeholder="Email"
            />
            </div>

            <div className="inputLogin">
            <img src={pass} alt="Password" />
            <input
                type="password"
                name="password"
                placeholder="Contraseña"
            />
            </div>

            <div className="inputLogin">
            <img src={pass} alt="Password" />
            <input
                type="password"
                name="password2"
                placeholder="Repetir Contraseña"
            />
            </div>

            <button className="iniciarSesion" type="submit">
                Registrar
            </button>

        </form>
    </div>);
}

export default withFormik({

    handleSubmit(values){

        alert(values);

        console.log(values);
    },

})(signUpForm);