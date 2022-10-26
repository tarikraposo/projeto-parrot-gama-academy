import baseAPI from "./config";

interface infoLogin {
  name: string,
  password: string,
}

export default function loginUser(login: infoLogin){
  return baseAPI.post("/login", login)
}