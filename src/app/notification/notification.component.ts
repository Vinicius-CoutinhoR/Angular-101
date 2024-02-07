import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../shared/service/notification.service";
import {animate, style, transition, trigger} from "@angular/animations";
import {NotificationData} from "../shared/model/notification-data.model";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
  animations: [
    trigger('notificationAnim', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(5px)'
        }),
        animate('150ms 125ms ease-out')
      ]),
      transition(':leave', [
        animate(125, style({
          transform: 'scale(0.88)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {

  notification: any = [];
  timeout: any;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notifications.subscribe((notification: NotificationData) => {
      this.notification = Array(notification)

      clearTimeout(this.timeout)

      setTimeout(() => {
        this.notification = null;
      }, notification.duration)
    })
  }

}
