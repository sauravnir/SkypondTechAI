import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'
import React from 'react'
import { cn } from '@/lib/utils'
const DEAHERO = () => {
  return (
    <div className="relative overflow-hidden">
       <div className="absolute inset-0 w-full h-full pointer-events-auto">
              <InteractiveGridPattern
                className={cn(
                  " [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                  "inset-y-[-40%] h-[200%] skew-y-0 opacity-15"
                )}
              />
            </div>
    </div>  
  )
}

export default DEAHERO
