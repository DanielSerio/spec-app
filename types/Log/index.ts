import { PrintStatus } from "../Spec";

export interface PrintStatusChange {
  from: PrintStatus;
  to: PrintStatus;
}

export default interface Log {
  userEmail: string;
  specName: string;
  printStatusChange: PrintStatusChange;
}