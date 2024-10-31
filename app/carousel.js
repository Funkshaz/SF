import Card from "./card";
import "./carousel.css";
export default function Carousel({ heading, cards }) {
    return (
        <div className="carousel">
            <h1>{heading}</h1>
            <div className="flex-container">
                {cards.map(function (card, i) {
                    return (
                        <Card
                            title={card.title}
                            image={card.image}
                            key={i}
                        ></Card>
                    );
                })}
            </div>
        </div>
    );
}
