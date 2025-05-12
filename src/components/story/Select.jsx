// 4지선다 필드 - ai 생성

/**
 * @param {Object} props
 * @param {Array<{ id: string, text: string }>} props.options
 * @param {(id: string) => void} props.onSelect
 * @param {string|null} props.selectedId
 */
export default function Select({ options, onSelect, selectedId }) {
  return (
    <div className="flex flex-col gap-2 mt-4 w-full max-w-md">
      {options.map((option) => (
        <button
          key={option.id}
          className={`py-3 px-4 rounded-lg border text-lg transition-colors
            ${
              selectedId === option.id
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800 hover:bg-blue-100"
            }
          `}
          onClick={() => onSelect(option.id)}
          disabled={!!selectedId}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}
