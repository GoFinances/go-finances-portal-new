import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useRouter } from 'next/router';
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


import { useAuthentication } from '../../../hooks/use-authentication';

import { LoginUser } from '../../../models/authentication/loginUser';

interface IFormValues {
  email: string;
  password: string;
}

export default function SignIn() {
  const router = useRouter()
  
  const { userAuthenticated, authenticateMutate, signIn } = useAuthentication()

  const schema = yup.object({
    email: yup.string().required("E-mail é obrigatório.").email("E-mail incorreto"),
    password: yup.string().required("Senha do usuário é obrigatório.")
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

  const onSubmit = useCallback((data: IFormValues) => {
    signIn( { ...data } as unknown as LoginUser )
  },[signIn])

  const redirect = (path: string) => {
    router.push(path)
  }

  return (
    <Box width="100%" height="100vh" display="flex" justifyContent={"center"} alignItems="center" data-testid={"sign-in"}>
      <Grid width="450px" bg={'standard.white'} padding="md">
        <form onSubmit={handleSubmit(onSubmit)} data-testid={"formulario-login"}>
          <GridItem mb="xxxs">
            <FormInput 
              isDisabled={authenticateMutate?.isLoading}
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
              isDisabled={authenticateMutate?.isLoading}
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
              isLoading={authenticateMutate?.isLoading}
            >Entrar</Button>
            <Button 
              type={"submit"} 
              variant="default-outline"
              width={"49%"} 
              loadingText='Carregando ...' 
              onClick={() => redirect('/sign-up')}
            >
              Novo
            </Button>
          </GridItem>
        </form>
      </Grid>
    </Box>
  )
}
