export interface registerData extends email{
    name: string;
     password: string;
    rePassword: string;
    phone: string;
}
export interface email{
    email: string;
}
 export interface resetcode {
  resetCode: string;
}
export interface resetpassword extends email {
  newPassword: string;
}