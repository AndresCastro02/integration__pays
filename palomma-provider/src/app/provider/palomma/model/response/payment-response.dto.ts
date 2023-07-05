export class PaymentResponseDTO {
    id: string;
    payment_url: string;
    
    constructor(id: string, paymentUrl: string) {
      this.id = id;
      this.payment_url = paymentUrl;
    }
  }
  