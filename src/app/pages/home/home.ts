import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section with Image Background -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="container">
          <div class="row align-items-center min-vh-100">
            <div class="col-lg-10 mx-auto text-center">
              <div class="hero-text">
                <div class="hero-icons mb-4">
                  <div class="hero-icon-grid">
                    <div class="hero-icon-item" data-aos="fade-up" data-aos-delay="100">
                      <div class="icon-circle">
                        <i class="fas fa-map-marked-alt"></i>
                      </div>
                      <span>Explore</span>
                    </div>
                    <div class="hero-icon-item" data-aos="fade-up" data-aos-delay="200">
                
                    <div class="icon-circle">
                        <i class="fas fa-hiking"></i>
                      </div>
                      <span>Adventure</span>
                    </div>
                    <div class="hero-icon-item" data-aos="fade-up" data-aos-delay="300">
                      <div class="icon-circle">
                        <i class="fas fa-camera"></i>
                      </div>
                      <span>Photography</span>
                    </div>
                    <div class="hero-icon-item" data-aos="fade-up" data-aos-delay="400">
                      <div class="icon-circle">
                        <i class="fas fa-campground"></i>
                      </div>
                      <span>Camping</span>
                    </div>
                    <div class="hero-icon-item" data-aos="fade-up" data-aos-delay="500">
                      <div class="icon-circle">
                        <i class="fas fa-utensils"></i>
                      </div>
                      <span>Food</span>
                    </div>
                    <div class="hero-icon-item" data-aos="fade-up" data-aos-delay="600">
                      <div class="icon-circle">
                        <i class="fas fa-bed"></i>
                      </div>
                      <span>Hotels</span>
                    </div>
                  </div>
                </div>
                <h1 class="display-2 fw-bold mb-4 text-white">
                  Discover the <span class="text-warning">Incredible</span> India
                </h1>
                <p class="lead mb-5 text-white">
                  Embark on unforgettable journeys with Happy Ghumakkads - Your trusted travel companion 
                  for exploring diverse landscapes, ancient heritage, and vibrant cultures across India
                </p>
                <div class="d-flex gap-3 justify-content-center flex-wrap mb-5">
                  <button class="btn btn-warning btn-lg px-5 py-3" (click)="navigateToDestination('madhya-pradesh')">Explore Destinations</button>
                  <button class="btn btn-outline-light btn-lg px-5 py-3" (click)="navigateToContact()">Plan Your Trip</button>
                </div>
                <div class="hero-stats">
                  <div class="row g-4">
                    <div class="col-md-3 col-6">
                      <div class="stat-item">
                        <h3 class="text-warning">50+</h3>
                        <p class="text-white">Tour Packages</p>
                      </div>
                    </div>
                    <div class="col-md-3 col-6">
                      <div class="stat-item">
                        <h3 class="text-warning">10000+</h3>
                        <p class="text-white">Happy Travelers</p>
                      </div>
                    </div>
                    <div class="col-md-3 col-6">
                      <div class="stat-item">
                        <h3 class="text-warning">8+</h3>
                        <p class="text-white">Years Experience</p>
                      </div>
                    </div>
                    <div class="col-md-3 col-6">
                      <div class="stat-item">
                        <h3 class="text-warning">4.9/5</h3>
                        <p class="text-white">Customer Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Destinations -->
    <section class="featured-destinations py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-4 fw-bold mb-3">Popular Destinations</h2>
          <p class="lead text-muted">Explore our most sought-after travel experiences</p>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-md-6">
            <div class="destination-card" (click)="navigateToDestination('madhya-pradesh')" style="height: 450px !important;">
              <div class="destination-image">
                <img src="/images/HGI-image1.jpg" alt="Madhya Pradesh" class="destination-img">
                <div class="image-overlay">
                  <i class="fas fa-mountain"></i>
                </div>
              </div>
              <div class="destination-content">
                <h4 style="color: #2c3e50 !important; font-weight: 700 !important; height: 3.5rem !important; overflow: hidden;">Madhya Pradesh</h4>
                <p style="color: #5a6c7d !important; font-weight: 600 !important; height: 2.5rem !important; overflow: hidden;">The Heart of India</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="destination-card" (click)="navigateToDestination('north-india')" style="height: 450px !important;">
              <div class="destination-image">
                <img src="/images/133949262247186237.jpg" alt="North India" class="destination-img">
                <div class="image-overlay">
                  <i class="fas fa-gopuram"></i>
                </div>
              </div>
              <div class="destination-content">
                <h4 style="color: #2c3e50 !important; font-weight: 700 !important; height: 3.5rem !important; overflow: hidden;">North India</h4>
                <p style="color: #5a6c7d !important; font-weight: 600 !important; height: 2.5rem !important; overflow: hidden;">Cultural Heritage</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="destination-card" (click)="navigateToDestination('jammu-kashmir')" style="height: 450px !important;">
              <div class="destination-image">
                <img src="/images/HGI-image2.jpg" alt="Jammu & Kashmir" class="destination-img">
                <div class="image-overlay">
                  <i class="fas fa-snowflake"></i>
                </div>
              </div>
              <div class="destination-content">
                <h4 style="color: #2c3e50 !important; font-weight: 700 !important; height: 3.5rem !important; overflow: hidden;">Jammu & Kashmir</h4>
                <p style="color: #5a6c7d !important; font-weight: 600 !important; height: 2.5rem !important; overflow: hidden;">Paradise on Earth</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="destination-card" (click)="navigateToDestination('leh-ladakh')" style="height: 450px !important;">
              <div class="destination-image">
                <img src="/images/133949262268459566.jpg" alt="Leh-Ladakh" class="destination-img">
                <div class="image-overlay">
                  <i class="fas fa-hiking"></i>
                </div>
              </div>
              <div class="destination-content">
                <h4 style="color: #2c3e50 !important; font-weight: 700 !important; height: 3.5rem !important; overflow: hidden;">Leh-Ladakh</h4>
                <p style="color: #5a6c7d !important; font-weight: 600 !important; height: 2.5rem !important; overflow: hidden;">Land of High Passes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose-us py-5 position-relative overflow-hidden">
      <!-- Background Decoration -->
      <div class="position-absolute top-0 start-0 w-100 h-100">
        <div class="bg-pattern"></div>
      </div>
      
      <div class="container position-relative">
        <div class="text-center mb-5">
          <div class="badge bg-warning text-dark mb-3 px-3 py-2">WHY CHOOSE US</div>
          <h2 class="display-4 fw-bold mb-3">Why Choose Happy Ghumakkads</h2>
          <p class="lead text-muted">We make your travel dreams come true with exceptional service</p>
          <div class="divider mx-auto"></div>
        </div>
        
        <!-- Main Features Grid -->
        <div class="row g-4 mb-5">
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="feature-card-modern">
              <div class="feature-icon-wrapper">
                <i class="fas fa-award"></i>
              </div>
              <h4>Expert Guidance</h4>
              <p>15+ years of experience in creating unforgettable travel experiences across India</p>
              <div class="feature-hover-effect"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="feature-card-modern">
              <div class="feature-icon-wrapper">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h4>Safe & Secure</h4>
              <p>Your safety is our priority with verified partners and 24/7 support throughout your journey</p>
              <div class="feature-hover-effect"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="feature-card-modern">
              <div class="feature-icon-wrapper">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <h4>Best Prices</h4>
              <p>Competitive pricing with no hidden costs. Value for money guaranteed on all packages</p>
              <div class="feature-hover-effect"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div class="feature-card-modern">
              <div class="feature-icon-wrapper">
                <i class="fas fa-hotel"></i>
              </div>
              <h4>Quality Accommodation</h4>
              <p>Handpicked hotels and resorts ensuring comfort and authentic local experiences</p>
              <div class="feature-hover-effect"></div>
            </div>
          </div>
        </div>

        <!-- Additional Services -->
        <div class="text-center mb-4">
          <div class="badge bg-info text-white mb-3 px-3 py-2">EXTRA SERVICES</div>
          <h3 class="h3 mb-3">Our Additional Services</h3>
          <div class="divider-small mx-auto"></div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="service-card-modern">
              <div class="service-icon-modern">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div class="service-content-modern">
                <h5>Travel Insurance</h5>
                <p>Comprehensive travel insurance coverage for peace of mind during your journey</p>
                <ul class="service-list">
                  <li><i class="fas fa-check-circle"></i> Medical Coverage</li>
                  <li><i class="fas fa-check-circle"></i> Trip Cancellation</li>
                  <li><i class="fas fa-check-circle"></i> Baggage Protection</li>
                </ul>
              </div>
              <div class="service-hover-effect"></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="service-card-modern">
              <div class="service-icon-modern">
                <i class="fas fa-camera"></i>
              </div>
              <div class="service-content-modern">
                <h5>Photography Tours</h5>
                <p>Professional photographers to capture your best moments in stunning locations</p>
                <ul class="service-list">
                  <li><i class="fas fa-check-circle"></i> Professional Guide</li>
                  <li><i class="fas fa-check-circle"></i> HD Photos</li>
                  <li><i class="fas fa-check-circle"></i> Video Editing</li>
                </ul>
              </div>
              <div class="service-hover-effect"></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-card-modern">
              <div class="service-icon-modern">
                <i class="fas fa-utensils"></i>
              </div>
              <div class="service-content-modern">
                <h5>Culinary Experiences</h5>
                <p>Food tours and cooking classes to explore local cuisines and culinary traditions</p>
                <ul class="service-list">
                  <li><i class="fas fa-check-circle"></i> Local Chefs</li>
                  <li><i class="fas fa-check-circle"></i> Food Tasting</li>
                  <li><i class="fas fa-check-circle"></i> Cooking Classes</li>
                </ul>
              </div>
              <div class="service-hover-effect"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-4 fw-bold mb-3">What Our Travelers Say</h2>
          <p class="lead text-muted">Real experiences from happy travelers</p>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>"Amazing experience in Kashmir! The houseboat stay and shikara ride were unforgettable. Happy Ghumakkads made everything perfect."</p>
              </div>
              <div class="testimonial-author">
                <img src="images/wps1.jpg" alt="Rahul Sharma" class="testimonial-avatar">
                <div>
                  <h6>Rahul Sharma</h6>
                  <small>Mumbai, Maharashtra</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>"The Leh-Ladakh trip was a dream come true! Excellent planning, great guides, and breathtaking views. Highly recommended!"</p>
              </div>
              <div class="testimonial-author">
                <img src="images/wps.jpg" alt="Priya Patel" class="testimonial-avatar">
                <div>
                  <h6>Priya Patel</h6>
                  <small>Ahmedabad, Gujarat</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>"Kanha National Park safari was incredible! Saw tigers and the resort was amazing. Thank you Happy Ghumakkads!"</p>
              </div>
              <div class="testimonial-author">
                <img src="images/wps2.jpg" alt="Amit Kumar" class="testimonial-avatar">
                <div>
                  <h6>Amit Kumar</h6>
                  <small>Delhi, NCR</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-5">
      <div class="container">
        <div class="cta-content text-center">
          <h2 class="display-4 fw-bold mb-4 text-white">Ready for Your Next Adventure?</h2>
          <p class="lead mb-4 text-white">Let us help you plan the perfect trip to your dream destination</p>
          <div class="d-flex gap-3 justify-content-center">
            <a class="btn btn-warning btn-lg px-5" routerLink="/packages">Start Planning</a>
            <a class="btn btn-outline-light btn-lg px-5" routerLink="/contact">Download Brochure</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Beautiful Gallery Section -->
    <section class="gallery-section py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-4 fw-bold mb-3">Explore Our <span class="text-warning">Gallery</span></h2>
          <p class="lead text-muted">Journey through the breathtaking landscapes and cultural heritage of India</p>
        </div>
        
        <!-- Gallery Grid -->
        <div class="gallery-grid">
          <!-- Row 1 -->
          <div class="gallery-row">
            <div class="gallery-item" data-aos="fade-up">
              <img src="images/HGI-1.jpeg" alt="Beautiful Destination" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Scenic Beauty</h4>
                  <p>Discover breathtaking landscapes</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="100">
              <img src="images/HGI-2.jpg" alt="Cultural Heritage" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Heritage Sites</h4>
                  <p>Ancient architectural marvels</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="200">
              <img src="images/HGI-3.jpeg" alt="Mountain Views" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Mountain Paradise</h4>
                  <p>Majestic Himalayan peaks</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Row 2 -->
          <div class="gallery-row">
            <div class="gallery-item" data-aos="fade-up">
              <img src="images/HGI-4.jpg" alt="Desert Landscape" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Desert Safari</h4>
                  <p>Golden sand dunes</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="100">
              <img src="images/HGI-5.jpg" alt="Coastal Beauty" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Coastal Wonders</h4>
                  <p>Pristine beaches and shores</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="200">
              <img src="images/HGI-6.jpg" alt="Wildlife" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Wildlife Safari</h4>
                  <p>Exotic flora and fauna</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="300">
              <img src="images/HGI-7.jpg" alt="Temples" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Sacred Temples</h4>
                  <p>Spiritual architecture</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Row 3 -->
          <div class="gallery-row">
            <div class="gallery-item" data-aos="fade-up">
              <img src="images/HGI-8.jpg" alt="Backwaters" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Backwaters</h4>
                  <p>Serene waterways</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="100">
              <img src="images/HGI-9.jpg" alt="Fortresses" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Historic Forts</h4>
                  <p>Medieval architecture</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="200">
              <img src="images/HGI-10.jpg" alt="Gardens" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Lush Gardens</h4>
                  <p>Botanical paradises</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Row 4 -->
          <div class="gallery-row">
            <div class="gallery-item" data-aos="fade-up">
              <img src="images/HGI-11.jpg" alt="Villages" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Rural Life</h4>
                  <p>Traditional villages</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="100">
              <img src="images/HGI-12.jpeg" alt="Festivals" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Vibrant Festivals</h4>
                  <p>Cultural celebrations</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="200">
              <img src="images/HGI-13.jpg" alt="Markets" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Local Markets</h4>
                  <p>Bustling bazaars</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="300">
              <img src="images/HGI-14.jpg" alt="Rivers" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Sacred Rivers</h4>
                  <p>Holy waterways</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Row 5 -->
          <div class="gallery-row">
            <div class="gallery-item" data-aos="fade-up">
              <img src="images/HGI-15.jpg" alt="Hill Stations" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Hill Stations</h4>
                  <p>Cool mountain retreats</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="100">
              <img src="images/HGI-16.jpg" alt="Caves" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Ancient Caves</h4>
                  <p>Rock-cut architecture</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="200">
              <img src="images/HGI-17.jpg" alt="Lakes" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Pristine Lakes</h4>
                  <p>Crystal clear waters</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Row 6 -->
          <div class="gallery-row">
            <div class="gallery-item" data-aos="fade-up">
              <img src="images/HGI-18.jpg" alt="Waterfalls" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Majestic Waterfalls</h4>
                  <p>Nature's cascades</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="100">
              <img src="images/HGI-19.jpg" alt="Sunsets" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Spectacular Sunsets</h4>
                  <p>Golden hour magic</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="200">
              <img src="images/HGI-20.jpg" alt="Architecture" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Modern Architecture</h4>
                  <p>Contemporary designs</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="300">
              <img src="images/HGI-21.jpg" alt="Forests" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Dense Forests</h4>
                  <p>Green canopies</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Row 7 -->
          <div class="gallery-row">
            <div class="gallery-item" data-aos="fade-up">
              <img src="images/HGI-22.jpg" alt="Islands" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Tropical Islands</h4>
                  <p>Paradise destinations</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="100">
              <img src="images/HGI-23.jpg" alt="Monuments" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Historic Monuments</h4>
                  <p>Timeless landmarks</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="200">
              <img src="images/HGI-24.jpg" alt="Valleys" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Scenic Valleys</h4>
                  <p>Lush green landscapes</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Row 8 -->
          <div class="gallery-row">
            <div class="gallery-item" data-aos="fade-up">
              <img src="images/HGI-25.jpg" alt="Plateaus" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>High Plateaus</h4>
                  <p>Elevated landscapes</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="100">
              <img src="images/HGI-26.jpeg" alt="Bridges" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Ancient Bridges</h4>
                  <p>Engineering marvels</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="200">
              <img src="images/HGI-27.jpg" alt="Cityscapes" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Modern Cities</h4>
                  <p>Urban landscapes</p>
                </div>
              </div>
            </div>
            <div class="gallery-item" data-aos="fade-up" data-aos-delay="300">
              <img src="images/HGI-28.jpg" alt="Sunrise" class="gallery-img">
              <div class="gallery-overlay">
                <div class="gallery-content">
                  <h4>Dawn Views</h4>
                  <p>Beautiful sunrises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Gallery CTA -->
        <div class="text-center mt-5">
          <a class="btn btn-warning btn-lg px-5" routerLink="/packages">
            Explore All Destinations
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero-section {
      position: relative;
      height: 60vh;
      overflow: hidden;
    }
    
    .video-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      z-index: -2;
    }
    
    .video-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      z-index: -1;
    }
    
    .hero-icons {
      .hero-icon-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 20px;
        max-width: 700px;
        margin: 0 auto;
        
        .hero-icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          
          &:nth-child(1) { animation-delay: 0.1s; }
          &:nth-child(2) { animation-delay: 0.2s; }
          &:nth-child(3) { animation-delay: 0.3s; }
          &:nth-child(4) { animation-delay: 0.4s; }
          &:nth-child(5) { animation-delay: 0.5s; }
          &:nth-child(6) { animation-delay: 0.6s; }
          
          .icon-circle {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #ffc107 0%, #ff8c00 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
            transition: all 0.3s ease;
            cursor: pointer;
            
            i {
              color: white;
              font-size: 1.5rem;
              transition: transform 0.3s ease;
            }
          }
          
          span {
            color: white;
            font-size: 0.9rem;
            font-weight: 500;
            opacity: 0.9;
            transition: opacity 0.3s ease;
          }
          
          &:hover {
            .icon-circle {
              transform: translateY(-5px) scale(1.1);
              box-shadow: 0 15px 40px rgba(255, 193, 7, 0.5);
              
              i {
                transform: rotate(10deg) scale(1.1);
              }
            }
            
            span {
              opacity: 1;
            }
          }
        }
      }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .image-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      background: linear-gradient(135deg, #f8f9fa, #e9ecef);
      border-radius: 10px;
    }
    
    .avatar-placeholder {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ffc107, #ff8c00);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
    }
    
    .hero-stats {
      margin-top: 60px;
    }
    
    .stat-item {
      padding: 20px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .destination-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .destination-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }
    
    .destination-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }
    
    .destination-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .destination-card:hover .destination-image img {
      transform: scale(1.1);
    }
    
    .testimonial-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .destination-card:hover .image-overlay {
      opacity: 1;
    }
    
    .image-overlay i {
      font-size: 3rem;
      color: #ffc107;
    }
    
    .destination-content {
      padding: 20px;
    }
    
    .destination-info {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      font-size: 0.9rem;
      color: #666;
    }
    
    .feature-card {
      text-align: center;
      padding: 30px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }
    
    .feature-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 20px;
      background: linear-gradient(135deg, #ffc107, #ff8c00);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 2rem;
    }
    
    .testimonial-card {
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      height: 100%;
    }
    
    .stars {
      color: #ffc107;
      margin-bottom: 15px;
    }
    
    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #eee;
    }
    
    .testimonial-author img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .cta-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    // Why Choose Us Section Styles
    .why-choose-us {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      
      .bg-pattern {
        background-image: 
          radial-gradient(circle at 20% 80%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
        opacity: 0.6;
      }
      
      .badge {
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      
      .divider {
        width: 80px;
        height: 4px;
        background: linear-gradient(135deg, #ffc107, #ff8c00);
        border-radius: 2px;
        margin-top: 15px;
      }
      
      .divider-small {
        width: 60px;
        height: 3px;
        background: linear-gradient(135deg, #17a2b8, #138496);
        border-radius: 2px;
        margin-top: 10px;
      }
    }

    // Modern Feature Cards
    .feature-card-modern {
      background: white;
      border-radius: 20px;
      padding: 40px 30px;
      text-align: center;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(255, 193, 7, 0.1);
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(135deg, #ffc107, #ff8c00);
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }
      
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        border-color: rgba(255, 193, 7, 0.3);
        
        &::before {
          transform: scaleX(1);
        }
        
        .feature-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 15px 40px rgba(255, 193, 7, 0.4);
        }
        
        .feature-hover-effect {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      .feature-icon-wrapper {
        width: 90px;
        height: 90px;
        margin: 0 auto 25px;
        background: linear-gradient(135deg, #ffc107, #ff8c00);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        position: relative;
        z-index: 2;
        
        i {
          font-size: 2.2rem;
          color: white;
          transition: transform 0.3s ease;
        }
      }
      
      h4 {
        font-size: 1.3rem;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 15px;
        transition: color 0.3s ease;
      }
      
      p {
        color: #6c757d;
        line-height: 1.6;
        margin-bottom: 0;
        transition: color 0.3s ease;
      }
      
      &:hover {
        h4 {
          color: #ff8c00;
        }
        
        p {
          color: #495057;
        }
      }
      
      .feature-hover-effect {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(255, 193, 7, 0.05) 0%, transparent 70%);
        border-radius: 50%;
        opacity: 0;
        transition: all 0.4s ease;
        pointer-events: none;
      }
    }

    // Modern Service Cards
    .service-card-modern {
      background: white;
      border-radius: 20px;
      padding: 0;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      position: relative;
      border: 1px solid rgba(23, 162, 184, 0.1);
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(135deg, #17a2b8, #138496);
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        border-color: rgba(23, 162, 184, 0.3);
        
        &::before {
          transform: scaleX(1);
        }
        
        .service-icon-modern {
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(23, 162, 184, 0.4);
        }
        
        .service-hover-effect {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      .service-icon-modern {
        height: 120px;
        background: linear-gradient(135deg, #17a2b8, #138496);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        position: relative;
        
        i {
          font-size: 2.5rem;
          color: white;
          transition: transform 0.3s ease;
        }
        
        &::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
        }
      }
      
      .service-content-modern {
        padding: 40px 30px 30px;
        text-align: center;
        
        h5 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 15px;
          transition: color 0.3s ease;
        }
        
        p {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }
        
        .service-list {
          list-style: none;
          padding: 0;
          margin: 0;
          
          li {
            color: #495057;
            font-size: 0.9rem;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: color 0.3s ease;
            
            i {
              color: #17a2b8;
              font-size: 0.8rem;
            }
          }
        }
      }
      
      &:hover {
        .service-content-modern {
          h5 {
            color: #138496;
          }
          
          p {
            color: #495057;
          }
          
          .service-list li {
            color: #2c3e50;
          }
        }
      }
      
      .service-hover-effect {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, rgba(23, 162, 184, 0.03) 0%, transparent 70%);
        opacity: 0;
        transition: all 0.4s ease;
        pointer-events: none;
      }
    }
    
    @media (max-width: 768px) {
      .hero-icons .hero-icon-grid {
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        gap: 15px;
        
        .hero-icon-item {
          .icon-circle {
            width: 50px;
            height: 50px;
            
            i {
              font-size: 1.2rem;
            }
          }
          
          span {
            font-size: 0.8rem;
          }
        }
      }
      
      .display-2 {
        font-size: 2.5rem;
      }
      
      .hero-stats {
        margin-top: 30px;
      }
    }
    
    @media (max-width: 480px) {
      .hero-icons .hero-icon-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        
        .hero-icon-item {
          .icon-circle {
            width: 45px;
            height: 45px;
            
            i {
              font-size: 1rem;
            }
          }
          
          span {
            font-size: 0.75rem;
          }
        }
      }
    }

    // Gallery Styles
    .gallery-section {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      
      .gallery-grid {
        .gallery-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-bottom: 25px;
          
          .gallery-item {
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.4s ease;
            cursor: pointer;
            background: #fff;
            height: 250px; // Fixed height for uniformity
            
            .gallery-img {
              width: 100%;
              height: 100%;
              object-fit: cover; // Ensures all images cover the area properly
              transition: transform 0.4s ease;
            }
            
            .gallery-overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: linear-gradient(to bottom, 
                rgba(0,0,0,0.1) 0%, 
                rgba(0,0,0,0.4) 50%, 
                rgba(0,0,0,0.8) 100%);
              display: flex;
              align-items: flex-end;
              padding: 20px;
              opacity: 0;
              transition: opacity 0.3s ease;
              
              .gallery-content {
                color: white;
                transform: translateY(15px);
                transition: transform 0.3s ease;
                
                h4 {
                  font-size: 1.1rem;
                  font-weight: 700;
                  margin-bottom: 5px;
                }
                
                p {
                  font-size: 0.85rem;
                  margin: 0;
                  opacity: 0.9;
                }
              }
            }
            
            &:hover {
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
              
              .gallery-img {
                transform: scale(1.05);
              }
              
              .gallery-overlay {
                opacity: 1;
                
                .gallery-content {
                  transform: translateY(0);
                }
              }
            }
          }
        }
      }
      
      // Responsive Gallery
      @media (max-width: 768px) {
        .gallery-grid {
          .gallery-row {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin-bottom: 15px;
            
            .gallery-item {
              height: 200px;
            }
          }
        }
      }
      
      @media (max-width: 480px) {
        .gallery-grid {
          .gallery-row {
            grid-template-columns: 1fr;
            
            .gallery-item {
              height: 180px;
            }
          }
        }
      }
    }
  `
})
export class Home {
  readonly destinations = signal([
    {
      name: 'Madhya Pradesh',
      tagline: 'The Heart of India',
      icon: 'fa-mountain',
      places: 25,
      duration: '3-7 Days',
      image: 'assets/destinations/madhya-pradesh.jpg'
    },
    {
      name: 'North India',
      tagline: 'Cultural Heritage',
      icon: 'fa-gopuram',
      places: 30,
      duration: '5-10 Days',
      image: 'assets/destinations/north-india.jpg'
    },
    {
      name: 'Jammu & Kashmir',
      tagline: 'Paradise on Earth',
      icon: 'fa-snowflake',
      places: 20,
      duration: '4-8 Days',
      image: 'assets/destinations/jammu-kashmir.jpg'
    },
    {
      name: 'Leh-Ladakh',
      tagline: 'Land of High Passes',
      icon: 'fa-hiking',
      places: 15,
      duration: '5-7 Days',
      image: 'assets/destinations/ladakh.jpg'
    }
  ]);

  constructor(private router: Router) {}

  navigateToDestination(destination: string): void {
    console.log('Navigating to:', destination);
    this.router.navigate([destination]);
  }

  navigateToPackages(): void {
    console.log('Start Planning button clicked - Navigating to packages');
    this.router.navigate(['/packages']);
  }

  navigateToAdventurePhotography(): void {
    console.log('Navigating to adventure-photography');
    this.router.navigate(['/adventure-photography']);
  }

  navigateToCamping(): void {
    console.log('Navigating to camping');
    this.router.navigate(['/camping']);
  }

  navigateToFoodTours(): void {
    console.log('Navigating to food-tours');
    this.router.navigate(['/food-tours']);
  }

  navigateToSpiritualTours(): void {
    console.log('Navigating to spiritual-tours');
    this.router.navigate(['/spiritual-tours']);
  }

  navigateToContact(): void {
    console.log('Download Brochure button clicked - Navigating to contact');
    this.router.navigate(['/contact']);
  }
}
