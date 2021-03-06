import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Rafael Fuzitani",
    data: "November 5, 1955",
    descricao: "Estou criando um app",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }


  public nome_usuario:string = "Rafael Fuzitani do Codigo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    alert(num1+num2);
  }
//ciclo de vida de uma página
//ponto de execução
  ionViewDidLoad() {
    // this.somaDoisNumeros(5,99);
  }

}
