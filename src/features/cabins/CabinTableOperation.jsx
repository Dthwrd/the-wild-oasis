import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperation() {
  return (
    <TableOperations>
      <Filter filteredField={'discount'} options={[
        {value: 'all', label: 'all'},
        {value: 'no-discount', label: 'no discount'},
        {value: 'with-discount', label: 'with discount'},
      ]} />

      <SortBy options={[
        {value: 'name-asc', label: 'sort by name (A-Z)'},
        {value: 'name-desc', label: 'sort by name (Z-A)'},
        {value: 'regularPrice-asc', label: 'sort by price (low first)'},
        {value: 'regularPrice-desc', label: 'sort by price (high first)'},
        {value: 'maxCapacity-asc', label: 'sort by name (low first)'},
        {value: 'maxCapacity-desc', label: 'sort by name (high first)'},
      ]} />
    </TableOperations>
  );
}

export default CabinTableOperation;
