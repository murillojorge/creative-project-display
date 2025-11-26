import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import FocusLock from 'react-focus-lock';

interface GalleryModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex: number;
  projectTitle: string;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  images,
  isOpen,
  onClose,
  initialIndex,
  projectTitle
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Update currentIndex when initialIndex prop changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="w-screen h-screen max-w-none p-0 border-0 bg-black/95 [&>button]:hidden"
        onKeyDown={handleKeyDown}
      >
        <FocusLock disabled={!isOpen}>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </Button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-50 text-white bg-black/50 px-3 py-1 rounded-full text-sm" aria-live="polite" aria-atomic="true">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" aria-hidden="true" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" aria-hidden="true" />
                </Button>
              </>
            )}

            {/* Main Image */}
            <div className="w-full h-full flex items-center justify-center p-8">
              <img
                src={images[currentIndex]}
                alt={`${projectTitle} - Gallery Image ${currentIndex + 1}`}
                className="h-[calc(100vh-120px)] w-auto max-w-full object-contain"
              />
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-lg">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-12 h-8 rounded overflow-hidden border-2 transition-all ${
                      index === currentIndex 
                        ? 'border-white scale-110' 
                        : 'border-white/30 hover:border-white/60'
                    }`}
                    aria-label={`View image ${index + 1} of ${images.length}`}
                    aria-current={index === currentIndex ? 'true' : 'false'}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </FocusLock>
      </DialogContent>
    </Dialog>
  );
};