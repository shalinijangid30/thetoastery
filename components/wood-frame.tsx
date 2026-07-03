import { ReactNode } from "react";

export function WoodFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`wood-frame bg-white rounded-sm overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
