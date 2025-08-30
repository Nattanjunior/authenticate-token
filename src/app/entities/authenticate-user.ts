type Credentials = {
  username: string;
  password: string;
};

export type User = {
  userId: string;
};
export class AuthenticationService {
  public authenticate(credentials: Credentials): Promise<User> {
    const delay = Math.random() * 5000;
    const ValidationPasswordUser = credentials.password.toUpperCase() == credentials.username;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ValidationPasswordUser) {
          resolve({
            userId: credentials.username,
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, delay);
    });
  }

}
