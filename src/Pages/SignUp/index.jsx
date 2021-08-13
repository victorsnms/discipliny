import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../Services/api";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

function SignUp({ logged }) {
  const history = useHistory();
  const toast = useToast();

  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[a-zA-Z]+$/, "Apenas letras"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    confirmEmail: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("email"), null], "Os emails devem ser iguais"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Senhas devem ter no mínimo 8 digitos"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const toSubmit = (user) => {
    const { username, password, email } = user;
    const apiUser = {
      username: username,
      password: password,
      email: email,
    };

    api
      .post("/users/", apiUser)
      .then((res) => {
        toast({
          title: "Conta criada!",
          description: "Sua conta foi criada com sucesso.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        localStorage.setItem(
          "@Discipliny:Nameuser",
          JSON.stringify(res.data.username)
        );
        return history.push("/");
      })
      .catch((err) => {
        toast({
          title: "Erro ao criar conta!",
          description: "Não foi possível criar sua conta",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  if (logged) {
    return <Redirect to="/habits" />;
  }

  return (
    <>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(toSubmit)}>
        <FormControl isInvalid={errors.username?.message}>
          <FormLabel>Nome</FormLabel>
          <Input {...register("username")} />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email?.message}>
          <FormLabel>Email</FormLabel>
          <Input {...register("email")} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.confirmEmail?.message}>
          <FormLabel>Confirmar email</FormLabel>
          <Input {...register("confirmEmail")} />
          <FormErrorMessage>{errors.confirmEmail?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password?.message}>
          <FormLabel>Senha</FormLabel>
          <Input type="password" {...register("password")} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.confirmPassword?.message}>
          <FormLabel>Confirmar senha</FormLabel>
          <Input type="password" {...register("confirmPassword")} />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit">Enviar</Button>
      </form>
    </>
  );
}
export default SignUp;
