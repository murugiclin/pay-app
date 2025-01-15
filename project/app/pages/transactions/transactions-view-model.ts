import { Observable } from '@nativescript/core';
import { Transaction } from '../../models/transaction.model';

export class TransactionsViewModel extends Observable {
    private _transactions: Transaction[] = [];

    constructor() {
        super();
        this.loadTransactions();
    }

    get transactions(): Transaction[] {
        return this._transactions;
    }

    set transactions(value: Transaction[]) {
        if (this._transactions !== value) {
            this._transactions = value;
            this.notifyPropertyChange('transactions', value);
        }
    }

    private async loadTransactions() {
        // TODO: Replace with actual API call
        this.transactions = [
            {
                id: '1',
                amount: 1000,
                type: 'payment',
                status: 'completed',
                senderId: 'user1',
                receiverId: 'user2',
                description: 'Payment for rice delivery',
                createdAt: new Date()
            },
            {
                id: '2',
                amount: 5000,
                type: 'loan',
                status: 'pending',
                senderId: 'user2',
                receiverId: 'user1',
                description: 'Farm equipment loan',
                createdAt: new Date()
            }
        ];
    }
}