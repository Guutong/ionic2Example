import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
declare var AndroidNativePdfViewer: any

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openPdfFromUrl() {
        var options = {
          headerColor: "#2196F3",
          showScroll: false,
          swipeHorizontal: false
        };
        var url = "https://education.github.com/git-cheat-sheet-education.pdf"; // <==== url pdf
        AndroidNativePdfViewer.openPdfUrl(url,
          "Test",
          options,
          function (success) {
            console.log("AndroidNativePdfViewer success");
          }, function (error) {
            console.error("AndroidNativePdfViewer error : " + error);
          });
  }
}
