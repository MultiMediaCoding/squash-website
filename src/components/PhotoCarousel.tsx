import * as React from "react";
import appCloseUpiTask from "../assets/AppCloseUpITask.jpeg";
import appCloseUpErnteEcke from "../assets/AppCloseUpErnteEcke.jpeg";
import "./PhotoCarousel.css";

import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

export function CarouselDemo() {
  const images = [appCloseUpiTask, appCloseUpErnteEcke];

  return (
    <Carousel className="carouselContainer">
      <CarouselContent>
        {images.map((image, index) => (
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
  );
}