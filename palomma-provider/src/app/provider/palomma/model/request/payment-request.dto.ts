export class PaymentRequestDTO {
  amount_cents: number;
  description: string;
  enforced_document_number: string;
  merchant_display_name: string;
  merchant_support_info: string;
  redirect_url: string;
  ttl: number;

  constructor(
    amount_cents: number,
    description: string,
    enforced_document_number: string,
    merchant_display_name: string,
    merchant_support_info: string,
    redirect_url: string,
    ttl: number
  ) {
    this.amount_cents = amount_cents;
    this.description = description;
    this.enforced_document_number = enforced_document_number;
    this.merchant_display_name = merchant_display_name;
    this.merchant_support_info = merchant_support_info;
    this.redirect_url = redirect_url;
    this.ttl = ttl;
  }
}
