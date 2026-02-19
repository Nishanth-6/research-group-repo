interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'energy', label: 'Energy Systems' },
    { id: 'ai', label: 'AI & Decision Intelligence' },
    { id: 'resilience', label: 'Resilience' },
    { id: 'sustainability', label: 'Sustainability' },
  ];

  return (
    <div className="border-b border-gray-200 bg-white sticky top-0 z-10 filter-bar-sticky" style={{ marginBottom: '8px' }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex gap-4 overflow-x-auto" style={{ paddingBottom: '8px' }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                activeFilter === filter.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
