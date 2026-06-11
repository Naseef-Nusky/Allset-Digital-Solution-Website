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

function AnimatedWord({ word, className, startIndex, delay, letterDelay }) {
  return (
    <span className="inline-block whitespace-nowrap align-top">
      {word.split('').map((char, charIndex) => {
        const index = startIndex + charIndex

        return (
          <span
            key={`${word}-${charIndex}`}
            className={`inline-block animate-letter-in opacity-0 ${className ?? ''}`}
            style={{ animationDelay: `${delay + index * letterDelay}s` }}
          >
            {char}
          </span>
        )
      })}
    </span>
  )
}

function AnimatedText({ text, className, startIndex, delay, letterDelay }) {
  const words = text.split(' ').filter(Boolean)
  let index = startIndex

  return words.map((word, wordIndex) => {
    const wordStart = index
    index += word.length

    return (
      <span key={`${word}-${wordIndex}`}>
        {wordIndex > 0 && ' '}
        <AnimatedWord
          word={word}
          className={className}
          startIndex={wordStart}
          delay={delay}
          letterDelay={letterDelay}
        />
      </span>
    )
  })
}

function AnimatedLetters({ parts, delay, letterDelay }) {
  let letterIndex = 0

  return parts.map((part, partIndex) => {
    const partStart = letterIndex
    letterIndex += part.text.length

    return (
      <span key={`part-${partIndex}`}>
        <AnimatedText
          text={part.text}
          className={part.className}
          startIndex={partStart}
          delay={delay}
          letterDelay={letterDelay}
        />
      </span>
    )
  })
}

export default function AnimatedTitle({
  text,
  highlight,
  highlightClassName = 'text-emerald-600',
  parts,
  lines,
  className = '',
  as: Tag = 'h1',
  delay = 0,
  letterDelay = 0.03,
}) {
  if (lines) {
    let letterIndex = 0

    return (
      <Tag className={className}>
        {lines.map((line, lineIndex) => {
          const lineParts = line.parts ?? [{ text: line.text, className: line.className }]
          const lineStart = letterIndex
          letterIndex += lineParts.reduce((total, part) => total + part.text.length, 0)

          let partOffset = 0

          return (
            <span key={`line-${lineIndex}`} className="block">
              {lineParts.map((part, partIndex) => {
                const partStart = lineStart + partOffset
                partOffset += part.text.length

                return (
                  <span key={`${lineIndex}-${partIndex}`}>
                    <AnimatedText
                      text={part.text}
                      className={part.className}
                      startIndex={partStart}
                      delay={delay}
                      letterDelay={letterDelay}
                    />
                  </span>
                )
              })}
            </span>
          )
        })}
      </Tag>
    )
  }

  const resolvedParts = parts ?? buildParts(text, highlight, highlightClassName)

  return (
    <Tag className={className}>
      <AnimatedLetters parts={resolvedParts} delay={delay} letterDelay={letterDelay} />
    </Tag>
  )
}
