import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  let color =
    score > 75
      ? "green"
      : score > 60
      ? "yellow"
      : score > 50
      ? "orange"
      : "red";
  return (
    <Badge colorScheme={color} fontSize="14px" borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
