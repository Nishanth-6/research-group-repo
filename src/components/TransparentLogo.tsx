import { useEffect, useState } from 'react';

interface TransparentLogoProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  /** 'light' removes white/near-white pixels, 'dark' removes black/near-black pixels */
  removeBackground?: 'light' | 'dark';
}

export function TransparentLogo({ src, alt, className, style, removeBackground = 'light' }: TransparentLogoProps) {
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

        // Edge cleanup: Force outer margin pixels to be transparent
        const margin = removeBackground === 'dark' ? 5 : 10;
        if (x < margin || x > width - margin || y < margin || y > height - margin) {
          data[i + 3] = 0;
          continue;
        }

        if (removeBackground === 'light') {
          // White removal
          if (r > 220 && g > 220 && b > 220) {
            data[i + 3] = 0;
          }
        } else {
          // Dark removal: remove black/near-black pixels
          // Use luminance for better accuracy
          const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
          if (luminance < 40) {
            // Pure dark → fully transparent
            data[i + 3] = 0;
          } else if (luminance < 70) {
            // Near-dark → fade out gradually for smoother edges
            const alpha = Math.round(((luminance - 40) / 30) * 255);
            data[i + 3] = Math.min(data[i + 3], alpha);
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setImageSrc(canvas.toDataURL());
    };
  }, [src, removeBackground]);

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
