import { movie } from "@/types/Movie"
import { GridItem, Card, CardBody, Stack, Heading, Divider, CardFooter, Button, Image, Text, ButtonGroup } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function MovieCard({movie,fav}:{movie:movie,fav:boolean}) {
  const [favs, setfavs] = useState<movie[]>([])
  const [state, setstate] = useState(fav)
    useEffect(() => {
        setfavs(JSON.parse(localStorage.getItem('fav_movies')??"[]"))
    }, [])
    
  const changeLocalStorage=(movie:movie)=>{
    let newarr:movie[] = JSON.parse(localStorage.getItem('fav_movies')??"[]")
    if(newarr.find(item=>item.id==movie.id)!=undefined){
      newarr = newarr.filter(item=>item.id!=movie.id)
    }else{
      newarr.push(movie)
    }
    localStorage.setItem('fav_movies',JSON.stringify(newarr))
    setfavs(newarr)
  }
  const {push} =useRouter()
  return (
    <GridItem w='100%'>
        <Card maxW='sm'>
        <CardBody>
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt='movie poster'
            borderRadius='lg'
            />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{movie.original_title}</Heading>
            <Text h={100} overflowY={'scroll'}>
              {movie.overview}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
        <ButtonGroup spacing='2'>
            <Button onClick={()=>push(movie.id.toString())} variant='solid' colorScheme='blue'>
              More Details
            </Button>
            {state?<UnFavButton/>:<FavButton/>}
            </ButtonGroup>
        </CardFooter>
      </Card>
      </GridItem>
  )

  function FavButton() {
    return <Button onClick={() => {
      setstate(old => !old)
      changeLocalStorage(movie)
    } } variant={`ghost`} colorScheme='yellow'>
      ✮ Favorite
    </Button>
  }
  function UnFavButton() {
    return <Button onClick={() => {
      setstate(old => !old)
      changeLocalStorage(movie)
    } } variant={`solid`} colorScheme='yellow'>
      ⭐ UnFavorite
    </Button>
  }
}
