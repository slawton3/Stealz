import {
    Button,
    FormControl,
    Box,
    Input,
    Stack
  } from "@chakra-ui/react"

import { useForm } from "react-hook-form";
import React from 'react'
import axios from 'axios'

export default function SearchComponent(props){

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    
    function onSubmit(values, e) {
        const id = values.search
        console.log(id)
        e.target.reset()

        /*return new Promise((resolve) => {
          setTimeout(() => {
            axios.get(`https://www.cheapshark.com/redirect?dealID=${id}`)
            resolve();
          }, 1000);
        });*/
      }

    return (
        <>
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3} shouldWrapChildren>
                        <FormControl id="searchForm" isRequired>
                           <Input 
                                name="search"
                                type="search"
                                placeholder=""
                                {...register("search", {
                                    required: "Required",
                                })} />
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
        </>
    )
}