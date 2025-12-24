import Image from 'next/image';

interface ImagePairProps {
  src1: string;
  alt1: string;
  src2: string;
  alt2: string;
  caption1?: string;
  caption2?: string;
}

/**
 * Component for displaying two images side-by-side in blog posts
 * Automatically stacks vertically on mobile
 */
export default function ImagePair({ src1, alt1, src2, alt2, caption1, caption2 }: ImagePairProps) {
  return (
    <div className="image-pair">
      <figure>
        <Image
          src={src1}
          alt={alt1}
          width={800}
          height={600}
          className="w-full h-auto object-contain"
        />
        {caption1 && <figcaption>{caption1}</figcaption>}
      </figure>
      
      <figure>
        <Image
          src={src2}
          alt={alt2}
          width={800}
          height={600}
          className="w-full h-auto object-contain"
        />
        {caption2 && <figcaption>{caption2}</figcaption>}
      </figure>
    </div>
  );
}
