import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CustomDot = ({ onClick, active }: { onClick?: () => void, active?: boolean }) => (
  <button
    className={`h-2 mx-1 rounded-full transition-all duration-300 ${
      active ? 'bg-blue-400 w-6' : 'bg-white/20 w-2 hover:bg-white/40'
    }`}
    onClick={onClick}
  />
);

export const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick ? onClick : () => {}}
    className="absolute mr-1 mt-[10em] right-0 bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full z-10 -mr-4"
  >
    <ChevronRight className="w-6 h-6 text-white" />
  </button>
);

export const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick ? onClick : () => {}}
    className="absolute ml-1 left-0 mt-[10em] bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full z-10 -ml-4"
  >
    <ChevronLeft className="w-6 h-6 text-white" />
  </button>
);