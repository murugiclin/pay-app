import { Observable, Frame, alert } from '@nativescript/core';

export class LoginViewModel extends Observable {
    private _email: string = '';
    private _password: string = '';
    private _isLoading: boolean = false;

    constructor() {
        super();
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (this._email !== value) {
            this._email = value;
            this.notifyPropertyChange('email', value);
        }
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        if (this._password !== value) {
            this._password = value;
            this.notifyPropertyChange('password', value);
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

    async onLoginTap() {
        if (!this.email || !this.password) {
            alert({
                title: "Error",
                message: "Please enter both email and password",
                okButtonText: "OK"
            });
            return;
        }

        this.isLoading = true;

        try {
            // TODO: Replace with actual API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            Frame.topmost().navigate({
                moduleName: "pages/dashboard/dashboard-page",
                clearHistory: true
            });
        } catch (error) {
            alert({
                title: "Login Failed",
                message: "Invalid credentials. Please try again.",
                okButtonText: "OK"
            });
        } finally {
            this.isLoading = false;
        }
    }

    onRegisterTap() {
        Frame.topmost().navigate({
            moduleName: "pages/register/register-page",
            transition: {
                name: "slide"
            }
        });
    }
}