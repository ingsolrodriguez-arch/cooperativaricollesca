import {useEffect} from 'react';
import {X} from 'lucide-react';
import {ResilientImage} from './ResilientImage';

interface LightboxModalProps {
  image: {src: string; alt: string; caption: string} | null;
  onClose: () => void;
}

export function LightboxModal({image, onClose}: LightboxModalProps) {
  useEffect(() => {
    if (!image) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#02233C]/90 backdrop-blur-sm p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#02233C] rounded-xl overflow-hidden border border-white/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-white/10">
          <p className="text-sm font-medium text-white truncate">{image.caption}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar imagen"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-[#ECC440]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="bg-black/40 flex items-center justify-center max-h-[75vh]">
          <ResilientImage
            src={image.src}
            alt={image.alt}
            className="max-h-[75vh] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
