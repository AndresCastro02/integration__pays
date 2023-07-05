export class SubscriptionCancelResponseDTO {
    amount_cents: number;
    description: string;
    id: string;
    interval: number;
    interval_unit: string;
    past_payments: any[];
    status: string;
    
    constructor(
      amountCents: number,
      description: string,
      id: string,
      interval: number,
      intervalUnit: string,
      pastPayments: any[],
      status: string
    ) {
      this.amount_cents = amountCents;
      this.description = description;
      this.id = id;
      this.interval = interval;
      this.interval_unit = intervalUnit;
      this.past_payments = pastPayments;
      this.status = status;
    }
  }
  