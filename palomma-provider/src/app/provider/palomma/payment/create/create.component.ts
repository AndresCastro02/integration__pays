import { Component } from '@angular/core';
import { PaymentRequestDTO } from '../../model/request/payment-request.dto';
import { PalommaServiceService } from '../../service/palomma-service.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  payment_request: PaymentRequestDTO = new PaymentRequestDTO(
    0, '', '', '', '', '', 0
  );

  constructor(private palommaService: PalommaServiceService) {

  }

  submitForm() {
    const filteredPaymentRequest = Object.entries(this.payment_request).reduce((acc, [key, value]) => {
      if (value !== null && value !== '' && value !== undefined && value !== 0) {
        acc[key] = value;
      }
      return acc;
    }, {} as any);


    this.palommaService.createPaymentRequest(filteredPaymentRequest)
      .subscribe(response => {
        console.log('Pago creado:', response);
        //Llamar otro servicio que envia el response.id al web hook
        //Redirigir a response.payment_url
      }, err => {
        //Tratar los errores
        if (err.code === 400) {
          //error del cliente = BAD_REQUEST
        } else if (err.code === 500) {
          //error del servidor = INTERNAL_SERVER_ERROR
        }
        console.log(err)
      }
      );
  }

}
