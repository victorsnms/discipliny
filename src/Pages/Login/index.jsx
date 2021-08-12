import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../Services/api";

import { Container, Content, FormContent, MainContent } from "./styles";
import img from "../../assets/dizzy.png";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useHabits } from "../../Provider/Habits";

function Login({ logged, setLogged }) {
  const { getHabits } = useHabits();
  const history = useHistory();
  const toast = useToast();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(8, "Senhas devem ter no mínimo 8 digitos!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const toSubmit = ({ username, password }) => {
    const user = { username, password };
    api
      .post("/sessions/", user)
      .then((res) => {
        const { access } = res.data;
        localStorage.setItem("@Discipliny:accessToken", JSON.stringify(access));
        setLogged(true);
        getHabits();
        return history.push("/habits");
      })
      .catch((err) =>
        toast({
          title: "Falha ao logar!",
          description: "Não foi possível completar o seu login.",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
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
            <h2>Login</h2>
            <form onSubmit={handleSubmit(toSubmit)}>
              <FormControl isInvalid={errors.username?.message}>
                <FormLabel>Nome de usuário</FormLabel>
                <Input
                  {...register("username")}
                  focusBorderColor="white"
                  placeholder="O nome que você registrou"
                />
                <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password?.message}>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  {...register("password")}
                  focusBorderColor="white"
                  placeholder="Sua senha segura"
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <Button type="submit">Login</Button>
              <p>
                Não tem conta? <Link to="/signup">Registrar</Link>
              </p>
            </form>
          </FormContent>
        </MainContent>
      </Content>
    </Container>
  );
}
export default Login;
