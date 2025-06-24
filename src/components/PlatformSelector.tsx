import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Platform } from "@/hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface PlatformProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: PlatformProps) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
        {/* <MenuItem onClick={() => onSelectPlatform()}>All</MenuItem> */}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
