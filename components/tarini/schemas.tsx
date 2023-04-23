import * as Yup from "yup";

export const FormSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email_id: Yup.string().email().required("Please enter your email"),
  mobile: Yup.string()
    .required("Please enter your mobile number")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  address1: Yup.string().required("Please enter your address"),
  city: Yup.string().required("Please enter your city name"),
  country: Yup.string().required("Please enter your country name"),
  state: Yup.string().required("Please enter your state name"),
  pin: Yup.string().max(6).required("Please enter your pincode"),
});
