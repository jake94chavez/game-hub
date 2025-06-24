import { HStack, Skeleton, Stack } from "@chakra-ui/react";

const GenreItemSkeleton = () => {
  return (
    <Stack>
      <HStack gap="8px" justifyContent={"space-between"}>
        <Skeleton height="32px" width="32px" flexShrink="0" borderRadius={8} />
        <Skeleton height="32px" width="100%" />
      </HStack>
    </Stack>
  );
};

export default GenreItemSkeleton;
