import type { NextApiRequest, NextApiResponse } from 'next';
import { upload, saveImageRecord } from '../../lib/upload'; // Adjust the import path as needed
import { Express } from 'express';

// Define the user object type based on your application's user structure
interface User {
    id: string;
    // Add other user properties as needed
}

// Extend the NextApiRequest type to include 'file' and 'user' properties
interface NextApiRequestWithFile extends NextApiRequest {
    file: Express.Multer.File;
    user: User;
}

export default async function handler(req: NextApiRequestWithFile, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Use the multer middleware to handle the file upload
        upload.single('file')(req, res, async (err) => {
            if (err) {
                return res.status(500).json({ message: "File upload failed", error: err.message });
            }

            // Assuming the file information is available in req.file
            if (!req.file) {
                return res.status(400).json({ message: "No file uploaded" });
            }

            try {
                // Save the image record to the database using Prisma
                const fileUrl = req.file.location; // Adjust this based on how your file URL is provided
                const userId = req.user.id; // Extract user ID from the request
                const imageRecord = await saveImageRecord(userId, fileUrl);

                return res.status(201).json({ message: "File uploaded successfully", imageRecord });
            } catch (error) {
                return res.status(500).json({ message: "Database operation failed", error: error.message });
            }
        });
    } else {
        // If the request is not a POST request
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
}

