import { Game } from "@/hooks/useGames";
import { Card, Image, CardBody, Heading, Text } from "@chakra-ui/react";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Text>{game.name} is here!</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
