import axios from 'axios';
const BASE_URL = "http://localhost:8000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzFlZWU5Yzk3NmNjMDA3ZmJhZDBmZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTg4NjEwNTMsImV4cCI6MTY1OTEyMDI1M30.bPrRJw2o_rFG-gx-Sw-oFtXoALvOS1-LgHZ5Qimt0Zw"





export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
