import Head from 'next/head'
import useSWR from 'swr'
import { Flex, Grid, Input } from '@chakra-ui/react'
import { movie } from '@/types/Movie'
import { useEffect, useState } from 'react'
import MovieCard from '@/components/MovieCard'
import { useDebounce, useDebouncedCallback } from 'use-debounce'
export default function Home() {
  const [favs, setfavs] = useState<movie[]>([])
    useEffect(() => {
        setfavs(JSON.parse(localStorage.getItem('fav_movies')??"[]"))
    }, [])
  const fetcher = (url: string) => fetch(url,{headers:{"access-control-allow-origin":"*"}}).then(r => r.json())  
  const { data,mutate,isLoading } = useSWR('http://localhost:8080/movies', fetcher)
  const [search, setSearch] = useState<movie[]|[]>([])
  const debounced = useDebouncedCallback(
    async (value)=>{
      const res = await fetcher('http://localhost:8080/search?' + new URLSearchParams({
            query: value
          }))
          mutate([...res])
          setSearch([...res])
        }
    ,
    700
  );
  return (
    <>
      <Head>
        <title>Movies Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction={"column"} >
      <Input w={"50%"} alignSelf={"center"} onChange={async (query)=>{
        if(query.target.value==""){
          setSearch([])
          return
        }
        // @ts-ignore
        debounced(query.target.value)
        }}/>
      <Grid templateColumns={"repeat(5,1fr)"} gap={6}>
        {!isLoading&&search.length==0?data?.map((item:movie)=>(
          <MovieCard fav={favs.find(search=>search.id==item.id)!=undefined} key={item.id} movie={item} />
          ))
        :search?.map((item:movie)=>(
          <MovieCard fav={favs.find(search=>search.id==item.id)!=undefined} key={item.id} movie={item} />
          ))}
      </Grid>
            </Flex>
    </>
  )
}
