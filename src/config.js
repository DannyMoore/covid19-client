const dev = {
    s3: {
      REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
      BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
    },
    apiGateway: {
      REGION: "eu-central-1",
      URL: "https://3jjk4b8gpj.execute-api.eu-central-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-central-1",
      USER_POOL_ID: "eu-central-1_EZRuGdkNp",
      APP_CLIENT_ID: "7m7g9fhjtllt87s94haca99u5v",
      IDENTITY_POOL_ID: "eu-central-1:8ea6952b-11c3-4834-9d9c-22177915c9a1"
    }
  };

  const prod = {
    s3: {
      REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
      BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
    },
    apiGateway: {
      REGION: "eu-central-1",
      URL: "https://3jjk4b8gpj.execute-api.eu-central-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-central-1",
      USER_POOL_ID: "eu-central-1_EZRuGdkNp",
      APP_CLIENT_ID: "7m7g9fhjtllt87s94haca99u5v",
      IDENTITY_POOL_ID: "eu-central-1:8ea6952b-11c3-4834-9d9c-22177915c9a1"
    }
  };

  // Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
? prod
: dev;

export default {
// Add common config values here
//MAX_ATTACHMENT_SIZE: 5000000,
...config
};
