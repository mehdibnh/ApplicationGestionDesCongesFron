import {Role} from "./role";

export class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  accountLocked: boolean;
  enabled: boolean;
  role: Role;
  token: string;

  constructor(
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    accountLocked: boolean,
    enabled: boolean,
    role: Role,
    token: string
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.accountLocked = accountLocked;
    this.enabled = enabled;
    this.role = role;
    this.token = token;
  }
}
