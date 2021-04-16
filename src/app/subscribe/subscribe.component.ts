import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  alerts: any[] = [
    {
      msg: `You Successfully Subscribed`,
      timeout: 1,
    },
  ];
  constructor() {}
  ngOnInit(): void {}

  subscribed(form: NgForm) {
    form.reset();
    this.add();
  }
  add(): void {
    this.alerts.push({
      msg: `You Successfully Subscribed`,
      timeout: 1500,
    });
  }
  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter((alert) => alert !== dismissedAlert);
  }
}
