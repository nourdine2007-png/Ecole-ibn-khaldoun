import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "start" | "end";
}

export function SectionHeader({ title, subtitle, className, align = "center" }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 relative", 
      align === "center" && "text-center",
      align === "start" && "text-start",
      align === "end" && "text-end",
      className
    )}>
      {subtitle && (
        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground relative inline-block">
        {title}
        <span className={cn(
          "absolute -bottom-3 h-1.5 bg-accent w-2/3 rounded-full",
          align === "center" && "left-1/2 -translate-x-1/2",
          align === "start" && "right-0",
          align === "end" && "left-0"
        )}></span>
      </h2>
    </div>
  );
}
