export default function Home(){
    return(
        <>
        <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Facial Recognition Attendance System</title>
  {/* Bootstrap CSS */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  {/* Custom CSS */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        /* Custom Styles */\n        \n        body {\n            font-family: 'Poppins', sans-serif;\n        }\n        \n        .navbar-brand {\n            font-size: 24px;\n            font-weight: 600;\n        }\n        \n        .navbar-nav .nav-link {\n            font-size: 16px;\n            margin: 0 10px;\n        }\n        \n        .navbar-nav .btn-primary {\n            margin-left: 10px;\n        }\n        \n        .carousel-caption {\n            background-color: rgba(0, 0, 0, 0.5);\n            /* Semi-transparent background */\n            padding: 20px;\n            border-radius: 10px;\n            bottom: 20%;\n        }\n        \n        .carousel-container {\n            max-height: 800px;\n            margin: auto;\n        }\n        \n        .carousel-caption h2 {\n            font-size: 36px;\n            margin-bottom: 10px;\n        }\n        \n        .carousel-caption p {\n            font-size: 18px;\n        }\n        \n        .features,\n        #how-it-works,\n        .pricing {\n            padding: 80px 0;\n            text-align: center;\n        }\n        \n        .features h2,\n        .how-it-works h2,\n        .pricing h2 {\n            font-size: 36px;\n            margin-bottom: 40px;\n        }\n        \n        .feature-card,\n        .step-card,\n        .price-card {\n            background-color: #fff;\n            padding: 30px;\n            border-radius: 10px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            margin-bottom: 20px;\n            text-align: center;\n            transition: transform 0.3s ease, box-shadow 0.3s ease;\n        }\n        \n        .feature-card:hover {\n            transform: scale(1.1);\n            /* Scale up the card */\n            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n            /* Add a stronger shadow */\n        }\n        \n        .feature-card img,\n        .step-card img {\n            width: 50px;\n            margin-bottom: 20px;\n        }\n        \n        .price-card h3 {\n            font-size: 24px;\n            margin-bottom: 20px;\n        }\n        \n        .price-card p {\n            font-size: 20px;\n            font-weight: 600;\n            color: #007BFF;\n        }\n        \n        .price-card ul {\n            list-style: none;\n            padding: 0;\n            margin: 20px 0;\n        }\n        \n        .price-card ul li {\n            margin-bottom: 10px;\n        }\n        \n        footer {\n            background-color: #333;\n            color: #fff;\n            padding: 20px 0;\n            text-align: center;\n        }\n        \n        footer a {\n            color: #fff;\n            text-decoration: none;\n            margin: 0 10px;\n        }\n        /* How It Works Section */\n        \n        .how-it-works {\n            padding: 80px 0;\n            background-color: #bad2d3;\n            /* Light background for contrast */\n            text-align: center;\n        }\n        \n        .how-it-works h2 {\n            font-size: 36px;\n            margin-bottom: 40px;\n            color: #292626;\n        }\n        \n        .step-card {\n            background-color: #fff;\n            padding: 30px;\n            border-radius: 10px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            margin-bottom: 20px;\n            text-align: center;\n            transition: transform 0.3s ease, box-shadow 0.3s ease;\n        }\n        \n        .step-card:hover {\n            transform: scale(1.1);\n            /* Scale up the card */\n            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n            /* Add a stronger shadow */\n        }\n        \n        .step-card i {\n            color: #007BFF;\n            /* Icon color */\n            margin-bottom: 20px;\n            transition: color 0.3s ease;\n        }\n        \n        .step-card:hover i {\n            color: #0056b3;\n            /* Change icon color on hover */\n        }\n        \n        .step-card h3 {\n            font-size: 24px;\n            margin-bottom: 15px;\n            color: #333;\n            transition: color 0.3s ease;\n        }\n        \n        .step-card:hover h3 {\n            color: #007BFF;\n            /* Change heading color on hover */\n        }\n        \n        .step-card p {\n            font-size: 16px;\n            color: #666;\n            transition: color 0.3s ease;\n        }\n        \n        .step-card:hover p {\n            color: #333;\n            /* Change text color on hover */\n        }\n    "
    }}
  />
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="index.html">
        <img
          src="https://t4.ftcdn.net/jpg/10/69/75/35/240_F_1069753576_nSzuLk7KL2y3wSR8fm08jcCovxOf6mkJ.jpg"
          height="100px"
          width="100px"
        />
        FaceAttend
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#features">
              <i className="fas fa-trophy fa-2x" />
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#how-it-works">
              <i className="fas fa-cog fa-2x" />
              How It Works?
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">
              <i
                className="fas fa-user-plus fa-2x"
                style={{ height: "auto", width: "auto" }}
              />
              Register
            </a>
          </li>
          {/**/}{" "}
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              <i className="fas fa-phone-alt fa-2x" />
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/attendance">
              <i className="fa fa-list fa-2x" />
              Check Attendance
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="python/run">
              <i className="fas fa-smile fa-2x" />
              Give Attandence
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Carousel */}
  <div
    id="carouselExampleCaptions"
    className="carousel slide carousel-container"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://empmonitor.com/blog/wp-content/uploads/2024/11/What-Is-a-Facial-Recognition-Attendance-System-1024x576.webp"
          className="d-block w-100"
          alt="Image 1"
        />
        <div className="carousel-caption">
          <h2>Effortless Attendance Tracking</h2>
          <p>
            Say goodbye to manual attendance with our facial recognition system.
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/free-photo/facial-recognition-software_52683-104208.jpg"
          className="d-block w-100"
          alt="Image 2"
        />
        <div className="carousel-caption">
          <h2>Real-Time Data</h2>
          <p>Get instant updates on attendance with our advanced dashboard.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230702/pngtree-revolutionary-technology-advanced-facial-recognition-system-with-cutting-edge-3d-scanning-image_3726614.jpg"
          className="d-block w-100"
          alt="Image 3"
        />
        <div className="carousel-caption">
          <h2>Secure and Reliable</h2>
          <p>Your data is safe with our encrypted storage system.</p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Features Section */}
  <section id="features" className="features">
    <div className="container">
      <h2>Why Choose Our System?</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="feature-card">
            <i className="fas fa-clock fa-3x" />
            <h3>Real-Time Tracking</h3>
            <p>record attendance with facial scans.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-card">
            <i className="fas fa-bullseye fa-3x" />
            <h3>High Accuracy</h3>
            <p>Advanced AI ensures 99.9% accuracy.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-card">
            <i className="fas fa-hand-paper fa-3x" />
            <h3>Contactless Solution</h3>
            <p>Hygienic and safe for all environments.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* How It Works Section */}
  <section id="how-it-works" className="how-it-works">
    <div className="container">
      <h2>How It Works</h2>
      <div className="row">
        {/* Step 1: Setup */}
        <div className="col-md-4">
          <div className="step-card">
            <i className="fas fa-upload fa-3x" />
            <h3>1. Setup</h3>
            <p>Upload your photos.</p>
          </div>
        </div>
        {/* Step 2: Scan */}
        <div className="col-md-4">
          <div className="step-card">
            <i className="fas fa-camera fa-3x" />
            <h3>2. Scan</h3>
            <p>Scan your face.</p>
          </div>
        </div>
        {/* Step 3: Track */}
        <div className="col-md-4">
          <div className="step-card">
            <i className="fas fa-chart-line fa-3x" />
            <h3>3. Track</h3>
            <p>Track real-time attendance.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer>
    <div className="container">
      <p>© 2023 FaceAttend. All rights reserved.</p>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Contact Us</a>
    </div>
  </footer>
  {/* Bootstrap JS and Dependencies */}
</>


)

  
}