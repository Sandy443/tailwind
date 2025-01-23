import { images } from "../../config/gallery";

interface ImageProps {
    id?: number;
    className?: string;
}

const Image: React.FC<ImageProps> = ({
    id = 0,
    className = '',
}) => {
    const image = images.find(img => img.id === id);
    if (!image) {
        return <p>Image not found</p>;
    }
    return (
        <img src={image.src} alt={image.alt} className={className} />
    );
};

export default Image;
