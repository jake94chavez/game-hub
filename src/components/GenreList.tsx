import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface GenreListProps {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const textColor = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("gray.100", "gray.500");

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <ListItem key={skeleton} paddingY="8px">
              <GenreItemSkeleton />
            </ListItem>
          ))}
        {!isLoading &&
          data.map((genre) => (
            <ListItem key={genre.id} paddingY="2px">
              <HStack
                backgroundColor={
                  genre.id == selectedGenre?.id ? bgColor : "transparent"
                }
                borderRadius={8}
                padding="6px"
              >
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                {genre.name}
                <Button
                  onClick={() =>
                    genre.id == selectedGenre?.id
                      ? onSelectGenre(null)
                      : onSelectGenre(genre)
                  }
                  color={textColor}
                  fontSize="lg"
                  variant="link"
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={genre.id == selectedGenre?.id ? "700" : "normal"}
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
