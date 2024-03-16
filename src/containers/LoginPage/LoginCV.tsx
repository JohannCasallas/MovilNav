import React, { useState } from 'react';
import { IUsersLogin } from '../../models/IUsersLogin';
import { LoginCVProps, initialLoginCredentials, initialUserLogin } from '.';
import LoginService from '../../services/loginService';
import LoginView from './loginView';
import ILoginCredentials from '../../models/ILoginCredentials';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const loginService = new LoginService();

const LoginCV: React.FC<LoginCVProps> = () => {
  const [loginCredentials, setLoginCredentials] = useState<ILoginCredentials>(initialLoginCredentials);
  const [userLogin, setUserLogin] = useState<IUsersLogin>(initialUserLogin);
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setMostrarContrasena(!mostrarContrasena);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const usersLoginAutentication = async () => {
    console.log(loginCredentials, 'loginCredentials');
    const userData = await loginService.usersLogin(loginCredentials);
    console.log(userData, 'userData');

    if (userData.success) {
        // Si el inicio de sesión es exitoso, mostrar un mensaje de éxito
        toast.success(userData.data); // Aquí puedes personalizar el mensaje según tu preferencia
    } else {
        // Si hay un error, mostrar un mensaje de error
        toast.error(userData.errorMessage); // Otra opción es mostrar un mensaje genérico de error si errorMessage es null o undefined
    }
};


  return (
    <>
    <ToastContainer /> 
    <LoginView
      loginCredentials={loginCredentials}
      setLoginCredentials={setLoginCredentials}
      usersLoginAutentication={usersLoginAutentication}
      mostrarContrasena={mostrarContrasena}
      handleTogglePasswordVisibility={handleTogglePasswordVisibility}
      handleInputChange={handleInputChange}
    />
    </>
  );
};

export default LoginCV;
