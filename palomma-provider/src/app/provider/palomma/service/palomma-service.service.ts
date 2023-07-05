import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { PaymentRequestDTO } from '../model/request/payment-request.dto';
import { PaymentResponseDTO } from '../model/response/payment-response.dto';
import { PaymentStatusResponseDTO } from '../model/response/payment-status-response.dto';
import { SubscriptionRequestDTO } from '../model/request/subscription-create.dto';
import { SubscriptionResponseDTO } from '../model/response/subscription-create-response.dto';
import { SubscriptionCancelResponseDTO } from '../model/response/subscription-cancel-response.dto';
import { environment } from 'environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PalommaServiceService {

  private baseUrl = environment.palommaUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  /**
   * Crea una solicitud de pago.
   * @param paymentRequest La solicitud de pago a enviar.
   * @returns Un Observable que emite la respuesta de la solicitud de pago.
   */
  createPaymentRequest(paymentRequest: PaymentRequestDTO): Observable<PaymentResponseDTO> {

    const url = `${this.baseUrl}/payment-requests`;
    const headers = new HttpHeaders().set('Authorization', this.apiKey ?? '');

    return this.http.post<PaymentResponseDTO>(url, paymentRequest, { headers }).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      })
    );
  }

/**
 * Consulta el estado de un pago.
 * @param transactionId El ID de transacción del pago a consultar.
 * @returns Un Observable que emite la respuesta del estado del pago.
 */
  getPaymentStatus(transactionId: string): Observable<PaymentStatusResponseDTO> {
    const url = `${this.baseUrl}/payment-requests/${transactionId}`;
    const headers = new HttpHeaders().set('Authorization', this.apiKey ?? '');

    return this.http.get<PaymentStatusResponseDTO>(url, { headers }).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      })
    );
  }

/**
 * Crea una solicitud de suscripción.
 * @param subscriptionRequest La solicitud de suscripción a enviar.
 * @returns Un Observable que emite la respuesta de la solicitud de suscripción.
 */
  createSubscriptionRequest(subscriptionRequest: SubscriptionRequestDTO): Observable<SubscriptionResponseDTO> {
    const url = `${this.baseUrl}/subscription-requests`;
    const headers = new HttpHeaders().set('Authorization', this.apiKey ?? '');
    return this.http.post<SubscriptionResponseDTO>(url, subscriptionRequest, { headers }).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      })
    );
  }

  /**
 * Cancela una solicitud de suscripción.
 * @param subscriptionId El identificador de la solicitud de suscripción a cancelar.
 * @returns Un Observable que emite la respuesta de cancelación de la solicitud de suscripción.
 */
  cancelSubscriptionRequest(subscriptionId: string): Observable<SubscriptionCancelResponseDTO> {
    const url = `${this.baseUrl}/subscription-requests/${subscriptionId}`;
    const headers = new HttpHeaders().set('Authorization', this.apiKey ?? '');

    return this.http.delete<SubscriptionCancelResponseDTO>(url, { headers }).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      })
    );
  }
}
