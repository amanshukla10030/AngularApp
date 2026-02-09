import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  template: `
    <!-- About Hero -->
    <section class="about-hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-2 fw-bold mb-4 text-white">About Happy Ghumakkads</h1>
            <p class="lead mb-4 text-white">Your Trusted Travel Partner for Unforgettable Indian Journeys</p>
            <p class="text-white mb-5">With over 15 years of experience, we've been crafting extraordinary travel experiences across India, bringing dreams to life one journey at a time.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="display-5 fw-bold mb-4">Our Story</h2>
            <p class="lead mb-4">Founded in 2008, Happy Ghumakkads began with a simple mission: to showcase the incredible diversity and beauty of India to travelers from around the world.</p>
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
            <img src="images/os.jpeg" alt="Our Team" class="img-fluid rounded shadow">
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
                <i class="fas fa-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <p>To provide exceptional travel experiences that showcase India's rich cultural heritage, natural beauty, and diverse landscapes while ensuring safety, comfort, and unforgettable memories for every traveler.</p>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="mission-card">
              <div class="card-icon">
                <i class="fas fa-eye"></i>
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
                <i class="fas fa-trophy text-warning me-3"></i>
                <span>Best Travel Agency in Satna</span>
              </div>
              <div class="d-flex align-items-center mb-3">
                <i class="fas fa-medal text-warning me-3"></i>
                <span>Excellence in Customer Service</span>
              </div>
              <div class="d-flex align-items-center">
                <i class="fas fa-star text-warning me-3"></i>
                <span>Recognized by MP of Satna</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="images/awards.jpeg" alt="Awards" class="img-fluid rounded shadow">
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
                <i class="fas fa-heart"></i>
              </div>
              <h4>Passion</h4>
              <p>We love what we do and are passionate about creating amazing travel experiences</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h4>Trust</h4>
              <p>Building lasting relationships through honesty, transparency, and reliability</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-star"></i>
              </div>
              <h4>Excellence</h4>
              <p>Striving for the highest standards in every aspect of our service</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-globe"></i>
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
              <img src="images/HGI-9.jpg" alt="Team Member" class="team-img">
              <h5>Rajesh Kumar</h5>
              <p class="text-muted">Founder & CEO</p>
              <p>15+ years in travel industry, passionate about showcasing India's diversity</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team-card">
              <img src="images/HGI-10.jpg" alt="Team Member" class="team-img">
              <h5>Priya Sharma</h5>
              <p class="text-muted">Operations Head</p>
              <p>Expert in logistics and ensuring smooth travel experiences</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team-card">
              <img src="images/HGI-11.jpg" alt="Team Member" class="team-img">
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
  `,
  styles: `
    .about-hero {
      position: relative;
      height: 60vh;
      min-height: 400px;
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.4)), url('/images/about us.avif') center/cover;
      display: flex;
      align-items: center;
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
      background: linear-gradient(135deg, #ffc107, #ff8c00);
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
      background: linear-gradient(135deg, #667eea, #764ba2);
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
