import { ChevronDown } from "lucide-react"

export default function ScrollIndicator() {
  return (
    <div className="h-[7vh] flex items-center justify-center border-b border-[#a1a2c3]/50">
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <span>SCROLL FOR MORE</span>
        <div className="animate-bounce-slow">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  )
}
