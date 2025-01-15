import { Observable, Frame, alert } from '@nativescript/core';

export class DashboardViewModel extends Observable {
    constructor() {
        super();
    }

    onLogout() {
        Frame.topmost().navigate({
            moduleName: "pages/login/login-page",
            clearHistory: true
        });
    }

    onSendPayment() {
        Frame.topmost().navigate({
            moduleName: "pages/payment/payment-page",
            transition: {
                name: "slide"
            }
        });
    }

    onRequestLoan() {
        Frame.topmost().navigate({
            moduleName: "pages/loan/loan-page",
            transition: {
                name: "slide"
            }
        });
    }

    onManageCollateral() {
        Frame.topmost().navigate({
            moduleName: "pages/collateral/collateral-page",
            transition: {
                name: "slide"
            }
        });
    }

    viewTransactions() {
        Frame.topmost().navigate({
            moduleName: "pages/transactions/transactions-page",
            transition: {
                name: "slide"
            }
        });
    }
}