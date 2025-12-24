import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'

const servicesData = [
  { title: 'AI Workflow Automation', content: ""  },
  { title: 'Compliance & Security', content:  ""},
  { title: 'Real-time Analytics', content:  ""},
  { title: 'Scalable Integration', content:  ""}
]

export default function AutoTabProgress() {
  const [activeTab, setActiveTab] = useState('tab1')
  const [progress, setProgress] = useState(0)
  const totalTabs = servicesData.length
  const TAB_DURATION = 5000 // 5 seconds per tab

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(0) // Reset progress
      const nextIndex = (servicesData.findIndex(tab => tab.title === activeTab) + 1) % totalTabs
      const nextTab = `tab${nextIndex + 1}`
      setActiveTab(nextTab)
    }, TAB_DURATION)

    return () => clearInterval(interval)
  }, [activeTab])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100
        return prev + (100 / (TAB_DURATION / 100))
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [activeTab])

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      {/* Tab Header with Progress */}
      <div className="mb-8">
        <Tabs value={activeTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-transparent p-1 rounded-none border-b border-border">
            {servicesData.map((tab, index) => (
              <TabsTrigger
                key={tab.title}
                value={`tab${index + 1}`}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-sm px-3 py-2 transition-all data-[state=active]:shadow-md"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        {/* Progress Bar */}
        <div className="mt-4 w-full bg-muted rounded-full h-2">
          <Progress value={progress} className="h-2 bg-primary/20 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-secondary" />
        </div>
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Auto-advancing in {Math.ceil((100 - progress) / 10)}s
        </p>
      </div>

      {/* Tab Content */}
      <Tabs value={activeTab}>
        {servicesData.map((tab, index) => (
          <TabsContent key={tab.title} value={`tab${index + 1}`} className="pt-0">
            <div className="p-6 bg-card rounded-lg border shadow-sm min-h-[400px]">
              {tab.content}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
