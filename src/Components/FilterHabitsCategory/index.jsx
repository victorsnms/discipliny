import { Select } from "@chakra-ui/react";

const FilterHabitsCategory = ({ filterInput, setFilterInput }) => {
  return (
    <Select
      value={filterInput}
      onChange={(e) => setFilterInput(e.target.value)}
      size="xs"
      variant="flushed"
      placeholder="Filtrar categoria"
      bg="transparent"
      borderColor="transparent"
      color="#FEF2EC"
    >
      <option
        style={{ background: "var(--blue)", color: "var(--red)" }}
        value="Alimentação"
      >
        Alimentação
      </option>
      <option
        style={{ background: "var(--blue)", color: "var(--brown)" }}
        value="Educação"
      >
        Educação
      </option>
      <option
        style={{ background: "var(--blue)", color: "var(--yellow)" }}
        value="Finanças"
      >
        Finanças
      </option>
      <option
        style={{ background: "var(--blue)", color: "var(--pink)" }}
        value="Lazer"
      >
        Lazer
      </option>
      <option
        style={{ background: "var(--blue)", color: "var(--orange" }}
        value="Limpeza"
      >
        Limpeza
      </option>
      <option
        style={{ background: "var(--blue)", color: "var(--purple)" }}
        value="Mente"
      >
        Mente
      </option>
      <option
        style={{ background: "var(--blue)", color: "var(--blue-light" }}
        value="Organização"
      >
        Organização
      </option>
      <option
        style={{ background: "var(--blue)", color: "var(--green)" }}
        value="Saúde"
      >
        Saúde
      </option>
      <option
        style={{ background: "var(--blue)", color: "#FEF2EC" }}
        value="Todos"
      >
        Todos
      </option>
    </Select>
  );
};

export default FilterHabitsCategory;
