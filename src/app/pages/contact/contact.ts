import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Icon } from '../../shared/icon/icon';
import { Deco } from '../../shared/deco/deco';
// Now correctly points to the environment file

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, Icon, Deco],
  template: `
    <div class="tour-page contact-page">
    <!-- Contact Hero -->
    <section class="hero-section">
      <app-deco name="contours" class="hero-contours" />
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-2 fw-bold mb-4 text-white">Get in Touch</h1>
            <p class="lead mb-4 text-white">We're here to help you plan your perfect journey</p>
            <p class="text-white mb-5">Reach out to us for any queries, custom packages, or travel assistance</p>
          </div>
        </div>
      </div>
      <app-deco name="mountains" class="hero-ridge" />
    </section>

    <!-- Contact Information -->
    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="contact-info-card">
              <div class="info-icon">
                <app-icon name="phone-alt" />
              </div>
              <h4>Call Us</h4>
              <p>+91 84471 33338</p>
              <small>Mon-Sat: 9AM-7PM</small>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-info-card">
              <div class="info-icon">
                <app-icon name="envelope" />
              </div>
              <h4>Email Us</h4>
              <p>contact@happyghumakkads.com</p>
              <small>We respond within 24 hours</small>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-info-card">
              <div class="info-icon">
                <app-icon name="map-marker-alt" />
              </div>
              <h4>Visit Us</h4>
              <p>Mishra Complex, Ground Floor, Chauhan Nagar</p>
              <p>Pateri, Satna (M.P.) 485001</p>
              <small>By appointment only</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="contact-form-card">
              <h2 class="text-center mb-4">Send us a Message</h2>
              <p class="text-center text-muted mb-4">Fill out the form below and we'll get back to you soon</p>
              
              <form (ngSubmit)="onSubmit($event)">
                <div class="row g-3">
                  <!-- Honeypot field for spam protection -->
                  <input type="text" name="_gotcha" style="display:none;" [(ngModel)]="formData._gotcha">
                  <div class="col-md-6">
                    <label for="name" class="form-label">Full Name *</label>
                    <input type="text" class="form-control" id="name" name="name" [(ngModel)]="formData.name" required>
                  </div>
                  <div class="col-md-6">
                    <label for="email" class="form-label">Email Address *</label>
                    <input type="email" class="form-control" id="email" name="email" [(ngModel)]="formData.email" required>
                  </div>
                  <div class="col-md-6">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input type="tel" class="form-control" id="phone" name="phone" [(ngModel)]="formData.phone">
                  </div>
                  <div class="col-md-6">
                    <label for="destination" class="form-label">Interested Destination</label>
                    <select class="form-select" id="destination" name="destination" [(ngModel)]="formData.destination">
                      <option value="">Select Destination</option>
                      <option value="madhya-pradesh">Madhya Pradesh</option>
                      <option value="north-india">North India</option>
                      <option value="jammu-kashmir">Jammu & Kashmir</option>
                      <option value="ladakh">Leh-Ladakh</option>
                      <option value="international">International Tours</option>
                      <option value="corporate">Corporate Events</option>
                      <option value="student">Student Groups</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label for="subject" class="form-label">Subject *</label>
                    <input type="text" class="form-control" id="subject" name="subject" [(ngModel)]="formData.subject" required>
                  </div>
                  <div class="col-12">
                    <label for="message" class="form-label">Message *</label>
                    <textarea class="form-control" id="message" name="message" rows="5" [(ngModel)]="formData.message" required></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-warning btn-lg w-100" [disabled]="isSubmitting">
                      <span *ngIf="!isSubmitting">Send Message</span>
                      <span *ngIf="isSubmitting">
                        <app-icon name="spinner" class="me-2" />Sending...
                      </span>
                    </button>
                  </div>
                </div>
              </form>
              
              <!-- Success Message -->
              <div *ngIf="showSuccess" class="alert alert-success mt-4" role="alert">
                <app-icon name="check-circle" class="me-2" />
                <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon!
              </div>
              
              <!-- Error Message -->
              <div *ngIf="showError" class="alert alert-danger mt-4" role="alert">
                <app-icon name="exclamation-circle" class="me-2" />
                <strong>Oops!</strong> Something went wrong. Please try again or contact us directly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-4">
          <h3>Follow Us on Social Media</h3>
          <p class="text-muted">Stay updated with our latest offers and travel tips</p>
        </div>
        <div class="d-flex justify-content-center gap-3">
          <a href="https://www.facebook.com/happyghumakkads" target="_blank" class="social-btn facebook">
            <app-icon name="facebook-f" />
          </a>
          <a href="https://www.instagram.com/happyghumakkads" target="_blank" class="social-btn instagram">
            <app-icon name="instagram" />
          </a>
          <a href="https://www.twitter.com/happyghumakkads" target="_blank" class="social-btn twitter">
            <app-icon name="twitter" />
          </a>
          <a href="https://wa.me/919876543210" target="_blank" class="social-btn whatsapp">
            <app-icon name="whatsapp" />
          </a>
          <a href="https://www.youtube.com/@happyghumakkads" target="_blank" class="social-btn youtube">
            <app-icon name="youtube" />
          </a>
        </div>
      </div>
    </section>
    </div>
  `,
  styles: `
    /* Hero layout now comes from the shared .tour-page system in
       src/styles/_tour-page.scss — this is just the photograph. Was a fixed
       60vh box wrapped around a Bootstrap .min-vh-100 row, which clipped the
       copy on phones. */
    /* Hampi at sunset — the previous hero was a generic blue/purple abstract stock
       graphic, off-palette and unrelated to travel. */
    :host {
      --hero-img: url('/images/cultural-400.webp');
    }

    @media (min-width: 720px) {
      :host { --hero-img: url('/images/cultural-800.webp'); }
    }

    @media (min-width: 1200px) {
      :host { --hero-img: url('/images/cultural-1920.webp'); }
    }
    
    .contact-info-card {
      text-align: center;
      padding: 30px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
      height: 100%;
      
      &:hover {
        transform: translateY(-5px);
      }
    }
    
    .info-icon {
      width: 60px;
      height: 60px;
      margin: 0 auto 20px;
      background: linear-gradient(135deg, var(--accent-500), var(--accent-600));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
    }
    
    .contact-form-card {
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    
    .social-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      transition: transform 0.3s ease;
      
      &.facebook { background: #1877f2; }
      &.instagram { background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); }
      &.twitter { background: #1da1f2; }
      &.whatsapp { background: #25d366; }
      &.youtube { background: #ff0000; }
      
      &:hover {
        transform: scale(1.1);
        color: white;
      }
    }
  `
})
export class Contact {
  formData = {
    name: '',
    email: '',
    phone: '',
    destination: '',
    subject: '',
    message: '',
    _gotcha: '' // Honeypot field
  };
  
  isSubmitting = false;
  showSuccess = false;
  showError = false;
  
  onSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitting = true;
    this.showSuccess = false;
    this.showError = false;
    
    // Check honeypot field for spam protection
    if (this.formData._gotcha) {
      console.log('Spam detected');
      this.showError = true;
      this.isSubmitting = false;
      return;
    }
    
    // Create form data manually
    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('phone', this.formData.phone);
    formData.append('destination', this.formData.destination);
    formData.append('subject', this.formData.subject);
    formData.append('message', this.formData.message);
    
    // Submit to Formspree
    const formspreeId = 'xjgegaao';
    fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      console.log('Formspree response:', response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Form submission failed with status: ${response.status}`);
      }
    })
    .then(data => {
      this.showSuccess = true;
      this.resetForm();
      // Scroll to success message
      setTimeout(() => {
        const successElement = document.querySelector('.alert-success');
        if (successElement) {
          successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    })
    .finally(() => {
      this.isSubmitting = false;
    });
  }
  
  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      destination: '',
      subject: '',
      message: '',
      _gotcha: ''
    };
  }
}