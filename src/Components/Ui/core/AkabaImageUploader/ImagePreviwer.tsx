import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../../button";

type TImagePreviewer = {
  setImageFiles: React.Dispatch<React.SetStateAction<File[]>>;
  imagePreview: string[];
  setImagePreview: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
};

const ImagePreviewer = ({
  setImageFiles,
  imagePreview,
  setImagePreview,
  className,
}: TImagePreviewer) => {
  const handleRemove = (index: number) => {
    setImageFiles((prev) => prev.filter((_, idx) => idx !== index));
    setImagePreview((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <h4 className="text-sm font-semibold text-gray-700">Preview</h4>
      <div className="flex flex-wrap gap-4">
        {imagePreview.map((preview, index) => (
          <div
            key={index}
            className="relative w-[100px] h-[100px] flex items-center justify-center rounded-md overflow-hidden border border-dashed border-gray-300"
          >
            <Image
              width={100}
              height={100}
              src={preview}
              alt={`Preview ${index + 1}`}
              className="object-cover w-full h-full"
            />
            <Button
              type="button"
              size="sm"
              onClick={() => handleRemove(index)}
              className="bg-red-300 hover:bg-red-400 absolute top-1 right-1 w-6 h-6 p-0 rounded-full"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Cover Image
export default ImagePreviewer;
type TCoverImagePreviewer = {
  setCoverImageFiles: React.Dispatch<React.SetStateAction<File[]>>;
  coverImagePreview: string[];
  setCoverImagePreview: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
};

export const CoverImagePreviewer = ({
  setCoverImageFiles,
  coverImagePreview,
  setCoverImagePreview,
  className,
}: TCoverImagePreviewer) => {
  const handleRemove = (index: number) => {
    setCoverImageFiles((prev) => prev.filter((_, idx) => idx !== index));
    setCoverImagePreview((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <h4 className="text-sm font-semibold text-gray-700">Preview</h4>
      <div className="flex flex-wrap gap-4">
        {coverImagePreview.map((preview, index) => (
          <div
            key={index}
            className="relative w-[100px] h-[100px] rounded-md overflow-hidden border border-dashed border-gray-300"
          >
            <Image
              width={100}
              height={100}
              src={preview}
              alt={`Preview ${index + 1}`}
              className="object-cover w-full h-full"
            />
            <Button
              type="button"
              size="sm"
              onClick={() => handleRemove(index)}
              className="bg-red-300 hover:bg-red-400 absolute top-1 right-1 w-6 h-6 p-0 rounded-full"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
