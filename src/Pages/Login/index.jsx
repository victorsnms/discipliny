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
import { useHabits } from "../../Provider/Habits";

function Login({ logged, setLogged }) {
  const { getHabits } = useHabits();
  const history = useHistory();
  const toast = useToast();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Senhas devem ter no mínimo 8 digitos"),
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
    <>
      Login
      <form onSubmit={handleSubmit(toSubmit)}>
        <FormControl isInvalid={errors.username?.message}>
          <FormLabel>Nome de usuário</FormLabel>
          <Input {...register("username")} />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password?.message}>
          <FormLabel>Senha</FormLabel>
          <Input type="password" {...register("password")} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit">Enviar</Button>
      </form>
    </>
  );
}
export default Login;
