import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem>.AAAAAAA.</CarouselItem>
          <CarouselItem>.BBBBBBB.</CarouselItem>
          <CarouselItem>.CCCCCCC.</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};
export default Projects;
