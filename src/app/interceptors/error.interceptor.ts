import { StorageService } from './../Service/storage.service';
import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs'; // IMPORTANTE: IMPORT ATUALIZADO
import { AlertController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService, @Inject(AlertController) private alertCtrl: AlertController) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(((error, caught) => {
                let errorObj = error;
                if (errorObj.error) {
                    errorObj = errorObj.error;
                }
                if (!errorObj.status) {
                    errorObj = JSON.parse(errorObj);
                }

                console.log("Erro detectado pelo interceptor:");
                console.log(errorObj);

                switch (errorObj.status) {
                    case 401:
                        this.handle401();
                        break;
                    case 403:
                        this.handle403();
                        break;
                }


                // tslint:disable-next-line: deprecation
                return Observable.throw(errorObj);
            }))) as any;
    }


    handle403() {
        this.storage.setLocalUser(null);
    }

    async handle401() {
        const alert = await this.alertCtrl.create({
            header: 'Erro 401: falha de autenticação',
            message: 'Email ou senha incorretos',

            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        await alert.present();
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};