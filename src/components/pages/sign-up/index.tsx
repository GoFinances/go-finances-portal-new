import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// @Atomic
import { 
  Button,
  Box,
  Grid,
  GridItem
} from '../../atomic'

// @molecules
import FormInput from '../../molecules/form/input'

// @hooks
import { useUser } from '../../../hooks/use-user';
import { useRouter } from 'next/router';

interface IFormValues {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false)

  const { createUser } = useUser()
  const router = useRouter();
  
  const schema = yup.object({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    password: yup.string().required().min(6, 'No mínimo 6 digitos'),
  }).required();


  const {
    formState: { errors, isValid},
    register,
    handleSubmit
  } = useForm<IFormValues>({
    mode: "all",
    reValidateMode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = async ({ name, email, password }: IFormValues) => {
    setIsLoading(true);
    const response = await createUser({ name, email, password })
    if(response){
      router.push("/sign-in")
    }
    setIsLoading(false);
  }

  return (
    <Box width="100%" height="100vh" display="flex" justifyContent={"center"} alignItems="center" data-testid={"sign-up"}>
      <Grid width="450px" bg={'standard.white'} padding="md">
        <form onSubmit={handleSubmit(onSubmit)} data-testid={"formulario-login"}>
          <GridItem mb="xxxs">
            <FormInput 
              isDisabled={isLoading}
              register={register}
              fieldRegister="name"
              name="name"
              label={{ text: "Nome" }} 
              errors={errors}
              type="text"
              placeholder='Informe seu nome'
            />
          </GridItem>
          <GridItem mb="xxxs">
            <FormInput 
              isDisabled={isLoading}
              register={register}
              fieldRegister="email"
              name="email"
              label={{ text: "E-mail" }} 
              errors={errors}
              type="text"
              placeholder='Informe seu e-mail'
            />
          </GridItem>
          <GridItem mb="xxxs">
            <FormInput 
              isDisabled={isLoading}
              register={register}
              fieldRegister="password"
              name="password"
              label={{ text : "Senha" }} 
              errors={errors} 
              type="password"
              placeholder='* * * * * * * *'
            />
          </GridItem>
          <GridItem display={"flex"} flexDirection="row-reverse" justifyContent={'space-between'}>
            <Button 
              type={"submit"} 
              variant="brand-primary-solid"
              width={"49%"} 
              loadingText='Carregando ...' 
              isDisabled={!isValid} 
              isLoading={isLoading}
            >Entrar</Button>
            <Button 
              type={"submit"} 
              variant="default-outline"
              width={"49%"} 
              loadingText='Carregando ...' 
            >
              Novo
            </Button>
          </GridItem>
        </form>
      </Grid>
    </Box>
  )
}
