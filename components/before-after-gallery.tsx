"use client"

import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Przykładowe dane dla galerii przed/po
const beforeAfterData = [
  {
    id: 1,
    title: "Podjazd do garażu",
    description: "Czyszczenie podjazdu z kostki brukowej",
    beforeImage: "/placeholder.svg?height=400&width=600",
    afterImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Taras",
    description: "Renowacja tarasu z kostki brukowej",
    beforeImage: "/placeholder.svg?height=400&width=600",
    afterImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Ścieżka ogrodowa",
    description: "Czyszczenie ścieżki w ogrodzie",
    beforeImage: "/placeholder.svg?height=400&width=600",
    afterImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Patio",
    description: "Odświeżenie patio z kostki brukowej",
    beforeImage: "/placeholder.svg?height=400&width=600",
    afterImage: "/placeholder.svg?height=400&width=600",
  },
]

export default function BeforeAfterGallery() {
  const [showBefore, setShowBefore] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
  })

  const toggleBeforeAfter = (id: number) => {
    setShowBefore((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {beforeAfterData.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex flex-col p-6">
                  <div className="relative aspect-video overflow-hidden rounded-md border border-border/50">
                    <Image
                      src={showBefore[item.id] ? item.beforeImage : item.afterImage}
                      alt={`${showBefore[item.id] ? "Przed" : "Po"} - ${item.title}`}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-background/80 backdrop-blur-sm hover:bg-background/90 border-primary/50 hover:border-primary"
                        onClick={() => toggleBeforeAfter(item.id)}
                      >
                        {showBefore[item.id] ? "Pokaż po" : "Pokaż przed"}
                      </Button>
                    </div>
                    <div className="absolute top-2 left-2 rounded bg-background/80 px-2 py-1 text-xs font-medium backdrop-blur-sm">
                      <span className={showBefore[item.id] ? "text-muted-foreground" : "text-destructive"}>
                        {showBefore[item.id] ? "Przed" : "Po"}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-4">
        <CarouselPrevious
          variant="outline"
          size="icon"
          className="static border-primary/50 hover:bg-primary/10 hover:border-primary"
        />
        <CarouselNext
          variant="outline"
          size="icon"
          className="static border-primary/50 hover:bg-primary/10 hover:border-primary"
        />
      </div>
    </Carousel>
  )
}
