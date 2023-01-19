import Head from 'next/head'
import useSWR from 'swr'
import { Flex, Grid, Heading, Input } from '@chakra-ui/react'
import { movie } from '@/types/Movie'
import { useEffect, useState } from 'react'
import MovieCard from '@/components/MovieCard'
export default function Home() {
    const [favs, setfavs] = useState<movie[]>([])
    useEffect(() => {
        setfavs(JSON.parse(localStorage.getItem('fav_movies')??"[]"))
    }, [])
    
  return (
    <>
      <Head>
        <title>Movies Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction={"column"} textAlign={'center'} >
        {favs.length==0&& <Heading>you have no favorites :(</Heading>}
      <Grid templateColumns={"repeat(5,1fr)"} gap={6}>
        {favs?.map((item:movie)=>(
          <MovieCard fav={favs.find(search=>search.id==item.id)!=undefined} key={item.id} movie={item}/>
          ))}
      </Grid>
            </Flex>
    </>
  )
}
