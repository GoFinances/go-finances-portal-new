import { useToast as useToastChakraUI, UseToastOptions } from "@chakra-ui/react";

export interface IUseToastResponse {
  messageToast: (title:string, description:string, options?:UseToastOptions ) => void
}

const useToast = (): IUseToastResponse => {
  const toast = useToastChakraUI()

  const messageToast = (title:string, description:string, options?: UseToastOptions) => {
    toast({
        title,
        description ,
        duration: 5000,
        isClosable: true,
        position: "top-right",
        ...options
      })
  }

  return {
    messageToast
  }
}


export { useToast };