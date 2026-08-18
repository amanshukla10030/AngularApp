import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { Deco } from '../../shared/deco/deco';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink, Icon, Deco],
  template: `
    <div class="tour-page about-page">
    <!-- About Hero -->
    <section class="hero-section">
      <app-deco name="contours" class="hero-contours" />
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-2 fw-bold mb-4 text-white">About Happy Ghumakkads</h1>
            <p class="lead mb-4 text-white">Your Trusted Travel Partner for Unforgettable Indian Journeys</p>
            <p class="text-white mb-5">With over 15 years of experience, we've been crafting extraordinary travel experiences across India, bringing dreams to life one journey at a time.</p>
          </div>
        </div>
      </div>
      <app-deco name="mountains" class="hero-ridge" />
    </section>

    <!-- Our Story -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="display-5 fw-bold mb-4">Our Story</h2>
            <p class="lead mb-4">Founded in 2017, Happy Ghumakkads began with a simple mission: to showcase the incredible diversity and beauty of India to travelers from around the world.</p>
            <p>What started as a small team of passionate travelers has grown into one of India's most trusted travel agencies, serving thousands of happy customers each year. Our name "Ghumakkads" (wanderers) reflects our core belief - that travel is not just about destinations, but about the journey of discovery.</p>
            <div class="mt-4">
              <div class="d-flex gap-4 mb-3">
                <div class="stat-box">
                  <h3 class="text-warning">8+</h3>
                  <p>Years Experience</p>
                </div>
                <div class="stat-box">
                  <h3 class="text-warning">50,000+</h3>
                  <p>Happy Travelers</p>
                </div>
              </div>
              <div class="d-flex gap-4">
                <div class="stat-box">
                  <h3 class="text-warning">100+</h3>
                  <p>Tour Packages</p>
                </div>
                <div class="stat-box">
                  <h3 class="text-warning">4.9★</h3>
                  <p>Average Rating</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="/images/os-3480.webp" srcset="/images/os-400.webp 400w, /images/os-800.webp 800w, /images/os-1280.webp 1280w, /images/os-1920.webp 1920w, /images/os-3480.webp 3480w" sizes="(max-width: 720px) 92vw, (max-width: 1024px) 46vw, 400px" width="3480" height="1955" loading="eager" fetchpriority="high" decoding="async" alt="Our Team" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Our Mission & Vision -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="mission-card">
              <div class="card-icon">
                <app-icon name="bullseye" />
              </div>
              <h3>Our Mission</h3>
              <p>To provide exceptional travel experiences that showcase India's rich cultural heritage, natural beauty, and diverse landscapes while ensuring safety, comfort, and unforgettable memories for every traveler.</p>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="mission-card">
              <div class="card-icon">
                <app-icon name="eye" />
              </div>
              <h3>Our Vision</h3>
              <p>To become India's most trusted travel brand, known for creating personalized journeys that connect travelers with authentic Indian experiences and foster cultural understanding.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Awards Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="display-5 fw-bold mb-4">Our Awards</h2>
            <p class="lead mb-4">Recognized for Excellence in Travel Services</p>
            <p>We are proud to have been awarded the "Best Travel Agency in Satna" for our outstanding services and commitment to customer satisfaction. This prestigious award was presented by the Member of Parliament of Satna, recognizing our dedication to providing exceptional travel experiences and our contribution to promoting tourism in the region.</p>
            <div class="award-highlights mt-4">
              <div class="d-flex align-items-center mb-3">
                <app-icon name="trophy" class="text-warning me-3" />
                <span>Best Travel Agency in Satna</span>
              </div>
              <div class="d-flex align-items-center mb-3">
                <app-icon name="medal" class="text-warning me-3" />
                <span>Excellence in Customer Service</span>
              </div>
              <div class="d-flex align-items-center">
                <app-icon name="star" class="text-warning me-3" />
                <span>Recognized by MP of Satna</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="/images/HGI-29-1536.webp" srcset="/images/HGI-29-400.webp 400w, /images/HGI-29-800.webp 800w, /images/HGI-29-1280.webp 1280w, /images/HGI-29-1536.webp 1536w" sizes="(max-width: 720px) 92vw, (max-width: 1024px) 46vw, 400px" width="1536" height="1024" loading="lazy" decoding="async" alt="Awards" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-4 fw-bold mb-3">Our Core Values</h2>
          <p class="lead text-muted">The principles that guide everything we do</p>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-md-6">
            <div class="value-card">
              <div class="value-icon">
                <app-icon name="heart" />
              </div>
              <h4>Passion</h4>
              <p>We love what we do and are passionate about creating amazing travel experiences</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="value-card">
              <div class="value-icon">
                <app-icon name="shield-alt" />
              </div>
              <h4>Trust</h4>
              <p>Building lasting relationships through honesty, transparency, and reliability</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="value-card">
              <div class="value-icon">
                <app-icon name="star" />
              </div>
              <h4>Excellence</h4>
              <p>Striving for the highest standards in every aspect of our service</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="value-card">
              <div class="value-icon">
                <app-icon name="globe" />
              </div>
              <h4>Sustainability</h4>
              <p>Committed to responsible tourism that preserves India's natural beauty</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-4 fw-bold mb-3">Meet Our Team</h2>
          <p class="lead text-muted">The passionate people behind your perfect journeys</p>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="team-card">
              <img src="/images/HGI-9-1024.webp" srcset="/images/HGI-9-400.webp 400w, /images/HGI-9-800.webp 800w, /images/HGI-9-1024.webp 1024w" sizes="(max-width: 720px) 92vw, (max-width: 1024px) 46vw, 400px" width="1024" height="768" loading="lazy" decoding="async" alt="Team Member" class="team-img">
              <h5>Krishna Mishra</h5>
              <p class="text-muted">Founder & CEO</p>
              <p>15+ years in travel industry, passionate about showcasing India's diversity</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team-card">
              <img src="/images/HGI-10-1024.webp" srcset="/images/HGI-10-400.webp 400w, /images/HGI-10-800.webp 800w, /images/HGI-10-1024.webp 1024w" sizes="(max-width: 720px) 92vw, (max-width: 1024px) 46vw, 400px" width="1024" height="768" loading="lazy" decoding="async" alt="Team Member" class="team-img">
              <h5>Priya Sharma</h5>
              <p class="text-muted">Operations Head</p>
              <p>Expert in logistics and ensuring smooth travel experiences</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team-card">
              <img src="/images/HGI-11-1024.webp" srcset="/images/HGI-11-400.webp 400w, /images/HGI-11-800.webp 800w, /images/HGI-11-1024.webp 1024w" sizes="(max-width: 720px) 92vw, (max-width: 1024px) 46vw, 400px" width="1024" height="768" loading="lazy" decoding="async" alt="Team Member" class="team-img">
              <h5>Amit Singh</h5>
              <p class="text-muted">Customer Experience</p>
              <p>Dedicated to making every journey memorable for our travelers</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5">
      <div class="container">
        <div class="text-center">
          <h2 class="display-4 fw-bold mb-4">Ready to Start Your Journey?</h2>
          <p class="lead mb-4">Join thousands of happy travelers who have explored India with us</p>
          <div class="d-flex gap-3 justify-content-center">
            <a class="btn btn-warning btn-lg px-5" routerLink="/packages">Explore Tours</a>
            <a class="btn btn-outline-primary btn-lg px-5" routerLink="/contact">Contact Us</a>
          </div>
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
    /* travellers watching sunrise over the Satpura hills — the previous hero was a generic blue/purple abstract stock
       graphic, off-palette and unrelated to travel. */
    :host {
      --hero-img: url('/images/HGI-3-400.webp');
    }

    @media (min-width: 720px) {
      :host { --hero-img: url('/images/HGI-3-800.webp'); }
    }

    @media (min-width: 1200px) {
      :host { --hero-img: url('/images/HGI-3-1280.webp'); }
    }
    
    .stat-box {
      text-align: center;
      padding: 20px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      min-width: 120px;
    }
    
    .mission-card {
      padding: 30px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.1);
      height: 100%;
      text-align: center;
    }
    
    .card-icon {
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
    
    .value-card {
      text-align: center;
      padding: 30px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.1);
      height: 100%;
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
      }
    }
    
    .value-icon {
      width: 50px;
      height: 50px;
      margin: 0 auto 20px;
      background: linear-gradient(135deg, var(--brand-600), var(--brand-800));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
    }
    
    .team-card {
      text-align: center;
      padding: 30px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.1);
      height: 100%;
    }
    
    .team-img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 20px;
    }
  `
})
export class About {
  constructor(private router: Router) {}

  navigateToDestination(destination: string): void {
    this.router.navigate([destination]);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
