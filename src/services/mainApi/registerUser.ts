import baseAPI from "./config";

interface infoRegister {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  apartment: string,
  link: string
}

export default function loginUser(register: infoRegister){
  return baseAPI.post("/user", register)
}