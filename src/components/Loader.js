import {Box , Spinner , VStack} from "@chakra-ui/react"
import React from "react"
import { FaLongArrowAltLeft } from "react-icons/fa"
import "../index.css"


const Loader = () => {
     return (
        <VStack h={'90vh'} justifyContent={'center'}>
            <Box transform={"scale(3)"}>
                <Spinner size={'xl'} color="whatsapp" />
            </Box>
        </VStack>
     )
}

export default Loader 