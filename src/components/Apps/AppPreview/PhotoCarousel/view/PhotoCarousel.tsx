import "./PhotoCarousel.css";

import { Card, CardContent } from "../../../../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../ui/carousel";
import { App } from "../../../model/App";

export function PhotoCarousel({ app }: { app: App }) {
  return (
    <Carousel className="carouselContainer">
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
  );
}
