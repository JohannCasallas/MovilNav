import ILoginCredentials from "../../models/ILoginCredentials";
import { IUsersLogin } from "../../models/IUsersLogin";

export const initialUserLogin: IUsersLogin = {
  userId: 0,
  userName: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  profileUser: '',
  accountStatus: false
};

export const initialLoginCredentials: ILoginCredentials = {
  userName: '',
  password: ''
};

export interface LoginViewProps {
  loginCredentials: ILoginCredentials;
  setLoginCredentials: React.Dispatch<React.SetStateAction<ILoginCredentials>>;
  usersLoginAutentication: () => Promise<void>;
  mostrarContrasena: boolean;
  handleTogglePasswordVisibility: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LoginCVProps {
}