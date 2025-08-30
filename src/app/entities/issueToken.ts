import type { User } from "./authenticate-user";


type UserToken = {
  token: string;
}

export class IssueTokenService {

  public usertoken(userId: User): Promise<UserToken> {
    const delay = Math.random() * 5000;
    const validationUserId = userId.userId[0] === 'A';
    const date = new Date().toISOString().slice(0, 19);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validationUserId) {
          reject(new Error('Invalid user ID'));
        } else {
          const token = `${userId.userId}_${date}Z`;
          resolve({ token });
        }
      }, delay);
    });
  }

}