import FilterButton from './FilterButton';

export default function FilterBar({ filters, removeFilter, clearFilters }) {
  return (
    <section
      className=' flex items-center gap-2 mx-auto inset-x-0 max-w-6xl w-full p-5 absolute -top-28 left-0
     rounded-sm bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)]'
    >
      <div className='flex flex-wrap gap-2 '>
        {filters.map((filter) => {
          return (
            <FilterButton key={filter} removeFilter={removeFilter}>
              {filter}
            </FilterButton>
          );
        })}
      </div>
      <button
        onClick={clearFilters}
        className=' ml-auto shrink-0 text-(--grey-text) font-medium
         hover:underline hover:text-(--blue-text)'
      >
        Clear
      </button>
    </section>
  );
}
