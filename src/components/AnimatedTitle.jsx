function buildParts(text, highlight, highlightClassName) {
  if (!highlight || !text.includes(highlight)) {
    return [{ text }]
  }

  const [before, after] = text.split(highlight)

  return [
    { text: before },
    { text: highlight, className: highlightClassName },
    { text: after },
  ]
}

function StaticParts({ parts }) {
  return parts.map((part, partIndex) => (
    <span key={`part-${partIndex}`} className={part.className}>
      {part.text}
    </span>
  ))
}

export default function AnimatedTitle({
  text,
  highlight,
  highlightClassName = 'text-emerald-600',
  parts,
  lines,
  className = '',
  as: Tag = 'h1',
}) {
  if (lines) {
    return (
      <Tag className={className}>
        {lines.map((line, lineIndex) => {
          const lineParts = line.parts ?? [{ text: line.text, className: line.className }]

          return (
            <span key={`line-${lineIndex}`} className={`block ${line.lineClassName ?? ''}`}>
              <StaticParts parts={lineParts} />
            </span>
          )
        })}
      </Tag>
    )
  }

  const resolvedParts = parts ?? buildParts(text, highlight, highlightClassName)

  return (
    <Tag className={className}>
      <StaticParts parts={resolvedParts} />
    </Tag>
  )
}
