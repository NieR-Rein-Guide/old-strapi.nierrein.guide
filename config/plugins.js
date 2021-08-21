module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('S3_ACCESS_KEY'),
      secretAccessKey: env('S3_SECRET_KEY'),
      region: env('REGION'),
      endpoint: `s3.${env('REGION')}.${env('S3_DOMAIN')}`
      params: {
        Bucket: env('S3_BUCKET_NAME'),
      },
    },
  },
});
