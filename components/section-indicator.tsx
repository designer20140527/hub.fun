interface SectionIndicatorProps {
  number: string
  total: string
}

export default function SectionIndicator({ number, total }: SectionIndicatorProps) {
  return (
    <div className="relative rounded-full border border-purple-400 w-14 h-14 flex flex-col items-center justify-center bg-purple-400/10">
      <div className="absolute top-1 text-purple-400 font-medium">{number}</div>
      <div className="absolute w-full h-[1px] bg-purple-400"></div>
      <div className="absolute bottom-1 text-gray-400">{total}</div>
    </div>
  )
}
