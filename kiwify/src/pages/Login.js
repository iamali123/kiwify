// Render Prop
import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet";
import Button from "./../components/Button/Button";
import InputField from "../components/Input/Input";

const validationSchema = Yup.object().shape({
  password: Yup.string().required("Esse campo é obrigatório").label("Password"),
  Email: Yup.string()
    .email("O e-mail deve ser válido")
    .required("Esse campo é obrigatório")
    .label("Email"),
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      Email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              src={require("../assets/img/kiwify-green-logo.png")}
              alt="kiwify-green-logo"
              className="mx-auto h-12 w-auto"
            />
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Entrar na sua conta
            </h2>
            <p className="mt-2 text-center text-base leading-5 text-gray-600">
              Ou
              <Link
                to={"/signup"}
                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none ml-1 focus:underline transition ease-in-out duration-150"
              >
                fazer cadastro
              </Link>
            </p>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                >
                  E-mail
                </label>
                <InputField
                  type="email"
                  name="email"
                  id="Email"
                  onChange={formik?.handleChange}
                  values={formik?.values?.Email}
                />
                {formik.touched.Email && formik.errors.Email ? (
                  <p className="mt-2 text-sm" style={{ color: "#FF0000" }}>
                    {formik.errors.Email}
                  </p>
                ) : null}
              </div>
              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                >
                  Senha
                </label>
                <InputField
                  type="password"
                  name="password"
                  onChange={formik?.handleChange}
                  values={formik?.values?.password}
                />
                <p className="mt-2 text-sm" style={{ color: "#FF0000" }}>
                  {formik?.touched?.password && formik?.errors?.password}
                </p>
              </div>
              <div className="mt-2 flex items-center justify-end">
                <div className="text-sm leading-5">
                  <Link
                    to={"/"}
                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
              </div>
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <Button type="submit" onClick={formik.handleSubmit}>
                    Entrar
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
