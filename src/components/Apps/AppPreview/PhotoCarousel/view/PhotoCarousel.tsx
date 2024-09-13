import { useState, useEffect } from "react";
import "./PhotoCarousel.css";

import { Card, CardContent } from "../../../../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "../../../../ui/carousel";
import { App } from "../../../model/App";

export function PhotoCarousel({ app }: { app: App }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);

  // Use effect to listen for the embla carousel events
  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    // Attach event listener for slide change
    emblaApi.on("select", handleSelect);

    // Cleanup event listener when component unmounts
    return () => {
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi]);

  return (
    <div>
      <Carousel className="carouselContainer" setApi={setEmblaApi}>
        <CarouselContent>
          {app.previewImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="p-0">
                <CardContent className="p-0">
                  <img
                    src={image}
                    alt={`Founders ${index + 1}`}
                    className="photoCarouselImg"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Dot indicators */}
      <div className="carouselDotsContainer">
        {app.previewImages.map((_, index) => (
          <span
            key={index}
            className={`carouselDot ${currentIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
