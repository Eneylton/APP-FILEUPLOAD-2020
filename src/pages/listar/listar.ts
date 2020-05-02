import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';



@IonicPage({})
@Component({
  selector: 'page-listar',
  templateUrl: 'listar.html',
})
export class ListarPage {

  lojas: any = [];
  serv:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private serve: ServidorProvider) {

              this.serv = serve.serve;
  }

  ionViewDidLoad() {
    
    this.lojas = [];
    this.listarloja();

  }

  formadd() {
    this.navCtrl.push('CadastroPage');
  }

  listarloja() {
    let body = {

      crud: 'listar_fotos'

    };

    this.serve.postData(body, 'servidor.php').subscribe(data => {
      for (let loja of data.result) {
        this.lojas.push(loja);
      }
    });
  }

}
