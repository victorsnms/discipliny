import { Select } from "@chakra-ui/react";

const FilterHabitsCategory = ({ filterInput, setFilterInput }) => {
  return (
    <Select
      value={filterInput}
      onChange={(e) => setFilterInput(e.target.value)}
      size="xs"
      variant="flushed"
      placeholder="Filtrar categoria"
    >
      <option value="Alimentação">Alimentação</option>
      <option value="Educação">Educação</option>
      <option value="Finanças">Finanças</option>
      <option value="Lazer">Lazer</option>
      <option value="Limpeza">Limpeza</option>
      <option value="Mente">Mente</option>
      <option value="Organização">Organização</option>
      <option value="Saúde">Saúde</option>
      <option value="Todos">Todos</option>
    </Select>
  );
};

export default FilterHabitsCategory;
