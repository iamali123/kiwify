import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet";
import InputField from "./../components/Input/Input";
import Button from "./../components/Button/Button";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Cadastro</title>
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
              Criar nova conta
            </h2>
            <p className="mt-2 text-center text-base leading-5 text-gray-600">
              Ou
              <Link
                to={"/"}
                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none ml-1 focus:underline transition ease-in-out duration-150"
              >
                entrar na sua conta existente
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Formik
            initialValues={{ password: "", confirmEmail: "", email: "" }}
            validationSchema={Yup.object({
              password: Yup.string().required("Esse campo é obrigatório"),
              email: Yup.string()
                .email("O e-mail deve ser válido")
                .required("Esse campo é obrigatório"),
              confirmEmail: Yup.string()
                .email("O e-mail deve ser válido")
                .required("Confirmar e-mail é obrigatório")
                .oneOf(
                  [Yup.ref("email"), null],
                  "Os dois e-mails devem ser iguais."
                ),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
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
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                    className={` ${
                      formik?.touched?.email &&
                      formik?.errors?.email &&
                      "border-[#FF0000]"
                    }`}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="mt-1 text-sm" style={{ color: "#FF0000" }}>
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="repeat-email"
                    className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                  >
                    Repetir e-mail
                  </label>
                  <InputField
                    id="confirmEmail"
                    type="email"
                    className={` ${
                      formik?.touched?.confirmEmail &&
                      formik?.errors?.confirmEmail &&
                      "border-[#FF0000]"
                    }`}
                    {...formik.getFieldProps("confirmEmail")}
                  />
                  {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
                    <p className="mt-1 text-sm" style={{ color: "#FF0000" }}>
                      {formik.errors.confirmEmail}
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
                    id="password"
                    type="text"
                    className={` ${
                      formik?.touched?.password &&
                      formik?.errors?.password &&
                      "border-[#FF0000]"
                    }`}
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <p className="mt-1 text-sm" style={{ color: "#FF0000" }}>
                      {formik.errors.password}
                    </p>
                  ) : null}
                </div>
                <div class="mt-6">
                  <label class="relative flex items-start mt-2">
                    <div class="flex items-center h-5">
                      <input
                        type="checkbox"
                        class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                      />
                    </div>
                    <div class="ml-2 text-sm leading-5">
                      <span class="font-medium text-gray-700">
                        Eu li e aceito os
                        <a
                          href="https://kiwify.com.br/termos-de-uso"
                          target="_blank"
                          class="underline"
                        >
                          termos de uso
                        </a>
                        ,
                        <a
                          href="https://kiwify.com.br/licenca-de-uso-software"
                          target="_blank"
                          class="underline"
                        >
                          termos de licença de uso de software
                        </a>
                        ,
                        <a
                          href="https://kiwify.com.br/politica-de-conteudo"
                          target="_blank"
                          class="underline"
                        >
                          política de conteúdo
                        </a>
                        da Kiwify
                      </span>
                    </div>
                  </label>
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
    </>
  );
};

export default Signup;
