import React, { useEffect, useState } from 'react'
import axios, { AxiosHeaders } from 'axios'
import { server } from '../index.js'
import { Container, HStack , VStack,Heading,Text,Image, RadioGroup, Radio, Button, border} from '@chakra-ui/react'
import Loader from "./Loader.js"
import { Link } from 'react-router-dom'
import Error from "./Error.js"
import "../index.css"

const Coins  = () => {


  // defining usestate
  const [Coins , setCoins] = useState([])
  const [loading , setloading] = useState(true)
  const [error , seterror] = useState(false)
  const [page , setpage ] = useState(1)
  const [currency , setcurrency] = useState('inr')


  // defining currency synbol 

  const currencySymbol = currency === 'inr' ? '₹' : currency === 'usd' ?  "$" :  "€" 



  // define a fetch exchanges data  function
  const fetchCoins = async() => {
    try{
      const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      console.log(data)
      setCoins(data)
      setloading(false)
    }catch(error){
        console.log(error)
        seterror(true)
        setloading(false)
    }
  }

  // calling the fetchCoin function after the site is rendered 
  useEffect(() => {
    fetchCoins()
  },[currency,page]);


  // btn  function 
  const changePage = (page) => {
    setpage(page);
    setloading(true);
  };


  // defining btns 

  const btns = new Array(132).fill(1);


  if(error) return <Error errortext={'Error Occured While Fetching Exchanges Please Try Again later '} />

  return (
    <Container maxW={'container.xl'}>
      

      {loading ? 
      (<Loader/> ) :

      <>

      <RadioGroup className='radio-div' color={'blackAlpha.800'}  m={'4'} value={currency} onChange={setcurrency}>
        <Text color={'blackAlpha.700'} fontSize={'15'} textDecoration={'none'} fontWeight={700}>Select Currency Type :</Text>
        <HStack spacing={"3"}>
          <Radio fontWeight={800}  value={'inr'}>₹INR</Radio>
          <Radio fontWeight={800} value={'usd'}>$USD</Radio>
          <Radio fontWeight={800} value={'eur'}>€EUR</Radio>
        </HStack>
      </RadioGroup>
      
      
        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {Coins.map(i => {
                return(<CoinCard  key={i.id}
                  name={i.name}
                  id={i.id}
                  img={i.image}
                  symbol={i.symbol}
                  url={i.url}
                  current_price={i.current_price}
                  currencySymbol={currencySymbol}
                  />
                
                )
                
            })}
        </HStack>

        <HStack w={'full'} overflow={'auto'} p={'5'}  >
        {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.700"}
                color={"white"}
                onClick={() => changePage(index + 1)}
                transitionDelay={'115ms'}
                css={
                  {
                    "&:hover": {
                      transform: "scale(1.1)",
                      color: '#333',
                      backgroundColor : '#fff',
                      boxSshadow:' 5px 5px 5px #111',
                      border: '2px solid #333'
                    
                    },
                  }
                }
                >
                {index + 1}
              </Button>
            ))}
        </HStack>
      
      </>
    } 

    </Container>
  )
}

export default Coins 

const CoinCard = ({ name, img,  current_price, id ,symbol , currencySymbol}) => (
  <Link to={`/coin/${id}`} target='_blank' >
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"full"}
      transition={"all 0.3s"}
      m={"4"}
      transitionDelay={'15ms'}
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
      <Heading size={"md"} noOfLines={1} fontWeight={'500'}>
        {symbol.toUpperCase()}
      </Heading>

      <Text>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
      <Text noOfLines={1}>{current_price ? `${currencySymbol}${current_price}` : "NA"}</Text>
    </VStack>
  </Link>
);