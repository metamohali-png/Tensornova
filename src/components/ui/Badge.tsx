import { cn } from '@/lib/utils'

type BadgeColor = 'indigo' | 'cyan' | 'violet' | 'green' | 'slate'

interface BadgeProps {
  children: React.ReactNode
  color?: BadgeColor
  className?: string
}

const colors: Record<BadgeColor, string> = {
  indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  violet: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  green: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  slate: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
}

export function Badge({ children, color = 'indigo', className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border',
      colors[color],
      className
    )}>
      {children}
    </span>
  )
}
