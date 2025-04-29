"use client"

import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Compare } from "./compare"

const beforeAndAfterHorizontalData = [
  {
    id: 1,
    title: "Podjazd do garażu",
    description: "Czyszczenie podjazdu z kostki brukowej",
    beforeImage: "/images/compare-horizontal/before1.webp",
    afterImage: "/images/compare-horizontal/after1.webp",
  },
  {
    id: 2,
    title: "Podjazd do garażu",
    description: "Czyszczenie podjazdu z kostki brukowej",
    beforeImage: "/images/compare-horizontal/before2.webp",
    afterImage: "/images/compare-horizontal/after2.webp",
  },
]
const beforeAfterData = [
  {
    id: 1,
    title: "Podjazd do garażu",
    description: "Czyszczenie podjazdu z kostki brukowej",
    beforeImage: "/images/compare/before1.webp",
    afterImage: "/images/compare/after1.webp",
  },
  {
    id: 5,
    title: "Ścieżka ogrodowa",
    description: "Czyszczenie ścieżki w ogrodzie",
    beforeImage: "/images/compare/before5.webp",
    afterImage: "/images/compare/after5.webp",
  },

  {
    id: 8,
    title: "Ścieżka ogrodowa",
    description: "Czyszczenie ścieżki w ogrodzie",
    beforeImage: "/images/compare/before8.webp",
    afterImage: "/images/compare/after8.webp",
  },
]

export default function BeforeAfterGallery() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {beforeAndAfterHorizontalData.map((item) => (
          <div key={item.id} className="aspect-[9 / 16] h-full">
            <div className="p-1 h-full">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full">
                <CardContent className="flex flex-col p-6">
                  <Compare
                    before={item.beforeImage}
                    after={item.afterImage}
                    altBefore={`Przed - ${item.title}`}
                    altAfter={`Po - ${item.title}`}
                    className="rounded-lg border border-border/50 overflow-hidden h-[300px] md:h-[400px]"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {beforeAfterData.map((item) => (
          <div key={item.id} className="aspect-[9 / 16]">
            <div className="p-1">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex flex-col p-6 relative">
                  <Compare
                    before={item.beforeImage}
                    after={item.afterImage}
                    altBefore={`Przed - ${item.title}`}
                    altAfter={`Po - ${item.title}`}
                    className="rounded-lg border border-border/50 overflow-hidden"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}
