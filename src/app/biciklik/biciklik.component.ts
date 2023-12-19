import { Component } from '@angular/core';

@Component({
  selector: 'app-biciklik',
  templateUrl: './biciklik.component.html',
  styleUrls: ['./biciklik.component.css']
})
export class BiciklikComponent {
  products = [
    { name: 'Mountain Bike X1', description: 'Egy sokoldalú hegyi kerékpár, haladó funkciókkal a terepi kalandokhoz.', price: "25.000ft", image: 'kerekpar1.jpg' },
    { name: 'City Cruiser S2', description: 'Stílusos és kényelmes városi cruiser, tervezve az urbánus közlekedéshez.', price: "45.000ft", image: 'kerekpar2.jpg' },
    { name: 'Road Racer Pro', description: 'Magas teljesítményű országúti kerékpár aerodinamikus tervezéssel a sebesség kedvelőinek.', price: "55.000ft", image: 'kerekpar1.jpg' },
    { name: 'Hybrid Explorer', description: 'Egy hibrid kerékpár, amely ötvözi a legjobbat mindkét világból.', price: "60.000 ft", image: 'kerekpar2.jpg' },
    { name: 'Electric Commuter E1', description: 'Egy környezetbarát elektromos ingázó kerékpár erős motorral.', price: "65.000ft", image: 'kerekpar1.jpg' },
    { name: 'Kids Adventure Bike', description: 'Egy erős és színes kerékpár, kifejezetten a fiatal kalandorok számára tervezve.', price: "70.000ft", image: 'kerekpar2.jpg' },
    { name: 'BMX Extreme X3', description: 'Egy BMX kerékpár extrém trükkök számára kifejlesztve, tökéletes az izgalmak kedvelőinek.', price: "82.000ft", image: 'kerekpar1.jpg' },
    { name: 'Folding Compact C1', description: 'Egy kompakt és összecsukható kerékpár a kényelmes városi közlekedéshez.', price: "90.000ft", image: 'kerekpar2.jpg' },
];
}
