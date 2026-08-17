import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, Icon],
  template: `
    <footer class="footer-section py-5 bg-dark text-white">
      <div class="container">
        <div class="row">
          <!-- Company Info -->
          <div class="col-lg-4 col-md-6 mb-4">
            <h4 class="text-warning mb-3">Happy Ghumakkads</h4>
            <p class="mb-3">Your trusted travel partner for unforgettable journeys across India and beyond.</p>
            <div class="contact-info">
              <div class="d-flex align-items-center mb-2">
                <app-icon name="map-marker-alt" class="me-2" />
                <span>Mishra Complex, Ground Floor, Chauhan Nagar, Pateri, Satna (M.P.) 485001</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <app-icon name="phone" class="me-2" />
                <span>+91 84471 33338</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <app-icon name="envelope" class="me-2" />
                <span>info.happyghumakkads@gmail.com</span>
              </div>
            </div>
          </div>

          <!-- Business Hours -->
          <div class="col-lg-4 col-md-6 mb-4">
            <h4 class="text-warning mb-3">Business Hours</h4>
            <div class="business-hours">
              <div class="d-flex align-items-center mb-2">
                <app-icon name="clock" class="me-2" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <app-icon name="calendar" class="me-2" />
                <span>Sunday: Emergency Only</span>
              </div>
              <div class="d-flex align-items-center">
                <app-icon name="headset" class="me-2" />
                <span>24x7 Support Available</span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="col-lg-4 col-md-12 mb-4">
            <h4 class="text-warning mb-3">Stay Connected</h4>
            <p class="mb-3">Follow us for travel inspiration, exclusive deals, and destination updates</p>
            <div class="social-links">
              <a href="https://www.instagram.com/happyghumakkads/" target="_blank" class="btn btn-outline-light btn-sm me-2 mb-2">
                <app-icon name="instagram" /> Instagram
              </a>
              <a href="https://www.facebook.com/happyghumakkads/" target="_blank" class="btn btn-outline-light btn-sm mb-2">
                <app-icon name="facebook" /> Facebook
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="row mt-4">
          <div class="col-12">
            <hr class="bg-white">
            <div class="text-center">
              <p class="mb-0">&copy; 2024 Happy Ghumakkads. All rights reserved. | Designed with <app-icon name="heart" class="text-danger" /> for travelers</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .footer-section {
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    }

    .contact-info div,
    .business-hours div {
      font-size: 0.9rem;
    }

    .social-links .btn {
      border-radius: 25px;
      padding: 8px 16px;
      transition: all 0.3s ease;
    }

    .social-links .btn:hover {
      background-color: #ffc107;
      border-color: #ffc107;
      color: #000;
      transform: translateY(-2px);
    }

    .text-warning {
      color: #ffc107 !important;
    }

    hr {
      opacity: 0.3;
    }

    @media (max-width: 768px) {
      .footer-section {
        text-align: center;
      }
      
      .contact-info div,
      .business-hours div {
        justify-content: center;
      }
    }
  `
})
export class Footer {

}
