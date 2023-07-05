export class SubscriptionRequestDTO {
    amount_cents: number;
    cancel_on_failure: boolean;
    count: number;
    description: string;
    enforced_document_number: string;
    interval: number;
    interval_unit: string;
    merchant_display_name: string;
    merchant_support_info: string;
    redirect_url: string;
    
    constructor(
      amountCents: number,
      cancelOnFailure: boolean,
      count: number,
      description: string,
      enforcedDocumentNumber: string,
      interval: number,
      intervalUnit: string,
      merchantDisplayName: string,
      merchantSupportInfo: string,
      redirectUrl: string
    ) {
      this.amount_cents = amountCents;
      this.cancel_on_failure = cancelOnFailure;
      this.count = count;
      this.description = description;
      this.enforced_document_number = enforcedDocumentNumber;
      this.interval = interval;
      this.interval_unit = intervalUnit;
      this.merchant_display_name = merchantDisplayName;
      this.merchant_support_info = merchantSupportInfo;
      this.redirect_url = redirectUrl;
    }
  }
  