import { Icon56GhostOutline } from "@vkontakte/icons";
import { Image } from "@vkontakte/vkui";

interface ProductImageProps {
    src?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ src }) => {
    return (
        <Image
            src={src}
            size={96}
            borderRadius='l'
            fallbackIcon={<Icon56GhostOutline />}
        />
    );
}