export interface SignupFormData {
  email: string;
  password: string;
  error: string;
  name: string;
  userType: string;
}

export interface UseForm {
  data: string;
  schema: string;
  doSubmit: string;
  name: any;
  userType: any;
}
