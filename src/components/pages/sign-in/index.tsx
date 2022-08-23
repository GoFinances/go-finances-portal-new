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

interface IFormValues {
  user: string;
  password: string;
}

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const schema = yup.object({
    user: yup.string().required("Nome do usuário é obrigatório."),
    password: yup.string().required("Senha do usuário é obrigatório.")
  }).required();


  const {
    formState: { errors, isValidating, isValid},
    register,
    handleSubmit
  } = useForm<IFormValues>({
    mode: "all",
    reValidateMode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: IFormValues) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)
      console.log("handleSubmit", data)
    }, 1000)
  }

  return (
    <Box width="100%" height="100vh" display="flex" justifyContent={"center"} alignItems="center" data-testid={"sign-in"}>
      <Grid width="450px" bg={'standard.white'} padding="md">
        <form onSubmit={handleSubmit(onSubmit)} data-testid={"formulario-login"}>
          <GridItem mb="xxxs">
            <FormInput 
              isDisabled={isLoading}
              register={register}
              fieldRegister="user"
              name="user"
              label={{ text: "Usuário" }} 
              errors={errors}
              type="text"
              placeholder='Informe seu usuário'
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
