// src/app/components/owe2-green-economy/owe2-green-economy.component.ts

import { Component } from '@angular/core';
import { Executive } from '../../models/executive.model';

@Component({
  selector: 'app-owe2-green-economy',
  templateUrl: './executives.component.html',
  styleUrls: ['./executives.component.css']
})
export class Owe2GreenEconomyComponent {
  executives: Executive[] = [
    {
      name: 'John Doe',
      title: 'CEO',
      email: 'john.doe@owe2greeneconomy.com',
      phone: '+1234567890',
      bio: 'John has over 20 years of experience in the green economy...',
      profilePicture: 'assets/images/executives/john-doe.jpg'
    },
    {
      name: 'Jane Smith',
      title: 'CFO',
      email: 'jane.smith@owe2greeneconomy.com',
      phone: '+0987654321',
      bio: 'Jane is a seasoned financial expert with a passion for sustainability...',
      profilePicture: 'assets/images/executives/jane-smith.jpg'
    },
    // Add more executives here
  ];
}
