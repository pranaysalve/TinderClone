import axios from "axios";
const BASEURL = "https://swippingappbackend.onrender.com/api";
export const loginUser = async (User) => {
  const { FirstName, LastName, Mobile } = User;
  return await axios
    .post(`${BASEURL}/user`, {
      FirstName: User.FirstName,
      LastName: User.LastName,
      MobileNumber: User.MobileNumber,
    })
    .then((res) => res)
    .catch((err) => err);
};

export const otpCheck = async (Details) => {
  return await axios
    .post(`${BASEURL}/user/otpcheck`, {
      MobileNumber: Details.MobileNumber,
      OTP: Details.OTP,
    })
    .then((res) => res)
    .catch((err) => err);
};
