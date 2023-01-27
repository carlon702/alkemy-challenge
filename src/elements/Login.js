import axios from "axios"
import sweetAlert from 'sweetalert2';
import { Navigate } from "react-router-dom"





function Login() {


    
    
    let token = sessionStorage.getItem('token');


    const SubmitHandler = e => {


        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
      
       
       
        
        
       

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


        if(email===""||password===""){
            sweetAlert.fire({
                title: 'Los campos no pueden estar vacios!',
                text: 'Llena los campos necesarios para continuar',
                icon: 'error',
                confirmButtonText: 'Ok'
              }) ;
            return;//return stops validations if triggered
        }

        if(email !== "" && !regexEmail.test(email)){
            sweetAlert.fire({
                title: 'Debes introducir un email valido',
                text: 'El formato de email debe ser xxx@xxx.xxx',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }

        if(email !== "challenge@alkemy.org" || password !== "react"){
            sweetAlert.fire({
                title: 'Credenciales invalidas',
                text: 'El email y/o contrasena son incorrectos',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return
        }


        
        axios.post('http://challenge-react.alkemy.org', {email, password})
        .then(response => {
            sweetAlert.fire({
                title: "Exito",
                text: 'Logueado con exito',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            const tokenData = response.data.token;
            
            sessionStorage.setItem('token', tokenData);
            if(sessionStorage.token){
                setTimeout(function () {
                    window.location.href = "/list";
                 }, 3000);
                 
            }
            
            
        })

        
        }

     
        
    return (
        <>
        {token && (<Navigate to={'/list'} replace={true}/>)}
        <div>
            
        
        <form onSubmit={SubmitHandler}>
            
            <label>
                <span>Correo Electronico</span> <br/>
            <input type="text" name="email" />
            </label>
            <br/>
            <label>
                <span>Contrasena</span> <br/>
            <input type="password" name="password" />
            </label>
            <br/>
            <button type="submit"> Ingresar </button>

        </form>

        </div>

        </>
    )
};



export default Login


