import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../Services/api";

import { Container, FormContent, Content, MainContent } from "./styles";
import img from "../../assets/habit.png";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useLogged } from "../../Provider/Login";

function SignUp() {
  const { logged } = useLogged();
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
          position: "top",
          description: "Sua conta foi criada com sucesso.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        return history.push("/");
      })
      .catch((err) => {
        toast({
          title: "Erro ao criar conta!",
          position: "top",
          description: "E-mail ou username inválido",
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
    <Container>
      <Content>
        <h1>Discipliny</h1>
        <MainContent>
          <img src={img} alt="Ilustração" className="display" />
          <FormContent>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit(toSubmit)}>
              <FormControl isInvalid={errors.username?.message}>
                <FormLabel>Nome</FormLabel>
                <Input
                  {...register("username")}
                  focusBorderColor="white"
                  placeholder="Insira seu nome de usuário"
                />
                <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.email?.message}>
                <FormLabel>Email</FormLabel>
                <Input
                  {...register("email")}
                  focusBorderColor="white"
                  placeholder="Seu email válido"
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.confirmEmail?.message}>
                <FormLabel>Confirmar email</FormLabel>
                <Input
                  {...register("confirmEmail")}
                  focusBorderColor="white"
                  placeholder="Confirme seu email"
                />
                <FormErrorMessage>
                  {errors.confirmEmail?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password?.message}>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  {...register("password")}
                  focusBorderColor="white"
                  placeholder="Uma senha bem segura"
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.confirmPassword?.message}>
                <FormLabel>Confirmar senha</FormLabel>
                <Input
                  type="password"
                  {...register("confirmPassword")}
                  focusBorderColor="white"
                  placeholder="Confirme sua senha"
                />
                <FormErrorMessage>
                  {errors.confirmPassword?.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                _hover={{ color: "orange.900", bg: "yellow.50" }}
                type="submit"
              >
                Enviar
              </Button>
              <p>
                Já possui conta? <Link to="/">Login</Link>
              </p>
            </form>
          </FormContent>
        </MainContent>
      </Content>
    </Container>
  );
}
export default SignUp;
