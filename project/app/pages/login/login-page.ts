import { NavigatedData, Page } from '@nativescript/core';
import { LoginViewModel } from './login-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new LoginViewModel();
}