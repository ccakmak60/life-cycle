
import { PrismaClient } from "@prisma/client";
import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

const prisma = new PrismaClient();
aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new aws.S3();

export const upload = multer({
    storage: multerS3({
        s3,
        bucket: process.env.AWS_BUCKET_NAME,
        key: function (req, file, cb) {
            const fileName = `user-images/${req.user.id}/${Date.now()}-${file.originalname}`;
            cb(null, fileName);
        }
    })
});

export const saveImageRecord = async (userId: string, fileUrl: string) => {
    return await prisma.image.create({
        data: {
            url: fileUrl,
            userId,
        }
    });
};
