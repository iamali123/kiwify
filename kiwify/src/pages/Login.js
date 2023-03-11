// Render Prop
import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet";
import Button from "./../components/Button/Button";
import InputField from "../components/Input/Input";

const validationSchema = Yup.object().shape({
  password: Yup.string().required("Esse campo é obrigatório"),
  email: Yup.string()
    .email("O e-mail deve ser válido")
    .required("Esse campo é obrigatório"),
});

const Login = () => {

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
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={Yup.object({
                password: Yup.string().required("Esse campo é obrigatório"),
                email: Yup.string()
                  .email("O e-mail deve ser válido")
                  .required("Esse campo é obrigatório"),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                  const user = JSON.parse(storedUser);
                  if (
                    values.email === user.email &&
                    values.password === user.password
                  ) {
                    setSubmitting(false);
                    alert("You have successfully logged in!");
                  } else {
                    setSubmitting(false);
                    alert("Invalid email or password");
                  }
                } else {
                  setSubmitting(false);
                  alert("No user found. Please sign up first.");
                }
                setSubmitting(false);
                resetForm();
              }}
            >
              {(formik) => (
                <form
                  onSubmit={formik.handleSubmit}
                  className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
                >
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
                      {...formik.getFieldProps("email")}
                      className={` ${
                        formik?.touched?.email &&
                        formik?.errors?.email &&
                        "border-[#FF0000]"
                      }`}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <p className="mt-2 text-sm" style={{ color: "#FF0000" }}>
                        {formik.errors.email}
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
                      {...formik.getFieldProps("password")}
                      className={` ${
                        formik?.touched?.password &&
                        formik?.errors?.password &&
                        "border-[#FF0000]"
                      }`}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <p className="mt-2 text-sm" style={{ color: "#FF0000" }}>
                        {formik.errors.password}
                      </p>
                    ) : null}
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
                      <Button type="submit">Entrar</Button>
                    </span>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
