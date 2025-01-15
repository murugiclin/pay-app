import { Observable, Frame, alert } from '@nativescript/core';
import { User } from '../../models/user.model';

export class RegisterViewModel extends Observable {
    private _fullName: string = '';
    private _email: string = '';
    private _password: string = '';
    private _confirmPassword: string = '';
    private _isLoading: boolean = false;
    private _userTypes: string[] = ['Farmer', 'Customer'];
    private _selectedUserTypeIndex: number = 0;

    constructor() {
        super();
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        if (this._fullName !== value) {
            this._fullName = value;
            this.notifyPropertyChange('fullName', value);
        }
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

    get confirmPassword(): string {
        return this._confirmPassword;
    }

    set confirmPassword(value: string) {
        if (this._confirmPassword !== value) {
            this._confirmPassword = value;
            this.notifyPropertyChange('confirmPassword', value);
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

    get userTypes(): string[] {
        return this._userTypes;
    }

    get selectedUserTypeIndex(): number {
        return this._selectedUserTypeIndex;
    }

    set selectedUserTypeIndex(value: number) {
        if (this._selectedUserTypeIndex !== value) {
            this._selectedUserTypeIndex = value;
            this.notifyPropertyChange('selectedUserTypeIndex', value);
        }
    }

    async onRegisterTap() {
        if (!this.validateForm()) {
            return;
        }

        this.isLoading = true;

        try {
            // TODO: Replace with actual API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const userType = this._selectedUserTypeIndex === 0 ? 'farmer' : 'customer';
            const user: Partial<User> = {
                fullName: this.fullName,
                email: this.email,
                userType: userType as 'farmer' | 'customer',
                balance: 0
            };

            // Navigate to dashboard after successful registration
            Frame.topmost().navigate({
                moduleName: "pages/dashboard/dashboard-page",
                clearHistory: true
            });
        } catch (error) {
            alert({
                title: "Registration Failed",
                message: "Failed to create account. Please try again.",
                okButtonText: "OK"
            });
        } finally {
            this.isLoading = false;
        }
    }

    private validateForm(): boolean {
        if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
            alert({
                title: "Error",
                message: "Please fill in all fields",
                okButtonText: "OK"
            });
            return false;
        }

        if (this.password !== this.confirmPassword) {
            alert({
                title: "Error",
                message: "Passwords do not match",
                okButtonText: "OK"
            });
            return false;
        }

        if (this.password.length < 6) {
            alert({
                title: "Error",
                message: "Password must be at least 6 characters long",
                okButtonText: "OK"
            });
            return false;
        }

        return true;
    }
}