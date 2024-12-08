import { cn } from "@/lib/utils";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
}

export function Spotlight({ children, className }: SpotlightProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="h-[40rem] w-[40rem] bg-indigo-500/30 rounded-full blur-3xl" />
      </div>
      {children}
    </div>
  );
}