import Card from "./card";
import "./carousel.css";
export default function Carousel({ heading, cards }) {
    return (
        <div className="carousel">
            <h1>{heading}</h1>
            <div className="flex-container">
                <Card title="Test" image="dumbbell-svgrepo-com.svg"></Card>
                <Card title="Test" image="dumbbell-svgrepo-com.svg"></Card>
            </div>
        </div>
    );
}
