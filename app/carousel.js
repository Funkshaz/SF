import Card from "./card";
import "./carousel.css";
export default function Carousel({ heading }) {
    return (
        <>
            <h1>{heading}</h1>
            <Card className="card" title="Test"></Card>
        </>
    );
}
