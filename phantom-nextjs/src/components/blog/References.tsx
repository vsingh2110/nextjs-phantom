interface Reference {
  url: string
  title: string
}

interface ReferencesProps {
  references: Reference[]
}

export default function References({ references }: ReferencesProps) {
  if (!references || references.length === 0) return null

  return (
    <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        References & Citations
      </h3>
      
      <ol className="space-y-3">
        {references.map((ref, index) => (
          <li key={index} className="text-sm">
            <div className="flex flex-col gap-1">
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2980b9] hover:text-[#1e5a8a] underline break-all"
              >
                {ref.url}
              </a>
              <span className="text-gray-700 font-medium">
                {ref.title}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
