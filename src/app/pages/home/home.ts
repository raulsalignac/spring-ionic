import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

process.env.AWS_ACCESS_KEY_ID = 'AKIAIOSFODNN7J9L1FGA';
process.env.AWS_SECRET_ACCESS_KEY = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCY1A56L0P1XY';
process.env.AWS_REGION = 'us-east-1';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    constructor(public  navCtrl: NavController){
        
    }
}
