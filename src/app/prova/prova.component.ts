import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss']
})
export class ProvaComponent implements OnInit{

  isDisabled = false;
  image = '';
  image1 ='https://www.terranuova.it/var/terranuova/storage/images/chiedi-all-esperto/la-comunicazione-del-cane.-quando-i-segnali-che-invia-devono-farci-preoccupare/1394012-1-ita-IT/La-comunicazione-del-cane.-Quando-i-segnali-che-invia-devono-farci-preoccupare_articleimage.jpg';
  image2= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPt6o-9jhKKCgocPZY3JwhG7dlmvUvFn9OvLQTwhV28g&s'

  ngOnInit(): void {
    let counter = 0;
      setInterval(()=>{
        if(counter%2 == 0){
          this.image = this.image1
        }else{
          this.image = this.image2
        }
        counter++;
      },1000)
  }
}
