import baseAPI from "./config";

interface infoRegister {
  name: string,
  email: string,
  apartment: string,
  password: string,
}

export default function registerUser(register: infoRegister){
  return baseAPI.post("/user", register)
}