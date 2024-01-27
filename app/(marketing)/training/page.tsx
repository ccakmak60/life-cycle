// app/(training)/upload-training-image/page.tsx

import React from 'react';
import ImageUpload from '../../../components/ImageUpload';
import Layout from '../../layout'; // Adjust the import path as necessary
import { NavBar } from "@/components/layout/navbar"

const UploadTrainingImagePage = () => {
    return (
        <Layout>
            <div className="container mx-auto p-4">
                <ImageUpload />
                {/* Additional content or components can be added here */}
            </div>
        </Layout>
    );
};

export default UploadTrainingImagePage;
