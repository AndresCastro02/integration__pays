export class SubscriptionResponseDTO {
    id: string;
    subscription_url: string;
    
    constructor(id: string, subscriptionUrl: string) {
      this.id = id;
      this.subscription_url = subscriptionUrl;
    }
  }
  