import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Stack,
    Input,
    useToast
  } from "@chakra-ui/react"

import { motion } from 'framer-motion'
import { useForm } from "react-hook-form";
import React from 'react'
import axios from 'axios'

export default function EmailNotificationButton(){

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const toast = useToast()

    function onSubmit(values, e) {
        e.target.reset()
        return new Promise((resolve) => {
          setTimeout(() => {
            axios.post("/api/email", values)
                .then(res => {
                    console.log(`${values} has been posted.`)
                    console.log(res)
                    toast({
                        title: "Email successfully submitted!",
                        description: "You have been added to the newletter list.",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                      })
                })
                .catch(err => {
                    console.log(values)
                    console.log(err)
                    toast({
                        title: "Error submitting email.",
                        status: "error",
                        isClosable: true,
                      })
                })
            resolve();
          }, 1000);
        });
      }

    return (
        <Popover>
            <PopoverTrigger>
            <motion.div
                animate={{
                    rotate: [10, -10, 0]
                  }}
                transition={{  repeat: Infinity, repeatDelay: 5 }}
            >
                <Button colorScheme="teal">Notify Me!</Button>
            </motion.div>
            </PopoverTrigger>
            <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Get notified when new deals come through!</PopoverHeader>
                <PopoverBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3} shouldWrapChildren>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input 
                            name="email"
                            type="email"
                            placeholder="johnnyappleseed@gmail.com"
                            {...register("email_address", {
                                required: "Required",
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Invalid Email Address"
                                }
                              })} />
                        <FormHelperText>We will never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl id="firstName" isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input 
                            name="firstName" 
                            placeholder="First Name"
                            {...register("first_name", {
                                required: "Required",
                              })} />
                    </FormControl>
                    <FormControl id="lastName" isRequired>
                        <FormLabel>Last name</FormLabel>
                        <Input 
                            name="lastName" 
                            placeholder="Last name" 
                            {...register("last_name", {
                                required: "Required",
                              })}/>
                    </FormControl>
                    <Button
                        mt={4}
                        colorScheme="teal"
                        isLoading={isSubmitting}
                        type="submit"
                    >
                        Submit
                    </Button>
                </Stack>
                </form>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
