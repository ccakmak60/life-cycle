import AWS from 'aws-sdk';

const s3Client = (): AWS.S3 => {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  return new AWS.S3();
};

export default s3Client;
