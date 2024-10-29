import Image from "next/image";
export default function Card({ image, title }) {
    const imgSrc = require("/src/assets/dumbbell-svgrepo-com.svg");
    return (
        <div>
            {title}
            <img src={imgSrc} />
        </div>
    );
}
