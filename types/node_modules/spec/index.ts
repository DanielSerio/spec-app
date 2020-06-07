export enum PrintStatus {
  DEV = 'development',
  PROD = 'production'
}

export default interface Spec {
  name: string;
  printStatus: PrintStatus;

  description?: string;

  validName?: () => boolean;
}