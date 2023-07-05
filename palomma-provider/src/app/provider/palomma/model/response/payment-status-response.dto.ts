export class PaymentStatusResponseDTO {
    amount_cents: number;
    description: string;
    enforced_document_number: string;
    id: string;
    status: string;
    
    constructor(
      amountCents: number,
      description: string,
      enforcedDocumentNumber: string,
      id: string,
      status: string
    ) {
      this.amount_cents = amountCents;
      this.description = description;
      this.enforced_document_number = enforcedDocumentNumber;
      this.id = id;
      this.status = status;
    }
  }
  