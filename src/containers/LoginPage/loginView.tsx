import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviliNavLogo from '../../assets/images/MoviliNav_Log_Usuario.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';
import '../../containers/LoginPage/loginStyles.css';
import { LoginViewProps } from '.';
import packageJson from '../../../package.json';

const LoginView: React.FC<LoginViewProps> = ({
  loginCredentials,
  setLoginCredentials,
  usersLoginAutentication,
  mostrarContrasena,
  handleTogglePasswordVisibility,
  handleInputChange
}: LoginViewProps) => {

  const appVersion: string = packageJson.version;

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center login-container">
      <div className="card p-4">
        <div className="text-center mb-4">
          <strong>Version: {appVersion}</strong>
        </div>
        <div className="text-center mb-4">
          <img
            src={MoviliNavLogo}
            alt="Logo"
            style={{ maxWidth: '600px', maxHeight: '350px' }}
          />
        </div>
        <form onSubmit={() => { }}>
          <div className="mb-3 custom-input-width" >
            <label htmlFor="userName" className="form-label">
              User Name:
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control custom-input custom-input-width"
                id="userName"
                name="userName"
                value={loginCredentials.userName}
                onChange={(e) => {

                  handleInputChange(e);
                  setLoginCredentials({ ...loginCredentials, userName: e.target.value });
                }}
                maxLength={30}
              />
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label custom-input-width">
              Password:
            </label>
            <div className="input-group custom-input-width">
              <input
                type={mostrarContrasena ? 'text' : 'password'}
                className="form-control"
                id="password"
                name="password"
                value={loginCredentials.password}
                onChange={(e) => {
                  handleInputChange(e);
                  setLoginCredentials({ ...loginCredentials, password: e.target.value });
                }}
                maxLength={30}
              />
              <button
                type="button"
                className="btn btn-outline-secondary custom-btn"
                onClick={handleTogglePasswordVisibility}
              >
                {mostrarContrasena ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </button>
            </div>
          </div>
          <div className="text-center mt-3">
            <button
              type="button"
              className="btn btn-dark"
              onClick={usersLoginAutentication}>
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
