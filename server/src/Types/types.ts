declare global {
  namespace NodeJS {
    interface ProcessEnv {
      port?: string;

      DbUrl: string;

      Api_Url: string;
      Client_Url: string;
    }
  }
}

export {};
