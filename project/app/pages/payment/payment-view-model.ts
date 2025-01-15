import { Observable, Frame, alert } from '@nativescript/core';

export class PaymentViewModel extends Observable {
    private _recipientEmail: string = '';
    private _amount: string = '';
    private _description: string = '';
    private _isLoading: boolean = false;

    constructor() {
        super();
    }

    get recipientEmail(): string {
        return this._recipientEmail;
    }

    set recipientEmail(value: string) {
        if (this._recipientEmail !== value) {
            this._recipientEmail = value;
            this.notifyPropertyChange('recipientEmail', value);
        }
    }

    get amount(): string {
        return this._amount;
    }

    set amount(value: string) {
        if (this._amount !== value) {
            this._amount = value;
            this.notifyPropertyChange('amount', value);
        }
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        if (this._description !== value) {
            this._description = value;
            this.notifyPropertyChange('description', value);
        }
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    set isLoading(value: boolean) {
        if (this._isLoading !== value) {
            this._isLoading = value;
            this.notifyPropertyChange('isLoading', value);
        }
    }

    async onSendPayment() {
        if (!this.validateForm()) {
            return;
        }

        this.isLoading = true;

        try {
            // TODO: Replace with actual API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            alert({
                title: "Success",
                message: "Payment sent successfully!",
                okButtonText: "OK"
            }).then(() => {
                Frame.topmost().goBack();
            });
        } catch (error) {
            alert({
                title: "Error",
                message: "Failed to send payment. Please try again.",
                okButtonText: "OK"
            });
        } finally {
            this.isLoading = false;
        }
    }

    private validateForm(): boolean {
        if (!this.recipientEmail || !this.amount || !this.description) {
            alert({
                title: "Error",
                message: "Please fill in all fields",
                okButtonText: "OK"
            });
            return false;
        }

        const amountNum = parseFloat(this.amount);
        if (isNaN(amountNum) || amountNum <= 0) {
            alert({
                title: "Error",
                message: "Please enter a valid amount",
                okButtonText: "OK"
            });
            return false;
        }

        return true;
    }
}