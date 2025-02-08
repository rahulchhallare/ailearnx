'use client'

import Image from 'next/image'

interface CompanyLogoProps {
  logo: string
  name: string
}

export function CompanyLogo({ logo, name }: CompanyLogoProps) {
  return (
    <div className="relative group cursor-pointer transition-all duration-200 hover:-translate-y-1">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={100}
        height={35}
        className="object-contain transition-opacity duration-200"
        style={{ opacity: 1 }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.8'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1'
        }}
      />
    </div>
  )
}