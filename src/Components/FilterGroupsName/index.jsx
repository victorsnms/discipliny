import { Input } from "@chakra-ui/react";

const FilterGroupsName = ({ filterInput, setFilterInput }) => {
  return (
    <Input
      value={filterInput}
      onChange={(e) => setFilterInput(e.target.value)}
      size="xs"
      variant="flushed"
      placeholder="Filtrar grupo"
    />
  );
};
export default FilterGroupsName;
