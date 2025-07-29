import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Navbar, 
  Nav, 
  Button, 
  Row, 
  Col, 
  Card, 
  Form, 
  Badge,
  Alert,
  Spinner
} from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faRobot, 
  faUsers, 
  faChartLine, 
  faClock, 
  faGraduationCap, 
  faShieldAlt,
  faPlay,
  faRocket,
  faChevronUp,
  faTimes,
  faCheckCircle,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import { 
  faTwitter, 
  faLinkedin, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out-cubic'
    });

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Scroll event listener
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Particles configuration
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const particlesConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#667eea",
      },
      links: {
        color: "#667eea",
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.1,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: { 
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Stats counter animation
  const [statsRef, statsInView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const email = e.target.email.value;
    
    // Simulate API call
    setTimeout(() => {
      setAlertMessage('Thanks for signing up! Check your email for next steps.');
      setAlertVariant('success');
      setShowAlert(true);
      setIsSubmitting(false);
      e.target.reset();
      
      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const features = [
    {
      icon: faRobot,
      title: 'AI-Powered Matching',
      description: 'Our advanced algorithm analyzes your skills, experience, and preferences to find perfect job matches.',
      delay: 100,
      color: '#667eea'
    },
    {
      icon: faUsers,
      title: 'Direct Company Access',
      description: 'Connect directly with hiring managers at top tech companies without middlemen or recruiters.',
      delay: 200,
      color: '#764ba2'
    },
    {
      icon: faChartLine,
      title: 'Skill Assessment',
      description: 'Validate your technical skills with our comprehensive coding challenges and get verified badges.',
      delay: 300,
      color: '#fbbf24'
    },
    {
      icon: faClock,
      title: 'Fast Application Process',
      description: 'Apply to multiple positions with one-click using your optimized profile and portfolio.',
      delay: 400,
      color: '#10b981'
    },
    {
      icon: faGraduationCap,
      title: 'Career Coaching',
      description: 'Get personalized guidance from industry experts to improve your interview and negotiation skills.',
      delay: 500,
      color: '#ef4444'
    },
    {
      icon: faShieldAlt,
      title: 'Privacy First',
      description: 'Your current employer will never know you\'re looking. Your job search remains completely confidential.',
      delay: 600,
      color: '#8b5cf6'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Create Your Profile',
      description: 'Build a comprehensive profile showcasing your skills, experience, and project portfolio. Our AI helps optimize it for maximum visibility.',
      color: '#667eea'
    },
    {
      number: 2,
      title: 'Get Matched',
      description: 'Receive personalized job recommendations based on your profile. Companies can also discover and reach out to you directly.',
      color: '#764ba2'
    },
    {
      number: 3,
      title: 'Land Your Job',
      description: 'Interview with confidence using our prep resources and negotiate the best offer with our salary insights and expert guidance.',
      color: '#fbbf24'
    }
  ];

  const testimonials = [
    {
      content: 'TechCareers helped me land a senior role at Netflix in just 2 weeks. The AI matching was spot-on and the interview prep was invaluable.',
      author: 'Sarah Chen',
      position: 'Senior Software Engineer at Netflix',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      delay: 0
    },
    {
      content: 'I went from a junior developer to a tech lead at Spotify. The career coaching and skill assessments made all the difference.',
      author: 'Marcus Johnson',
      position: 'Tech Lead at Spotify',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      delay: 200
    },
    {
      content: 'The platform connected me directly with the CTO of a Y Combinator startup. No recruiters, no hassle, just results.',
      author: 'Emily Rodriguez',
      position: 'Lead Frontend Developer at TechFlow',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      delay: 400
    }
  ];

  if (isLoading) {
    return (
      <div className="loading-screen d-flex justify-content-center align-items-center">
        <div className="text-center">
          <Spinner animation="border" variant="primary" className="mb-3" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-primary">Loading TechCareers...</h4>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="App"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="particles-bg"
      />

      {/* Navigation */}
      <Navbar expand="lg" className="navbar-custom fixed-top" variant="light">
        <Container>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar.Brand href="#home" className="brand-logo">
              <FontAwesomeIcon icon={faCode} className="me-2" />
              TechCareers
            </Navbar.Brand>
          </motion.div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#how-it-works">How It Works</Nav.Link>
              <Nav.Link href="#testimonials">Success Stories</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" className="ms-2">Get Started</Button>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="/api/placeholder/1920/1080"
        bgImageAlt="TechCareers Hero"
        strength={-200}
      >
        <section className="hero-section">
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={6} className="hero-content">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="hero-title mb-4">
                    Land Your <span className="text-gradient">Dream Tech Job</span> Faster Than Ever
                  </h1>
                  <motion.p 
                    className="hero-subtitle mb-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Connect with top tech companies, get personalized job matches, and accelerate your career with our AI-powered platform trusted by 50,000+ developers.
                  </motion.p>
                  <motion.div 
                    className="hero-buttons mb-5"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="d-inline-block me-3"
                    >
                      <Button size="lg" className="btn-gradient">
                        <FontAwesomeIcon icon={faRocket} className="me-2" />
                        Start Your Journey
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="d-inline-block"
                    >
                      <Button variant="outline-light" size="lg">
                        <FontAwesomeIcon icon={faPlay} className="me-2" />
                        Watch Demo
                      </Button>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    ref={statsRef} 
                    className="hero-stats"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <Row>
                      <Col xs={4} className="text-center">
                        <motion.div 
                          className="stat-number"
                          whileHover={{ scale: 1.1 }}
                        >
                          {statsInView && <CountUp end={50} suffix="K+" duration={2} />}
                        </motion.div>
                        <div className="stat-label">Developers Hired</div>
                      </Col>
                      <Col xs={4} className="text-center">
                        <motion.div 
                          className="stat-number"
                          whileHover={{ scale: 1.1 }}
                        >
                          {statsInView && <CountUp end={500} suffix="+" duration={2} />}
                        </motion.div>
                        <div className="stat-label">Partner Companies</div>
                      </Col>
                      <Col xs={4} className="text-center">
                        <motion.div 
                          className="stat-number"
                          whileHover={{ scale: 1.1 }}
                        >
                          {statsInView && <CountUp end={95} suffix="%" duration={2} />}
                        </motion.div>
                        <div className="stat-label">Success Rate</div>
                      </Col>
                    </Row>
                  </motion.div>
                </motion.div>
              </Col>
              <Col lg={6} className="hero-visual">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="dashboard-mockup"
                >
                  <div className="mockup-header mb-3">
                    <div className="mockup-dots">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <motion.div 
                    className="job-card mb-3"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="company-logo me-3">G</div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">Senior Frontend Developer</h6>
                        <p className="text-muted mb-1">Google • San Francisco, CA</p>
                        <span className="text-success fw-bold">$180K - $220K</span>
                      </div>
                      <Badge bg="success" className="rounded-pill">98% Match</Badge>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="job-card"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="company-logo me-3 bg-info">M</div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">Full Stack Engineer</h6>
                        <p className="text-muted mb-1">Microsoft • Seattle, WA</p>
                        <span className="text-success fw-bold">$160K - $200K</span>
                      </div>
                      <Badge bg="success" className="rounded-pill">95% Match</Badge>
                    </div>
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>
      </Parallax>

      {/* Features Section */}
      <section id="features" className="features-section py-5">
        <Container>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Row className="text-center mb-5">
              <Col>
                <h2 className="section-title">Why Choose TechCareers?</h2>
                <p className="section-subtitle">
                  Everything you need to accelerate your tech career in one powerful platform
                </p>
              </Col>
            </Row>
          </motion.div>
          <Row>
            {features.map((feature, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="feature-card h-100 border-0 shadow-sm">
                    <Card.Body className="text-center p-4">
                      <motion.div 
                        className="feature-icon mb-3"
                        style={{ color: feature.color }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FontAwesomeIcon icon={feature.icon} size="3x" />
                      </motion.div>
                      <Card.Title className="h5 mb-3">{feature.title}</Card.Title>
                      <Card.Text className="text-muted">{feature.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section py-5 bg-light">
        <Container>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Row className="text-center mb-5">
              <Col>
                <h2 className="section-title">How It Works</h2>
                <p className="section-subtitle">Get hired in 3 simple steps</p>
              </Col>
            </Row>
          </motion.div>
          <Row>
            {steps.map((step, index) => (
              <Col lg={4} className="mb-4" key={index}>
                <motion.div 
                  className="step-card text-center"
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="step-number mb-3"
                    style={{ backgroundColor: step.color }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.number}
                  </motion.div>
                  <h4 className="mb-3">{step.title}</h4>
                  <p className="text-muted">{step.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section py-5">
        <Container>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Row className="text-center mb-5">
              <Col>
                <h2 className="section-title">Success Stories</h2>
                <p className="section-subtitle">
                  Join thousands of developers who found their dream jobs
                </p>
              </Col>
            </Row>
          </motion.div>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col lg={4} className="mb-4" key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="testimonial-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <Card.Text className="mb-4 fst-italic">"{testimonial.content}"</Card.Text>
                      <div className="d-flex align-items-center">
                        <motion.img 
                          src={testimonial.avatar} 
                          alt={testimonial.author}
                          className="rounded-circle me-3"
                          width="60" 
                          height="60"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                        <div>
                          <h6 className="mb-1">{testimonial.author}</h6>
                          <small className="text-muted">{testimonial.position}</small>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <Parallax strength={300}>
        <section className="cta-section py-5">
          <Container>
            <Row className="text-center">
              <Col lg={8} className="mx-auto">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-white mb-4">
                    Ready to Accelerate Your Tech Career?
                  </h2>
                  <p className="text-white-50 mb-5">
                    Join 50,000+ developers who trust TechCareers to find their next opportunity
                  </p>
                  
                  <AnimatePresence>
                    {showAlert && (
                      <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Alert 
                          variant={alertVariant} 
                          className="mb-4" 
                          dismissible 
                          onClose={() => setShowAlert(false)}
                        >
                          <FontAwesomeIcon 
                            icon={alertVariant === 'success' ? faCheckCircle : faExclamationCircle} 
                            className="me-2" 
                          />
                          {alertMessage}
                        </Alert>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Form onSubmit={handleSubmit} className="signup-form">
                      <Row className="justify-content-center">
                        <Col md={8} lg={6}>
                          <div className="d-flex gap-2">
                            <Form.Control 
                              type="email" 
                              name="email"
                              placeholder="Enter your email address" 
                              size="lg"
                              required
                              disabled={isSubmitting}
                            />
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button 
                                type="submit" 
                                size="lg" 
                                className="btn-gradient"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  <>
                                    <Spinner
                                      as="span"
                                      animation="border"
                                      size="sm"
                                      role="status"
                                      aria-hidden="true"
                                      className="me-2"
                                    />
                                    Signing Up...
                                  </>
                                ) : (
                                  'Get Started Free'
                                )}
                              </Button>
                            </motion.div>
                          </div>
                        </Col>
                      </Row>
                      <p className="text-white-50 mt-3 small">
                        Free to join • No credit card required • Find your dream job in days
                      </p>
                    </Form>
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>
      </Parallax>

      {/* Footer */}
      <footer className="footer-section bg-dark text-white py-5">
        <Container>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Row>
              <Col lg={3} className="mb-4">
                <div className="footer-brand mb-3">
                  <FontAwesomeIcon icon={faCode} className="me-2" />
                  TechCareers
                </div>
                <p className="text-muted mb-3">
                  Connecting talented developers with their dream tech jobs.
                </p>
                <div className="social-links">
                  {[faTwitter, faLinkedin, faGithub].map((icon, index) => (
                    <motion.a 
                      key={index}
                      href="#" 
                      className="text-muted me-3"
                      whileHover={{ scale: 1.2, color: '#fbbf24' }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FontAwesomeIcon icon={icon} />
                    </motion.a>
                  ))}
                </div>
              </Col>
              <Col lg={3} className="mb-4">
                <h6 className="mb-3">For Job Seekers</h6>
                <ul className="list-unstyled">
                  {['Browse Jobs', 'Create Profile', 'Skill Assessment', 'Career Coaching'].map((item, index) => (
                    <li key={index}>
                      <motion.a 
                        href="#" 
                        className="text-muted text-decoration-none"
                        whileHover={{ x: 5, color: '#fbbf24' }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col lg={3} className="mb-4">
                <h6 className="mb-3">For Companies</h6>
                <ul className="list-unstyled">
                  {['Post Jobs', 'Find Talent', 'Pricing', 'Enterprise'].map((item, index) => (
                    <li key={index}>
                      <motion.a 
                        href="#" 
                        className="text-muted text-decoration-none"
                        whileHover={{ x: 5, color: '#fbbf24' }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col lg={3} className="mb-4">
                <h6 className="mb-3">Support</h6>
                <ul className="list-unstyled">
                  {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                    <li key={index}>
                      <motion.a 
                        href="#" 
                        className="text-muted text-decoration-none"
                        whileHover={{ x: 5, color: '#fbbf24' }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            <hr className="my-4" />
            <Row>
              <Col className="text-center">
                <p className="text-muted mb-0">&copy; 2024 TechCareers. All rights reserved.</p>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default App; 