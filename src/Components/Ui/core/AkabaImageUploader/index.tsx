import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { Input } from "../../input";
import { Label } from "../../label";

type TImageUploaderProps = {
  label?: string;
  className?: string;
  setImageFiles: Dispatch<SetStateAction<File[] | []>>;
  setImagePreview: Dispatch<SetStateAction<string[] | []>>;
};

const AkabaImageUploader = ({
  label = "Upload Image",
  className,
  setImageFiles,
  setImagePreview,
}: TImageUploaderProps) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files![0];
    setImageFiles((prev) => [...prev, file]);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={cn("flex flex-col items-center w-full gap-4", className)}>
      <Input
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        id="imageUploader"
        onChange={handleImageChange}
      />
      <Label
        className="cursor-pointer w-full h-32 flex justify-center items-center bg-gray-100 hover:bg-white  text-gray-700 border-2 border-dashed border-gray-300 rounded-md px-4 py-2"
        htmlFor="imageUploader"
      >
        Upload Image
      </Label>
    </div>
  );
};

export default AkabaImageUploader;

// coverimageUploader
type TCoverImageUploaderProps = {
  label?: string;
  className?: string;
  setCoverImageFiles: Dispatch<SetStateAction<File[] | []>>;
  setCoverImagePreview: Dispatch<SetStateAction<string[] | []>>;
};
export const AkabaCoverImageUploader = ({
  label = "Upload Image",
  className,
  setCoverImageFiles,
  setCoverImagePreview,
}: TCoverImageUploaderProps) => {
  const handleCoverImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event?.target?.files![0];
    setCoverImageFiles((prev) => [...prev, file]);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImagePreview((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={cn("flex flex-col items-center w-full gap-4", className)}>
      <Input
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        id="coverImageUploader"
        onChange={handleCoverImageChange}
      />
      <Label
        className="cursor-pointer w-full h-32 flex justify-center items-center bg-gray-100 hover:bg-white  text-gray-700 border-2 border-dashed border-gray-300 rounded-md px-4 py-2"
        htmlFor="coverImageUploader"
      >
        Upload Image
      </Label>
    </div>
  );
};
