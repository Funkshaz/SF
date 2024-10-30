import Image from "next/image";
export default function Card({ image, title }) {
    return (
        <div className="card">
            {title}
            <Image src={image} width="32" height="32" alt={title}></Image>
        </div>
    );
}
