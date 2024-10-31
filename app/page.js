import Carousel from "./carousel";

export default function Home() {
    const cards = [
        { title: "Test Title 1", image: "dumbbell-svgrepo-com.svg" },
        { title: "Test Title 2", image: "next.svg" },
    ];
    return (
        <>
            <Carousel heading="Test Heading" cards={cards} />
        </>
    );
}
