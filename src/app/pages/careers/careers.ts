import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="careers-hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-2 fw-bold mb-4 text-white">Join Our Team</h1>
            <p class="lead mb-4 text-white">Build Your Career in Travel with Happy Ghumakkads</p>
            <p class="text-white mb-5">Be part of a passionate team dedicated to creating unforgettable travel experiences across India</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-4 fw-bold mb-3">Why Work With Happy Ghumakkads?</h2>
          <p class="lead text-muted">Join a team that values passion, growth, and excellence</p>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-md-6">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-rocket"></i>
              </div>
              <h4>Growth Opportunities</h4>
              <p>Learn and grow in the dynamic travel industry with continuous training and development</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-users"></i>
              </div>
              <h4>Amazing Team</h4>
              <p>Work with passionate travel enthusiasts who love what they do</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-globe-asia"></i>
              </div>
              <h4>Travel Perks</h4>
              <p>Enjoy discounted travel and explore incredible destinations</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-heart"></i>
              </div>
              <h4>Make a Difference</h4>
              <p>Help travelers create memories that last a lifetime</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-4 fw-bold mb-3">Current Openings</h2>
          <p class="lead text-muted">Find your dream job in the travel industry</p>
        </div>
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="job-card">
              <div class="job-header">
                <h3>Travel Consultant</h3>
                <span class="job-type full-time">Full Time</span>
              </div>
              <div class="job-details">
                <div class="job-info">
                  <span><i class="fas fa-map-marker-alt"></i> Satna (M.P.)</span>
                  <span><i class="fas fa-money-bill"></i> ₹4-6 LPA</span>
                </div>
                <p class="job-description">Help customers plan their perfect trips, provide expert travel advice, and create customized itineraries.</p>
                <div class="job-requirements">
                  <h5>Requirements:</h5>
                  <ul>
                    <li>2+ years in travel/hospitality industry</li>
                    <li>Excellent communication skills</li>
                    <li>Passion for travel and customer service</li>
                  </ul>
                </div>
                <a class="btn btn-warning w-100" routerLink="/contact">Apply Now</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="job-card">
              <div class="job-header">
                <h3>Marketing Executive</h3>
                <span class="job-type full-time">Full Time</span>
              </div>
              <div class="job-details">
                <div class="job-info">
                  <span><i class="fas fa-map-marker-alt"></i> Satna, (M.P)</span>
                  <span><i class="fas fa-money-bill"></i> ₹3-5 LPA</span>
                </div>
                <p class="job-description">Drive our marketing initiatives, manage social media, and promote our amazing travel packages.</p>
                <div class="job-requirements">
                  <h5>Requirements:</h5>
                  <ul>
                    <li>Experience in digital marketing</li>
                    <li>Strong social media skills</li>
                    <li>Creative thinking and content creation</li>
                  </ul>
                </div>
                <a class="btn btn-warning w-100" routerLink="/contact">Apply Now</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="job-card">
              <div class="job-header">
                <h3>Tour Coordinator</h3>
                <span class="job-type full-time">Full Time</span>
              </div>
              <div class="job-details">
                <div class="job-info">
                  <span><i class="fas fa-map-marker-alt"></i> Multiple Locations</span>
                  <span><i class="fas fa-money-bill"></i> ₹3-4 LPA</span>
                </div>
                <p class="job-description">Lead tour groups, coordinate logistics, and ensure amazing travel experiences for our customers.</p>
                <div class="job-requirements">
                  <h5>Requirements:</h5>
                  <ul>
                    <li>Experience in tour management</li>
                    <li>Strong organizational skills</li>
                    <li>Knowledge of Indian destinations</li>
                  </ul>
                </div>
                <a class="btn btn-warning w-100" routerLink="/contact">Apply Now</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="job-card">
              <div class="job-header">
                <h3>Customer Service Executive</h3>
                <span class="job-type full-time">Full Time</span>
              </div>
              <div class="job-details">
                <div class="job-info">
                  <span><i class="fas fa-map-marker-alt"></i> Satna (M.P.)</span>
                  <span><i class="fas fa-money-bill"></i> ₹2-3 LPA</span>
                </div>
                <p class="job-description">Handle customer inquiries, resolve issues, and ensure exceptional service quality.</p>
                <div class="job-requirements">
                  <h5>Requirements:</h5>
                  <ul>
                    <li>Customer service experience</li>
                    <li>Excellent problem-solving skills</li>
                    <li>Fluent in English and Hindi</li>
                  </ul>
                </div>
                <a class="btn btn-warning w-100" routerLink="/contact">Apply Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="display-5 fw-bold mb-4">Our Culture</h2>
            <p class="lead mb-4">At Happy Ghumakkads, we believe in creating a workplace where passion meets professionalism.</p>
            <p>We foster an environment of collaboration, innovation, and continuous learning. Our team members are not just employees; they're family. We celebrate diversity, encourage creativity, and believe in work-life balance.</p>
            <div class="culture-highlights mt-4">
              <div class="highlight-item">
                <i class="fas fa-check-circle text-success"></i>
                <span>Flexible Working Hours</span>
              </div>
              <div class="highlight-item">
                <i class="fas fa-check-circle text-success"></i>
                <span>Health Insurance</span>
              </div>
              <div class="highlight-item">
                <i class="fas fa-check-circle text-success"></i>
                <span>Annual Team Trips</span>
              </div>
              <div class="highlight-item">
                <i class="fas fa-check-circle text-success"></i>
                <span>Professional Development</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="images/HGI-12.jpeg" alt="Office Culture" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-4 fw-bold mb-3">Application Process</h2>
          <p class="lead text-muted">Simple steps to join our team</p>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-md-6">
            <div class="process-card">
              <div class="process-number">1</div>
              <h4>Submit Application</h4>
              <p>Send your resume and cover letter to info@happyghumakkads.com</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="process-card">
              <div class="process-number">2</div>
              <h4>Initial Screening</h4>
              <p>Our HR team reviews your application and contacts shortlisted candidates</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="process-card">
              <div class="process-number">3</div>
              <h4>Interviews</h4>
              <p>Multiple rounds to assess skills, experience, and cultural fit</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="process-card">
              <div class="process-number">4</div>
              <h4>Join the Team</h4>
              <p>Receive offer and onboard with our comprehensive training program</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="text-center">
          <h2 class="display-4 fw-bold mb-4">Ready to Start Your Journey?</h2>
          <p class="lead mb-4">Send us your resume and let's explore opportunities together</p>
          <div class="d-flex gap-3 justify-content-center">
            <a class="btn btn-warning btn-lg px-5" routerLink="/careers">View All Positions</a>
            <a class="btn btn-outline-primary btn-lg px-5" routerLink="/contact">Contact HR</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .careers-hero {
      position: relative;
      height: 60vh;
      min-height: 400px;
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.4)), url('/images/career.avif') center/cover;
      display: flex;
      align-items: center;
    }
    
    .benefit-card {
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
    
    .benefit-icon {
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
    
    .job-card {
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.1);
      padding: 30px;
      height: 100%;
    }
    
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      
      h3 {
        margin: 0;
        color: #333;
      }
    }
    
    .job-type {
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      
      &.full-time {
        background: #28a745;
        color: white;
      }
    }
    
    .job-info {
      display: flex;
      gap: 20px;
      margin-bottom: 15px;
      color: #666;
      
      span {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
    
    .job-requirements {
      margin: 20px 0;
      
      h5 {
        margin-bottom: 10px;
        color: #333;
      }
      
      ul {
        list-style: none;
        padding: 0;
        
        li {
          padding: 5px 0;
          position: relative;
          padding-left: 20px;
          
          &::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #ffc107;
          }
        }
      }
    }
    
    .process-card {
      text-align: center;
      padding: 30px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.1);
      height: 100%;
    }
    
    .process-number {
      width: 50px;
      height: 50px;
      margin: 0 auto 20px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .culture-highlights {
      .highlight-item {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;
        
        i {
          font-size: 1.2rem;
        }
      }
    }
  `
})
export class Careers {
  constructor(private router: Router) {}

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
