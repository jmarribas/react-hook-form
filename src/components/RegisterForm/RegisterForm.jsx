import { useForm } from 'react-hook-form'
import './RegisterForm.css'

const RegisterForm = () => {
const {register, handleSubmit, formState: {errors}} = useForm()

const submit = (data) => {
console.log(data);
}

  return (
    <div className='formDiv'>
      <h2>Formulario de registro</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id='name' {...register("name", {required: "Debes poner un nombre"})}/>
          {errors.name && <p className='errors'>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="surname">Apellidos:</label>
          <input type="text" id='surname' {...register("surname")}/>
        </div>
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input type="text" id='username' {...register("username", {required: "Debes poner un nombre de usuario"})}/>
        {errors.username && <p className='errors'>{errors.username.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id='email' {...register("email", {
            required: "Sebes poner un correo electrónico",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "El formato de email no es correcto"
            }
            })}/>
            {errors.email && <p className='errors'>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id='password' {...register("password", {
            required: "Debes poner una contraseña",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/,
              message: "8 Cartacteres, 1 mayuscula y 1 minúscula"
            }
            })}/>
          {errors.password && <p className={"errors"}>{errors.password.message}</p>}
        </div>
        <button id='button' type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default RegisterForm