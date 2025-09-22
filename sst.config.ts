// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

// Extract environment variables
const { DOMAIN_NAME, DOMAIN_CERT_ARN } = process.env;

export default $config({
  app(input) {
    return {
      name: "quirks-website",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("Website", {
      // Add custom domain only if provided
      ...(DOMAIN_NAME &&
        DOMAIN_CERT_ARN && {
        domain: {
          name: DOMAIN_NAME,
          dns: false,
          cert: DOMAIN_CERT_ARN,
          redirects: [`www.${DOMAIN_NAME}`],
        },
      }),
    });
  },
});
