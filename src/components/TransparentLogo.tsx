import { useEffect, useState } from 'react';

interface TransparentLogoProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export function TransparentLogo({ src, alt, className, style }: TransparentLogoProps) {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const width = canvas.width;
      const height = canvas.height;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const pixelIndex = i / 4;
        const x = pixelIndex % width;
        const y = Math.floor(pixelIndex / width);

        // Edge cleanup: Force outer 10px pixels to be transparent to remove border artifacts
        if (x < 10 || x > width - 10 || y < 10 || y > height - 10) {
           data[i + 3] = 0;
           continue;
        }

        // White removal: lowered threshold to 220 to catch more off-white
        if (r > 220 && g > 220 && b > 220) {
          data[i + 3] = 0; 
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setImageSrc(canvas.toDataURL());
    };
  }, [src]);

  if (!imageSrc) return null;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      style={style}
    />
  );
}
