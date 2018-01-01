import {NgModule, ModuleWithProviders, InjectionToken} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth/auth.component';
import {
    MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule, MatSnackBarModule,
    MatTabsModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {IAuthFirebaseUIConfig} from './interfaces/config.interface';
import {AngularFireModule, FirebaseAppConfig, FirebaseAppConfigToken, FirebaseAppName} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {ResponseSnackbarComponent} from './auth/response/response.snackbar.component';

export * from './auth/auth.component'


@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatChipsModule,
        AngularFireAuthModule,
    ],
    declarations:
        [
            AuthComponent,
            ResponseSnackbarComponent,
        ],
    exports:
        [
            AuthComponent,
            ResponseSnackbarComponent,
        ],
    entryComponents:
        [
            ResponseSnackbarComponent
        ]
})


export class NgxAuthFirebaseUIModule extends AngularFireModule {
    static forRoot(configFactory: FirebaseAppConfig, appNameFactory?: () => string, config?: IAuthFirebaseUIConfig): ModuleWithProviders {
        return {
            ngModule: NgxAuthFirebaseUIModule,
            providers:
                [
                    {
                        provide: FirebaseAppConfigToken,
                        useValue: configFactory
                    },
                    {
                        provide: FirebaseAppName,
                        useFactory: appNameFactory
                    },
                    {
                        provide: new InjectionToken<IAuthFirebaseUIConfig>('IAuthFirebaseUIConfig - main config'),
                        useValue: config
                    },
                ],
        }
    }
}