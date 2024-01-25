/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UGg4SlfvwYi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation"

export default function Component() {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-md w-full h-64 flex flex-col items-center justify-center">
      <UploadIcon className="h-16 w-16 text-gray-500" />
      <p className="mt-4 text-gray-500">Drag and drop your image files here</p>
      <div className="mt-4">
        <Label className="cursor-pointer underline text-blue-500" htmlFor="image-upload">
          or select a file
        </Label>
        <Input accept="image/*" className="hidden" id="image-upload" type="file" />
      </div>
    </div>
  )
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}
