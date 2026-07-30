export interface NavLink {
  label: string
  href: string
}

export interface StatItem {
  id: string
  value: string
  label: string
}

export interface MiniCardItem {
  id: string
  label: string
  value: string
  variant?: 'default' | 'accent' | 'wide'
}

export interface FeatureItem {
  id: string
  index: string
  title: string
  description: string
}

export const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats: StatItem[] = [
  { id: 'visitors', value: '2.4k', label: 'daily visitors' },
  { id: 'consistency', value: '98%', label: 'design consistency' },
  { id: 'latency', value: '16ms', label: 'interaction latency' },
]

export const sparklineBars: number[] = [42, 68, 48, 82, 60, 90]

export const miniCards: MiniCardItem[] = [
  { id: 'conversion', label: 'Conversion', value: '7.8%' },
  { id: 'velocity', label: 'Velocity', value: 'Fast', variant: 'accent' },
  { id: 'pipeline', label: 'Pipeline health', value: 'On track', variant: 'wide' },
]

export const features: FeatureItem[] = [
  {
    id: 'hierarchy',
    index: '01',
    title: 'Clear hierarchy',
    description: 'Type scale, spacing, and contrast work together to guide attention.',
  },
  {
    id: 'motion',
    index: '02',
    title: 'Motion with intent',
    description: 'Subtle entrance and hover states make the interface feel alive.',
  },
  {
    id: 'responsive',
    index: '03',
    title: 'Responsive by default',
    description: 'Layouts collapse naturally across desktop, tablet, and mobile widths.',
  },
]
