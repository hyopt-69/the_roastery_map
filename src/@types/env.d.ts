declare namespace NodeJS {
  interface ProcessEnv {
    readonly MICRO_CMS_SERVICE_DOMAIN: string;
    readonly MICRO_CMS_READ_API_KEY: string;
  }
}
