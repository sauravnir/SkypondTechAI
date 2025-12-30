import React from 'react'
import { Badge } from '../ui/badge'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
const WhyChoose = () => {
  return (
    <section className="relative overflow-hidden bg-background">
        <div className="flex flex-col max-w-7xl mx-auto px-6 py-20 sm:px-8 md:px-12 lg:px-20">
            <div className="flex flex-col  lg:flex-row lg:items-end lg:justify-between gap-8 ">
          <div className="items-start space-y-4">
            <Badge
              variant="outline"
              className="font-ui text-[14px] bg-card text-accent border border-accent gap-2 px-5 py-1 rounded-full uppercase mb-2 "
            >
              Why us
            </Badge>
            <h1 className="font-heading max-w-3xl text-h1 text-heading font-bold">
              Why leading LTC Pharmacies choose Skypond
            </h1>
            <p className="mt-3 max-w-lg font-body text-paragraph text-muted">
              Because long-term care pharmacies need more than software - they need certainty
            </p>
          </div>
        </div>


        </div>
    </section>
  )
}

export default WhyChoose