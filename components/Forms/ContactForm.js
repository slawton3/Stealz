import {
    Button,
    FormControl,
    FormLabel,
    Box,
    Textarea,
    FormHelperText,
    Stack,
    Input,
    useToast
  } from "@chakra-ui/react"

import { motion } from 'framer-motion'
import { useForm } from "react-hook-form";
import React from 'react'
import axios from 'axios'

export default function ContactForm(){

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const toast = useToast()

    function onSubmit(values, e) {
        e.target.reset()
        return new Promise((resolve) => {
          setTimeout(() => {
            axios.post("/api/contact", values)
                .then(res => {
                    console.log(`${values} has been posted.`)
                    console.log(res)
                    toast({
                        title: "Message submitted!",
                        description: "You will receive a response within 72 hours.",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                      })
                })
                .catch(err => {
                    console.log(values)
                    console.log(err)
                    toast({
                        title: "Error submitting message.",
                        status: "error",
                        isClosable: true,
                      })
                })
            resolve();
          }, 1000);
        });
      }

    return (
            <Box>
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
                    <FormControl id="content" isRequired>
                        <FormLabel>Message Body</FormLabel>
                        <Textarea 
                            name="message_body" 
                            placeholder="Message..." 
                            {...register("message_body", {
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
            </Box>
    )
}