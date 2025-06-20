import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 ngAfterViewInit(): void {
    new Typed('#typed-text', {
      strings: ['I build Angular apps.', 'I create dashboards.', 'I love clean code.'],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true
    });
  }

  toggleTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  sendEmail(event: Event): void {
    event.preventDefault();

    // If using emailjs:
    // emailjs.sendForm('your_service_id', 'your_template_id', event.target as HTMLFormElement, 'your_user_id')
    //   .then(() => alert('Message sent!'))
    //   .catch(() => alert('Failed to send message.'));
  }
}
