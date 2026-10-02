const waveLines = Array.from({ length: 17 }, (_, index) => {
  const offset = index * 10
  return <path key={index} d={`M ${-45 + offset} 330 C ${150 + offset} 235 ${15 + offset} 0 ${130 + offset} 50 S ${105 + offset} 310 ${290 + offset} 130`} />
})
const crossLines = Array.from({ length: 20 }, (_, index) => {
  const y = index * 15
  return <path key={index} d={`M 15 ${80 + y} C 65 ${-55 + y} 160 ${-35 + y} 210 ${90 + y} S 330 ${180 + y} 355 ${80 + y}`} />
})

const ValueMesh = ({ variant }) => (
  <svg className={`pointer-events-none absolute -right-22 -bottom-12 -z-1 h-75 w-75 text-gray-150 ${variant === 'loop' ? '-rotate-35' : '-rotate-12'}`} viewBox="0 0 360 360" fill="none" stroke="currentColor" strokeWidth="0.7" aria-hidden="true" focusable="false">{waveLines}{crossLines}</svg>
)

export default ValueMesh
