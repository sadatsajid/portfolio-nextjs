// Mock data for travel images
// In a real implementation, you would import actual image files and use them like:
// import image1 from '../../public/path/to/image.jpg'

// Mock StaticImageData structure to match what Next.js Image component expects
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

type TravelImage = {
  img: StaticImageData;
  title: string;
  alt: string;
};

// Placeholder data with mock StaticImageData objects to prevent build errors
// This is an empty array to prevent build errors when no images exist
// When you want to add actual images:
// 1. Add image files to the public directory
// 2. Import them using: import imageName from '../../public/path/to/image.jpg'
// 3. Add them to this array with appropriate title and alt text
export const travelImages: TravelImage[] = [];