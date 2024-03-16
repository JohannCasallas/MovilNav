import ILoginCredentials from "../models/ILoginCredentials";


class LoginService {

  async usersLogin(student: ILoginCredentials): Promise<any> {
    const response = await fetch('https://localhost:7203/usersMovilNav/UsersLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(student)
    });
    return response.json();
  }
}

export default LoginService;
