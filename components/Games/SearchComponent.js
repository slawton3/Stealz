import {
    Button,
    FormControl,
    Box,
    Input,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    IconButton,
    PopoverArrow,
    PopoverCloseButton,
    Stack
  } from "@chakra-ui/react"

import { useForm, Controller } from "react-hook-form";
import { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import axios from 'axios'
import OnChangeResponse from './OnChangeResponse'

export default function SearchComponent(props){

    const [searchSuggestions, setSearchSuggestions] = useState([])
    const { register, handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm();
    
    async function onSubmit(values, e) {
        const id = values.search
        console.log(id)
        e.target.reset()
        
        const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?title=${id}&exact=0`)
        console.log(response)
      }

    async function onChange(e){
        const name = e.target.value
        console.log(name)
        const res = await axios.get(`https://www.cheapshark.com/api/1.0/games?title=${name}&exact=0&limit=15`)
        
        setSearchSuggestions(res)
        console.log(searchSuggestions)
    }

    return (
        <>
        <Popover>
          <PopoverTrigger>
          <Button
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.400" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
                as={IconButton}
                aria-label="Options"
                icon={<SearchIcon />}
                variant="outline"
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Find the lowest price for any game:</PopoverHeader>
            <PopoverBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                 
                    <Stack spacing={3} shouldWrapChildren>
                        <FormControl id="searchForm" isRequired>
                           <Input 
                                name="search"
                                type="search"
                                placeholder="Ex: Halo 3"
                                {...register("search", {
                                    required: "Required",
                                })}
                                onChange={(e) => onChange(e)} />
                            <OnChangeResponse response={searchSuggestions} />
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
        </>
    )
}