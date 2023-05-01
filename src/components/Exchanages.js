import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index.js'
import { Container, HStack , VStack,Heading,Text,Image} from '@chakra-ui/react'
import Loader from "./Loader.js"
import { Link } from 'react-router-dom'
import Error from "./Error.js"
import "../index.css"

const Exchanages = () => {


  // defining usestate
  const [ExchangeData , setExchangeData] = useState([])
  const [loading , setloading] = useState(true)
  const [error , seterror] = useState(false)



  // define a fetch exchanges data  function
  const fetchMovies = async() => {
    try{
      const { data } = await axios.get(`${server}/exchanges`);
      console.log(data)
      setExchangeData(data)
      setloading(false)
    }catch(error){
        console.log(error)
        seterror(true)
        setloading(false)
    }
  }

  // calling the fetchexchange function after the site is rendered 
  useEffect(() => {

    fetchMovies()
  },[]);

  
  useEffect(() => {console.log(error)
    },[error])



  if(error) return <Error errortext={'Error Occured While Fetching Exchanges Please Try Again later '} />

  return (
    <Container maxW={'container.xl'}>
      

      {loading ? 
      (<Loader/> ) :
      (
        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {ExchangeData.map(i => {
                return(<ExchangeCard  key={i.id}
                  name={i.name}
                  img={i.image}
                  rank={i.trust_score_rank}
                  url={i.url} />
                
                )
                
            })}
        </HStack>
      )
    } 

    </Container>
  )
}

export default Exchanages

const ExchangeCard = ({ name, img, rank, url }) => (
  <Link to={url} target='_blank' >
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"xl"}
      transition={"all 0.3s"}
      transitionDelay={'60ms'}
    
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
          color: '#fff',
          backgroundColor : 'rgba(0, 0, 0, 0.64)',
          boxSshadow:' 5px 5px 5px #111'
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1} fontWeight={'700'}  >
        {rank}
      </Heading>

      <Text noOfLines={1} fontWeight={'500'}>{name}</Text>
    </VStack>
  </Link>
);