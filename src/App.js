import './App.css';
// import PeakTravelComponent from './PeakTravel/PeakTravelComponent';

function App() {
  const scriptContent = `        
  function toggleVideo() {
      var video = document.getElementById("welcomeVideo");
      if (video.paused) {
          video.play();
      } else {
          video.pause();
      }
  }
function filterOffersByBudget(selectedBudget) {
          // Example offers data
          const offers = [
              { name: 'Weekend Special', discount: '10%', budget: 'premium' },
              { name: 'New User Discount', discount: '$5 off', budget: 'standard' },
              // Add more offers as needed
          ];

          // Filter offers based on the selected budget
          const filteredOffers = selectedBudget === 'all'
              ? offers
              : offers.filter(offer => offer.budget === selectedBudget);

          // Update carousel items dynamically
          const carouselInner = document.querySelector('#offers-carousel .carousel-inner');
          carouselInner.innerHTML = ''; // Clear existing items

          filteredOffers.forEach((offerDetails, index) => {
              const offer = offerDetails;
              const carouselItem = document.createElement('div');
              carouselItem.classList.add('carousel-item');

              if (index === 0) {
                  carouselItem.classList.add('active');
              }

              const row = document.createElement('div');
              row.classList.add('row');

              const leftColumn = document.createElement('div');
              leftColumn.classList.add('col-md-6');

              const rightColumn = document.createElement('div');
              rightColumn.classList.add('col-md-6');

              const offerTitle = document.createElement('h3');
              offerTitle.textContent = offer.name;

              const offerDetails = document.createElement('p');
              offerDetails.textContent = 'Offer: ' + offer.discount;
        
              const budgetDetails = document.createElement('h4');
              budgetDetails.textContent = 'Budget: ' + capitalizeFirstLetter(offer.budget);
             
              leftColumn.appendChild(offerTitle);
              leftColumn.appendChild(offerDetails);
              rightColumn.appendChild(budgetDetails);

              row.appendChild(leftColumn);
              row.appendChild(rightColumn);

              carouselItem.appendChild(row);
              carouselInner.appendChild(carouselItem);
          });
      }
  function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
      }
function submitBooking() {
          // Collect form data
          var name = $("#name").val();
          var phone = $("#phone").val();
          var pickupPoint = $("#pickup-point").val();
          var budget = $("#budget").val();
          var tripFrom = $("#trip-from").val();
          var tripTo = $("#trip-to").val();

          // Send SMS using Twilio (placeholder, actual implementation requires server-side code)
          $.ajax({
              type: "POST",
              url: "YOUR_SERVER_ENDPOINT_FOR_TWILIO_INTEGRATION",
              data: {
                  name: name,
                  phone: phone,
                  pickupPoint: pickupPoint,
                  budget: budget,
                  tripFrom: tripFrom,
                  tripTo: tripTo
              },
              success: function(response) {
                  alert("Booking successful! You will receive an SMS shortly.");
                  // Reset form
                  $("#booking-form")[0].reset();
              },
              error: function(error) {
                  console.error("Error sending SMS:", error);
                  alert("Error sending SMS. Please try again later.");
              }
          });
      }
  
`;


return (
  <div>
  <>
  <script dangerouslySetInnerHTML={{ __html: scriptContent }} />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" /><script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script><script src="https://kit.fontawesome.com/your-font-awesome-kit.js" crossorigin="anonymous"></script>
  
  <nav id="navbar" class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#"><i class="fas fa-taxi"></i></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#about-us">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#follow-us">Follow Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#gallery">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#book-now">Book Now</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#offers">Offers</a>
                    </li>
                </ul>
            </div>
        </nav>
        
        <section id="welcome" class="welcome decorative-background">

            <div class="video-carousel">

                <div class="video-container" onclick="toggleVideo('welcomeVideo1')">
                    <video autoplay muted loop id="welcomeVideo1" class="welcomeVideoBody">
                        <source src={require('./PeakTravel/Videos/drone_valley_view.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="video-container" onclick="toggleVideo('welcomeVideo2')">
                    <video autoplay muted loop id="welcomeVideo2" class="welcomeVideoBody">
                        <source src={require('./PeakTravel/Videos/highway_view.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="video-container" onclick="toggleVideo('welcomeVideo3')">
                    <video autoplay muted loop id="welcomeVideo3" class="welcomeVideoBody">
                        <source src={require('./PeakTravel/Videos/mix_video.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="video-container" onclick="toggleVideo('welcomeVideo4')">
                    <video autoplay muted loop id="welcomeVideo4" class="welcomeVideoBody">
                        <source src={require('./PeakTravel/Videos/mix_video_v2.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div class="container">
                <div class="welcome-box">
                    <h1>Welcome to Peak Traveller Tour & Taxi Service</h1>
                    <p>Discover the city with Peak Traveller, your trusted partner for comfortable and reliable transportation. We offer a seamless travel experience with a diverse fleet of vehicles, professional drivers, and a commitment to customer satisfaction.</p>
                    <p>Experience the difference with Peak Traveller:</p>
                    <ul>
                        <li>Comfortable and Safe Rides</li>
                        <li>Professional and Experienced Drivers</li>
                        <li>Convenient Booking Options</li>
                        <li>24/7 Customer Support</li>
                    </ul>
                </div>
                <a href="#book-now" class="cta-button">Book Now</a>
            </div>
        </section>
        
        <section id="gallery" class="gallery">
            <div class="container">
                <h2>Gallery</h2>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={require('./PeakTravel/Media/p1.jpg')} alt="Cityscape" />
                            <div class="carousel-caption">
                                <h3>Cityscape</h3>
                                <p>Explore the city with our reliable taxi service.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={require('./PeakTravel/Media/p2.jpg')} alt="Night Lights" />
                            <div class="carousel-caption">
                                <h3>Night Lights</h3>
                                <p>Experience the city lights in the comfort of our taxis.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={require('./PeakTravel/Media/p3.jpg')} alt="Nature Drive" />
                            <div class="carousel-caption">
                                <h3>Nature Drive</h3>
                                <p>Enjoy a scenic drive surrounded by nature.</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
        
        <section id="special-offers">
            <div class="container">
                <h2>Special Offers and Travel Packages</h2>

                <div class="form-group">
                    <label for="budget-selection">Select Budget:</label>
                    <select class="form-control" id="budget-selection" onchange="filterOffersByBudget(this.value)">
                        <option value="all">All Budgets</option>
                        <option value="standard">Standard</option>
                        <option value="premium">Premium</option>
                        <option value="luxury">Luxury</option>
                    </select>
                </div>

                <div id="offers-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">

                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-md-6">
                                    <h3>Weekend Special</h3>
                                    <p>10% off on all rides</p>
                                </div>
                                <div class="col-md-6">
                                    <h4>Budget: Premium</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#offers-carousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#offers-carousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
        
        <section id="about-us">
            <div class="container">
                <h2>About Peak Traveller</h2>

                <ul class="nav nav-tabs" id="aboutUsTabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="car-details-tab" data-toggle="tab" href="#car-details" role="tab" aria-controls="car-details" aria-selected="true">Car Details</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="driver-details-tab" data-toggle="tab" href="#driver-details" role="tab" aria-controls="driver-details" aria-selected="false">Driver Details</a>
                    </li>
                </ul>

                <div class="tab-content" id="aboutUsTabsContent">

                    <div class="tab-pane fade show active" id="car-details" role="tabpanel" aria-labelledby="car-details-tab">
                        <div class="row">
                            <div class="col-md-6">
                                <div id="carPhotosCarousel" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={require('./PeakTravel/Media/swift.jpg')} class="d-block w-100" alt="Swift" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={require('./PeakTravel/Media/vitara.jpg')} class="d-block w-100" alt="Vitara" />
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carPhotosCarousel" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carPhotosCarousel" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="car-details">
                                    <h4>Car Details</h4>
                                    <p>Model: Swift</p>
                                    <p>Car Type: Taxi</p>
                                    <p>Sitting Capacity: 4</p>
                                    <p>Insurance/Pollution Certificate: Yes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="driver-details" role="tabpanel" aria-labelledby="driver-details-tab">
                        <div class="row">
                            <div class="col-md-6">
                              {/* src={require('./PeakTravel/Media/ */}
                                <img src="driver1.jpg" class="small-image" alt="Driver Photo" />
                            </div>

                            <div class="col-md-6">
                                <div class="driver-details">
                                    <h4>Driver Details</h4>
                                    <p>Name: Dinesh</p>
                                    <p>Experience: 10 years</p>
                                    <p>Contact: <i class="fab fa-whatsapp whatsapp-icon"></i> <a href="https://wa.me/91987654321" target="_blank">+91-987654321</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p>Experience the difference with Peak Traveller. Our diverse fleet, professional drivers, and dedication to customer satisfaction set us apart. Book a ride with us and enjoy a journey that combines comfort, safety, and reliability.</p>
            </div>
        </section>
        
        <section id="book-now">
            <div class="container">
                <h2>Book Now</h2>
                <p>Book your ride with Peak Traveller and experience convenient and reliable transportation.</p>
                <form id="booking-form">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" id="name" name="name" required />
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number:</label>
                        <input type="tel" class="form-control" id="phone" name="phone" required />
                    </div>
                    <div class="form-group">
                        <label for="pickup-point">Pickup Point:</label>
                        <select class="form-control" id="pickup-point" name="pickup-point" required>
                            <option value="airport">Airport</option>
                            <option value="hotel">Hotel</option>
                            <option value="station">Station</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="budget">Budget:</label>
                        <select class="form-control" id="budget" name="budget" required>
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="trip-from">Trip From:</label>
                        <input type="text" class="form-control" id="trip-from" name="trip-from" required />
                    </div>
                    <div class="form-group">
                        <label for="trip-to">Trip To:</label>
                        <input type="text" class="form-control" id="trip-to" name="trip-to" required />
                    </div>
                    <button type="button" class="btn btn-primary" onclick="submitBooking()">Submit</button>
                </form>
            </div>
        </section>
        
        <section id="followUS">
            <div class="container">
                <h2>Connect with Peak Traveller</h2>
                <div class="follow-us-icons">
                    <a href="https://www.facebook.com/peaktraveller" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://twitter.com/peaktraveller" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/peaktraveller" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.snapchat.com/add/yourusername" target="_blank"><i class="fab fa-snapchat"></i></a>
                    <a href="https://www.reddit.com/user/yourusername" target="_blank"><i class="fab fa-reddit"></i></a>
                    <a href="https://wa.me/yourphonenumber" target="_blank"><i class="fab fa-whatsapp"></i></a>
                </div>
                <div class="follow-us-description">
                    <p>Stay in the loop with Peak Traveller! Follow us on Facebook, Twitter, Instagram, Snapchat, and Reddit for the latest updates, exclusive promotions, and behind-the-scenes content. Have a question or need assistance? Connect with us on WhatsApp for real-time support. Your journey with Peak Traveller begins here!</p>
                </div>
            </div>
        </section>
        
        </>
  </div>
  );
}

export default App;
