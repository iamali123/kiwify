// Render Prop
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import { Helmet } from "react-helmet";
import Button from "./../components/Button/Button";
import InputField from "../components/Input/Input";

const Login = () => (
  <>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            src={require("../assets/img/kiwify-green-logo.png")}
            alt="kiwify-green-logo"
            class="mx-auto h-12 w-auto"
          />
          <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Entrar na sua conta
          </h2>
          <p class="mt-2 text-center text-base leading-5 text-gray-600">
            Ou
            <Link
              to={"/signup"}
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none ml-1 focus:underline transition ease-in-out duration-150"
            >
              fazer cadastro
            </Link>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                  >
                    E-mail
                  </label>
                  <InputField type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                  >
                    Senha
                  </label>
                  <InputField type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </div>
                <div class="mt-2 flex items-center justify-end">
                  <div class="text-sm leading-5">
                    <Link
                      to={"/"}
                      class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
                </div>
                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <Button type="submit" disabled={isSubmitting}>
                      Entrar
                    </Button>
                  </span>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </>
);

export default Login;
