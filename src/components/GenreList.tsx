import { Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
    const { data } = useGenres();
    const { gameQuery, setGenreId } = useGameQueryStore();

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.results.map(genre => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                boxSize='32px'
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                                objectFit='cover'
                            />
                            <Button
                                fontWeight={genre.id === gameQuery.genreId ? 'bold' : 'normal'}
                                whiteSpace='normal'
                                textAlign='left'
                                variant='link'
                                onClick={() => setGenreId(genre.id)}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
