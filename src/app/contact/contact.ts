import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-contact',
  imports: [Header, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
   // ✅ Handles form submission
  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Web3Forms endpoint
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
      .then(async (response) => {
        if (response.ok) {
          alert('✅ Thank you! Your message has been sent successfully.');
          form.reset();
        } else {
          const result = await response.json();
          alert('❌ Failed to send message: ' + (result.message || 'Unknown error'));
        }
      })
      .catch(() => {
        alert('⚠️ Something went wrong. Please try again later.');
      });
  }
}
