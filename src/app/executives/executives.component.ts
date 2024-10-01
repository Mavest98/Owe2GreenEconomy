import { Component } from '@angular/core';

// Define the Executive interface
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
      name: 'Nkosinathi Hlabeni',
      title: 'CEO',
      email: 'nkosihlabeni@gmail.com nkosi@owe2greeneconomy.co.za',
      phone: '+27 791 764 751',
      bio: "Nkosi Hlabeni is an Environmental and Climate Activist also a founder & CEO of OWE2 GREEN ECONOMY.",
      profilePicture: 'assets/ow2 pictures/executives/WhatsApp Image 2024-09-25 at 12.10.23_71576154.jpg'
    },
    {
      name: 'Zongezile Mraji',
      title: 'Chief Organisational Director',
      email: 'mrajizongezile@gmail.com',
      phone: '+27 746 659 919',
      bio: 'Holds the position of Chief Organisational Director. Our mission is to promote sustainable environmental practices and raise awareness about the importance of protecting our environment.',
      profilePicture: 'assets/ow2 pictures/executives/WhatsApp Image 2024-09-26 at 15.42.55_b587af17.jpg'
    },
    {
      name: 'Elsie Tlale',
      title: 'Chief Administrative and Financial Officer',
      email: 'tlaleelsie@gmail.com',
      phone: '+27 74 999 3821',
      bio: 'Elsie Tlale is currently studying Motor Mechanics. She has previously worked as a taxi driver and transitioned to an administrative role in a construction company from 2016 to 2018.',
      profilePicture: 'assets/elsie.jpg'
    },
    {
      name: 'Kenneth (Kenny) Sandile Mhlaba',
      title: 'Executive Director of Youth Development and Education',
      email: 'kennymhlaba@gmail.com',
      phone: '+27 79 370 6589',
      bio: 'Kenny is a dedicated activist passionate about sustainability and environmental conservation. He is committed to making a positive impact on the environment.',
      profilePicture: 'assets/ow2 pictures/executives/WhatsApp Image 2024-09-30 at 08.44.36_57661c42.jpg'
    },
    {
      name: 'Ms Ntsoaki Mokoena',
      title: 'Director',
      email: 'mokoenaa.ntsoakii@gmail.com',
      phone: '+27 836 699 9054',
      bio: 'Ms. Ntsoaki Mokoena plays a key role in promoting sustainable environmental practices and raising awareness about protecting the environment.',
      profilePicture: 'assets/ow2 pictures/executives/WhatsApp Image 2024-09-26 at 15.43.23_41b72a66.jpg'
    },
  ];

  // Declare an array of non-executives using the same Executive interface
  nonExecutives: Executive[] = [
    {
      name: 'Tsholofelo Elizabeth Mahlangu',
      title: 'Non-Executive Member',
      email: 'tentswalote@gmail.com',
      phone: '+27 71 631 7377',
      bio: '.',
      profilePicture: '/assets/ow2 pictures/executives/WhatsApp Image 2024-09-26 at 17.32.18_efe70957.jpg'
    },
    {
      name: 'Joseph Morapedi Bolayi',
      title: 'Non-Executive Member (Economic Sustainability)',
      email: 'morapediblaai@gmail.com',
      phone: '+27 63 954 7647',
      bio: 'My passion for sustainable growth and community empowerment drove to work tirelessly,mobilizing and building partnerships.with stakeholders',
      profilePicture: 'assets/ow2 pictures/executives/Joseph.png'
    },
    {
      name: 'Phindile Sibeko',
      title: 'Members ',
      email: 'morapediblaai@gmail.com',
      phone: '+27 ',
      bio: '',
      profilePicture: ''
    }



    // Add more non-executive members here as needed
  ];
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

