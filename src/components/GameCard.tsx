import { Game } from "@/hooks/useGames";
import getCroppedImageUrl from "@/services/image-url";
import {
  Card,
  Image,
  CardBody,
  Heading,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Card height="100%" bg={bg}>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
