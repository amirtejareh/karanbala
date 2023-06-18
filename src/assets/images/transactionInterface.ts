export interface TransactionInterface {
    financialOperationAt: string;
    financialOperationType: number;
    financialOperationTypeValue: string;
    clientDescription: string;
    debit: number;
    credit: number;
    id: number;
    totalBalance: number;
    balance?: number;
    activityEnum: number;
    activityEnumValue: string;
}
