'use client'
import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await axios.post('/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(response.data); // Handle the response
            } catch (error) {
                console.error(error); // Handle the error
            }
        } else {
            console.error('No file selected');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileSelect} />
            <button onClick={handleUpload}>Upload Image</button>
        </div>
    );
};

export default ImageUpload;
