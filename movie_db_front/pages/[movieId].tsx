import Head from 'next/head'
import useSWR from 'swr'
import { Button, Flex, Grid, GridItem, Heading, HStack, Image, Input, Tag, Text } from '@chakra-ui/react'
import { movie_details } from '@/types/Movie'
import MovieCard from '@/components/MovieCard'
import { useRouter } from 'next/router'
export default function Home() {
  const { query } = useRouter()
  const fetcher = (url: string) => fetch(url, { headers: { "access-control-allow-origin": "*" } }).then(r => r.json())
  const { data, mutate, isLoading, error }: { data: movie_details, mutate: any, isLoading: boolean, error: any } = useSWR(`http://localhost:8080/movie/${query.movieId}`, fetcher)
  return (
    <>
      <Head>
        <title>{data?.title??""} Movie page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!isLoading && <Flex direction={"column"} >
        <Grid marginX={20} marginY={10} justifyContent={'center'} templateColumns={"repeat(2,1fr)"} gap={6}>
          <GridItem>
            <Flex paddingY={50} gap={5} direction={"column"}>
              <Heading>Title:</Heading>
              <Heading size={"md"} >{data.title}</Heading>
              <Text>{data.tagline}</Text>
              <Heading>Description:</Heading>
              <Text>{data.overview}</Text>
              <Heading>Genres:</Heading>
              <HStack paddingY={5} spacing={4}>
              {data.genres.map(item=>(
                  <Tag size={'lg'} key={item.id} variant='solid' colorScheme='teal'>
                    {item.name}
                  </Tag>
              ))}
              </HStack>
              <Heading>Share:</Heading>
              <Button target={'_blank'} bg={'yellow.500'} as={"a"} href={`https://www.imdb.com/title/${data.imdb_id}`}>
                IMDB
              </Button>
            </Flex>
          </GridItem>
          <GridItem>
            <Image
            // height={800}
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              alt='movie poster'
              borderRadius='lg'
            />
          </GridItem>
        </Grid>
      </Flex>
      }
    </>
  )
}
