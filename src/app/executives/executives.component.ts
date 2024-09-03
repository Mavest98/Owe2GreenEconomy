import { Component } from '@angular/core';

// Define the Executive interface outside the class
interface Executive {
  name: string;
  title: string;
  email: string;
  phone: string;
  bio: string;
  profilePicture: string; // URL of the profile picture
}

@Component({
  selector: 'app-executives',
  templateUrl: './executives.component.html',
  styleUrls: ['./executives.component.scss']
})
export class ExecutivesComponent {
  // Declare an array of executives using the Executive interface
  executives: Executive[] = [
    {
      name: 'John Doe',
      title: 'CEO',
      email: 'john.doe@owe2greeneconomy.com',
      phone: '+1234567890',
      bio: 'John has over 20 years of experience in the green economy...',
      profilePicture: '/assets/IMG-20240729-WA0023.jpg'
    },
    {
      name: 'Jane Smith',
      title: 'CFO',
      email: 'jane.smith@owe2greeneconomy.com',
      phone: '+0987654321',
      bio: 'Jane is a seasoned financial expert with a passion for sustainability...',
      profilePicture: '/assets/IMG-20240729-WA0023.jpg'
    },
    {
      name: 'John Doe',
      title: 'CEO',
      email: 'john.doe@owe2greeneconomy.com',
      phone: '+1234567890',
      bio: 'John has over 20 years of experience in the green economy...',
      profilePicture: '/assets/IMG-20240729-WA0023.jpg'
    },
    {
      name: 'Jane Smith',
      title: 'CFO',
      email: 'jane.smith@owe2greeneconomy.com',
      phone: '+0987654321',
      bio: 'Jane is a seasoned financial expert with a passion for sustainability...',
      profilePicture: '/assets/IMG-20240729-WA0023.jpg'
    },
    {
      name: 'John Doe',
      title: 'CEO',
      email: 'john.doe@owe2greeneconomy.com',
      phone: '+1234567890',
      bio: 'John has over 20 years of experience in the green economy...',
      profilePicture: '/assets/IMG-20240729-WA0023.jpg'
    },
    {
      name: 'Jane Smith',
      title: 'CFO',
      email: 'jane.smith@owe2greeneconomy.com',
      phone: '+0987654321',
      bio: 'Jane is a seasoned financial expert with a passion for sustainability...',
      profilePicture: '/assets/IMG-20240729-WA0023.jpg'
    },
    // Add more executives here
  ];
}
