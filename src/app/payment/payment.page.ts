import { NavController, NavParams } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidoDTO } from './../models/pedido.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  pedido: PedidoDTO
  parcelas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  formGroup: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
    private navParams: NavParams,
    public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      'numeroDeParcelas': [1, Validators.required],
      '@type': ['', Validators.required]
    });
  }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    if (nav.extras.state === undefined) {
      this.navCtrl.navigateBack('cart');
    } else {
      this.pedido = nav.extras.state.pedido;
    
      console.log(this.pedido)
    }
  }
  nextPage() {
    this.pedido.pagamento = this.formGroup.value;
    this.router.navigateByUrl('/order-confirmation', {
      state: { pedido: this.pedido }
    });
  }

}
