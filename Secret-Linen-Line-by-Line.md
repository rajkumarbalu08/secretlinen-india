# Secret Linen — Line-by-Line Code Commentary

---

This document provides a line‑by‑line explanation for each HTML page in the uploaded codebase, covering structure, purpose, and design intent.

---

## Home.html

<details><summary><strong>Show original source</strong></summary>

```html
<!DOCTYPE html>
<html lang="en">


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secret Linen | Luxury Textiles & Bespoke Services</title>
    <meta name="description" content="Secret Linen - years of craftsmanship in luxury linens for hospitality and refined living. Quiet luxury, woven into life.">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    
    <style>
        :root {
            /* Enhanced Color Palette */
            --ivory: #fdfcf8;
            --linen: #f5f1e8;
            --stone: #e8e2d6;
            --clay: #d8cdbc;
            --charcoal: #1a1a1a;
            --bronze: #a8926e;
            --bronze-light: #c4b59a;
            --sage: #a8b8a5;
            
            /* Typography */
            --serif: 'Playfair Display', serif;
            --sans: 'Inter', sans-serif;
            
            /* Spacing */
            --section-padding: clamp(80px, 10vw, 160px);
            --container-width: min(1400px, 94%);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html {
            scroll-behavior: smooth;
        }
        
        body {
            font-family: var(--sans);
            color: var(--charcoal);
            background-color: var(--ivory);
            line-height: 1.7;
            overflow-x: hidden;
            font-weight: 300;
        }
        
        h1, h2, h3, h4 {
            font-family: var(--serif);
            font-weight: 400;
            line-height: 1.1;
            letter-spacing: -0.02em;
        }
        
        h1 {
            font-size: clamp(3rem, 6vw, 5rem);
            font-weight: 300;
        }
        
        h2 {
            font-size: clamp(2.25rem, 4.5vw, 3.5rem);
        }
        
        h3 {
            font-size: clamp(1.5rem, 3vw, 2.25rem);
        }
        
        .container {
            width: var(--container-width);
            margin: 0 auto;
        }
        
        .section {
            padding: var(--section-padding) 0;
        }
        
        /* Enhanced Header */
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(253, 252, 248, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(232, 226, 214, 0.3);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.25rem 0;
            position: relative;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 14px;
            text-decoration: none;
            color: var(--charcoal);
            transition: transform 0.3s ease;
            z-index: 1001;
        }
        
        .logo:hover {
            transform: translateX(-4px);
        }
        
        .logo-icon {
            width: 44px;
            height: 44px;
            background: linear-gradient(135deg, var(--bronze), var(--bronze-light));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--ivory);
            font-family: var(--serif);
            font-size: 16px;
            font-weight: 500;
        }
        
        .logo-text {
            font-family: var(--serif);
            font-size: 1.4rem;
            font-weight: 400;
            letter-spacing: 0.02em;
        }
        
        /* Desktop Navigation */
        nav.desktop {
            display: flex;
        }
        
        nav.desktop ul {
            display: flex;
            list-style: none;
            gap: 2.5rem;
        }
        
        nav.desktop a {
            text-decoration: none;
            color: var(--charcoal);
            font-weight: 400;
            font-size: 0.95rem;
            letter-spacing: 0.02em;
            position: relative;
            padding: 0.5rem 0;
            transition: all 0.3s ease;
        }
        
        nav.desktop a:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background: var(--bronze);
            transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        nav.desktop a:hover {
            color: var(--bronze);
        }
        
        nav.desktop a:hover:after {
            width: 100%;
        }
        
        /* Mobile Navigation */
        .mobile-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--charcoal);
            transition: transform 0.3s ease;
            z-index: 1001;
            padding: 0.5rem;
        }
        
        .mobile-toggle:hover {
            transform: rotate(90deg);
        }
        
        nav.mobile {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(253, 252, 248, 0.98);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--stone);
            padding: 2rem 0;
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        nav.mobile.active {
            transform: translateY(0);
            opacity: 1;
        }
        
        nav.mobile ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        nav.mobile a {
            text-decoration: none;
            color: var(--charcoal);
            font-weight: 400;
            font-size: 1.1rem;
            padding: 0.75rem 0;
            display: block;
            transition: all 0.3s ease;
            border-bottom: 1px solid transparent;
        }
        
        nav.mobile a:hover {
            color: var(--bronze);
            border-bottom-color: var(--bronze);
        }
        
        /* Enhanced Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            background: linear-gradient(135deg, var(--ivory) 0%, var(--linen) 100%);
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 60%;
            height: 100%;
            background: linear-gradient(135deg, var(--stone) 0%, var(--clay) 100%);
            clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
            z-index: 1;
        }
        
        .hero-content {
            max-width: 580px;
            z-index: 2;
            position: relative;
        }
        
        .hero-eyebrow {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            color: var(--bronze);
            margin-bottom: 1.5rem;
            display: block;
            font-weight: 400;
        }
        
        .hero-title {
            margin-bottom: 2rem;
            font-weight: 300;
            line-height: 1.05;
        }
        
        .hero-description {
            font-size: 1.2rem;
            margin-bottom: 3rem;
            color: #555;
            font-weight: 300;
            max-width: 500px;
            line-height: 1.6;
        }
        
        .hero-buttons {
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            padding: 1.25rem 2.5rem;
            text-decoration: none;
            border-radius: 0;
            font-weight: 400;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border: 1px solid transparent;
            font-size: 0.95rem;
            letter-spacing: 0.02em;
            position: relative;
            overflow: hidden;
        }
        
        .btn:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.6s ease;
        }
        
        .btn:hover:before {
            left: 100%;
        }
        
        .btn-primary {
            background: var(--charcoal);
            color: var(--ivory);
            border-color: var(--charcoal);
        }
        
        .btn-primary:hover {
            background: var(--bronze);
            color: var(--ivory);
            border-color: var(--bronze);
            transform: translateY(-2px);
        }
        
        .btn-secondary {
            background: transparent;
            color: var(--charcoal);
            border-color: var(--charcoal);
        }
        
        .btn-secondary:hover {
            background: var(--charcoal);
            color: var(--ivory);
            transform: translateY(-2px);
        }
        
        .hero-visual {
            position: absolute;
            right: 10%;
            top: 50%;
            transform: translateY(-50%);
            width: 45%;
            height: 70%;
            z-index: 2;
            border-radius: 2px;
            overflow: hidden;
            box-shadow: 0 25px 50px rgba(0,0,0,0.1);
        }
        
        .hero-visual img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .hero:hover .hero-visual img {
            transform: scale(1.03);
        }
        
        /* Enhanced Collections Preview */
        .collections-preview {
            background: var(--ivory);
            position: relative;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 5rem;
        }
        
        .section-eyebrow {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            color: var(--bronze);
            margin-bottom: 1.5rem;
            display: block;
            font-weight: 400;
        }
        
        .collections-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
        }
        
        .collection-card {
            background: var(--ivory);
            border-radius: 0;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border: 1px solid var(--stone);
            position: relative;
        }
        
        .collection-card:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(168, 146, 110, 0.1) 0%, transparent 50%);
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: 1;
        }
        
        .collection-card:hover {
            transform: translateY(-12px);
            border-color: var(--bronze);
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        
        .collection-card:hover:before {
            opacity: 1;
        }
        
        .collection-image {
            height: 280px;
            overflow: hidden;
            position: relative;
        }
        
        .collection-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .collection-card:hover .collection-image img {
            transform: scale(1.08);
        }
        
        .collection-content {
            padding: 2rem;
            position: relative;
            z-index: 2;
        }
        
        .collection-title {
            font-size: 1.3rem;
            margin-bottom: 0.75rem;
            font-weight: 400;
        }
        
        .collection-description {
            color: #666;
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
            line-height: 1.5;
            font-weight: 300;
        }
        
        .collection-link {
            color: var(--bronze);
            text-decoration: none;
            font-weight: 400;
            font-size: 0.9rem;
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            transition: gap 0.3s ease;
            letter-spacing: 0.02em;
        }
        
        .collection-link:hover {
            gap: 1rem;
        }
        
        /* Enhanced Heritage Section */
        .heritage {
            background: linear-gradient(135deg, var(--linen) 0%, var(--stone) 100%);
            position: relative;
            overflow: hidden;
        }
        
        .heritage::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 400px;
            height: 400px;
            background: var(--bronze);
            opacity: 0.03;
            border-radius: 50%;
        }
        
        .heritage-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
            align-items: center;
        }
        
        .heritage-text h2 {
            margin-bottom: 2rem;
        }
        
        .heritage-text p {
            margin-bottom: 2rem;
            font-size: 1.15rem;
            color: #555;
            font-weight: 300;
            line-height: 1.7;
        }
        
        .heritage-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
            margin-top: 3rem;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-number {
            font-size: 3rem;
            font-weight: 300;
            color: var(--bronze);
            display: block;
            font-family: var(--serif);
            line-height: 1;
            margin-bottom: 0.5rem;
        }
        
        .stat-label {
            font-size: 0.85rem;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 400;
        }
        
        .heritage-visual {
            position: relative;
            border-radius: 2px;
            overflow: hidden;
            box-shadow: 0 25px 50px rgba(0,0,0,0.1);
        }
        
        .heritage-visual img {
            width: 100%;
            height: 600px;
            object-fit: cover;
        }
        
        /* Enhanced Services Section */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
        }
        
        .service-card {
            background: var(--ivory);
            padding: 3rem 2.5rem;
            border-radius: 0;
            text-align: center;
            border: 1px solid var(--stone);
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            overflow: hidden;
        }
        
        .service-card:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: var(--bronze);
            transition: left 0.6s ease;
        }
        
        .service-card:hover {
            transform: translateY(-8px);
            border-color: var(--bronze);
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        
        .service-card:hover:before {
            left: 0;
        }
        
        .service-icon {
            width: 70px;
            height: 70px;
            background: var(--bronze);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem;
            color: var(--ivory);
            font-size: 1.75rem;
            transition: transform 0.4s ease;
        }
        
        .service-card:hover .service-icon {
            transform: scale(1.1) rotate(5deg);
        }
        
        .service-title {
            margin-bottom: 1.25rem;
            font-weight: 400;
        }
        
        .service-description {
            color: #666;
            margin-bottom: 2rem;
            font-weight: 300;
            line-height: 1.6;
        }
        
        /* Client Showcase Section */
        .client-showcase {
            background: var(--ivory);
            position: relative;
            overflow: hidden;
        }
        
        .client-showcase::before {
            content: '';
            position: absolute;
            top: -30%;
            left: -10%;
            width: 300px;
            height: 300px;
            background: var(--bronze);
            opacity: 0.03;
            border-radius: 50%;
        }
        
        .client-showcase::after {
            content: '';
            position: absolute;
            bottom: -20%;
            right: -5%;
            width: 250px;
            height: 250px;
            background: var(--sage);
            opacity: 0.03;
            border-radius: 50%;
        }
        
        .clients-grid {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 4rem;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .client-logo {
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            padding: 1rem;
            filter: grayscale(100%);
            opacity: 0.7;
        }
        
        .client-logo:hover {
            filter: grayscale(0%);
            opacity: 1;
            transform: translateY(-5px);
        }
        
        .client-logo img {
            max-height: 100%;
            max-width: 160px;
            object-fit: contain;
        }
        
        /* Enhanced CTA Section */
        .cta-section {
            background: linear-gradient(135deg, var(--charcoal) 0%, #2a2a2a 100%);
            color: var(--ivory);
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .cta-section::before {
            content: '';
            position: absolute;
            top: -100px;
            right: -100px;
            width: 300px;
            height: 300px;
            background: var(--bronze);
            opacity: 0.05;
            border-radius: 50%;
        }
        
        .cta-section h2 {
            color: var(--ivory);
            margin-bottom: 1.5rem;
        }
        
        .cta-section p {
            font-size: 1.2rem;
            margin-bottom: 3rem;
            opacity: 0.9;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            font-weight: 300;
            line-height: 1.6;
        }
        
        .btn-light {
            background: var(--ivory);
            color: var(--charcoal);
            border-color: var(--ivory);
        }
        
        .btn-light:hover {
            background: var(--bronze);
            color: var(--ivory);
            border-color: var(--bronze);
        }
        
        /* Enhanced Footer */
        footer {
            background: var(--charcoal);
            color: var(--ivory);
            padding: 6rem 0 2rem;
            position: relative;
        }
        
        footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--bronze), transparent);
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 3rem;
            margin-bottom: 3rem;
        }
        
        .footer-brand {
            display: flex;
            flex-direction: column;
        }
        
        .footer-logo {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 1.5rem;
        }
        
        .footer-description {
            opacity: 0.7;
            line-height: 1.6;
            margin-bottom: 2rem;
            font-weight: 300;
            max-width: 400px;
        }
        
        .footer-heading {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            color: var(--ivory);
            font-weight: 400;
            letter-spacing: 0.02em;
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 0.75rem;
        }
        
        .footer-links a {
            color: rgba(253, 252, 248, 0.7);
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: 300;
            letter-spacing: 0.01em;
            font-size: 0.95rem;
        }
        
        .footer-links a:hover {
            color: var(--bronze);
        }
        
        .footer-contact {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            color: rgba(253, 252, 248, 0.7);
            font-size: 0.95rem;
        }
        
        .contact-item strong {
            color: var(--ivory);
            font-weight: 500;
        }
        
        .footer-bottom {
            border-top: 1px solid rgba(253, 252, 248, 0.1);
            padding-top: 2rem;
            text-align: center;
            opacity: 0.6;
            font-size: 0.9rem;
            font-weight: 300;
        }
        
        /* Enhanced Animations */
        .fade-in {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Enhanced Responsive Design */
        @media (max-width: 1200px) {
            .collections-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .services-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .clients-grid {
                gap: 3rem;
            }
            
            .footer-content {
                grid-template-columns: 1fr 1fr;
            }
            
            .hero::before {
                width: 50%;
            }
            
            .hero-visual {
                width: 40%;
            }
        }
        
        @media (max-width: 768px) {
            nav.desktop {
                display: none;
            }
            
            .mobile-toggle {
                display: block;
            }
            
            nav.mobile {
                display: block;
            }
            
            .hero-content {
                text-align: center;
                max-width: none;
            }
            
            .hero::before {
                display: none;
            }
            
            .hero-visual {
                display: none;
            }
            
            .heritage-content {
                grid-template-columns: 1fr;
                gap: 3rem;
            }
            
            .services-grid {
                grid-template-columns: 1fr;
            }
            
            .collections-grid {
                grid-template-columns: 1fr;
            }
            
            .clients-grid {
                gap: 2rem;
            }
            
            .client-logo {
                height: 60px;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .hero-buttons {
                justify-content: center;
            }
            
            .heritage-stats {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .footer-brand {
                text-align: center;
                align-items: center;
            }
        }
        
        @media (max-width: 480px) {
            .btn {
                padding: 1rem 2rem;
                width: 100%;
                justify-content: center;
            }
            
            .hero-buttons {
                flex-direction: column;
            }
            
            .service-card {
                padding: 2rem 1.5rem;
            }
            
            .collection-content {
                padding: 1.5rem;
            }
            
            .clients-grid {
                gap: 1.5rem;
            }
            
            .client-logo {
                height: 50px;
            }
        }
    </style>



    <!-- Header -->
    <header>
        <div class="container header-container">
            <a href="/home" class="logo">
                <div class="logo-icon">SL</div>
                <div class="logo-text">Secret Linen</div>
            </a>
            
            <!-- Desktop Navigation -->
            <nav class="desktop">
                <ul>
                    <li><a href="/home" class="active">Home</a></li>
                    <li><a href="/collections">Collections</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/about#contact">Contact</a></li>
                </ul>
            </nav>
            
            <!-- Mobile Toggle -->
            <button class="mobile-toggle">☰</button>
            
            <!-- Mobile Navigation -->
            <nav class="mobile">
                <ul>
                    <li><a href="/home" class="active">Home</a></li>
                    <li><a href="/collections">Collections</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/about#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <span class="hero-eyebrow">Since 2024</span>
                <h1 class="hero-title">Quiet Luxury, Woven into Life</h1>
                <p class="hero-description">
                    For over years, Secret Linen has crafted exceptional textiles that transform spaces into sanctuaries of comfort and timeless elegance.
                </p>
                <div class="hero-buttons">
                    <a href="/collections" class="btn btn-primary">Explore Collections</a>
                    <a href="/services" class="btn btn-secondary">Our Services</a>
                </div>
            </div>
        </div>
        <div class="hero-visual">
            <img src="/files/Linen bedroom.jpg" alt="Luxury linen bedroom">
        </div>
    </section>

    <!-- Collections Preview -->
    <section class="section collections-preview">
        <div class="container">
            <div class="section-header">
                <span class="section-eyebrow">Our Collections</span>
                <h2>Crafted for Every Space</h2>
                <p>Premium textiles designed for hospitality and refined living</p>
            </div>
            
            <div class="collections-grid">
                <div class="collection-card fade-in">
                    <div class="collection-image">
                        <img src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=600&q=80" alt="Hotel Collection">
                    </div>
                    <div class="collection-content">
                        <h3 class="collection-title">Hotels</h3>
                        <p class="collection-description">Luxury bedding and bath collections for premium hospitality experiences</p>
                        <a href="/collections#hotels" class="collection-link">Discover →</a>
                    </div>
                </div>
                
                <div class="collection-card fade-in">
                    <div class="collection-image">
                        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" alt="Hospital Collection">
                    </div>
                    <div class="collection-content">
                        <h3 class="collection-title">Hospitals</h3>
                        <p class="collection-description">Medical-grade textiles with anti-microbial properties</p>
                        <a href="/collections#hospitals" class="collection-link">Discover →</a>
                    </div>
                </div>
                
                <div class="collection-card fade-in">
                    <div class="collection-image">
                        <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80" alt="Spa Collection">
                    </div>
                    <div class="collection-content">
                        <h3 class="collection-title">Spas</h3>
                        <p class="collection-description">Plush towels and robes for ultimate wellness experiences</p>
                        <a href="/collections#spas" class="collection-link">Discover →</a>
                    </div>
                </div>
                
                <div class="collection-card fade-in">
                    <div class="collection-image">
                        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80" alt="Salon Collection">
                    </div>
                    <div class="collection-content">
                        <h3 class="collection-title">Salons</h3>
                        <p class="collection-description">Durable, bleach-safe textiles for professional beauty spaces</p>
                        <a href="/collections#salons" class="collection-link">Discover →</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Heritage Section -->
    <section class="section heritage">
        <div class="container">
            <div class="heritage-content">
                <div class="heritage-text">
                    <span class="section-eyebrow">Our Heritage</span>
                    <h2>A Legacy Woven with Care</h2>
                    <p>Started in 2024, Secret Linen began as a small family workshop dedicated to the art of textile craftsmanship. Today, we continue that tradition with the same commitment to quality and attention to detail.</p>
                    <p>Our years of expertise allows us to create textiles that not only meet the highest standards of luxury but also stand the test of time.</p>
                    
                    <div class="heritage-stats">
                        <div class="stat-item">
                            <span class="stat-number">2+</span>
                            <span class="stat-label">Years Experience</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">9+</span>
                            <span class="stat-label">Happy Clients</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">4+</span>
                            <span class="stat-label">Hotel Partners</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">100%</span>
                            <span class="stat-label">Natural Fibers</span>
                        </div>
                    </div>
                </div>
                
                <div class="heritage-visual fade-in">
                    <img src="/files/Linen Craft.jpg" alt="Craftsmanship">
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <span class="section-eyebrow">Our Services</span>
                <h2>Bespoke Solutions</h2>
                <p>Tailored programs for hospitality and corporate clients</p>
            </div>
            
            <div class="services-grid">
                <div class="service-card fade-in">
                    <div class="service-icon">🎁</div>
                    <h3 class="service-title">Corporate Gifting</h3>
                    <p class="service-description">Elevate every gesture with timeless luxury linens and custom packaging</p>
                    <a href="/services#gifting" class="collection-link">Learn More →</a>
                </div>
                
                <div class="service-card fade-in">
                    <div class="service-icon">🏨</div>
                    <h3 class="service-title">Hospitality Partnerships</h3>
                    <p class="service-description">End-to-end linen programs for hotels, resorts, and luxury accommodations</p>
                    <a href="/services#hospitality" class="collection-link">Learn More →</a>
                </div>
                
                <div class="service-card fade-in">
                    <div class="service-icon">✂️</div>
                    <h3 class="service-title">Customization</h3>
                    <p class="service-description">Bespoke designs, embroidery, and custom sizing for unique requirements</p>
                    <a href="/services#customization" class="collection-link">Learn More →</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Client Showcase Section -->
    <section class="section client-showcase">
        <div class="container">
            <div class="section-header">
                <span class="section-eyebrow">Our Clients</span>
                <h2>Trusted by Industry Leaders</h2>
                <p>We're proud to partner with exceptional establishments that value quality and craftsmanship</p>
            </div>
            
            <div class="clients-grid">
                <div class="client-logo fade-in">
                    <img src="https://via.placeholder.com/160x80/e8e2d6/1a1a1a?text=Grand+Hotel" alt="Grand Hotel">
                </div>
                
                <div class="client-logo fade-in">
                    <img src="https://via.placeholder.com/160x80/e8e2d6/1a1a1a?text=Serenity+Spas" alt="Serenity Spas">
                </div>
                
                <div class="client-logo fade-in">
                    <img src="https://via.placeholder.com/160x80/e8e2d6/1a1a1a?text=MediCare+Hospital" alt="MediCare Hospital">
                </div>
                
                <div class="client-logo fade-in">
                    <img src="https://via.placeholder.com/160x80/e8e2d6/1a1a1a?text=Elite+Salons" alt="Elite Salons">
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
        <div class="container">
            <h2>Ready to Transform Your Space?</h2>
            <p>Schedule a consultation with our textile experts and discover how Secret Linen can elevate your hospitality experience or create the perfect bespoke solution for your needs.</p>
            <a href="/about#contact" class="btn btn-light">Get In Touch</a>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <div class="logo-icon">SL</div>
                        <div class="logo-text">Secret Linen</div>
                    </div>
                    <p class="footer-description">
                        Years of crafting exceptional textiles for hospitality and refined living. Quiet luxury, woven into life.
                    </p>
                </div>
                
                <div>
                    <h4 class="footer-heading">Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="/collections">Collections</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/about">Our Story</a></li>
                        <li><a href="/about#contact">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-contact">
                    <h4 class="footer-heading">Contact Info</h4>
                    <div class="contact-item">
                        <strong>Address:</strong> #59, 1st Floor, Balaji Nagar Main Road, Chennai 600088
                    </div>
                    <div class="contact-item">
                        <strong>Phone:</strong> +91-9003555940
                    </div>
                    <div class="contact-item">
                        <strong>Email:</strong> secretlinenindia@gmail.com
                    </div>
                    <div class="contact-item">
                        <strong>Hours:</strong> Mon-Sat: 10AM-9PM
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 Secret Linen. All rights reserved. Crafted with ❤️ by 69TM.</p>
            </div>
        </div>
    </footer>

    <script>
        // Enhanced scroll animations
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { 
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            fadeElements.forEach(element => {
                fadeObserver.observe(element);
            });
            
            // Enhanced mobile menu toggle
            const mobileToggle = document.querySelector('.mobile-toggle');
            const mobileNav = document.querySelector('nav.mobile');
            
            mobileToggle.addEventListener('click', function() {
                const isActive = mobileNav.classList.contains('active');
                
                if (isActive) {
                    mobileNav.classList.remove('active');
                    this.innerHTML = '☰';
                } else {
                    mobileNav.classList.add('active');
                    this.innerHTML = '✕';
                }
            });
            
            // Close mobile menu when clicking on links
            const mobileLinks = document.querySelectorAll('nav.mobile a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileNav.classList.remove('active');
                    mobileToggle.innerHTML = '☰';
                });
            });
            
            // Enhanced header scroll effect
            let lastScrollY = window.scrollY;
            const header = document.querySelector('header');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(253, 252, 248, 0.98)';
                    header.style.padding = '0.5rem 0';
                    
                    if (window.scrollY > lastScrollY) {
                        header.style.transform = 'translateY(-100%)';
                    } else {
                        header.style.transform = 'translateY(0)';
                    }
                } else {
                    header.style.background = 'rgba(253, 252, 248, 0.95)';
                    header.style.padding = '0';
                    header.style.transform = 'translateY(0)';
                }
                
                lastScrollY = window.scrollY;
            });
            
            // Enhanced hover effects for cards
            const cards = document.querySelectorAll('.collection-card, .service-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.zIndex = '10';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.zIndex = '1';
                });
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });
    </script>


```
</details>

| Line | Code | Comment |
|---:|---|---|
| 1 | `<!DOCTYPE html>` | Declares HTML5 document type for standards-compliant rendering. |
| 2 | `<html lang="en">` | Root element; `lang` attribute supports accessibility and SEO. |
| 3 | `` |  |
| 4 | `` |  |
| 5 | `    <meta charset="UTF-8">` | Sets character encoding to UTF‑8. |
| 6 | `    <meta name="viewport" content="width=device-width, initial-scale=1.0">` | Configures responsive viewport for mobile scaling. |
| 7 | `    <title>Secret Linen \| Luxury Textiles & Bespoke Services</title>` | Defines the browser tab title and helps SEO. |
| 8 | `    <meta name="description" content="Secret Linen - years of craftsmanship in luxury linens for hospitality and refined living. Quiet luxury, woven into life.">` | Structural/semantic HTML element. |
| 9 | `    ` |  |
| 10 | `    <!-- Fonts -->` | Structural/semantic HTML element. |
| 11 | `    <link rel="preconnect" href="https://fonts.googleapis.com">` | Hints the browser to preconnect to a domain for faster font loading. |
| 12 | `    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` | Hints the browser to preconnect to a domain for faster font loading. |
| 13 | `    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">` | Loads Google Fonts stylesheet for premium typography. |
| 14 | `    ` |  |
| 15 | `    <style>` | Inline CSS block begins. |
| 16 | `        :root {` | CSS selector block begins. |
| 17 | `            /* Enhanced Color Palette */` | Content/whitespace or standard markup. |
| 18 | `            --ivory: #fdfcf8;` | CSS custom property (design token) for consistent theming. |
| 19 | `            --linen: #f5f1e8;` | CSS custom property (design token) for consistent theming. |
| 20 | `            --stone: #e8e2d6;` | CSS custom property (design token) for consistent theming. |
| 21 | `            --clay: #d8cdbc;` | CSS custom property (design token) for consistent theming. |
| 22 | `            --charcoal: #1a1a1a;` | CSS custom property (design token) for consistent theming. |
| 23 | `            --bronze: #a8926e;` | CSS custom property (design token) for consistent theming. |
| 24 | `            --bronze-light: #c4b59a;` | CSS custom property (design token) for consistent theming. |
| 25 | `            --sage: #a8b8a5;` | CSS custom property (design token) for consistent theming. |
| 26 | `            ` |  |
| 27 | `            /* Typography */` | Content/whitespace or standard markup. |
| 28 | `            --serif: 'Playfair Display', serif;` | CSS custom property (design token) for consistent theming. |
| 29 | `            --sans: 'Inter', sans-serif;` | CSS custom property (design token) for consistent theming. |
| 30 | `            ` |  |
| 31 | `            /* Spacing */` | Content/whitespace or standard markup. |
| 32 | `            --section-padding: clamp(80px, 10vw, 160px);` | CSS custom property (design token) for consistent theming. |
| 33 | `            --container-width: min(1400px, 94%);` | CSS custom property (design token) for consistent theming. |
| 34 | `        }` | CSS selector block ends. |
| 35 | `        ` |  |
| 36 | `        * {` | CSS selector block begins. |
| 37 | `            margin: 0;` | CSS declaration. |
| 38 | `            padding: 0;` | CSS declaration. |
| 39 | `            box-sizing: border-box;` | CSS declaration. |
| 40 | `        }` | CSS selector block ends. |
| 41 | `        ` |  |
| 42 | `        html {` | CSS selector block begins. |
| 43 | `            scroll-behavior: smooth;` | Smooth scroll between in‑page anchors. |
| 44 | `        }` | CSS selector block ends. |
| 45 | `        ` |  |
| 46 | `        body {` | CSS selector block begins. |
| 47 | `            font-family: var(--sans);` | CSS declaration. |
| 48 | `            color: var(--charcoal);` | CSS declaration. |
| 49 | `            background-color: var(--ivory);` | CSS declaration. |
| 50 | `            line-height: 1.7;` | CSS declaration. |
| 51 | `            overflow-x: hidden;` | CSS declaration. |
| 52 | `            font-weight: 300;` | CSS declaration. |
| 53 | `        }` | CSS selector block ends. |
| 54 | `        ` |  |
| 55 | `        h1, h2, h3, h4 {` | CSS selector block begins. |
| 56 | `            font-family: var(--serif);` | CSS declaration. |
| 57 | `            font-weight: 400;` | CSS declaration. |
| 58 | `            line-height: 1.1;` | CSS declaration. |
| 59 | `            letter-spacing: -0.02em;` | CSS declaration. |
| 60 | `        }` | CSS selector block ends. |
| 61 | `        ` |  |
| 62 | `        h1 {` | CSS selector block begins. |
| 63 | `            font-size: clamp(3rem, 6vw, 5rem);` | CSS declaration. |
| 64 | `            font-weight: 300;` | CSS declaration. |
| 65 | `        }` | CSS selector block ends. |
| 66 | `        ` |  |
| 67 | `        h2 {` | CSS selector block begins. |
| 68 | `            font-size: clamp(2.25rem, 4.5vw, 3.5rem);` | CSS declaration. |
| 69 | `        }` | CSS selector block ends. |
| 70 | `        ` |  |
| 71 | `        h3 {` | CSS selector block begins. |
| 72 | `            font-size: clamp(1.5rem, 3vw, 2.25rem);` | CSS declaration. |
| 73 | `        }` | CSS selector block ends. |
| 74 | `        ` |  |
| 75 | `        .container {` | CSS selector block begins. |
| 76 | `            width: var(--container-width);` | CSS declaration. |
| 77 | `            margin: 0 auto;` | CSS declaration. |
| 78 | `        }` | CSS selector block ends. |
| 79 | `        ` |  |
| 80 | `        .section {` | CSS selector block begins. |
| 81 | `            padding: var(--section-padding) 0;` | CSS declaration. |
| 82 | `        }` | CSS selector block ends. |
| 83 | `        ` |  |
| 84 | `        /* Enhanced Header */` | Content/whitespace or standard markup. |
| 85 | `        header {` | CSS selector block begins. |
| 86 | `            position: fixed;` | CSS declaration. |
| 87 | `            top: 0;` | CSS declaration. |
| 88 | `            left: 0;` | CSS declaration. |
| 89 | `            width: 100%;` | CSS declaration. |
| 90 | `            z-index: 1000;` | Layer stacking control to keep nav/modals above content. |
| 91 | `            background: rgba(253, 252, 248, 0.95);` | CSS declaration. |
| 92 | `            backdrop-filter: blur(20px);` | Applies frosted-glass effect for overlays or headers. |
| 93 | `            border-bottom: 1px solid rgba(232, 226, 214, 0.3);` | CSS declaration. |
| 94 | `            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 95 | `        }` | CSS selector block ends. |
| 96 | `        ` |  |
| 97 | `        .header-container {` | CSS selector block begins. |
| 98 | `            display: flex;` | CSS declaration. |
| 99 | `            justify-content: space-between;` | CSS declaration. |
| 100 | `            align-items: center;` | CSS declaration. |
| 101 | `            padding: 1.25rem 0;` | CSS declaration. |
| 102 | `            position: relative;` | CSS declaration. |
| 103 | `        }` | CSS selector block ends. |
| 104 | `        ` |  |
| 105 | `        .logo {` | CSS selector block begins. |
| 106 | `            display: flex;` | CSS declaration. |
| 107 | `            align-items: center;` | CSS declaration. |
| 108 | `            gap: 14px;` | CSS declaration. |
| 109 | `            text-decoration: none;` | CSS declaration. |
| 110 | `            color: var(--charcoal);` | CSS declaration. |
| 111 | `            transition: transform 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 112 | `            z-index: 1001;` | Layer stacking control to keep nav/modals above content. |
| 113 | `        }` | CSS selector block ends. |
| 114 | `        ` |  |
| 115 | `        .logo:hover {` | CSS selector block begins. |
| 116 | `            transform: translateX(-4px);` | CSS declaration. |
| 117 | `        }` | CSS selector block ends. |
| 118 | `        ` |  |
| 119 | `        .logo-icon {` | CSS selector block begins. |
| 120 | `            width: 44px;` | CSS declaration. |
| 121 | `            height: 44px;` | CSS declaration. |
| 122 | `            background: linear-gradient(135deg, var(--bronze), var(--bronze-light));` | CSS declaration. |
| 123 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 124 | `            display: flex;` | CSS declaration. |
| 125 | `            align-items: center;` | CSS declaration. |
| 126 | `            justify-content: center;` | CSS declaration. |
| 127 | `            color: var(--ivory);` | CSS declaration. |
| 128 | `            font-family: var(--serif);` | CSS declaration. |
| 129 | `            font-size: 16px;` | CSS declaration. |
| 130 | `            font-weight: 500;` | CSS declaration. |
| 131 | `        }` | CSS selector block ends. |
| 132 | `        ` |  |
| 133 | `        .logo-text {` | CSS selector block begins. |
| 134 | `            font-family: var(--serif);` | CSS declaration. |
| 135 | `            font-size: 1.4rem;` | CSS declaration. |
| 136 | `            font-weight: 400;` | CSS declaration. |
| 137 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 138 | `        }` | CSS selector block ends. |
| 139 | `        ` |  |
| 140 | `        /* Desktop Navigation */` | Content/whitespace or standard markup. |
| 141 | `        nav.desktop {` | CSS selector block begins. |
| 142 | `            display: flex;` | CSS declaration. |
| 143 | `        }` | CSS selector block ends. |
| 144 | `        ` |  |
| 145 | `        nav.desktop ul {` | CSS selector block begins. |
| 146 | `            display: flex;` | CSS declaration. |
| 147 | `            list-style: none;` | CSS declaration. |
| 148 | `            gap: 2.5rem;` | CSS declaration. |
| 149 | `        }` | CSS selector block ends. |
| 150 | `        ` |  |
| 151 | `        nav.desktop a {` | CSS selector block begins. |
| 152 | `            text-decoration: none;` | CSS declaration. |
| 153 | `            color: var(--charcoal);` | CSS declaration. |
| 154 | `            font-weight: 400;` | CSS declaration. |
| 155 | `            font-size: 0.95rem;` | CSS declaration. |
| 156 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 157 | `            position: relative;` | CSS declaration. |
| 158 | `            padding: 0.5rem 0;` | CSS declaration. |
| 159 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 160 | `        }` | CSS selector block ends. |
| 161 | `        ` |  |
| 162 | `        nav.desktop a:after {` | CSS selector block begins. |
| 163 | `            content: '';` | CSS declaration. |
| 164 | `            position: absolute;` | CSS declaration. |
| 165 | `            bottom: 0;` | CSS declaration. |
| 166 | `            left: 0;` | CSS declaration. |
| 167 | `            width: 0;` | CSS declaration. |
| 168 | `            height: 1px;` | CSS declaration. |
| 169 | `            background: var(--bronze);` | CSS declaration. |
| 170 | `            transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 171 | `        }` | CSS selector block ends. |
| 172 | `        ` |  |
| 173 | `        nav.desktop a:hover {` | CSS selector block begins. |
| 174 | `            color: var(--bronze);` | CSS declaration. |
| 175 | `        }` | CSS selector block ends. |
| 176 | `        ` |  |
| 177 | `        nav.desktop a:hover:after {` | CSS selector block begins. |
| 178 | `            width: 100%;` | CSS declaration. |
| 179 | `        }` | CSS selector block ends. |
| 180 | `        ` |  |
| 181 | `        /* Mobile Navigation */` | Content/whitespace or standard markup. |
| 182 | `        .mobile-toggle {` | CSS selector block begins. |
| 183 | `            display: none;` | CSS declaration. |
| 184 | `            background: none;` | CSS declaration. |
| 185 | `            border: none;` | CSS declaration. |
| 186 | `            font-size: 1.5rem;` | CSS declaration. |
| 187 | `            cursor: pointer;` | CSS declaration. |
| 188 | `            color: var(--charcoal);` | CSS declaration. |
| 189 | `            transition: transform 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 190 | `            z-index: 1001;` | Layer stacking control to keep nav/modals above content. |
| 191 | `            padding: 0.5rem;` | CSS declaration. |
| 192 | `        }` | CSS selector block ends. |
| 193 | `        ` |  |
| 194 | `        .mobile-toggle:hover {` | CSS selector block begins. |
| 195 | `            transform: rotate(90deg);` | CSS declaration. |
| 196 | `        }` | CSS selector block ends. |
| 197 | `        ` |  |
| 198 | `        nav.mobile {` | CSS selector block begins. |
| 199 | `            display: none;` | CSS declaration. |
| 200 | `            position: absolute;` | CSS declaration. |
| 201 | `            top: 100%;` | CSS declaration. |
| 202 | `            left: 0;` | CSS declaration. |
| 203 | `            width: 100%;` | CSS declaration. |
| 204 | `            background: rgba(253, 252, 248, 0.98);` | CSS declaration. |
| 205 | `            backdrop-filter: blur(20px);` | Applies frosted-glass effect for overlays or headers. |
| 206 | `            border-bottom: 1px solid var(--stone);` | CSS declaration. |
| 207 | `            padding: 2rem 0;` | CSS declaration. |
| 208 | `            transform: translateY(-100%);` | CSS declaration. |
| 209 | `            opacity: 0;` | CSS declaration. |
| 210 | `            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 211 | `        }` | CSS selector block ends. |
| 212 | `        ` |  |
| 213 | `        nav.mobile.active {` | CSS selector block begins. |
| 214 | `            transform: translateY(0);` | CSS declaration. |
| 215 | `            opacity: 1;` | CSS declaration. |
| 216 | `        }` | CSS selector block ends. |
| 217 | `        ` |  |
| 218 | `        nav.mobile ul {` | CSS selector block begins. |
| 219 | `            list-style: none;` | CSS declaration. |
| 220 | `            display: flex;` | CSS declaration. |
| 221 | `            flex-direction: column;` | CSS declaration. |
| 222 | `            gap: 1.5rem;` | CSS declaration. |
| 223 | `        }` | CSS selector block ends. |
| 224 | `        ` |  |
| 225 | `        nav.mobile a {` | CSS selector block begins. |
| 226 | `            text-decoration: none;` | CSS declaration. |
| 227 | `            color: var(--charcoal);` | CSS declaration. |
| 228 | `            font-weight: 400;` | CSS declaration. |
| 229 | `            font-size: 1.1rem;` | CSS declaration. |
| 230 | `            padding: 0.75rem 0;` | CSS declaration. |
| 231 | `            display: block;` | CSS declaration. |
| 232 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 233 | `            border-bottom: 1px solid transparent;` | CSS declaration. |
| 234 | `        }` | CSS selector block ends. |
| 235 | `        ` |  |
| 236 | `        nav.mobile a:hover {` | CSS selector block begins. |
| 237 | `            color: var(--bronze);` | CSS declaration. |
| 238 | `            border-bottom-color: var(--bronze);` | CSS declaration. |
| 239 | `        }` | CSS selector block ends. |
| 240 | `        ` |  |
| 241 | `        /* Enhanced Hero Section */` | Content/whitespace or standard markup. |
| 242 | `        .hero {` | CSS selector block begins. |
| 243 | `            min-height: 100vh;` | CSS declaration. |
| 244 | `            display: flex;` | CSS declaration. |
| 245 | `            align-items: center;` | CSS declaration. |
| 246 | `            position: relative;` | CSS declaration. |
| 247 | `            background: linear-gradient(135deg, var(--ivory) 0%, var(--linen) 100%);` | CSS declaration. |
| 248 | `            overflow: hidden;` | CSS declaration. |
| 249 | `        }` | CSS selector block ends. |
| 250 | `        ` |  |
| 251 | `        .hero::before {` | CSS selector block begins. |
| 252 | `            content: '';` | CSS declaration. |
| 253 | `            position: absolute;` | CSS declaration. |
| 254 | `            top: 0;` | CSS declaration. |
| 255 | `            right: 0;` | CSS declaration. |
| 256 | `            width: 60%;` | CSS declaration. |
| 257 | `            height: 100%;` | CSS declaration. |
| 258 | `            background: linear-gradient(135deg, var(--stone) 0%, var(--clay) 100%);` | CSS declaration. |
| 259 | `            clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);` | CSS declaration. |
| 260 | `            z-index: 1;` | Layer stacking control to keep nav/modals above content. |
| 261 | `        }` | CSS selector block ends. |
| 262 | `        ` |  |
| 263 | `        .hero-content {` | CSS selector block begins. |
| 264 | `            max-width: 580px;` | CSS declaration. |
| 265 | `            z-index: 2;` | Layer stacking control to keep nav/modals above content. |
| 266 | `            position: relative;` | CSS declaration. |
| 267 | `        }` | CSS selector block ends. |
| 268 | `        ` |  |
| 269 | `        .hero-eyebrow {` | CSS selector block begins. |
| 270 | `            font-size: 0.8rem;` | CSS declaration. |
| 271 | `            text-transform: uppercase;` | CSS declaration. |
| 272 | `            letter-spacing: 0.3em;` | CSS declaration. |
| 273 | `            color: var(--bronze);` | CSS declaration. |
| 274 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 275 | `            display: block;` | CSS declaration. |
| 276 | `            font-weight: 400;` | CSS declaration. |
| 277 | `        }` | CSS selector block ends. |
| 278 | `        ` |  |
| 279 | `        .hero-title {` | CSS selector block begins. |
| 280 | `            margin-bottom: 2rem;` | CSS declaration. |
| 281 | `            font-weight: 300;` | CSS declaration. |
| 282 | `            line-height: 1.05;` | CSS declaration. |
| 283 | `        }` | CSS selector block ends. |
| 284 | `        ` |  |
| 285 | `        .hero-description {` | CSS selector block begins. |
| 286 | `            font-size: 1.2rem;` | CSS declaration. |
| 287 | `            margin-bottom: 3rem;` | CSS declaration. |
| 288 | `            color: #555;` | CSS declaration. |
| 289 | `            font-weight: 300;` | CSS declaration. |
| 290 | `            max-width: 500px;` | CSS declaration. |
| 291 | `            line-height: 1.6;` | CSS declaration. |
| 292 | `        }` | CSS selector block ends. |
| 293 | `        ` |  |
| 294 | `        .hero-buttons {` | Button/CTA element styled as a pill with golden border. |
| 295 | `            display: flex;` | CSS declaration. |
| 296 | `            gap: 1.5rem;` | CSS declaration. |
| 297 | `            flex-wrap: wrap;` | CSS declaration. |
| 298 | `        }` | CSS selector block ends. |
| 299 | `        ` |  |
| 300 | `        .btn {` | Button/CTA element styled as a pill with golden border. |
| 301 | `            display: inline-flex;` | CSS declaration. |
| 302 | `            align-items: center;` | CSS declaration. |
| 303 | `            padding: 1.25rem 2.5rem;` | CSS declaration. |
| 304 | `            text-decoration: none;` | CSS declaration. |
| 305 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 306 | `            font-weight: 400;` | CSS declaration. |
| 307 | `            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 308 | `            border: 1px solid transparent;` | CSS declaration. |
| 309 | `            font-size: 0.95rem;` | CSS declaration. |
| 310 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 311 | `            position: relative;` | CSS declaration. |
| 312 | `            overflow: hidden;` | CSS declaration. |
| 313 | `        }` | CSS selector block ends. |
| 314 | `        ` |  |
| 315 | `        .btn:before {` | Button/CTA element styled as a pill with golden border. |
| 316 | `            content: '';` | CSS declaration. |
| 317 | `            position: absolute;` | CSS declaration. |
| 318 | `            top: 0;` | CSS declaration. |
| 319 | `            left: -100%;` | CSS declaration. |
| 320 | `            width: 100%;` | CSS declaration. |
| 321 | `            height: 100%;` | CSS declaration. |
| 322 | `            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);` | CSS declaration. |
| 323 | `            transition: left 0.6s ease;` | Motion/animation for subtle, premium interactions. |
| 324 | `        }` | CSS selector block ends. |
| 325 | `        ` |  |
| 326 | `        .btn:hover:before {` | Button/CTA element styled as a pill with golden border. |
| 327 | `            left: 100%;` | CSS declaration. |
| 328 | `        }` | CSS selector block ends. |
| 329 | `        ` |  |
| 330 | `        .btn-primary {` | Button/CTA element styled as a pill with golden border. |
| 331 | `            background: var(--charcoal);` | CSS declaration. |
| 332 | `            color: var(--ivory);` | CSS declaration. |
| 333 | `            border-color: var(--charcoal);` | CSS declaration. |
| 334 | `        }` | CSS selector block ends. |
| 335 | `        ` |  |
| 336 | `        .btn-primary:hover {` | Button/CTA element styled as a pill with golden border. |
| 337 | `            background: var(--bronze);` | CSS declaration. |
| 338 | `            color: var(--ivory);` | CSS declaration. |
| 339 | `            border-color: var(--bronze);` | CSS declaration. |
| 340 | `            transform: translateY(-2px);` | CSS declaration. |
| 341 | `        }` | CSS selector block ends. |
| 342 | `        ` |  |
| 343 | `        .btn-secondary {` | Button/CTA element styled as a pill with golden border. |
| 344 | `            background: transparent;` | CSS declaration. |
| 345 | `            color: var(--charcoal);` | CSS declaration. |
| 346 | `            border-color: var(--charcoal);` | CSS declaration. |
| 347 | `        }` | CSS selector block ends. |
| 348 | `        ` |  |
| 349 | `        .btn-secondary:hover {` | Button/CTA element styled as a pill with golden border. |
| 350 | `            background: var(--charcoal);` | CSS declaration. |
| 351 | `            color: var(--ivory);` | CSS declaration. |
| 352 | `            transform: translateY(-2px);` | CSS declaration. |
| 353 | `        }` | CSS selector block ends. |
| 354 | `        ` |  |
| 355 | `        .hero-visual {` | CSS selector block begins. |
| 356 | `            position: absolute;` | CSS declaration. |
| 357 | `            right: 10%;` | CSS declaration. |
| 358 | `            top: 50%;` | CSS declaration. |
| 359 | `            transform: translateY(-50%);` | CSS declaration. |
| 360 | `            width: 45%;` | CSS declaration. |
| 361 | `            height: 70%;` | CSS declaration. |
| 362 | `            z-index: 2;` | Layer stacking control to keep nav/modals above content. |
| 363 | `            border-radius: 2px;` | Rounded corners to soften components for luxury aesthetic. |
| 364 | `            overflow: hidden;` | CSS declaration. |
| 365 | `            box-shadow: 0 25px 50px rgba(0,0,0,0.1);` | Shadow depth for premium, elevated look on cards/components. |
| 366 | `        }` | CSS selector block ends. |
| 367 | `        ` |  |
| 368 | `        .hero-visual img {` | CSS selector block begins. |
| 369 | `            width: 100%;` | CSS declaration. |
| 370 | `            height: 100%;` | CSS declaration. |
| 371 | `            object-fit: cover;` | CSS declaration. |
| 372 | `            transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 373 | `        }` | CSS selector block ends. |
| 374 | `        ` |  |
| 375 | `        .hero:hover .hero-visual img {` | CSS selector block begins. |
| 376 | `            transform: scale(1.03);` | CSS declaration. |
| 377 | `        }` | CSS selector block ends. |
| 378 | `        ` |  |
| 379 | `        /* Enhanced Collections Preview */` | Content/whitespace or standard markup. |
| 380 | `        .collections-preview {` | CSS selector block begins. |
| 381 | `            background: var(--ivory);` | CSS declaration. |
| 382 | `            position: relative;` | CSS declaration. |
| 383 | `        }` | CSS selector block ends. |
| 384 | `        ` |  |
| 385 | `        .section-header {` | CSS selector block begins. |
| 386 | `            text-align: center;` | CSS declaration. |
| 387 | `            margin-bottom: 5rem;` | CSS declaration. |
| 388 | `        }` | CSS selector block ends. |
| 389 | `        ` |  |
| 390 | `        .section-eyebrow {` | CSS selector block begins. |
| 391 | `            font-size: 0.8rem;` | CSS declaration. |
| 392 | `            text-transform: uppercase;` | CSS declaration. |
| 393 | `            letter-spacing: 0.3em;` | CSS declaration. |
| 394 | `            color: var(--bronze);` | CSS declaration. |
| 395 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 396 | `            display: block;` | CSS declaration. |
| 397 | `            font-weight: 400;` | CSS declaration. |
| 398 | `        }` | CSS selector block ends. |
| 399 | `        ` |  |
| 400 | `        .collections-grid {` | CSS selector block begins. |
| 401 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 402 | `            grid-template-columns: repeat(4, 1fr);` | CSS declaration. |
| 403 | `            gap: 2rem;` | CSS declaration. |
| 404 | `        }` | CSS selector block ends. |
| 405 | `        ` |  |
| 406 | `        .collection-card {` | CSS selector block begins. |
| 407 | `            background: var(--ivory);` | CSS declaration. |
| 408 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 409 | `            overflow: hidden;` | CSS declaration. |
| 410 | `            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 411 | `            border: 1px solid var(--stone);` | CSS declaration. |
| 412 | `            position: relative;` | CSS declaration. |
| 413 | `        }` | CSS selector block ends. |
| 414 | `        ` |  |
| 415 | `        .collection-card:before {` | CSS selector block begins. |
| 416 | `            content: '';` | CSS declaration. |
| 417 | `            position: absolute;` | CSS declaration. |
| 418 | `            top: 0;` | CSS declaration. |
| 419 | `            left: 0;` | CSS declaration. |
| 420 | `            width: 100%;` | CSS declaration. |
| 421 | `            height: 100%;` | CSS declaration. |
| 422 | `            background: linear-gradient(135deg, rgba(168, 146, 110, 0.1) 0%, transparent 50%);` | CSS declaration. |
| 423 | `            opacity: 0;` | CSS declaration. |
| 424 | `            transition: opacity 0.4s ease;` | Motion/animation for subtle, premium interactions. |
| 425 | `            z-index: 1;` | Layer stacking control to keep nav/modals above content. |
| 426 | `        }` | CSS selector block ends. |
| 427 | `        ` |  |
| 428 | `        .collection-card:hover {` | CSS selector block begins. |
| 429 | `            transform: translateY(-12px);` | CSS declaration. |
| 430 | `            border-color: var(--bronze);` | CSS declaration. |
| 431 | `            box-shadow: 0 20px 40px rgba(0,0,0,0.08);` | Shadow depth for premium, elevated look on cards/components. |
| 432 | `        }` | CSS selector block ends. |
| 433 | `        ` |  |
| 434 | `        .collection-card:hover:before {` | CSS selector block begins. |
| 435 | `            opacity: 1;` | CSS declaration. |
| 436 | `        }` | CSS selector block ends. |
| 437 | `        ` |  |
| 438 | `        .collection-image {` | CSS selector block begins. |
| 439 | `            height: 280px;` | CSS declaration. |
| 440 | `            overflow: hidden;` | CSS declaration. |
| 441 | `            position: relative;` | CSS declaration. |
| 442 | `        }` | CSS selector block ends. |
| 443 | `        ` |  |
| 444 | `        .collection-image img {` | CSS selector block begins. |
| 445 | `            width: 100%;` | CSS declaration. |
| 446 | `            height: 100%;` | CSS declaration. |
| 447 | `            object-fit: cover;` | CSS declaration. |
| 448 | `            transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 449 | `        }` | CSS selector block ends. |
| 450 | `        ` |  |
| 451 | `        .collection-card:hover .collection-image img {` | CSS selector block begins. |
| 452 | `            transform: scale(1.08);` | CSS declaration. |
| 453 | `        }` | CSS selector block ends. |
| 454 | `        ` |  |
| 455 | `        .collection-content {` | CSS selector block begins. |
| 456 | `            padding: 2rem;` | CSS declaration. |
| 457 | `            position: relative;` | CSS declaration. |
| 458 | `            z-index: 2;` | Layer stacking control to keep nav/modals above content. |
| 459 | `        }` | CSS selector block ends. |
| 460 | `        ` |  |
| 461 | `        .collection-title {` | CSS selector block begins. |
| 462 | `            font-size: 1.3rem;` | CSS declaration. |
| 463 | `            margin-bottom: 0.75rem;` | CSS declaration. |
| 464 | `            font-weight: 400;` | CSS declaration. |
| 465 | `        }` | CSS selector block ends. |
| 466 | `        ` |  |
| 467 | `        .collection-description {` | CSS selector block begins. |
| 468 | `            color: #666;` | CSS declaration. |
| 469 | `            font-size: 0.95rem;` | CSS declaration. |
| 470 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 471 | `            line-height: 1.5;` | CSS declaration. |
| 472 | `            font-weight: 300;` | CSS declaration. |
| 473 | `        }` | CSS selector block ends. |
| 474 | `        ` |  |
| 475 | `        .collection-link {` | CSS selector block begins. |
| 476 | `            color: var(--bronze);` | CSS declaration. |
| 477 | `            text-decoration: none;` | CSS declaration. |
| 478 | `            font-weight: 400;` | CSS declaration. |
| 479 | `            font-size: 0.9rem;` | CSS declaration. |
| 480 | `            display: inline-flex;` | CSS declaration. |
| 481 | `            align-items: center;` | CSS declaration. |
| 482 | `            gap: 0.75rem;` | CSS declaration. |
| 483 | `            transition: gap 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 484 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 485 | `        }` | CSS selector block ends. |
| 486 | `        ` |  |
| 487 | `        .collection-link:hover {` | CSS selector block begins. |
| 488 | `            gap: 1rem;` | CSS declaration. |
| 489 | `        }` | CSS selector block ends. |
| 490 | `        ` |  |
| 491 | `        /* Enhanced Heritage Section */` | Content/whitespace or standard markup. |
| 492 | `        .heritage {` | CSS selector block begins. |
| 493 | `            background: linear-gradient(135deg, var(--linen) 0%, var(--stone) 100%);` | CSS declaration. |
| 494 | `            position: relative;` | CSS declaration. |
| 495 | `            overflow: hidden;` | CSS declaration. |
| 496 | `        }` | CSS selector block ends. |
| 497 | `        ` |  |
| 498 | `        .heritage::before {` | CSS selector block begins. |
| 499 | `            content: '';` | CSS declaration. |
| 500 | `            position: absolute;` | CSS declaration. |
| 501 | `            top: -50%;` | CSS declaration. |
| 502 | `            right: -20%;` | CSS declaration. |
| 503 | `            width: 400px;` | CSS declaration. |
| 504 | `            height: 400px;` | CSS declaration. |
| 505 | `            background: var(--bronze);` | CSS declaration. |
| 506 | `            opacity: 0.03;` | CSS declaration. |
| 507 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 508 | `        }` | CSS selector block ends. |
| 509 | `        ` |  |
| 510 | `        .heritage-content {` | CSS selector block begins. |
| 511 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 512 | `            grid-template-columns: 1fr 1fr;` | CSS declaration. |
| 513 | `            gap: 5rem;` | CSS declaration. |
| 514 | `            align-items: center;` | CSS declaration. |
| 515 | `        }` | CSS selector block ends. |
| 516 | `        ` |  |
| 517 | `        .heritage-text h2 {` | CSS selector block begins. |
| 518 | `            margin-bottom: 2rem;` | CSS declaration. |
| 519 | `        }` | CSS selector block ends. |
| 520 | `        ` |  |
| 521 | `        .heritage-text p {` | CSS selector block begins. |
| 522 | `            margin-bottom: 2rem;` | CSS declaration. |
| 523 | `            font-size: 1.15rem;` | CSS declaration. |
| 524 | `            color: #555;` | CSS declaration. |
| 525 | `            font-weight: 300;` | CSS declaration. |
| 526 | `            line-height: 1.7;` | CSS declaration. |
| 527 | `        }` | CSS selector block ends. |
| 528 | `        ` |  |
| 529 | `        .heritage-stats {` | CSS selector block begins. |
| 530 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 531 | `            grid-template-columns: 1fr 1fr;` | CSS declaration. |
| 532 | `            gap: 2.5rem;` | CSS declaration. |
| 533 | `            margin-top: 3rem;` | CSS declaration. |
| 534 | `        }` | CSS selector block ends. |
| 535 | `        ` |  |
| 536 | `        .stat-item {` | CSS selector block begins. |
| 537 | `            text-align: center;` | CSS declaration. |
| 538 | `        }` | CSS selector block ends. |
| 539 | `        ` |  |
| 540 | `        .stat-number {` | CSS selector block begins. |
| 541 | `            font-size: 3rem;` | CSS declaration. |
| 542 | `            font-weight: 300;` | CSS declaration. |
| 543 | `            color: var(--bronze);` | CSS declaration. |
| 544 | `            display: block;` | CSS declaration. |
| 545 | `            font-family: var(--serif);` | CSS declaration. |
| 546 | `            line-height: 1;` | CSS declaration. |
| 547 | `            margin-bottom: 0.5rem;` | CSS declaration. |
| 548 | `        }` | CSS selector block ends. |
| 549 | `        ` |  |
| 550 | `        .stat-label {` | CSS selector block begins. |
| 551 | `            font-size: 0.85rem;` | CSS declaration. |
| 552 | `            color: #666;` | CSS declaration. |
| 553 | `            text-transform: uppercase;` | CSS declaration. |
| 554 | `            letter-spacing: 0.1em;` | CSS declaration. |
| 555 | `            font-weight: 400;` | CSS declaration. |
| 556 | `        }` | CSS selector block ends. |
| 557 | `        ` |  |
| 558 | `        .heritage-visual {` | CSS selector block begins. |
| 559 | `            position: relative;` | CSS declaration. |
| 560 | `            border-radius: 2px;` | Rounded corners to soften components for luxury aesthetic. |
| 561 | `            overflow: hidden;` | CSS declaration. |
| 562 | `            box-shadow: 0 25px 50px rgba(0,0,0,0.1);` | Shadow depth for premium, elevated look on cards/components. |
| 563 | `        }` | CSS selector block ends. |
| 564 | `        ` |  |
| 565 | `        .heritage-visual img {` | CSS selector block begins. |
| 566 | `            width: 100%;` | CSS declaration. |
| 567 | `            height: 600px;` | CSS declaration. |
| 568 | `            object-fit: cover;` | CSS declaration. |
| 569 | `        }` | CSS selector block ends. |
| 570 | `        ` |  |
| 571 | `        /* Enhanced Services Section */` | Content/whitespace or standard markup. |
| 572 | `        .services-grid {` | CSS selector block begins. |
| 573 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 574 | `            grid-template-columns: repeat(3, 1fr);` | CSS declaration. |
| 575 | `            gap: 2.5rem;` | CSS declaration. |
| 576 | `        }` | CSS selector block ends. |
| 577 | `        ` |  |
| 578 | `        .service-card {` | CSS selector block begins. |
| 579 | `            background: var(--ivory);` | CSS declaration. |
| 580 | `            padding: 3rem 2.5rem;` | CSS declaration. |
| 581 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 582 | `            text-align: center;` | CSS declaration. |
| 583 | `            border: 1px solid var(--stone);` | CSS declaration. |
| 584 | `            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 585 | `            position: relative;` | CSS declaration. |
| 586 | `            overflow: hidden;` | CSS declaration. |
| 587 | `        }` | CSS selector block ends. |
| 588 | `        ` |  |
| 589 | `        .service-card:before {` | CSS selector block begins. |
| 590 | `            content: '';` | CSS declaration. |
| 591 | `            position: absolute;` | CSS declaration. |
| 592 | `            top: 0;` | CSS declaration. |
| 593 | `            left: -100%;` | CSS declaration. |
| 594 | `            width: 100%;` | CSS declaration. |
| 595 | `            height: 2px;` | CSS declaration. |
| 596 | `            background: var(--bronze);` | CSS declaration. |
| 597 | `            transition: left 0.6s ease;` | Motion/animation for subtle, premium interactions. |
| 598 | `        }` | CSS selector block ends. |
| 599 | `        ` |  |
| 600 | `        .service-card:hover {` | CSS selector block begins. |
| 601 | `            transform: translateY(-8px);` | CSS declaration. |
| 602 | `            border-color: var(--bronze);` | CSS declaration. |
| 603 | `            box-shadow: 0 20px 40px rgba(0,0,0,0.08);` | Shadow depth for premium, elevated look on cards/components. |
| 604 | `        }` | CSS selector block ends. |
| 605 | `        ` |  |
| 606 | `        .service-card:hover:before {` | CSS selector block begins. |
| 607 | `            left: 0;` | CSS declaration. |
| 608 | `        }` | CSS selector block ends. |
| 609 | `        ` |  |
| 610 | `        .service-icon {` | CSS selector block begins. |
| 611 | `            width: 70px;` | CSS declaration. |
| 612 | `            height: 70px;` | CSS declaration. |
| 613 | `            background: var(--bronze);` | CSS declaration. |
| 614 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 615 | `            display: flex;` | CSS declaration. |
| 616 | `            align-items: center;` | CSS declaration. |
| 617 | `            justify-content: center;` | CSS declaration. |
| 618 | `            margin: 0 auto 2rem;` | CSS declaration. |
| 619 | `            color: var(--ivory);` | CSS declaration. |
| 620 | `            font-size: 1.75rem;` | CSS declaration. |
| 621 | `            transition: transform 0.4s ease;` | Motion/animation for subtle, premium interactions. |
| 622 | `        }` | CSS selector block ends. |
| 623 | `        ` |  |
| 624 | `        .service-card:hover .service-icon {` | CSS selector block begins. |
| 625 | `            transform: scale(1.1) rotate(5deg);` | CSS declaration. |
| 626 | `        }` | CSS selector block ends. |
| 627 | `        ` |  |
| 628 | `        .service-title {` | CSS selector block begins. |
| 629 | `            margin-bottom: 1.25rem;` | CSS declaration. |
| 630 | `            font-weight: 400;` | CSS declaration. |
| 631 | `        }` | CSS selector block ends. |
| 632 | `        ` |  |
| 633 | `        .service-description {` | CSS selector block begins. |
| 634 | `            color: #666;` | CSS declaration. |
| 635 | `            margin-bottom: 2rem;` | CSS declaration. |
| 636 | `            font-weight: 300;` | CSS declaration. |
| 637 | `            line-height: 1.6;` | CSS declaration. |
| 638 | `        }` | CSS selector block ends. |
| 639 | `        ` |  |
| 640 | `        /* Client Showcase Section */` | Content/whitespace or standard markup. |
| 641 | `        .client-showcase {` | CSS selector block begins. |
| 642 | `            background: var(--ivory);` | CSS declaration. |
| 643 | `            position: relative;` | CSS declaration. |
| 644 | `            overflow: hidden;` | CSS declaration. |
| 645 | `        }` | CSS selector block ends. |
| 646 | `        ` |  |
| 647 | `        .client-showcase::before {` | CSS selector block begins. |
| 648 | `            content: '';` | CSS declaration. |
| 649 | `            position: absolute;` | CSS declaration. |
| 650 | `            top: -30%;` | CSS declaration. |
| 651 | `            left: -10%;` | CSS declaration. |
| 652 | `            width: 300px;` | CSS declaration. |
| 653 | `            height: 300px;` | CSS declaration. |
| 654 | `            background: var(--bronze);` | CSS declaration. |
| 655 | `            opacity: 0.03;` | CSS declaration. |
| 656 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 657 | `        }` | CSS selector block ends. |
| 658 | `        ` |  |
| 659 | `        .client-showcase::after {` | CSS selector block begins. |
| 660 | `            content: '';` | CSS declaration. |
| 661 | `            position: absolute;` | CSS declaration. |
| 662 | `            bottom: -20%;` | CSS declaration. |
| 663 | `            right: -5%;` | CSS declaration. |
| 664 | `            width: 250px;` | CSS declaration. |
| 665 | `            height: 250px;` | CSS declaration. |
| 666 | `            background: var(--sage);` | CSS declaration. |
| 667 | `            opacity: 0.03;` | CSS declaration. |
| 668 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 669 | `        }` | CSS selector block ends. |
| 670 | `        ` |  |
| 671 | `        .clients-grid {` | CSS selector block begins. |
| 672 | `            display: flex;` | CSS declaration. |
| 673 | `            justify-content: center;` | CSS declaration. |
| 674 | `            align-items: center;` | CSS declaration. |
| 675 | `            flex-wrap: wrap;` | CSS declaration. |
| 676 | `            gap: 4rem;` | CSS declaration. |
| 677 | `            max-width: 1000px;` | CSS declaration. |
| 678 | `            margin: 0 auto;` | CSS declaration. |
| 679 | `        }` | CSS selector block ends. |
| 680 | `        ` |  |
| 681 | `        .client-logo {` | CSS selector block begins. |
| 682 | `            height: 80px;` | CSS declaration. |
| 683 | `            display: flex;` | CSS declaration. |
| 684 | `            align-items: center;` | CSS declaration. |
| 685 | `            justify-content: center;` | CSS declaration. |
| 686 | `            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 687 | `            padding: 1rem;` | CSS declaration. |
| 688 | `            filter: grayscale(100%);` | CSS declaration. |
| 689 | `            opacity: 0.7;` | CSS declaration. |
| 690 | `        }` | CSS selector block ends. |
| 691 | `        ` |  |
| 692 | `        .client-logo:hover {` | CSS selector block begins. |
| 693 | `            filter: grayscale(0%);` | CSS declaration. |
| 694 | `            opacity: 1;` | CSS declaration. |
| 695 | `            transform: translateY(-5px);` | CSS declaration. |
| 696 | `        }` | CSS selector block ends. |
| 697 | `        ` |  |
| 698 | `        .client-logo img {` | CSS selector block begins. |
| 699 | `            max-height: 100%;` | CSS declaration. |
| 700 | `            max-width: 160px;` | CSS declaration. |
| 701 | `            object-fit: contain;` | CSS declaration. |
| 702 | `        }` | CSS selector block ends. |
| 703 | `        ` |  |
| 704 | `        /* Enhanced CTA Section */` | Content/whitespace or standard markup. |
| 705 | `        .cta-section {` | CSS selector block begins. |
| 706 | `            background: linear-gradient(135deg, var(--charcoal) 0%, #2a2a2a 100%);` | CSS declaration. |
| 707 | `            color: var(--ivory);` | CSS declaration. |
| 708 | `            text-align: center;` | CSS declaration. |
| 709 | `            position: relative;` | CSS declaration. |
| 710 | `            overflow: hidden;` | CSS declaration. |
| 711 | `        }` | CSS selector block ends. |
| 712 | `        ` |  |
| 713 | `        .cta-section::before {` | CSS selector block begins. |
| 714 | `            content: '';` | CSS declaration. |
| 715 | `            position: absolute;` | CSS declaration. |
| 716 | `            top: -100px;` | CSS declaration. |
| 717 | `            right: -100px;` | CSS declaration. |
| 718 | `            width: 300px;` | CSS declaration. |
| 719 | `            height: 300px;` | CSS declaration. |
| 720 | `            background: var(--bronze);` | CSS declaration. |
| 721 | `            opacity: 0.05;` | CSS declaration. |
| 722 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 723 | `        }` | CSS selector block ends. |
| 724 | `        ` |  |
| 725 | `        .cta-section h2 {` | CSS selector block begins. |
| 726 | `            color: var(--ivory);` | CSS declaration. |
| 727 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 728 | `        }` | CSS selector block ends. |
| 729 | `        ` |  |
| 730 | `        .cta-section p {` | CSS selector block begins. |
| 731 | `            font-size: 1.2rem;` | CSS declaration. |
| 732 | `            margin-bottom: 3rem;` | CSS declaration. |
| 733 | `            opacity: 0.9;` | CSS declaration. |
| 734 | `            max-width: 600px;` | CSS declaration. |
| 735 | `            margin-left: auto;` | CSS declaration. |
| 736 | `            margin-right: auto;` | CSS declaration. |
| 737 | `            font-weight: 300;` | CSS declaration. |
| 738 | `            line-height: 1.6;` | CSS declaration. |
| 739 | `        }` | CSS selector block ends. |
| 740 | `        ` |  |
| 741 | `        .btn-light {` | Button/CTA element styled as a pill with golden border. |
| 742 | `            background: var(--ivory);` | CSS declaration. |
| 743 | `            color: var(--charcoal);` | CSS declaration. |
| 744 | `            border-color: var(--ivory);` | CSS declaration. |
| 745 | `        }` | CSS selector block ends. |
| 746 | `        ` |  |
| 747 | `        .btn-light:hover {` | Button/CTA element styled as a pill with golden border. |
| 748 | `            background: var(--bronze);` | CSS declaration. |
| 749 | `            color: var(--ivory);` | CSS declaration. |
| 750 | `            border-color: var(--bronze);` | CSS declaration. |
| 751 | `        }` | CSS selector block ends. |
| 752 | `        ` |  |
| 753 | `        /* Enhanced Footer */` | Content/whitespace or standard markup. |
| 754 | `        footer {` | CSS selector block begins. |
| 755 | `            background: var(--charcoal);` | CSS declaration. |
| 756 | `            color: var(--ivory);` | CSS declaration. |
| 757 | `            padding: 6rem 0 2rem;` | CSS declaration. |
| 758 | `            position: relative;` | CSS declaration. |
| 759 | `        }` | CSS selector block ends. |
| 760 | `        ` |  |
| 761 | `        footer::before {` | CSS selector block begins. |
| 762 | `            content: '';` | CSS declaration. |
| 763 | `            position: absolute;` | CSS declaration. |
| 764 | `            top: 0;` | CSS declaration. |
| 765 | `            left: 0;` | CSS declaration. |
| 766 | `            width: 100%;` | CSS declaration. |
| 767 | `            height: 1px;` | CSS declaration. |
| 768 | `            background: linear-gradient(90deg, transparent, var(--bronze), transparent);` | CSS declaration. |
| 769 | `        }` | CSS selector block ends. |
| 770 | `        ` |  |
| 771 | `        .footer-content {` | CSS selector block begins. |
| 772 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 773 | `            grid-template-columns: 2fr 1fr 1fr;` | CSS declaration. |
| 774 | `            gap: 3rem;` | CSS declaration. |
| 775 | `            margin-bottom: 3rem;` | CSS declaration. |
| 776 | `        }` | CSS selector block ends. |
| 777 | `        ` |  |
| 778 | `        .footer-brand {` | CSS selector block begins. |
| 779 | `            display: flex;` | CSS declaration. |
| 780 | `            flex-direction: column;` | CSS declaration. |
| 781 | `        }` | CSS selector block ends. |
| 782 | `        ` |  |
| 783 | `        .footer-logo {` | CSS selector block begins. |
| 784 | `            display: flex;` | CSS declaration. |
| 785 | `            align-items: center;` | CSS declaration. |
| 786 | `            gap: 14px;` | CSS declaration. |
| 787 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 788 | `        }` | CSS selector block ends. |
| 789 | `        ` |  |
| 790 | `        .footer-description {` | CSS selector block begins. |
| 791 | `            opacity: 0.7;` | CSS declaration. |
| 792 | `            line-height: 1.6;` | CSS declaration. |
| 793 | `            margin-bottom: 2rem;` | CSS declaration. |
| 794 | `            font-weight: 300;` | CSS declaration. |
| 795 | `            max-width: 400px;` | CSS declaration. |
| 796 | `        }` | CSS selector block ends. |
| 797 | `        ` |  |
| 798 | `        .footer-heading {` | CSS selector block begins. |
| 799 | `            font-size: 1.1rem;` | CSS declaration. |
| 800 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 801 | `            color: var(--ivory);` | CSS declaration. |
| 802 | `            font-weight: 400;` | CSS declaration. |
| 803 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 804 | `        }` | CSS selector block ends. |
| 805 | `        ` |  |
| 806 | `        .footer-links {` | CSS selector block begins. |
| 807 | `            list-style: none;` | CSS declaration. |
| 808 | `        }` | CSS selector block ends. |
| 809 | `        ` |  |
| 810 | `        .footer-links li {` | CSS selector block begins. |
| 811 | `            margin-bottom: 0.75rem;` | CSS declaration. |
| 812 | `        }` | CSS selector block ends. |
| 813 | `        ` |  |
| 814 | `        .footer-links a {` | CSS selector block begins. |
| 815 | `            color: rgba(253, 252, 248, 0.7);` | CSS declaration. |
| 816 | `            text-decoration: none;` | CSS declaration. |
| 817 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 818 | `            font-weight: 300;` | CSS declaration. |
| 819 | `            letter-spacing: 0.01em;` | CSS declaration. |
| 820 | `            font-size: 0.95rem;` | CSS declaration. |
| 821 | `        }` | CSS selector block ends. |
| 822 | `        ` |  |
| 823 | `        .footer-links a:hover {` | CSS selector block begins. |
| 824 | `            color: var(--bronze);` | CSS declaration. |
| 825 | `        }` | CSS selector block ends. |
| 826 | `        ` |  |
| 827 | `        .footer-contact {` | CSS selector block begins. |
| 828 | `            display: flex;` | CSS declaration. |
| 829 | `            flex-direction: column;` | CSS declaration. |
| 830 | `            gap: 1rem;` | CSS declaration. |
| 831 | `        }` | CSS selector block ends. |
| 832 | `        ` |  |
| 833 | `        .contact-item {` | CSS selector block begins. |
| 834 | `            display: flex;` | CSS declaration. |
| 835 | `            align-items: flex-start;` | CSS declaration. |
| 836 | `            gap: 0.75rem;` | CSS declaration. |
| 837 | `            color: rgba(253, 252, 248, 0.7);` | CSS declaration. |
| 838 | `            font-size: 0.95rem;` | CSS declaration. |
| 839 | `        }` | CSS selector block ends. |
| 840 | `        ` |  |
| 841 | `        .contact-item strong {` | CSS selector block begins. |
| 842 | `            color: var(--ivory);` | CSS declaration. |
| 843 | `            font-weight: 500;` | CSS declaration. |
| 844 | `        }` | CSS selector block ends. |
| 845 | `        ` |  |
| 846 | `        .footer-bottom {` | CSS selector block begins. |
| 847 | `            border-top: 1px solid rgba(253, 252, 248, 0.1);` | CSS declaration. |
| 848 | `            padding-top: 2rem;` | CSS declaration. |
| 849 | `            text-align: center;` | CSS declaration. |
| 850 | `            opacity: 0.6;` | CSS declaration. |
| 851 | `            font-size: 0.9rem;` | CSS declaration. |
| 852 | `            font-weight: 300;` | CSS declaration. |
| 853 | `        }` | CSS selector block ends. |
| 854 | `        ` |  |
| 855 | `        /* Enhanced Animations */` | Content/whitespace or standard markup. |
| 856 | `        .fade-in {` | CSS selector block begins. |
| 857 | `            opacity: 0;` | CSS declaration. |
| 858 | `            transform: translateY(40px);` | CSS declaration. |
| 859 | `            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 860 | `        }` | CSS selector block ends. |
| 861 | `        ` |  |
| 862 | `        .fade-in.visible {` | CSS selector block begins. |
| 863 | `            opacity: 1;` | CSS declaration. |
| 864 | `            transform: translateY(0);` | CSS declaration. |
| 865 | `        }` | CSS selector block ends. |
| 866 | `        ` |  |
| 867 | `        /* Enhanced Responsive Design */` | Content/whitespace or standard markup. |
| 868 | `        @media (max-width: 1200px) {` | Responsive breakpoint adjusting layout for smaller screens. |
| 869 | `            .collections-grid {` | CSS selector block begins. |
| 870 | `                grid-template-columns: repeat(2, 1fr);` | CSS declaration. |
| 871 | `            }` | CSS selector block ends. |
| 872 | `            ` |  |
| 873 | `            .services-grid {` | CSS selector block begins. |
| 874 | `                grid-template-columns: repeat(2, 1fr);` | CSS declaration. |
| 875 | `            }` | CSS selector block ends. |
| 876 | `            ` |  |
| 877 | `            .clients-grid {` | CSS selector block begins. |
| 878 | `                gap: 3rem;` | CSS declaration. |
| 879 | `            }` | CSS selector block ends. |
| 880 | `            ` |  |
| 881 | `            .footer-content {` | CSS selector block begins. |
| 882 | `                grid-template-columns: 1fr 1fr;` | CSS declaration. |
| 883 | `            }` | CSS selector block ends. |
| 884 | `            ` |  |
| 885 | `            .hero::before {` | CSS selector block begins. |
| 886 | `                width: 50%;` | CSS declaration. |
| 887 | `            }` | CSS selector block ends. |
| 888 | `            ` |  |
| 889 | `            .hero-visual {` | CSS selector block begins. |
| 890 | `                width: 40%;` | CSS declaration. |
| 891 | `            }` | CSS selector block ends. |
| 892 | `        }` | CSS selector block ends. |
| 893 | `        ` |  |
| 894 | `        @media (max-width: 768px) {` | Responsive breakpoint adjusting layout for smaller screens. |
| 895 | `            nav.desktop {` | CSS selector block begins. |
| 896 | `                display: none;` | CSS declaration. |
| 897 | `            }` | CSS selector block ends. |
| 898 | `            ` |  |
| 899 | `            .mobile-toggle {` | CSS selector block begins. |
| 900 | `                display: block;` | CSS declaration. |
| 901 | `            }` | CSS selector block ends. |
| 902 | `            ` |  |
| 903 | `            nav.mobile {` | CSS selector block begins. |
| 904 | `                display: block;` | CSS declaration. |
| 905 | `            }` | CSS selector block ends. |
| 906 | `            ` |  |
| 907 | `            .hero-content {` | CSS selector block begins. |
| 908 | `                text-align: center;` | CSS declaration. |
| 909 | `                max-width: none;` | CSS declaration. |
| 910 | `            }` | CSS selector block ends. |
| 911 | `            ` |  |
| 912 | `            .hero::before {` | CSS selector block begins. |
| 913 | `                display: none;` | CSS declaration. |
| 914 | `            }` | CSS selector block ends. |
| 915 | `            ` |  |
| 916 | `            .hero-visual {` | CSS selector block begins. |
| 917 | `                display: none;` | CSS declaration. |
| 918 | `            }` | CSS selector block ends. |
| 919 | `            ` |  |
| 920 | `            .heritage-content {` | CSS selector block begins. |
| 921 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 922 | `                gap: 3rem;` | CSS declaration. |
| 923 | `            }` | CSS selector block ends. |
| 924 | `            ` |  |
| 925 | `            .services-grid {` | CSS selector block begins. |
| 926 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 927 | `            }` | CSS selector block ends. |
| 928 | `            ` |  |
| 929 | `            .collections-grid {` | CSS selector block begins. |
| 930 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 931 | `            }` | CSS selector block ends. |
| 932 | `            ` |  |
| 933 | `            .clients-grid {` | CSS selector block begins. |
| 934 | `                gap: 2rem;` | CSS declaration. |
| 935 | `            }` | CSS selector block ends. |
| 936 | `            ` |  |
| 937 | `            .client-logo {` | CSS selector block begins. |
| 938 | `                height: 60px;` | CSS declaration. |
| 939 | `            }` | CSS selector block ends. |
| 940 | `            ` |  |
| 941 | `            .footer-content {` | CSS selector block begins. |
| 942 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 943 | `                gap: 2rem;` | CSS declaration. |
| 944 | `            }` | CSS selector block ends. |
| 945 | `            ` |  |
| 946 | `            .hero-buttons {` | Button/CTA element styled as a pill with golden border. |
| 947 | `                justify-content: center;` | CSS declaration. |
| 948 | `            }` | CSS selector block ends. |
| 949 | `            ` |  |
| 950 | `            .heritage-stats {` | CSS selector block begins. |
| 951 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 952 | `                gap: 2rem;` | CSS declaration. |
| 953 | `            }` | CSS selector block ends. |
| 954 | `            ` |  |
| 955 | `            .footer-brand {` | CSS selector block begins. |
| 956 | `                text-align: center;` | CSS declaration. |
| 957 | `                align-items: center;` | CSS declaration. |
| 958 | `            }` | CSS selector block ends. |
| 959 | `        }` | CSS selector block ends. |
| 960 | `        ` |  |
| 961 | `        @media (max-width: 480px) {` | Responsive breakpoint adjusting layout for smaller screens. |
| 962 | `            .btn {` | Button/CTA element styled as a pill with golden border. |
| 963 | `                padding: 1rem 2rem;` | CSS declaration. |
| 964 | `                width: 100%;` | CSS declaration. |
| 965 | `                justify-content: center;` | CSS declaration. |
| 966 | `            }` | CSS selector block ends. |
| 967 | `            ` |  |
| 968 | `            .hero-buttons {` | Button/CTA element styled as a pill with golden border. |
| 969 | `                flex-direction: column;` | CSS declaration. |
| 970 | `            }` | CSS selector block ends. |
| 971 | `            ` |  |
| 972 | `            .service-card {` | CSS selector block begins. |
| 973 | `                padding: 2rem 1.5rem;` | CSS declaration. |
| 974 | `            }` | CSS selector block ends. |
| 975 | `            ` |  |
| 976 | `            .collection-content {` | CSS selector block begins. |
| 977 | `                padding: 1.5rem;` | CSS declaration. |
| 978 | `            }` | CSS selector block ends. |
| 979 | `            ` |  |
| 980 | `            .clients-grid {` | CSS selector block begins. |
| 981 | `                gap: 1.5rem;` | CSS declaration. |
| 982 | `            }` | CSS selector block ends. |
| 983 | `            ` |  |
| 984 | `            .client-logo {` | CSS selector block begins. |
| 985 | `                height: 50px;` | CSS declaration. |
| 986 | `            }` | CSS selector block ends. |
| 987 | `        }` | CSS selector block ends. |
| 988 | `    </style>` | Inline CSS block ends. |
| 989 | `` |  |
| 990 | `` |  |
| 991 | `` |  |
| 992 | `    <!-- Header -->` | Structural/semantic HTML element. |
| 993 | `    <header>` | Document head starts; metadata, fonts and styles live here. |
| 994 | `        <div class="container header-container">` | Structural/semantic HTML element. |
| 995 | `            <a href="/home" class="logo">` | Structural/semantic HTML element. |
| 996 | `                <div class="logo-icon">SL</div>` | Structural/semantic HTML element. |
| 997 | `                <div class="logo-text">Secret Linen</div>` | Structural/semantic HTML element. |
| 998 | `            </a>` | Structural/semantic HTML element. |
| 999 | `            ` |  |
| 1000 | `            <!-- Desktop Navigation -->` | Structural/semantic HTML element. |
| 1001 | `            <nav class="desktop">` | Navigation container (desktop/mobile menus, links). |
| 1002 | `                <ul>` | Structural/semantic HTML element. |
| 1003 | `                    <li><a href="/home" class="active">Home</a></li>` | Structural/semantic HTML element. |
| 1004 | `                    <li><a href="/collections">Collections</a></li>` | Structural/semantic HTML element. |
| 1005 | `                    <li><a href="/services">Services</a></li>` | Structural/semantic HTML element. |
| 1006 | `                    <li><a href="/about">About</a></li>` | Structural/semantic HTML element. |
| 1007 | `                    <li><a href="/about#contact">Contact</a></li>` | Structural/semantic HTML element. |
| 1008 | `                </ul>` | Structural/semantic HTML element. |
| 1009 | `            </nav>` | Structural/semantic HTML element. |
| 1010 | `            ` |  |
| 1011 | `            <!-- Mobile Toggle -->` | Structural/semantic HTML element. |
| 1012 | `            <button class="mobile-toggle">☰</button>` | Button/CTA element styled as a pill with golden border. |
| 1013 | `            ` |  |
| 1014 | `            <!-- Mobile Navigation -->` | Structural/semantic HTML element. |
| 1015 | `            <nav class="mobile">` | Navigation container (desktop/mobile menus, links). |
| 1016 | `                <ul>` | Structural/semantic HTML element. |
| 1017 | `                    <li><a href="/home" class="active">Home</a></li>` | Structural/semantic HTML element. |
| 1018 | `                    <li><a href="/collections">Collections</a></li>` | Structural/semantic HTML element. |
| 1019 | `                    <li><a href="/services">Services</a></li>` | Structural/semantic HTML element. |
| 1020 | `                    <li><a href="/about">About</a></li>` | Structural/semantic HTML element. |
| 1021 | `                    <li><a href="/about#contact">Contact</a></li>` | Structural/semantic HTML element. |
| 1022 | `                </ul>` | Structural/semantic HTML element. |
| 1023 | `            </nav>` | Structural/semantic HTML element. |
| 1024 | `        </div>` | Structural/semantic HTML element. |
| 1025 | `    </header>` | Structural/semantic HTML element. |
| 1026 | `` |  |
| 1027 | `    <!-- Hero Section -->` | Structural/semantic HTML element. |
| 1028 | `    <section class="hero">` | Hero section: first impression area (headline/cta/media). |
| 1029 | `        <div class="container">` | Structural/semantic HTML element. |
| 1030 | `            <div class="hero-content">` | Hero section: first impression area (headline/cta/media). |
| 1031 | `                <span class="hero-eyebrow">Since 2024</span>` | Hero section: first impression area (headline/cta/media). |
| 1032 | `                <h1 class="hero-title">Quiet Luxury, Woven into Life</h1>` | Hero section: first impression area (headline/cta/media). |
| 1033 | `                <p class="hero-description">` | Hero section: first impression area (headline/cta/media). |
| 1034 | `                    For over years, Secret Linen has crafted exceptional textiles that transform spaces into sanctuaries of comfort and timeless elegance.` | Content/whitespace or standard markup. |
| 1035 | `                </p>` | Structural/semantic HTML element. |
| 1036 | `                <div class="hero-buttons">` | Hero section: first impression area (headline/cta/media). |
| 1037 | `                    <a href="/collections" class="btn btn-primary">Explore Collections</a>` | Button/CTA element styled as a pill with golden border. |
| 1038 | `                    <a href="/services" class="btn btn-secondary">Our Services</a>` | Button/CTA element styled as a pill with golden border. |
| 1039 | `                </div>` | Structural/semantic HTML element. |
| 1040 | `            </div>` | Structural/semantic HTML element. |
| 1041 | `        </div>` | Structural/semantic HTML element. |
| 1042 | `        <div class="hero-visual">` | Hero section: first impression area (headline/cta/media). |
| 1043 | `            <img src="/files/Linen bedroom.jpg" alt="Luxury linen bedroom">` | Image element; ensure alt text for accessibility. |
| 1044 | `        </div>` | Structural/semantic HTML element. |
| 1045 | `    </section>` | Structural/semantic HTML element. |
| 1046 | `` |  |
| 1047 | `    <!-- Collections Preview -->` | Structural/semantic HTML element. |
| 1048 | `    <section class="section collections-preview">` | Semantic section block improving structure and SEO. |
| 1049 | `        <div class="container">` | Structural/semantic HTML element. |
| 1050 | `            <div class="section-header">` | Structural/semantic HTML element. |
| 1051 | `                <span class="section-eyebrow">Our Collections</span>` | Structural/semantic HTML element. |
| 1052 | `                <h2>Crafted for Every Space</h2>` | Secondary section heading. |
| 1053 | `                <p>Premium textiles designed for hospitality and refined living</p>` | Paragraph text / supporting copy. |
| 1054 | `            </div>` | Structural/semantic HTML element. |
| 1055 | `            ` |  |
| 1056 | `            <div class="collections-grid">` | Grid layout container for responsive card/gallery alignment. |
| 1057 | `                <div class="collection-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1058 | `                    <div class="collection-image">` | Structural/semantic HTML element. |
| 1059 | `                        <img src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=600&q=80" alt="Hotel Collection">` | Image element; ensure alt text for accessibility. |
| 1060 | `                    </div>` | Structural/semantic HTML element. |
| 1061 | `                    <div class="collection-content">` | Structural/semantic HTML element. |
| 1062 | `                        <h3 class="collection-title">Hotels</h3>` | Structural/semantic HTML element. |
| 1063 | `                        <p class="collection-description">Luxury bedding and bath collections for premium hospitality experiences</p>` | Paragraph text / supporting copy. |
| 1064 | `                        <a href="/collections#hotels" class="collection-link">Discover →</a>` | Structural/semantic HTML element. |
| 1065 | `                    </div>` | Structural/semantic HTML element. |
| 1066 | `                </div>` | Structural/semantic HTML element. |
| 1067 | `                ` |  |
| 1068 | `                <div class="collection-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1069 | `                    <div class="collection-image">` | Structural/semantic HTML element. |
| 1070 | `                        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" alt="Hospital Collection">` | Image element; ensure alt text for accessibility. |
| 1071 | `                    </div>` | Structural/semantic HTML element. |
| 1072 | `                    <div class="collection-content">` | Structural/semantic HTML element. |
| 1073 | `                        <h3 class="collection-title">Hospitals</h3>` | Structural/semantic HTML element. |
| 1074 | `                        <p class="collection-description">Medical-grade textiles with anti-microbial properties</p>` | Paragraph text / supporting copy. |
| 1075 | `                        <a href="/collections#hospitals" class="collection-link">Discover →</a>` | Structural/semantic HTML element. |
| 1076 | `                    </div>` | Structural/semantic HTML element. |
| 1077 | `                </div>` | Structural/semantic HTML element. |
| 1078 | `                ` |  |
| 1079 | `                <div class="collection-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1080 | `                    <div class="collection-image">` | Structural/semantic HTML element. |
| 1081 | `                        <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80" alt="Spa Collection">` | Image element; ensure alt text for accessibility. |
| 1082 | `                    </div>` | Structural/semantic HTML element. |
| 1083 | `                    <div class="collection-content">` | Structural/semantic HTML element. |
| 1084 | `                        <h3 class="collection-title">Spas</h3>` | Structural/semantic HTML element. |
| 1085 | `                        <p class="collection-description">Plush towels and robes for ultimate wellness experiences</p>` | Paragraph text / supporting copy. |
| 1086 | `                        <a href="/collections#spas" class="collection-link">Discover →</a>` | Structural/semantic HTML element. |
| 1087 | `                    </div>` | Structural/semantic HTML element. |
| 1088 | `                </div>` | Structural/semantic HTML element. |
| 1089 | `                ` |  |
| 1090 | `                <div class="collection-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1091 | `                    <div class="collection-image">` | Structural/semantic HTML element. |
| 1092 | `                        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80" alt="Salon Collection">` | Image element; ensure alt text for accessibility. |
| 1093 | `                    </div>` | Structural/semantic HTML element. |
| 1094 | `                    <div class="collection-content">` | Structural/semantic HTML element. |
| 1095 | `                        <h3 class="collection-title">Salons</h3>` | Structural/semantic HTML element. |
| 1096 | `                        <p class="collection-description">Durable, bleach-safe textiles for professional beauty spaces</p>` | Paragraph text / supporting copy. |
| 1097 | `                        <a href="/collections#salons" class="collection-link">Discover →</a>` | Structural/semantic HTML element. |
| 1098 | `                    </div>` | Structural/semantic HTML element. |
| 1099 | `                </div>` | Structural/semantic HTML element. |
| 1100 | `            </div>` | Structural/semantic HTML element. |
| 1101 | `        </div>` | Structural/semantic HTML element. |
| 1102 | `    </section>` | Structural/semantic HTML element. |
| 1103 | `` |  |
| 1104 | `    <!-- Heritage Section -->` | Structural/semantic HTML element. |
| 1105 | `    <section class="section heritage">` | Semantic section block improving structure and SEO. |
| 1106 | `        <div class="container">` | Structural/semantic HTML element. |
| 1107 | `            <div class="heritage-content">` | Structural/semantic HTML element. |
| 1108 | `                <div class="heritage-text">` | Structural/semantic HTML element. |
| 1109 | `                    <span class="section-eyebrow">Our Heritage</span>` | Structural/semantic HTML element. |
| 1110 | `                    <h2>A Legacy Woven with Care</h2>` | Secondary section heading. |
| 1111 | `                    <p>Started in 2024, Secret Linen began as a small family workshop dedicated to the art of textile craftsmanship. Today, we continue that tradition with the same commitment to quality and attention to detail.</p>` | Paragraph text / supporting copy. |
| 1112 | `                    <p>Our years of expertise allows us to create textiles that not only meet the highest standards of luxury but also stand the test of time.</p>` | Paragraph text / supporting copy. |
| 1113 | `                    ` |  |
| 1114 | `                    <div class="heritage-stats">` | Structural/semantic HTML element. |
| 1115 | `                        <div class="stat-item">` | Structural/semantic HTML element. |
| 1116 | `                            <span class="stat-number">2+</span>` | Structural/semantic HTML element. |
| 1117 | `                            <span class="stat-label">Years Experience</span>` | Structural/semantic HTML element. |
| 1118 | `                        </div>` | Structural/semantic HTML element. |
| 1119 | `                        <div class="stat-item">` | Structural/semantic HTML element. |
| 1120 | `                            <span class="stat-number">9+</span>` | Structural/semantic HTML element. |
| 1121 | `                            <span class="stat-label">Happy Clients</span>` | Structural/semantic HTML element. |
| 1122 | `                        </div>` | Structural/semantic HTML element. |
| 1123 | `                        <div class="stat-item">` | Structural/semantic HTML element. |
| 1124 | `                            <span class="stat-number">4+</span>` | Structural/semantic HTML element. |
| 1125 | `                            <span class="stat-label">Hotel Partners</span>` | Structural/semantic HTML element. |
| 1126 | `                        </div>` | Structural/semantic HTML element. |
| 1127 | `                        <div class="stat-item">` | Structural/semantic HTML element. |
| 1128 | `                            <span class="stat-number">100%</span>` | Structural/semantic HTML element. |
| 1129 | `                            <span class="stat-label">Natural Fibers</span>` | Structural/semantic HTML element. |
| 1130 | `                        </div>` | Structural/semantic HTML element. |
| 1131 | `                    </div>` | Structural/semantic HTML element. |
| 1132 | `                </div>` | Structural/semantic HTML element. |
| 1133 | `                ` |  |
| 1134 | `                <div class="heritage-visual fade-in">` | Structural/semantic HTML element. |
| 1135 | `                    <img src="/files/Linen Craft.jpg" alt="Craftsmanship">` | Image element; ensure alt text for accessibility. |
| 1136 | `                </div>` | Structural/semantic HTML element. |
| 1137 | `            </div>` | Structural/semantic HTML element. |
| 1138 | `        </div>` | Structural/semantic HTML element. |
| 1139 | `    </section>` | Structural/semantic HTML element. |
| 1140 | `` |  |
| 1141 | `    <!-- Services Section -->` | Structural/semantic HTML element. |
| 1142 | `    <section class="section">` | Semantic section block improving structure and SEO. |
| 1143 | `        <div class="container">` | Structural/semantic HTML element. |
| 1144 | `            <div class="section-header">` | Structural/semantic HTML element. |
| 1145 | `                <span class="section-eyebrow">Our Services</span>` | Structural/semantic HTML element. |
| 1146 | `                <h2>Bespoke Solutions</h2>` | Secondary section heading. |
| 1147 | `                <p>Tailored programs for hospitality and corporate clients</p>` | Paragraph text / supporting copy. |
| 1148 | `            </div>` | Structural/semantic HTML element. |
| 1149 | `            ` |  |
| 1150 | `            <div class="services-grid">` | Grid layout container for responsive card/gallery alignment. |
| 1151 | `                <div class="service-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1152 | `                    <div class="service-icon">🎁</div>` | Structural/semantic HTML element. |
| 1153 | `                    <h3 class="service-title">Corporate Gifting</h3>` | Structural/semantic HTML element. |
| 1154 | `                    <p class="service-description">Elevate every gesture with timeless luxury linens and custom packaging</p>` | Paragraph text / supporting copy. |
| 1155 | `                    <a href="/services#gifting" class="collection-link">Learn More →</a>` | Structural/semantic HTML element. |
| 1156 | `                </div>` | Structural/semantic HTML element. |
| 1157 | `                ` |  |
| 1158 | `                <div class="service-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1159 | `                    <div class="service-icon">🏨</div>` | Structural/semantic HTML element. |
| 1160 | `                    <h3 class="service-title">Hospitality Partnerships</h3>` | Structural/semantic HTML element. |
| 1161 | `                    <p class="service-description">End-to-end linen programs for hotels, resorts, and luxury accommodations</p>` | Paragraph text / supporting copy. |
| 1162 | `                    <a href="/services#hospitality" class="collection-link">Learn More →</a>` | Structural/semantic HTML element. |
| 1163 | `                </div>` | Structural/semantic HTML element. |
| 1164 | `                ` |  |
| 1165 | `                <div class="service-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1166 | `                    <div class="service-icon">✂️</div>` | Structural/semantic HTML element. |
| 1167 | `                    <h3 class="service-title">Customization</h3>` | Structural/semantic HTML element. |
| 1168 | `                    <p class="service-description">Bespoke designs, embroidery, and custom sizing for unique requirements</p>` | Paragraph text / supporting copy. |
| 1169 | `                    <a href="/services#customization" class="collection-link">Learn More →</a>` | Structural/semantic HTML element. |
| 1170 | `                </div>` | Structural/semantic HTML element. |
| 1171 | `            </div>` | Structural/semantic HTML element. |
| 1172 | `        </div>` | Structural/semantic HTML element. |
| 1173 | `    </section>` | Structural/semantic HTML element. |
| 1174 | `` |  |
| 1175 | `    <!-- Client Showcase Section -->` | Structural/semantic HTML element. |
| 1176 | `    <section class="section client-showcase">` | Semantic section block improving structure and SEO. |
| 1177 | `        <div class="container">` | Structural/semantic HTML element. |
| 1178 | `            <div class="section-header">` | Structural/semantic HTML element. |
| 1179 | `                <span class="section-eyebrow">Our Clients</span>` | Structural/semantic HTML element. |
| 1180 | `                <h2>Trusted by Industry Leaders</h2>` | Secondary section heading. |
| 1181 | `                <p>We're proud to partner with exceptional establishments that value quality and craftsmanship</p>` | Paragraph text / supporting copy. |
| 1182 | `            </div>` | Structural/semantic HTML element. |
| 1183 | `            ` |  |
| 1184 | `            <div class="clients-grid">` | Grid layout container for responsive card/gallery alignment. |
| 1185 | `                <div class="client-logo fade-in">` | Structural/semantic HTML element. |
| 1186 | `                    <img src="https://via.placeholder.com/160x80/e8e2d6/1a1a1a?text=Grand+Hotel" alt="Grand Hotel">` | Image element; ensure alt text for accessibility. |
| 1187 | `                </div>` | Structural/semantic HTML element. |
| 1188 | `                ` |  |
| 1189 | `                <div class="client-logo fade-in">` | Structural/semantic HTML element. |
| 1190 | `                    <img src="https://via.placeholder.com/160x80/e8e2d6/1a1a1a?text=Serenity+Spas" alt="Serenity Spas">` | Image element; ensure alt text for accessibility. |
| 1191 | `                </div>` | Structural/semantic HTML element. |
| 1192 | `                ` |  |
| 1193 | `                <div class="client-logo fade-in">` | Structural/semantic HTML element. |
| 1194 | `                    <img src="https://via.placeholder.com/160x80/e8e2d6/1a1a1a?text=MediCare+Hospital" alt="MediCare Hospital">` | Image element; ensure alt text for accessibility. |
| 1195 | `                </div>` | Structural/semantic HTML element. |
| 1196 | `                ` |  |
| 1197 | `                <div class="client-logo fade-in">` | Structural/semantic HTML element. |
| 1198 | `                    <img src="https://via.placeholder.com/160x80/e8e2d6/1a1a1a?text=Elite+Salons" alt="Elite Salons">` | Image element; ensure alt text for accessibility. |
| 1199 | `                </div>` | Structural/semantic HTML element. |
| 1200 | `            </div>` | Structural/semantic HTML element. |
| 1201 | `        </div>` | Structural/semantic HTML element. |
| 1202 | `    </section>` | Structural/semantic HTML element. |
| 1203 | `` |  |
| 1204 | `    <!-- CTA Section -->` | Structural/semantic HTML element. |
| 1205 | `    <section class="section cta-section">` | Semantic section block improving structure and SEO. |
| 1206 | `        <div class="container">` | Structural/semantic HTML element. |
| 1207 | `            <h2>Ready to Transform Your Space?</h2>` | Secondary section heading. |
| 1208 | `            <p>Schedule a consultation with our textile experts and discover how Secret Linen can elevate your hospitality experience or create the perfect bespoke solution for your needs.</p>` | Paragraph text / supporting copy. |
| 1209 | `            <a href="/about#contact" class="btn btn-light">Get In Touch</a>` | Button/CTA element styled as a pill with golden border. |
| 1210 | `        </div>` | Structural/semantic HTML element. |
| 1211 | `    </section>` | Structural/semantic HTML element. |
| 1212 | `` |  |
| 1213 | `    <!-- Footer -->` | Structural/semantic HTML element. |
| 1214 | `    <footer>` | Footer area with info/links, consistent across pages. |
| 1215 | `        <div class="container">` | Structural/semantic HTML element. |
| 1216 | `            <div class="footer-content">` | Footer area with info/links, consistent across pages. |
| 1217 | `                <div class="footer-brand">` | Footer area with info/links, consistent across pages. |
| 1218 | `                    <div class="footer-logo">` | Footer area with info/links, consistent across pages. |
| 1219 | `                        <div class="logo-icon">SL</div>` | Structural/semantic HTML element. |
| 1220 | `                        <div class="logo-text">Secret Linen</div>` | Structural/semantic HTML element. |
| 1221 | `                    </div>` | Structural/semantic HTML element. |
| 1222 | `                    <p class="footer-description">` | Footer area with info/links, consistent across pages. |
| 1223 | `                        Years of crafting exceptional textiles for hospitality and refined living. Quiet luxury, woven into life.` | Content/whitespace or standard markup. |
| 1224 | `                    </p>` | Structural/semantic HTML element. |
| 1225 | `                </div>` | Structural/semantic HTML element. |
| 1226 | `                ` |  |
| 1227 | `                <div>` | Structural/semantic HTML element. |
| 1228 | `                    <h4 class="footer-heading">Quick Links</h4>` | Footer area with info/links, consistent across pages. |
| 1229 | `                    <ul class="footer-links">` | Footer area with info/links, consistent across pages. |
| 1230 | `                        <li><a href="/collections">Collections</a></li>` | Structural/semantic HTML element. |
| 1231 | `                        <li><a href="/services">Services</a></li>` | Structural/semantic HTML element. |
| 1232 | `                        <li><a href="/about">Our Story</a></li>` | Structural/semantic HTML element. |
| 1233 | `                        <li><a href="/about#contact">Contact</a></li>` | Structural/semantic HTML element. |
| 1234 | `                    </ul>` | Structural/semantic HTML element. |
| 1235 | `                </div>` | Structural/semantic HTML element. |
| 1236 | `                ` |  |
| 1237 | `                <div class="footer-contact">` | Footer area with info/links, consistent across pages. |
| 1238 | `                    <h4 class="footer-heading">Contact Info</h4>` | Footer area with info/links, consistent across pages. |
| 1239 | `                    <div class="contact-item">` | Structural/semantic HTML element. |
| 1240 | `                        <strong>Address:</strong> #59, 1st Floor, Balaji Nagar Main Road, Chennai 600088` | Structural/semantic HTML element. |
| 1241 | `                    </div>` | Structural/semantic HTML element. |
| 1242 | `                    <div class="contact-item">` | Structural/semantic HTML element. |
| 1243 | `                        <strong>Phone:</strong> +91-9003555940` | Structural/semantic HTML element. |
| 1244 | `                    </div>` | Structural/semantic HTML element. |
| 1245 | `                    <div class="contact-item">` | Structural/semantic HTML element. |
| 1246 | `                        <strong>Email:</strong> secretlinenindia@gmail.com` | Structural/semantic HTML element. |
| 1247 | `                    </div>` | Structural/semantic HTML element. |
| 1248 | `                    <div class="contact-item">` | Structural/semantic HTML element. |
| 1249 | `                        <strong>Hours:</strong> Mon-Sat: 10AM-9PM` | Structural/semantic HTML element. |
| 1250 | `                    </div>` | Structural/semantic HTML element. |
| 1251 | `                </div>` | Structural/semantic HTML element. |
| 1252 | `            </div>` | Structural/semantic HTML element. |
| 1253 | `            ` |  |
| 1254 | `            <div class="footer-bottom">` | Footer area with info/links, consistent across pages. |
| 1255 | `                <p>&copy; 2024 Secret Linen. All rights reserved. Crafted with ❤️ by 69TM.</p>` | Paragraph text / supporting copy. |
| 1256 | `            </div>` | Structural/semantic HTML element. |
| 1257 | `        </div>` | Structural/semantic HTML element. |
| 1258 | `    </footer>` | Footer area with info/links, consistent across pages. |
| 1259 | `` |  |
| 1260 | `    <script>` | Inline script starts; behaviors/handlers live here. |
| 1261 | `        // Enhanced scroll animations` | Motion/animation for subtle, premium interactions. |
| 1262 | `        document.addEventListener('DOMContentLoaded', function() {` | CSS selector block begins. |
| 1263 | `            const fadeElements = document.querySelectorAll('.fade-in');` | Content/whitespace or standard markup. |
| 1264 | `            ` |  |
| 1265 | `            const fadeObserver = new IntersectionObserver((entries) => {` | CSS selector block begins. |
| 1266 | `                entries.forEach(entry => {` | CSS selector block begins. |
| 1267 | `                    if (entry.isIntersecting) {` | CSS selector block begins. |
| 1268 | `                        entry.target.classList.add('visible');` | Content/whitespace or standard markup. |
| 1269 | `                    }` | CSS selector block ends. |
| 1270 | `                });` | Content/whitespace or standard markup. |
| 1271 | `            }, { ` | CSS selector block begins. |
| 1272 | `                threshold: 0.1,` | Content/whitespace or standard markup. |
| 1273 | `                rootMargin: '0px 0px -50px 0px'` | Content/whitespace or standard markup. |
| 1274 | `            });` | Content/whitespace or standard markup. |
| 1275 | `            ` |  |
| 1276 | `            fadeElements.forEach(element => {` | CSS selector block begins. |
| 1277 | `                fadeObserver.observe(element);` | Content/whitespace or standard markup. |
| 1278 | `            });` | Content/whitespace or standard markup. |
| 1279 | `            ` |  |
| 1280 | `            // Enhanced mobile menu toggle` | Content/whitespace or standard markup. |
| 1281 | `            const mobileToggle = document.querySelector('.mobile-toggle');` | Content/whitespace or standard markup. |
| 1282 | `            const mobileNav = document.querySelector('nav.mobile');` | Content/whitespace or standard markup. |
| 1283 | `            ` |  |
| 1284 | `            mobileToggle.addEventListener('click', function() {` | CSS selector block begins. |
| 1285 | `                const isActive = mobileNav.classList.contains('active');` | Content/whitespace or standard markup. |
| 1286 | `                ` |  |
| 1287 | `                if (isActive) {` | CSS selector block begins. |
| 1288 | `                    mobileNav.classList.remove('active');` | Content/whitespace or standard markup. |
| 1289 | `                    this.innerHTML = '☰';` | Content/whitespace or standard markup. |
| 1290 | `                } else {` | CSS selector block begins. |
| 1291 | `                    mobileNav.classList.add('active');` | Content/whitespace or standard markup. |
| 1292 | `                    this.innerHTML = '✕';` | Content/whitespace or standard markup. |
| 1293 | `                }` | CSS selector block ends. |
| 1294 | `            });` | Content/whitespace or standard markup. |
| 1295 | `            ` |  |
| 1296 | `            // Close mobile menu when clicking on links` | Content/whitespace or standard markup. |
| 1297 | `            const mobileLinks = document.querySelectorAll('nav.mobile a');` | Content/whitespace or standard markup. |
| 1298 | `            mobileLinks.forEach(link => {` | CSS selector block begins. |
| 1299 | `                link.addEventListener('click', function() {` | CSS selector block begins. |
| 1300 | `                    mobileNav.classList.remove('active');` | Content/whitespace or standard markup. |
| 1301 | `                    mobileToggle.innerHTML = '☰';` | Content/whitespace or standard markup. |
| 1302 | `                });` | Content/whitespace or standard markup. |
| 1303 | `            });` | Content/whitespace or standard markup. |
| 1304 | `            ` |  |
| 1305 | `            // Enhanced header scroll effect` | Content/whitespace or standard markup. |
| 1306 | `            let lastScrollY = window.scrollY;` | Content/whitespace or standard markup. |
| 1307 | `            const header = document.querySelector('header');` | Content/whitespace or standard markup. |
| 1308 | `            ` |  |
| 1309 | `            window.addEventListener('scroll', function() {` | CSS selector block begins. |
| 1310 | `                if (window.scrollY > 100) {` | CSS selector block begins. |
| 1311 | `                    header.style.background = 'rgba(253, 252, 248, 0.98)';` | Content/whitespace or standard markup. |
| 1312 | `                    header.style.padding = '0.5rem 0';` | Content/whitespace or standard markup. |
| 1313 | `                    ` |  |
| 1314 | `                    if (window.scrollY > lastScrollY) {` | CSS selector block begins. |
| 1315 | `                        header.style.transform = 'translateY(-100%)';` | Content/whitespace or standard markup. |
| 1316 | `                    } else {` | CSS selector block begins. |
| 1317 | `                        header.style.transform = 'translateY(0)';` | Content/whitespace or standard markup. |
| 1318 | `                    }` | CSS selector block ends. |
| 1319 | `                } else {` | CSS selector block begins. |
| 1320 | `                    header.style.background = 'rgba(253, 252, 248, 0.95)';` | Content/whitespace or standard markup. |
| 1321 | `                    header.style.padding = '0';` | Content/whitespace or standard markup. |
| 1322 | `                    header.style.transform = 'translateY(0)';` | Content/whitespace or standard markup. |
| 1323 | `                }` | CSS selector block ends. |
| 1324 | `                ` |  |
| 1325 | `                lastScrollY = window.scrollY;` | Content/whitespace or standard markup. |
| 1326 | `            });` | Content/whitespace or standard markup. |
| 1327 | `            ` |  |
| 1328 | `            // Enhanced hover effects for cards` | Content/whitespace or standard markup. |
| 1329 | `            const cards = document.querySelectorAll('.collection-card, .service-card');` | Content/whitespace or standard markup. |
| 1330 | `            cards.forEach(card => {` | CSS selector block begins. |
| 1331 | `                card.addEventListener('mouseenter', function() {` | CSS selector block begins. |
| 1332 | `                    this.style.zIndex = '10';` | Content/whitespace or standard markup. |
| 1333 | `                });` | Content/whitespace or standard markup. |
| 1334 | `                ` |  |
| 1335 | `                card.addEventListener('mouseleave', function() {` | CSS selector block begins. |
| 1336 | `                    this.style.zIndex = '1';` | Content/whitespace or standard markup. |
| 1337 | `                });` | Content/whitespace or standard markup. |
| 1338 | `            });` | Content/whitespace or standard markup. |
| 1339 | `            ` |  |
| 1340 | `            // Smooth scrolling for anchor links` | Content/whitespace or standard markup. |
| 1341 | `            document.querySelectorAll('a[href^="#"]').forEach(anchor => {` | CSS selector block begins. |
| 1342 | `                anchor.addEventListener('click', function (e) {` | CSS selector block begins. |
| 1343 | `                    e.preventDefault();` | Content/whitespace or standard markup. |
| 1344 | `                    const target = document.querySelector(this.getAttribute('href'));` | Content/whitespace or standard markup. |
| 1345 | `                    if (target) {` | CSS selector block begins. |
| 1346 | `                        target.scrollIntoView({` | CSS selector block begins. |
| 1347 | `                            behavior: 'smooth',` | Content/whitespace or standard markup. |
| 1348 | `                            block: 'start'` | Content/whitespace or standard markup. |
| 1349 | `                        });` | Content/whitespace or standard markup. |
| 1350 | `                    }` | CSS selector block ends. |
| 1351 | `                });` | Content/whitespace or standard markup. |
| 1352 | `            });` | Content/whitespace or standard markup. |
| 1353 | `        });` | Content/whitespace or standard markup. |
| 1354 | `    </script>` | Inline script ends. |
| 1355 | `` |  |

---

## Collections.html

<details><summary><strong>Show original source</strong></summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Collections | Secret Linen - Luxury Textiles</title>
    <meta name="description" content="Explore Secret Linen's premium textile collections for hotels, hospitals, spas, and salons. Luxury bedding, towels, and custom solutions.">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    
    <style>
        :root {
            /* Enhanced Color Palette */
            --ivory: #fdfcf8;
            --linen: #f5f1e8;
            --stone: #e8e2d6;
            --clay: #d8cdbc;
            --charcoal: #1a1a1a;
            --bronze: #a8926e;
            --bronze-light: #c4b59a;
            --sage: #a8b8a5;
            
            /* Typography */
            --serif: 'Playfair Display', serif;
            --sans: 'Inter', sans-serif;
            
            /* Spacing */
            --section-padding: clamp(40px, 8vw, 120px);
            --container-width: min(1400px, 94%);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html {
            scroll-behavior: smooth;
        }
        
        body {
            font-family: var(--sans);
            color: var(--charcoal);
            background-color: var(--ivory);
            line-height: 1.7;
            overflow-x: hidden;
            font-weight: 300;
        }
        
        h1, h2, h3, h4 {
            font-family: var(--serif);
            font-weight: 400;
            line-height: 1.1;
            letter-spacing: -0.02em;
        }
        
        h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 300;
        }
        
        h2 {
            font-size: clamp(2rem, 4vw, 3rem);
        }
        
        h3 {
            font-size: clamp(1.4rem, 3vw, 2rem);
        }
        
        .container {
            width: var(--container-width);
            margin: 0 auto;
        }
        
        .section {
            padding: var(--section-padding) 0;
        }
        
        /* Enhanced Header */
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(253, 252, 248, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(232, 226, 214, 0.3);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
            position: relative;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: var(--charcoal);
            transition: transform 0.3s ease;
            z-index: 1001;
        }
        
        .logo:hover {
            transform: translateX(-4px);
        }
        
        .logo-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--bronze), var(--bronze-light));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--ivory);
            font-family: var(--serif);
            font-size: 14px;
            font-weight: 500;
        }
        
        .logo-text {
            font-family: var(--serif);
            font-size: 1.2rem;
            font-weight: 400;
            letter-spacing: 0.02em;
        }
        
        /* Desktop Navigation */
        nav.desktop {
            display: flex;
        }
        
        nav.desktop ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        nav.desktop a {
            text-decoration: none;
            color: var(--charcoal);
            font-weight: 400;
            font-size: 0.9rem;
            letter-spacing: 0.02em;
            position: relative;
            padding: 0.5rem 0;
            transition: all 0.3s ease;
        }
        
        nav.desktop a:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background: var(--bronze);
            transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        nav.desktop a:hover {
            color: var(--bronze);
        }
        
        nav.desktop a:hover:after {
            width: 100%;
        }
        
        /* Mobile Navigation */
        .mobile-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--charcoal);
            transition: transform 0.3s ease;
            z-index: 1001;
            padding: 0.5rem;
        }
        
        .mobile-toggle:hover {
            transform: rotate(90deg);
        }
        
        nav.mobile {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(253, 252, 248, 0.98);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--stone);
            padding: 1.5rem 0;
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        nav.mobile.active {
            transform: translateY(0);
            opacity: 1;
        }
        
        nav.mobile ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
        }
        
        nav.mobile a {
            text-decoration: none;
            color: var(--charcoal);
            font-weight: 400;
            font-size: 1rem;
            padding: 0.75rem 1.5rem;
            display: block;
            transition: all 0.3s ease;
            border-bottom: 1px solid transparent;
        }
        
        nav.mobile a:hover {
            color: var(--bronze);
            border-bottom-color: var(--bronze);
        }
        
        /* Page Header */
        .page-header {
            padding: 140px 0 60px;
            background: linear-gradient(135deg, var(--ivory) 0%, var(--linen) 100%);
            text-align: center;
        }
        
        .page-eyebrow {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            color: var(--bronze);
            margin-bottom: 1rem;
            display: block;
            font-weight: 400;
        }
        
        .page-description {
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
            color: #555;
            font-weight: 300;
        }
        
        /* Category Navigation */
        .category-nav {
            position: sticky;
            top: 0px;
            background: var(--ivory);
            border-bottom: 1px solid var(--stone);
            z-index: 100;
        }
        
        .category-nav-container {
            display: flex;
            justify-content: center;
            gap: 2rem;
            padding: 1.5rem 0;
        }
        
        .category-link {
            text-decoration: none;
            color: var(--charcoal);
            font-weight: 400;
            padding: 0.75rem 1.5rem;
            transition: all 0.3s ease;
            position: relative;
            font-size: 0.9rem;
            letter-spacing: 0.02em;
        }
        
        .category-link.active {
            color: var(--bronze);
        }
        
        .category-link.active:after {
            content: '';
            position: absolute;
            bottom: -1.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 4px;
            background: var(--bronze);
            border-radius: 50%;
        }
        
        .category-link:hover {
            color: var(--bronze);
        }
        
        /* Category Sections */
        .category-section {
            scroll-margin-top: 120px;
        }
        
        .category-header {
            margin-bottom: 3rem;
        }
        
        .category-title {
            display: flex;
            align-items: center;
            gap: 1.2rem;
            margin-bottom: 1.2rem;
        }
        
        .category-icon {
            width: 50px;
            height: 50px;
            background: var(--bronze);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--ivory);
            font-size: 1.3rem;
        }
        
        .category-description {
            font-size: 1.1rem;
            color: #555;
            max-width: 700px;
            font-weight: 300;
            line-height: 1.6;
        }
        
        /* Gallery Grid for All Sections */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-bottom: 4rem;
        }
        
        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 0;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border: 1px solid var(--stone);
            background: var(--ivory);
        }
        
        .gallery-item:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            border-color: var(--bronze);
        }
        
        .gallery-image {
            height: 220px;
            overflow: hidden;
        }
        
        .gallery-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        
        .gallery-item:hover .gallery-image img {
            transform: scale(1.05);
        }
        
        .gallery-content {
            padding: 1.5rem;
        }
        
        .gallery-title {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        
        .gallery-description {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 1rem;
            line-height: 1.5;
        }
        
        .gallery-features {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .gallery-feature {
            background: var(--linen);
            color: var(--charcoal);
            padding: 0.3rem 0.7rem;
            font-size: 0.8rem;
            border: 1px solid var(--stone);
        }
        
        .gallery-btn {
            display: inline-block;
            width: 100%;
            text-align: center;
            padding: 0.8rem;
            background: transparent;
            border: 1px solid var(--bronze);
            color: var(--bronze);
            text-decoration: none;
            font-weight: 400;
            transition: all 0.3s ease;
            cursor: pointer;
            font-family: var(--sans);
            font-size: 0.9rem;
        }
        
        .gallery-btn:hover {
            background: var(--bronze);
            color: var(--ivory);
        }
        
        /* Color Swatches */
        .color-swatches {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin: 1rem 0;
        }
        
        .color-swatch {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid var(--stone);
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        
        .color-swatch:hover {
            transform: scale(1.1);
        }
        
        .color-swatch.white { background: #ffffff; }
        .color-swatch.red { background: #c41e3a; }
        .color-swatch.grey { background: #808080; }
        .color-swatch.brown { background: #8b4513; }
        .color-swatch.navy { background: #000080; }
        .color-swatch.maroon { background: #800000; }
        .color-swatch.skinbrown { background: #d2b48c; }
        .color-swatch.ltblue { background: #add8e6; }
        .color-swatch.ltpink { background: #ffb6c1; }
        .color-swatch.camel { background: #c19a6b; }
        .color-swatch.darkbrown { background: #654321; }
        .color-swatch.royalblue { background: #4169e1; }
        .color-swatch.blue { background: #0000ff; }
        .color-swatch.green { background: #008000; }
        .color-swatch.black { background: #000000; }
        .color-swatch.teal { background: #008080; }

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 2000;
            overflow-y: auto;
            padding: 1rem;
        }
        
        .modal-content {
            background: var(--ivory);
            max-width: 900px;
            margin: 1rem auto;
            border-radius: 0;
            overflow: hidden;
            position: relative;
            animation: modalFadeIn 0.4s ease;
        }
        
        @keyframes modalFadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: var(--charcoal);
            color: var(--ivory);
            width: 36px;
            height: 36px;
            border: none;
            border-radius: 50%;
            font-size: 1.1rem;
            cursor: pointer;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        .modal-close:hover {
            background: var(--bronze);
            transform: rotate(90deg);
        }
        
        .modal-header {
            padding: 1.5rem 1.5rem 1rem;
            border-bottom: 1px solid var(--stone);
        }
        
        .modal-title {
            font-size: 1.6rem;
            margin-bottom: 0.5rem;
        }
        
        .modal-subtitle {
            color: #666;
            font-size: 0.95rem;
        }
        
        .modal-body {
            padding: 1.5rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }
        
        .modal-image {
            height: 350px;
            overflow: hidden;
        }
        
        .modal-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .modal-details {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
        }
        
        .detail-section h4 {
            margin-bottom: 0.8rem;
            font-size: 1.1rem;
            color: var(--bronze);
            border-bottom: 1px solid var(--stone);
            padding-bottom: 0.5rem;
        }
        
        .detail-list {
            list-style: none;
        }
        
        .detail-list li {
            margin-bottom: 0.5rem;
            padding-left: 1rem;
            position: relative;
        }
        
        .detail-list li:before {
            content: '•';
            position: absolute;
            left: 0;
            color: var(--bronze);
        }
        
        .spec-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        
        .spec-item {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
        }
        
        .spec-label {
            font-size: 0.85rem;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        .spec-value {
            font-weight: 500;
        }
        
        .modal-footer {
            padding: 1.2rem 1.5rem;
            border-top: 1px solid var(--stone);
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            padding: 0.9rem 1.8rem;
            text-decoration: none;
            border-radius: 0;
            font-weight: 400;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border: 1px solid transparent;
            font-size: 0.9rem;
            letter-spacing: 0.02em;
            position: relative;
            overflow: hidden;
            cursor: pointer;
        }
        
        .btn:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.6s ease;
        }
        
        .btn:hover:before {
            left: 100%;
        }
        
        .btn-primary {
            background: var(--charcoal);
            color: var(--ivory);
            border-color: var(--charcoal);
        }
        
        .btn-primary:hover {
            background: var(--bronze);
            color: var(--ivory);
            border-color: var(--bronze);
            transform: translateY(-2px);
        }
        
        .btn-outline {
            background: transparent;
            color: var(--charcoal);
            border-color: var(--stone);
        }
        
        .btn-outline:hover {
            background: var(--linen);
            border-color: var(--bronze);
        }
        
        /* Quick Specs */
        .quick-specs {
            background: var(--ivory);
            border-radius: 0;
            padding: 2.5rem;
            margin-top: 3rem;
            border: 1px solid var(--stone);
        }
        
        .specs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 2rem;
        }
        
        .spec-item {
            text-align: center;
        }
        
        .spec-icon {
            width: 45px;
            height: 45px;
            background: var(--linen);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.2rem;
            color: var(--bronze);
            font-size: 1.1rem;
        }
        
        .spec-label {
            font-size: 0.85rem;
            color: #666;
            margin-bottom: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 400;
        }
        
        .spec-value {
            font-weight: 500;
            color: var(--charcoal);
            font-size: 1rem;
        }
        
        /* CTA Section */
        .cta-section {
            background: linear-gradient(135deg, var(--charcoal) 0%, #2a2a2a 100%);
            color: var(--ivory);
            text-align: center;
            position: relative;
            overflow: hidden;
            padding: 80px 0;
        }
        
        .cta-section::before {
            content: '';
            position: absolute;
            top: -80px;
            right: -80px;
            width: 250px;
            height: 250px;
            background: var(--bronze);
            opacity: 0.05;
            border-radius: 50%;
        }
        
        .cta-section h2 {
            color: var(--ivory);
            margin-bottom: 1.2rem;
        }
        
        .cta-section p {
            font-size: 1.1rem;
            margin-bottom: 2.5rem;
            opacity: 0.9;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            font-weight: 300;
            line-height: 1.6;
        }
        
        .btn-light {
            background: var(--ivory);
            color: var(--charcoal);
            border-color: var(--ivory);
        }
        
        .btn-light:hover {
            background: var(--bronze);
            color: var(--ivory);
            border-color: var(--bronze);
        }
        
        /* Enhanced Footer */
        footer {
            background: var(--charcoal);
            color: var(--ivory);
            padding: 3rem 0 1.5rem;
            width: 100%;
            position: relative;
        }
        
        footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--bronze), transparent);
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 2.5rem;
            margin-bottom: 2.5rem;
        }
        
        .footer-brand {
            display: flex;
            flex-direction: column;
        }
        
        .footer-logo {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 1.2rem;
        }
        
        .footer-description {
            opacity: 0.7;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            font-weight: 300;
            max-width: 400px;
        }
        
        .footer-heading {
            font-size: 1rem;
            margin-bottom: 1.2rem;
            color: var(--ivory);
            font-weight: 400;
            letter-spacing: 0.02em;
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 0.6rem;
        }
        
        .footer-links a {
            color: rgba(253, 252, 248, 0.7);
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: 300;
            letter-spacing: 0.01em;
            font-size: 0.9rem;
        }
        
        .footer-links a:hover {
            color: var(--bronze);
        }
        
        .footer-contact {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
        }
        
        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 0.6rem;
            color: rgba(253, 252, 248, 0.7);
            font-size: 0.9rem;
        }
        
        .contact-item strong {
            color: var(--ivory);
            font-weight: 500;
        }
        
        .footer-bottom {
            border-top: 1px solid rgba(253, 252, 248, 0.1);
            padding-top: 1.5rem;
            text-align: center;
            opacity: 0.6;
            font-size: 0.85rem;
            font-weight: 300;
        }
        
        /* Enhanced Animations */
        .fade-in {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Enhanced Responsive Design */
        @media (max-width: 1200px) {
            .gallery-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .footer-content {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        @media (max-width: 768px) {
            nav.desktop {
                display: none;
            }
            
            .mobile-toggle {
                display: block;
            }
            
            nav.mobile {
                display: block;
            }
            
            .category-nav-container {
                flex-wrap: wrap;
                gap: 1rem;
                padding: 1rem 0;
            }
            
            .gallery-grid {
                grid-template-columns: 1fr;
            }
            
            .specs-grid {
                grid-template-columns: 1fr;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            .category-link.active:after {
                bottom: -1rem;
            }
            
            .footer-brand {
                text-align: center;
                align-items: center;
            }
            
            .modal-body {
                grid-template-columns: 1fr;
            }
            
            .modal-image {
                height: 250px;
            }
            
            footer {
                padding: 2rem 1rem 1.5rem;
            }
            
            /* FIX: Improved touch targets for mobile */
            .gallery-btn {
                padding: 1rem;
                min-height: 48px; /* Minimum touch target size */
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
            }
            
            .color-swatches {
                justify-content: center;
                margin: 1.5rem 0;
            }
            
            .color-swatch {
                width: 32px; /* Larger touch targets */
                height: 32px;
            }
            
            .modal-footer {
                flex-direction: column;
            }
            
            .btn {
                width: 100%;
                justify-content: center;
            }
        }
        
        @media (max-width: 480px) {
            .btn {
                padding: 1rem 2rem;
            }
            
            .gallery-content {
                padding: 1.2rem;
            }
            
            .quick-specs {
                padding: 1.5rem;
            }
            
            .modal-body {
                padding: 1.2rem;
            }
            
            .modal-header {
                padding: 1.2rem 1.2rem 0.8rem;
            }
            
            .modal-footer {
                padding: 1rem 1.2rem;
            }
            
            .color-swatches {
                justify-content: center;
            }
            
            /* FIX: Prevent accidental clicks on gallery items */
            .gallery-item {
                cursor: default;
            }
            
            .gallery-btn {
                cursor: pointer;
            }
            
            .page-header {
                padding: 120px 0 40px;
            }
            
            .category-title {
                flex-direction: column;
                text-align: center;
                gap: 1rem;
            }
        }
        
        /* FIX: Add touch-specific improvements */
        @media (hover: none) and (pointer: coarse) {
            /* Remove hover effects on touch devices */
            .gallery-item:hover {
                transform: none;
                box-shadow: none;
                border-color: var(--stone);
            }
            
            .gallery-item:active {
                transform: scale(0.98);
            }
            
            .gallery-btn:active {
                background: var(--bronze);
                color: var(--ivory);
                transform: scale(0.95);
            }
            
            /* Improve modal scrolling on iOS */
            .modal {
                -webkit-overflow-scrolling: touch;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container header-container">
            <a href="/home" class="logo">
                <div class="logo-icon">SL</div>
                <div class="logo-text">Secret Linen</div>
            </a>
            
            <!-- Desktop Navigation -->
            <nav class="desktop">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/collections" class="active">Collections</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/about#contact">Contact</a></li>
                </ul>
            </nav>
            
            <!-- Mobile Toggle -->
            <button class="mobile-toggle">☰</button>
            
            <!-- Mobile Navigation -->
            <nav class="mobile">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/collections" class="active">Collections</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/about#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <span class="page-eyebrow">Our Collections</span>
            <h1>Premium Textiles for Every Space</h1>
            <p class="page-description">
                Discover our carefully curated collections designed for hospitality excellence. Each piece combines luxury, durability, and timeless elegance.
            </p>
        </div>
    </section>

    <!-- Category Navigation -->
    <nav class="category-nav">
        <div class="container category-nav-container">
            <a href="#hotels" class="category-link active">Hotels</a>
            <a href="#hospitals" class="category-link">Hospitals</a>
            <a href="#spas" class="category-link">Spas</a>
            <a href="#salons" class="category-link">Salons</a>
        </div>
    </nav>

    <!-- Hotels Collection -->
    <section id="hotels" class="section category-section">
        <div class="container">
            <div class="category-header">
                <div class="category-title">
                    <div class="category-icon">🏨</div>
                    <h2>Hotel Collection</h2>
                </div>
                <p class="category-description">
                    Luxury bedding and bath collections designed for premium hospitality experiences. Breathable fabrics, calm palettes, and durable construction for busy hotel environments.
                </p>
            </div>

            <!-- Gallery Grid for Hotels -->
            <div class="gallery-grid">
                <!-- Duvet -->
                <div class="gallery-item fade-in" data-product="duvet">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80" alt="Luxury Duvet">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Duvet</h3>
                        <p class="gallery-description">Lightweight yet warm, perfect for year-round comfort in luxury accommodations.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Cotton</span>
                            <span class="gallery-feature">Recron Fill</span>
                            <span class="gallery-feature">Garment Dyed</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch white" title="White"></div>
                            <div class="color-swatch grey" title="Grey"></div>
                            <div class="color-swatch brown" title="Brown"></div>
                            <div class="color-swatch navy" title="Navy"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Duvet Cover -->
                <div class="gallery-item fade-in" data-product="duvet-cover">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=600&q=80" alt="Duvet Cover">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Duvet Cover</h3>
                        <p class="gallery-description">Unmatched quality, durability, and softness that gets better with every wash.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Cotton</span>
                            <span class="gallery-feature">Sateen Finish</span>
                            <span class="gallery-feature">Multiple Colors</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch white" title="White"></div>
                            <div class="color-swatch red" title="Red"></div>
                            <div class="color-swatch grey" title="Grey"></div>
                            <div class="color-swatch brown" title="Brown"></div>
                            <div class="color-swatch navy" title="Navy"></div>
                            <div class="color-swatch maroon" title="Maroon"></div>
                            <div class="color-swatch skinbrown" title="Skin Brown"></div>
                            <div class="color-swatch ltblue" title="Light Blue"></div>
                            <div class="color-swatch ltpink" title="Light Pink"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Pillow -->
                <div class="gallery-item fade-in" data-product="pillow">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1520614073990-dd6020b2d15f?auto=format&fit=crop&w=600&q=80" alt="Hotel Pillow">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Pillow</h3>
                        <p class="gallery-description">Fluffy down pillow with adjustable firmness and cooling memory foam.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">Siliconised Fiber</span>
                            <span class="gallery-feature">Adjustable</span>
                            <span class="gallery-feature">Cooling</span>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Pillow Case -->
                <div class="gallery-item fade-in" data-product="pillow-case">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=600&q=80" alt="Pillow Case">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Pillow Case</h3>
                        <p class="gallery-description">Ridiculously soft 100% premium cotton with a lustrous sateen finish.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Cotton</span>
                            <span class="gallery-feature">Sateen Finish</span>
                            <span class="gallery-feature">Wrinkle-Resistant</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch white" title="White"></div>
                            <div class="color-swatch red" title="Red"></div>
                            <div class="color-swatch grey" title="Grey"></div>
                            <div class="color-swatch brown" title="Brown"></div>
                            <div class="color-swatch navy" title="Navy"></div>
                            <div class="color-swatch maroon" title="Maroon"></div>
                            <div class="color-swatch skinbrown" title="Skin Brown"></div>
                            <div class="color-swatch ltblue" title="Light Blue"></div>
                            <div class="color-swatch ltpink" title="Light Pink"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Bedsheets -->
                <div class="gallery-item fade-in" data-product="bedsheets">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80" alt="Bedsheets">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Bedsheets</h3>
                        <p class="gallery-description">Pure cotton bedsheets for the utmost in comfort and style.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Cotton</span>
                            <span class="gallery-feature">Multiple Colors</span>
                            <span class="gallery-feature">Various Sizes</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch white" title="White"></div>
                            <div class="color-swatch red" title="Red"></div>
                            <div class="color-swatch grey" title="Grey"></div>
                            <div class="color-swatch brown" title="Brown"></div>
                            <div class="color-swatch navy" title="Navy"></div>
                            <div class="color-swatch maroon" title="Maroon"></div>
                            <div class="color-swatch skinbrown" title="Skin Brown"></div>
                            <div class="color-swatch ltblue" title="Light Blue"></div>
                            <div class="color-swatch ltpink" title="Light Pink"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Blankets -->
                <div class="gallery-item fade-in" data-product="blankets">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1576873693822-34a5c539d307?auto=format&fit=crop&w=600&q=80" alt="Blankets">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Blankets</h3>
                        <p class="gallery-description">Fleece blankets with luxurious texture and exceptional warmth.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">Microfiber</span>
                            <span class="gallery-feature">Plush Material</span>
                            <span class="gallery-feature">Warm & Light</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch camel" title="Camel"></div>
                            <div class="color-swatch red" title="Red"></div>
                            <div class="color-swatch darkbrown" title="Dark Brown"></div>
                            <div class="color-swatch royalblue" title="Royal Blue"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Towels -->
                <div class="gallery-item fade-in" data-product="towels">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=600&q=80" alt="Towels">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Towels</h3>
                        <p class="gallery-description">Premium cotton terry towels with over-the-top plushness and durability.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Cotton</span>
                            <span class="gallery-feature">Terry & Waffle</span>
                            <span class="gallery-feature">Multiple Sizes</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch white" title="White"></div>
                            <div class="color-swatch brown" title="Brown"></div>
                            <div class="color-swatch grey" title="Grey"></div>
                            <div class="color-swatch red" title="Red"></div>
                            <div class="color-swatch blue" title="Blue"></div>
                            <div class="color-swatch green" title="Green"></div>
                            <div class="color-swatch black" title="Black"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Runner -->
                <div class="gallery-item fade-in" data-product="runner">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80" alt="Runner">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Runner</h3>
                        <p class="gallery-description">Lightweight runner quilted with decorative stitches.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">Quilted</span>
                            <span class="gallery-feature">Decorative</span>
                            <span class="gallery-feature">Lightweight</span>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>
            </div>

            <div class="quick-specs fade-in">
                <div class="specs-grid">
                    <div class="spec-item">
                        <div class="spec-icon">🛏️</div>
                        <div class="spec-label">Thread Count</div>
                        <div class="spec-value">200-400TC Options</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-icon">🧼</div>
                        <div class="spec-label">Care</div>
                        <div class="spec-value">Commercial Laundry Safe</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-icon">⚡</div>
                        <div class="spec-label">Turnover</div>
                        <div class="spec-value">Quick-Dry Fabrics</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-icon">🎨</div>
                        <div class="spec-label">Colors</div>
                        <div class="spec-value">Calm, Neutral Palette</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Hospitals Collection -->
    <section id="hospitals" class="section category-section">
        <div class="container">
            <div class="category-header">
                <div class="category-title">
                    <div class="category-icon">🏥</div>
                    <h2>Hospital Collection</h2>
                </div>
                <p class="category-description">
                    Clinically clean, skin-friendly textiles engineered for repeated sterilization with medical-grade finishes and anti-microbial properties.
                </p>
            </div>

            <!-- Gallery Grid for Hospitals -->
            <div class="gallery-grid">
                <!-- Duvet -->
                <div class="gallery-item fade-in" data-product="hospital-duvet">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80" alt="Hospital Duvet">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Duvet</h3>
                        <p class="gallery-description">Lightweight comfort with anti-viral and anti-bacterial finishes.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Cotton</span>
                            <span class="gallery-feature">Anti-Viral</span>
                            <span class="gallery-feature">Anti-Bacterial</span>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Duvet Cover -->
                <div class="gallery-item fade-in" data-product="hospital-duvet-cover">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=600&q=80" alt="Hospital Duvet Cover">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Duvet Cover</h3>
                        <p class="gallery-description">Unmatched quality with medical-grade anti-viral and anti-bacterial finishes.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Cotton</span>
                            <span class="gallery-feature">Anti-Viral</span>
                            <span class="gallery-feature">Anti-Bacterial</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch white" title="White"></div>
                            <div class="color-swatch red" title="Red"></div>
                            <div class="color-swatch grey" title="Grey"></div>
                            <div class="color-swatch brown" title="Brown"></div>
                            <div class="color-swatch navy" title="Navy"></div>
                            <div class="color-swatch maroon" title="Maroon"></div>
                            <div class="color-swatch skinbrown" title="Skin Brown"></div>
                            <div class="color-swatch ltblue" title="Light Blue"></div>
                            <div class="color-swatch ltpink" title="Light Pink"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Pillow -->
                <div class="gallery-item fade-in" data-product="hospital-pillow">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1520614073990-dd6020b2d15f?auto=format&fit=crop&w=600&q=80" alt="Hospital Pillow">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Pillow</h3>
                        <p class="gallery-description">Fluffy down pillow with adjustable firmness for patient comfort.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">Siliconised Fiber</span>
                            <span class="gallery-feature">Adjustable</span>
                            <span class="gallery-feature">Medical Grade</span>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Pillow Case -->
                <div class="gallery-item fade-in" data-product="hospital-pillow-case">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=600&q=80" alt="Hospital Pillow Case">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Pillow Case</h3>
                        <p class="gallery-description">Premium cotton with anti-viral and anti-bacterial finishes.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Cotton</span>
                            <span class="gallery-feature">Anti-Viral</span>
                            <span class="gallery-feature">Anti-Bacterial</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch white" title="White"></div>
                            <div class="color-swatch red" title="Red"></div>
                            <div class="color-swatch grey" title="Grey"></div>
                            <div class="color-swatch brown" title="Brown"></div>
                            <div class="color-swatch navy" title="Navy"></div>
                            <div class="color-swatch maroon" title="Maroon"></div>
                            <div class="color-swatch skinbrown" title="Skin Brown"></div>
                            <div class="color-swatch ltblue" title="Light Blue"></div>
                            <div class="color-swatch ltpink" title="Light Pink"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Bedsheets -->
                <div class="gallery-item fade-in" data-product="hospital-bedsheets">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80" alt="Hospital Bedsheets">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Bedsheets</h3>
                        <p class="gallery-description">Pure cotton bedsheets with anti-viral and anti-bacterial finishes.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Cotton</span>
                            <span class="gallery-feature">Anti-Viral</span>
                            <span class="gallery-feature">Anti-Bacterial</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch white" title="White"></div>
                            <div class="color-swatch red" title="Red"></div>
                            <div class="color-swatch grey" title="Grey"></div>
                            <div class="color-swatch brown" title="Brown"></div>
                            <div class="color-swatch navy" title="Navy"></div>
                            <div class="color-swatch maroon" title="Maroon"></div>
                            <div class="color-swatch skinbrown" title="Skin Brown"></div>
                            <div class="color-swatch ltblue" title="Light Blue"></div>
                            <div class="color-swatch ltpink" title="Light Pink"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Blankets -->
                <div class="gallery-item fade-in" data-product="hospital-blankets">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1576873693822-34a5c539d307?auto=format&fit=crop&w=600&q=80" alt="Hospital Blankets">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Blankets</h3>
                        <p class="gallery-description">Fleece blankets with luxurious texture for patient comfort.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">Microfiber</span>
                            <span class="gallery-feature">Plush Material</span>
                            <span class="gallery-feature">Medical Grade</span>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Towels -->
                <div class="gallery-item fade-in" data-product="hospital-towels">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=600&q=80" alt="Hospital Towels">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Towels</h3>
                        <p class="gallery-description">Premium cotton terry towels for clinical environments.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Cotton</span>
                            <span class="gallery-feature">Terry & Waffle</span>
                            <span class="gallery-feature">Medical Grade</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch white" title="White"></div>
                            <div class="color-swatch brown" title="Brown"></div>
                            <div class="color-swatch grey" title="Grey"></div>
                            <div class="color-swatch red" title="Red"></div>
                            <div class="color-swatch blue" title="Blue"></div>
                            <div class="color-swatch green" title="Green"></div>
                            <div class="color-swatch black" title="Black"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Bath Mat -->
                <div class="gallery-item fade-in" data-product="hospital-bath-mat">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80" alt="Hospital Bath Mat">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Bath Mat</h3>
                        <p class="gallery-description">100% cotton fabric for patient safety and comfort.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Cotton</span>
                            <span class="gallery-feature">Soft & Breathable</span>
                            <span class="gallery-feature">Medical Grade</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch brown" title="Brown"></div>
                            <div class="color-swatch grey" title="Charcoal"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Uniform - Now with sub-categories -->
                <div class="gallery-item fade-in" data-product="hospital-uniform">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1581017914096-0162495527c1?auto=format&fit=crop&w=600&q=80" alt="Hospital Uniform">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Medical Uniforms</h3>
                        <p class="gallery-description">Professional medical uniforms with anti-microbial properties for healthcare staff.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">Anti-Microbial</span>
                            <span class="gallery-feature">Comfort Fit</span>
                            <span class="gallery-feature">Professional</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch white" title="White"></div>
                            <div class="color-swatch navy" title="Navy"></div>
                            <div class="color-swatch royalblue" title="Royal Blue"></div>
                            <div class="color-swatch teal" title="Teal"></div>
                        </div>
                        <button class="gallery-btn">View Uniform Categories</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Spas Collection -->
    <section id="spas" class="section category-section">
        <div class="container">
            <div class="category-header">
                <div class="category-title">
                    <div class="category-icon">💆</div>
                    <h2>Spa Collection</h2>
                </div>
                <p class="category-description">
                    Serene textures and lush absorbency for wellness spaces. Premium terry and bamboo options designed for ultimate comfort and relaxation.
                </p>
            </div>

            <!-- Gallery Grid for Spas -->
            <div class="gallery-grid">
                <!-- Cotton Towels -->
                <div class="gallery-item fade-in" data-product="spa-cotton-towels">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=600&q=80" alt="Spa Cotton Towels">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Cotton Terry Towels</h3>
                        <p class="gallery-description">Premium cotton terry towels with over-the-top plushness and durability.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Cotton</span>
                            <span class="gallery-feature">Extra-Thick</span>
                            <span class="gallery-feature">Spa-Like</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch white" title="White"></div>
                            <div class="color-swatch brown" title="Brown"></div>
                            <div class="color-swatch grey" title="Grey"></div>
                            <div class="color-swatch red" title="Red"></div>
                            <div class="color-swatch blue" title="Blue"></div>
                            <div class="color-swatch green" title="Green"></div>
                            <div class="color-swatch black" title="Black"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Bamboo Towels -->
                <div class="gallery-item fade-in" data-product="spa-bamboo-towels">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80" alt="Spa Bamboo Towels">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Bamboo Waffle Towels</h3>
                        <p class="gallery-description">Extra absorbent and fast-drying bamboo towels for spa experiences.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Bamboo</span>
                            <span class="gallery-feature">Odour Resistant</span>
                            <span class="gallery-feature">Anti-Allergic</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch white" title="White"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Salons Collection -->
    <section id="salons" class="section category-section">
        <div class="container">
            <div class="category-header">
                <div class="category-title">
                    <div class="category-icon">💇</div>
                    <h2>Salon Collection</h2>
                </div>
                <p class="category-description">
                    Hardwearing, bleach-safe textiles for busy studios. Designed to withstand frequent washing while maintaining softness and color integrity.
                </p>
            </div>

            <!-- Gallery Grid for Salons -->
            <div class="gallery-grid">
                <!-- Cotton Towels -->
                <div class="gallery-item fade-in" data-product="salon-cotton-towels">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=600&q=80" alt="Salon Cotton Towels">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Cotton Terry Towels</h3>
                        <p class="gallery-description">Bleach-safe, colorfast towels with reinforced hems for professional salon use.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Cotton</span>
                            <span class="gallery-feature">Bleach Safe</span>
                            <span class="gallery-feature">Reinforced Hems</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch white" title="White"></div>
                            <div class="color-swatch brown" title="Brown"></div>
                            <div class="color-swatch grey" title="Grey"></div>
                            <div class="color-swatch red" title="Red"></div>
                            <div class="color-swatch blue" title="Blue"></div>
                            <div class="color-swatch green" title="Green"></div>
                            <div class="color-swatch black" title="Black"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>

                <!-- Bamboo Towels -->
                <div class="gallery-item fade-in" data-product="salon-bamboo-towels">
                    <div class="gallery-image">
                        <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80" alt="Salon Bamboo Towels">
                    </div>
                    <div class="gallery-content">
                        <h3 class="gallery-title">Bamboo Waffle Towels</h3>
                        <p class="gallery-description">Soft loop, fast-drying bamboo towels with excellent color retention.</p>
                        <div class="gallery-features">
                            <span class="gallery-feature">100% Bamboo</span>
                            <span class="gallery-feature">Odour Resistant</span>
                            <span class="gallery-feature">Anti-Allergic</span>
                        </div>
                        <div class="color-swatches">
                            <div class="color-swatch white" title="White"></div>
                        </div>
                        <button class="gallery-btn">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
        <div class="container">
            <h2>Need Custom Solutions?</h2>
            <p>Our textile experts can create bespoke collections tailored to your specific requirements, branding, and operational needs.</p>
            <a href="/about#contact" class="btn btn-light">Request Custom Quote</a>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <div class="logo-icon">SL</div>
                        <div class="logo-text">Secret Linen</div>
                    </div>
                    <p class="footer-description">
                        50+ years of crafting exceptional textiles for hospitality and refined living. Quiet luxury, woven into life.
                    </p>
                </div>
                
                <div>
                    <h4 class="footer-heading">Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="/collections">Collections</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/about">Our Story</a></li>
                        <li><a href="/about#contact">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-contact">
                    <h4 class="footer-heading">Contact Info</h4>
                    <div class="contact-item">
                        <strong>Address:</strong> #59, 1st Floor, Balaji Nagar Main Road, Chennai 600088
                    </div>
                    <div class="contact-item">
                        <strong>Phone:</strong> +91-9003555940
                    </div>
                    <div class="contact-item">
                        <strong>Email:</strong> secretlinenindia@gmail.com
                    </div>
                    <div class="contact-item">
                        <strong>Hours:</strong> Mon-Sat: 10AM-9PM
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 Secret Linen. All rights reserved. Crafted with care in India.</p>
            </div>
        </div>
    </footer>

    <!-- Product Modals -->
    <!-- Duvet Modal -->
    <div id="duvet-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Duvet</h3>
                <p class="modal-subtitle">Lightweight comfort for all seasons</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80" alt="Luxury Duvet">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>A lightweight duvet that does heavy lifting when it comes to comfort. Made with 100% cotton, this quilt does double duty as the perfect top-of-bed replacement for your comforter in warmer weather, or as an additional layer in cooler months (or for a cozy-up on the couch). Garment dyed for rich, unique colors and ready to be just the added touch your bedroom needs.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>How it Feels</h4>
                        <p>Airy. Cozy. Warm but not heavy.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>How it Looks</h4>
                        <p>Soft. Relaxed. Quilted.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Dimensions</div>
                                <div class="spec-value">60×90 / 90×100 / 100×110 Inches</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Pattern</div>
                                <div class="spec-value">Plain / Stripes</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% cotton shell with Recron polyfibre fill</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Machine wash cold separately on gentle cycle with like colors</li>
                            <li>Do not bleach</li>
                            <li>Tumble dry low, remove promptly</li>
                            <li>Low iron if needed</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Duvet Cover Modal -->
    <div id="duvet-cover-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Duvet Cover</h3>
                <p class="modal-subtitle">Unmatched quality and durability</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=800&q=80" alt="Duvet Cover">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Duvet Cover offers unmatched quality, durability, and softness that gets better with every wash. Sateen has that first-class feel you know and love.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>How it Feels</h4>
                        <p>Luxuriously soft and smooth, perfect for year-round use</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>How it Looks</h4>
                        <p>Lustrous, versatile, and irresistible</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Colors</div>
                                <div class="spec-value">
                                    <div class="color-swatches">
                                        <div class="color-swatch white" title="White"></div>
                                        <div class="color-swatch red" title="Red"></div>
                                        <div class="color-swatch grey" title="Grey"></div>
                                        <div class="color-swatch brown" title="Brown"></div>
                                        <div class="color-swatch navy" title="Navy"></div>
                                        <div class="color-swatch maroon" title="Maroon"></div>
                                        <div class="color-swatch skinbrown" title="Skin Brown"></div>
                                        <div class="color-swatch ltblue" title="Light Blue"></div>
                                        <div class="color-swatch ltpink" title="Light Pink"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Quality</div>
                                <div class="spec-value">200TC, 300TC, 400TC</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Dimensions</div>
                                <div class="spec-value">60×90 / 90×100 / 100×110 Inches</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Pattern</div>
                                <div class="spec-value">Plain / Stripes</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Long-Staple Cotton</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Machine wash cold with like colors</li>
                            <li>Tumble dry low, remove promptly</li>
                            <li>Non-Chlorine bleach only</li>
                            <li>Warm iron if needed</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Pillow Modal -->
    <div id="pillow-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Hotel Pillow</h3>
                <p class="modal-subtitle">Adjustable comfort with cooling technology</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1520614073990-dd6020b2d15f?auto=format&fit=crop&w=800&q=80" alt="Hotel Pillow">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Our premium hotel pillow combines the plush comfort of siliconised fiber with advanced cooling technology. The adjustable design allows guests to customize firmness to their preference, while the breathable cover ensures optimal temperature regulation throughout the night.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Features</h4>
                        <ul class="detail-list">
                            <li>Siliconised fiber filling for consistent support</li>
                            <li>Adjustable firmness with removable inserts</li>
                            <li>Cooling gel memory foam layer</li>
                            <li>Hypoallergenic and dust-mite resistant</li>
                            <li>Breathable cotton cover</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Dimensions</div>
                                <div class="spec-value">Standard, Queen, King sizes</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Firmness</div>
                                <div class="spec-value">Soft, Medium, Firm options</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Fill Material</div>
                                <div class="spec-value">Siliconised Polyester Fiber</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Cover</div>
                                <div class="spec-value">100% Cotton Sateen</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Machine wash cool on gentle cycle</li>
                            <li>Tumble dry low with tennis balls to fluff</li>
                            <li>Do not bleach or dry clean</li>
                            <li>Spot clean only for memory foam layer</li>
                            <li>Air fluff periodically to maintain shape</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Pillow Case Modal -->
    <div id="pillow-case-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Pillow Case</h3>
                <p class="modal-subtitle">Luxurious sateen finish with wrinkle resistance</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=800&q=80" alt="Pillow Case">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Crafted from 100% premium long-staple cotton, our pillow cases feature a lustrous sateen finish that becomes softer with each wash. The wrinkle-resistant treatment ensures a crisp, professional appearance while providing exceptional comfort against the skin.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Features</h4>
                        <ul class="detail-list">
                            <li>Lustrous sateen weave for superior softness</li>
                            <li>Wrinkle-resistant finish</li>
                            <li>Colorfast dyes that maintain vibrancy</li>
                            <li>Reinforced seams for durability</li>
                            <li>Available in multiple thread counts</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Thread Count</div>
                                <div class="spec-value">200TC, 300TC, 400TC options</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Sizes</div>
                                <div class="spec-value">Standard, Queen, King, Euro</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Closure</div>
                                <div class="spec-value">Envelope or Zipper options</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Long-Staple Cotton</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Machine wash warm with like colors</li>
                            <li>Tumble dry medium, remove promptly</li>
                            <li>Iron on medium heat if needed</li>
                            <li>Non-chlorine bleach when necessary</li>
                            <li>Do not use fabric softener</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Bedsheets Modal -->
    <div id="bedsheets-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Bedsheets</h3>
                <p class="modal-subtitle">Pure cotton comfort in multiple weaves</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" alt="Bedsheets">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Our premium bedsheet collection offers the perfect balance of comfort, durability, and style. Available in multiple weaves including percale, sateen, and jersey, each option provides unique benefits to suit different preferences and climates.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Weave Options</h4>
                        <ul class="detail-list">
                            <li><strong>Percale:</strong> Crisp, cool, and breathable - perfect for warm climates</li>
                            <li><strong>Sateen:</strong> Silky smooth with a subtle sheen - luxurious feel</li>
                            <li><strong>Jersey:</strong> Soft, stretchy knit - t-shirt like comfort</li>
                            <li><strong>Linen:</strong> Naturally temperature regulating - gets softer with use</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Thread Count</div>
                                <div class="spec-value">200-600TC options available</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Sizes</div>
                                <div class="spec-value">Twin to California King</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Weaves</div>
                                <div class="spec-value">Percale, Sateen, Jersey, Linen</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Cotton, Cotton Blends</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Machine wash cold with mild detergent</li>
                            <li>Tumble dry low or line dry</li>
                            <li>Iron on appropriate heat setting for fabric</li>
                            <li>Fold immediately after drying to prevent wrinkles</li>
                            <li>Store in cool, dry place</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Blankets Modal -->
    <div id="blankets-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Blankets</h3>
                <p class="modal-subtitle">Luxurious warmth without weight</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1576873693822-34a5c539d307?auto=format&fit=crop&w=800&q=80" alt="Blankets">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Our microfiber blankets provide exceptional warmth while remaining lightweight and breathable. The plush material creates a cozy, luxurious feel perfect for layering or standalone use in moderate climates. Available in various weights for year-round comfort.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Features</h4>
                        <ul class="detail-list">
                            <li>Ultra-soft microfiber construction</li>
                            <li>Excellent warmth-to-weight ratio</li>
                            <li>Breathable and moisture-wicking</li>
                            <li>Hypoallergenic and dust-mite resistant</li>
                            <li>Durable binding on all edges</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Weights</div>
                                <div class="spec-value">Light, Medium, Heavy options</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Sizes</div>
                                <div class="spec-value">Throw to King sizes</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Microfiber Polyester</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Construction</div>
                                <div class="spec-value">Brushed, Woven, or Quilted</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Machine wash cold on gentle cycle</li>
                            <li>Use mild detergent, no fabric softener</li>
                            <li>Tumble dry low, remove promptly</li>
                            <li>Do not bleach or dry clean</li>
                            <li>Store folded, avoid compression</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Towels Modal -->
    <div id="towels-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Premium Cotton Towels</h3>
                <p class="modal-subtitle">Luxurious absorbency and durability</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=800&q=80" alt="Premium Towels">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Our premium cotton terry towels combine exceptional softness with superior absorbency. Crafted from 100% long-staple cotton, these towels feature a dense, plush pile that gets softer with every wash while maintaining their luxurious texture and durability.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Features</h4>
                        <ul class="detail-list">
                            <li>Extra-thick terry for maximum absorbency</li>
                            <li>Reinforced hems for extended durability</li>
                            <li>Quick-drying technology</li>
                            <li>Colorfast dyes that resist fading</li>
                            <li>Available in terry and waffle weaves</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Sizes</div>
                                <div class="spec-value">Bath, Hand, Face, Pool & Spa</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Premium Cotton</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Weight</div>
                                <div class="spec-value">550 GSM (Plush Quality)</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Weave</div>
                                <div class="spec-value">Terry & Waffle Options</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Machine wash warm with like colors</li>
                            <li>Tumble dry on medium heat</li>
                            <li>Do not use fabric softener (reduces absorbency)</li>
                            <li>Iron on low heat if needed</li>
                            <li>Store in dry, well-ventilated area</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Runner Modal -->
    <div id="runner-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Bed Runner</h3>
                <p class="modal-subtitle">Decorative and protective bed accent</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" alt="Bed Runner">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Our lightweight bed runners combine decorative appeal with practical protection. Placed across the foot of the bed, they protect bedding from wear while adding a touch of elegance. The quilted construction with decorative stitching creates visual interest without adding bulk.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Features</h4>
                        <ul class="detail-list">
                            <li>Quilted construction with decorative stitching</li>
                            <li>Lightweight and easy to launder</li>
                            <li>Protects bedding from foot traffic and wear</li>
                            <li>Adds decorative accent to bed presentation</li>
                            <li>Available in multiple patterns and colors</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Dimensions</div>
                                <div class="spec-value">20" x 60" (Standard), Custom sizes available</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Patterns</div>
                                <div class="spec-value">Plain, Striped, Embroidered options</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Cotton or Cotton Blend</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Construction</div>
                                <div class="spec-value">Quilted with decorative stitching</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Machine wash cold with like colors</li>
                            <li>Tumble dry low, remove promptly</li>
                            <li>Iron on medium heat if needed</li>
                            <li>Store folded to prevent creasing</li>
                            <li>Professional cleaning for delicate embellishments</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Hospital Duvet Modal -->
    <div id="hospital-duvet-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Hospital Duvet</h3>
                <p class="modal-subtitle">Medical-grade comfort with anti-microbial protection</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80" alt="Hospital Duvet">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Specially designed for healthcare environments, this duvet combines comfort with clinical safety. Features anti-viral and anti-bacterial finishes that withstand repeated sterilization cycles while maintaining softness and warmth.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Medical Features</h4>
                        <ul class="detail-list">
                            <li>Anti-viral and anti-bacterial treatment</li>
                            <li>Hypoallergenic materials</li>
                            <li>Withstands high-temperature washing</li>
                            <li>Quick-drying for fast room turnover</li>
                            <li>Fluid-resistant barrier</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Dimensions</div>
                                <div class="spec-value">60×90 / 90×100 / 100×110 Inches</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% cotton with medical-grade finish</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Fill</div>
                                <div class="spec-value">Recron polyfibre with anti-microbial properties</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Safety Standards</div>
                                <div class="spec-value">Meets healthcare infection control requirements</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Machine wash at 60°C for sterilization</li>
                            <li>Use hospital-grade detergents</li>
                            <li>Tumble dry on medium heat</li>
                            <li>Do not use fabric softeners</li>
                            <li>Inspect regularly for wear and tear</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Hospital Duvet Cover Modal -->
    <div id="hospital-duvet-cover-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Hospital Duvet Cover</h3>
                <p class="modal-subtitle">Medical-grade protection with patient comfort</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=800&q=80" alt="Hospital Duvet Cover">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Medical-grade duvet cover designed for healthcare environments with advanced anti-viral and anti-bacterial properties. Features fluid-resistant barrier and reinforced stitching for extended durability in clinical settings.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Medical Features</h4>
                        <ul class="detail-list">
                            <li>Anti-viral and anti-bacterial finish</li>
                            <li>Fluid-resistant barrier protection</li>
                            <li>Reinforced stitching at stress points</li>
                            <li>Color-coded size identification</li>
                            <li>Withstands industrial laundering</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Thread Count</div>
                                <div class="spec-value">200TC Medical Grade</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Closure</div>
                                <div class="spec-value">Zipper or Snap Button options</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Cotton with medical finish</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Safety Standards</div>
                                <div class="spec-value">Healthcare infection control compliant</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Wash at 71°C for infection control</li>
                            <li>Use hospital-grade detergents</li>
                            <li>Tumble dry medium heat</li>
                            <li>Do not use fabric softeners</li>
                            <li>Inspect regularly for damage</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Hospital Pillow Modal -->
    <div id="hospital-pillow-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Hospital Pillow</h3>
                <p class="modal-subtitle">Medical-grade support with infection control</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1520614073990-dd6020b2d15f?auto=format&fit=crop&w=800&q=80" alt="Hospital Pillow">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Specially designed for healthcare settings, this medical-grade pillow provides optimal support while meeting strict infection control standards. Features anti-microbial properties and fluid-resistant barriers for patient safety.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Medical Features</h4>
                        <ul class="detail-list">
                            <li>Anti-microbial and anti-viral treatment</li>
                            <li>Fluid-resistant barrier protection</li>
                            <li>Hypoallergenic siliconised fiber filling</li>
                            <li>Adjustable firmness options</li>
                            <li>Withstands repeated sterilization</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Dimensions</div>
                                <div class="spec-value">Standard, Queen, King sizes</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Firmness</div>
                                <div class="spec-value">Soft, Medium, Firm options</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Fill Material</div>
                                <div class="spec-value">Medical-grade Siliconised Fiber</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Cover</div>
                                <div class="spec-value">Fluid-resistant medical fabric</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Machine wash at 71°C for disinfection</li>
                            <li>Use hospital-approved detergents</li>
                            <li>Tumble dry medium heat</li>
                            <li>Do not use fabric softeners</li>
                            <li>Inspect regularly for damage</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Hospital Pillow Case Modal -->
    <div id="hospital-pillow-case-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Hospital Pillow Case</h3>
                <p class="modal-subtitle">Infection control with patient comfort</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=800&q=80" alt="Hospital Pillow Case">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Medical-grade pillow cases designed for healthcare environments with advanced anti-viral and anti-bacterial properties. Provides both patient comfort and essential infection control measures.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Medical Features</h4>
                        <ul class="detail-list">
                            <li>Anti-viral and anti-bacterial finish</li>
                            <li>Fluid-resistant barrier</li>
                            <li>Reinforced stitching for durability</li>
                            <li>Color-coded for easy identification</li>
                            <li>Withstands industrial laundering</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Thread Count</div>
                                <div class="spec-value">200TC Medical Grade</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Sizes</div>
                                <div class="spec-value">Standard, Queen, King, Euro</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Closure</div>
                                <div class="spec-value">Envelope or Zipper options</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Cotton with medical finish</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Wash at 71°C for sterilization</li>
                            <li>Use hospital-grade detergents</li>
                            <li>Tumble dry medium heat</li>
                            <li>Do not use fabric softeners</li>
                            <li>Replace when showing signs of wear</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Hospital Bedsheets Modal -->
    <div id="hospital-bedsheets-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Hospital Bedsheets</h3>
                <p class="modal-subtitle">Clinical comfort with advanced protection</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" alt="Hospital Bedsheets">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Medical-grade bedsheets designed specifically for healthcare environments. Features anti-viral and anti-bacterial properties while maintaining patient comfort and durability through repeated industrial laundering cycles.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Medical Features</h4>
                        <ul class="detail-list">
                            <li>Anti-viral and anti-bacterial treatment</li>
                            <li>Fluid-resistant barrier protection</li>
                            <li>Reinforced corners and hems</li>
                            <li>Color-coded sizing system</li>
                            <li>Withstands high-temperature washing</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Thread Count</div>
                                <div class="spec-value">200TC Medical Grade</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Sizes</div>
                                <div class="spec-value">All standard hospital bed sizes</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Cotton with medical finish</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Features</div>
                                <div class="spec-value">Fitted sheets with elastic all around</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Wash at 71°C for infection control</li>
                            <li>Use hospital-approved detergents</li>
                            <li>Tumble dry medium heat</li>
                            <li>Do not use fabric softeners</li>
                            <li>Inspect regularly for wear</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Hospital Blankets Modal -->
    <div id="hospital-blankets-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Hospital Blankets</h3>
                <p class="modal-subtitle">Warmth with medical-grade safety</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1576873693822-34a5c539d307?auto=format&fit=crop&w=800&q=80" alt="Hospital Blankets">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Medical-grade blankets designed for patient comfort while meeting strict healthcare standards. Features anti-microbial properties and durable construction suitable for clinical environments and repeated sterilization.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Medical Features</h4>
                        <ul class="detail-list">
                            <li>Anti-microbial and anti-viral treatment</li>
                            <li>Hypoallergenic materials</li>
                            <li>Fluid-resistant properties</li>
                            <li>Durable binding for extended use</li>
                            <li>Withstands industrial laundering</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Weights</div>
                                <div class="spec-value">Light, Medium options</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Sizes</div>
                                <div class="spec-value">Single, Double, King sizes</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">Microfiber with medical finish</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Construction</div>
                                <div class="spec-value">Brushed finish for softness</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Machine wash at 60°C</li>
                            <li>Use hospital-grade detergents</li>
                            <li>Tumble dry medium heat</li>
                            <li>Do not use fabric softeners</li>
                            <li>Store in clean, dry conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Hospital Towels Modal -->
    <div id="hospital-towels-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Hospital Towels</h3>
                <p class="modal-subtitle">Clinical-grade absorbency with safety</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=800&q=80" alt="Hospital Towels">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Medical-grade towels designed for healthcare environments with superior absorbency and infection control properties. Perfect for patient care while maintaining strict hygiene standards.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Medical Features</h4>
                        <ul class="detail-list">
                            <li>Anti-microbial and anti-viral treatment</li>
                            <li>High absorbency for clinical use</li>
                            <li>Reinforced hems for durability</li>
                            <li>Color-coded for different departments</li>
                            <li>Withstands repeated sterilization</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Sizes</div>
                                <div class="spec-value">Bath, Hand, Face sizes</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Cotton with medical finish</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Weight</div>
                                <div class="spec-value">500 GSM (Clinical Grade)</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Weave</div>
                                <div class="spec-value">Terry & Waffle Options</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Wash at 71°C for sterilization</li>
                            <li>Use hospital-approved detergents</li>
                            <li>Tumble dry medium heat</li>
                            <li>Do not use fabric softeners</li>
                            <li>Inspect regularly for wear</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Hospital Bath Mat Modal -->
    <div id="hospital-bath-mat-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Hospital Bath Mat</h3>
                <p class="modal-subtitle">Safety and comfort for clinical bathrooms</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" alt="Hospital Bath Mat">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Medical-grade bath mats designed for healthcare facility bathrooms. Provides safety, comfort, and infection control with anti-slip properties and medical-grade finishes.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Medical Features</h4>
                        <ul class="detail-list">
                            <li>Anti-microbial and anti-fungal treatment</li>
                            <li>Non-slip backing for patient safety</li>
                            <li>Quick-drying for hygiene</li>
                            <li>Fluid-resistant properties</li>
                            <li>Withstands industrial laundering</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Dimensions</div>
                                <div class="spec-value">Standard and Large sizes available</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Cotton with medical finish</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Backing</div>
                                <div class="spec-value">Non-slip rubber backing</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Absorbency</div>
                                <div class="spec-value">High absorbency terry construction</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Machine wash at 60°C</li>
                            <li>Use hospital-grade detergents</li>
                            <li>Air dry or tumble dry low</li>
                            <li>Do not use fabric softeners</li>
                            <li>Inspect regularly for wear</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Hospital Uniform Categories Modal -->
    <div id="hospital-uniform-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Medical Uniform Categories</h3>
                <p class="modal-subtitle">Professional healthcare attire with advanced protection</p>
            </div>
            <div class="modal-body">
                <div class="gallery-grid" style="grid-template-columns: 1fr; gap: 2rem;">
                    <!-- Doctor's Coat -->
                    <div class="gallery-item">
                        <div class="gallery-image">
                            <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=600&q=80" alt="Doctor's Coat">
                        </div>
                        <div class="gallery-content">
                            <h3 class="gallery-title">Doctor's Lab Coat</h3>
                            <p class="gallery-description">Professional white lab coats with anti-microbial finish. Features multiple pockets and comfortable fit for long shifts.</p>
                            <div class="gallery-features">
                                <span class="gallery-feature">Anti-Microbial</span>
                                <span class="gallery-feature">Multiple Pockets</span>
                                <span class="gallery-feature">Comfort Fit</span>
                            </div>
                            <div class="color-swatches">
                                <div class="color-swatch white" title="White"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Nurse Uniform -->
                    <div class="gallery-item">
                        <div class="gallery-image">
                            <img src="https://images.unsplash.com/photo-1584467735871-8db9ac8d55b9?auto=format&fit=crop&w=600&q=80" alt="Nurse Uniform">
                        </div>
                        <div class="gallery-content">
                            <h3 class="gallery-title">Nurse Scrubs</h3>
                            <p class="gallery-description">Comfortable and practical scrubs designed for mobility and durability during long nursing shifts.</p>
                            <div class="gallery-features">
                                <span class="gallery-feature">Stretch Fabric</span>
                                <span class="gallery-feature">Multiple Pockets</span>
                                <span class="gallery-feature">Easy Care</span>
                            </div>
                            <div class="color-swatches">
                                <div class="color-swatch navy" title="Navy"></div>
                                <div class="color-swatch royalblue" title="Royal Blue"></div>
                                <div class="color-swatch teal" title="Teal"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Surgical Scrubs -->
                    <div class="gallery-item">
                        <div class="gallery-image">
                            <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=600&q=80" alt="Surgical Scrubs">
                        </div>
                        <div class="gallery-content">
                            <h3 class="gallery-title">Surgical Scrubs</h3>
                            <p class="gallery-description">Sterile surgical attire with advanced anti-microbial properties for operating room environments.</p>
                            <div class="gallery-features">
                                <span class="gallery-feature">Sterile Grade</span>
                                <span class="gallery-feature">Anti-Microbial</span>
                                <span class="gallery-feature">Comfortable</span>
                            </div>
                            <div class="color-swatches">
                                <div class="color-swatch green" title="Surgical Green"></div>
                                <div class="color-swatch blue" title="Surgical Blue"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Hospital Staff Uniform -->
                    <div class="gallery-item">
                        <div class="gallery-image">
                            <img src="https://images.unsplash.com/photo-1584467735871-8db9ac8d55b9?auto=format&fit=crop&w=600&q=80" alt="Hospital Staff Uniform">
                        </div>
                        <div class="gallery-content">
                            <h3 class="gallery-title">Hospital Staff Uniform</h3>
                            <p class="gallery-description">Professional uniforms for administrative and support staff with hospital branding options.</p>
                            <div class="gallery-features">
                                <span class="gallery-feature">Professional</span>
                                <span class="gallery-feature">Branded Options</span>
                                <span class="gallery-feature">Comfortable</span>
                            </div>
                            <div class="color-swatches">
                                <div class="color-swatch navy" title="Navy"></div>
                                <div class="color-swatch grey" title="Grey"></div>
                                <div class="color-swatch white" title="White"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>Uniform Specifications</h4>
                    <div class="spec-grid">
                        <div class="spec-item">
                            <div class="spec-label">Material</div>
                            <div class="spec-value">Premium cotton blend with anti-microbial finish</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Sizes</div>
                            <div class="spec-value">XS to XXL</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Special Features</div>
                            <div class="spec-value">Anti-microbial, Anti-viral, Wrinkle-resistant</div>
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>Care Instructions</h4>
                    <ul class="detail-list">
                        <li>Machine wash warm with like colors</li>
                        <li>Tumble dry medium</li>
                        <li>Iron on medium heat if needed</li>
                        <li>Do not bleach</li>
                        <li>Maintains anti-microbial properties for up to 100 washes</li>
                    </ul>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Custom Uniform Quote</a>
            </div>
        </div>
    </div>

    <!-- Spa Cotton Towels Modal -->
    <div id="spa-cotton-towels-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Spa Cotton Terry Towels</h3>
                <p class="modal-subtitle">Luxurious absorbency for wellness experiences</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=800&q=80" alt="Spa Cotton Towels">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Premium cotton terry towels designed specifically for spa environments. Extra-thick and incredibly soft, these towels provide the ultimate in comfort and absorbency for your clients' relaxation experience. The high GSM weight ensures maximum plushness and durability through repeated commercial laundering.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Spa Features</h4>
                        <ul class="detail-list">
                            <li>Extra-thick terry for maximum absorbency</li>
                            <li>Gentle on sensitive skin</li>
                            <li>Maintains softness after repeated washing</li>
                            <li>Available in multiple spa-appropriate colors</li>
                            <li>Quick-drying for high turnover</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Sizes</div>
                                <div class="spec-value">Bath, Hand, Face, and Spa Wrap</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Premium Egyptian Cotton</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Weight</div>
                                <div class="spec-value">600 GSM (extra plush)</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Absorbency</div>
                                <div class="spec-value">8x own weight in water</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Wash at 40°C with mild detergent</li>
                            <li>Use fabric softener for extra softness</li>
                            <li>Tumble dry on low heat</li>
                            <li>Iron on medium if needed</li>
                            <li>Store in dry, well-ventilated area</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Spa Bamboo Towels Modal -->
    <div id="spa-bamboo-towels-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Spa Bamboo Waffle Towels</h3>
                <p class="modal-subtitle">Eco-friendly luxury for premium spa experiences</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80" alt="Spa Bamboo Towels">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Premium bamboo waffle towels offering exceptional softness and sustainability. The unique waffle weave provides superior absorbency while remaining lightweight and quick-drying. Perfect for luxury spa treatments and environmentally conscious establishments.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Spa Features</h4>
                        <ul class="detail-list">
                            <li>Naturally anti-bacterial and odor-resistant</li>
                            <li>Hypoallergenic and gentle on sensitive skin</li>
                            <li>Superior moisture-wicking properties</li>
                            <li>Eco-friendly and sustainable material</li>
                            <li>Lightweight yet highly absorbent</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Sizes</div>
                                <div class="spec-value">Bath, Hand, Face, and Treatment sizes</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Bamboo Viscose</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Weave</div>
                                <div class="spec-value">Waffle weave for optimal absorbency</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Sustainability</div>
                                <div class="spec-value">Renewable resource, biodegradable</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Machine wash cold with mild detergent</li>
                            <li>Line dry or tumble dry low</li>
                            <li>Do not use bleach or fabric softener</li>
                            <li>Iron on low heat if needed</li>
                            <li>Store in dry conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Salon Cotton Towels Modal -->
    <div id="salon-cotton-towels-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Salon Cotton Terry Towels</h3>
                <p class="modal-subtitle">Professional-grade towels for busy salons</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=800&q=80" alt="Salon Cotton Towels">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Designed specifically for professional salon use, these cotton terry towels are bleach-safe and colorfast. Reinforced hems ensure durability through frequent washing, while maintaining the softness your clients expect. The medium weight provides the perfect balance of absorbency and quick drying for high-volume environments.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Salon Features</h4>
                        <ul class="detail-list">
                            <li>Bleach-safe for sanitation</li>
                            <li>Colorfast to prevent dye transfer</li>
                            <li>Reinforced hems for durability</li>
                            <li>Quick-drying for high turnover</li>
                            <li>Medium weight for optimal performance</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Sizes</div>
                                <div class="spec-value">Salon Cape, Neck Strip, and Processing Towels</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Cotton Terry</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Weight</div>
                                <div class="spec-value">450 GSM (professional grade)</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Bleach Resistance</div>
                                <div class="spec-value">Withstands up to 200 bleach cycles</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Wash at 60°C with bleach for sanitation</li>
                            <li>Tumble dry on high heat</li>
                            <li>Can be ironed if needed</li>
                            <li>Store in dry, well-ventilated area</li>
                            <li>Replace when showing signs of wear</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <!-- Salon Bamboo Towels Modal -->
    <div id="salon-bamboo-towels-modal" class="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3 class="modal-title">Salon Bamboo Waffle Towels</h3>
                <p class="modal-subtitle">Eco-friendly performance for modern salons</p>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80" alt="Salon Bamboo Towels">
                </div>
                <div class="modal-details">
                    <div class="detail-section">
                        <h4>Description</h4>
                        <p>Premium bamboo waffle towels designed for the demands of professional salon environments. Offering superior softness, excellent color retention, and eco-friendly credentials, these towels provide the perfect balance of performance and sustainability for modern salons.</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Salon Features</h4>
                        <ul class="detail-list">
                            <li>Naturally anti-bacterial and odor-resistant</li>
                            <li>Excellent color retention</li>
                            <li>Quick-drying for high turnover</li>
                            <li>Gentle on client's skin and hair</li>
                            <li>Sustainable and eco-friendly</li>
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Specifications</h4>
                        <div class="spec-grid">
                            <div class="spec-item">
                                <div class="spec-label">Sizes</div>
                                <div class="spec-value">Salon Cape, Processing, and Styling Towels</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Material</div>
                                <div class="spec-value">100% Bamboo Viscose</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Weave</div>
                                <div class="spec-value">Waffle weave for optimal performance</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-label">Color Options</div>
                                <div class="spec-value">Natural white only for bleach safety</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Care Instructions</h4>
                        <ul class="detail-list">
                            <li>Wash at 40°C with mild detergent</li>
                            <li>Can be bleached for sanitation</li>
                            <li>Tumble dry low or line dry</li>
                            <li>Do not use fabric softener</li>
                            <li>Iron on low heat if needed</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="/about#contact" class="btn btn-primary">Request Quote</a>
            </div>
        </div>
    </div>

    <script>
        // Enhanced scroll animations
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { 
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            fadeElements.forEach(element => {
                fadeObserver.observe(element);
            });
            
            // Enhanced mobile menu toggle
            const mobileToggle = document.querySelector('.mobile-toggle');
            const mobileNav = document.querySelector('nav.mobile');
            
            mobileToggle.addEventListener('click', function() {
                const isActive = mobileNav.classList.contains('active');
                
                if (isActive) {
                    mobileNav.classList.remove('active');
                    this.innerHTML = '☰';
                } else {
                    mobileNav.classList.add('active');
                    this.innerHTML = '✕';
                }
            });
            
            // Close mobile menu when clicking on links
            const mobileLinks = document.querySelectorAll('nav.mobile a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileNav.classList.remove('active');
                    mobileToggle.innerHTML = '☰';
                });
            });
            
            // FIXED: Category navigation with proper scroll detection
            const categoryLinks = document.querySelectorAll('.category-link');
            const categorySections = document.querySelectorAll('.category-section');
            
            // Update active category on scroll - IMPROVED LOGIC
            const updateActiveCategory = () => {
                let currentSection = null;
                const scrollPosition = window.scrollY + 150; // Offset for header and nav
                
                categorySections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        currentSection = section;
                    }
                });
                
                if (currentSection) {
                    const currentId = currentSection.id;
                    categoryLinks.forEach(link => {
                        const href = link.getAttribute('href').substring(1); // Remove #
                        link.classList.toggle('active', href === currentId);
                    });
                }
            };
            
            // Initial call and scroll event listener
            updateActiveCategory();
            window.addEventListener('scroll', updateActiveCategory);
            
            // Smooth scroll for category links
            categoryLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 120;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                        
                        // Update active state immediately
                        categoryLinks.forEach(l => l.classList.remove('active'));
                        this.classList.add('active');
                    }
                });
            });
            
            // Enhanced header scroll effect
            let lastScrollY = window.scrollY;
            const header = document.querySelector('header');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(253, 252, 248, 0.98)';
                    header.style.padding = '0.5rem 0';
                    
                    if (window.scrollY > lastScrollY) {
                        header.style.transform = 'translateY(-100%)';
                    } else {
                        header.style.transform = 'translateY(0)';
                    }
                } else {
                    header.style.background = 'rgba(253, 252, 248, 0.95)';
                    header.style.padding = '0';
                    header.style.transform = 'translateY(0)';
                }
                
                lastScrollY = window.scrollY;
            });
            
            // FIXED: Gallery Modal Functionality for ALL sections
            const galleryButtons = document.querySelectorAll('.gallery-btn');
            const modals = document.querySelectorAll('.modal');
            const closeButtons = document.querySelectorAll('.modal-close');
            
            // FIX: Only open modal when the button is clicked, not the entire gallery item
            galleryButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent event from bubbling to parent
                    
                    const galleryItem = this.closest('.gallery-item');
                    const productType = galleryItem.getAttribute('data-product');
                    const modal = document.getElementById(`${productType}-modal`);
                    
                    if (modal) {
                        modal.style.display = 'block';
                        document.body.style.overflow = 'hidden';
                    } else {
                        console.log(`Modal for ${productType} not found`);
                        // Fallback: Show a simple alert for products without modals
                        alert(`Details for ${productType} coming soon! Contact us for more information.`);
                    }
                });
            });
            
            // FIX: Add touch event listeners for better mobile support
            galleryButtons.forEach(button => {
                button.addEventListener('touchstart', function(e) {
                    // Add visual feedback for touch
                    this.style.transform = 'scale(0.95)';
                });
                
                button.addEventListener('touchend', function(e) {
                    // Remove visual feedback
                    this.style.transform = '';
                });
            });
            
            // Close modal when close button is clicked
            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const modal = this.closest('.modal');
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                });
            });
            
            // Close modal when clicking outside the modal content
            modals.forEach(modal => {
                modal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        this.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                });
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    modals.forEach(modal => {
                        if (modal.style.display === 'block') {
                            modal.style.display = 'none';
                            document.body.style.overflow = 'auto';
                        }
                    });
                }
            });
            
            // FIX: Prevent default behavior for touch events on gallery items
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach(item => {
                item.addEventListener('touchstart', function(e) {
                    // Prevent default to avoid any unwanted behaviors
                    if (e.target.classList.contains('gallery-btn')) {
                        return; // Let the button handle its own events
                    }
                    e.preventDefault();
                });
            });
        });
    </script>
</body>
</html>
```
</details>

| Line | Code | Comment |
|---:|---|---|
| 1 | `<!DOCTYPE html>` | Declares HTML5 document type for standards-compliant rendering. |
| 2 | `<html lang="en">` | Root element; `lang` attribute supports accessibility and SEO. |
| 3 | `<head>` | Document head starts; metadata, fonts and styles live here. |
| 4 | `    <meta charset="UTF-8">` | Sets character encoding to UTF‑8. |
| 5 | `    <meta name="viewport" content="width=device-width, initial-scale=1.0">` | Configures responsive viewport for mobile scaling. |
| 6 | `    <title>Collections \| Secret Linen - Luxury Textiles</title>` | Defines the browser tab title and helps SEO. |
| 7 | `    <meta name="description" content="Explore Secret Linen's premium textile collections for hotels, hospitals, spas, and salons. Luxury bedding, towels, and custom solutions.">` | Structural/semantic HTML element. |
| 8 | `    ` |  |
| 9 | `    <!-- Fonts -->` | Structural/semantic HTML element. |
| 10 | `    <link rel="preconnect" href="https://fonts.googleapis.com">` | Hints the browser to preconnect to a domain for faster font loading. |
| 11 | `    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` | Hints the browser to preconnect to a domain for faster font loading. |
| 12 | `    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">` | Loads Google Fonts stylesheet for premium typography. |
| 13 | `    ` |  |
| 14 | `    <style>` | Inline CSS block begins. |
| 15 | `        :root {` | CSS selector block begins. |
| 16 | `            /* Enhanced Color Palette */` | Content/whitespace or standard markup. |
| 17 | `            --ivory: #fdfcf8;` | CSS custom property (design token) for consistent theming. |
| 18 | `            --linen: #f5f1e8;` | CSS custom property (design token) for consistent theming. |
| 19 | `            --stone: #e8e2d6;` | CSS custom property (design token) for consistent theming. |
| 20 | `            --clay: #d8cdbc;` | CSS custom property (design token) for consistent theming. |
| 21 | `            --charcoal: #1a1a1a;` | CSS custom property (design token) for consistent theming. |
| 22 | `            --bronze: #a8926e;` | CSS custom property (design token) for consistent theming. |
| 23 | `            --bronze-light: #c4b59a;` | CSS custom property (design token) for consistent theming. |
| 24 | `            --sage: #a8b8a5;` | CSS custom property (design token) for consistent theming. |
| 25 | `            ` |  |
| 26 | `            /* Typography */` | Content/whitespace or standard markup. |
| 27 | `            --serif: 'Playfair Display', serif;` | CSS custom property (design token) for consistent theming. |
| 28 | `            --sans: 'Inter', sans-serif;` | CSS custom property (design token) for consistent theming. |
| 29 | `            ` |  |
| 30 | `            /* Spacing */` | Content/whitespace or standard markup. |
| 31 | `            --section-padding: clamp(40px, 8vw, 120px);` | CSS custom property (design token) for consistent theming. |
| 32 | `            --container-width: min(1400px, 94%);` | CSS custom property (design token) for consistent theming. |
| 33 | `        }` | CSS selector block ends. |
| 34 | `        ` |  |
| 35 | `        * {` | CSS selector block begins. |
| 36 | `            margin: 0;` | CSS declaration. |
| 37 | `            padding: 0;` | CSS declaration. |
| 38 | `            box-sizing: border-box;` | CSS declaration. |
| 39 | `        }` | CSS selector block ends. |
| 40 | `        ` |  |
| 41 | `        html {` | CSS selector block begins. |
| 42 | `            scroll-behavior: smooth;` | Smooth scroll between in‑page anchors. |
| 43 | `        }` | CSS selector block ends. |
| 44 | `        ` |  |
| 45 | `        body {` | CSS selector block begins. |
| 46 | `            font-family: var(--sans);` | CSS declaration. |
| 47 | `            color: var(--charcoal);` | CSS declaration. |
| 48 | `            background-color: var(--ivory);` | CSS declaration. |
| 49 | `            line-height: 1.7;` | CSS declaration. |
| 50 | `            overflow-x: hidden;` | CSS declaration. |
| 51 | `            font-weight: 300;` | CSS declaration. |
| 52 | `        }` | CSS selector block ends. |
| 53 | `        ` |  |
| 54 | `        h1, h2, h3, h4 {` | CSS selector block begins. |
| 55 | `            font-family: var(--serif);` | CSS declaration. |
| 56 | `            font-weight: 400;` | CSS declaration. |
| 57 | `            line-height: 1.1;` | CSS declaration. |
| 58 | `            letter-spacing: -0.02em;` | CSS declaration. |
| 59 | `        }` | CSS selector block ends. |
| 60 | `        ` |  |
| 61 | `        h1 {` | CSS selector block begins. |
| 62 | `            font-size: clamp(2.5rem, 5vw, 4rem);` | CSS declaration. |
| 63 | `            font-weight: 300;` | CSS declaration. |
| 64 | `        }` | CSS selector block ends. |
| 65 | `        ` |  |
| 66 | `        h2 {` | CSS selector block begins. |
| 67 | `            font-size: clamp(2rem, 4vw, 3rem);` | CSS declaration. |
| 68 | `        }` | CSS selector block ends. |
| 69 | `        ` |  |
| 70 | `        h3 {` | CSS selector block begins. |
| 71 | `            font-size: clamp(1.4rem, 3vw, 2rem);` | CSS declaration. |
| 72 | `        }` | CSS selector block ends. |
| 73 | `        ` |  |
| 74 | `        .container {` | CSS selector block begins. |
| 75 | `            width: var(--container-width);` | CSS declaration. |
| 76 | `            margin: 0 auto;` | CSS declaration. |
| 77 | `        }` | CSS selector block ends. |
| 78 | `        ` |  |
| 79 | `        .section {` | CSS selector block begins. |
| 80 | `            padding: var(--section-padding) 0;` | CSS declaration. |
| 81 | `        }` | CSS selector block ends. |
| 82 | `        ` |  |
| 83 | `        /* Enhanced Header */` | Content/whitespace or standard markup. |
| 84 | `        header {` | CSS selector block begins. |
| 85 | `            position: fixed;` | CSS declaration. |
| 86 | `            top: 0;` | CSS declaration. |
| 87 | `            left: 0;` | CSS declaration. |
| 88 | `            width: 100%;` | CSS declaration. |
| 89 | `            z-index: 1000;` | Layer stacking control to keep nav/modals above content. |
| 90 | `            background: rgba(253, 252, 248, 0.95);` | CSS declaration. |
| 91 | `            backdrop-filter: blur(20px);` | Applies frosted-glass effect for overlays or headers. |
| 92 | `            border-bottom: 1px solid rgba(232, 226, 214, 0.3);` | CSS declaration. |
| 93 | `            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 94 | `        }` | CSS selector block ends. |
| 95 | `        ` |  |
| 96 | `        .header-container {` | CSS selector block begins. |
| 97 | `            display: flex;` | CSS declaration. |
| 98 | `            justify-content: space-between;` | CSS declaration. |
| 99 | `            align-items: center;` | CSS declaration. |
| 100 | `            padding: 1rem 0;` | CSS declaration. |
| 101 | `            position: relative;` | CSS declaration. |
| 102 | `        }` | CSS selector block ends. |
| 103 | `        ` |  |
| 104 | `        .logo {` | CSS selector block begins. |
| 105 | `            display: flex;` | CSS declaration. |
| 106 | `            align-items: center;` | CSS declaration. |
| 107 | `            gap: 12px;` | CSS declaration. |
| 108 | `            text-decoration: none;` | CSS declaration. |
| 109 | `            color: var(--charcoal);` | CSS declaration. |
| 110 | `            transition: transform 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 111 | `            z-index: 1001;` | Layer stacking control to keep nav/modals above content. |
| 112 | `        }` | CSS selector block ends. |
| 113 | `        ` |  |
| 114 | `        .logo:hover {` | CSS selector block begins. |
| 115 | `            transform: translateX(-4px);` | CSS declaration. |
| 116 | `        }` | CSS selector block ends. |
| 117 | `        ` |  |
| 118 | `        .logo-icon {` | CSS selector block begins. |
| 119 | `            width: 40px;` | CSS declaration. |
| 120 | `            height: 40px;` | CSS declaration. |
| 121 | `            background: linear-gradient(135deg, var(--bronze), var(--bronze-light));` | CSS declaration. |
| 122 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 123 | `            display: flex;` | CSS declaration. |
| 124 | `            align-items: center;` | CSS declaration. |
| 125 | `            justify-content: center;` | CSS declaration. |
| 126 | `            color: var(--ivory);` | CSS declaration. |
| 127 | `            font-family: var(--serif);` | CSS declaration. |
| 128 | `            font-size: 14px;` | CSS declaration. |
| 129 | `            font-weight: 500;` | CSS declaration. |
| 130 | `        }` | CSS selector block ends. |
| 131 | `        ` |  |
| 132 | `        .logo-text {` | CSS selector block begins. |
| 133 | `            font-family: var(--serif);` | CSS declaration. |
| 134 | `            font-size: 1.2rem;` | CSS declaration. |
| 135 | `            font-weight: 400;` | CSS declaration. |
| 136 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 137 | `        }` | CSS selector block ends. |
| 138 | `        ` |  |
| 139 | `        /* Desktop Navigation */` | Content/whitespace or standard markup. |
| 140 | `        nav.desktop {` | CSS selector block begins. |
| 141 | `            display: flex;` | CSS declaration. |
| 142 | `        }` | CSS selector block ends. |
| 143 | `        ` |  |
| 144 | `        nav.desktop ul {` | CSS selector block begins. |
| 145 | `            display: flex;` | CSS declaration. |
| 146 | `            list-style: none;` | CSS declaration. |
| 147 | `            gap: 2rem;` | CSS declaration. |
| 148 | `        }` | CSS selector block ends. |
| 149 | `        ` |  |
| 150 | `        nav.desktop a {` | CSS selector block begins. |
| 151 | `            text-decoration: none;` | CSS declaration. |
| 152 | `            color: var(--charcoal);` | CSS declaration. |
| 153 | `            font-weight: 400;` | CSS declaration. |
| 154 | `            font-size: 0.9rem;` | CSS declaration. |
| 155 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 156 | `            position: relative;` | CSS declaration. |
| 157 | `            padding: 0.5rem 0;` | CSS declaration. |
| 158 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 159 | `        }` | CSS selector block ends. |
| 160 | `        ` |  |
| 161 | `        nav.desktop a:after {` | CSS selector block begins. |
| 162 | `            content: '';` | CSS declaration. |
| 163 | `            position: absolute;` | CSS declaration. |
| 164 | `            bottom: 0;` | CSS declaration. |
| 165 | `            left: 0;` | CSS declaration. |
| 166 | `            width: 0;` | CSS declaration. |
| 167 | `            height: 1px;` | CSS declaration. |
| 168 | `            background: var(--bronze);` | CSS declaration. |
| 169 | `            transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 170 | `        }` | CSS selector block ends. |
| 171 | `        ` |  |
| 172 | `        nav.desktop a:hover {` | CSS selector block begins. |
| 173 | `            color: var(--bronze);` | CSS declaration. |
| 174 | `        }` | CSS selector block ends. |
| 175 | `        ` |  |
| 176 | `        nav.desktop a:hover:after {` | CSS selector block begins. |
| 177 | `            width: 100%;` | CSS declaration. |
| 178 | `        }` | CSS selector block ends. |
| 179 | `        ` |  |
| 180 | `        /* Mobile Navigation */` | Content/whitespace or standard markup. |
| 181 | `        .mobile-toggle {` | CSS selector block begins. |
| 182 | `            display: none;` | CSS declaration. |
| 183 | `            background: none;` | CSS declaration. |
| 184 | `            border: none;` | CSS declaration. |
| 185 | `            font-size: 1.5rem;` | CSS declaration. |
| 186 | `            cursor: pointer;` | CSS declaration. |
| 187 | `            color: var(--charcoal);` | CSS declaration. |
| 188 | `            transition: transform 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 189 | `            z-index: 1001;` | Layer stacking control to keep nav/modals above content. |
| 190 | `            padding: 0.5rem;` | CSS declaration. |
| 191 | `        }` | CSS selector block ends. |
| 192 | `        ` |  |
| 193 | `        .mobile-toggle:hover {` | CSS selector block begins. |
| 194 | `            transform: rotate(90deg);` | CSS declaration. |
| 195 | `        }` | CSS selector block ends. |
| 196 | `        ` |  |
| 197 | `        nav.mobile {` | CSS selector block begins. |
| 198 | `            display: none;` | CSS declaration. |
| 199 | `            position: absolute;` | CSS declaration. |
| 200 | `            top: 100%;` | CSS declaration. |
| 201 | `            left: 0;` | CSS declaration. |
| 202 | `            width: 100%;` | CSS declaration. |
| 203 | `            background: rgba(253, 252, 248, 0.98);` | CSS declaration. |
| 204 | `            backdrop-filter: blur(20px);` | Applies frosted-glass effect for overlays or headers. |
| 205 | `            border-bottom: 1px solid var(--stone);` | CSS declaration. |
| 206 | `            padding: 1.5rem 0;` | CSS declaration. |
| 207 | `            transform: translateY(-100%);` | CSS declaration. |
| 208 | `            opacity: 0;` | CSS declaration. |
| 209 | `            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 210 | `        }` | CSS selector block ends. |
| 211 | `        ` |  |
| 212 | `        nav.mobile.active {` | CSS selector block begins. |
| 213 | `            transform: translateY(0);` | CSS declaration. |
| 214 | `            opacity: 1;` | CSS declaration. |
| 215 | `        }` | CSS selector block ends. |
| 216 | `        ` |  |
| 217 | `        nav.mobile ul {` | CSS selector block begins. |
| 218 | `            list-style: none;` | CSS declaration. |
| 219 | `            display: flex;` | CSS declaration. |
| 220 | `            flex-direction: column;` | CSS declaration. |
| 221 | `            gap: 0.8rem;` | CSS declaration. |
| 222 | `        }` | CSS selector block ends. |
| 223 | `        ` |  |
| 224 | `        nav.mobile a {` | CSS selector block begins. |
| 225 | `            text-decoration: none;` | CSS declaration. |
| 226 | `            color: var(--charcoal);` | CSS declaration. |
| 227 | `            font-weight: 400;` | CSS declaration. |
| 228 | `            font-size: 1rem;` | CSS declaration. |
| 229 | `            padding: 0.75rem 1.5rem;` | CSS declaration. |
| 230 | `            display: block;` | CSS declaration. |
| 231 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 232 | `            border-bottom: 1px solid transparent;` | CSS declaration. |
| 233 | `        }` | CSS selector block ends. |
| 234 | `        ` |  |
| 235 | `        nav.mobile a:hover {` | CSS selector block begins. |
| 236 | `            color: var(--bronze);` | CSS declaration. |
| 237 | `            border-bottom-color: var(--bronze);` | CSS declaration. |
| 238 | `        }` | CSS selector block ends. |
| 239 | `        ` |  |
| 240 | `        /* Page Header */` | Content/whitespace or standard markup. |
| 241 | `        .page-header {` | CSS selector block begins. |
| 242 | `            padding: 140px 0 60px;` | CSS declaration. |
| 243 | `            background: linear-gradient(135deg, var(--ivory) 0%, var(--linen) 100%);` | CSS declaration. |
| 244 | `            text-align: center;` | CSS declaration. |
| 245 | `        }` | CSS selector block ends. |
| 246 | `        ` |  |
| 247 | `        .page-eyebrow {` | CSS selector block begins. |
| 248 | `            font-size: 0.75rem;` | CSS declaration. |
| 249 | `            text-transform: uppercase;` | CSS declaration. |
| 250 | `            letter-spacing: 0.3em;` | CSS declaration. |
| 251 | `            color: var(--bronze);` | CSS declaration. |
| 252 | `            margin-bottom: 1rem;` | CSS declaration. |
| 253 | `            display: block;` | CSS declaration. |
| 254 | `            font-weight: 400;` | CSS declaration. |
| 255 | `        }` | CSS selector block ends. |
| 256 | `        ` |  |
| 257 | `        .page-description {` | CSS selector block begins. |
| 258 | `            font-size: 1.1rem;` | CSS declaration. |
| 259 | `            max-width: 600px;` | CSS declaration. |
| 260 | `            margin: 0 auto;` | CSS declaration. |
| 261 | `            color: #555;` | CSS declaration. |
| 262 | `            font-weight: 300;` | CSS declaration. |
| 263 | `        }` | CSS selector block ends. |
| 264 | `        ` |  |
| 265 | `        /* Category Navigation */` | Content/whitespace or standard markup. |
| 266 | `        .category-nav {` | CSS selector block begins. |
| 267 | `            position: sticky;` | Sticky element that stays fixed within its container on scroll. |
| 268 | `            top: 0px;` | CSS declaration. |
| 269 | `            background: var(--ivory);` | CSS declaration. |
| 270 | `            border-bottom: 1px solid var(--stone);` | CSS declaration. |
| 271 | `            z-index: 100;` | Layer stacking control to keep nav/modals above content. |
| 272 | `        }` | CSS selector block ends. |
| 273 | `        ` |  |
| 274 | `        .category-nav-container {` | CSS selector block begins. |
| 275 | `            display: flex;` | CSS declaration. |
| 276 | `            justify-content: center;` | CSS declaration. |
| 277 | `            gap: 2rem;` | CSS declaration. |
| 278 | `            padding: 1.5rem 0;` | CSS declaration. |
| 279 | `        }` | CSS selector block ends. |
| 280 | `        ` |  |
| 281 | `        .category-link {` | CSS selector block begins. |
| 282 | `            text-decoration: none;` | CSS declaration. |
| 283 | `            color: var(--charcoal);` | CSS declaration. |
| 284 | `            font-weight: 400;` | CSS declaration. |
| 285 | `            padding: 0.75rem 1.5rem;` | CSS declaration. |
| 286 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 287 | `            position: relative;` | CSS declaration. |
| 288 | `            font-size: 0.9rem;` | CSS declaration. |
| 289 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 290 | `        }` | CSS selector block ends. |
| 291 | `        ` |  |
| 292 | `        .category-link.active {` | CSS selector block begins. |
| 293 | `            color: var(--bronze);` | CSS declaration. |
| 294 | `        }` | CSS selector block ends. |
| 295 | `        ` |  |
| 296 | `        .category-link.active:after {` | CSS selector block begins. |
| 297 | `            content: '';` | CSS declaration. |
| 298 | `            position: absolute;` | CSS declaration. |
| 299 | `            bottom: -1.5rem;` | CSS declaration. |
| 300 | `            left: 50%;` | CSS declaration. |
| 301 | `            transform: translateX(-50%);` | CSS declaration. |
| 302 | `            width: 4px;` | CSS declaration. |
| 303 | `            height: 4px;` | CSS declaration. |
| 304 | `            background: var(--bronze);` | CSS declaration. |
| 305 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 306 | `        }` | CSS selector block ends. |
| 307 | `        ` |  |
| 308 | `        .category-link:hover {` | CSS selector block begins. |
| 309 | `            color: var(--bronze);` | CSS declaration. |
| 310 | `        }` | CSS selector block ends. |
| 311 | `        ` |  |
| 312 | `        /* Category Sections */` | Content/whitespace or standard markup. |
| 313 | `        .category-section {` | CSS selector block begins. |
| 314 | `            scroll-margin-top: 120px;` | CSS declaration. |
| 315 | `        }` | CSS selector block ends. |
| 316 | `        ` |  |
| 317 | `        .category-header {` | CSS selector block begins. |
| 318 | `            margin-bottom: 3rem;` | CSS declaration. |
| 319 | `        }` | CSS selector block ends. |
| 320 | `        ` |  |
| 321 | `        .category-title {` | CSS selector block begins. |
| 322 | `            display: flex;` | CSS declaration. |
| 323 | `            align-items: center;` | CSS declaration. |
| 324 | `            gap: 1.2rem;` | CSS declaration. |
| 325 | `            margin-bottom: 1.2rem;` | CSS declaration. |
| 326 | `        }` | CSS selector block ends. |
| 327 | `        ` |  |
| 328 | `        .category-icon {` | CSS selector block begins. |
| 329 | `            width: 50px;` | CSS declaration. |
| 330 | `            height: 50px;` | CSS declaration. |
| 331 | `            background: var(--bronze);` | CSS declaration. |
| 332 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 333 | `            display: flex;` | CSS declaration. |
| 334 | `            align-items: center;` | CSS declaration. |
| 335 | `            justify-content: center;` | CSS declaration. |
| 336 | `            color: var(--ivory);` | CSS declaration. |
| 337 | `            font-size: 1.3rem;` | CSS declaration. |
| 338 | `        }` | CSS selector block ends. |
| 339 | `        ` |  |
| 340 | `        .category-description {` | CSS selector block begins. |
| 341 | `            font-size: 1.1rem;` | CSS declaration. |
| 342 | `            color: #555;` | CSS declaration. |
| 343 | `            max-width: 700px;` | CSS declaration. |
| 344 | `            font-weight: 300;` | CSS declaration. |
| 345 | `            line-height: 1.6;` | CSS declaration. |
| 346 | `        }` | CSS selector block ends. |
| 347 | `        ` |  |
| 348 | `        /* Gallery Grid for All Sections */` | Content/whitespace or standard markup. |
| 349 | `        .gallery-grid {` | CSS selector block begins. |
| 350 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 351 | `            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));` | CSS declaration. |
| 352 | `            gap: 1.5rem;` | CSS declaration. |
| 353 | `            margin-bottom: 4rem;` | CSS declaration. |
| 354 | `        }` | CSS selector block ends. |
| 355 | `        ` |  |
| 356 | `        .gallery-item {` | CSS selector block begins. |
| 357 | `            position: relative;` | CSS declaration. |
| 358 | `            overflow: hidden;` | CSS declaration. |
| 359 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 360 | `            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 361 | `            border: 1px solid var(--stone);` | CSS declaration. |
| 362 | `            background: var(--ivory);` | CSS declaration. |
| 363 | `        }` | CSS selector block ends. |
| 364 | `        ` |  |
| 365 | `        .gallery-item:hover {` | CSS selector block begins. |
| 366 | `            transform: translateY(-8px);` | CSS declaration. |
| 367 | `            box-shadow: 0 15px 30px rgba(0,0,0,0.1);` | Shadow depth for premium, elevated look on cards/components. |
| 368 | `            border-color: var(--bronze);` | CSS declaration. |
| 369 | `        }` | CSS selector block ends. |
| 370 | `        ` |  |
| 371 | `        .gallery-image {` | CSS selector block begins. |
| 372 | `            height: 220px;` | CSS declaration. |
| 373 | `            overflow: hidden;` | CSS declaration. |
| 374 | `        }` | CSS selector block ends. |
| 375 | `        ` |  |
| 376 | `        .gallery-image img {` | CSS selector block begins. |
| 377 | `            width: 100%;` | CSS declaration. |
| 378 | `            height: 100%;` | CSS declaration. |
| 379 | `            object-fit: cover;` | CSS declaration. |
| 380 | `            transition: transform 0.8s ease;` | Motion/animation for subtle, premium interactions. |
| 381 | `        }` | CSS selector block ends. |
| 382 | `        ` |  |
| 383 | `        .gallery-item:hover .gallery-image img {` | CSS selector block begins. |
| 384 | `            transform: scale(1.05);` | CSS declaration. |
| 385 | `        }` | CSS selector block ends. |
| 386 | `        ` |  |
| 387 | `        .gallery-content {` | CSS selector block begins. |
| 388 | `            padding: 1.5rem;` | CSS declaration. |
| 389 | `        }` | CSS selector block ends. |
| 390 | `        ` |  |
| 391 | `        .gallery-title {` | CSS selector block begins. |
| 392 | `            font-size: 1.2rem;` | CSS declaration. |
| 393 | `            margin-bottom: 0.5rem;` | CSS declaration. |
| 394 | `            font-weight: 500;` | CSS declaration. |
| 395 | `        }` | CSS selector block ends. |
| 396 | `        ` |  |
| 397 | `        .gallery-description {` | CSS selector block begins. |
| 398 | `            color: #666;` | CSS declaration. |
| 399 | `            font-size: 0.9rem;` | CSS declaration. |
| 400 | `            margin-bottom: 1rem;` | CSS declaration. |
| 401 | `            line-height: 1.5;` | CSS declaration. |
| 402 | `        }` | CSS selector block ends. |
| 403 | `        ` |  |
| 404 | `        .gallery-features {` | CSS selector block begins. |
| 405 | `            display: flex;` | CSS declaration. |
| 406 | `            flex-wrap: wrap;` | CSS declaration. |
| 407 | `            gap: 0.5rem;` | CSS declaration. |
| 408 | `            margin-bottom: 1rem;` | CSS declaration. |
| 409 | `        }` | CSS selector block ends. |
| 410 | `        ` |  |
| 411 | `        .gallery-feature {` | CSS selector block begins. |
| 412 | `            background: var(--linen);` | CSS declaration. |
| 413 | `            color: var(--charcoal);` | CSS declaration. |
| 414 | `            padding: 0.3rem 0.7rem;` | CSS declaration. |
| 415 | `            font-size: 0.8rem;` | CSS declaration. |
| 416 | `            border: 1px solid var(--stone);` | CSS declaration. |
| 417 | `        }` | CSS selector block ends. |
| 418 | `        ` |  |
| 419 | `        .gallery-btn {` | Button/CTA element styled as a pill with golden border. |
| 420 | `            display: inline-block;` | CSS declaration. |
| 421 | `            width: 100%;` | CSS declaration. |
| 422 | `            text-align: center;` | CSS declaration. |
| 423 | `            padding: 0.8rem;` | CSS declaration. |
| 424 | `            background: transparent;` | CSS declaration. |
| 425 | `            border: 1px solid var(--bronze);` | CSS declaration. |
| 426 | `            color: var(--bronze);` | CSS declaration. |
| 427 | `            text-decoration: none;` | CSS declaration. |
| 428 | `            font-weight: 400;` | CSS declaration. |
| 429 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 430 | `            cursor: pointer;` | CSS declaration. |
| 431 | `            font-family: var(--sans);` | CSS declaration. |
| 432 | `            font-size: 0.9rem;` | CSS declaration. |
| 433 | `        }` | CSS selector block ends. |
| 434 | `        ` |  |
| 435 | `        .gallery-btn:hover {` | Button/CTA element styled as a pill with golden border. |
| 436 | `            background: var(--bronze);` | CSS declaration. |
| 437 | `            color: var(--ivory);` | CSS declaration. |
| 438 | `        }` | CSS selector block ends. |
| 439 | `        ` |  |
| 440 | `        /* Color Swatches */` | Content/whitespace or standard markup. |
| 441 | `        .color-swatches {` | CSS selector block begins. |
| 442 | `            display: flex;` | CSS declaration. |
| 443 | `            flex-wrap: wrap;` | CSS declaration. |
| 444 | `            gap: 0.5rem;` | CSS declaration. |
| 445 | `            margin: 1rem 0;` | CSS declaration. |
| 446 | `        }` | CSS selector block ends. |
| 447 | `        ` |  |
| 448 | `        .color-swatch {` | CSS selector block begins. |
| 449 | `            width: 24px;` | CSS declaration. |
| 450 | `            height: 24px;` | CSS declaration. |
| 451 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 452 | `            border: 2px solid var(--stone);` | CSS declaration. |
| 453 | `            cursor: pointer;` | CSS declaration. |
| 454 | `            transition: transform 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 455 | `        }` | CSS selector block ends. |
| 456 | `        ` |  |
| 457 | `        .color-swatch:hover {` | CSS selector block begins. |
| 458 | `            transform: scale(1.1);` | CSS declaration. |
| 459 | `        }` | CSS selector block ends. |
| 460 | `        ` |  |
| 461 | `        .color-swatch.white { background: #ffffff; }` | CSS selector block ends. |
| 462 | `        .color-swatch.red { background: #c41e3a; }` | CSS selector block ends. |
| 463 | `        .color-swatch.grey { background: #808080; }` | CSS selector block ends. |
| 464 | `        .color-swatch.brown { background: #8b4513; }` | CSS selector block ends. |
| 465 | `        .color-swatch.navy { background: #000080; }` | CSS selector block ends. |
| 466 | `        .color-swatch.maroon { background: #800000; }` | CSS selector block ends. |
| 467 | `        .color-swatch.skinbrown { background: #d2b48c; }` | CSS selector block ends. |
| 468 | `        .color-swatch.ltblue { background: #add8e6; }` | CSS selector block ends. |
| 469 | `        .color-swatch.ltpink { background: #ffb6c1; }` | CSS selector block ends. |
| 470 | `        .color-swatch.camel { background: #c19a6b; }` | CSS selector block ends. |
| 471 | `        .color-swatch.darkbrown { background: #654321; }` | CSS selector block ends. |
| 472 | `        .color-swatch.royalblue { background: #4169e1; }` | CSS selector block ends. |
| 473 | `        .color-swatch.blue { background: #0000ff; }` | CSS selector block ends. |
| 474 | `        .color-swatch.green { background: #008000; }` | CSS selector block ends. |
| 475 | `        .color-swatch.black { background: #000000; }` | CSS selector block ends. |
| 476 | `        .color-swatch.teal { background: #008080; }` | CSS selector block ends. |
| 477 | `` |  |
| 478 | `        /* Modal Styles */` | Content/whitespace or standard markup. |
| 479 | `        .modal {` | Modal/dialog structure for detail overlays. |
| 480 | `            display: none;` | CSS declaration. |
| 481 | `            position: fixed;` | CSS declaration. |
| 482 | `            top: 0;` | CSS declaration. |
| 483 | `            left: 0;` | CSS declaration. |
| 484 | `            width: 100%;` | CSS declaration. |
| 485 | `            height: 100%;` | CSS declaration. |
| 486 | `            background: rgba(0,0,0,0.8);` | CSS declaration. |
| 487 | `            z-index: 2000;` | Layer stacking control to keep nav/modals above content. |
| 488 | `            overflow-y: auto;` | CSS declaration. |
| 489 | `            padding: 1rem;` | CSS declaration. |
| 490 | `        }` | CSS selector block ends. |
| 491 | `        ` |  |
| 492 | `        .modal-content {` | Modal/dialog structure for detail overlays. |
| 493 | `            background: var(--ivory);` | CSS declaration. |
| 494 | `            max-width: 900px;` | CSS declaration. |
| 495 | `            margin: 1rem auto;` | CSS declaration. |
| 496 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 497 | `            overflow: hidden;` | CSS declaration. |
| 498 | `            position: relative;` | CSS declaration. |
| 499 | `            animation: modalFadeIn 0.4s ease;` | Modal/dialog structure for detail overlays. |
| 500 | `        }` | CSS selector block ends. |
| 501 | `        ` |  |
| 502 | `        @keyframes modalFadeIn {` | Modal/dialog structure for detail overlays. |
| 503 | `            from { opacity: 0; transform: translateY(-20px); }` | CSS selector block ends. |
| 504 | `            to { opacity: 1; transform: translateY(0); }` | CSS selector block ends. |
| 505 | `        }` | CSS selector block ends. |
| 506 | `        ` |  |
| 507 | `        .modal-close {` | Modal/dialog structure for detail overlays. |
| 508 | `            position: absolute;` | CSS declaration. |
| 509 | `            top: 1rem;` | CSS declaration. |
| 510 | `            right: 1rem;` | CSS declaration. |
| 511 | `            background: var(--charcoal);` | CSS declaration. |
| 512 | `            color: var(--ivory);` | CSS declaration. |
| 513 | `            width: 36px;` | CSS declaration. |
| 514 | `            height: 36px;` | CSS declaration. |
| 515 | `            border: none;` | CSS declaration. |
| 516 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 517 | `            font-size: 1.1rem;` | CSS declaration. |
| 518 | `            cursor: pointer;` | CSS declaration. |
| 519 | `            z-index: 10;` | Layer stacking control to keep nav/modals above content. |
| 520 | `            display: flex;` | CSS declaration. |
| 521 | `            align-items: center;` | CSS declaration. |
| 522 | `            justify-content: center;` | CSS declaration. |
| 523 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 524 | `        }` | CSS selector block ends. |
| 525 | `        ` |  |
| 526 | `        .modal-close:hover {` | Modal/dialog structure for detail overlays. |
| 527 | `            background: var(--bronze);` | CSS declaration. |
| 528 | `            transform: rotate(90deg);` | CSS declaration. |
| 529 | `        }` | CSS selector block ends. |
| 530 | `        ` |  |
| 531 | `        .modal-header {` | Modal/dialog structure for detail overlays. |
| 532 | `            padding: 1.5rem 1.5rem 1rem;` | CSS declaration. |
| 533 | `            border-bottom: 1px solid var(--stone);` | CSS declaration. |
| 534 | `        }` | CSS selector block ends. |
| 535 | `        ` |  |
| 536 | `        .modal-title {` | Modal/dialog structure for detail overlays. |
| 537 | `            font-size: 1.6rem;` | CSS declaration. |
| 538 | `            margin-bottom: 0.5rem;` | CSS declaration. |
| 539 | `        }` | CSS selector block ends. |
| 540 | `        ` |  |
| 541 | `        .modal-subtitle {` | Modal/dialog structure for detail overlays. |
| 542 | `            color: #666;` | CSS declaration. |
| 543 | `            font-size: 0.95rem;` | CSS declaration. |
| 544 | `        }` | CSS selector block ends. |
| 545 | `        ` |  |
| 546 | `        .modal-body {` | Modal/dialog structure for detail overlays. |
| 547 | `            padding: 1.5rem;` | CSS declaration. |
| 548 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 549 | `            grid-template-columns: 1fr 1fr;` | CSS declaration. |
| 550 | `            gap: 1.5rem;` | CSS declaration. |
| 551 | `        }` | CSS selector block ends. |
| 552 | `        ` |  |
| 553 | `        .modal-image {` | Modal/dialog structure for detail overlays. |
| 554 | `            height: 350px;` | CSS declaration. |
| 555 | `            overflow: hidden;` | CSS declaration. |
| 556 | `        }` | CSS selector block ends. |
| 557 | `        ` |  |
| 558 | `        .modal-image img {` | Modal/dialog structure for detail overlays. |
| 559 | `            width: 100%;` | CSS declaration. |
| 560 | `            height: 100%;` | CSS declaration. |
| 561 | `            object-fit: cover;` | CSS declaration. |
| 562 | `        }` | CSS selector block ends. |
| 563 | `        ` |  |
| 564 | `        .modal-details {` | Modal/dialog structure for detail overlays. |
| 565 | `            display: flex;` | CSS declaration. |
| 566 | `            flex-direction: column;` | CSS declaration. |
| 567 | `            gap: 1.2rem;` | CSS declaration. |
| 568 | `        }` | CSS selector block ends. |
| 569 | `        ` |  |
| 570 | `        .detail-section h4 {` | CSS selector block begins. |
| 571 | `            margin-bottom: 0.8rem;` | CSS declaration. |
| 572 | `            font-size: 1.1rem;` | CSS declaration. |
| 573 | `            color: var(--bronze);` | CSS declaration. |
| 574 | `            border-bottom: 1px solid var(--stone);` | CSS declaration. |
| 575 | `            padding-bottom: 0.5rem;` | CSS declaration. |
| 576 | `        }` | CSS selector block ends. |
| 577 | `        ` |  |
| 578 | `        .detail-list {` | CSS selector block begins. |
| 579 | `            list-style: none;` | CSS declaration. |
| 580 | `        }` | CSS selector block ends. |
| 581 | `        ` |  |
| 582 | `        .detail-list li {` | CSS selector block begins. |
| 583 | `            margin-bottom: 0.5rem;` | CSS declaration. |
| 584 | `            padding-left: 1rem;` | CSS declaration. |
| 585 | `            position: relative;` | CSS declaration. |
| 586 | `        }` | CSS selector block ends. |
| 587 | `        ` |  |
| 588 | `        .detail-list li:before {` | CSS selector block begins. |
| 589 | `            content: '•';` | CSS declaration. |
| 590 | `            position: absolute;` | CSS declaration. |
| 591 | `            left: 0;` | CSS declaration. |
| 592 | `            color: var(--bronze);` | CSS declaration. |
| 593 | `        }` | CSS selector block ends. |
| 594 | `        ` |  |
| 595 | `        .spec-grid {` | CSS selector block begins. |
| 596 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 597 | `            grid-template-columns: 1fr 1fr;` | CSS declaration. |
| 598 | `            gap: 1rem;` | CSS declaration. |
| 599 | `        }` | CSS selector block ends. |
| 600 | `        ` |  |
| 601 | `        .spec-item {` | CSS selector block begins. |
| 602 | `            display: flex;` | CSS declaration. |
| 603 | `            flex-direction: column;` | CSS declaration. |
| 604 | `            gap: 0.3rem;` | CSS declaration. |
| 605 | `        }` | CSS selector block ends. |
| 606 | `        ` |  |
| 607 | `        .spec-label {` | CSS selector block begins. |
| 608 | `            font-size: 0.85rem;` | CSS declaration. |
| 609 | `            color: #666;` | CSS declaration. |
| 610 | `            text-transform: uppercase;` | CSS declaration. |
| 611 | `            letter-spacing: 0.05em;` | CSS declaration. |
| 612 | `        }` | CSS selector block ends. |
| 613 | `        ` |  |
| 614 | `        .spec-value {` | CSS selector block begins. |
| 615 | `            font-weight: 500;` | CSS declaration. |
| 616 | `        }` | CSS selector block ends. |
| 617 | `        ` |  |
| 618 | `        .modal-footer {` | Modal/dialog structure for detail overlays. |
| 619 | `            padding: 1.2rem 1.5rem;` | CSS declaration. |
| 620 | `            border-top: 1px solid var(--stone);` | CSS declaration. |
| 621 | `            display: flex;` | CSS declaration. |
| 622 | `            justify-content: flex-end;` | CSS declaration. |
| 623 | `            gap: 1rem;` | CSS declaration. |
| 624 | `        }` | CSS selector block ends. |
| 625 | `        ` |  |
| 626 | `        .btn {` | Button/CTA element styled as a pill with golden border. |
| 627 | `            display: inline-flex;` | CSS declaration. |
| 628 | `            align-items: center;` | CSS declaration. |
| 629 | `            padding: 0.9rem 1.8rem;` | CSS declaration. |
| 630 | `            text-decoration: none;` | CSS declaration. |
| 631 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 632 | `            font-weight: 400;` | CSS declaration. |
| 633 | `            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 634 | `            border: 1px solid transparent;` | CSS declaration. |
| 635 | `            font-size: 0.9rem;` | CSS declaration. |
| 636 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 637 | `            position: relative;` | CSS declaration. |
| 638 | `            overflow: hidden;` | CSS declaration. |
| 639 | `            cursor: pointer;` | CSS declaration. |
| 640 | `        }` | CSS selector block ends. |
| 641 | `        ` |  |
| 642 | `        .btn:before {` | Button/CTA element styled as a pill with golden border. |
| 643 | `            content: '';` | CSS declaration. |
| 644 | `            position: absolute;` | CSS declaration. |
| 645 | `            top: 0;` | CSS declaration. |
| 646 | `            left: -100%;` | CSS declaration. |
| 647 | `            width: 100%;` | CSS declaration. |
| 648 | `            height: 100%;` | CSS declaration. |
| 649 | `            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);` | CSS declaration. |
| 650 | `            transition: left 0.6s ease;` | Motion/animation for subtle, premium interactions. |
| 651 | `        }` | CSS selector block ends. |
| 652 | `        ` |  |
| 653 | `        .btn:hover:before {` | Button/CTA element styled as a pill with golden border. |
| 654 | `            left: 100%;` | CSS declaration. |
| 655 | `        }` | CSS selector block ends. |
| 656 | `        ` |  |
| 657 | `        .btn-primary {` | Button/CTA element styled as a pill with golden border. |
| 658 | `            background: var(--charcoal);` | CSS declaration. |
| 659 | `            color: var(--ivory);` | CSS declaration. |
| 660 | `            border-color: var(--charcoal);` | CSS declaration. |
| 661 | `        }` | CSS selector block ends. |
| 662 | `        ` |  |
| 663 | `        .btn-primary:hover {` | Button/CTA element styled as a pill with golden border. |
| 664 | `            background: var(--bronze);` | CSS declaration. |
| 665 | `            color: var(--ivory);` | CSS declaration. |
| 666 | `            border-color: var(--bronze);` | CSS declaration. |
| 667 | `            transform: translateY(-2px);` | CSS declaration. |
| 668 | `        }` | CSS selector block ends. |
| 669 | `        ` |  |
| 670 | `        .btn-outline {` | Button/CTA element styled as a pill with golden border. |
| 671 | `            background: transparent;` | CSS declaration. |
| 672 | `            color: var(--charcoal);` | CSS declaration. |
| 673 | `            border-color: var(--stone);` | CSS declaration. |
| 674 | `        }` | CSS selector block ends. |
| 675 | `        ` |  |
| 676 | `        .btn-outline:hover {` | Button/CTA element styled as a pill with golden border. |
| 677 | `            background: var(--linen);` | CSS declaration. |
| 678 | `            border-color: var(--bronze);` | CSS declaration. |
| 679 | `        }` | CSS selector block ends. |
| 680 | `        ` |  |
| 681 | `        /* Quick Specs */` | Content/whitespace or standard markup. |
| 682 | `        .quick-specs {` | CSS selector block begins. |
| 683 | `            background: var(--ivory);` | CSS declaration. |
| 684 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 685 | `            padding: 2.5rem;` | CSS declaration. |
| 686 | `            margin-top: 3rem;` | CSS declaration. |
| 687 | `            border: 1px solid var(--stone);` | CSS declaration. |
| 688 | `        }` | CSS selector block ends. |
| 689 | `        ` |  |
| 690 | `        .specs-grid {` | CSS selector block begins. |
| 691 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 692 | `            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));` | CSS declaration. |
| 693 | `            gap: 2rem;` | CSS declaration. |
| 694 | `        }` | CSS selector block ends. |
| 695 | `        ` |  |
| 696 | `        .spec-item {` | CSS selector block begins. |
| 697 | `            text-align: center;` | CSS declaration. |
| 698 | `        }` | CSS selector block ends. |
| 699 | `        ` |  |
| 700 | `        .spec-icon {` | CSS selector block begins. |
| 701 | `            width: 45px;` | CSS declaration. |
| 702 | `            height: 45px;` | CSS declaration. |
| 703 | `            background: var(--linen);` | CSS declaration. |
| 704 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 705 | `            display: flex;` | CSS declaration. |
| 706 | `            align-items: center;` | CSS declaration. |
| 707 | `            justify-content: center;` | CSS declaration. |
| 708 | `            margin: 0 auto 1.2rem;` | CSS declaration. |
| 709 | `            color: var(--bronze);` | CSS declaration. |
| 710 | `            font-size: 1.1rem;` | CSS declaration. |
| 711 | `        }` | CSS selector block ends. |
| 712 | `        ` |  |
| 713 | `        .spec-label {` | CSS selector block begins. |
| 714 | `            font-size: 0.85rem;` | CSS declaration. |
| 715 | `            color: #666;` | CSS declaration. |
| 716 | `            margin-bottom: 0.75rem;` | CSS declaration. |
| 717 | `            text-transform: uppercase;` | CSS declaration. |
| 718 | `            letter-spacing: 0.1em;` | CSS declaration. |
| 719 | `            font-weight: 400;` | CSS declaration. |
| 720 | `        }` | CSS selector block ends. |
| 721 | `        ` |  |
| 722 | `        .spec-value {` | CSS selector block begins. |
| 723 | `            font-weight: 500;` | CSS declaration. |
| 724 | `            color: var(--charcoal);` | CSS declaration. |
| 725 | `            font-size: 1rem;` | CSS declaration. |
| 726 | `        }` | CSS selector block ends. |
| 727 | `        ` |  |
| 728 | `        /* CTA Section */` | Content/whitespace or standard markup. |
| 729 | `        .cta-section {` | CSS selector block begins. |
| 730 | `            background: linear-gradient(135deg, var(--charcoal) 0%, #2a2a2a 100%);` | CSS declaration. |
| 731 | `            color: var(--ivory);` | CSS declaration. |
| 732 | `            text-align: center;` | CSS declaration. |
| 733 | `            position: relative;` | CSS declaration. |
| 734 | `            overflow: hidden;` | CSS declaration. |
| 735 | `            padding: 80px 0;` | CSS declaration. |
| 736 | `        }` | CSS selector block ends. |
| 737 | `        ` |  |
| 738 | `        .cta-section::before {` | CSS selector block begins. |
| 739 | `            content: '';` | CSS declaration. |
| 740 | `            position: absolute;` | CSS declaration. |
| 741 | `            top: -80px;` | CSS declaration. |
| 742 | `            right: -80px;` | CSS declaration. |
| 743 | `            width: 250px;` | CSS declaration. |
| 744 | `            height: 250px;` | CSS declaration. |
| 745 | `            background: var(--bronze);` | CSS declaration. |
| 746 | `            opacity: 0.05;` | CSS declaration. |
| 747 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 748 | `        }` | CSS selector block ends. |
| 749 | `        ` |  |
| 750 | `        .cta-section h2 {` | CSS selector block begins. |
| 751 | `            color: var(--ivory);` | CSS declaration. |
| 752 | `            margin-bottom: 1.2rem;` | CSS declaration. |
| 753 | `        }` | CSS selector block ends. |
| 754 | `        ` |  |
| 755 | `        .cta-section p {` | CSS selector block begins. |
| 756 | `            font-size: 1.1rem;` | CSS declaration. |
| 757 | `            margin-bottom: 2.5rem;` | CSS declaration. |
| 758 | `            opacity: 0.9;` | CSS declaration. |
| 759 | `            max-width: 600px;` | CSS declaration. |
| 760 | `            margin-left: auto;` | CSS declaration. |
| 761 | `            margin-right: auto;` | CSS declaration. |
| 762 | `            font-weight: 300;` | CSS declaration. |
| 763 | `            line-height: 1.6;` | CSS declaration. |
| 764 | `        }` | CSS selector block ends. |
| 765 | `        ` |  |
| 766 | `        .btn-light {` | Button/CTA element styled as a pill with golden border. |
| 767 | `            background: var(--ivory);` | CSS declaration. |
| 768 | `            color: var(--charcoal);` | CSS declaration. |
| 769 | `            border-color: var(--ivory);` | CSS declaration. |
| 770 | `        }` | CSS selector block ends. |
| 771 | `        ` |  |
| 772 | `        .btn-light:hover {` | Button/CTA element styled as a pill with golden border. |
| 773 | `            background: var(--bronze);` | CSS declaration. |
| 774 | `            color: var(--ivory);` | CSS declaration. |
| 775 | `            border-color: var(--bronze);` | CSS declaration. |
| 776 | `        }` | CSS selector block ends. |
| 777 | `        ` |  |
| 778 | `        /* Enhanced Footer */` | Content/whitespace or standard markup. |
| 779 | `        footer {` | CSS selector block begins. |
| 780 | `            background: var(--charcoal);` | CSS declaration. |
| 781 | `            color: var(--ivory);` | CSS declaration. |
| 782 | `            padding: 3rem 0 1.5rem;` | CSS declaration. |
| 783 | `            width: 100%;` | CSS declaration. |
| 784 | `            position: relative;` | CSS declaration. |
| 785 | `        }` | CSS selector block ends. |
| 786 | `        ` |  |
| 787 | `        footer::before {` | CSS selector block begins. |
| 788 | `            content: '';` | CSS declaration. |
| 789 | `            position: absolute;` | CSS declaration. |
| 790 | `            top: 0;` | CSS declaration. |
| 791 | `            left: 0;` | CSS declaration. |
| 792 | `            width: 100%;` | CSS declaration. |
| 793 | `            height: 1px;` | CSS declaration. |
| 794 | `            background: linear-gradient(90deg, transparent, var(--bronze), transparent);` | CSS declaration. |
| 795 | `        }` | CSS selector block ends. |
| 796 | `        ` |  |
| 797 | `        .footer-content {` | CSS selector block begins. |
| 798 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 799 | `            grid-template-columns: 2fr 1fr 1fr;` | CSS declaration. |
| 800 | `            gap: 2.5rem;` | CSS declaration. |
| 801 | `            margin-bottom: 2.5rem;` | CSS declaration. |
| 802 | `        }` | CSS selector block ends. |
| 803 | `        ` |  |
| 804 | `        .footer-brand {` | CSS selector block begins. |
| 805 | `            display: flex;` | CSS declaration. |
| 806 | `            flex-direction: column;` | CSS declaration. |
| 807 | `        }` | CSS selector block ends. |
| 808 | `        ` |  |
| 809 | `        .footer-logo {` | CSS selector block begins. |
| 810 | `            display: flex;` | CSS declaration. |
| 811 | `            align-items: center;` | CSS declaration. |
| 812 | `            gap: 12px;` | CSS declaration. |
| 813 | `            margin-bottom: 1.2rem;` | CSS declaration. |
| 814 | `        }` | CSS selector block ends. |
| 815 | `        ` |  |
| 816 | `        .footer-description {` | CSS selector block begins. |
| 817 | `            opacity: 0.7;` | CSS declaration. |
| 818 | `            line-height: 1.6;` | CSS declaration. |
| 819 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 820 | `            font-weight: 300;` | CSS declaration. |
| 821 | `            max-width: 400px;` | CSS declaration. |
| 822 | `        }` | CSS selector block ends. |
| 823 | `        ` |  |
| 824 | `        .footer-heading {` | CSS selector block begins. |
| 825 | `            font-size: 1rem;` | CSS declaration. |
| 826 | `            margin-bottom: 1.2rem;` | CSS declaration. |
| 827 | `            color: var(--ivory);` | CSS declaration. |
| 828 | `            font-weight: 400;` | CSS declaration. |
| 829 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 830 | `        }` | CSS selector block ends. |
| 831 | `        ` |  |
| 832 | `        .footer-links {` | CSS selector block begins. |
| 833 | `            list-style: none;` | CSS declaration. |
| 834 | `        }` | CSS selector block ends. |
| 835 | `        ` |  |
| 836 | `        .footer-links li {` | CSS selector block begins. |
| 837 | `            margin-bottom: 0.6rem;` | CSS declaration. |
| 838 | `        }` | CSS selector block ends. |
| 839 | `        ` |  |
| 840 | `        .footer-links a {` | CSS selector block begins. |
| 841 | `            color: rgba(253, 252, 248, 0.7);` | CSS declaration. |
| 842 | `            text-decoration: none;` | CSS declaration. |
| 843 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 844 | `            font-weight: 300;` | CSS declaration. |
| 845 | `            letter-spacing: 0.01em;` | CSS declaration. |
| 846 | `            font-size: 0.9rem;` | CSS declaration. |
| 847 | `        }` | CSS selector block ends. |
| 848 | `        ` |  |
| 849 | `        .footer-links a:hover {` | CSS selector block begins. |
| 850 | `            color: var(--bronze);` | CSS declaration. |
| 851 | `        }` | CSS selector block ends. |
| 852 | `        ` |  |
| 853 | `        .footer-contact {` | CSS selector block begins. |
| 854 | `            display: flex;` | CSS declaration. |
| 855 | `            flex-direction: column;` | CSS declaration. |
| 856 | `            gap: 0.8rem;` | CSS declaration. |
| 857 | `        }` | CSS selector block ends. |
| 858 | `        ` |  |
| 859 | `        .contact-item {` | CSS selector block begins. |
| 860 | `            display: flex;` | CSS declaration. |
| 861 | `            align-items: flex-start;` | CSS declaration. |
| 862 | `            gap: 0.6rem;` | CSS declaration. |
| 863 | `            color: rgba(253, 252, 248, 0.7);` | CSS declaration. |
| 864 | `            font-size: 0.9rem;` | CSS declaration. |
| 865 | `        }` | CSS selector block ends. |
| 866 | `        ` |  |
| 867 | `        .contact-item strong {` | CSS selector block begins. |
| 868 | `            color: var(--ivory);` | CSS declaration. |
| 869 | `            font-weight: 500;` | CSS declaration. |
| 870 | `        }` | CSS selector block ends. |
| 871 | `        ` |  |
| 872 | `        .footer-bottom {` | CSS selector block begins. |
| 873 | `            border-top: 1px solid rgba(253, 252, 248, 0.1);` | CSS declaration. |
| 874 | `            padding-top: 1.5rem;` | CSS declaration. |
| 875 | `            text-align: center;` | CSS declaration. |
| 876 | `            opacity: 0.6;` | CSS declaration. |
| 877 | `            font-size: 0.85rem;` | CSS declaration. |
| 878 | `            font-weight: 300;` | CSS declaration. |
| 879 | `        }` | CSS selector block ends. |
| 880 | `        ` |  |
| 881 | `        /* Enhanced Animations */` | Content/whitespace or standard markup. |
| 882 | `        .fade-in {` | CSS selector block begins. |
| 883 | `            opacity: 0;` | CSS declaration. |
| 884 | `            transform: translateY(40px);` | CSS declaration. |
| 885 | `            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 886 | `        }` | CSS selector block ends. |
| 887 | `        ` |  |
| 888 | `        .fade-in.visible {` | CSS selector block begins. |
| 889 | `            opacity: 1;` | CSS declaration. |
| 890 | `            transform: translateY(0);` | CSS declaration. |
| 891 | `        }` | CSS selector block ends. |
| 892 | `        ` |  |
| 893 | `        /* Enhanced Responsive Design */` | Content/whitespace or standard markup. |
| 894 | `        @media (max-width: 1200px) {` | Responsive breakpoint adjusting layout for smaller screens. |
| 895 | `            .gallery-grid {` | CSS selector block begins. |
| 896 | `                grid-template-columns: repeat(2, 1fr);` | CSS declaration. |
| 897 | `            }` | CSS selector block ends. |
| 898 | `            ` |  |
| 899 | `            .footer-content {` | CSS selector block begins. |
| 900 | `                grid-template-columns: 1fr 1fr;` | CSS declaration. |
| 901 | `            }` | CSS selector block ends. |
| 902 | `        }` | CSS selector block ends. |
| 903 | `        ` |  |
| 904 | `        @media (max-width: 768px) {` | Responsive breakpoint adjusting layout for smaller screens. |
| 905 | `            nav.desktop {` | CSS selector block begins. |
| 906 | `                display: none;` | CSS declaration. |
| 907 | `            }` | CSS selector block ends. |
| 908 | `            ` |  |
| 909 | `            .mobile-toggle {` | CSS selector block begins. |
| 910 | `                display: block;` | CSS declaration. |
| 911 | `            }` | CSS selector block ends. |
| 912 | `            ` |  |
| 913 | `            nav.mobile {` | CSS selector block begins. |
| 914 | `                display: block;` | CSS declaration. |
| 915 | `            }` | CSS selector block ends. |
| 916 | `            ` |  |
| 917 | `            .category-nav-container {` | CSS selector block begins. |
| 918 | `                flex-wrap: wrap;` | CSS declaration. |
| 919 | `                gap: 1rem;` | CSS declaration. |
| 920 | `                padding: 1rem 0;` | CSS declaration. |
| 921 | `            }` | CSS selector block ends. |
| 922 | `            ` |  |
| 923 | `            .gallery-grid {` | CSS selector block begins. |
| 924 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 925 | `            }` | CSS selector block ends. |
| 926 | `            ` |  |
| 927 | `            .specs-grid {` | CSS selector block begins. |
| 928 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 929 | `            }` | CSS selector block ends. |
| 930 | `            ` |  |
| 931 | `            .footer-content {` | CSS selector block begins. |
| 932 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 933 | `                gap: 1.5rem;` | CSS declaration. |
| 934 | `            }` | CSS selector block ends. |
| 935 | `            ` |  |
| 936 | `            .category-link.active:after {` | CSS selector block begins. |
| 937 | `                bottom: -1rem;` | CSS declaration. |
| 938 | `            }` | CSS selector block ends. |
| 939 | `            ` |  |
| 940 | `            .footer-brand {` | CSS selector block begins. |
| 941 | `                text-align: center;` | CSS declaration. |
| 942 | `                align-items: center;` | CSS declaration. |
| 943 | `            }` | CSS selector block ends. |
| 944 | `            ` |  |
| 945 | `            .modal-body {` | Modal/dialog structure for detail overlays. |
| 946 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 947 | `            }` | CSS selector block ends. |
| 948 | `            ` |  |
| 949 | `            .modal-image {` | Modal/dialog structure for detail overlays. |
| 950 | `                height: 250px;` | CSS declaration. |
| 951 | `            }` | CSS selector block ends. |
| 952 | `            ` |  |
| 953 | `            footer {` | CSS selector block begins. |
| 954 | `                padding: 2rem 1rem 1.5rem;` | CSS declaration. |
| 955 | `            }` | CSS selector block ends. |
| 956 | `            ` |  |
| 957 | `            /* FIX: Improved touch targets for mobile */` | Content/whitespace or standard markup. |
| 958 | `            .gallery-btn {` | Button/CTA element styled as a pill with golden border. |
| 959 | `                padding: 1rem;` | CSS declaration. |
| 960 | `                min-height: 48px; /* Minimum touch target size */` | CSS declaration. |
| 961 | `                display: flex;` | CSS declaration. |
| 962 | `                align-items: center;` | CSS declaration. |
| 963 | `                justify-content: center;` | CSS declaration. |
| 964 | `                font-size: 1rem;` | CSS declaration. |
| 965 | `            }` | CSS selector block ends. |
| 966 | `            ` |  |
| 967 | `            .color-swatches {` | CSS selector block begins. |
| 968 | `                justify-content: center;` | CSS declaration. |
| 969 | `                margin: 1.5rem 0;` | CSS declaration. |
| 970 | `            }` | CSS selector block ends. |
| 971 | `            ` |  |
| 972 | `            .color-swatch {` | CSS selector block begins. |
| 973 | `                width: 32px; /* Larger touch targets */` | CSS declaration. |
| 974 | `                height: 32px;` | CSS declaration. |
| 975 | `            }` | CSS selector block ends. |
| 976 | `            ` |  |
| 977 | `            .modal-footer {` | Modal/dialog structure for detail overlays. |
| 978 | `                flex-direction: column;` | CSS declaration. |
| 979 | `            }` | CSS selector block ends. |
| 980 | `            ` |  |
| 981 | `            .btn {` | Button/CTA element styled as a pill with golden border. |
| 982 | `                width: 100%;` | CSS declaration. |
| 983 | `                justify-content: center;` | CSS declaration. |
| 984 | `            }` | CSS selector block ends. |
| 985 | `        }` | CSS selector block ends. |
| 986 | `        ` |  |
| 987 | `        @media (max-width: 480px) {` | Responsive breakpoint adjusting layout for smaller screens. |
| 988 | `            .btn {` | Button/CTA element styled as a pill with golden border. |
| 989 | `                padding: 1rem 2rem;` | CSS declaration. |
| 990 | `            }` | CSS selector block ends. |
| 991 | `            ` |  |
| 992 | `            .gallery-content {` | CSS selector block begins. |
| 993 | `                padding: 1.2rem;` | CSS declaration. |
| 994 | `            }` | CSS selector block ends. |
| 995 | `            ` |  |
| 996 | `            .quick-specs {` | CSS selector block begins. |
| 997 | `                padding: 1.5rem;` | CSS declaration. |
| 998 | `            }` | CSS selector block ends. |
| 999 | `            ` |  |
| 1000 | `            .modal-body {` | Modal/dialog structure for detail overlays. |
| 1001 | `                padding: 1.2rem;` | CSS declaration. |
| 1002 | `            }` | CSS selector block ends. |
| 1003 | `            ` |  |
| 1004 | `            .modal-header {` | Modal/dialog structure for detail overlays. |
| 1005 | `                padding: 1.2rem 1.2rem 0.8rem;` | CSS declaration. |
| 1006 | `            }` | CSS selector block ends. |
| 1007 | `            ` |  |
| 1008 | `            .modal-footer {` | Modal/dialog structure for detail overlays. |
| 1009 | `                padding: 1rem 1.2rem;` | CSS declaration. |
| 1010 | `            }` | CSS selector block ends. |
| 1011 | `            ` |  |
| 1012 | `            .color-swatches {` | CSS selector block begins. |
| 1013 | `                justify-content: center;` | CSS declaration. |
| 1014 | `            }` | CSS selector block ends. |
| 1015 | `            ` |  |
| 1016 | `            /* FIX: Prevent accidental clicks on gallery items */` | Content/whitespace or standard markup. |
| 1017 | `            .gallery-item {` | CSS selector block begins. |
| 1018 | `                cursor: default;` | CSS declaration. |
| 1019 | `            }` | CSS selector block ends. |
| 1020 | `            ` |  |
| 1021 | `            .gallery-btn {` | Button/CTA element styled as a pill with golden border. |
| 1022 | `                cursor: pointer;` | CSS declaration. |
| 1023 | `            }` | CSS selector block ends. |
| 1024 | `            ` |  |
| 1025 | `            .page-header {` | CSS selector block begins. |
| 1026 | `                padding: 120px 0 40px;` | CSS declaration. |
| 1027 | `            }` | CSS selector block ends. |
| 1028 | `            ` |  |
| 1029 | `            .category-title {` | CSS selector block begins. |
| 1030 | `                flex-direction: column;` | CSS declaration. |
| 1031 | `                text-align: center;` | CSS declaration. |
| 1032 | `                gap: 1rem;` | CSS declaration. |
| 1033 | `            }` | CSS selector block ends. |
| 1034 | `        }` | CSS selector block ends. |
| 1035 | `        ` |  |
| 1036 | `        /* FIX: Add touch-specific improvements */` | Content/whitespace or standard markup. |
| 1037 | `        @media (hover: none) and (pointer: coarse) {` | Responsive breakpoint adjusting layout for smaller screens. |
| 1038 | `            /* Remove hover effects on touch devices */` | Content/whitespace or standard markup. |
| 1039 | `            .gallery-item:hover {` | CSS selector block begins. |
| 1040 | `                transform: none;` | CSS declaration. |
| 1041 | `                box-shadow: none;` | Shadow depth for premium, elevated look on cards/components. |
| 1042 | `                border-color: var(--stone);` | CSS declaration. |
| 1043 | `            }` | CSS selector block ends. |
| 1044 | `            ` |  |
| 1045 | `            .gallery-item:active {` | CSS selector block begins. |
| 1046 | `                transform: scale(0.98);` | CSS declaration. |
| 1047 | `            }` | CSS selector block ends. |
| 1048 | `            ` |  |
| 1049 | `            .gallery-btn:active {` | Button/CTA element styled as a pill with golden border. |
| 1050 | `                background: var(--bronze);` | CSS declaration. |
| 1051 | `                color: var(--ivory);` | CSS declaration. |
| 1052 | `                transform: scale(0.95);` | CSS declaration. |
| 1053 | `            }` | CSS selector block ends. |
| 1054 | `            ` |  |
| 1055 | `            /* Improve modal scrolling on iOS */` | Modal/dialog structure for detail overlays. |
| 1056 | `            .modal {` | Modal/dialog structure for detail overlays. |
| 1057 | `                -webkit-overflow-scrolling: touch;` | CSS declaration. |
| 1058 | `            }` | CSS selector block ends. |
| 1059 | `        }` | CSS selector block ends. |
| 1060 | `    </style>` | Inline CSS block ends. |
| 1061 | `</head>` | Structural/semantic HTML element. |
| 1062 | `<body>` | Document body starts; visible content and interactive UI. |
| 1063 | `    <!-- Header -->` | Structural/semantic HTML element. |
| 1064 | `    <header>` | Document head starts; metadata, fonts and styles live here. |
| 1065 | `        <div class="container header-container">` | Structural/semantic HTML element. |
| 1066 | `            <a href="/home" class="logo">` | Structural/semantic HTML element. |
| 1067 | `                <div class="logo-icon">SL</div>` | Structural/semantic HTML element. |
| 1068 | `                <div class="logo-text">Secret Linen</div>` | Structural/semantic HTML element. |
| 1069 | `            </a>` | Structural/semantic HTML element. |
| 1070 | `            ` |  |
| 1071 | `            <!-- Desktop Navigation -->` | Structural/semantic HTML element. |
| 1072 | `            <nav class="desktop">` | Navigation container (desktop/mobile menus, links). |
| 1073 | `                <ul>` | Structural/semantic HTML element. |
| 1074 | `                    <li><a href="/home">Home</a></li>` | Structural/semantic HTML element. |
| 1075 | `                    <li><a href="/collections" class="active">Collections</a></li>` | Structural/semantic HTML element. |
| 1076 | `                    <li><a href="/services">Services</a></li>` | Structural/semantic HTML element. |
| 1077 | `                    <li><a href="/about">About</a></li>` | Structural/semantic HTML element. |
| 1078 | `                    <li><a href="/about#contact">Contact</a></li>` | Structural/semantic HTML element. |
| 1079 | `                </ul>` | Structural/semantic HTML element. |
| 1080 | `            </nav>` | Structural/semantic HTML element. |
| 1081 | `            ` |  |
| 1082 | `            <!-- Mobile Toggle -->` | Structural/semantic HTML element. |
| 1083 | `            <button class="mobile-toggle">☰</button>` | Button/CTA element styled as a pill with golden border. |
| 1084 | `            ` |  |
| 1085 | `            <!-- Mobile Navigation -->` | Structural/semantic HTML element. |
| 1086 | `            <nav class="mobile">` | Navigation container (desktop/mobile menus, links). |
| 1087 | `                <ul>` | Structural/semantic HTML element. |
| 1088 | `                    <li><a href="/home">Home</a></li>` | Structural/semantic HTML element. |
| 1089 | `                    <li><a href="/collections" class="active">Collections</a></li>` | Structural/semantic HTML element. |
| 1090 | `                    <li><a href="/services">Services</a></li>` | Structural/semantic HTML element. |
| 1091 | `                    <li><a href="/about">About</a></li>` | Structural/semantic HTML element. |
| 1092 | `                    <li><a href="/about#contact">Contact</a></li>` | Structural/semantic HTML element. |
| 1093 | `                </ul>` | Structural/semantic HTML element. |
| 1094 | `            </nav>` | Structural/semantic HTML element. |
| 1095 | `        </div>` | Structural/semantic HTML element. |
| 1096 | `    </header>` | Structural/semantic HTML element. |
| 1097 | `` |  |
| 1098 | `    <!-- Page Header -->` | Structural/semantic HTML element. |
| 1099 | `    <section class="page-header">` | Semantic section block improving structure and SEO. |
| 1100 | `        <div class="container">` | Structural/semantic HTML element. |
| 1101 | `            <span class="page-eyebrow">Our Collections</span>` | Structural/semantic HTML element. |
| 1102 | `            <h1>Premium Textiles for Every Space</h1>` | Primary page heading. |
| 1103 | `            <p class="page-description">` | Paragraph text / supporting copy. |
| 1104 | `                Discover our carefully curated collections designed for hospitality excellence. Each piece combines luxury, durability, and timeless elegance.` | Content/whitespace or standard markup. |
| 1105 | `            </p>` | Structural/semantic HTML element. |
| 1106 | `        </div>` | Structural/semantic HTML element. |
| 1107 | `    </section>` | Structural/semantic HTML element. |
| 1108 | `` |  |
| 1109 | `    <!-- Category Navigation -->` | Structural/semantic HTML element. |
| 1110 | `    <nav class="category-nav">` | Navigation container (desktop/mobile menus, links). |
| 1111 | `        <div class="container category-nav-container">` | Structural/semantic HTML element. |
| 1112 | `            <a href="#hotels" class="category-link active">Hotels</a>` | Structural/semantic HTML element. |
| 1113 | `            <a href="#hospitals" class="category-link">Hospitals</a>` | Structural/semantic HTML element. |
| 1114 | `            <a href="#spas" class="category-link">Spas</a>` | Structural/semantic HTML element. |
| 1115 | `            <a href="#salons" class="category-link">Salons</a>` | Structural/semantic HTML element. |
| 1116 | `        </div>` | Structural/semantic HTML element. |
| 1117 | `    </nav>` | Structural/semantic HTML element. |
| 1118 | `` |  |
| 1119 | `    <!-- Hotels Collection -->` | Structural/semantic HTML element. |
| 1120 | `    <section id="hotels" class="section category-section">` | Semantic section block improving structure and SEO. |
| 1121 | `        <div class="container">` | Structural/semantic HTML element. |
| 1122 | `            <div class="category-header">` | Structural/semantic HTML element. |
| 1123 | `                <div class="category-title">` | Structural/semantic HTML element. |
| 1124 | `                    <div class="category-icon">🏨</div>` | Structural/semantic HTML element. |
| 1125 | `                    <h2>Hotel Collection</h2>` | Secondary section heading. |
| 1126 | `                </div>` | Structural/semantic HTML element. |
| 1127 | `                <p class="category-description">` | Paragraph text / supporting copy. |
| 1128 | `                    Luxury bedding and bath collections designed for premium hospitality experiences. Breathable fabrics, calm palettes, and durable construction for busy hotel environments.` | Content/whitespace or standard markup. |
| 1129 | `                </p>` | Structural/semantic HTML element. |
| 1130 | `            </div>` | Structural/semantic HTML element. |
| 1131 | `` |  |
| 1132 | `            <!-- Gallery Grid for Hotels -->` | Structural/semantic HTML element. |
| 1133 | `            <div class="gallery-grid">` | Grid layout container for responsive card/gallery alignment. |
| 1134 | `                <!-- Duvet -->` | Structural/semantic HTML element. |
| 1135 | `                <div class="gallery-item fade-in" data-product="duvet">` | Structural/semantic HTML element. |
| 1136 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1137 | `                        <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80" alt="Luxury Duvet">` | Image element; ensure alt text for accessibility. |
| 1138 | `                    </div>` | Structural/semantic HTML element. |
| 1139 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1140 | `                        <h3 class="gallery-title">Duvet</h3>` | Structural/semantic HTML element. |
| 1141 | `                        <p class="gallery-description">Lightweight yet warm, perfect for year-round comfort in luxury accommodations.</p>` | Paragraph text / supporting copy. |
| 1142 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1143 | `                            <span class="gallery-feature">100% Cotton</span>` | Structural/semantic HTML element. |
| 1144 | `                            <span class="gallery-feature">Recron Fill</span>` | Structural/semantic HTML element. |
| 1145 | `                            <span class="gallery-feature">Garment Dyed</span>` | Structural/semantic HTML element. |
| 1146 | `                        </div>` | Structural/semantic HTML element. |
| 1147 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1148 | `                            <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1149 | `                            <div class="color-swatch grey" title="Grey"></div>` | Structural/semantic HTML element. |
| 1150 | `                            <div class="color-swatch brown" title="Brown"></div>` | Structural/semantic HTML element. |
| 1151 | `                            <div class="color-swatch navy" title="Navy"></div>` | Structural/semantic HTML element. |
| 1152 | `                        </div>` | Structural/semantic HTML element. |
| 1153 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1154 | `                    </div>` | Structural/semantic HTML element. |
| 1155 | `                </div>` | Structural/semantic HTML element. |
| 1156 | `` |  |
| 1157 | `                <!-- Duvet Cover -->` | Structural/semantic HTML element. |
| 1158 | `                <div class="gallery-item fade-in" data-product="duvet-cover">` | Structural/semantic HTML element. |
| 1159 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1160 | `                        <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=600&q=80" alt="Duvet Cover">` | Image element; ensure alt text for accessibility. |
| 1161 | `                    </div>` | Structural/semantic HTML element. |
| 1162 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1163 | `                        <h3 class="gallery-title">Duvet Cover</h3>` | Structural/semantic HTML element. |
| 1164 | `                        <p class="gallery-description">Unmatched quality, durability, and softness that gets better with every wash.</p>` | Paragraph text / supporting copy. |
| 1165 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1166 | `                            <span class="gallery-feature">100% Cotton</span>` | Structural/semantic HTML element. |
| 1167 | `                            <span class="gallery-feature">Sateen Finish</span>` | Structural/semantic HTML element. |
| 1168 | `                            <span class="gallery-feature">Multiple Colors</span>` | Structural/semantic HTML element. |
| 1169 | `                        </div>` | Structural/semantic HTML element. |
| 1170 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1171 | `                            <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1172 | `                            <div class="color-swatch red" title="Red"></div>` | Structural/semantic HTML element. |
| 1173 | `                            <div class="color-swatch grey" title="Grey"></div>` | Structural/semantic HTML element. |
| 1174 | `                            <div class="color-swatch brown" title="Brown"></div>` | Structural/semantic HTML element. |
| 1175 | `                            <div class="color-swatch navy" title="Navy"></div>` | Structural/semantic HTML element. |
| 1176 | `                            <div class="color-swatch maroon" title="Maroon"></div>` | Structural/semantic HTML element. |
| 1177 | `                            <div class="color-swatch skinbrown" title="Skin Brown"></div>` | Structural/semantic HTML element. |
| 1178 | `                            <div class="color-swatch ltblue" title="Light Blue"></div>` | Structural/semantic HTML element. |
| 1179 | `                            <div class="color-swatch ltpink" title="Light Pink"></div>` | Structural/semantic HTML element. |
| 1180 | `                        </div>` | Structural/semantic HTML element. |
| 1181 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1182 | `                    </div>` | Structural/semantic HTML element. |
| 1183 | `                </div>` | Structural/semantic HTML element. |
| 1184 | `` |  |
| 1185 | `                <!-- Pillow -->` | Structural/semantic HTML element. |
| 1186 | `                <div class="gallery-item fade-in" data-product="pillow">` | Structural/semantic HTML element. |
| 1187 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1188 | `                        <img src="https://images.unsplash.com/photo-1520614073990-dd6020b2d15f?auto=format&fit=crop&w=600&q=80" alt="Hotel Pillow">` | Image element; ensure alt text for accessibility. |
| 1189 | `                    </div>` | Structural/semantic HTML element. |
| 1190 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1191 | `                        <h3 class="gallery-title">Pillow</h3>` | Structural/semantic HTML element. |
| 1192 | `                        <p class="gallery-description">Fluffy down pillow with adjustable firmness and cooling memory foam.</p>` | Paragraph text / supporting copy. |
| 1193 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1194 | `                            <span class="gallery-feature">Siliconised Fiber</span>` | Structural/semantic HTML element. |
| 1195 | `                            <span class="gallery-feature">Adjustable</span>` | Structural/semantic HTML element. |
| 1196 | `                            <span class="gallery-feature">Cooling</span>` | Structural/semantic HTML element. |
| 1197 | `                        </div>` | Structural/semantic HTML element. |
| 1198 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1199 | `                    </div>` | Structural/semantic HTML element. |
| 1200 | `                </div>` | Structural/semantic HTML element. |
| 1201 | `` |  |
| 1202 | `                <!-- Pillow Case -->` | Structural/semantic HTML element. |
| 1203 | `                <div class="gallery-item fade-in" data-product="pillow-case">` | Structural/semantic HTML element. |
| 1204 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1205 | `                        <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=600&q=80" alt="Pillow Case">` | Image element; ensure alt text for accessibility. |
| 1206 | `                    </div>` | Structural/semantic HTML element. |
| 1207 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1208 | `                        <h3 class="gallery-title">Pillow Case</h3>` | Structural/semantic HTML element. |
| 1209 | `                        <p class="gallery-description">Ridiculously soft 100% premium cotton with a lustrous sateen finish.</p>` | Paragraph text / supporting copy. |
| 1210 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1211 | `                            <span class="gallery-feature">100% Cotton</span>` | Structural/semantic HTML element. |
| 1212 | `                            <span class="gallery-feature">Sateen Finish</span>` | Structural/semantic HTML element. |
| 1213 | `                            <span class="gallery-feature">Wrinkle-Resistant</span>` | Structural/semantic HTML element. |
| 1214 | `                        </div>` | Structural/semantic HTML element. |
| 1215 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1216 | `                            <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1217 | `                            <div class="color-swatch red" title="Red"></div>` | Structural/semantic HTML element. |
| 1218 | `                            <div class="color-swatch grey" title="Grey"></div>` | Structural/semantic HTML element. |
| 1219 | `                            <div class="color-swatch brown" title="Brown"></div>` | Structural/semantic HTML element. |
| 1220 | `                            <div class="color-swatch navy" title="Navy"></div>` | Structural/semantic HTML element. |
| 1221 | `                            <div class="color-swatch maroon" title="Maroon"></div>` | Structural/semantic HTML element. |
| 1222 | `                            <div class="color-swatch skinbrown" title="Skin Brown"></div>` | Structural/semantic HTML element. |
| 1223 | `                            <div class="color-swatch ltblue" title="Light Blue"></div>` | Structural/semantic HTML element. |
| 1224 | `                            <div class="color-swatch ltpink" title="Light Pink"></div>` | Structural/semantic HTML element. |
| 1225 | `                        </div>` | Structural/semantic HTML element. |
| 1226 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1227 | `                    </div>` | Structural/semantic HTML element. |
| 1228 | `                </div>` | Structural/semantic HTML element. |
| 1229 | `` |  |
| 1230 | `                <!-- Bedsheets -->` | Structural/semantic HTML element. |
| 1231 | `                <div class="gallery-item fade-in" data-product="bedsheets">` | Structural/semantic HTML element. |
| 1232 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1233 | `                        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80" alt="Bedsheets">` | Image element; ensure alt text for accessibility. |
| 1234 | `                    </div>` | Structural/semantic HTML element. |
| 1235 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1236 | `                        <h3 class="gallery-title">Bedsheets</h3>` | Structural/semantic HTML element. |
| 1237 | `                        <p class="gallery-description">Pure cotton bedsheets for the utmost in comfort and style.</p>` | Paragraph text / supporting copy. |
| 1238 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1239 | `                            <span class="gallery-feature">100% Cotton</span>` | Structural/semantic HTML element. |
| 1240 | `                            <span class="gallery-feature">Multiple Colors</span>` | Structural/semantic HTML element. |
| 1241 | `                            <span class="gallery-feature">Various Sizes</span>` | Structural/semantic HTML element. |
| 1242 | `                        </div>` | Structural/semantic HTML element. |
| 1243 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1244 | `                            <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1245 | `                            <div class="color-swatch red" title="Red"></div>` | Structural/semantic HTML element. |
| 1246 | `                            <div class="color-swatch grey" title="Grey"></div>` | Structural/semantic HTML element. |
| 1247 | `                            <div class="color-swatch brown" title="Brown"></div>` | Structural/semantic HTML element. |
| 1248 | `                            <div class="color-swatch navy" title="Navy"></div>` | Structural/semantic HTML element. |
| 1249 | `                            <div class="color-swatch maroon" title="Maroon"></div>` | Structural/semantic HTML element. |
| 1250 | `                            <div class="color-swatch skinbrown" title="Skin Brown"></div>` | Structural/semantic HTML element. |
| 1251 | `                            <div class="color-swatch ltblue" title="Light Blue"></div>` | Structural/semantic HTML element. |
| 1252 | `                            <div class="color-swatch ltpink" title="Light Pink"></div>` | Structural/semantic HTML element. |
| 1253 | `                        </div>` | Structural/semantic HTML element. |
| 1254 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1255 | `                    </div>` | Structural/semantic HTML element. |
| 1256 | `                </div>` | Structural/semantic HTML element. |
| 1257 | `` |  |
| 1258 | `                <!-- Blankets -->` | Structural/semantic HTML element. |
| 1259 | `                <div class="gallery-item fade-in" data-product="blankets">` | Structural/semantic HTML element. |
| 1260 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1261 | `                        <img src="https://images.unsplash.com/photo-1576873693822-34a5c539d307?auto=format&fit=crop&w=600&q=80" alt="Blankets">` | Image element; ensure alt text for accessibility. |
| 1262 | `                    </div>` | Structural/semantic HTML element. |
| 1263 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1264 | `                        <h3 class="gallery-title">Blankets</h3>` | Structural/semantic HTML element. |
| 1265 | `                        <p class="gallery-description">Fleece blankets with luxurious texture and exceptional warmth.</p>` | Paragraph text / supporting copy. |
| 1266 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1267 | `                            <span class="gallery-feature">Microfiber</span>` | Structural/semantic HTML element. |
| 1268 | `                            <span class="gallery-feature">Plush Material</span>` | Structural/semantic HTML element. |
| 1269 | `                            <span class="gallery-feature">Warm & Light</span>` | Structural/semantic HTML element. |
| 1270 | `                        </div>` | Structural/semantic HTML element. |
| 1271 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1272 | `                            <div class="color-swatch camel" title="Camel"></div>` | Structural/semantic HTML element. |
| 1273 | `                            <div class="color-swatch red" title="Red"></div>` | Structural/semantic HTML element. |
| 1274 | `                            <div class="color-swatch darkbrown" title="Dark Brown"></div>` | Structural/semantic HTML element. |
| 1275 | `                            <div class="color-swatch royalblue" title="Royal Blue"></div>` | Structural/semantic HTML element. |
| 1276 | `                        </div>` | Structural/semantic HTML element. |
| 1277 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1278 | `                    </div>` | Structural/semantic HTML element. |
| 1279 | `                </div>` | Structural/semantic HTML element. |
| 1280 | `` |  |
| 1281 | `                <!-- Towels -->` | Structural/semantic HTML element. |
| 1282 | `                <div class="gallery-item fade-in" data-product="towels">` | Structural/semantic HTML element. |
| 1283 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1284 | `                        <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=600&q=80" alt="Towels">` | Image element; ensure alt text for accessibility. |
| 1285 | `                    </div>` | Structural/semantic HTML element. |
| 1286 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1287 | `                        <h3 class="gallery-title">Towels</h3>` | Structural/semantic HTML element. |
| 1288 | `                        <p class="gallery-description">Premium cotton terry towels with over-the-top plushness and durability.</p>` | Paragraph text / supporting copy. |
| 1289 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1290 | `                            <span class="gallery-feature">100% Cotton</span>` | Structural/semantic HTML element. |
| 1291 | `                            <span class="gallery-feature">Terry & Waffle</span>` | Structural/semantic HTML element. |
| 1292 | `                            <span class="gallery-feature">Multiple Sizes</span>` | Structural/semantic HTML element. |
| 1293 | `                        </div>` | Structural/semantic HTML element. |
| 1294 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1295 | `                            <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1296 | `                            <div class="color-swatch brown" title="Brown"></div>` | Structural/semantic HTML element. |
| 1297 | `                            <div class="color-swatch grey" title="Grey"></div>` | Structural/semantic HTML element. |
| 1298 | `                            <div class="color-swatch red" title="Red"></div>` | Structural/semantic HTML element. |
| 1299 | `                            <div class="color-swatch blue" title="Blue"></div>` | Structural/semantic HTML element. |
| 1300 | `                            <div class="color-swatch green" title="Green"></div>` | Structural/semantic HTML element. |
| 1301 | `                            <div class="color-swatch black" title="Black"></div>` | Structural/semantic HTML element. |
| 1302 | `                        </div>` | Structural/semantic HTML element. |
| 1303 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1304 | `                    </div>` | Structural/semantic HTML element. |
| 1305 | `                </div>` | Structural/semantic HTML element. |
| 1306 | `` |  |
| 1307 | `                <!-- Runner -->` | Structural/semantic HTML element. |
| 1308 | `                <div class="gallery-item fade-in" data-product="runner">` | Structural/semantic HTML element. |
| 1309 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1310 | `                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80" alt="Runner">` | Image element; ensure alt text for accessibility. |
| 1311 | `                    </div>` | Structural/semantic HTML element. |
| 1312 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1313 | `                        <h3 class="gallery-title">Runner</h3>` | Structural/semantic HTML element. |
| 1314 | `                        <p class="gallery-description">Lightweight runner quilted with decorative stitches.</p>` | Paragraph text / supporting copy. |
| 1315 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1316 | `                            <span class="gallery-feature">Quilted</span>` | Structural/semantic HTML element. |
| 1317 | `                            <span class="gallery-feature">Decorative</span>` | Structural/semantic HTML element. |
| 1318 | `                            <span class="gallery-feature">Lightweight</span>` | Structural/semantic HTML element. |
| 1319 | `                        </div>` | Structural/semantic HTML element. |
| 1320 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1321 | `                    </div>` | Structural/semantic HTML element. |
| 1322 | `                </div>` | Structural/semantic HTML element. |
| 1323 | `            </div>` | Structural/semantic HTML element. |
| 1324 | `` |  |
| 1325 | `            <div class="quick-specs fade-in">` | Structural/semantic HTML element. |
| 1326 | `                <div class="specs-grid">` | Grid layout container for responsive card/gallery alignment. |
| 1327 | `                    <div class="spec-item">` | Structural/semantic HTML element. |
| 1328 | `                        <div class="spec-icon">🛏️</div>` | Structural/semantic HTML element. |
| 1329 | `                        <div class="spec-label">Thread Count</div>` | Structural/semantic HTML element. |
| 1330 | `                        <div class="spec-value">200-400TC Options</div>` | Structural/semantic HTML element. |
| 1331 | `                    </div>` | Structural/semantic HTML element. |
| 1332 | `                    <div class="spec-item">` | Structural/semantic HTML element. |
| 1333 | `                        <div class="spec-icon">🧼</div>` | Structural/semantic HTML element. |
| 1334 | `                        <div class="spec-label">Care</div>` | Structural/semantic HTML element. |
| 1335 | `                        <div class="spec-value">Commercial Laundry Safe</div>` | Structural/semantic HTML element. |
| 1336 | `                    </div>` | Structural/semantic HTML element. |
| 1337 | `                    <div class="spec-item">` | Structural/semantic HTML element. |
| 1338 | `                        <div class="spec-icon">⚡</div>` | Structural/semantic HTML element. |
| 1339 | `                        <div class="spec-label">Turnover</div>` | Structural/semantic HTML element. |
| 1340 | `                        <div class="spec-value">Quick-Dry Fabrics</div>` | Structural/semantic HTML element. |
| 1341 | `                    </div>` | Structural/semantic HTML element. |
| 1342 | `                    <div class="spec-item">` | Structural/semantic HTML element. |
| 1343 | `                        <div class="spec-icon">🎨</div>` | Structural/semantic HTML element. |
| 1344 | `                        <div class="spec-label">Colors</div>` | Structural/semantic HTML element. |
| 1345 | `                        <div class="spec-value">Calm, Neutral Palette</div>` | Structural/semantic HTML element. |
| 1346 | `                    </div>` | Structural/semantic HTML element. |
| 1347 | `                </div>` | Structural/semantic HTML element. |
| 1348 | `            </div>` | Structural/semantic HTML element. |
| 1349 | `        </div>` | Structural/semantic HTML element. |
| 1350 | `    </section>` | Structural/semantic HTML element. |
| 1351 | `` |  |
| 1352 | `    <!-- Hospitals Collection -->` | Structural/semantic HTML element. |
| 1353 | `    <section id="hospitals" class="section category-section">` | Semantic section block improving structure and SEO. |
| 1354 | `        <div class="container">` | Structural/semantic HTML element. |
| 1355 | `            <div class="category-header">` | Structural/semantic HTML element. |
| 1356 | `                <div class="category-title">` | Structural/semantic HTML element. |
| 1357 | `                    <div class="category-icon">🏥</div>` | Structural/semantic HTML element. |
| 1358 | `                    <h2>Hospital Collection</h2>` | Secondary section heading. |
| 1359 | `                </div>` | Structural/semantic HTML element. |
| 1360 | `                <p class="category-description">` | Paragraph text / supporting copy. |
| 1361 | `                    Clinically clean, skin-friendly textiles engineered for repeated sterilization with medical-grade finishes and anti-microbial properties.` | Content/whitespace or standard markup. |
| 1362 | `                </p>` | Structural/semantic HTML element. |
| 1363 | `            </div>` | Structural/semantic HTML element. |
| 1364 | `` |  |
| 1365 | `            <!-- Gallery Grid for Hospitals -->` | Structural/semantic HTML element. |
| 1366 | `            <div class="gallery-grid">` | Grid layout container for responsive card/gallery alignment. |
| 1367 | `                <!-- Duvet -->` | Structural/semantic HTML element. |
| 1368 | `                <div class="gallery-item fade-in" data-product="hospital-duvet">` | Structural/semantic HTML element. |
| 1369 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1370 | `                        <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80" alt="Hospital Duvet">` | Image element; ensure alt text for accessibility. |
| 1371 | `                    </div>` | Structural/semantic HTML element. |
| 1372 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1373 | `                        <h3 class="gallery-title">Duvet</h3>` | Structural/semantic HTML element. |
| 1374 | `                        <p class="gallery-description">Lightweight comfort with anti-viral and anti-bacterial finishes.</p>` | Paragraph text / supporting copy. |
| 1375 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1376 | `                            <span class="gallery-feature">100% Cotton</span>` | Structural/semantic HTML element. |
| 1377 | `                            <span class="gallery-feature">Anti-Viral</span>` | Structural/semantic HTML element. |
| 1378 | `                            <span class="gallery-feature">Anti-Bacterial</span>` | Structural/semantic HTML element. |
| 1379 | `                        </div>` | Structural/semantic HTML element. |
| 1380 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1381 | `                    </div>` | Structural/semantic HTML element. |
| 1382 | `                </div>` | Structural/semantic HTML element. |
| 1383 | `` |  |
| 1384 | `                <!-- Duvet Cover -->` | Structural/semantic HTML element. |
| 1385 | `                <div class="gallery-item fade-in" data-product="hospital-duvet-cover">` | Structural/semantic HTML element. |
| 1386 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1387 | `                        <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=600&q=80" alt="Hospital Duvet Cover">` | Image element; ensure alt text for accessibility. |
| 1388 | `                    </div>` | Structural/semantic HTML element. |
| 1389 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1390 | `                        <h3 class="gallery-title">Duvet Cover</h3>` | Structural/semantic HTML element. |
| 1391 | `                        <p class="gallery-description">Unmatched quality with medical-grade anti-viral and anti-bacterial finishes.</p>` | Paragraph text / supporting copy. |
| 1392 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1393 | `                            <span class="gallery-feature">100% Cotton</span>` | Structural/semantic HTML element. |
| 1394 | `                            <span class="gallery-feature">Anti-Viral</span>` | Structural/semantic HTML element. |
| 1395 | `                            <span class="gallery-feature">Anti-Bacterial</span>` | Structural/semantic HTML element. |
| 1396 | `                        </div>` | Structural/semantic HTML element. |
| 1397 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1398 | `                            <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1399 | `                            <div class="color-swatch red" title="Red"></div>` | Structural/semantic HTML element. |
| 1400 | `                            <div class="color-swatch grey" title="Grey"></div>` | Structural/semantic HTML element. |
| 1401 | `                            <div class="color-swatch brown" title="Brown"></div>` | Structural/semantic HTML element. |
| 1402 | `                            <div class="color-swatch navy" title="Navy"></div>` | Structural/semantic HTML element. |
| 1403 | `                            <div class="color-swatch maroon" title="Maroon"></div>` | Structural/semantic HTML element. |
| 1404 | `                            <div class="color-swatch skinbrown" title="Skin Brown"></div>` | Structural/semantic HTML element. |
| 1405 | `                            <div class="color-swatch ltblue" title="Light Blue"></div>` | Structural/semantic HTML element. |
| 1406 | `                            <div class="color-swatch ltpink" title="Light Pink"></div>` | Structural/semantic HTML element. |
| 1407 | `                        </div>` | Structural/semantic HTML element. |
| 1408 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1409 | `                    </div>` | Structural/semantic HTML element. |
| 1410 | `                </div>` | Structural/semantic HTML element. |
| 1411 | `` |  |
| 1412 | `                <!-- Pillow -->` | Structural/semantic HTML element. |
| 1413 | `                <div class="gallery-item fade-in" data-product="hospital-pillow">` | Structural/semantic HTML element. |
| 1414 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1415 | `                        <img src="https://images.unsplash.com/photo-1520614073990-dd6020b2d15f?auto=format&fit=crop&w=600&q=80" alt="Hospital Pillow">` | Image element; ensure alt text for accessibility. |
| 1416 | `                    </div>` | Structural/semantic HTML element. |
| 1417 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1418 | `                        <h3 class="gallery-title">Pillow</h3>` | Structural/semantic HTML element. |
| 1419 | `                        <p class="gallery-description">Fluffy down pillow with adjustable firmness for patient comfort.</p>` | Paragraph text / supporting copy. |
| 1420 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1421 | `                            <span class="gallery-feature">Siliconised Fiber</span>` | Structural/semantic HTML element. |
| 1422 | `                            <span class="gallery-feature">Adjustable</span>` | Structural/semantic HTML element. |
| 1423 | `                            <span class="gallery-feature">Medical Grade</span>` | Structural/semantic HTML element. |
| 1424 | `                        </div>` | Structural/semantic HTML element. |
| 1425 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1426 | `                    </div>` | Structural/semantic HTML element. |
| 1427 | `                </div>` | Structural/semantic HTML element. |
| 1428 | `` |  |
| 1429 | `                <!-- Pillow Case -->` | Structural/semantic HTML element. |
| 1430 | `                <div class="gallery-item fade-in" data-product="hospital-pillow-case">` | Structural/semantic HTML element. |
| 1431 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1432 | `                        <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=600&q=80" alt="Hospital Pillow Case">` | Image element; ensure alt text for accessibility. |
| 1433 | `                    </div>` | Structural/semantic HTML element. |
| 1434 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1435 | `                        <h3 class="gallery-title">Pillow Case</h3>` | Structural/semantic HTML element. |
| 1436 | `                        <p class="gallery-description">Premium cotton with anti-viral and anti-bacterial finishes.</p>` | Paragraph text / supporting copy. |
| 1437 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1438 | `                            <span class="gallery-feature">100% Cotton</span>` | Structural/semantic HTML element. |
| 1439 | `                            <span class="gallery-feature">Anti-Viral</span>` | Structural/semantic HTML element. |
| 1440 | `                            <span class="gallery-feature">Anti-Bacterial</span>` | Structural/semantic HTML element. |
| 1441 | `                        </div>` | Structural/semantic HTML element. |
| 1442 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1443 | `                            <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1444 | `                            <div class="color-swatch red" title="Red"></div>` | Structural/semantic HTML element. |
| 1445 | `                            <div class="color-swatch grey" title="Grey"></div>` | Structural/semantic HTML element. |
| 1446 | `                            <div class="color-swatch brown" title="Brown"></div>` | Structural/semantic HTML element. |
| 1447 | `                            <div class="color-swatch navy" title="Navy"></div>` | Structural/semantic HTML element. |
| 1448 | `                            <div class="color-swatch maroon" title="Maroon"></div>` | Structural/semantic HTML element. |
| 1449 | `                            <div class="color-swatch skinbrown" title="Skin Brown"></div>` | Structural/semantic HTML element. |
| 1450 | `                            <div class="color-swatch ltblue" title="Light Blue"></div>` | Structural/semantic HTML element. |
| 1451 | `                            <div class="color-swatch ltpink" title="Light Pink"></div>` | Structural/semantic HTML element. |
| 1452 | `                        </div>` | Structural/semantic HTML element. |
| 1453 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1454 | `                    </div>` | Structural/semantic HTML element. |
| 1455 | `                </div>` | Structural/semantic HTML element. |
| 1456 | `` |  |
| 1457 | `                <!-- Bedsheets -->` | Structural/semantic HTML element. |
| 1458 | `                <div class="gallery-item fade-in" data-product="hospital-bedsheets">` | Structural/semantic HTML element. |
| 1459 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1460 | `                        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80" alt="Hospital Bedsheets">` | Image element; ensure alt text for accessibility. |
| 1461 | `                    </div>` | Structural/semantic HTML element. |
| 1462 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1463 | `                        <h3 class="gallery-title">Bedsheets</h3>` | Structural/semantic HTML element. |
| 1464 | `                        <p class="gallery-description">Pure cotton bedsheets with anti-viral and anti-bacterial finishes.</p>` | Paragraph text / supporting copy. |
| 1465 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1466 | `                            <span class="gallery-feature">100% Cotton</span>` | Structural/semantic HTML element. |
| 1467 | `                            <span class="gallery-feature">Anti-Viral</span>` | Structural/semantic HTML element. |
| 1468 | `                            <span class="gallery-feature">Anti-Bacterial</span>` | Structural/semantic HTML element. |
| 1469 | `                        </div>` | Structural/semantic HTML element. |
| 1470 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1471 | `                            <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1472 | `                            <div class="color-swatch red" title="Red"></div>` | Structural/semantic HTML element. |
| 1473 | `                            <div class="color-swatch grey" title="Grey"></div>` | Structural/semantic HTML element. |
| 1474 | `                            <div class="color-swatch brown" title="Brown"></div>` | Structural/semantic HTML element. |
| 1475 | `                            <div class="color-swatch navy" title="Navy"></div>` | Structural/semantic HTML element. |
| 1476 | `                            <div class="color-swatch maroon" title="Maroon"></div>` | Structural/semantic HTML element. |
| 1477 | `                            <div class="color-swatch skinbrown" title="Skin Brown"></div>` | Structural/semantic HTML element. |
| 1478 | `                            <div class="color-swatch ltblue" title="Light Blue"></div>` | Structural/semantic HTML element. |
| 1479 | `                            <div class="color-swatch ltpink" title="Light Pink"></div>` | Structural/semantic HTML element. |
| 1480 | `                        </div>` | Structural/semantic HTML element. |
| 1481 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1482 | `                    </div>` | Structural/semantic HTML element. |
| 1483 | `                </div>` | Structural/semantic HTML element. |
| 1484 | `` |  |
| 1485 | `                <!-- Blankets -->` | Structural/semantic HTML element. |
| 1486 | `                <div class="gallery-item fade-in" data-product="hospital-blankets">` | Structural/semantic HTML element. |
| 1487 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1488 | `                        <img src="https://images.unsplash.com/photo-1576873693822-34a5c539d307?auto=format&fit=crop&w=600&q=80" alt="Hospital Blankets">` | Image element; ensure alt text for accessibility. |
| 1489 | `                    </div>` | Structural/semantic HTML element. |
| 1490 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1491 | `                        <h3 class="gallery-title">Blankets</h3>` | Structural/semantic HTML element. |
| 1492 | `                        <p class="gallery-description">Fleece blankets with luxurious texture for patient comfort.</p>` | Paragraph text / supporting copy. |
| 1493 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1494 | `                            <span class="gallery-feature">Microfiber</span>` | Structural/semantic HTML element. |
| 1495 | `                            <span class="gallery-feature">Plush Material</span>` | Structural/semantic HTML element. |
| 1496 | `                            <span class="gallery-feature">Medical Grade</span>` | Structural/semantic HTML element. |
| 1497 | `                        </div>` | Structural/semantic HTML element. |
| 1498 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1499 | `                    </div>` | Structural/semantic HTML element. |
| 1500 | `                </div>` | Structural/semantic HTML element. |
| 1501 | `` |  |
| 1502 | `                <!-- Towels -->` | Structural/semantic HTML element. |
| 1503 | `                <div class="gallery-item fade-in" data-product="hospital-towels">` | Structural/semantic HTML element. |
| 1504 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1505 | `                        <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=600&q=80" alt="Hospital Towels">` | Image element; ensure alt text for accessibility. |
| 1506 | `                    </div>` | Structural/semantic HTML element. |
| 1507 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1508 | `                        <h3 class="gallery-title">Towels</h3>` | Structural/semantic HTML element. |
| 1509 | `                        <p class="gallery-description">Premium cotton terry towels for clinical environments.</p>` | Paragraph text / supporting copy. |
| 1510 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1511 | `                            <span class="gallery-feature">100% Cotton</span>` | Structural/semantic HTML element. |
| 1512 | `                            <span class="gallery-feature">Terry & Waffle</span>` | Structural/semantic HTML element. |
| 1513 | `                            <span class="gallery-feature">Medical Grade</span>` | Structural/semantic HTML element. |
| 1514 | `                        </div>` | Structural/semantic HTML element. |
| 1515 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1516 | `                            <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1517 | `                            <div class="color-swatch brown" title="Brown"></div>` | Structural/semantic HTML element. |
| 1518 | `                            <div class="color-swatch grey" title="Grey"></div>` | Structural/semantic HTML element. |
| 1519 | `                            <div class="color-swatch red" title="Red"></div>` | Structural/semantic HTML element. |
| 1520 | `                            <div class="color-swatch blue" title="Blue"></div>` | Structural/semantic HTML element. |
| 1521 | `                            <div class="color-swatch green" title="Green"></div>` | Structural/semantic HTML element. |
| 1522 | `                            <div class="color-swatch black" title="Black"></div>` | Structural/semantic HTML element. |
| 1523 | `                        </div>` | Structural/semantic HTML element. |
| 1524 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1525 | `                    </div>` | Structural/semantic HTML element. |
| 1526 | `                </div>` | Structural/semantic HTML element. |
| 1527 | `` |  |
| 1528 | `                <!-- Bath Mat -->` | Structural/semantic HTML element. |
| 1529 | `                <div class="gallery-item fade-in" data-product="hospital-bath-mat">` | Structural/semantic HTML element. |
| 1530 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1531 | `                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80" alt="Hospital Bath Mat">` | Image element; ensure alt text for accessibility. |
| 1532 | `                    </div>` | Structural/semantic HTML element. |
| 1533 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1534 | `                        <h3 class="gallery-title">Bath Mat</h3>` | Structural/semantic HTML element. |
| 1535 | `                        <p class="gallery-description">100% cotton fabric for patient safety and comfort.</p>` | Paragraph text / supporting copy. |
| 1536 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1537 | `                            <span class="gallery-feature">100% Cotton</span>` | Structural/semantic HTML element. |
| 1538 | `                            <span class="gallery-feature">Soft & Breathable</span>` | Structural/semantic HTML element. |
| 1539 | `                            <span class="gallery-feature">Medical Grade</span>` | Structural/semantic HTML element. |
| 1540 | `                        </div>` | Structural/semantic HTML element. |
| 1541 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1542 | `                            <div class="color-swatch brown" title="Brown"></div>` | Structural/semantic HTML element. |
| 1543 | `                            <div class="color-swatch grey" title="Charcoal"></div>` | Structural/semantic HTML element. |
| 1544 | `                        </div>` | Structural/semantic HTML element. |
| 1545 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1546 | `                    </div>` | Structural/semantic HTML element. |
| 1547 | `                </div>` | Structural/semantic HTML element. |
| 1548 | `` |  |
| 1549 | `                <!-- Uniform - Now with sub-categories -->` | Structural/semantic HTML element. |
| 1550 | `                <div class="gallery-item fade-in" data-product="hospital-uniform">` | Structural/semantic HTML element. |
| 1551 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1552 | `                        <img src="https://images.unsplash.com/photo-1581017914096-0162495527c1?auto=format&fit=crop&w=600&q=80" alt="Hospital Uniform">` | Image element; ensure alt text for accessibility. |
| 1553 | `                    </div>` | Structural/semantic HTML element. |
| 1554 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1555 | `                        <h3 class="gallery-title">Medical Uniforms</h3>` | Structural/semantic HTML element. |
| 1556 | `                        <p class="gallery-description">Professional medical uniforms with anti-microbial properties for healthcare staff.</p>` | Paragraph text / supporting copy. |
| 1557 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1558 | `                            <span class="gallery-feature">Anti-Microbial</span>` | Structural/semantic HTML element. |
| 1559 | `                            <span class="gallery-feature">Comfort Fit</span>` | Structural/semantic HTML element. |
| 1560 | `                            <span class="gallery-feature">Professional</span>` | Structural/semantic HTML element. |
| 1561 | `                        </div>` | Structural/semantic HTML element. |
| 1562 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1563 | `                            <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1564 | `                            <div class="color-swatch navy" title="Navy"></div>` | Structural/semantic HTML element. |
| 1565 | `                            <div class="color-swatch royalblue" title="Royal Blue"></div>` | Structural/semantic HTML element. |
| 1566 | `                            <div class="color-swatch teal" title="Teal"></div>` | Structural/semantic HTML element. |
| 1567 | `                        </div>` | Structural/semantic HTML element. |
| 1568 | `                        <button class="gallery-btn">View Uniform Categories</button>` | Button/CTA element styled as a pill with golden border. |
| 1569 | `                    </div>` | Structural/semantic HTML element. |
| 1570 | `                </div>` | Structural/semantic HTML element. |
| 1571 | `            </div>` | Structural/semantic HTML element. |
| 1572 | `        </div>` | Structural/semantic HTML element. |
| 1573 | `    </section>` | Structural/semantic HTML element. |
| 1574 | `` |  |
| 1575 | `    <!-- Spas Collection -->` | Structural/semantic HTML element. |
| 1576 | `    <section id="spas" class="section category-section">` | Semantic section block improving structure and SEO. |
| 1577 | `        <div class="container">` | Structural/semantic HTML element. |
| 1578 | `            <div class="category-header">` | Structural/semantic HTML element. |
| 1579 | `                <div class="category-title">` | Structural/semantic HTML element. |
| 1580 | `                    <div class="category-icon">💆</div>` | Structural/semantic HTML element. |
| 1581 | `                    <h2>Spa Collection</h2>` | Secondary section heading. |
| 1582 | `                </div>` | Structural/semantic HTML element. |
| 1583 | `                <p class="category-description">` | Paragraph text / supporting copy. |
| 1584 | `                    Serene textures and lush absorbency for wellness spaces. Premium terry and bamboo options designed for ultimate comfort and relaxation.` | Content/whitespace or standard markup. |
| 1585 | `                </p>` | Structural/semantic HTML element. |
| 1586 | `            </div>` | Structural/semantic HTML element. |
| 1587 | `` |  |
| 1588 | `            <!-- Gallery Grid for Spas -->` | Structural/semantic HTML element. |
| 1589 | `            <div class="gallery-grid">` | Grid layout container for responsive card/gallery alignment. |
| 1590 | `                <!-- Cotton Towels -->` | Structural/semantic HTML element. |
| 1591 | `                <div class="gallery-item fade-in" data-product="spa-cotton-towels">` | Structural/semantic HTML element. |
| 1592 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1593 | `                        <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=600&q=80" alt="Spa Cotton Towels">` | Image element; ensure alt text for accessibility. |
| 1594 | `                    </div>` | Structural/semantic HTML element. |
| 1595 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1596 | `                        <h3 class="gallery-title">Cotton Terry Towels</h3>` | Structural/semantic HTML element. |
| 1597 | `                        <p class="gallery-description">Premium cotton terry towels with over-the-top plushness and durability.</p>` | Paragraph text / supporting copy. |
| 1598 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1599 | `                            <span class="gallery-feature">100% Cotton</span>` | Structural/semantic HTML element. |
| 1600 | `                            <span class="gallery-feature">Extra-Thick</span>` | Structural/semantic HTML element. |
| 1601 | `                            <span class="gallery-feature">Spa-Like</span>` | Structural/semantic HTML element. |
| 1602 | `                        </div>` | Structural/semantic HTML element. |
| 1603 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1604 | `                            <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1605 | `                            <div class="color-swatch brown" title="Brown"></div>` | Structural/semantic HTML element. |
| 1606 | `                            <div class="color-swatch grey" title="Grey"></div>` | Structural/semantic HTML element. |
| 1607 | `                            <div class="color-swatch red" title="Red"></div>` | Structural/semantic HTML element. |
| 1608 | `                            <div class="color-swatch blue" title="Blue"></div>` | Structural/semantic HTML element. |
| 1609 | `                            <div class="color-swatch green" title="Green"></div>` | Structural/semantic HTML element. |
| 1610 | `                            <div class="color-swatch black" title="Black"></div>` | Structural/semantic HTML element. |
| 1611 | `                        </div>` | Structural/semantic HTML element. |
| 1612 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1613 | `                    </div>` | Structural/semantic HTML element. |
| 1614 | `                </div>` | Structural/semantic HTML element. |
| 1615 | `` |  |
| 1616 | `                <!-- Bamboo Towels -->` | Structural/semantic HTML element. |
| 1617 | `                <div class="gallery-item fade-in" data-product="spa-bamboo-towels">` | Structural/semantic HTML element. |
| 1618 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1619 | `                        <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80" alt="Spa Bamboo Towels">` | Image element; ensure alt text for accessibility. |
| 1620 | `                    </div>` | Structural/semantic HTML element. |
| 1621 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1622 | `                        <h3 class="gallery-title">Bamboo Waffle Towels</h3>` | Structural/semantic HTML element. |
| 1623 | `                        <p class="gallery-description">Extra absorbent and fast-drying bamboo towels for spa experiences.</p>` | Paragraph text / supporting copy. |
| 1624 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1625 | `                            <span class="gallery-feature">100% Bamboo</span>` | Structural/semantic HTML element. |
| 1626 | `                            <span class="gallery-feature">Odour Resistant</span>` | Structural/semantic HTML element. |
| 1627 | `                            <span class="gallery-feature">Anti-Allergic</span>` | Structural/semantic HTML element. |
| 1628 | `                        </div>` | Structural/semantic HTML element. |
| 1629 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1630 | `                            <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1631 | `                        </div>` | Structural/semantic HTML element. |
| 1632 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1633 | `                    </div>` | Structural/semantic HTML element. |
| 1634 | `                </div>` | Structural/semantic HTML element. |
| 1635 | `            </div>` | Structural/semantic HTML element. |
| 1636 | `        </div>` | Structural/semantic HTML element. |
| 1637 | `    </section>` | Structural/semantic HTML element. |
| 1638 | `` |  |
| 1639 | `    <!-- Salons Collection -->` | Structural/semantic HTML element. |
| 1640 | `    <section id="salons" class="section category-section">` | Semantic section block improving structure and SEO. |
| 1641 | `        <div class="container">` | Structural/semantic HTML element. |
| 1642 | `            <div class="category-header">` | Structural/semantic HTML element. |
| 1643 | `                <div class="category-title">` | Structural/semantic HTML element. |
| 1644 | `                    <div class="category-icon">💇</div>` | Structural/semantic HTML element. |
| 1645 | `                    <h2>Salon Collection</h2>` | Secondary section heading. |
| 1646 | `                </div>` | Structural/semantic HTML element. |
| 1647 | `                <p class="category-description">` | Paragraph text / supporting copy. |
| 1648 | `                    Hardwearing, bleach-safe textiles for busy studios. Designed to withstand frequent washing while maintaining softness and color integrity.` | Content/whitespace or standard markup. |
| 1649 | `                </p>` | Structural/semantic HTML element. |
| 1650 | `            </div>` | Structural/semantic HTML element. |
| 1651 | `` |  |
| 1652 | `            <!-- Gallery Grid for Salons -->` | Structural/semantic HTML element. |
| 1653 | `            <div class="gallery-grid">` | Grid layout container for responsive card/gallery alignment. |
| 1654 | `                <!-- Cotton Towels -->` | Structural/semantic HTML element. |
| 1655 | `                <div class="gallery-item fade-in" data-product="salon-cotton-towels">` | Structural/semantic HTML element. |
| 1656 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1657 | `                        <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=600&q=80" alt="Salon Cotton Towels">` | Image element; ensure alt text for accessibility. |
| 1658 | `                    </div>` | Structural/semantic HTML element. |
| 1659 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1660 | `                        <h3 class="gallery-title">Cotton Terry Towels</h3>` | Structural/semantic HTML element. |
| 1661 | `                        <p class="gallery-description">Bleach-safe, colorfast towels with reinforced hems for professional salon use.</p>` | Paragraph text / supporting copy. |
| 1662 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1663 | `                            <span class="gallery-feature">100% Cotton</span>` | Structural/semantic HTML element. |
| 1664 | `                            <span class="gallery-feature">Bleach Safe</span>` | Structural/semantic HTML element. |
| 1665 | `                            <span class="gallery-feature">Reinforced Hems</span>` | Structural/semantic HTML element. |
| 1666 | `                        </div>` | Structural/semantic HTML element. |
| 1667 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1668 | `                            <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1669 | `                            <div class="color-swatch brown" title="Brown"></div>` | Structural/semantic HTML element. |
| 1670 | `                            <div class="color-swatch grey" title="Grey"></div>` | Structural/semantic HTML element. |
| 1671 | `                            <div class="color-swatch red" title="Red"></div>` | Structural/semantic HTML element. |
| 1672 | `                            <div class="color-swatch blue" title="Blue"></div>` | Structural/semantic HTML element. |
| 1673 | `                            <div class="color-swatch green" title="Green"></div>` | Structural/semantic HTML element. |
| 1674 | `                            <div class="color-swatch black" title="Black"></div>` | Structural/semantic HTML element. |
| 1675 | `                        </div>` | Structural/semantic HTML element. |
| 1676 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1677 | `                    </div>` | Structural/semantic HTML element. |
| 1678 | `                </div>` | Structural/semantic HTML element. |
| 1679 | `` |  |
| 1680 | `                <!-- Bamboo Towels -->` | Structural/semantic HTML element. |
| 1681 | `                <div class="gallery-item fade-in" data-product="salon-bamboo-towels">` | Structural/semantic HTML element. |
| 1682 | `                    <div class="gallery-image">` | Structural/semantic HTML element. |
| 1683 | `                        <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80" alt="Salon Bamboo Towels">` | Image element; ensure alt text for accessibility. |
| 1684 | `                    </div>` | Structural/semantic HTML element. |
| 1685 | `                    <div class="gallery-content">` | Structural/semantic HTML element. |
| 1686 | `                        <h3 class="gallery-title">Bamboo Waffle Towels</h3>` | Structural/semantic HTML element. |
| 1687 | `                        <p class="gallery-description">Soft loop, fast-drying bamboo towels with excellent color retention.</p>` | Paragraph text / supporting copy. |
| 1688 | `                        <div class="gallery-features">` | Structural/semantic HTML element. |
| 1689 | `                            <span class="gallery-feature">100% Bamboo</span>` | Structural/semantic HTML element. |
| 1690 | `                            <span class="gallery-feature">Odour Resistant</span>` | Structural/semantic HTML element. |
| 1691 | `                            <span class="gallery-feature">Anti-Allergic</span>` | Structural/semantic HTML element. |
| 1692 | `                        </div>` | Structural/semantic HTML element. |
| 1693 | `                        <div class="color-swatches">` | Structural/semantic HTML element. |
| 1694 | `                            <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1695 | `                        </div>` | Structural/semantic HTML element. |
| 1696 | `                        <button class="gallery-btn">View Details</button>` | Button/CTA element styled as a pill with golden border. |
| 1697 | `                    </div>` | Structural/semantic HTML element. |
| 1698 | `                </div>` | Structural/semantic HTML element. |
| 1699 | `            </div>` | Structural/semantic HTML element. |
| 1700 | `        </div>` | Structural/semantic HTML element. |
| 1701 | `    </section>` | Structural/semantic HTML element. |
| 1702 | `` |  |
| 1703 | `    <!-- CTA Section -->` | Structural/semantic HTML element. |
| 1704 | `    <section class="section cta-section">` | Semantic section block improving structure and SEO. |
| 1705 | `        <div class="container">` | Structural/semantic HTML element. |
| 1706 | `            <h2>Need Custom Solutions?</h2>` | Secondary section heading. |
| 1707 | `            <p>Our textile experts can create bespoke collections tailored to your specific requirements, branding, and operational needs.</p>` | Paragraph text / supporting copy. |
| 1708 | `            <a href="/about#contact" class="btn btn-light">Request Custom Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 1709 | `        </div>` | Structural/semantic HTML element. |
| 1710 | `    </section>` | Structural/semantic HTML element. |
| 1711 | `` |  |
| 1712 | `    <!-- Footer -->` | Structural/semantic HTML element. |
| 1713 | `    <footer>` | Footer area with info/links, consistent across pages. |
| 1714 | `        <div class="container">` | Structural/semantic HTML element. |
| 1715 | `            <div class="footer-content">` | Footer area with info/links, consistent across pages. |
| 1716 | `                <div class="footer-brand">` | Footer area with info/links, consistent across pages. |
| 1717 | `                    <div class="footer-logo">` | Footer area with info/links, consistent across pages. |
| 1718 | `                        <div class="logo-icon">SL</div>` | Structural/semantic HTML element. |
| 1719 | `                        <div class="logo-text">Secret Linen</div>` | Structural/semantic HTML element. |
| 1720 | `                    </div>` | Structural/semantic HTML element. |
| 1721 | `                    <p class="footer-description">` | Footer area with info/links, consistent across pages. |
| 1722 | `                        50+ years of crafting exceptional textiles for hospitality and refined living. Quiet luxury, woven into life.` | Content/whitespace or standard markup. |
| 1723 | `                    </p>` | Structural/semantic HTML element. |
| 1724 | `                </div>` | Structural/semantic HTML element. |
| 1725 | `                ` |  |
| 1726 | `                <div>` | Structural/semantic HTML element. |
| 1727 | `                    <h4 class="footer-heading">Quick Links</h4>` | Footer area with info/links, consistent across pages. |
| 1728 | `                    <ul class="footer-links">` | Footer area with info/links, consistent across pages. |
| 1729 | `                        <li><a href="/collections">Collections</a></li>` | Structural/semantic HTML element. |
| 1730 | `                        <li><a href="/services">Services</a></li>` | Structural/semantic HTML element. |
| 1731 | `                        <li><a href="/about">Our Story</a></li>` | Structural/semantic HTML element. |
| 1732 | `                        <li><a href="/about#contact">Contact</a></li>` | Structural/semantic HTML element. |
| 1733 | `                    </ul>` | Structural/semantic HTML element. |
| 1734 | `                </div>` | Structural/semantic HTML element. |
| 1735 | `                ` |  |
| 1736 | `                <div class="footer-contact">` | Footer area with info/links, consistent across pages. |
| 1737 | `                    <h4 class="footer-heading">Contact Info</h4>` | Footer area with info/links, consistent across pages. |
| 1738 | `                    <div class="contact-item">` | Structural/semantic HTML element. |
| 1739 | `                        <strong>Address:</strong> #59, 1st Floor, Balaji Nagar Main Road, Chennai 600088` | Structural/semantic HTML element. |
| 1740 | `                    </div>` | Structural/semantic HTML element. |
| 1741 | `                    <div class="contact-item">` | Structural/semantic HTML element. |
| 1742 | `                        <strong>Phone:</strong> +91-9003555940` | Structural/semantic HTML element. |
| 1743 | `                    </div>` | Structural/semantic HTML element. |
| 1744 | `                    <div class="contact-item">` | Structural/semantic HTML element. |
| 1745 | `                        <strong>Email:</strong> secretlinenindia@gmail.com` | Structural/semantic HTML element. |
| 1746 | `                    </div>` | Structural/semantic HTML element. |
| 1747 | `                    <div class="contact-item">` | Structural/semantic HTML element. |
| 1748 | `                        <strong>Hours:</strong> Mon-Sat: 10AM-9PM` | Structural/semantic HTML element. |
| 1749 | `                    </div>` | Structural/semantic HTML element. |
| 1750 | `                </div>` | Structural/semantic HTML element. |
| 1751 | `            </div>` | Structural/semantic HTML element. |
| 1752 | `            ` |  |
| 1753 | `            <div class="footer-bottom">` | Footer area with info/links, consistent across pages. |
| 1754 | `                <p>&copy; 2024 Secret Linen. All rights reserved. Crafted with care in India.</p>` | Paragraph text / supporting copy. |
| 1755 | `            </div>` | Structural/semantic HTML element. |
| 1756 | `        </div>` | Structural/semantic HTML element. |
| 1757 | `    </footer>` | Footer area with info/links, consistent across pages. |
| 1758 | `` |  |
| 1759 | `    <!-- Product Modals -->` | Structural/semantic HTML element. |
| 1760 | `    <!-- Duvet Modal -->` | Structural/semantic HTML element. |
| 1761 | `    <div id="duvet-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 1762 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 1763 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 1764 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 1765 | `                <h3 class="modal-title">Duvet</h3>` | Modal/dialog structure for detail overlays. |
| 1766 | `                <p class="modal-subtitle">Lightweight comfort for all seasons</p>` | Modal/dialog structure for detail overlays. |
| 1767 | `            </div>` | Structural/semantic HTML element. |
| 1768 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 1769 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 1770 | `                    <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80" alt="Luxury Duvet">` | Image element; ensure alt text for accessibility. |
| 1771 | `                </div>` | Structural/semantic HTML element. |
| 1772 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 1773 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1774 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 1775 | `                        <p>A lightweight duvet that does heavy lifting when it comes to comfort. Made with 100% cotton, this quilt does double duty as the perfect top-of-bed replacement for your comforter in warmer weather, or as an additional layer in cooler months (or for a cozy-up on the couch). Garment dyed for rich, unique colors and ready to be just the added touch your bedroom needs.</p>` | Paragraph text / supporting copy. |
| 1776 | `                    </div>` | Structural/semantic HTML element. |
| 1777 | `                    ` |  |
| 1778 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1779 | `                        <h4>How it Feels</h4>` | Structural/semantic HTML element. |
| 1780 | `                        <p>Airy. Cozy. Warm but not heavy.</p>` | Paragraph text / supporting copy. |
| 1781 | `                    </div>` | Structural/semantic HTML element. |
| 1782 | `                    ` |  |
| 1783 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1784 | `                        <h4>How it Looks</h4>` | Structural/semantic HTML element. |
| 1785 | `                        <p>Soft. Relaxed. Quilted.</p>` | Paragraph text / supporting copy. |
| 1786 | `                    </div>` | Structural/semantic HTML element. |
| 1787 | `                    ` |  |
| 1788 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1789 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 1790 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 1791 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 1792 | `                                <div class="spec-label">Dimensions</div>` | Structural/semantic HTML element. |
| 1793 | `                                <div class="spec-value">60×90 / 90×100 / 100×110 Inches</div>` | Structural/semantic HTML element. |
| 1794 | `                            </div>` | Structural/semantic HTML element. |
| 1795 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 1796 | `                                <div class="spec-label">Pattern</div>` | Structural/semantic HTML element. |
| 1797 | `                                <div class="spec-value">Plain / Stripes</div>` | Structural/semantic HTML element. |
| 1798 | `                            </div>` | Structural/semantic HTML element. |
| 1799 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 1800 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 1801 | `                                <div class="spec-value">100% cotton shell with Recron polyfibre fill</div>` | Structural/semantic HTML element. |
| 1802 | `                            </div>` | Structural/semantic HTML element. |
| 1803 | `                        </div>` | Structural/semantic HTML element. |
| 1804 | `                    </div>` | Structural/semantic HTML element. |
| 1805 | `                    ` |  |
| 1806 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1807 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 1808 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 1809 | `                            <li>Machine wash cold separately on gentle cycle with like colors</li>` | Structural/semantic HTML element. |
| 1810 | `                            <li>Do not bleach</li>` | Structural/semantic HTML element. |
| 1811 | `                            <li>Tumble dry low, remove promptly</li>` | Structural/semantic HTML element. |
| 1812 | `                            <li>Low iron if needed</li>` | Structural/semantic HTML element. |
| 1813 | `                        </ul>` | Structural/semantic HTML element. |
| 1814 | `                    </div>` | Structural/semantic HTML element. |
| 1815 | `                </div>` | Structural/semantic HTML element. |
| 1816 | `            </div>` | Structural/semantic HTML element. |
| 1817 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 1818 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 1819 | `            </div>` | Structural/semantic HTML element. |
| 1820 | `        </div>` | Structural/semantic HTML element. |
| 1821 | `    </div>` | Structural/semantic HTML element. |
| 1822 | `` |  |
| 1823 | `    <!-- Duvet Cover Modal -->` | Structural/semantic HTML element. |
| 1824 | `    <div id="duvet-cover-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 1825 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 1826 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 1827 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 1828 | `                <h3 class="modal-title">Duvet Cover</h3>` | Modal/dialog structure for detail overlays. |
| 1829 | `                <p class="modal-subtitle">Unmatched quality and durability</p>` | Modal/dialog structure for detail overlays. |
| 1830 | `            </div>` | Structural/semantic HTML element. |
| 1831 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 1832 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 1833 | `                    <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=800&q=80" alt="Duvet Cover">` | Image element; ensure alt text for accessibility. |
| 1834 | `                </div>` | Structural/semantic HTML element. |
| 1835 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 1836 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1837 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 1838 | `                        <p>Duvet Cover offers unmatched quality, durability, and softness that gets better with every wash. Sateen has that first-class feel you know and love.</p>` | Paragraph text / supporting copy. |
| 1839 | `                    </div>` | Structural/semantic HTML element. |
| 1840 | `                    ` |  |
| 1841 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1842 | `                        <h4>How it Feels</h4>` | Structural/semantic HTML element. |
| 1843 | `                        <p>Luxuriously soft and smooth, perfect for year-round use</p>` | Paragraph text / supporting copy. |
| 1844 | `                    </div>` | Structural/semantic HTML element. |
| 1845 | `                    ` |  |
| 1846 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1847 | `                        <h4>How it Looks</h4>` | Structural/semantic HTML element. |
| 1848 | `                        <p>Lustrous, versatile, and irresistible</p>` | Paragraph text / supporting copy. |
| 1849 | `                    </div>` | Structural/semantic HTML element. |
| 1850 | `                    ` |  |
| 1851 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1852 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 1853 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 1854 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 1855 | `                                <div class="spec-label">Colors</div>` | Structural/semantic HTML element. |
| 1856 | `                                <div class="spec-value">` | Structural/semantic HTML element. |
| 1857 | `                                    <div class="color-swatches">` | Structural/semantic HTML element. |
| 1858 | `                                        <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 1859 | `                                        <div class="color-swatch red" title="Red"></div>` | Structural/semantic HTML element. |
| 1860 | `                                        <div class="color-swatch grey" title="Grey"></div>` | Structural/semantic HTML element. |
| 1861 | `                                        <div class="color-swatch brown" title="Brown"></div>` | Structural/semantic HTML element. |
| 1862 | `                                        <div class="color-swatch navy" title="Navy"></div>` | Structural/semantic HTML element. |
| 1863 | `                                        <div class="color-swatch maroon" title="Maroon"></div>` | Structural/semantic HTML element. |
| 1864 | `                                        <div class="color-swatch skinbrown" title="Skin Brown"></div>` | Structural/semantic HTML element. |
| 1865 | `                                        <div class="color-swatch ltblue" title="Light Blue"></div>` | Structural/semantic HTML element. |
| 1866 | `                                        <div class="color-swatch ltpink" title="Light Pink"></div>` | Structural/semantic HTML element. |
| 1867 | `                                    </div>` | Structural/semantic HTML element. |
| 1868 | `                                </div>` | Structural/semantic HTML element. |
| 1869 | `                            </div>` | Structural/semantic HTML element. |
| 1870 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 1871 | `                                <div class="spec-label">Quality</div>` | Structural/semantic HTML element. |
| 1872 | `                                <div class="spec-value">200TC, 300TC, 400TC</div>` | Structural/semantic HTML element. |
| 1873 | `                            </div>` | Structural/semantic HTML element. |
| 1874 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 1875 | `                                <div class="spec-label">Dimensions</div>` | Structural/semantic HTML element. |
| 1876 | `                                <div class="spec-value">60×90 / 90×100 / 100×110 Inches</div>` | Structural/semantic HTML element. |
| 1877 | `                            </div>` | Structural/semantic HTML element. |
| 1878 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 1879 | `                                <div class="spec-label">Pattern</div>` | Structural/semantic HTML element. |
| 1880 | `                                <div class="spec-value">Plain / Stripes</div>` | Structural/semantic HTML element. |
| 1881 | `                            </div>` | Structural/semantic HTML element. |
| 1882 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 1883 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 1884 | `                                <div class="spec-value">100% Long-Staple Cotton</div>` | Structural/semantic HTML element. |
| 1885 | `                            </div>` | Structural/semantic HTML element. |
| 1886 | `                        </div>` | Structural/semantic HTML element. |
| 1887 | `                    </div>` | Structural/semantic HTML element. |
| 1888 | `                    ` |  |
| 1889 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1890 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 1891 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 1892 | `                            <li>Machine wash cold with like colors</li>` | Structural/semantic HTML element. |
| 1893 | `                            <li>Tumble dry low, remove promptly</li>` | Structural/semantic HTML element. |
| 1894 | `                            <li>Non-Chlorine bleach only</li>` | Structural/semantic HTML element. |
| 1895 | `                            <li>Warm iron if needed</li>` | Structural/semantic HTML element. |
| 1896 | `                        </ul>` | Structural/semantic HTML element. |
| 1897 | `                    </div>` | Structural/semantic HTML element. |
| 1898 | `                </div>` | Structural/semantic HTML element. |
| 1899 | `            </div>` | Structural/semantic HTML element. |
| 1900 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 1901 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 1902 | `            </div>` | Structural/semantic HTML element. |
| 1903 | `        </div>` | Structural/semantic HTML element. |
| 1904 | `    </div>` | Structural/semantic HTML element. |
| 1905 | `` |  |
| 1906 | `    <!-- Pillow Modal -->` | Structural/semantic HTML element. |
| 1907 | `    <div id="pillow-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 1908 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 1909 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 1910 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 1911 | `                <h3 class="modal-title">Hotel Pillow</h3>` | Modal/dialog structure for detail overlays. |
| 1912 | `                <p class="modal-subtitle">Adjustable comfort with cooling technology</p>` | Modal/dialog structure for detail overlays. |
| 1913 | `            </div>` | Structural/semantic HTML element. |
| 1914 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 1915 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 1916 | `                    <img src="https://images.unsplash.com/photo-1520614073990-dd6020b2d15f?auto=format&fit=crop&w=800&q=80" alt="Hotel Pillow">` | Image element; ensure alt text for accessibility. |
| 1917 | `                </div>` | Structural/semantic HTML element. |
| 1918 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 1919 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1920 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 1921 | `                        <p>Our premium hotel pillow combines the plush comfort of siliconised fiber with advanced cooling technology. The adjustable design allows guests to customize firmness to their preference, while the breathable cover ensures optimal temperature regulation throughout the night.</p>` | Paragraph text / supporting copy. |
| 1922 | `                    </div>` | Structural/semantic HTML element. |
| 1923 | `                    ` |  |
| 1924 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1925 | `                        <h4>Features</h4>` | Structural/semantic HTML element. |
| 1926 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 1927 | `                            <li>Siliconised fiber filling for consistent support</li>` | Structural/semantic HTML element. |
| 1928 | `                            <li>Adjustable firmness with removable inserts</li>` | Structural/semantic HTML element. |
| 1929 | `                            <li>Cooling gel memory foam layer</li>` | Structural/semantic HTML element. |
| 1930 | `                            <li>Hypoallergenic and dust-mite resistant</li>` | Structural/semantic HTML element. |
| 1931 | `                            <li>Breathable cotton cover</li>` | Structural/semantic HTML element. |
| 1932 | `                        </ul>` | Structural/semantic HTML element. |
| 1933 | `                    </div>` | Structural/semantic HTML element. |
| 1934 | `                    ` |  |
| 1935 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1936 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 1937 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 1938 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 1939 | `                                <div class="spec-label">Dimensions</div>` | Structural/semantic HTML element. |
| 1940 | `                                <div class="spec-value">Standard, Queen, King sizes</div>` | Structural/semantic HTML element. |
| 1941 | `                            </div>` | Structural/semantic HTML element. |
| 1942 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 1943 | `                                <div class="spec-label">Firmness</div>` | Structural/semantic HTML element. |
| 1944 | `                                <div class="spec-value">Soft, Medium, Firm options</div>` | Structural/semantic HTML element. |
| 1945 | `                            </div>` | Structural/semantic HTML element. |
| 1946 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 1947 | `                                <div class="spec-label">Fill Material</div>` | Structural/semantic HTML element. |
| 1948 | `                                <div class="spec-value">Siliconised Polyester Fiber</div>` | Structural/semantic HTML element. |
| 1949 | `                            </div>` | Structural/semantic HTML element. |
| 1950 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 1951 | `                                <div class="spec-label">Cover</div>` | Structural/semantic HTML element. |
| 1952 | `                                <div class="spec-value">100% Cotton Sateen</div>` | Structural/semantic HTML element. |
| 1953 | `                            </div>` | Structural/semantic HTML element. |
| 1954 | `                        </div>` | Structural/semantic HTML element. |
| 1955 | `                    </div>` | Structural/semantic HTML element. |
| 1956 | `                    ` |  |
| 1957 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1958 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 1959 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 1960 | `                            <li>Machine wash cool on gentle cycle</li>` | Structural/semantic HTML element. |
| 1961 | `                            <li>Tumble dry low with tennis balls to fluff</li>` | Structural/semantic HTML element. |
| 1962 | `                            <li>Do not bleach or dry clean</li>` | Structural/semantic HTML element. |
| 1963 | `                            <li>Spot clean only for memory foam layer</li>` | Structural/semantic HTML element. |
| 1964 | `                            <li>Air fluff periodically to maintain shape</li>` | Structural/semantic HTML element. |
| 1965 | `                        </ul>` | Structural/semantic HTML element. |
| 1966 | `                    </div>` | Structural/semantic HTML element. |
| 1967 | `                </div>` | Structural/semantic HTML element. |
| 1968 | `            </div>` | Structural/semantic HTML element. |
| 1969 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 1970 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 1971 | `            </div>` | Structural/semantic HTML element. |
| 1972 | `        </div>` | Structural/semantic HTML element. |
| 1973 | `    </div>` | Structural/semantic HTML element. |
| 1974 | `` |  |
| 1975 | `    <!-- Pillow Case Modal -->` | Structural/semantic HTML element. |
| 1976 | `    <div id="pillow-case-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 1977 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 1978 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 1979 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 1980 | `                <h3 class="modal-title">Pillow Case</h3>` | Modal/dialog structure for detail overlays. |
| 1981 | `                <p class="modal-subtitle">Luxurious sateen finish with wrinkle resistance</p>` | Modal/dialog structure for detail overlays. |
| 1982 | `            </div>` | Structural/semantic HTML element. |
| 1983 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 1984 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 1985 | `                    <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=800&q=80" alt="Pillow Case">` | Image element; ensure alt text for accessibility. |
| 1986 | `                </div>` | Structural/semantic HTML element. |
| 1987 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 1988 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1989 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 1990 | `                        <p>Crafted from 100% premium long-staple cotton, our pillow cases feature a lustrous sateen finish that becomes softer with each wash. The wrinkle-resistant treatment ensures a crisp, professional appearance while providing exceptional comfort against the skin.</p>` | Paragraph text / supporting copy. |
| 1991 | `                    </div>` | Structural/semantic HTML element. |
| 1992 | `                    ` |  |
| 1993 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 1994 | `                        <h4>Features</h4>` | Structural/semantic HTML element. |
| 1995 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 1996 | `                            <li>Lustrous sateen weave for superior softness</li>` | Structural/semantic HTML element. |
| 1997 | `                            <li>Wrinkle-resistant finish</li>` | Structural/semantic HTML element. |
| 1998 | `                            <li>Colorfast dyes that maintain vibrancy</li>` | Structural/semantic HTML element. |
| 1999 | `                            <li>Reinforced seams for durability</li>` | Structural/semantic HTML element. |
| 2000 | `                            <li>Available in multiple thread counts</li>` | Structural/semantic HTML element. |
| 2001 | `                        </ul>` | Structural/semantic HTML element. |
| 2002 | `                    </div>` | Structural/semantic HTML element. |
| 2003 | `                    ` |  |
| 2004 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2005 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 2006 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 2007 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2008 | `                                <div class="spec-label">Thread Count</div>` | Structural/semantic HTML element. |
| 2009 | `                                <div class="spec-value">200TC, 300TC, 400TC options</div>` | Structural/semantic HTML element. |
| 2010 | `                            </div>` | Structural/semantic HTML element. |
| 2011 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2012 | `                                <div class="spec-label">Sizes</div>` | Structural/semantic HTML element. |
| 2013 | `                                <div class="spec-value">Standard, Queen, King, Euro</div>` | Structural/semantic HTML element. |
| 2014 | `                            </div>` | Structural/semantic HTML element. |
| 2015 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2016 | `                                <div class="spec-label">Closure</div>` | Structural/semantic HTML element. |
| 2017 | `                                <div class="spec-value">Envelope or Zipper options</div>` | Structural/semantic HTML element. |
| 2018 | `                            </div>` | Structural/semantic HTML element. |
| 2019 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2020 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 2021 | `                                <div class="spec-value">100% Long-Staple Cotton</div>` | Structural/semantic HTML element. |
| 2022 | `                            </div>` | Structural/semantic HTML element. |
| 2023 | `                        </div>` | Structural/semantic HTML element. |
| 2024 | `                    </div>` | Structural/semantic HTML element. |
| 2025 | `                    ` |  |
| 2026 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2027 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 2028 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2029 | `                            <li>Machine wash warm with like colors</li>` | Structural/semantic HTML element. |
| 2030 | `                            <li>Tumble dry medium, remove promptly</li>` | Structural/semantic HTML element. |
| 2031 | `                            <li>Iron on medium heat if needed</li>` | Structural/semantic HTML element. |
| 2032 | `                            <li>Non-chlorine bleach when necessary</li>` | Structural/semantic HTML element. |
| 2033 | `                            <li>Do not use fabric softener</li>` | Structural/semantic HTML element. |
| 2034 | `                        </ul>` | Structural/semantic HTML element. |
| 2035 | `                    </div>` | Structural/semantic HTML element. |
| 2036 | `                </div>` | Structural/semantic HTML element. |
| 2037 | `            </div>` | Structural/semantic HTML element. |
| 2038 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 2039 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 2040 | `            </div>` | Structural/semantic HTML element. |
| 2041 | `        </div>` | Structural/semantic HTML element. |
| 2042 | `    </div>` | Structural/semantic HTML element. |
| 2043 | `` |  |
| 2044 | `    <!-- Bedsheets Modal -->` | Structural/semantic HTML element. |
| 2045 | `    <div id="bedsheets-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 2046 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 2047 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 2048 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 2049 | `                <h3 class="modal-title">Bedsheets</h3>` | Modal/dialog structure for detail overlays. |
| 2050 | `                <p class="modal-subtitle">Pure cotton comfort in multiple weaves</p>` | Modal/dialog structure for detail overlays. |
| 2051 | `            </div>` | Structural/semantic HTML element. |
| 2052 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 2053 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 2054 | `                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" alt="Bedsheets">` | Image element; ensure alt text for accessibility. |
| 2055 | `                </div>` | Structural/semantic HTML element. |
| 2056 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 2057 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2058 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 2059 | `                        <p>Our premium bedsheet collection offers the perfect balance of comfort, durability, and style. Available in multiple weaves including percale, sateen, and jersey, each option provides unique benefits to suit different preferences and climates.</p>` | Paragraph text / supporting copy. |
| 2060 | `                    </div>` | Structural/semantic HTML element. |
| 2061 | `                    ` |  |
| 2062 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2063 | `                        <h4>Weave Options</h4>` | Structural/semantic HTML element. |
| 2064 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2065 | `                            <li><strong>Percale:</strong> Crisp, cool, and breathable - perfect for warm climates</li>` | Structural/semantic HTML element. |
| 2066 | `                            <li><strong>Sateen:</strong> Silky smooth with a subtle sheen - luxurious feel</li>` | Structural/semantic HTML element. |
| 2067 | `                            <li><strong>Jersey:</strong> Soft, stretchy knit - t-shirt like comfort</li>` | Structural/semantic HTML element. |
| 2068 | `                            <li><strong>Linen:</strong> Naturally temperature regulating - gets softer with use</li>` | Structural/semantic HTML element. |
| 2069 | `                        </ul>` | Structural/semantic HTML element. |
| 2070 | `                    </div>` | Structural/semantic HTML element. |
| 2071 | `                    ` |  |
| 2072 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2073 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 2074 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 2075 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2076 | `                                <div class="spec-label">Thread Count</div>` | Structural/semantic HTML element. |
| 2077 | `                                <div class="spec-value">200-600TC options available</div>` | Structural/semantic HTML element. |
| 2078 | `                            </div>` | Structural/semantic HTML element. |
| 2079 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2080 | `                                <div class="spec-label">Sizes</div>` | Structural/semantic HTML element. |
| 2081 | `                                <div class="spec-value">Twin to California King</div>` | Structural/semantic HTML element. |
| 2082 | `                            </div>` | Structural/semantic HTML element. |
| 2083 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2084 | `                                <div class="spec-label">Weaves</div>` | Structural/semantic HTML element. |
| 2085 | `                                <div class="spec-value">Percale, Sateen, Jersey, Linen</div>` | Structural/semantic HTML element. |
| 2086 | `                            </div>` | Structural/semantic HTML element. |
| 2087 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2088 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 2089 | `                                <div class="spec-value">100% Cotton, Cotton Blends</div>` | Structural/semantic HTML element. |
| 2090 | `                            </div>` | Structural/semantic HTML element. |
| 2091 | `                        </div>` | Structural/semantic HTML element. |
| 2092 | `                    </div>` | Structural/semantic HTML element. |
| 2093 | `                    ` |  |
| 2094 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2095 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 2096 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2097 | `                            <li>Machine wash cold with mild detergent</li>` | Structural/semantic HTML element. |
| 2098 | `                            <li>Tumble dry low or line dry</li>` | Structural/semantic HTML element. |
| 2099 | `                            <li>Iron on appropriate heat setting for fabric</li>` | Structural/semantic HTML element. |
| 2100 | `                            <li>Fold immediately after drying to prevent wrinkles</li>` | Structural/semantic HTML element. |
| 2101 | `                            <li>Store in cool, dry place</li>` | Structural/semantic HTML element. |
| 2102 | `                        </ul>` | Structural/semantic HTML element. |
| 2103 | `                    </div>` | Structural/semantic HTML element. |
| 2104 | `                </div>` | Structural/semantic HTML element. |
| 2105 | `            </div>` | Structural/semantic HTML element. |
| 2106 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 2107 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 2108 | `            </div>` | Structural/semantic HTML element. |
| 2109 | `        </div>` | Structural/semantic HTML element. |
| 2110 | `    </div>` | Structural/semantic HTML element. |
| 2111 | `` |  |
| 2112 | `    <!-- Blankets Modal -->` | Structural/semantic HTML element. |
| 2113 | `    <div id="blankets-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 2114 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 2115 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 2116 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 2117 | `                <h3 class="modal-title">Blankets</h3>` | Modal/dialog structure for detail overlays. |
| 2118 | `                <p class="modal-subtitle">Luxurious warmth without weight</p>` | Modal/dialog structure for detail overlays. |
| 2119 | `            </div>` | Structural/semantic HTML element. |
| 2120 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 2121 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 2122 | `                    <img src="https://images.unsplash.com/photo-1576873693822-34a5c539d307?auto=format&fit=crop&w=800&q=80" alt="Blankets">` | Image element; ensure alt text for accessibility. |
| 2123 | `                </div>` | Structural/semantic HTML element. |
| 2124 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 2125 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2126 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 2127 | `                        <p>Our microfiber blankets provide exceptional warmth while remaining lightweight and breathable. The plush material creates a cozy, luxurious feel perfect for layering or standalone use in moderate climates. Available in various weights for year-round comfort.</p>` | Paragraph text / supporting copy. |
| 2128 | `                    </div>` | Structural/semantic HTML element. |
| 2129 | `                    ` |  |
| 2130 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2131 | `                        <h4>Features</h4>` | Structural/semantic HTML element. |
| 2132 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2133 | `                            <li>Ultra-soft microfiber construction</li>` | Structural/semantic HTML element. |
| 2134 | `                            <li>Excellent warmth-to-weight ratio</li>` | Structural/semantic HTML element. |
| 2135 | `                            <li>Breathable and moisture-wicking</li>` | Structural/semantic HTML element. |
| 2136 | `                            <li>Hypoallergenic and dust-mite resistant</li>` | Structural/semantic HTML element. |
| 2137 | `                            <li>Durable binding on all edges</li>` | Structural/semantic HTML element. |
| 2138 | `                        </ul>` | Structural/semantic HTML element. |
| 2139 | `                    </div>` | Structural/semantic HTML element. |
| 2140 | `                    ` |  |
| 2141 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2142 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 2143 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 2144 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2145 | `                                <div class="spec-label">Weights</div>` | Structural/semantic HTML element. |
| 2146 | `                                <div class="spec-value">Light, Medium, Heavy options</div>` | Structural/semantic HTML element. |
| 2147 | `                            </div>` | Structural/semantic HTML element. |
| 2148 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2149 | `                                <div class="spec-label">Sizes</div>` | Structural/semantic HTML element. |
| 2150 | `                                <div class="spec-value">Throw to King sizes</div>` | Structural/semantic HTML element. |
| 2151 | `                            </div>` | Structural/semantic HTML element. |
| 2152 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2153 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 2154 | `                                <div class="spec-value">100% Microfiber Polyester</div>` | Structural/semantic HTML element. |
| 2155 | `                            </div>` | Structural/semantic HTML element. |
| 2156 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2157 | `                                <div class="spec-label">Construction</div>` | Structural/semantic HTML element. |
| 2158 | `                                <div class="spec-value">Brushed, Woven, or Quilted</div>` | Structural/semantic HTML element. |
| 2159 | `                            </div>` | Structural/semantic HTML element. |
| 2160 | `                        </div>` | Structural/semantic HTML element. |
| 2161 | `                    </div>` | Structural/semantic HTML element. |
| 2162 | `                    ` |  |
| 2163 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2164 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 2165 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2166 | `                            <li>Machine wash cold on gentle cycle</li>` | Structural/semantic HTML element. |
| 2167 | `                            <li>Use mild detergent, no fabric softener</li>` | Structural/semantic HTML element. |
| 2168 | `                            <li>Tumble dry low, remove promptly</li>` | Structural/semantic HTML element. |
| 2169 | `                            <li>Do not bleach or dry clean</li>` | Structural/semantic HTML element. |
| 2170 | `                            <li>Store folded, avoid compression</li>` | Structural/semantic HTML element. |
| 2171 | `                        </ul>` | Structural/semantic HTML element. |
| 2172 | `                    </div>` | Structural/semantic HTML element. |
| 2173 | `                </div>` | Structural/semantic HTML element. |
| 2174 | `            </div>` | Structural/semantic HTML element. |
| 2175 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 2176 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 2177 | `            </div>` | Structural/semantic HTML element. |
| 2178 | `        </div>` | Structural/semantic HTML element. |
| 2179 | `    </div>` | Structural/semantic HTML element. |
| 2180 | `` |  |
| 2181 | `    <!-- Towels Modal -->` | Structural/semantic HTML element. |
| 2182 | `    <div id="towels-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 2183 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 2184 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 2185 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 2186 | `                <h3 class="modal-title">Premium Cotton Towels</h3>` | Modal/dialog structure for detail overlays. |
| 2187 | `                <p class="modal-subtitle">Luxurious absorbency and durability</p>` | Modal/dialog structure for detail overlays. |
| 2188 | `            </div>` | Structural/semantic HTML element. |
| 2189 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 2190 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 2191 | `                    <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=800&q=80" alt="Premium Towels">` | Image element; ensure alt text for accessibility. |
| 2192 | `                </div>` | Structural/semantic HTML element. |
| 2193 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 2194 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2195 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 2196 | `                        <p>Our premium cotton terry towels combine exceptional softness with superior absorbency. Crafted from 100% long-staple cotton, these towels feature a dense, plush pile that gets softer with every wash while maintaining their luxurious texture and durability.</p>` | Paragraph text / supporting copy. |
| 2197 | `                    </div>` | Structural/semantic HTML element. |
| 2198 | `                    ` |  |
| 2199 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2200 | `                        <h4>Features</h4>` | Structural/semantic HTML element. |
| 2201 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2202 | `                            <li>Extra-thick terry for maximum absorbency</li>` | Structural/semantic HTML element. |
| 2203 | `                            <li>Reinforced hems for extended durability</li>` | Structural/semantic HTML element. |
| 2204 | `                            <li>Quick-drying technology</li>` | Structural/semantic HTML element. |
| 2205 | `                            <li>Colorfast dyes that resist fading</li>` | Structural/semantic HTML element. |
| 2206 | `                            <li>Available in terry and waffle weaves</li>` | Structural/semantic HTML element. |
| 2207 | `                        </ul>` | Structural/semantic HTML element. |
| 2208 | `                    </div>` | Structural/semantic HTML element. |
| 2209 | `                    ` |  |
| 2210 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2211 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 2212 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 2213 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2214 | `                                <div class="spec-label">Sizes</div>` | Structural/semantic HTML element. |
| 2215 | `                                <div class="spec-value">Bath, Hand, Face, Pool & Spa</div>` | Structural/semantic HTML element. |
| 2216 | `                            </div>` | Structural/semantic HTML element. |
| 2217 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2218 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 2219 | `                                <div class="spec-value">100% Premium Cotton</div>` | Structural/semantic HTML element. |
| 2220 | `                            </div>` | Structural/semantic HTML element. |
| 2221 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2222 | `                                <div class="spec-label">Weight</div>` | Structural/semantic HTML element. |
| 2223 | `                                <div class="spec-value">550 GSM (Plush Quality)</div>` | Structural/semantic HTML element. |
| 2224 | `                            </div>` | Structural/semantic HTML element. |
| 2225 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2226 | `                                <div class="spec-label">Weave</div>` | Structural/semantic HTML element. |
| 2227 | `                                <div class="spec-value">Terry & Waffle Options</div>` | Structural/semantic HTML element. |
| 2228 | `                            </div>` | Structural/semantic HTML element. |
| 2229 | `                        </div>` | Structural/semantic HTML element. |
| 2230 | `                    </div>` | Structural/semantic HTML element. |
| 2231 | `                    ` |  |
| 2232 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2233 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 2234 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2235 | `                            <li>Machine wash warm with like colors</li>` | Structural/semantic HTML element. |
| 2236 | `                            <li>Tumble dry on medium heat</li>` | Structural/semantic HTML element. |
| 2237 | `                            <li>Do not use fabric softener (reduces absorbency)</li>` | Structural/semantic HTML element. |
| 2238 | `                            <li>Iron on low heat if needed</li>` | Structural/semantic HTML element. |
| 2239 | `                            <li>Store in dry, well-ventilated area</li>` | Structural/semantic HTML element. |
| 2240 | `                        </ul>` | Structural/semantic HTML element. |
| 2241 | `                    </div>` | Structural/semantic HTML element. |
| 2242 | `                </div>` | Structural/semantic HTML element. |
| 2243 | `            </div>` | Structural/semantic HTML element. |
| 2244 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 2245 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 2246 | `            </div>` | Structural/semantic HTML element. |
| 2247 | `        </div>` | Structural/semantic HTML element. |
| 2248 | `    </div>` | Structural/semantic HTML element. |
| 2249 | `` |  |
| 2250 | `    <!-- Runner Modal -->` | Structural/semantic HTML element. |
| 2251 | `    <div id="runner-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 2252 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 2253 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 2254 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 2255 | `                <h3 class="modal-title">Bed Runner</h3>` | Modal/dialog structure for detail overlays. |
| 2256 | `                <p class="modal-subtitle">Decorative and protective bed accent</p>` | Modal/dialog structure for detail overlays. |
| 2257 | `            </div>` | Structural/semantic HTML element. |
| 2258 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 2259 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 2260 | `                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" alt="Bed Runner">` | Image element; ensure alt text for accessibility. |
| 2261 | `                </div>` | Structural/semantic HTML element. |
| 2262 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 2263 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2264 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 2265 | `                        <p>Our lightweight bed runners combine decorative appeal with practical protection. Placed across the foot of the bed, they protect bedding from wear while adding a touch of elegance. The quilted construction with decorative stitching creates visual interest without adding bulk.</p>` | Paragraph text / supporting copy. |
| 2266 | `                    </div>` | Structural/semantic HTML element. |
| 2267 | `                    ` |  |
| 2268 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2269 | `                        <h4>Features</h4>` | Structural/semantic HTML element. |
| 2270 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2271 | `                            <li>Quilted construction with decorative stitching</li>` | Structural/semantic HTML element. |
| 2272 | `                            <li>Lightweight and easy to launder</li>` | Structural/semantic HTML element. |
| 2273 | `                            <li>Protects bedding from foot traffic and wear</li>` | Structural/semantic HTML element. |
| 2274 | `                            <li>Adds decorative accent to bed presentation</li>` | Structural/semantic HTML element. |
| 2275 | `                            <li>Available in multiple patterns and colors</li>` | Structural/semantic HTML element. |
| 2276 | `                        </ul>` | Structural/semantic HTML element. |
| 2277 | `                    </div>` | Structural/semantic HTML element. |
| 2278 | `                    ` |  |
| 2279 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2280 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 2281 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 2282 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2283 | `                                <div class="spec-label">Dimensions</div>` | Structural/semantic HTML element. |
| 2284 | `                                <div class="spec-value">20" x 60" (Standard), Custom sizes available</div>` | Structural/semantic HTML element. |
| 2285 | `                            </div>` | Structural/semantic HTML element. |
| 2286 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2287 | `                                <div class="spec-label">Patterns</div>` | Structural/semantic HTML element. |
| 2288 | `                                <div class="spec-value">Plain, Striped, Embroidered options</div>` | Structural/semantic HTML element. |
| 2289 | `                            </div>` | Structural/semantic HTML element. |
| 2290 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2291 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 2292 | `                                <div class="spec-value">100% Cotton or Cotton Blend</div>` | Structural/semantic HTML element. |
| 2293 | `                            </div>` | Structural/semantic HTML element. |
| 2294 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2295 | `                                <div class="spec-label">Construction</div>` | Structural/semantic HTML element. |
| 2296 | `                                <div class="spec-value">Quilted with decorative stitching</div>` | Structural/semantic HTML element. |
| 2297 | `                            </div>` | Structural/semantic HTML element. |
| 2298 | `                        </div>` | Structural/semantic HTML element. |
| 2299 | `                    </div>` | Structural/semantic HTML element. |
| 2300 | `                    ` |  |
| 2301 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2302 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 2303 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2304 | `                            <li>Machine wash cold with like colors</li>` | Structural/semantic HTML element. |
| 2305 | `                            <li>Tumble dry low, remove promptly</li>` | Structural/semantic HTML element. |
| 2306 | `                            <li>Iron on medium heat if needed</li>` | Structural/semantic HTML element. |
| 2307 | `                            <li>Store folded to prevent creasing</li>` | Structural/semantic HTML element. |
| 2308 | `                            <li>Professional cleaning for delicate embellishments</li>` | Structural/semantic HTML element. |
| 2309 | `                        </ul>` | Structural/semantic HTML element. |
| 2310 | `                    </div>` | Structural/semantic HTML element. |
| 2311 | `                </div>` | Structural/semantic HTML element. |
| 2312 | `            </div>` | Structural/semantic HTML element. |
| 2313 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 2314 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 2315 | `            </div>` | Structural/semantic HTML element. |
| 2316 | `        </div>` | Structural/semantic HTML element. |
| 2317 | `    </div>` | Structural/semantic HTML element. |
| 2318 | `` |  |
| 2319 | `    <!-- Hospital Duvet Modal -->` | Structural/semantic HTML element. |
| 2320 | `    <div id="hospital-duvet-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 2321 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 2322 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 2323 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 2324 | `                <h3 class="modal-title">Hospital Duvet</h3>` | Modal/dialog structure for detail overlays. |
| 2325 | `                <p class="modal-subtitle">Medical-grade comfort with anti-microbial protection</p>` | Modal/dialog structure for detail overlays. |
| 2326 | `            </div>` | Structural/semantic HTML element. |
| 2327 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 2328 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 2329 | `                    <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80" alt="Hospital Duvet">` | Image element; ensure alt text for accessibility. |
| 2330 | `                </div>` | Structural/semantic HTML element. |
| 2331 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 2332 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2333 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 2334 | `                        <p>Specially designed for healthcare environments, this duvet combines comfort with clinical safety. Features anti-viral and anti-bacterial finishes that withstand repeated sterilization cycles while maintaining softness and warmth.</p>` | Paragraph text / supporting copy. |
| 2335 | `                    </div>` | Structural/semantic HTML element. |
| 2336 | `                    ` |  |
| 2337 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2338 | `                        <h4>Medical Features</h4>` | Structural/semantic HTML element. |
| 2339 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2340 | `                            <li>Anti-viral and anti-bacterial treatment</li>` | Structural/semantic HTML element. |
| 2341 | `                            <li>Hypoallergenic materials</li>` | Structural/semantic HTML element. |
| 2342 | `                            <li>Withstands high-temperature washing</li>` | Structural/semantic HTML element. |
| 2343 | `                            <li>Quick-drying for fast room turnover</li>` | Structural/semantic HTML element. |
| 2344 | `                            <li>Fluid-resistant barrier</li>` | Structural/semantic HTML element. |
| 2345 | `                        </ul>` | Structural/semantic HTML element. |
| 2346 | `                    </div>` | Structural/semantic HTML element. |
| 2347 | `                    ` |  |
| 2348 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2349 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 2350 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 2351 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2352 | `                                <div class="spec-label">Dimensions</div>` | Structural/semantic HTML element. |
| 2353 | `                                <div class="spec-value">60×90 / 90×100 / 100×110 Inches</div>` | Structural/semantic HTML element. |
| 2354 | `                            </div>` | Structural/semantic HTML element. |
| 2355 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2356 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 2357 | `                                <div class="spec-value">100% cotton with medical-grade finish</div>` | Structural/semantic HTML element. |
| 2358 | `                            </div>` | Structural/semantic HTML element. |
| 2359 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2360 | `                                <div class="spec-label">Fill</div>` | Structural/semantic HTML element. |
| 2361 | `                                <div class="spec-value">Recron polyfibre with anti-microbial properties</div>` | Structural/semantic HTML element. |
| 2362 | `                            </div>` | Structural/semantic HTML element. |
| 2363 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2364 | `                                <div class="spec-label">Safety Standards</div>` | Structural/semantic HTML element. |
| 2365 | `                                <div class="spec-value">Meets healthcare infection control requirements</div>` | Structural/semantic HTML element. |
| 2366 | `                            </div>` | Structural/semantic HTML element. |
| 2367 | `                        </div>` | Structural/semantic HTML element. |
| 2368 | `                    </div>` | Structural/semantic HTML element. |
| 2369 | `                    ` |  |
| 2370 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2371 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 2372 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2373 | `                            <li>Machine wash at 60°C for sterilization</li>` | Structural/semantic HTML element. |
| 2374 | `                            <li>Use hospital-grade detergents</li>` | Structural/semantic HTML element. |
| 2375 | `                            <li>Tumble dry on medium heat</li>` | Structural/semantic HTML element. |
| 2376 | `                            <li>Do not use fabric softeners</li>` | Structural/semantic HTML element. |
| 2377 | `                            <li>Inspect regularly for wear and tear</li>` | Structural/semantic HTML element. |
| 2378 | `                        </ul>` | Structural/semantic HTML element. |
| 2379 | `                    </div>` | Structural/semantic HTML element. |
| 2380 | `                </div>` | Structural/semantic HTML element. |
| 2381 | `            </div>` | Structural/semantic HTML element. |
| 2382 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 2383 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 2384 | `            </div>` | Structural/semantic HTML element. |
| 2385 | `        </div>` | Structural/semantic HTML element. |
| 2386 | `    </div>` | Structural/semantic HTML element. |
| 2387 | `` |  |
| 2388 | `    <!-- Hospital Duvet Cover Modal -->` | Structural/semantic HTML element. |
| 2389 | `    <div id="hospital-duvet-cover-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 2390 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 2391 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 2392 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 2393 | `                <h3 class="modal-title">Hospital Duvet Cover</h3>` | Modal/dialog structure for detail overlays. |
| 2394 | `                <p class="modal-subtitle">Medical-grade protection with patient comfort</p>` | Modal/dialog structure for detail overlays. |
| 2395 | `            </div>` | Structural/semantic HTML element. |
| 2396 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 2397 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 2398 | `                    <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=800&q=80" alt="Hospital Duvet Cover">` | Image element; ensure alt text for accessibility. |
| 2399 | `                </div>` | Structural/semantic HTML element. |
| 2400 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 2401 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2402 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 2403 | `                        <p>Medical-grade duvet cover designed for healthcare environments with advanced anti-viral and anti-bacterial properties. Features fluid-resistant barrier and reinforced stitching for extended durability in clinical settings.</p>` | Paragraph text / supporting copy. |
| 2404 | `                    </div>` | Structural/semantic HTML element. |
| 2405 | `                    ` |  |
| 2406 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2407 | `                        <h4>Medical Features</h4>` | Structural/semantic HTML element. |
| 2408 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2409 | `                            <li>Anti-viral and anti-bacterial finish</li>` | Structural/semantic HTML element. |
| 2410 | `                            <li>Fluid-resistant barrier protection</li>` | Structural/semantic HTML element. |
| 2411 | `                            <li>Reinforced stitching at stress points</li>` | Structural/semantic HTML element. |
| 2412 | `                            <li>Color-coded size identification</li>` | Structural/semantic HTML element. |
| 2413 | `                            <li>Withstands industrial laundering</li>` | Structural/semantic HTML element. |
| 2414 | `                        </ul>` | Structural/semantic HTML element. |
| 2415 | `                    </div>` | Structural/semantic HTML element. |
| 2416 | `                    ` |  |
| 2417 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2418 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 2419 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 2420 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2421 | `                                <div class="spec-label">Thread Count</div>` | Structural/semantic HTML element. |
| 2422 | `                                <div class="spec-value">200TC Medical Grade</div>` | Structural/semantic HTML element. |
| 2423 | `                            </div>` | Structural/semantic HTML element. |
| 2424 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2425 | `                                <div class="spec-label">Closure</div>` | Structural/semantic HTML element. |
| 2426 | `                                <div class="spec-value">Zipper or Snap Button options</div>` | Structural/semantic HTML element. |
| 2427 | `                            </div>` | Structural/semantic HTML element. |
| 2428 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2429 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 2430 | `                                <div class="spec-value">100% Cotton with medical finish</div>` | Structural/semantic HTML element. |
| 2431 | `                            </div>` | Structural/semantic HTML element. |
| 2432 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2433 | `                                <div class="spec-label">Safety Standards</div>` | Structural/semantic HTML element. |
| 2434 | `                                <div class="spec-value">Healthcare infection control compliant</div>` | Structural/semantic HTML element. |
| 2435 | `                            </div>` | Structural/semantic HTML element. |
| 2436 | `                        </div>` | Structural/semantic HTML element. |
| 2437 | `                    </div>` | Structural/semantic HTML element. |
| 2438 | `                    ` |  |
| 2439 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2440 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 2441 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2442 | `                            <li>Wash at 71°C for infection control</li>` | Structural/semantic HTML element. |
| 2443 | `                            <li>Use hospital-grade detergents</li>` | Structural/semantic HTML element. |
| 2444 | `                            <li>Tumble dry medium heat</li>` | Structural/semantic HTML element. |
| 2445 | `                            <li>Do not use fabric softeners</li>` | Structural/semantic HTML element. |
| 2446 | `                            <li>Inspect regularly for damage</li>` | Structural/semantic HTML element. |
| 2447 | `                        </ul>` | Structural/semantic HTML element. |
| 2448 | `                    </div>` | Structural/semantic HTML element. |
| 2449 | `                </div>` | Structural/semantic HTML element. |
| 2450 | `            </div>` | Structural/semantic HTML element. |
| 2451 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 2452 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 2453 | `            </div>` | Structural/semantic HTML element. |
| 2454 | `        </div>` | Structural/semantic HTML element. |
| 2455 | `    </div>` | Structural/semantic HTML element. |
| 2456 | `` |  |
| 2457 | `    <!-- Hospital Pillow Modal -->` | Structural/semantic HTML element. |
| 2458 | `    <div id="hospital-pillow-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 2459 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 2460 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 2461 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 2462 | `                <h3 class="modal-title">Hospital Pillow</h3>` | Modal/dialog structure for detail overlays. |
| 2463 | `                <p class="modal-subtitle">Medical-grade support with infection control</p>` | Modal/dialog structure for detail overlays. |
| 2464 | `            </div>` | Structural/semantic HTML element. |
| 2465 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 2466 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 2467 | `                    <img src="https://images.unsplash.com/photo-1520614073990-dd6020b2d15f?auto=format&fit=crop&w=800&q=80" alt="Hospital Pillow">` | Image element; ensure alt text for accessibility. |
| 2468 | `                </div>` | Structural/semantic HTML element. |
| 2469 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 2470 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2471 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 2472 | `                        <p>Specially designed for healthcare settings, this medical-grade pillow provides optimal support while meeting strict infection control standards. Features anti-microbial properties and fluid-resistant barriers for patient safety.</p>` | Paragraph text / supporting copy. |
| 2473 | `                    </div>` | Structural/semantic HTML element. |
| 2474 | `                    ` |  |
| 2475 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2476 | `                        <h4>Medical Features</h4>` | Structural/semantic HTML element. |
| 2477 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2478 | `                            <li>Anti-microbial and anti-viral treatment</li>` | Structural/semantic HTML element. |
| 2479 | `                            <li>Fluid-resistant barrier protection</li>` | Structural/semantic HTML element. |
| 2480 | `                            <li>Hypoallergenic siliconised fiber filling</li>` | Structural/semantic HTML element. |
| 2481 | `                            <li>Adjustable firmness options</li>` | Structural/semantic HTML element. |
| 2482 | `                            <li>Withstands repeated sterilization</li>` | Structural/semantic HTML element. |
| 2483 | `                        </ul>` | Structural/semantic HTML element. |
| 2484 | `                    </div>` | Structural/semantic HTML element. |
| 2485 | `                    ` |  |
| 2486 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2487 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 2488 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 2489 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2490 | `                                <div class="spec-label">Dimensions</div>` | Structural/semantic HTML element. |
| 2491 | `                                <div class="spec-value">Standard, Queen, King sizes</div>` | Structural/semantic HTML element. |
| 2492 | `                            </div>` | Structural/semantic HTML element. |
| 2493 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2494 | `                                <div class="spec-label">Firmness</div>` | Structural/semantic HTML element. |
| 2495 | `                                <div class="spec-value">Soft, Medium, Firm options</div>` | Structural/semantic HTML element. |
| 2496 | `                            </div>` | Structural/semantic HTML element. |
| 2497 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2498 | `                                <div class="spec-label">Fill Material</div>` | Structural/semantic HTML element. |
| 2499 | `                                <div class="spec-value">Medical-grade Siliconised Fiber</div>` | Structural/semantic HTML element. |
| 2500 | `                            </div>` | Structural/semantic HTML element. |
| 2501 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2502 | `                                <div class="spec-label">Cover</div>` | Structural/semantic HTML element. |
| 2503 | `                                <div class="spec-value">Fluid-resistant medical fabric</div>` | Structural/semantic HTML element. |
| 2504 | `                            </div>` | Structural/semantic HTML element. |
| 2505 | `                        </div>` | Structural/semantic HTML element. |
| 2506 | `                    </div>` | Structural/semantic HTML element. |
| 2507 | `                    ` |  |
| 2508 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2509 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 2510 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2511 | `                            <li>Machine wash at 71°C for disinfection</li>` | Structural/semantic HTML element. |
| 2512 | `                            <li>Use hospital-approved detergents</li>` | Structural/semantic HTML element. |
| 2513 | `                            <li>Tumble dry medium heat</li>` | Structural/semantic HTML element. |
| 2514 | `                            <li>Do not use fabric softeners</li>` | Structural/semantic HTML element. |
| 2515 | `                            <li>Inspect regularly for damage</li>` | Structural/semantic HTML element. |
| 2516 | `                        </ul>` | Structural/semantic HTML element. |
| 2517 | `                    </div>` | Structural/semantic HTML element. |
| 2518 | `                </div>` | Structural/semantic HTML element. |
| 2519 | `            </div>` | Structural/semantic HTML element. |
| 2520 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 2521 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 2522 | `            </div>` | Structural/semantic HTML element. |
| 2523 | `        </div>` | Structural/semantic HTML element. |
| 2524 | `    </div>` | Structural/semantic HTML element. |
| 2525 | `` |  |
| 2526 | `    <!-- Hospital Pillow Case Modal -->` | Structural/semantic HTML element. |
| 2527 | `    <div id="hospital-pillow-case-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 2528 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 2529 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 2530 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 2531 | `                <h3 class="modal-title">Hospital Pillow Case</h3>` | Modal/dialog structure for detail overlays. |
| 2532 | `                <p class="modal-subtitle">Infection control with patient comfort</p>` | Modal/dialog structure for detail overlays. |
| 2533 | `            </div>` | Structural/semantic HTML element. |
| 2534 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 2535 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 2536 | `                    <img src="https://images.unsplash.com/photo-1582582621959-48d9b05a9d9e?auto=format&fit=crop&w=800&q=80" alt="Hospital Pillow Case">` | Image element; ensure alt text for accessibility. |
| 2537 | `                </div>` | Structural/semantic HTML element. |
| 2538 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 2539 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2540 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 2541 | `                        <p>Medical-grade pillow cases designed for healthcare environments with advanced anti-viral and anti-bacterial properties. Provides both patient comfort and essential infection control measures.</p>` | Paragraph text / supporting copy. |
| 2542 | `                    </div>` | Structural/semantic HTML element. |
| 2543 | `                    ` |  |
| 2544 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2545 | `                        <h4>Medical Features</h4>` | Structural/semantic HTML element. |
| 2546 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2547 | `                            <li>Anti-viral and anti-bacterial finish</li>` | Structural/semantic HTML element. |
| 2548 | `                            <li>Fluid-resistant barrier</li>` | Structural/semantic HTML element. |
| 2549 | `                            <li>Reinforced stitching for durability</li>` | Structural/semantic HTML element. |
| 2550 | `                            <li>Color-coded for easy identification</li>` | Structural/semantic HTML element. |
| 2551 | `                            <li>Withstands industrial laundering</li>` | Structural/semantic HTML element. |
| 2552 | `                        </ul>` | Structural/semantic HTML element. |
| 2553 | `                    </div>` | Structural/semantic HTML element. |
| 2554 | `                    ` |  |
| 2555 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2556 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 2557 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 2558 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2559 | `                                <div class="spec-label">Thread Count</div>` | Structural/semantic HTML element. |
| 2560 | `                                <div class="spec-value">200TC Medical Grade</div>` | Structural/semantic HTML element. |
| 2561 | `                            </div>` | Structural/semantic HTML element. |
| 2562 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2563 | `                                <div class="spec-label">Sizes</div>` | Structural/semantic HTML element. |
| 2564 | `                                <div class="spec-value">Standard, Queen, King, Euro</div>` | Structural/semantic HTML element. |
| 2565 | `                            </div>` | Structural/semantic HTML element. |
| 2566 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2567 | `                                <div class="spec-label">Closure</div>` | Structural/semantic HTML element. |
| 2568 | `                                <div class="spec-value">Envelope or Zipper options</div>` | Structural/semantic HTML element. |
| 2569 | `                            </div>` | Structural/semantic HTML element. |
| 2570 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2571 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 2572 | `                                <div class="spec-value">100% Cotton with medical finish</div>` | Structural/semantic HTML element. |
| 2573 | `                            </div>` | Structural/semantic HTML element. |
| 2574 | `                        </div>` | Structural/semantic HTML element. |
| 2575 | `                    </div>` | Structural/semantic HTML element. |
| 2576 | `                    ` |  |
| 2577 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2578 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 2579 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2580 | `                            <li>Wash at 71°C for sterilization</li>` | Structural/semantic HTML element. |
| 2581 | `                            <li>Use hospital-grade detergents</li>` | Structural/semantic HTML element. |
| 2582 | `                            <li>Tumble dry medium heat</li>` | Structural/semantic HTML element. |
| 2583 | `                            <li>Do not use fabric softeners</li>` | Structural/semantic HTML element. |
| 2584 | `                            <li>Replace when showing signs of wear</li>` | Structural/semantic HTML element. |
| 2585 | `                        </ul>` | Structural/semantic HTML element. |
| 2586 | `                    </div>` | Structural/semantic HTML element. |
| 2587 | `                </div>` | Structural/semantic HTML element. |
| 2588 | `            </div>` | Structural/semantic HTML element. |
| 2589 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 2590 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 2591 | `            </div>` | Structural/semantic HTML element. |
| 2592 | `        </div>` | Structural/semantic HTML element. |
| 2593 | `    </div>` | Structural/semantic HTML element. |
| 2594 | `` |  |
| 2595 | `    <!-- Hospital Bedsheets Modal -->` | Structural/semantic HTML element. |
| 2596 | `    <div id="hospital-bedsheets-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 2597 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 2598 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 2599 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 2600 | `                <h3 class="modal-title">Hospital Bedsheets</h3>` | Modal/dialog structure for detail overlays. |
| 2601 | `                <p class="modal-subtitle">Clinical comfort with advanced protection</p>` | Modal/dialog structure for detail overlays. |
| 2602 | `            </div>` | Structural/semantic HTML element. |
| 2603 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 2604 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 2605 | `                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" alt="Hospital Bedsheets">` | Image element; ensure alt text for accessibility. |
| 2606 | `                </div>` | Structural/semantic HTML element. |
| 2607 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 2608 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2609 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 2610 | `                        <p>Medical-grade bedsheets designed specifically for healthcare environments. Features anti-viral and anti-bacterial properties while maintaining patient comfort and durability through repeated industrial laundering cycles.</p>` | Paragraph text / supporting copy. |
| 2611 | `                    </div>` | Structural/semantic HTML element. |
| 2612 | `                    ` |  |
| 2613 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2614 | `                        <h4>Medical Features</h4>` | Structural/semantic HTML element. |
| 2615 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2616 | `                            <li>Anti-viral and anti-bacterial treatment</li>` | Structural/semantic HTML element. |
| 2617 | `                            <li>Fluid-resistant barrier protection</li>` | Structural/semantic HTML element. |
| 2618 | `                            <li>Reinforced corners and hems</li>` | Structural/semantic HTML element. |
| 2619 | `                            <li>Color-coded sizing system</li>` | Structural/semantic HTML element. |
| 2620 | `                            <li>Withstands high-temperature washing</li>` | Structural/semantic HTML element. |
| 2621 | `                        </ul>` | Structural/semantic HTML element. |
| 2622 | `                    </div>` | Structural/semantic HTML element. |
| 2623 | `                    ` |  |
| 2624 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2625 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 2626 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 2627 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2628 | `                                <div class="spec-label">Thread Count</div>` | Structural/semantic HTML element. |
| 2629 | `                                <div class="spec-value">200TC Medical Grade</div>` | Structural/semantic HTML element. |
| 2630 | `                            </div>` | Structural/semantic HTML element. |
| 2631 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2632 | `                                <div class="spec-label">Sizes</div>` | Structural/semantic HTML element. |
| 2633 | `                                <div class="spec-value">All standard hospital bed sizes</div>` | Structural/semantic HTML element. |
| 2634 | `                            </div>` | Structural/semantic HTML element. |
| 2635 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2636 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 2637 | `                                <div class="spec-value">100% Cotton with medical finish</div>` | Structural/semantic HTML element. |
| 2638 | `                            </div>` | Structural/semantic HTML element. |
| 2639 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2640 | `                                <div class="spec-label">Features</div>` | Structural/semantic HTML element. |
| 2641 | `                                <div class="spec-value">Fitted sheets with elastic all around</div>` | Structural/semantic HTML element. |
| 2642 | `                            </div>` | Structural/semantic HTML element. |
| 2643 | `                        </div>` | Structural/semantic HTML element. |
| 2644 | `                    </div>` | Structural/semantic HTML element. |
| 2645 | `                    ` |  |
| 2646 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2647 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 2648 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2649 | `                            <li>Wash at 71°C for infection control</li>` | Structural/semantic HTML element. |
| 2650 | `                            <li>Use hospital-approved detergents</li>` | Structural/semantic HTML element. |
| 2651 | `                            <li>Tumble dry medium heat</li>` | Structural/semantic HTML element. |
| 2652 | `                            <li>Do not use fabric softeners</li>` | Structural/semantic HTML element. |
| 2653 | `                            <li>Inspect regularly for wear</li>` | Structural/semantic HTML element. |
| 2654 | `                        </ul>` | Structural/semantic HTML element. |
| 2655 | `                    </div>` | Structural/semantic HTML element. |
| 2656 | `                </div>` | Structural/semantic HTML element. |
| 2657 | `            </div>` | Structural/semantic HTML element. |
| 2658 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 2659 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 2660 | `            </div>` | Structural/semantic HTML element. |
| 2661 | `        </div>` | Structural/semantic HTML element. |
| 2662 | `    </div>` | Structural/semantic HTML element. |
| 2663 | `` |  |
| 2664 | `    <!-- Hospital Blankets Modal -->` | Structural/semantic HTML element. |
| 2665 | `    <div id="hospital-blankets-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 2666 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 2667 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 2668 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 2669 | `                <h3 class="modal-title">Hospital Blankets</h3>` | Modal/dialog structure for detail overlays. |
| 2670 | `                <p class="modal-subtitle">Warmth with medical-grade safety</p>` | Modal/dialog structure for detail overlays. |
| 2671 | `            </div>` | Structural/semantic HTML element. |
| 2672 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 2673 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 2674 | `                    <img src="https://images.unsplash.com/photo-1576873693822-34a5c539d307?auto=format&fit=crop&w=800&q=80" alt="Hospital Blankets">` | Image element; ensure alt text for accessibility. |
| 2675 | `                </div>` | Structural/semantic HTML element. |
| 2676 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 2677 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2678 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 2679 | `                        <p>Medical-grade blankets designed for patient comfort while meeting strict healthcare standards. Features anti-microbial properties and durable construction suitable for clinical environments and repeated sterilization.</p>` | Paragraph text / supporting copy. |
| 2680 | `                    </div>` | Structural/semantic HTML element. |
| 2681 | `                    ` |  |
| 2682 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2683 | `                        <h4>Medical Features</h4>` | Structural/semantic HTML element. |
| 2684 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2685 | `                            <li>Anti-microbial and anti-viral treatment</li>` | Structural/semantic HTML element. |
| 2686 | `                            <li>Hypoallergenic materials</li>` | Structural/semantic HTML element. |
| 2687 | `                            <li>Fluid-resistant properties</li>` | Structural/semantic HTML element. |
| 2688 | `                            <li>Durable binding for extended use</li>` | Structural/semantic HTML element. |
| 2689 | `                            <li>Withstands industrial laundering</li>` | Structural/semantic HTML element. |
| 2690 | `                        </ul>` | Structural/semantic HTML element. |
| 2691 | `                    </div>` | Structural/semantic HTML element. |
| 2692 | `                    ` |  |
| 2693 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2694 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 2695 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 2696 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2697 | `                                <div class="spec-label">Weights</div>` | Structural/semantic HTML element. |
| 2698 | `                                <div class="spec-value">Light, Medium options</div>` | Structural/semantic HTML element. |
| 2699 | `                            </div>` | Structural/semantic HTML element. |
| 2700 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2701 | `                                <div class="spec-label">Sizes</div>` | Structural/semantic HTML element. |
| 2702 | `                                <div class="spec-value">Single, Double, King sizes</div>` | Structural/semantic HTML element. |
| 2703 | `                            </div>` | Structural/semantic HTML element. |
| 2704 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2705 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 2706 | `                                <div class="spec-value">Microfiber with medical finish</div>` | Structural/semantic HTML element. |
| 2707 | `                            </div>` | Structural/semantic HTML element. |
| 2708 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2709 | `                                <div class="spec-label">Construction</div>` | Structural/semantic HTML element. |
| 2710 | `                                <div class="spec-value">Brushed finish for softness</div>` | Structural/semantic HTML element. |
| 2711 | `                            </div>` | Structural/semantic HTML element. |
| 2712 | `                        </div>` | Structural/semantic HTML element. |
| 2713 | `                    </div>` | Structural/semantic HTML element. |
| 2714 | `                    ` |  |
| 2715 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2716 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 2717 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2718 | `                            <li>Machine wash at 60°C</li>` | Structural/semantic HTML element. |
| 2719 | `                            <li>Use hospital-grade detergents</li>` | Structural/semantic HTML element. |
| 2720 | `                            <li>Tumble dry medium heat</li>` | Structural/semantic HTML element. |
| 2721 | `                            <li>Do not use fabric softeners</li>` | Structural/semantic HTML element. |
| 2722 | `                            <li>Store in clean, dry conditions</li>` | Structural/semantic HTML element. |
| 2723 | `                        </ul>` | Structural/semantic HTML element. |
| 2724 | `                    </div>` | Structural/semantic HTML element. |
| 2725 | `                </div>` | Structural/semantic HTML element. |
| 2726 | `            </div>` | Structural/semantic HTML element. |
| 2727 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 2728 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 2729 | `            </div>` | Structural/semantic HTML element. |
| 2730 | `        </div>` | Structural/semantic HTML element. |
| 2731 | `    </div>` | Structural/semantic HTML element. |
| 2732 | `` |  |
| 2733 | `    <!-- Hospital Towels Modal -->` | Structural/semantic HTML element. |
| 2734 | `    <div id="hospital-towels-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 2735 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 2736 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 2737 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 2738 | `                <h3 class="modal-title">Hospital Towels</h3>` | Modal/dialog structure for detail overlays. |
| 2739 | `                <p class="modal-subtitle">Clinical-grade absorbency with safety</p>` | Modal/dialog structure for detail overlays. |
| 2740 | `            </div>` | Structural/semantic HTML element. |
| 2741 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 2742 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 2743 | `                    <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=800&q=80" alt="Hospital Towels">` | Image element; ensure alt text for accessibility. |
| 2744 | `                </div>` | Structural/semantic HTML element. |
| 2745 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 2746 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2747 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 2748 | `                        <p>Medical-grade towels designed for healthcare environments with superior absorbency and infection control properties. Perfect for patient care while maintaining strict hygiene standards.</p>` | Paragraph text / supporting copy. |
| 2749 | `                    </div>` | Structural/semantic HTML element. |
| 2750 | `                    ` |  |
| 2751 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2752 | `                        <h4>Medical Features</h4>` | Structural/semantic HTML element. |
| 2753 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2754 | `                            <li>Anti-microbial and anti-viral treatment</li>` | Structural/semantic HTML element. |
| 2755 | `                            <li>High absorbency for clinical use</li>` | Structural/semantic HTML element. |
| 2756 | `                            <li>Reinforced hems for durability</li>` | Structural/semantic HTML element. |
| 2757 | `                            <li>Color-coded for different departments</li>` | Structural/semantic HTML element. |
| 2758 | `                            <li>Withstands repeated sterilization</li>` | Structural/semantic HTML element. |
| 2759 | `                        </ul>` | Structural/semantic HTML element. |
| 2760 | `                    </div>` | Structural/semantic HTML element. |
| 2761 | `                    ` |  |
| 2762 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2763 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 2764 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 2765 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2766 | `                                <div class="spec-label">Sizes</div>` | Structural/semantic HTML element. |
| 2767 | `                                <div class="spec-value">Bath, Hand, Face sizes</div>` | Structural/semantic HTML element. |
| 2768 | `                            </div>` | Structural/semantic HTML element. |
| 2769 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2770 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 2771 | `                                <div class="spec-value">100% Cotton with medical finish</div>` | Structural/semantic HTML element. |
| 2772 | `                            </div>` | Structural/semantic HTML element. |
| 2773 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2774 | `                                <div class="spec-label">Weight</div>` | Structural/semantic HTML element. |
| 2775 | `                                <div class="spec-value">500 GSM (Clinical Grade)</div>` | Structural/semantic HTML element. |
| 2776 | `                            </div>` | Structural/semantic HTML element. |
| 2777 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2778 | `                                <div class="spec-label">Weave</div>` | Structural/semantic HTML element. |
| 2779 | `                                <div class="spec-value">Terry & Waffle Options</div>` | Structural/semantic HTML element. |
| 2780 | `                            </div>` | Structural/semantic HTML element. |
| 2781 | `                        </div>` | Structural/semantic HTML element. |
| 2782 | `                    </div>` | Structural/semantic HTML element. |
| 2783 | `                    ` |  |
| 2784 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2785 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 2786 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2787 | `                            <li>Wash at 71°C for sterilization</li>` | Structural/semantic HTML element. |
| 2788 | `                            <li>Use hospital-approved detergents</li>` | Structural/semantic HTML element. |
| 2789 | `                            <li>Tumble dry medium heat</li>` | Structural/semantic HTML element. |
| 2790 | `                            <li>Do not use fabric softeners</li>` | Structural/semantic HTML element. |
| 2791 | `                            <li>Inspect regularly for wear</li>` | Structural/semantic HTML element. |
| 2792 | `                        </ul>` | Structural/semantic HTML element. |
| 2793 | `                    </div>` | Structural/semantic HTML element. |
| 2794 | `                </div>` | Structural/semantic HTML element. |
| 2795 | `            </div>` | Structural/semantic HTML element. |
| 2796 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 2797 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 2798 | `            </div>` | Structural/semantic HTML element. |
| 2799 | `        </div>` | Structural/semantic HTML element. |
| 2800 | `    </div>` | Structural/semantic HTML element. |
| 2801 | `` |  |
| 2802 | `    <!-- Hospital Bath Mat Modal -->` | Structural/semantic HTML element. |
| 2803 | `    <div id="hospital-bath-mat-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 2804 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 2805 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 2806 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 2807 | `                <h3 class="modal-title">Hospital Bath Mat</h3>` | Modal/dialog structure for detail overlays. |
| 2808 | `                <p class="modal-subtitle">Safety and comfort for clinical bathrooms</p>` | Modal/dialog structure for detail overlays. |
| 2809 | `            </div>` | Structural/semantic HTML element. |
| 2810 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 2811 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 2812 | `                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" alt="Hospital Bath Mat">` | Image element; ensure alt text for accessibility. |
| 2813 | `                </div>` | Structural/semantic HTML element. |
| 2814 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 2815 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2816 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 2817 | `                        <p>Medical-grade bath mats designed for healthcare facility bathrooms. Provides safety, comfort, and infection control with anti-slip properties and medical-grade finishes.</p>` | Paragraph text / supporting copy. |
| 2818 | `                    </div>` | Structural/semantic HTML element. |
| 2819 | `                    ` |  |
| 2820 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2821 | `                        <h4>Medical Features</h4>` | Structural/semantic HTML element. |
| 2822 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2823 | `                            <li>Anti-microbial and anti-fungal treatment</li>` | Structural/semantic HTML element. |
| 2824 | `                            <li>Non-slip backing for patient safety</li>` | Structural/semantic HTML element. |
| 2825 | `                            <li>Quick-drying for hygiene</li>` | Structural/semantic HTML element. |
| 2826 | `                            <li>Fluid-resistant properties</li>` | Structural/semantic HTML element. |
| 2827 | `                            <li>Withstands industrial laundering</li>` | Structural/semantic HTML element. |
| 2828 | `                        </ul>` | Structural/semantic HTML element. |
| 2829 | `                    </div>` | Structural/semantic HTML element. |
| 2830 | `                    ` |  |
| 2831 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2832 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 2833 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 2834 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2835 | `                                <div class="spec-label">Dimensions</div>` | Structural/semantic HTML element. |
| 2836 | `                                <div class="spec-value">Standard and Large sizes available</div>` | Structural/semantic HTML element. |
| 2837 | `                            </div>` | Structural/semantic HTML element. |
| 2838 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2839 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 2840 | `                                <div class="spec-value">100% Cotton with medical finish</div>` | Structural/semantic HTML element. |
| 2841 | `                            </div>` | Structural/semantic HTML element. |
| 2842 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2843 | `                                <div class="spec-label">Backing</div>` | Structural/semantic HTML element. |
| 2844 | `                                <div class="spec-value">Non-slip rubber backing</div>` | Structural/semantic HTML element. |
| 2845 | `                            </div>` | Structural/semantic HTML element. |
| 2846 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 2847 | `                                <div class="spec-label">Absorbency</div>` | Structural/semantic HTML element. |
| 2848 | `                                <div class="spec-value">High absorbency terry construction</div>` | Structural/semantic HTML element. |
| 2849 | `                            </div>` | Structural/semantic HTML element. |
| 2850 | `                        </div>` | Structural/semantic HTML element. |
| 2851 | `                    </div>` | Structural/semantic HTML element. |
| 2852 | `                    ` |  |
| 2853 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 2854 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 2855 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 2856 | `                            <li>Machine wash at 60°C</li>` | Structural/semantic HTML element. |
| 2857 | `                            <li>Use hospital-grade detergents</li>` | Structural/semantic HTML element. |
| 2858 | `                            <li>Air dry or tumble dry low</li>` | Structural/semantic HTML element. |
| 2859 | `                            <li>Do not use fabric softeners</li>` | Structural/semantic HTML element. |
| 2860 | `                            <li>Inspect regularly for wear</li>` | Structural/semantic HTML element. |
| 2861 | `                        </ul>` | Structural/semantic HTML element. |
| 2862 | `                    </div>` | Structural/semantic HTML element. |
| 2863 | `                </div>` | Structural/semantic HTML element. |
| 2864 | `            </div>` | Structural/semantic HTML element. |
| 2865 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 2866 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 2867 | `            </div>` | Structural/semantic HTML element. |
| 2868 | `        </div>` | Structural/semantic HTML element. |
| 2869 | `    </div>` | Structural/semantic HTML element. |
| 2870 | `` |  |
| 2871 | `    <!-- Hospital Uniform Categories Modal -->` | Structural/semantic HTML element. |
| 2872 | `    <div id="hospital-uniform-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 2873 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 2874 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 2875 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 2876 | `                <h3 class="modal-title">Medical Uniform Categories</h3>` | Modal/dialog structure for detail overlays. |
| 2877 | `                <p class="modal-subtitle">Professional healthcare attire with advanced protection</p>` | Modal/dialog structure for detail overlays. |
| 2878 | `            </div>` | Structural/semantic HTML element. |
| 2879 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 2880 | `                <div class="gallery-grid" style="grid-template-columns: 1fr; gap: 2rem;">` | Grid layout container for responsive card/gallery alignment. |
| 2881 | `                    <!-- Doctor's Coat -->` | Structural/semantic HTML element. |
| 2882 | `                    <div class="gallery-item">` | Structural/semantic HTML element. |
| 2883 | `                        <div class="gallery-image">` | Structural/semantic HTML element. |
| 2884 | `                            <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=600&q=80" alt="Doctor's Coat">` | Image element; ensure alt text for accessibility. |
| 2885 | `                        </div>` | Structural/semantic HTML element. |
| 2886 | `                        <div class="gallery-content">` | Structural/semantic HTML element. |
| 2887 | `                            <h3 class="gallery-title">Doctor's Lab Coat</h3>` | Structural/semantic HTML element. |
| 2888 | `                            <p class="gallery-description">Professional white lab coats with anti-microbial finish. Features multiple pockets and comfortable fit for long shifts.</p>` | Paragraph text / supporting copy. |
| 2889 | `                            <div class="gallery-features">` | Structural/semantic HTML element. |
| 2890 | `                                <span class="gallery-feature">Anti-Microbial</span>` | Structural/semantic HTML element. |
| 2891 | `                                <span class="gallery-feature">Multiple Pockets</span>` | Structural/semantic HTML element. |
| 2892 | `                                <span class="gallery-feature">Comfort Fit</span>` | Structural/semantic HTML element. |
| 2893 | `                            </div>` | Structural/semantic HTML element. |
| 2894 | `                            <div class="color-swatches">` | Structural/semantic HTML element. |
| 2895 | `                                <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 2896 | `                            </div>` | Structural/semantic HTML element. |
| 2897 | `                        </div>` | Structural/semantic HTML element. |
| 2898 | `                    </div>` | Structural/semantic HTML element. |
| 2899 | `` |  |
| 2900 | `                    <!-- Nurse Uniform -->` | Structural/semantic HTML element. |
| 2901 | `                    <div class="gallery-item">` | Structural/semantic HTML element. |
| 2902 | `                        <div class="gallery-image">` | Structural/semantic HTML element. |
| 2903 | `                            <img src="https://images.unsplash.com/photo-1584467735871-8db9ac8d55b9?auto=format&fit=crop&w=600&q=80" alt="Nurse Uniform">` | Image element; ensure alt text for accessibility. |
| 2904 | `                        </div>` | Structural/semantic HTML element. |
| 2905 | `                        <div class="gallery-content">` | Structural/semantic HTML element. |
| 2906 | `                            <h3 class="gallery-title">Nurse Scrubs</h3>` | Structural/semantic HTML element. |
| 2907 | `                            <p class="gallery-description">Comfortable and practical scrubs designed for mobility and durability during long nursing shifts.</p>` | Paragraph text / supporting copy. |
| 2908 | `                            <div class="gallery-features">` | Structural/semantic HTML element. |
| 2909 | `                                <span class="gallery-feature">Stretch Fabric</span>` | Structural/semantic HTML element. |
| 2910 | `                                <span class="gallery-feature">Multiple Pockets</span>` | Structural/semantic HTML element. |
| 2911 | `                                <span class="gallery-feature">Easy Care</span>` | Structural/semantic HTML element. |
| 2912 | `                            </div>` | Structural/semantic HTML element. |
| 2913 | `                            <div class="color-swatches">` | Structural/semantic HTML element. |
| 2914 | `                                <div class="color-swatch navy" title="Navy"></div>` | Structural/semantic HTML element. |
| 2915 | `                                <div class="color-swatch royalblue" title="Royal Blue"></div>` | Structural/semantic HTML element. |
| 2916 | `                                <div class="color-swatch teal" title="Teal"></div>` | Structural/semantic HTML element. |
| 2917 | `                            </div>` | Structural/semantic HTML element. |
| 2918 | `                        </div>` | Structural/semantic HTML element. |
| 2919 | `                    </div>` | Structural/semantic HTML element. |
| 2920 | `` |  |
| 2921 | `                    <!-- Surgical Scrubs -->` | Structural/semantic HTML element. |
| 2922 | `                    <div class="gallery-item">` | Structural/semantic HTML element. |
| 2923 | `                        <div class="gallery-image">` | Structural/semantic HTML element. |
| 2924 | `                            <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=600&q=80" alt="Surgical Scrubs">` | Image element; ensure alt text for accessibility. |
| 2925 | `                        </div>` | Structural/semantic HTML element. |
| 2926 | `                        <div class="gallery-content">` | Structural/semantic HTML element. |
| 2927 | `                            <h3 class="gallery-title">Surgical Scrubs</h3>` | Structural/semantic HTML element. |
| 2928 | `                            <p class="gallery-description">Sterile surgical attire with advanced anti-microbial properties for operating room environments.</p>` | Paragraph text / supporting copy. |
| 2929 | `                            <div class="gallery-features">` | Structural/semantic HTML element. |
| 2930 | `                                <span class="gallery-feature">Sterile Grade</span>` | Structural/semantic HTML element. |
| 2931 | `                                <span class="gallery-feature">Anti-Microbial</span>` | Structural/semantic HTML element. |
| 2932 | `                                <span class="gallery-feature">Comfortable</span>` | Structural/semantic HTML element. |
| 2933 | `                            </div>` | Structural/semantic HTML element. |
| 2934 | `                            <div class="color-swatches">` | Structural/semantic HTML element. |
| 2935 | `                                <div class="color-swatch green" title="Surgical Green"></div>` | Structural/semantic HTML element. |
| 2936 | `                                <div class="color-swatch blue" title="Surgical Blue"></div>` | Structural/semantic HTML element. |
| 2937 | `                            </div>` | Structural/semantic HTML element. |
| 2938 | `                        </div>` | Structural/semantic HTML element. |
| 2939 | `                    </div>` | Structural/semantic HTML element. |
| 2940 | `` |  |
| 2941 | `                    <!-- Hospital Staff Uniform -->` | Structural/semantic HTML element. |
| 2942 | `                    <div class="gallery-item">` | Structural/semantic HTML element. |
| 2943 | `                        <div class="gallery-image">` | Structural/semantic HTML element. |
| 2944 | `                            <img src="https://images.unsplash.com/photo-1584467735871-8db9ac8d55b9?auto=format&fit=crop&w=600&q=80" alt="Hospital Staff Uniform">` | Image element; ensure alt text for accessibility. |
| 2945 | `                        </div>` | Structural/semantic HTML element. |
| 2946 | `                        <div class="gallery-content">` | Structural/semantic HTML element. |
| 2947 | `                            <h3 class="gallery-title">Hospital Staff Uniform</h3>` | Structural/semantic HTML element. |
| 2948 | `                            <p class="gallery-description">Professional uniforms for administrative and support staff with hospital branding options.</p>` | Paragraph text / supporting copy. |
| 2949 | `                            <div class="gallery-features">` | Structural/semantic HTML element. |
| 2950 | `                                <span class="gallery-feature">Professional</span>` | Structural/semantic HTML element. |
| 2951 | `                                <span class="gallery-feature">Branded Options</span>` | Structural/semantic HTML element. |
| 2952 | `                                <span class="gallery-feature">Comfortable</span>` | Structural/semantic HTML element. |
| 2953 | `                            </div>` | Structural/semantic HTML element. |
| 2954 | `                            <div class="color-swatches">` | Structural/semantic HTML element. |
| 2955 | `                                <div class="color-swatch navy" title="Navy"></div>` | Structural/semantic HTML element. |
| 2956 | `                                <div class="color-swatch grey" title="Grey"></div>` | Structural/semantic HTML element. |
| 2957 | `                                <div class="color-swatch white" title="White"></div>` | Structural/semantic HTML element. |
| 2958 | `                            </div>` | Structural/semantic HTML element. |
| 2959 | `                        </div>` | Structural/semantic HTML element. |
| 2960 | `                    </div>` | Structural/semantic HTML element. |
| 2961 | `                </div>` | Structural/semantic HTML element. |
| 2962 | `                ` |  |
| 2963 | `                <div class="detail-section">` | Structural/semantic HTML element. |
| 2964 | `                    <h4>Uniform Specifications</h4>` | Structural/semantic HTML element. |
| 2965 | `                    <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 2966 | `                        <div class="spec-item">` | Structural/semantic HTML element. |
| 2967 | `                            <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 2968 | `                            <div class="spec-value">Premium cotton blend with anti-microbial finish</div>` | Structural/semantic HTML element. |
| 2969 | `                        </div>` | Structural/semantic HTML element. |
| 2970 | `                        <div class="spec-item">` | Structural/semantic HTML element. |
| 2971 | `                            <div class="spec-label">Sizes</div>` | Structural/semantic HTML element. |
| 2972 | `                            <div class="spec-value">XS to XXL</div>` | Structural/semantic HTML element. |
| 2973 | `                        </div>` | Structural/semantic HTML element. |
| 2974 | `                        <div class="spec-item">` | Structural/semantic HTML element. |
| 2975 | `                            <div class="spec-label">Special Features</div>` | Structural/semantic HTML element. |
| 2976 | `                            <div class="spec-value">Anti-microbial, Anti-viral, Wrinkle-resistant</div>` | Structural/semantic HTML element. |
| 2977 | `                        </div>` | Structural/semantic HTML element. |
| 2978 | `                    </div>` | Structural/semantic HTML element. |
| 2979 | `                </div>` | Structural/semantic HTML element. |
| 2980 | `                ` |  |
| 2981 | `                <div class="detail-section">` | Structural/semantic HTML element. |
| 2982 | `                    <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 2983 | `                    <ul class="detail-list">` | Structural/semantic HTML element. |
| 2984 | `                        <li>Machine wash warm with like colors</li>` | Structural/semantic HTML element. |
| 2985 | `                        <li>Tumble dry medium</li>` | Structural/semantic HTML element. |
| 2986 | `                        <li>Iron on medium heat if needed</li>` | Structural/semantic HTML element. |
| 2987 | `                        <li>Do not bleach</li>` | Structural/semantic HTML element. |
| 2988 | `                        <li>Maintains anti-microbial properties for up to 100 washes</li>` | Structural/semantic HTML element. |
| 2989 | `                    </ul>` | Structural/semantic HTML element. |
| 2990 | `                </div>` | Structural/semantic HTML element. |
| 2991 | `            </div>` | Structural/semantic HTML element. |
| 2992 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 2993 | `                <a href="/about#contact" class="btn btn-primary">Request Custom Uniform Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 2994 | `            </div>` | Structural/semantic HTML element. |
| 2995 | `        </div>` | Structural/semantic HTML element. |
| 2996 | `    </div>` | Structural/semantic HTML element. |
| 2997 | `` |  |
| 2998 | `    <!-- Spa Cotton Towels Modal -->` | Structural/semantic HTML element. |
| 2999 | `    <div id="spa-cotton-towels-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 3000 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 3001 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 3002 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 3003 | `                <h3 class="modal-title">Spa Cotton Terry Towels</h3>` | Modal/dialog structure for detail overlays. |
| 3004 | `                <p class="modal-subtitle">Luxurious absorbency for wellness experiences</p>` | Modal/dialog structure for detail overlays. |
| 3005 | `            </div>` | Structural/semantic HTML element. |
| 3006 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 3007 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 3008 | `                    <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=800&q=80" alt="Spa Cotton Towels">` | Image element; ensure alt text for accessibility. |
| 3009 | `                </div>` | Structural/semantic HTML element. |
| 3010 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 3011 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3012 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 3013 | `                        <p>Premium cotton terry towels designed specifically for spa environments. Extra-thick and incredibly soft, these towels provide the ultimate in comfort and absorbency for your clients' relaxation experience. The high GSM weight ensures maximum plushness and durability through repeated commercial laundering.</p>` | Paragraph text / supporting copy. |
| 3014 | `                    </div>` | Structural/semantic HTML element. |
| 3015 | `                    ` |  |
| 3016 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3017 | `                        <h4>Spa Features</h4>` | Structural/semantic HTML element. |
| 3018 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 3019 | `                            <li>Extra-thick terry for maximum absorbency</li>` | Structural/semantic HTML element. |
| 3020 | `                            <li>Gentle on sensitive skin</li>` | Structural/semantic HTML element. |
| 3021 | `                            <li>Maintains softness after repeated washing</li>` | Structural/semantic HTML element. |
| 3022 | `                            <li>Available in multiple spa-appropriate colors</li>` | Structural/semantic HTML element. |
| 3023 | `                            <li>Quick-drying for high turnover</li>` | Structural/semantic HTML element. |
| 3024 | `                        </ul>` | Structural/semantic HTML element. |
| 3025 | `                    </div>` | Structural/semantic HTML element. |
| 3026 | `                    ` |  |
| 3027 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3028 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 3029 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 3030 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3031 | `                                <div class="spec-label">Sizes</div>` | Structural/semantic HTML element. |
| 3032 | `                                <div class="spec-value">Bath, Hand, Face, and Spa Wrap</div>` | Structural/semantic HTML element. |
| 3033 | `                            </div>` | Structural/semantic HTML element. |
| 3034 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3035 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 3036 | `                                <div class="spec-value">100% Premium Egyptian Cotton</div>` | Structural/semantic HTML element. |
| 3037 | `                            </div>` | Structural/semantic HTML element. |
| 3038 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3039 | `                                <div class="spec-label">Weight</div>` | Structural/semantic HTML element. |
| 3040 | `                                <div class="spec-value">600 GSM (extra plush)</div>` | Structural/semantic HTML element. |
| 3041 | `                            </div>` | Structural/semantic HTML element. |
| 3042 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3043 | `                                <div class="spec-label">Absorbency</div>` | Structural/semantic HTML element. |
| 3044 | `                                <div class="spec-value">8x own weight in water</div>` | Structural/semantic HTML element. |
| 3045 | `                            </div>` | Structural/semantic HTML element. |
| 3046 | `                        </div>` | Structural/semantic HTML element. |
| 3047 | `                    </div>` | Structural/semantic HTML element. |
| 3048 | `                    ` |  |
| 3049 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3050 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 3051 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 3052 | `                            <li>Wash at 40°C with mild detergent</li>` | Structural/semantic HTML element. |
| 3053 | `                            <li>Use fabric softener for extra softness</li>` | Structural/semantic HTML element. |
| 3054 | `                            <li>Tumble dry on low heat</li>` | Structural/semantic HTML element. |
| 3055 | `                            <li>Iron on medium if needed</li>` | Structural/semantic HTML element. |
| 3056 | `                            <li>Store in dry, well-ventilated area</li>` | Structural/semantic HTML element. |
| 3057 | `                        </ul>` | Structural/semantic HTML element. |
| 3058 | `                    </div>` | Structural/semantic HTML element. |
| 3059 | `                </div>` | Structural/semantic HTML element. |
| 3060 | `            </div>` | Structural/semantic HTML element. |
| 3061 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 3062 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 3063 | `            </div>` | Structural/semantic HTML element. |
| 3064 | `        </div>` | Structural/semantic HTML element. |
| 3065 | `    </div>` | Structural/semantic HTML element. |
| 3066 | `` |  |
| 3067 | `    <!-- Spa Bamboo Towels Modal -->` | Structural/semantic HTML element. |
| 3068 | `    <div id="spa-bamboo-towels-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 3069 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 3070 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 3071 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 3072 | `                <h3 class="modal-title">Spa Bamboo Waffle Towels</h3>` | Modal/dialog structure for detail overlays. |
| 3073 | `                <p class="modal-subtitle">Eco-friendly luxury for premium spa experiences</p>` | Modal/dialog structure for detail overlays. |
| 3074 | `            </div>` | Structural/semantic HTML element. |
| 3075 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 3076 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 3077 | `                    <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80" alt="Spa Bamboo Towels">` | Image element; ensure alt text for accessibility. |
| 3078 | `                </div>` | Structural/semantic HTML element. |
| 3079 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 3080 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3081 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 3082 | `                        <p>Premium bamboo waffle towels offering exceptional softness and sustainability. The unique waffle weave provides superior absorbency while remaining lightweight and quick-drying. Perfect for luxury spa treatments and environmentally conscious establishments.</p>` | Paragraph text / supporting copy. |
| 3083 | `                    </div>` | Structural/semantic HTML element. |
| 3084 | `                    ` |  |
| 3085 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3086 | `                        <h4>Spa Features</h4>` | Structural/semantic HTML element. |
| 3087 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 3088 | `                            <li>Naturally anti-bacterial and odor-resistant</li>` | Structural/semantic HTML element. |
| 3089 | `                            <li>Hypoallergenic and gentle on sensitive skin</li>` | Structural/semantic HTML element. |
| 3090 | `                            <li>Superior moisture-wicking properties</li>` | Structural/semantic HTML element. |
| 3091 | `                            <li>Eco-friendly and sustainable material</li>` | Structural/semantic HTML element. |
| 3092 | `                            <li>Lightweight yet highly absorbent</li>` | Structural/semantic HTML element. |
| 3093 | `                        </ul>` | Structural/semantic HTML element. |
| 3094 | `                    </div>` | Structural/semantic HTML element. |
| 3095 | `                    ` |  |
| 3096 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3097 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 3098 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 3099 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3100 | `                                <div class="spec-label">Sizes</div>` | Structural/semantic HTML element. |
| 3101 | `                                <div class="spec-value">Bath, Hand, Face, and Treatment sizes</div>` | Structural/semantic HTML element. |
| 3102 | `                            </div>` | Structural/semantic HTML element. |
| 3103 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3104 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 3105 | `                                <div class="spec-value">100% Bamboo Viscose</div>` | Structural/semantic HTML element. |
| 3106 | `                            </div>` | Structural/semantic HTML element. |
| 3107 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3108 | `                                <div class="spec-label">Weave</div>` | Structural/semantic HTML element. |
| 3109 | `                                <div class="spec-value">Waffle weave for optimal absorbency</div>` | Structural/semantic HTML element. |
| 3110 | `                            </div>` | Structural/semantic HTML element. |
| 3111 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3112 | `                                <div class="spec-label">Sustainability</div>` | Structural/semantic HTML element. |
| 3113 | `                                <div class="spec-value">Renewable resource, biodegradable</div>` | Structural/semantic HTML element. |
| 3114 | `                            </div>` | Structural/semantic HTML element. |
| 3115 | `                        </div>` | Structural/semantic HTML element. |
| 3116 | `                    </div>` | Structural/semantic HTML element. |
| 3117 | `                    ` |  |
| 3118 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3119 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 3120 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 3121 | `                            <li>Machine wash cold with mild detergent</li>` | Structural/semantic HTML element. |
| 3122 | `                            <li>Line dry or tumble dry low</li>` | Structural/semantic HTML element. |
| 3123 | `                            <li>Do not use bleach or fabric softener</li>` | Structural/semantic HTML element. |
| 3124 | `                            <li>Iron on low heat if needed</li>` | Structural/semantic HTML element. |
| 3125 | `                            <li>Store in dry conditions</li>` | Structural/semantic HTML element. |
| 3126 | `                        </ul>` | Structural/semantic HTML element. |
| 3127 | `                    </div>` | Structural/semantic HTML element. |
| 3128 | `                </div>` | Structural/semantic HTML element. |
| 3129 | `            </div>` | Structural/semantic HTML element. |
| 3130 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 3131 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 3132 | `            </div>` | Structural/semantic HTML element. |
| 3133 | `        </div>` | Structural/semantic HTML element. |
| 3134 | `    </div>` | Structural/semantic HTML element. |
| 3135 | `` |  |
| 3136 | `    <!-- Salon Cotton Towels Modal -->` | Structural/semantic HTML element. |
| 3137 | `    <div id="salon-cotton-towels-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 3138 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 3139 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 3140 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 3141 | `                <h3 class="modal-title">Salon Cotton Terry Towels</h3>` | Modal/dialog structure for detail overlays. |
| 3142 | `                <p class="modal-subtitle">Professional-grade towels for busy salons</p>` | Modal/dialog structure for detail overlays. |
| 3143 | `            </div>` | Structural/semantic HTML element. |
| 3144 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 3145 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 3146 | `                    <img src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=800&q=80" alt="Salon Cotton Towels">` | Image element; ensure alt text for accessibility. |
| 3147 | `                </div>` | Structural/semantic HTML element. |
| 3148 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 3149 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3150 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 3151 | `                        <p>Designed specifically for professional salon use, these cotton terry towels are bleach-safe and colorfast. Reinforced hems ensure durability through frequent washing, while maintaining the softness your clients expect. The medium weight provides the perfect balance of absorbency and quick drying for high-volume environments.</p>` | Paragraph text / supporting copy. |
| 3152 | `                    </div>` | Structural/semantic HTML element. |
| 3153 | `                    ` |  |
| 3154 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3155 | `                        <h4>Salon Features</h4>` | Structural/semantic HTML element. |
| 3156 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 3157 | `                            <li>Bleach-safe for sanitation</li>` | Structural/semantic HTML element. |
| 3158 | `                            <li>Colorfast to prevent dye transfer</li>` | Structural/semantic HTML element. |
| 3159 | `                            <li>Reinforced hems for durability</li>` | Structural/semantic HTML element. |
| 3160 | `                            <li>Quick-drying for high turnover</li>` | Structural/semantic HTML element. |
| 3161 | `                            <li>Medium weight for optimal performance</li>` | Structural/semantic HTML element. |
| 3162 | `                        </ul>` | Structural/semantic HTML element. |
| 3163 | `                    </div>` | Structural/semantic HTML element. |
| 3164 | `                    ` |  |
| 3165 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3166 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 3167 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 3168 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3169 | `                                <div class="spec-label">Sizes</div>` | Structural/semantic HTML element. |
| 3170 | `                                <div class="spec-value">Salon Cape, Neck Strip, and Processing Towels</div>` | Structural/semantic HTML element. |
| 3171 | `                            </div>` | Structural/semantic HTML element. |
| 3172 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3173 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 3174 | `                                <div class="spec-value">100% Cotton Terry</div>` | Structural/semantic HTML element. |
| 3175 | `                            </div>` | Structural/semantic HTML element. |
| 3176 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3177 | `                                <div class="spec-label">Weight</div>` | Structural/semantic HTML element. |
| 3178 | `                                <div class="spec-value">450 GSM (professional grade)</div>` | Structural/semantic HTML element. |
| 3179 | `                            </div>` | Structural/semantic HTML element. |
| 3180 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3181 | `                                <div class="spec-label">Bleach Resistance</div>` | Structural/semantic HTML element. |
| 3182 | `                                <div class="spec-value">Withstands up to 200 bleach cycles</div>` | Structural/semantic HTML element. |
| 3183 | `                            </div>` | Structural/semantic HTML element. |
| 3184 | `                        </div>` | Structural/semantic HTML element. |
| 3185 | `                    </div>` | Structural/semantic HTML element. |
| 3186 | `                    ` |  |
| 3187 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3188 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 3189 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 3190 | `                            <li>Wash at 60°C with bleach for sanitation</li>` | Structural/semantic HTML element. |
| 3191 | `                            <li>Tumble dry on high heat</li>` | Structural/semantic HTML element. |
| 3192 | `                            <li>Can be ironed if needed</li>` | Structural/semantic HTML element. |
| 3193 | `                            <li>Store in dry, well-ventilated area</li>` | Structural/semantic HTML element. |
| 3194 | `                            <li>Replace when showing signs of wear</li>` | Structural/semantic HTML element. |
| 3195 | `                        </ul>` | Structural/semantic HTML element. |
| 3196 | `                    </div>` | Structural/semantic HTML element. |
| 3197 | `                </div>` | Structural/semantic HTML element. |
| 3198 | `            </div>` | Structural/semantic HTML element. |
| 3199 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 3200 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 3201 | `            </div>` | Structural/semantic HTML element. |
| 3202 | `        </div>` | Structural/semantic HTML element. |
| 3203 | `    </div>` | Structural/semantic HTML element. |
| 3204 | `` |  |
| 3205 | `    <!-- Salon Bamboo Towels Modal -->` | Structural/semantic HTML element. |
| 3206 | `    <div id="salon-bamboo-towels-modal" class="modal">` | Modal/dialog structure for detail overlays. |
| 3207 | `        <div class="modal-content">` | Modal/dialog structure for detail overlays. |
| 3208 | `            <button class="modal-close">&times;</button>` | Modal/dialog structure for detail overlays. |
| 3209 | `            <div class="modal-header">` | Modal/dialog structure for detail overlays. |
| 3210 | `                <h3 class="modal-title">Salon Bamboo Waffle Towels</h3>` | Modal/dialog structure for detail overlays. |
| 3211 | `                <p class="modal-subtitle">Eco-friendly performance for modern salons</p>` | Modal/dialog structure for detail overlays. |
| 3212 | `            </div>` | Structural/semantic HTML element. |
| 3213 | `            <div class="modal-body">` | Modal/dialog structure for detail overlays. |
| 3214 | `                <div class="modal-image">` | Modal/dialog structure for detail overlays. |
| 3215 | `                    <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80" alt="Salon Bamboo Towels">` | Image element; ensure alt text for accessibility. |
| 3216 | `                </div>` | Structural/semantic HTML element. |
| 3217 | `                <div class="modal-details">` | Modal/dialog structure for detail overlays. |
| 3218 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3219 | `                        <h4>Description</h4>` | Structural/semantic HTML element. |
| 3220 | `                        <p>Premium bamboo waffle towels designed for the demands of professional salon environments. Offering superior softness, excellent color retention, and eco-friendly credentials, these towels provide the perfect balance of performance and sustainability for modern salons.</p>` | Paragraph text / supporting copy. |
| 3221 | `                    </div>` | Structural/semantic HTML element. |
| 3222 | `                    ` |  |
| 3223 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3224 | `                        <h4>Salon Features</h4>` | Structural/semantic HTML element. |
| 3225 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 3226 | `                            <li>Naturally anti-bacterial and odor-resistant</li>` | Structural/semantic HTML element. |
| 3227 | `                            <li>Excellent color retention</li>` | Structural/semantic HTML element. |
| 3228 | `                            <li>Quick-drying for high turnover</li>` | Structural/semantic HTML element. |
| 3229 | `                            <li>Gentle on client's skin and hair</li>` | Structural/semantic HTML element. |
| 3230 | `                            <li>Sustainable and eco-friendly</li>` | Structural/semantic HTML element. |
| 3231 | `                        </ul>` | Structural/semantic HTML element. |
| 3232 | `                    </div>` | Structural/semantic HTML element. |
| 3233 | `                    ` |  |
| 3234 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3235 | `                        <h4>Specifications</h4>` | Structural/semantic HTML element. |
| 3236 | `                        <div class="spec-grid">` | Grid layout container for responsive card/gallery alignment. |
| 3237 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3238 | `                                <div class="spec-label">Sizes</div>` | Structural/semantic HTML element. |
| 3239 | `                                <div class="spec-value">Salon Cape, Processing, and Styling Towels</div>` | Structural/semantic HTML element. |
| 3240 | `                            </div>` | Structural/semantic HTML element. |
| 3241 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3242 | `                                <div class="spec-label">Material</div>` | Structural/semantic HTML element. |
| 3243 | `                                <div class="spec-value">100% Bamboo Viscose</div>` | Structural/semantic HTML element. |
| 3244 | `                            </div>` | Structural/semantic HTML element. |
| 3245 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3246 | `                                <div class="spec-label">Weave</div>` | Structural/semantic HTML element. |
| 3247 | `                                <div class="spec-value">Waffle weave for optimal performance</div>` | Structural/semantic HTML element. |
| 3248 | `                            </div>` | Structural/semantic HTML element. |
| 3249 | `                            <div class="spec-item">` | Structural/semantic HTML element. |
| 3250 | `                                <div class="spec-label">Color Options</div>` | Structural/semantic HTML element. |
| 3251 | `                                <div class="spec-value">Natural white only for bleach safety</div>` | Structural/semantic HTML element. |
| 3252 | `                            </div>` | Structural/semantic HTML element. |
| 3253 | `                        </div>` | Structural/semantic HTML element. |
| 3254 | `                    </div>` | Structural/semantic HTML element. |
| 3255 | `                    ` |  |
| 3256 | `                    <div class="detail-section">` | Structural/semantic HTML element. |
| 3257 | `                        <h4>Care Instructions</h4>` | Structural/semantic HTML element. |
| 3258 | `                        <ul class="detail-list">` | Structural/semantic HTML element. |
| 3259 | `                            <li>Wash at 40°C with mild detergent</li>` | Structural/semantic HTML element. |
| 3260 | `                            <li>Can be bleached for sanitation</li>` | Structural/semantic HTML element. |
| 3261 | `                            <li>Tumble dry low or line dry</li>` | Structural/semantic HTML element. |
| 3262 | `                            <li>Do not use fabric softener</li>` | Structural/semantic HTML element. |
| 3263 | `                            <li>Iron on low heat if needed</li>` | Structural/semantic HTML element. |
| 3264 | `                        </ul>` | Structural/semantic HTML element. |
| 3265 | `                    </div>` | Structural/semantic HTML element. |
| 3266 | `                </div>` | Structural/semantic HTML element. |
| 3267 | `            </div>` | Structural/semantic HTML element. |
| 3268 | `            <div class="modal-footer">` | Modal/dialog structure for detail overlays. |
| 3269 | `                <a href="/about#contact" class="btn btn-primary">Request Quote</a>` | Button/CTA element styled as a pill with golden border. |
| 3270 | `            </div>` | Structural/semantic HTML element. |
| 3271 | `        </div>` | Structural/semantic HTML element. |
| 3272 | `    </div>` | Structural/semantic HTML element. |
| 3273 | `` |  |
| 3274 | `    <script>` | Inline script starts; behaviors/handlers live here. |
| 3275 | `        // Enhanced scroll animations` | Motion/animation for subtle, premium interactions. |
| 3276 | `        document.addEventListener('DOMContentLoaded', function() {` | CSS selector block begins. |
| 3277 | `            const fadeElements = document.querySelectorAll('.fade-in');` | Content/whitespace or standard markup. |
| 3278 | `            ` |  |
| 3279 | `            const fadeObserver = new IntersectionObserver((entries) => {` | CSS selector block begins. |
| 3280 | `                entries.forEach(entry => {` | CSS selector block begins. |
| 3281 | `                    if (entry.isIntersecting) {` | CSS selector block begins. |
| 3282 | `                        entry.target.classList.add('visible');` | Content/whitespace or standard markup. |
| 3283 | `                    }` | CSS selector block ends. |
| 3284 | `                });` | Content/whitespace or standard markup. |
| 3285 | `            }, { ` | CSS selector block begins. |
| 3286 | `                threshold: 0.1,` | Content/whitespace or standard markup. |
| 3287 | `                rootMargin: '0px 0px -50px 0px'` | Content/whitespace or standard markup. |
| 3288 | `            });` | Content/whitespace or standard markup. |
| 3289 | `            ` |  |
| 3290 | `            fadeElements.forEach(element => {` | CSS selector block begins. |
| 3291 | `                fadeObserver.observe(element);` | Content/whitespace or standard markup. |
| 3292 | `            });` | Content/whitespace or standard markup. |
| 3293 | `            ` |  |
| 3294 | `            // Enhanced mobile menu toggle` | Content/whitespace or standard markup. |
| 3295 | `            const mobileToggle = document.querySelector('.mobile-toggle');` | Content/whitespace or standard markup. |
| 3296 | `            const mobileNav = document.querySelector('nav.mobile');` | Content/whitespace or standard markup. |
| 3297 | `            ` |  |
| 3298 | `            mobileToggle.addEventListener('click', function() {` | CSS selector block begins. |
| 3299 | `                const isActive = mobileNav.classList.contains('active');` | Content/whitespace or standard markup. |
| 3300 | `                ` |  |
| 3301 | `                if (isActive) {` | CSS selector block begins. |
| 3302 | `                    mobileNav.classList.remove('active');` | Content/whitespace or standard markup. |
| 3303 | `                    this.innerHTML = '☰';` | Content/whitespace or standard markup. |
| 3304 | `                } else {` | CSS selector block begins. |
| 3305 | `                    mobileNav.classList.add('active');` | Content/whitespace or standard markup. |
| 3306 | `                    this.innerHTML = '✕';` | Content/whitespace or standard markup. |
| 3307 | `                }` | CSS selector block ends. |
| 3308 | `            });` | Content/whitespace or standard markup. |
| 3309 | `            ` |  |
| 3310 | `            // Close mobile menu when clicking on links` | Content/whitespace or standard markup. |
| 3311 | `            const mobileLinks = document.querySelectorAll('nav.mobile a');` | Content/whitespace or standard markup. |
| 3312 | `            mobileLinks.forEach(link => {` | CSS selector block begins. |
| 3313 | `                link.addEventListener('click', function() {` | CSS selector block begins. |
| 3314 | `                    mobileNav.classList.remove('active');` | Content/whitespace or standard markup. |
| 3315 | `                    mobileToggle.innerHTML = '☰';` | Content/whitespace or standard markup. |
| 3316 | `                });` | Content/whitespace or standard markup. |
| 3317 | `            });` | Content/whitespace or standard markup. |
| 3318 | `            ` |  |
| 3319 | `            // FIXED: Category navigation with proper scroll detection` | Content/whitespace or standard markup. |
| 3320 | `            const categoryLinks = document.querySelectorAll('.category-link');` | Content/whitespace or standard markup. |
| 3321 | `            const categorySections = document.querySelectorAll('.category-section');` | Content/whitespace or standard markup. |
| 3322 | `            ` |  |
| 3323 | `            // Update active category on scroll - IMPROVED LOGIC` | Content/whitespace or standard markup. |
| 3324 | `            const updateActiveCategory = () => {` | CSS selector block begins. |
| 3325 | `                let currentSection = null;` | Content/whitespace or standard markup. |
| 3326 | `                const scrollPosition = window.scrollY + 150; // Offset for header and nav` | Content/whitespace or standard markup. |
| 3327 | `                ` |  |
| 3328 | `                categorySections.forEach(section => {` | CSS selector block begins. |
| 3329 | `                    const sectionTop = section.offsetTop;` | Content/whitespace or standard markup. |
| 3330 | `                    const sectionHeight = section.offsetHeight;` | Content/whitespace or standard markup. |
| 3331 | `                    ` |  |
| 3332 | `                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {` | CSS selector block begins. |
| 3333 | `                        currentSection = section;` | Content/whitespace or standard markup. |
| 3334 | `                    }` | CSS selector block ends. |
| 3335 | `                });` | Content/whitespace or standard markup. |
| 3336 | `                ` |  |
| 3337 | `                if (currentSection) {` | CSS selector block begins. |
| 3338 | `                    const currentId = currentSection.id;` | Content/whitespace or standard markup. |
| 3339 | `                    categoryLinks.forEach(link => {` | CSS selector block begins. |
| 3340 | `                        const href = link.getAttribute('href').substring(1); // Remove #` | Content/whitespace or standard markup. |
| 3341 | `                        link.classList.toggle('active', href === currentId);` | Content/whitespace or standard markup. |
| 3342 | `                    });` | Content/whitespace or standard markup. |
| 3343 | `                }` | CSS selector block ends. |
| 3344 | `            };` | Content/whitespace or standard markup. |
| 3345 | `            ` |  |
| 3346 | `            // Initial call and scroll event listener` | Content/whitespace or standard markup. |
| 3347 | `            updateActiveCategory();` | Content/whitespace or standard markup. |
| 3348 | `            window.addEventListener('scroll', updateActiveCategory);` | Content/whitespace or standard markup. |
| 3349 | `            ` |  |
| 3350 | `            // Smooth scroll for category links` | Content/whitespace or standard markup. |
| 3351 | `            categoryLinks.forEach(link => {` | CSS selector block begins. |
| 3352 | `                link.addEventListener('click', function(e) {` | CSS selector block begins. |
| 3353 | `                    e.preventDefault();` | Content/whitespace or standard markup. |
| 3354 | `                    const targetId = this.getAttribute('href');` | Content/whitespace or standard markup. |
| 3355 | `                    const targetSection = document.querySelector(targetId);` | Content/whitespace or standard markup. |
| 3356 | `                    ` |  |
| 3357 | `                    if (targetSection) {` | CSS selector block begins. |
| 3358 | `                        const offsetTop = targetSection.offsetTop - 120;` | Content/whitespace or standard markup. |
| 3359 | `                        window.scrollTo({` | CSS selector block begins. |
| 3360 | `                            top: offsetTop,` | Content/whitespace or standard markup. |
| 3361 | `                            behavior: 'smooth'` | Content/whitespace or standard markup. |
| 3362 | `                        });` | Content/whitespace or standard markup. |
| 3363 | `                        ` |  |
| 3364 | `                        // Update active state immediately` | Content/whitespace or standard markup. |
| 3365 | `                        categoryLinks.forEach(l => l.classList.remove('active'));` | Content/whitespace or standard markup. |
| 3366 | `                        this.classList.add('active');` | Content/whitespace or standard markup. |
| 3367 | `                    }` | CSS selector block ends. |
| 3368 | `                });` | Content/whitespace or standard markup. |
| 3369 | `            });` | Content/whitespace or standard markup. |
| 3370 | `            ` |  |
| 3371 | `            // Enhanced header scroll effect` | Content/whitespace or standard markup. |
| 3372 | `            let lastScrollY = window.scrollY;` | Content/whitespace or standard markup. |
| 3373 | `            const header = document.querySelector('header');` | Content/whitespace or standard markup. |
| 3374 | `            ` |  |
| 3375 | `            window.addEventListener('scroll', function() {` | CSS selector block begins. |
| 3376 | `                if (window.scrollY > 100) {` | CSS selector block begins. |
| 3377 | `                    header.style.background = 'rgba(253, 252, 248, 0.98)';` | Content/whitespace or standard markup. |
| 3378 | `                    header.style.padding = '0.5rem 0';` | Content/whitespace or standard markup. |
| 3379 | `                    ` |  |
| 3380 | `                    if (window.scrollY > lastScrollY) {` | CSS selector block begins. |
| 3381 | `                        header.style.transform = 'translateY(-100%)';` | Content/whitespace or standard markup. |
| 3382 | `                    } else {` | CSS selector block begins. |
| 3383 | `                        header.style.transform = 'translateY(0)';` | Content/whitespace or standard markup. |
| 3384 | `                    }` | CSS selector block ends. |
| 3385 | `                } else {` | CSS selector block begins. |
| 3386 | `                    header.style.background = 'rgba(253, 252, 248, 0.95)';` | Content/whitespace or standard markup. |
| 3387 | `                    header.style.padding = '0';` | Content/whitespace or standard markup. |
| 3388 | `                    header.style.transform = 'translateY(0)';` | Content/whitespace or standard markup. |
| 3389 | `                }` | CSS selector block ends. |
| 3390 | `                ` |  |
| 3391 | `                lastScrollY = window.scrollY;` | Content/whitespace or standard markup. |
| 3392 | `            });` | Content/whitespace or standard markup. |
| 3393 | `            ` |  |
| 3394 | `            // FIXED: Gallery Modal Functionality for ALL sections` | Content/whitespace or standard markup. |
| 3395 | `            const galleryButtons = document.querySelectorAll('.gallery-btn');` | Button/CTA element styled as a pill with golden border. |
| 3396 | `            const modals = document.querySelectorAll('.modal');` | Modal/dialog structure for detail overlays. |
| 3397 | `            const closeButtons = document.querySelectorAll('.modal-close');` | Modal/dialog structure for detail overlays. |
| 3398 | `            ` |  |
| 3399 | `            // FIX: Only open modal when the button is clicked, not the entire gallery item` | Modal/dialog structure for detail overlays. |
| 3400 | `            galleryButtons.forEach(button => {` | Button/CTA element styled as a pill with golden border. |
| 3401 | `                button.addEventListener('click', function(e) {` | Button/CTA element styled as a pill with golden border. |
| 3402 | `                    e.stopPropagation(); // Prevent event from bubbling to parent` | Content/whitespace or standard markup. |
| 3403 | `                    ` |  |
| 3404 | `                    const galleryItem = this.closest('.gallery-item');` | Content/whitespace or standard markup. |
| 3405 | `                    const productType = galleryItem.getAttribute('data-product');` | Content/whitespace or standard markup. |
| 3406 | `                    const modal = document.getElementById(`${productType}-modal`);` | Modal/dialog structure for detail overlays. |
| 3407 | `                    ` |  |
| 3408 | `                    if (modal) {` | Modal/dialog structure for detail overlays. |
| 3409 | `                        modal.style.display = 'block';` | Modal/dialog structure for detail overlays. |
| 3410 | `                        document.body.style.overflow = 'hidden';` | Content/whitespace or standard markup. |
| 3411 | `                    } else {` | CSS selector block begins. |
| 3412 | `                        console.log(`Modal for ${productType} not found`);` | Content/whitespace or standard markup. |
| 3413 | `                        // Fallback: Show a simple alert for products without modals` | Modal/dialog structure for detail overlays. |
| 3414 | `                        alert(`Details for ${productType} coming soon! Contact us for more information.`);` | Content/whitespace or standard markup. |
| 3415 | `                    }` | CSS selector block ends. |
| 3416 | `                });` | Content/whitespace or standard markup. |
| 3417 | `            });` | Content/whitespace or standard markup. |
| 3418 | `            ` |  |
| 3419 | `            // FIX: Add touch event listeners for better mobile support` | Content/whitespace or standard markup. |
| 3420 | `            galleryButtons.forEach(button => {` | Button/CTA element styled as a pill with golden border. |
| 3421 | `                button.addEventListener('touchstart', function(e) {` | Button/CTA element styled as a pill with golden border. |
| 3422 | `                    // Add visual feedback for touch` | Content/whitespace or standard markup. |
| 3423 | `                    this.style.transform = 'scale(0.95)';` | Content/whitespace or standard markup. |
| 3424 | `                });` | Content/whitespace or standard markup. |
| 3425 | `                ` |  |
| 3426 | `                button.addEventListener('touchend', function(e) {` | Button/CTA element styled as a pill with golden border. |
| 3427 | `                    // Remove visual feedback` | Content/whitespace or standard markup. |
| 3428 | `                    this.style.transform = '';` | Content/whitespace or standard markup. |
| 3429 | `                });` | Content/whitespace or standard markup. |
| 3430 | `            });` | Content/whitespace or standard markup. |
| 3431 | `            ` |  |
| 3432 | `            // Close modal when close button is clicked` | Modal/dialog structure for detail overlays. |
| 3433 | `            closeButtons.forEach(button => {` | Button/CTA element styled as a pill with golden border. |
| 3434 | `                button.addEventListener('click', function() {` | Button/CTA element styled as a pill with golden border. |
| 3435 | `                    const modal = this.closest('.modal');` | Modal/dialog structure for detail overlays. |
| 3436 | `                    modal.style.display = 'none';` | Modal/dialog structure for detail overlays. |
| 3437 | `                    document.body.style.overflow = 'auto';` | Content/whitespace or standard markup. |
| 3438 | `                });` | Content/whitespace or standard markup. |
| 3439 | `            });` | Content/whitespace or standard markup. |
| 3440 | `            ` |  |
| 3441 | `            // Close modal when clicking outside the modal content` | Modal/dialog structure for detail overlays. |
| 3442 | `            modals.forEach(modal => {` | Modal/dialog structure for detail overlays. |
| 3443 | `                modal.addEventListener('click', function(e) {` | Modal/dialog structure for detail overlays. |
| 3444 | `                    if (e.target === this) {` | CSS selector block begins. |
| 3445 | `                        this.style.display = 'none';` | Content/whitespace or standard markup. |
| 3446 | `                        document.body.style.overflow = 'auto';` | Content/whitespace or standard markup. |
| 3447 | `                    }` | CSS selector block ends. |
| 3448 | `                });` | Content/whitespace or standard markup. |
| 3449 | `            });` | Content/whitespace or standard markup. |
| 3450 | `            ` |  |
| 3451 | `            // Close modal with Escape key` | Modal/dialog structure for detail overlays. |
| 3452 | `            document.addEventListener('keydown', function(e) {` | CSS selector block begins. |
| 3453 | `                if (e.key === 'Escape') {` | CSS selector block begins. |
| 3454 | `                    modals.forEach(modal => {` | Modal/dialog structure for detail overlays. |
| 3455 | `                        if (modal.style.display === 'block') {` | Modal/dialog structure for detail overlays. |
| 3456 | `                            modal.style.display = 'none';` | Modal/dialog structure for detail overlays. |
| 3457 | `                            document.body.style.overflow = 'auto';` | Content/whitespace or standard markup. |
| 3458 | `                        }` | CSS selector block ends. |
| 3459 | `                    });` | Content/whitespace or standard markup. |
| 3460 | `                }` | CSS selector block ends. |
| 3461 | `            });` | Content/whitespace or standard markup. |
| 3462 | `            ` |  |
| 3463 | `            // FIX: Prevent default behavior for touch events on gallery items` | Content/whitespace or standard markup. |
| 3464 | `            const galleryItems = document.querySelectorAll('.gallery-item');` | Content/whitespace or standard markup. |
| 3465 | `            galleryItems.forEach(item => {` | CSS selector block begins. |
| 3466 | `                item.addEventListener('touchstart', function(e) {` | CSS selector block begins. |
| 3467 | `                    // Prevent default to avoid any unwanted behaviors` | Content/whitespace or standard markup. |
| 3468 | `                    if (e.target.classList.contains('gallery-btn')) {` | Button/CTA element styled as a pill with golden border. |
| 3469 | `                        return; // Let the button handle its own events` | Button/CTA element styled as a pill with golden border. |
| 3470 | `                    }` | CSS selector block ends. |
| 3471 | `                    e.preventDefault();` | Content/whitespace or standard markup. |
| 3472 | `                });` | Content/whitespace or standard markup. |
| 3473 | `            });` | Content/whitespace or standard markup. |
| 3474 | `        });` | Content/whitespace or standard markup. |
| 3475 | `    </script>` | Inline script ends. |
| 3476 | `</body>` | Document body ends. |
| 3477 | `</html>` | Structural/semantic HTML element. |

---

## About.html

<details><summary><strong>Show original source</strong></summary>

```html
<!DOCTYPE html>
<html lang="en">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About & Contact | Secret Linen - Heritage & Legacy</title>
    <meta name="description" content="Discover Secret Linen's heritage and connect with us. 50+ years of luxury textile craftsmanship.">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    
    <style>
        :root {
            /* Enhanced Color Palette */
            --ivory: #fdfcf8;
            --linen: #f5f1e8;
            --stone: #e8e2d6;
            --clay: #d8cdbc;
            --charcoal: #1a1a1a;
            --bronze: #a8926e;
            --bronze-light: #c4b59a;
            --sage: #a8b8a5;
            
            /* Typography */
            --serif: 'Playfair Display', serif;
            --sans: 'Inter', sans-serif;
            
            /* Spacing */
            --section-padding: clamp(80px, 10vw, 160px);
            --container-width: min(1400px, 94%);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html {
            scroll-behavior: smooth;
        }
        
        body {
            font-family: var(--sans);
            color: var(--charcoal);
            background-color: var(--ivory);
            line-height: 1.7;
            overflow-x: hidden;
            font-weight: 300;
        }
        
        h1, h2, h3, h4 {
            font-family: var(--serif);
            font-weight: 400;
            line-height: 1.1;
            letter-spacing: -0.02em;
        }
        
        h1 {
            font-size: clamp(3rem, 6vw, 5rem);
            font-weight: 300;
        }
        
        h2 {
            font-size: clamp(2.25rem, 4.5vw, 3.5rem);
        }
        
        h3 {
            font-size: clamp(1.5rem, 3vw, 2.25rem);
        }
        
        .container {
            width: var(--container-width);
            margin: 0 auto;
        }
        
        .section {
            padding: var(--section-padding) 0;
        }
        
        /* Enhanced Header */
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(253, 252, 248, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(232, 226, 214, 0.3);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.25rem 0;
            position: relative;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 14px;
            text-decoration: none;
            color: var(--charcoal);
            transition: transform 0.3s ease;
            z-index: 1001;
        }
        
        .logo:hover {
            transform: translateX(-4px);
        }
        
        .logo-icon {
            width: 44px;
            height: 44px;
            background: linear-gradient(135deg, var(--bronze), var(--bronze-light));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--ivory);
            font-family: var(--serif);
            font-size: 16px;
            font-weight: 500;
        }
        
        .logo-text {
            font-family: var(--serif);
            font-size: 1.4rem;
            font-weight: 400;
            letter-spacing: 0.02em;
        }
        
        /* Desktop Navigation */
        nav.desktop {
            display: flex;
        }
        
        nav.desktop ul {
            display: flex;
            list-style: none;
            gap: 2.5rem;
        }
        
        nav.desktop a {
            text-decoration: none;
            color: var(--charcoal);
            font-weight: 400;
            font-size: 0.95rem;
            letter-spacing: 0.02em;
            position: relative;
            padding: 0.5rem 0;
            transition: all 0.3s ease;
        }
        
        nav.desktop a:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background: var(--bronze);
            transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        nav.desktop a:hover {
            color: var(--bronze);
        }
        
        nav.desktop a:hover:after {
            width: 100%;
        }
        
        nav.desktop a.active {
            color: var(--bronze);
        }
        
        nav.desktop a.active:after {
            width: 100%;
        }
        
        /* Mobile Navigation */
        .mobile-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--charcoal);
            transition: transform 0.3s ease;
            z-index: 1001;
            padding: 0.5rem;
        }
        
        .mobile-toggle:hover {
            transform: rotate(90deg);
        }
        
        nav.mobile {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(253, 252, 248, 0.98);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--stone);
            padding: 2rem 0;
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        nav.mobile.active {
            transform: translateY(0);
            opacity: 1;
        }
        
        nav.mobile ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        nav.mobile a {
            text-decoration: none;
            color: var(--charcoal);
            font-weight: 400;
            font-size: 1.1rem;
            padding: 0.75rem 0;
            display: block;
            transition: all 0.3s ease;
            border-bottom: 1px solid transparent;
        }
        
        nav.mobile a:hover,
        nav.mobile a.active {
            color: var(--bronze);
            border-bottom-color: var(--bronze);
        }
        
        /* Page Content */
        .page-content {
            display: none;
            min-height: 80vh;
            padding-top: 140px;
            animation: fadeIn 0.6s ease;
        }
        
        .page-content.active {
            display: block;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        /* Page Header */
        .page-header {
            padding: 160px 0 80px;
            background: linear-gradient(135deg, var(--ivory) 0%, var(--linen) 100%);
            text-align: center;
        }
        
        .page-eyebrow {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            color: var(--bronze);
            margin-bottom: 1.5rem;
            display: block;
            font-weight: 400;
        }
        
        .page-description {
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto;
            color: #555;
            font-weight: 300;
        }
        
        /* About Page Styles */
        .heritage-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            margin-bottom: 4rem;
        }
        
        .heritage-image {
            border-radius: 0;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        
        .heritage-image img {
            width: 100%;
            height: 500px;
            object-fit: cover;
            transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .heritage-image:hover img {
            transform: scale(1.05);
        }
        
        .heritage-content h2 {
            margin-bottom: 1.5rem;
        }
        
        .heritage-content p {
            margin-bottom: 1.5rem;
            font-size: 1.125rem;
            color: #555;
            line-height: 1.6;
        }
        
        .mission-section {
            background: var(--ivory);
            border-radius: 0;
            padding: 4rem 3rem;
            margin: 4rem 0;
            border: 1px solid var(--stone);
        }
        
        .mission-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2.5rem;
        }
        
        .mission-item {
            text-align: center;
        }
        
        .mission-icon {
            width: 70px;
            height: 70px;
            background: var(--linen);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            color: var(--bronze);
            font-size: 1.5rem;
        }
        
        .mission-title {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
            font-weight: 400;
        }
        
        .mission-description {
            color: #666;
            font-size: 0.95rem;
            line-height: 1.5;
        }
        
        .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2.5rem;
        }
        
        .value-card {
            background: var(--ivory);
            border-radius: 0;
            padding: 3rem 2.5rem;
            border: 1px solid var(--stone);
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            overflow: hidden;
        }
        
        .value-card:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: var(--bronze);
            transition: left 0.6s ease;
        }
        
        .value-card:hover {
            transform: translateY(-8px);
            border-color: var(--bronze);
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        
        .value-card:hover:before {
            left: 0;
        }
        
        .value-number {
            width: 50px;
            height: 50px;
            background: var(--bronze);
            color: var(--ivory);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            font-weight: 500;
            font-size: 1.2rem;
        }
        
        .value-title {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            font-weight: 400;
        }
        
        .value-description {
            color: #666;
            font-size: 1rem;
            line-height: 1.6;
        }
        
        /* Contact Page Styles */
        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }
        
        .contact-info {
            background: var(--ivory);
            border-radius: 0;
            padding: 3rem;
            border: 1px solid var(--stone);
        }
        
        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
            margin-bottom: 2.5rem;
            padding-bottom: 2.5rem;
            border-bottom: 1px solid var(--stone);
        }
        
        .contact-item:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
        }
        
        .contact-icon {
            width: 60px;
            height: 60px;
            background: var(--linen);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--bronze);
            font-size: 1.5rem;
            flex-shrink: 0;
        }
        
        .contact-details h4 {
            margin-bottom: 0.75rem;
            font-weight: 400;
        }
        
        .contact-details p {
            color: #666;
            margin-bottom: 0.25rem;
            line-height: 1.5;
        }
        
        .contact-form {
            background: var(--ivory);
            border-radius: 0;
            padding: 3rem;
            border: 1px solid var(--stone);
        }
        
        .form-group {
            margin-bottom: 2rem;
        }
        
        .form-label {
            display: block;
            margin-bottom: 0.75rem;
            font-weight: 400;
            color: var(--charcoal);
        }
        
        .form-input, .form-textarea, .form-select {
            width: 100%;
            padding: 1rem;
            border: 1px solid var(--stone);
            border-radius: 0;
            font-family: var(--sans);
            font-size: 1rem;
            transition: all 0.3s ease;
            background: var(--ivory);
        }
        
        .form-input:focus, .form-textarea:focus, .form-select:focus {
            outline: none;
            border-color: var(--bronze);
            box-shadow: 0 0 0 3px rgba(168, 146, 110, 0.1);
        }
        
        .form-textarea {
            resize: vertical;
            min-height: 140px;
        }
        
        .form-select {
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%231a1a1a' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 1rem center;
            background-size: 12px;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            padding: 1rem 2rem;
            text-decoration: none;
            border-radius: 0;
            font-weight: 400;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border: 1px solid transparent;
            font-size: 0.95rem;
            letter-spacing: 0.02em;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            font-family: var(--sans);
        }
        
        .btn:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.6s ease;
        }
        
        .btn:hover:before {
            left: 100%;
        }
        
        .btn-primary {
            background: var(--charcoal);
            color: var(--ivory);
            border-color: var(--charcoal);
        }
        
        .btn-primary:hover {
            background: var(--bronze);
            color: var(--ivory);
            border-color: var(--bronze);
            transform: translateY(-2px);
        }
        
        .btn-light {
            background: var(--ivory);
            color: var(--charcoal);
            border-color: var(--stone);
        }
        
        .btn-light:hover {
            background: var(--bronze);
            color: var(--ivory);
            border-color: var(--bronze);
        }
        
        .map-section {
            margin-top: 4rem;
        }
        
        .map-container {
            border-radius: 0;
            overflow: hidden;
            border: 1px solid var(--stone);
            height: 400px;
        }
        
        .map-container iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
        
        /* Enhanced Footer */
        footer {
            background: var(--charcoal);
            color: var(--ivory);
            padding: 2rem 1rem 2rem;
            position: relative;
            right: -100px;
            left: -100px;
            width: 120%;
            height: 100%;
            bottom: -100px;
            top: 100px;
        }
        
        footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--bronze), transparent);
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 3rem;
            margin-bottom: 3rem;
        }
        
        .footer-brand {
            display: flex;
            flex-direction: column;
        }
        
        .footer-logo {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 1.5rem;
        }
        
        .footer-description {
            opacity: 0.7;
            line-height: 1.6;
            margin-bottom: 2rem;
            font-weight: 300;
            max-width: 400px;
        }
        
        .footer-heading {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            color: var(--ivory);
            font-weight: 400;
            letter-spacing: 0.02em;
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 0.75rem;
        }
        
        .footer-links a {
            color: rgba(253, 252, 248, 0.7);
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: 300;
            letter-spacing: 0.01em;
            font-size: 0.95rem;
        }
        
        .footer-links a:hover {
            color: var(--bronze);
        }
        
        .footer-bottom {
            border-top: 1px solid rgba(253, 252, 248, 0.1);
            padding-top: 2rem;
            text-align: center;
            opacity: 0.6;
            font-size: 0.9rem;
            font-weight: 300;
        }
        
        /* Enhanced Animations */
        .fade-in {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Enhanced Responsive Design */
        @media (max-width: 1200px) {
            .mission-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .values-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .footer-content {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        @media (max-width: 768px) {
            nav.desktop {
                display: none;
            }
            
            .mobile-toggle {
                display: block;
            }
            
            nav.mobile {
                display: block;
            }
            
            .heritage-grid {
                grid-template-columns: 1fr;
                gap: 3rem;
            }
            
            .contact-grid {
                grid-template-columns: 1fr;
                gap: 3rem;
            }
            
            .mission-grid {
                grid-template-columns: 1fr;
            }
            
            .values-grid {
                grid-template-columns: 1fr;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .mission-section {
                padding: 3rem 2rem;
            }
            
            .contact-info, .contact-form {
                padding: 2.5rem 2rem;
            }
            
            .footer-brand {
                text-align: center;
                align-items: center;
            }
        }
        
        @media (max-width: 480px) {
            .btn {
                padding: 1rem 2rem;
                width: 100%;
                justify-content: center;
            }
            
            .value-card {
                padding: 2.5rem 2rem;
            }
        }
    </style>


    <!-- Header -->
    <header>
        <div class="container header-container">
            <a href="/home" class="logo">
                <div class="logo-icon">SL</div>
                <div class="logo-text">Secret Linen</div>
            </a>
            
            <!-- Desktop Navigation -->
            <nav class="desktop">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/collections">Collections</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="#" class="nav-about active">About</a></li>
                    <li><a href="#" class="nav-contact">Contact</a></li>
                </ul>
            </nav>
            
            <!-- Mobile Toggle -->
            <button class="mobile-toggle">☰</button>
            
            <!-- Mobile Navigation -->
            <nav class="mobile">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/collections">Collections</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="#" class="nav-about active">About</a></li>
                    <li><a href="#" class="nav-contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- About Page -->
    <div id="about-page" class="page-content active">
        <!-- Page Header -->
        <section class="page-header">
            <div class="container">
                <span class="page-eyebrow">Our Story</span>
                <h1>Heritage Woven with Purpose</h1>
                <p class="page-description">
                    Discover our journey and the values that guide every thread we create at Secret Linen.
                </p>
            </div>
        </section>

        <!-- Heritage Section -->
        <section class="section">
            <div class="container">
                <div class="heritage-grid">
                    <div class="heritage-image fade-in">
                        <img src="/files/Linen Heritage.jpeg" alt="Secret Linen Heritage">
                    </div>
                    <div class="heritage-content fade-in">
                        <span class="page-eyebrow">Since 2024</span>
                        <h2>A Legacy Woven with Care</h2>
                        <p>
                            At Secretlinen, we foster respect, trust, and confidence while embracing innovation, empowerment, and open feedback to inspire growth. Committed to collaboration, diversity, and accountability, we cultivate a supportive global environment, uniting teams to achieve shared success. Members of the Secretlinen team are passionate in all they do, working hard while having fun. </p> <p>
Working at Secretlinen is more than a job. It’s an opportunity to become a tastemaker in your own right: an ultimate expert, a style curator, a trusted advisor who lives and breathes the world of luxury. Here, you’ll cultivate your passion for design and luxury living, refine your cultural fluency and network, and build meaningful relationships that shape your own career journey and personal brand.
                        </p>
                    </div>
                </div>

                <div class="mission-section fade-in">
                    <h3 style="text-align: center; margin-bottom: 3rem;">Our Commitment to Excellence</h3>
                    <div class="mission-grid">
                        <div class="mission-item">
                            <div class="mission-icon">🎯</div>
                            <h4 class="mission-title">Quality First</h4>
                            <p class="mission-description">Every piece meets our rigorous standards for durability, comfort, and beauty</p>
                        </div>
                        <div class="mission-item">
                            <div class="mission-icon">🌱</div>
                            <h4 class="mission-title">Sustainable Practices</h4>
                            <p class="mission-description">Natural fibers, eco-friendly dyes, and responsible manufacturing processes</p>
                        </div>
                        <div class="mission-item">
                            <div class="mission-icon">👨‍👩‍👧‍👦</div>
                            <h4 class="mission-title">Family Values</h4>
                            <p class="mission-description">Three generations of expertise and personal attention to every client</p>
                        </div>
                        <div class="mission-item">
                            <div class="mission-icon">⚡</div>
                            <h4 class="mission-title">Innovation</h4>
                            <p class="mission-description">Blending traditional techniques with modern technology and design</p>
                        </div>
                    </div>
                </div>

                <!-- Values Section -->
                <div style="margin-top: 4rem;">
                    <div class="heritage-content fade-in" style="text-align: center; max-width: 800px; margin: 0 auto 4rem;">
                        <span class="page-eyebrow">Our Philosophy</span>
                        <h2>WEAVING A RESPONSIBLE FUTURE</h2>
                        <p>
                            At Secretlinen, we celebrate masterful craftsmanship, iconic Italian design and continuous innovation. We believe design has the power to transform. From how we dream and think creatively to how we interact with the world, design encapsulates a meaningful global conversation. As artisans who have mastered our craft, we are now dedicating resources to integrate sustainability and social responsibility into our design processes in the name of respect for our environment and in an effort to improve our global community. 
                        </p>
                        <p> Secretlinen’s path forward is based on our belief that, together with our colleagues, our partners and our industry at-large, we can bring about meaningful change that will create a positive impact on our world and future generations.
                        </p>
                    </div>

                    <div class="values-grid">
                        <div class="value-card fade-in">
                            <div class="value-number">01</div>
                            <h3 class="value-title">Craftsmanship</h3>
                            <p class="value-description">
                             Years of textile expertise passed through generations. Every stitch tells a story of dedication and attention to detail that defines true luxury.
                            </p>
                        </div>

                        <div class="value-card fade-in">
                            <div class="value-number">02</div>
                            <h3 class="value-title">Innovation</h3>
                            <p class="value-description">
                                Embracing new techniques while honoring traditional methods. We continuously evolve to meet the changing needs of hospitality and luxury living.
                            </p>
                        </div>

                        <div class="value-card fade-in">
                            <div class="value-number">03</div>
                            <h3 class="value-title">Sustainability</h3>
                            <p class="value-description">
                                Natural fibers, OEKO-TEX® certified dyes, and mindful processes. We believe luxury should be responsible and enduring.
                            </p>
                        </div>

                        <div class="value-card fade-in">
                            <div class="value-number">04</div>
                            <h3 class="value-title">Collaboration</h3>
                            <p class="value-description">
                                Working closely with clients to create bespoke solutions. Your vision becomes our mission, and your success is our pride.
                            </p>
                        </div>

                        <div class="value-card fade-in">
                            <div class="value-number">05</div>
                            <h3 class="value-title">Excellence</h3>
                            <p class="value-description">
                                Never compromising on quality, from raw material selection to final inspection. Excellence is not an act, but a habit.
                            </p>
                        </div>

                        <div class="value-card fade-in">
                            <div class="value-number">06</div>
                            <h3 class="value-title">Heritage</h3>
                            <p class="value-description">
                                Preserving traditional techniques while building for the future. Our legacy is woven into every textile we create.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Contact Page -->
    <div id="contact-page" class="page-content">
        <!-- Page Header -->
        <section class="page-header">
            <div class="container">
                <span class="page-eyebrow">Get In Touch</span>
                <h1>Connect With Secret Linen</h1>
                <p class="page-description">
                    Ready to transform your space with luxury textiles? Reach out to our team for consultations, partnerships, or any inquiries.
                </p>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="contact-grid">
                    <div class="contact-info fade-in">
                        <h3 style="margin-bottom: 2rem;">Visit Our Studio</h3>
                        
                        <div class="contact-item">
                            <div class="contact-icon">📍</div>
                            <div class="contact-details">
                                <h4>Secret Linen Studio</h4>
                                <p>SECRETLINEN-ADAMBAKKAM</p>
                                <p>#59, 1st Floor, Balaji Nagar Main Road</p>
                                <p>Adambakkam, Chennai</p>
                                <p>Zipcode: 600088</p>
                            </div>
                        </div>

                        <div class="contact-item">
                            <div class="contact-icon">⏰</div>
                            <div class="contact-details">
                                <h4>Business Hours</h4>
                                <p><strong>Monday - Saturday:</strong> 10:00 AM - 9:00 PM</p>
                                <p><strong>Sunday:</strong> 11:00 AM - 6:00 PM</p>
                            </div>
                        </div>

                        <div class="contact-item">
                            <div class="contact-icon">📞</div>
                            <div class="contact-details">
                                <h4>Contact Information</h4>
                                <p>Phone: +91-9003555940</p>
                                <p>Email: secretlinenindia@gmail.com</p>
                            </div>
                        </div>

                        <div class="contact-item">
                            <div class="contact-icon">💼</div>
                            <div class="contact-details">
                                <h4>Business Inquiries</h4>
                                <p>Hospitality Partnerships</p>
                                <p>Corporate Gifting Programs</p>
                                <p>Customization Projects</p>
                            </div>
                        </div>

                        <div style="margin-top: 2rem;">
                            <a href="tel:+919003555940" class="btn btn-primary" style="display: inline-flex; margin-right: 1rem;">
                                Call Now
                            </a>
                            <a href="mailto:secretlinenindia@gmail.com" class="btn btn-light">
                                Email Us
                            </a>
                        </div>
                    </div>

                    <div class="contact-form fade-in">
                        <h3 style="margin-bottom: 2rem;">Send Us a Message</h3>
                        <form id="contactForm">
                            <div class="form-group">
                                <label class="form-label" for="name">Full Name *</label>
                                <input type="text" id="name" class="form-input" required>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="email">Email Address *</label>
                                <input type="email" id="email" class="form-input" required>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="phone">Phone Number</label>
                                <input type="tel" id="phone" class="form-input">
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="company">Company/Organization</label>
                                <input type="text" id="company" class="form-input">
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="service">Service Interest</label>
                                <select id="service" class="form-select">
                                    <option value="">Select a service</option>
                                    <option value="corporate-gifting">Corporate Gifting</option>
                                    <option value="hospitality">Hospitality Partnership</option>
                                    <option value="customization">Customization</option>
                                    <option value="consultation">Consultation</option>
                                    <option value="general">General Inquiry</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="message">Message *</label>
                                <textarea id="message" class="form-textarea" required></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div class="map-section fade-in">
                    <h3 style="text-align: center; margin-bottom: 2rem;">Find Our Studio</h3>
                    <div class="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.347476188198!2d80.199374!3d13.010595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679e96f7e7c3%3A0x7ddbe0b8b84e3c1e!2sBalaji%20Nagar%2C%20Adambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600088!5e0!3m2!1sen!2sin!4v1647854328746!5m2!1sen!2sin" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <div class="logo-icon">SL</div>
                        <div class="logo-text">Secret Linen</div>
                    </div>
                    <p class="footer-description">
                        Years of crafting exceptional textiles for hospitality and refined living. Quiet luxury, woven into life.
                    </p>
                </div>
                
                <div class="footer-links-column">
                    <h4 class="footer-heading">Collections</h4>
                    <ul class="footer-links">
                        <li><a href="/collections#hotels">Hotels</a></li>
                        <li><a href="/collections#hospitals">Hospitals</a></li>
                        <li><a href="/collections#spas">Spas</a></li>
                        <li><a href="/collections#salons">Salons</a></li>
                    </ul>
                </div>
                
                <div class="footer-links-column">
                    <h4 class="footer-heading">Services</h4>
                    <ul class="footer-links">
                        <li><a href="/services#gifting">Corporate Gifting</a></li>
                        <li><a href="/services#hospitality">Hospitality</a></li>
                        <li><a href="/services#customization">Customization</a></li>
                        <li><a href="/services#consultation">Consultation</a></li>
                    </ul>
                </div>
                
                <div class="footer-links-column">
                    <h4 class="footer-heading">Company</h4>
                    <ul class="footer-links">
                        <li><a href="#" class="nav-about">Our Story</a></li>
                        <li><a href="#" class="nav-contact">Contact</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/collections">Collections</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 Secret Linen. All rights reserved. Crafted with care in India.</p>
            </div>
        </div>
    </footer>

    <script>
        // Page Navigation
        document.addEventListener('DOMContentLoaded', function() {
            const aboutPage = document.getElementById('about-page');
            const contactPage = document.getElementById('contact-page');
            const aboutLinks = document.querySelectorAll('.nav-about');
            const contactLinks = document.querySelectorAll('.nav-contact');
            
            // Initialize with About page active
            function showAboutPage() {
                aboutPage.classList.add('active');
                contactPage.classList.remove('active');
                
                // Update navigation active states
                aboutLinks.forEach(link => link.classList.add('active'));
                contactLinks.forEach(link => link.classList.remove('active'));
                
                // Update page title
                document.title = 'About | Secret Linen - Heritage & Legacy';
                
                // Update URL without refresh
                history.pushState({ page: 'about' }, '', 'about.html');
            }
            
            function showContactPage() {
                contactPage.classList.add('active');
                aboutPage.classList.remove('active');
                
                // Update navigation active states
                contactLinks.forEach(link => link.classList.add('active'));
                aboutLinks.forEach(link => link.classList.remove('active'));
                
                // Update page title
                document.title = 'Contact | Secret Linen - Get In Touch';
                
                // Update URL without refresh
                history.pushState({ page: 'contact' }, '', 'about.html#contact');
            }
            
            // Navigation event listeners
            aboutLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    showAboutPage();
                });
            });
            
            contactLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    showContactPage();
                });
            });
            
            // Handle browser back/forward buttons
            window.addEventListener('popstate', function(event) {
                if (event.state && event.state.page === 'contact') {
                    showContactPage();
                } else {
                    showAboutPage();
                }
            });
            
            // Scroll animations
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            
            fadeElements.forEach(element => {
                fadeObserver.observe(element);
            });
            
            // Mobile menu toggle
            const mobileToggle = document.querySelector('.mobile-toggle');
            const mobileNav = document.querySelector('nav.mobile');
            
            mobileToggle.addEventListener('click', function() {
                mobileNav.classList.toggle('active');
            });
            
            // Close mobile menu when clicking on a link
            document.querySelectorAll('nav.mobile a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileNav.classList.remove('active');
                });
            });
            
            // Contact form submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get form data
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    
                    // Simple validation
                    if (!name || !email) {
                        alert('Please fill in all required fields.');
                        return;
                    }
                    
                    // Simulate form submission
                    const submitBtn = this.querySelector('button[type="submit"]');
                    const originalText = submitBtn.textContent;
                    
                    submitBtn.textContent = 'Sending...';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        alert('Thank you for your message! We will get back to you within 24 hours.');
                        contactForm.reset();
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 1500);
                });
            }
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(253, 252, 248, 0.98)';
                    header.style.padding = '0.5rem 0';
                } else {
                    header.style.background = 'rgba(253, 252, 248, 0.95)';
                    header.style.padding = '0';
                }
            });
        });
    </script>


```
</details>

| Line | Code | Comment |
|---:|---|---|
| 1 | `<!DOCTYPE html>` | Declares HTML5 document type for standards-compliant rendering. |
| 2 | `<html lang="en">` | Root element; `lang` attribute supports accessibility and SEO. |
| 3 | `` |  |
| 4 | `    <meta charset="UTF-8">` | Sets character encoding to UTF‑8. |
| 5 | `    <meta name="viewport" content="width=device-width, initial-scale=1.0">` | Configures responsive viewport for mobile scaling. |
| 6 | `    <title>About & Contact \| Secret Linen - Heritage & Legacy</title>` | Defines the browser tab title and helps SEO. |
| 7 | `    <meta name="description" content="Discover Secret Linen's heritage and connect with us. 50+ years of luxury textile craftsmanship.">` | Structural/semantic HTML element. |
| 8 | `    ` |  |
| 9 | `    <!-- Fonts -->` | Structural/semantic HTML element. |
| 10 | `    <link rel="preconnect" href="https://fonts.googleapis.com">` | Hints the browser to preconnect to a domain for faster font loading. |
| 11 | `    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` | Hints the browser to preconnect to a domain for faster font loading. |
| 12 | `    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">` | Loads Google Fonts stylesheet for premium typography. |
| 13 | `    ` |  |
| 14 | `    <style>` | Inline CSS block begins. |
| 15 | `        :root {` | CSS selector block begins. |
| 16 | `            /* Enhanced Color Palette */` | Content/whitespace or standard markup. |
| 17 | `            --ivory: #fdfcf8;` | CSS custom property (design token) for consistent theming. |
| 18 | `            --linen: #f5f1e8;` | CSS custom property (design token) for consistent theming. |
| 19 | `            --stone: #e8e2d6;` | CSS custom property (design token) for consistent theming. |
| 20 | `            --clay: #d8cdbc;` | CSS custom property (design token) for consistent theming. |
| 21 | `            --charcoal: #1a1a1a;` | CSS custom property (design token) for consistent theming. |
| 22 | `            --bronze: #a8926e;` | CSS custom property (design token) for consistent theming. |
| 23 | `            --bronze-light: #c4b59a;` | CSS custom property (design token) for consistent theming. |
| 24 | `            --sage: #a8b8a5;` | CSS custom property (design token) for consistent theming. |
| 25 | `            ` |  |
| 26 | `            /* Typography */` | Content/whitespace or standard markup. |
| 27 | `            --serif: 'Playfair Display', serif;` | CSS custom property (design token) for consistent theming. |
| 28 | `            --sans: 'Inter', sans-serif;` | CSS custom property (design token) for consistent theming. |
| 29 | `            ` |  |
| 30 | `            /* Spacing */` | Content/whitespace or standard markup. |
| 31 | `            --section-padding: clamp(80px, 10vw, 160px);` | CSS custom property (design token) for consistent theming. |
| 32 | `            --container-width: min(1400px, 94%);` | CSS custom property (design token) for consistent theming. |
| 33 | `        }` | CSS selector block ends. |
| 34 | `        ` |  |
| 35 | `        * {` | CSS selector block begins. |
| 36 | `            margin: 0;` | CSS declaration. |
| 37 | `            padding: 0;` | CSS declaration. |
| 38 | `            box-sizing: border-box;` | CSS declaration. |
| 39 | `        }` | CSS selector block ends. |
| 40 | `        ` |  |
| 41 | `        html {` | CSS selector block begins. |
| 42 | `            scroll-behavior: smooth;` | Smooth scroll between in‑page anchors. |
| 43 | `        }` | CSS selector block ends. |
| 44 | `        ` |  |
| 45 | `        body {` | CSS selector block begins. |
| 46 | `            font-family: var(--sans);` | CSS declaration. |
| 47 | `            color: var(--charcoal);` | CSS declaration. |
| 48 | `            background-color: var(--ivory);` | CSS declaration. |
| 49 | `            line-height: 1.7;` | CSS declaration. |
| 50 | `            overflow-x: hidden;` | CSS declaration. |
| 51 | `            font-weight: 300;` | CSS declaration. |
| 52 | `        }` | CSS selector block ends. |
| 53 | `        ` |  |
| 54 | `        h1, h2, h3, h4 {` | CSS selector block begins. |
| 55 | `            font-family: var(--serif);` | CSS declaration. |
| 56 | `            font-weight: 400;` | CSS declaration. |
| 57 | `            line-height: 1.1;` | CSS declaration. |
| 58 | `            letter-spacing: -0.02em;` | CSS declaration. |
| 59 | `        }` | CSS selector block ends. |
| 60 | `        ` |  |
| 61 | `        h1 {` | CSS selector block begins. |
| 62 | `            font-size: clamp(3rem, 6vw, 5rem);` | CSS declaration. |
| 63 | `            font-weight: 300;` | CSS declaration. |
| 64 | `        }` | CSS selector block ends. |
| 65 | `        ` |  |
| 66 | `        h2 {` | CSS selector block begins. |
| 67 | `            font-size: clamp(2.25rem, 4.5vw, 3.5rem);` | CSS declaration. |
| 68 | `        }` | CSS selector block ends. |
| 69 | `        ` |  |
| 70 | `        h3 {` | CSS selector block begins. |
| 71 | `            font-size: clamp(1.5rem, 3vw, 2.25rem);` | CSS declaration. |
| 72 | `        }` | CSS selector block ends. |
| 73 | `        ` |  |
| 74 | `        .container {` | CSS selector block begins. |
| 75 | `            width: var(--container-width);` | CSS declaration. |
| 76 | `            margin: 0 auto;` | CSS declaration. |
| 77 | `        }` | CSS selector block ends. |
| 78 | `        ` |  |
| 79 | `        .section {` | CSS selector block begins. |
| 80 | `            padding: var(--section-padding) 0;` | CSS declaration. |
| 81 | `        }` | CSS selector block ends. |
| 82 | `        ` |  |
| 83 | `        /* Enhanced Header */` | Content/whitespace or standard markup. |
| 84 | `        header {` | CSS selector block begins. |
| 85 | `            position: fixed;` | CSS declaration. |
| 86 | `            top: 0;` | CSS declaration. |
| 87 | `            left: 0;` | CSS declaration. |
| 88 | `            width: 100%;` | CSS declaration. |
| 89 | `            z-index: 1000;` | Layer stacking control to keep nav/modals above content. |
| 90 | `            background: rgba(253, 252, 248, 0.95);` | CSS declaration. |
| 91 | `            backdrop-filter: blur(20px);` | Applies frosted-glass effect for overlays or headers. |
| 92 | `            border-bottom: 1px solid rgba(232, 226, 214, 0.3);` | CSS declaration. |
| 93 | `            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 94 | `        }` | CSS selector block ends. |
| 95 | `        ` |  |
| 96 | `        .header-container {` | CSS selector block begins. |
| 97 | `            display: flex;` | CSS declaration. |
| 98 | `            justify-content: space-between;` | CSS declaration. |
| 99 | `            align-items: center;` | CSS declaration. |
| 100 | `            padding: 1.25rem 0;` | CSS declaration. |
| 101 | `            position: relative;` | CSS declaration. |
| 102 | `        }` | CSS selector block ends. |
| 103 | `        ` |  |
| 104 | `        .logo {` | CSS selector block begins. |
| 105 | `            display: flex;` | CSS declaration. |
| 106 | `            align-items: center;` | CSS declaration. |
| 107 | `            gap: 14px;` | CSS declaration. |
| 108 | `            text-decoration: none;` | CSS declaration. |
| 109 | `            color: var(--charcoal);` | CSS declaration. |
| 110 | `            transition: transform 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 111 | `            z-index: 1001;` | Layer stacking control to keep nav/modals above content. |
| 112 | `        }` | CSS selector block ends. |
| 113 | `        ` |  |
| 114 | `        .logo:hover {` | CSS selector block begins. |
| 115 | `            transform: translateX(-4px);` | CSS declaration. |
| 116 | `        }` | CSS selector block ends. |
| 117 | `        ` |  |
| 118 | `        .logo-icon {` | CSS selector block begins. |
| 119 | `            width: 44px;` | CSS declaration. |
| 120 | `            height: 44px;` | CSS declaration. |
| 121 | `            background: linear-gradient(135deg, var(--bronze), var(--bronze-light));` | CSS declaration. |
| 122 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 123 | `            display: flex;` | CSS declaration. |
| 124 | `            align-items: center;` | CSS declaration. |
| 125 | `            justify-content: center;` | CSS declaration. |
| 126 | `            color: var(--ivory);` | CSS declaration. |
| 127 | `            font-family: var(--serif);` | CSS declaration. |
| 128 | `            font-size: 16px;` | CSS declaration. |
| 129 | `            font-weight: 500;` | CSS declaration. |
| 130 | `        }` | CSS selector block ends. |
| 131 | `        ` |  |
| 132 | `        .logo-text {` | CSS selector block begins. |
| 133 | `            font-family: var(--serif);` | CSS declaration. |
| 134 | `            font-size: 1.4rem;` | CSS declaration. |
| 135 | `            font-weight: 400;` | CSS declaration. |
| 136 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 137 | `        }` | CSS selector block ends. |
| 138 | `        ` |  |
| 139 | `        /* Desktop Navigation */` | Content/whitespace or standard markup. |
| 140 | `        nav.desktop {` | CSS selector block begins. |
| 141 | `            display: flex;` | CSS declaration. |
| 142 | `        }` | CSS selector block ends. |
| 143 | `        ` |  |
| 144 | `        nav.desktop ul {` | CSS selector block begins. |
| 145 | `            display: flex;` | CSS declaration. |
| 146 | `            list-style: none;` | CSS declaration. |
| 147 | `            gap: 2.5rem;` | CSS declaration. |
| 148 | `        }` | CSS selector block ends. |
| 149 | `        ` |  |
| 150 | `        nav.desktop a {` | CSS selector block begins. |
| 151 | `            text-decoration: none;` | CSS declaration. |
| 152 | `            color: var(--charcoal);` | CSS declaration. |
| 153 | `            font-weight: 400;` | CSS declaration. |
| 154 | `            font-size: 0.95rem;` | CSS declaration. |
| 155 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 156 | `            position: relative;` | CSS declaration. |
| 157 | `            padding: 0.5rem 0;` | CSS declaration. |
| 158 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 159 | `        }` | CSS selector block ends. |
| 160 | `        ` |  |
| 161 | `        nav.desktop a:after {` | CSS selector block begins. |
| 162 | `            content: '';` | CSS declaration. |
| 163 | `            position: absolute;` | CSS declaration. |
| 164 | `            bottom: 0;` | CSS declaration. |
| 165 | `            left: 0;` | CSS declaration. |
| 166 | `            width: 0;` | CSS declaration. |
| 167 | `            height: 1px;` | CSS declaration. |
| 168 | `            background: var(--bronze);` | CSS declaration. |
| 169 | `            transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 170 | `        }` | CSS selector block ends. |
| 171 | `        ` |  |
| 172 | `        nav.desktop a:hover {` | CSS selector block begins. |
| 173 | `            color: var(--bronze);` | CSS declaration. |
| 174 | `        }` | CSS selector block ends. |
| 175 | `        ` |  |
| 176 | `        nav.desktop a:hover:after {` | CSS selector block begins. |
| 177 | `            width: 100%;` | CSS declaration. |
| 178 | `        }` | CSS selector block ends. |
| 179 | `        ` |  |
| 180 | `        nav.desktop a.active {` | CSS selector block begins. |
| 181 | `            color: var(--bronze);` | CSS declaration. |
| 182 | `        }` | CSS selector block ends. |
| 183 | `        ` |  |
| 184 | `        nav.desktop a.active:after {` | CSS selector block begins. |
| 185 | `            width: 100%;` | CSS declaration. |
| 186 | `        }` | CSS selector block ends. |
| 187 | `        ` |  |
| 188 | `        /* Mobile Navigation */` | Content/whitespace or standard markup. |
| 189 | `        .mobile-toggle {` | CSS selector block begins. |
| 190 | `            display: none;` | CSS declaration. |
| 191 | `            background: none;` | CSS declaration. |
| 192 | `            border: none;` | CSS declaration. |
| 193 | `            font-size: 1.5rem;` | CSS declaration. |
| 194 | `            cursor: pointer;` | CSS declaration. |
| 195 | `            color: var(--charcoal);` | CSS declaration. |
| 196 | `            transition: transform 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 197 | `            z-index: 1001;` | Layer stacking control to keep nav/modals above content. |
| 198 | `            padding: 0.5rem;` | CSS declaration. |
| 199 | `        }` | CSS selector block ends. |
| 200 | `        ` |  |
| 201 | `        .mobile-toggle:hover {` | CSS selector block begins. |
| 202 | `            transform: rotate(90deg);` | CSS declaration. |
| 203 | `        }` | CSS selector block ends. |
| 204 | `        ` |  |
| 205 | `        nav.mobile {` | CSS selector block begins. |
| 206 | `            display: none;` | CSS declaration. |
| 207 | `            position: absolute;` | CSS declaration. |
| 208 | `            top: 100%;` | CSS declaration. |
| 209 | `            left: 0;` | CSS declaration. |
| 210 | `            width: 100%;` | CSS declaration. |
| 211 | `            background: rgba(253, 252, 248, 0.98);` | CSS declaration. |
| 212 | `            backdrop-filter: blur(20px);` | Applies frosted-glass effect for overlays or headers. |
| 213 | `            border-bottom: 1px solid var(--stone);` | CSS declaration. |
| 214 | `            padding: 2rem 0;` | CSS declaration. |
| 215 | `            transform: translateY(-100%);` | CSS declaration. |
| 216 | `            opacity: 0;` | CSS declaration. |
| 217 | `            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 218 | `        }` | CSS selector block ends. |
| 219 | `        ` |  |
| 220 | `        nav.mobile.active {` | CSS selector block begins. |
| 221 | `            transform: translateY(0);` | CSS declaration. |
| 222 | `            opacity: 1;` | CSS declaration. |
| 223 | `        }` | CSS selector block ends. |
| 224 | `        ` |  |
| 225 | `        nav.mobile ul {` | CSS selector block begins. |
| 226 | `            list-style: none;` | CSS declaration. |
| 227 | `            display: flex;` | CSS declaration. |
| 228 | `            flex-direction: column;` | CSS declaration. |
| 229 | `            gap: 1rem;` | CSS declaration. |
| 230 | `        }` | CSS selector block ends. |
| 231 | `        ` |  |
| 232 | `        nav.mobile a {` | CSS selector block begins. |
| 233 | `            text-decoration: none;` | CSS declaration. |
| 234 | `            color: var(--charcoal);` | CSS declaration. |
| 235 | `            font-weight: 400;` | CSS declaration. |
| 236 | `            font-size: 1.1rem;` | CSS declaration. |
| 237 | `            padding: 0.75rem 0;` | CSS declaration. |
| 238 | `            display: block;` | CSS declaration. |
| 239 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 240 | `            border-bottom: 1px solid transparent;` | CSS declaration. |
| 241 | `        }` | CSS selector block ends. |
| 242 | `        ` |  |
| 243 | `        nav.mobile a:hover,` | Content/whitespace or standard markup. |
| 244 | `        nav.mobile a.active {` | CSS selector block begins. |
| 245 | `            color: var(--bronze);` | CSS declaration. |
| 246 | `            border-bottom-color: var(--bronze);` | CSS declaration. |
| 247 | `        }` | CSS selector block ends. |
| 248 | `        ` |  |
| 249 | `        /* Page Content */` | Content/whitespace or standard markup. |
| 250 | `        .page-content {` | CSS selector block begins. |
| 251 | `            display: none;` | CSS declaration. |
| 252 | `            min-height: 80vh;` | CSS declaration. |
| 253 | `            padding-top: 140px;` | CSS declaration. |
| 254 | `            animation: fadeIn 0.6s ease;` | Motion/animation for subtle, premium interactions. |
| 255 | `        }` | CSS selector block ends. |
| 256 | `        ` |  |
| 257 | `        .page-content.active {` | CSS selector block begins. |
| 258 | `            display: block;` | CSS declaration. |
| 259 | `        }` | CSS selector block ends. |
| 260 | `        ` |  |
| 261 | `        @keyframes fadeIn {` | Motion/animation for subtle, premium interactions. |
| 262 | `            from { opacity: 0; }` | CSS selector block ends. |
| 263 | `            to { opacity: 1; }` | CSS selector block ends. |
| 264 | `        }` | CSS selector block ends. |
| 265 | `        ` |  |
| 266 | `        /* Page Header */` | Content/whitespace or standard markup. |
| 267 | `        .page-header {` | CSS selector block begins. |
| 268 | `            padding: 160px 0 80px;` | CSS declaration. |
| 269 | `            background: linear-gradient(135deg, var(--ivory) 0%, var(--linen) 100%);` | CSS declaration. |
| 270 | `            text-align: center;` | CSS declaration. |
| 271 | `        }` | CSS selector block ends. |
| 272 | `        ` |  |
| 273 | `        .page-eyebrow {` | CSS selector block begins. |
| 274 | `            font-size: 0.8rem;` | CSS declaration. |
| 275 | `            text-transform: uppercase;` | CSS declaration. |
| 276 | `            letter-spacing: 0.3em;` | CSS declaration. |
| 277 | `            color: var(--bronze);` | CSS declaration. |
| 278 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 279 | `            display: block;` | CSS declaration. |
| 280 | `            font-weight: 400;` | CSS declaration. |
| 281 | `        }` | CSS selector block ends. |
| 282 | `        ` |  |
| 283 | `        .page-description {` | CSS selector block begins. |
| 284 | `            font-size: 1.2rem;` | CSS declaration. |
| 285 | `            max-width: 600px;` | CSS declaration. |
| 286 | `            margin: 0 auto;` | CSS declaration. |
| 287 | `            color: #555;` | CSS declaration. |
| 288 | `            font-weight: 300;` | CSS declaration. |
| 289 | `        }` | CSS selector block ends. |
| 290 | `        ` |  |
| 291 | `        /* About Page Styles */` | Content/whitespace or standard markup. |
| 292 | `        .heritage-grid {` | CSS selector block begins. |
| 293 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 294 | `            grid-template-columns: 1fr 1fr;` | CSS declaration. |
| 295 | `            gap: 4rem;` | CSS declaration. |
| 296 | `            align-items: center;` | CSS declaration. |
| 297 | `            margin-bottom: 4rem;` | CSS declaration. |
| 298 | `        }` | CSS selector block ends. |
| 299 | `        ` |  |
| 300 | `        .heritage-image {` | CSS selector block begins. |
| 301 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 302 | `            overflow: hidden;` | CSS declaration. |
| 303 | `            box-shadow: 0 20px 40px rgba(0,0,0,0.08);` | Shadow depth for premium, elevated look on cards/components. |
| 304 | `        }` | CSS selector block ends. |
| 305 | `        ` |  |
| 306 | `        .heritage-image img {` | CSS selector block begins. |
| 307 | `            width: 100%;` | CSS declaration. |
| 308 | `            height: 500px;` | CSS declaration. |
| 309 | `            object-fit: cover;` | CSS declaration. |
| 310 | `            transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 311 | `        }` | CSS selector block ends. |
| 312 | `        ` |  |
| 313 | `        .heritage-image:hover img {` | CSS selector block begins. |
| 314 | `            transform: scale(1.05);` | CSS declaration. |
| 315 | `        }` | CSS selector block ends. |
| 316 | `        ` |  |
| 317 | `        .heritage-content h2 {` | CSS selector block begins. |
| 318 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 319 | `        }` | CSS selector block ends. |
| 320 | `        ` |  |
| 321 | `        .heritage-content p {` | CSS selector block begins. |
| 322 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 323 | `            font-size: 1.125rem;` | CSS declaration. |
| 324 | `            color: #555;` | CSS declaration. |
| 325 | `            line-height: 1.6;` | CSS declaration. |
| 326 | `        }` | CSS selector block ends. |
| 327 | `        ` |  |
| 328 | `        .mission-section {` | CSS selector block begins. |
| 329 | `            background: var(--ivory);` | CSS declaration. |
| 330 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 331 | `            padding: 4rem 3rem;` | CSS declaration. |
| 332 | `            margin: 4rem 0;` | CSS declaration. |
| 333 | `            border: 1px solid var(--stone);` | CSS declaration. |
| 334 | `        }` | CSS selector block ends. |
| 335 | `        ` |  |
| 336 | `        .mission-grid {` | CSS selector block begins. |
| 337 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 338 | `            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` | CSS declaration. |
| 339 | `            gap: 2.5rem;` | CSS declaration. |
| 340 | `        }` | CSS selector block ends. |
| 341 | `        ` |  |
| 342 | `        .mission-item {` | CSS selector block begins. |
| 343 | `            text-align: center;` | CSS declaration. |
| 344 | `        }` | CSS selector block ends. |
| 345 | `        ` |  |
| 346 | `        .mission-icon {` | CSS selector block begins. |
| 347 | `            width: 70px;` | CSS declaration. |
| 348 | `            height: 70px;` | CSS declaration. |
| 349 | `            background: var(--linen);` | CSS declaration. |
| 350 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 351 | `            display: flex;` | CSS declaration. |
| 352 | `            align-items: center;` | CSS declaration. |
| 353 | `            justify-content: center;` | CSS declaration. |
| 354 | `            margin: 0 auto 1.5rem;` | CSS declaration. |
| 355 | `            color: var(--bronze);` | CSS declaration. |
| 356 | `            font-size: 1.5rem;` | CSS declaration. |
| 357 | `        }` | CSS selector block ends. |
| 358 | `        ` |  |
| 359 | `        .mission-title {` | CSS selector block begins. |
| 360 | `            font-size: 1.25rem;` | CSS declaration. |
| 361 | `            margin-bottom: 0.75rem;` | CSS declaration. |
| 362 | `            font-weight: 400;` | CSS declaration. |
| 363 | `        }` | CSS selector block ends. |
| 364 | `        ` |  |
| 365 | `        .mission-description {` | CSS selector block begins. |
| 366 | `            color: #666;` | CSS declaration. |
| 367 | `            font-size: 0.95rem;` | CSS declaration. |
| 368 | `            line-height: 1.5;` | CSS declaration. |
| 369 | `        }` | CSS selector block ends. |
| 370 | `        ` |  |
| 371 | `        .values-grid {` | CSS selector block begins. |
| 372 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 373 | `            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));` | CSS declaration. |
| 374 | `            gap: 2.5rem;` | CSS declaration. |
| 375 | `        }` | CSS selector block ends. |
| 376 | `        ` |  |
| 377 | `        .value-card {` | CSS selector block begins. |
| 378 | `            background: var(--ivory);` | CSS declaration. |
| 379 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 380 | `            padding: 3rem 2.5rem;` | CSS declaration. |
| 381 | `            border: 1px solid var(--stone);` | CSS declaration. |
| 382 | `            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 383 | `            position: relative;` | CSS declaration. |
| 384 | `            overflow: hidden;` | CSS declaration. |
| 385 | `        }` | CSS selector block ends. |
| 386 | `        ` |  |
| 387 | `        .value-card:before {` | CSS selector block begins. |
| 388 | `            content: '';` | CSS declaration. |
| 389 | `            position: absolute;` | CSS declaration. |
| 390 | `            top: 0;` | CSS declaration. |
| 391 | `            left: -100%;` | CSS declaration. |
| 392 | `            width: 100%;` | CSS declaration. |
| 393 | `            height: 2px;` | CSS declaration. |
| 394 | `            background: var(--bronze);` | CSS declaration. |
| 395 | `            transition: left 0.6s ease;` | Motion/animation for subtle, premium interactions. |
| 396 | `        }` | CSS selector block ends. |
| 397 | `        ` |  |
| 398 | `        .value-card:hover {` | CSS selector block begins. |
| 399 | `            transform: translateY(-8px);` | CSS declaration. |
| 400 | `            border-color: var(--bronze);` | CSS declaration. |
| 401 | `            box-shadow: 0 20px 40px rgba(0,0,0,0.08);` | Shadow depth for premium, elevated look on cards/components. |
| 402 | `        }` | CSS selector block ends. |
| 403 | `        ` |  |
| 404 | `        .value-card:hover:before {` | CSS selector block begins. |
| 405 | `            left: 0;` | CSS declaration. |
| 406 | `        }` | CSS selector block ends. |
| 407 | `        ` |  |
| 408 | `        .value-number {` | CSS selector block begins. |
| 409 | `            width: 50px;` | CSS declaration. |
| 410 | `            height: 50px;` | CSS declaration. |
| 411 | `            background: var(--bronze);` | CSS declaration. |
| 412 | `            color: var(--ivory);` | CSS declaration. |
| 413 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 414 | `            display: flex;` | CSS declaration. |
| 415 | `            align-items: center;` | CSS declaration. |
| 416 | `            justify-content: center;` | CSS declaration. |
| 417 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 418 | `            font-weight: 500;` | CSS declaration. |
| 419 | `            font-size: 1.2rem;` | CSS declaration. |
| 420 | `        }` | CSS selector block ends. |
| 421 | `        ` |  |
| 422 | `        .value-title {` | CSS selector block begins. |
| 423 | `            font-size: 1.3rem;` | CSS declaration. |
| 424 | `            margin-bottom: 1rem;` | CSS declaration. |
| 425 | `            font-weight: 400;` | CSS declaration. |
| 426 | `        }` | CSS selector block ends. |
| 427 | `        ` |  |
| 428 | `        .value-description {` | CSS selector block begins. |
| 429 | `            color: #666;` | CSS declaration. |
| 430 | `            font-size: 1rem;` | CSS declaration. |
| 431 | `            line-height: 1.6;` | CSS declaration. |
| 432 | `        }` | CSS selector block ends. |
| 433 | `        ` |  |
| 434 | `        /* Contact Page Styles */` | Content/whitespace or standard markup. |
| 435 | `        .contact-grid {` | CSS selector block begins. |
| 436 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 437 | `            grid-template-columns: 1fr 1fr;` | CSS declaration. |
| 438 | `            gap: 4rem;` | CSS declaration. |
| 439 | `        }` | CSS selector block ends. |
| 440 | `        ` |  |
| 441 | `        .contact-info {` | CSS selector block begins. |
| 442 | `            background: var(--ivory);` | CSS declaration. |
| 443 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 444 | `            padding: 3rem;` | CSS declaration. |
| 445 | `            border: 1px solid var(--stone);` | CSS declaration. |
| 446 | `        }` | CSS selector block ends. |
| 447 | `        ` |  |
| 448 | `        .contact-item {` | CSS selector block begins. |
| 449 | `            display: flex;` | CSS declaration. |
| 450 | `            align-items: flex-start;` | CSS declaration. |
| 451 | `            gap: 1.5rem;` | CSS declaration. |
| 452 | `            margin-bottom: 2.5rem;` | CSS declaration. |
| 453 | `            padding-bottom: 2.5rem;` | CSS declaration. |
| 454 | `            border-bottom: 1px solid var(--stone);` | CSS declaration. |
| 455 | `        }` | CSS selector block ends. |
| 456 | `        ` |  |
| 457 | `        .contact-item:last-child {` | CSS selector block begins. |
| 458 | `            margin-bottom: 0;` | CSS declaration. |
| 459 | `            padding-bottom: 0;` | CSS declaration. |
| 460 | `            border-bottom: none;` | CSS declaration. |
| 461 | `        }` | CSS selector block ends. |
| 462 | `        ` |  |
| 463 | `        .contact-icon {` | CSS selector block begins. |
| 464 | `            width: 60px;` | CSS declaration. |
| 465 | `            height: 60px;` | CSS declaration. |
| 466 | `            background: var(--linen);` | CSS declaration. |
| 467 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 468 | `            display: flex;` | CSS declaration. |
| 469 | `            align-items: center;` | CSS declaration. |
| 470 | `            justify-content: center;` | CSS declaration. |
| 471 | `            color: var(--bronze);` | CSS declaration. |
| 472 | `            font-size: 1.5rem;` | CSS declaration. |
| 473 | `            flex-shrink: 0;` | CSS declaration. |
| 474 | `        }` | CSS selector block ends. |
| 475 | `        ` |  |
| 476 | `        .contact-details h4 {` | CSS selector block begins. |
| 477 | `            margin-bottom: 0.75rem;` | CSS declaration. |
| 478 | `            font-weight: 400;` | CSS declaration. |
| 479 | `        }` | CSS selector block ends. |
| 480 | `        ` |  |
| 481 | `        .contact-details p {` | CSS selector block begins. |
| 482 | `            color: #666;` | CSS declaration. |
| 483 | `            margin-bottom: 0.25rem;` | CSS declaration. |
| 484 | `            line-height: 1.5;` | CSS declaration. |
| 485 | `        }` | CSS selector block ends. |
| 486 | `        ` |  |
| 487 | `        .contact-form {` | CSS selector block begins. |
| 488 | `            background: var(--ivory);` | CSS declaration. |
| 489 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 490 | `            padding: 3rem;` | CSS declaration. |
| 491 | `            border: 1px solid var(--stone);` | CSS declaration. |
| 492 | `        }` | CSS selector block ends. |
| 493 | `        ` |  |
| 494 | `        .form-group {` | CSS selector block begins. |
| 495 | `            margin-bottom: 2rem;` | CSS declaration. |
| 496 | `        }` | CSS selector block ends. |
| 497 | `        ` |  |
| 498 | `        .form-label {` | CSS selector block begins. |
| 499 | `            display: block;` | CSS declaration. |
| 500 | `            margin-bottom: 0.75rem;` | CSS declaration. |
| 501 | `            font-weight: 400;` | CSS declaration. |
| 502 | `            color: var(--charcoal);` | CSS declaration. |
| 503 | `        }` | CSS selector block ends. |
| 504 | `        ` |  |
| 505 | `        .form-input, .form-textarea, .form-select {` | CSS selector block begins. |
| 506 | `            width: 100%;` | CSS declaration. |
| 507 | `            padding: 1rem;` | CSS declaration. |
| 508 | `            border: 1px solid var(--stone);` | CSS declaration. |
| 509 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 510 | `            font-family: var(--sans);` | CSS declaration. |
| 511 | `            font-size: 1rem;` | CSS declaration. |
| 512 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 513 | `            background: var(--ivory);` | CSS declaration. |
| 514 | `        }` | CSS selector block ends. |
| 515 | `        ` |  |
| 516 | `        .form-input:focus, .form-textarea:focus, .form-select:focus {` | CSS selector block begins. |
| 517 | `            outline: none;` | CSS declaration. |
| 518 | `            border-color: var(--bronze);` | CSS declaration. |
| 519 | `            box-shadow: 0 0 0 3px rgba(168, 146, 110, 0.1);` | Shadow depth for premium, elevated look on cards/components. |
| 520 | `        }` | CSS selector block ends. |
| 521 | `        ` |  |
| 522 | `        .form-textarea {` | CSS selector block begins. |
| 523 | `            resize: vertical;` | CSS declaration. |
| 524 | `            min-height: 140px;` | CSS declaration. |
| 525 | `        }` | CSS selector block ends. |
| 526 | `        ` |  |
| 527 | `        .form-select {` | CSS selector block begins. |
| 528 | `            appearance: none;` | CSS declaration. |
| 529 | `            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%231a1a1a' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");` | CSS declaration. |
| 530 | `            background-repeat: no-repeat;` | CSS declaration. |
| 531 | `            background-position: right 1rem center;` | CSS declaration. |
| 532 | `            background-size: 12px;` | CSS declaration. |
| 533 | `        }` | CSS selector block ends. |
| 534 | `        ` |  |
| 535 | `        .btn {` | Button/CTA element styled as a pill with golden border. |
| 536 | `            display: inline-flex;` | CSS declaration. |
| 537 | `            align-items: center;` | CSS declaration. |
| 538 | `            padding: 1rem 2rem;` | CSS declaration. |
| 539 | `            text-decoration: none;` | CSS declaration. |
| 540 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 541 | `            font-weight: 400;` | CSS declaration. |
| 542 | `            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 543 | `            border: 1px solid transparent;` | CSS declaration. |
| 544 | `            font-size: 0.95rem;` | CSS declaration. |
| 545 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 546 | `            position: relative;` | CSS declaration. |
| 547 | `            overflow: hidden;` | CSS declaration. |
| 548 | `            cursor: pointer;` | CSS declaration. |
| 549 | `            font-family: var(--sans);` | CSS declaration. |
| 550 | `        }` | CSS selector block ends. |
| 551 | `        ` |  |
| 552 | `        .btn:before {` | Button/CTA element styled as a pill with golden border. |
| 553 | `            content: '';` | CSS declaration. |
| 554 | `            position: absolute;` | CSS declaration. |
| 555 | `            top: 0;` | CSS declaration. |
| 556 | `            left: -100%;` | CSS declaration. |
| 557 | `            width: 100%;` | CSS declaration. |
| 558 | `            height: 100%;` | CSS declaration. |
| 559 | `            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);` | CSS declaration. |
| 560 | `            transition: left 0.6s ease;` | Motion/animation for subtle, premium interactions. |
| 561 | `        }` | CSS selector block ends. |
| 562 | `        ` |  |
| 563 | `        .btn:hover:before {` | Button/CTA element styled as a pill with golden border. |
| 564 | `            left: 100%;` | CSS declaration. |
| 565 | `        }` | CSS selector block ends. |
| 566 | `        ` |  |
| 567 | `        .btn-primary {` | Button/CTA element styled as a pill with golden border. |
| 568 | `            background: var(--charcoal);` | CSS declaration. |
| 569 | `            color: var(--ivory);` | CSS declaration. |
| 570 | `            border-color: var(--charcoal);` | CSS declaration. |
| 571 | `        }` | CSS selector block ends. |
| 572 | `        ` |  |
| 573 | `        .btn-primary:hover {` | Button/CTA element styled as a pill with golden border. |
| 574 | `            background: var(--bronze);` | CSS declaration. |
| 575 | `            color: var(--ivory);` | CSS declaration. |
| 576 | `            border-color: var(--bronze);` | CSS declaration. |
| 577 | `            transform: translateY(-2px);` | CSS declaration. |
| 578 | `        }` | CSS selector block ends. |
| 579 | `        ` |  |
| 580 | `        .btn-light {` | Button/CTA element styled as a pill with golden border. |
| 581 | `            background: var(--ivory);` | CSS declaration. |
| 582 | `            color: var(--charcoal);` | CSS declaration. |
| 583 | `            border-color: var(--stone);` | CSS declaration. |
| 584 | `        }` | CSS selector block ends. |
| 585 | `        ` |  |
| 586 | `        .btn-light:hover {` | Button/CTA element styled as a pill with golden border. |
| 587 | `            background: var(--bronze);` | CSS declaration. |
| 588 | `            color: var(--ivory);` | CSS declaration. |
| 589 | `            border-color: var(--bronze);` | CSS declaration. |
| 590 | `        }` | CSS selector block ends. |
| 591 | `        ` |  |
| 592 | `        .map-section {` | CSS selector block begins. |
| 593 | `            margin-top: 4rem;` | CSS declaration. |
| 594 | `        }` | CSS selector block ends. |
| 595 | `        ` |  |
| 596 | `        .map-container {` | CSS selector block begins. |
| 597 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 598 | `            overflow: hidden;` | CSS declaration. |
| 599 | `            border: 1px solid var(--stone);` | CSS declaration. |
| 600 | `            height: 400px;` | CSS declaration. |
| 601 | `        }` | CSS selector block ends. |
| 602 | `        ` |  |
| 603 | `        .map-container iframe {` | CSS selector block begins. |
| 604 | `            width: 100%;` | CSS declaration. |
| 605 | `            height: 100%;` | CSS declaration. |
| 606 | `            border: none;` | CSS declaration. |
| 607 | `        }` | CSS selector block ends. |
| 608 | `        ` |  |
| 609 | `        /* Enhanced Footer */` | Content/whitespace or standard markup. |
| 610 | `        footer {` | CSS selector block begins. |
| 611 | `            background: var(--charcoal);` | CSS declaration. |
| 612 | `            color: var(--ivory);` | CSS declaration. |
| 613 | `            padding: 2rem 1rem 2rem;` | CSS declaration. |
| 614 | `            position: relative;` | CSS declaration. |
| 615 | `            right: -100px;` | CSS declaration. |
| 616 | `            left: -100px;` | CSS declaration. |
| 617 | `            width: 120%;` | CSS declaration. |
| 618 | `            height: 100%;` | CSS declaration. |
| 619 | `            bottom: -100px;` | CSS declaration. |
| 620 | `            top: 100px;` | CSS declaration. |
| 621 | `        }` | CSS selector block ends. |
| 622 | `        ` |  |
| 623 | `        footer::before {` | CSS selector block begins. |
| 624 | `            content: '';` | CSS declaration. |
| 625 | `            position: absolute;` | CSS declaration. |
| 626 | `            top: 0;` | CSS declaration. |
| 627 | `            left: 0;` | CSS declaration. |
| 628 | `            width: 100%;` | CSS declaration. |
| 629 | `            height: 1px;` | CSS declaration. |
| 630 | `            background: linear-gradient(90deg, transparent, var(--bronze), transparent);` | CSS declaration. |
| 631 | `        }` | CSS selector block ends. |
| 632 | `        ` |  |
| 633 | `        .footer-content {` | CSS selector block begins. |
| 634 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 635 | `            grid-template-columns: 2fr 1fr 1fr 1fr;` | CSS declaration. |
| 636 | `            gap: 3rem;` | CSS declaration. |
| 637 | `            margin-bottom: 3rem;` | CSS declaration. |
| 638 | `        }` | CSS selector block ends. |
| 639 | `        ` |  |
| 640 | `        .footer-brand {` | CSS selector block begins. |
| 641 | `            display: flex;` | CSS declaration. |
| 642 | `            flex-direction: column;` | CSS declaration. |
| 643 | `        }` | CSS selector block ends. |
| 644 | `        ` |  |
| 645 | `        .footer-logo {` | CSS selector block begins. |
| 646 | `            display: flex;` | CSS declaration. |
| 647 | `            align-items: center;` | CSS declaration. |
| 648 | `            gap: 14px;` | CSS declaration. |
| 649 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 650 | `        }` | CSS selector block ends. |
| 651 | `        ` |  |
| 652 | `        .footer-description {` | CSS selector block begins. |
| 653 | `            opacity: 0.7;` | CSS declaration. |
| 654 | `            line-height: 1.6;` | CSS declaration. |
| 655 | `            margin-bottom: 2rem;` | CSS declaration. |
| 656 | `            font-weight: 300;` | CSS declaration. |
| 657 | `            max-width: 400px;` | CSS declaration. |
| 658 | `        }` | CSS selector block ends. |
| 659 | `        ` |  |
| 660 | `        .footer-heading {` | CSS selector block begins. |
| 661 | `            font-size: 1.1rem;` | CSS declaration. |
| 662 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 663 | `            color: var(--ivory);` | CSS declaration. |
| 664 | `            font-weight: 400;` | CSS declaration. |
| 665 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 666 | `        }` | CSS selector block ends. |
| 667 | `        ` |  |
| 668 | `        .footer-links {` | CSS selector block begins. |
| 669 | `            list-style: none;` | CSS declaration. |
| 670 | `        }` | CSS selector block ends. |
| 671 | `        ` |  |
| 672 | `        .footer-links li {` | CSS selector block begins. |
| 673 | `            margin-bottom: 0.75rem;` | CSS declaration. |
| 674 | `        }` | CSS selector block ends. |
| 675 | `        ` |  |
| 676 | `        .footer-links a {` | CSS selector block begins. |
| 677 | `            color: rgba(253, 252, 248, 0.7);` | CSS declaration. |
| 678 | `            text-decoration: none;` | CSS declaration. |
| 679 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 680 | `            font-weight: 300;` | CSS declaration. |
| 681 | `            letter-spacing: 0.01em;` | CSS declaration. |
| 682 | `            font-size: 0.95rem;` | CSS declaration. |
| 683 | `        }` | CSS selector block ends. |
| 684 | `        ` |  |
| 685 | `        .footer-links a:hover {` | CSS selector block begins. |
| 686 | `            color: var(--bronze);` | CSS declaration. |
| 687 | `        }` | CSS selector block ends. |
| 688 | `        ` |  |
| 689 | `        .footer-bottom {` | CSS selector block begins. |
| 690 | `            border-top: 1px solid rgba(253, 252, 248, 0.1);` | CSS declaration. |
| 691 | `            padding-top: 2rem;` | CSS declaration. |
| 692 | `            text-align: center;` | CSS declaration. |
| 693 | `            opacity: 0.6;` | CSS declaration. |
| 694 | `            font-size: 0.9rem;` | CSS declaration. |
| 695 | `            font-weight: 300;` | CSS declaration. |
| 696 | `        }` | CSS selector block ends. |
| 697 | `        ` |  |
| 698 | `        /* Enhanced Animations */` | Content/whitespace or standard markup. |
| 699 | `        .fade-in {` | CSS selector block begins. |
| 700 | `            opacity: 0;` | CSS declaration. |
| 701 | `            transform: translateY(40px);` | CSS declaration. |
| 702 | `            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 703 | `        }` | CSS selector block ends. |
| 704 | `        ` |  |
| 705 | `        .fade-in.visible {` | CSS selector block begins. |
| 706 | `            opacity: 1;` | CSS declaration. |
| 707 | `            transform: translateY(0);` | CSS declaration. |
| 708 | `        }` | CSS selector block ends. |
| 709 | `        ` |  |
| 710 | `        /* Enhanced Responsive Design */` | Content/whitespace or standard markup. |
| 711 | `        @media (max-width: 1200px) {` | Responsive breakpoint adjusting layout for smaller screens. |
| 712 | `            .mission-grid {` | CSS selector block begins. |
| 713 | `                grid-template-columns: repeat(2, 1fr);` | CSS declaration. |
| 714 | `            }` | CSS selector block ends. |
| 715 | `            ` |  |
| 716 | `            .values-grid {` | CSS selector block begins. |
| 717 | `                grid-template-columns: repeat(2, 1fr);` | CSS declaration. |
| 718 | `            }` | CSS selector block ends. |
| 719 | `            ` |  |
| 720 | `            .footer-content {` | CSS selector block begins. |
| 721 | `                grid-template-columns: 1fr 1fr;` | CSS declaration. |
| 722 | `            }` | CSS selector block ends. |
| 723 | `        }` | CSS selector block ends. |
| 724 | `        ` |  |
| 725 | `        @media (max-width: 768px) {` | Responsive breakpoint adjusting layout for smaller screens. |
| 726 | `            nav.desktop {` | CSS selector block begins. |
| 727 | `                display: none;` | CSS declaration. |
| 728 | `            }` | CSS selector block ends. |
| 729 | `            ` |  |
| 730 | `            .mobile-toggle {` | CSS selector block begins. |
| 731 | `                display: block;` | CSS declaration. |
| 732 | `            }` | CSS selector block ends. |
| 733 | `            ` |  |
| 734 | `            nav.mobile {` | CSS selector block begins. |
| 735 | `                display: block;` | CSS declaration. |
| 736 | `            }` | CSS selector block ends. |
| 737 | `            ` |  |
| 738 | `            .heritage-grid {` | CSS selector block begins. |
| 739 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 740 | `                gap: 3rem;` | CSS declaration. |
| 741 | `            }` | CSS selector block ends. |
| 742 | `            ` |  |
| 743 | `            .contact-grid {` | CSS selector block begins. |
| 744 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 745 | `                gap: 3rem;` | CSS declaration. |
| 746 | `            }` | CSS selector block ends. |
| 747 | `            ` |  |
| 748 | `            .mission-grid {` | CSS selector block begins. |
| 749 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 750 | `            }` | CSS selector block ends. |
| 751 | `            ` |  |
| 752 | `            .values-grid {` | CSS selector block begins. |
| 753 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 754 | `            }` | CSS selector block ends. |
| 755 | `            ` |  |
| 756 | `            .footer-content {` | CSS selector block begins. |
| 757 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 758 | `                gap: 2rem;` | CSS declaration. |
| 759 | `            }` | CSS selector block ends. |
| 760 | `            ` |  |
| 761 | `            .mission-section {` | CSS selector block begins. |
| 762 | `                padding: 3rem 2rem;` | CSS declaration. |
| 763 | `            }` | CSS selector block ends. |
| 764 | `            ` |  |
| 765 | `            .contact-info, .contact-form {` | CSS selector block begins. |
| 766 | `                padding: 2.5rem 2rem;` | CSS declaration. |
| 767 | `            }` | CSS selector block ends. |
| 768 | `            ` |  |
| 769 | `            .footer-brand {` | CSS selector block begins. |
| 770 | `                text-align: center;` | CSS declaration. |
| 771 | `                align-items: center;` | CSS declaration. |
| 772 | `            }` | CSS selector block ends. |
| 773 | `        }` | CSS selector block ends. |
| 774 | `        ` |  |
| 775 | `        @media (max-width: 480px) {` | Responsive breakpoint adjusting layout for smaller screens. |
| 776 | `            .btn {` | Button/CTA element styled as a pill with golden border. |
| 777 | `                padding: 1rem 2rem;` | CSS declaration. |
| 778 | `                width: 100%;` | CSS declaration. |
| 779 | `                justify-content: center;` | CSS declaration. |
| 780 | `            }` | CSS selector block ends. |
| 781 | `            ` |  |
| 782 | `            .value-card {` | CSS selector block begins. |
| 783 | `                padding: 2.5rem 2rem;` | CSS declaration. |
| 784 | `            }` | CSS selector block ends. |
| 785 | `        }` | CSS selector block ends. |
| 786 | `    </style>` | Inline CSS block ends. |
| 787 | `` |  |
| 788 | `` |  |
| 789 | `    <!-- Header -->` | Structural/semantic HTML element. |
| 790 | `    <header>` | Document head starts; metadata, fonts and styles live here. |
| 791 | `        <div class="container header-container">` | Structural/semantic HTML element. |
| 792 | `            <a href="/home" class="logo">` | Structural/semantic HTML element. |
| 793 | `                <div class="logo-icon">SL</div>` | Structural/semantic HTML element. |
| 794 | `                <div class="logo-text">Secret Linen</div>` | Structural/semantic HTML element. |
| 795 | `            </a>` | Structural/semantic HTML element. |
| 796 | `            ` |  |
| 797 | `            <!-- Desktop Navigation -->` | Structural/semantic HTML element. |
| 798 | `            <nav class="desktop">` | Navigation container (desktop/mobile menus, links). |
| 799 | `                <ul>` | Structural/semantic HTML element. |
| 800 | `                    <li><a href="/home">Home</a></li>` | Structural/semantic HTML element. |
| 801 | `                    <li><a href="/collections">Collections</a></li>` | Structural/semantic HTML element. |
| 802 | `                    <li><a href="/services">Services</a></li>` | Structural/semantic HTML element. |
| 803 | `                    <li><a href="#" class="nav-about active">About</a></li>` | Structural/semantic HTML element. |
| 804 | `                    <li><a href="#" class="nav-contact">Contact</a></li>` | Structural/semantic HTML element. |
| 805 | `                </ul>` | Structural/semantic HTML element. |
| 806 | `            </nav>` | Structural/semantic HTML element. |
| 807 | `            ` |  |
| 808 | `            <!-- Mobile Toggle -->` | Structural/semantic HTML element. |
| 809 | `            <button class="mobile-toggle">☰</button>` | Button/CTA element styled as a pill with golden border. |
| 810 | `            ` |  |
| 811 | `            <!-- Mobile Navigation -->` | Structural/semantic HTML element. |
| 812 | `            <nav class="mobile">` | Navigation container (desktop/mobile menus, links). |
| 813 | `                <ul>` | Structural/semantic HTML element. |
| 814 | `                    <li><a href="/home">Home</a></li>` | Structural/semantic HTML element. |
| 815 | `                    <li><a href="/collections">Collections</a></li>` | Structural/semantic HTML element. |
| 816 | `                    <li><a href="/services">Services</a></li>` | Structural/semantic HTML element. |
| 817 | `                    <li><a href="#" class="nav-about active">About</a></li>` | Structural/semantic HTML element. |
| 818 | `                    <li><a href="#" class="nav-contact">Contact</a></li>` | Structural/semantic HTML element. |
| 819 | `                </ul>` | Structural/semantic HTML element. |
| 820 | `            </nav>` | Structural/semantic HTML element. |
| 821 | `        </div>` | Structural/semantic HTML element. |
| 822 | `    </header>` | Structural/semantic HTML element. |
| 823 | `` |  |
| 824 | `    <!-- About Page -->` | Structural/semantic HTML element. |
| 825 | `    <div id="about-page" class="page-content active">` | Structural/semantic HTML element. |
| 826 | `        <!-- Page Header -->` | Structural/semantic HTML element. |
| 827 | `        <section class="page-header">` | Semantic section block improving structure and SEO. |
| 828 | `            <div class="container">` | Structural/semantic HTML element. |
| 829 | `                <span class="page-eyebrow">Our Story</span>` | Structural/semantic HTML element. |
| 830 | `                <h1>Heritage Woven with Purpose</h1>` | Primary page heading. |
| 831 | `                <p class="page-description">` | Paragraph text / supporting copy. |
| 832 | `                    Discover our journey and the values that guide every thread we create at Secret Linen.` | Content/whitespace or standard markup. |
| 833 | `                </p>` | Structural/semantic HTML element. |
| 834 | `            </div>` | Structural/semantic HTML element. |
| 835 | `        </section>` | Structural/semantic HTML element. |
| 836 | `` |  |
| 837 | `        <!-- Heritage Section -->` | Structural/semantic HTML element. |
| 838 | `        <section class="section">` | Semantic section block improving structure and SEO. |
| 839 | `            <div class="container">` | Structural/semantic HTML element. |
| 840 | `                <div class="heritage-grid">` | Grid layout container for responsive card/gallery alignment. |
| 841 | `                    <div class="heritage-image fade-in">` | Structural/semantic HTML element. |
| 842 | `                        <img src="/files/Linen Heritage.jpeg" alt="Secret Linen Heritage">` | Image element; ensure alt text for accessibility. |
| 843 | `                    </div>` | Structural/semantic HTML element. |
| 844 | `                    <div class="heritage-content fade-in">` | Structural/semantic HTML element. |
| 845 | `                        <span class="page-eyebrow">Since 2024</span>` | Structural/semantic HTML element. |
| 846 | `                        <h2>A Legacy Woven with Care</h2>` | Secondary section heading. |
| 847 | `                        <p>` | Paragraph text / supporting copy. |
| 848 | `                            At Secretlinen, we foster respect, trust, and confidence while embracing innovation, empowerment, and open feedback to inspire growth. Committed to collaboration, diversity, and accountability, we cultivate a supportive global environment, uniting teams to achieve shared success. Members of the Secretlinen team are passionate in all they do, working hard while having fun. </p> <p>` | Paragraph text / supporting copy. |
| 849 | `Working at Secretlinen is more than a job. It’s an opportunity to become a tastemaker in your own right: an ultimate expert, a style curator, a trusted advisor who lives and breathes the world of luxury. Here, you’ll cultivate your passion for design and luxury living, refine your cultural fluency and network, and build meaningful relationships that shape your own career journey and personal brand.` | Content/whitespace or standard markup. |
| 850 | `                        </p>` | Structural/semantic HTML element. |
| 851 | `                    </div>` | Structural/semantic HTML element. |
| 852 | `                </div>` | Structural/semantic HTML element. |
| 853 | `` |  |
| 854 | `                <div class="mission-section fade-in">` | Structural/semantic HTML element. |
| 855 | `                    <h3 style="text-align: center; margin-bottom: 3rem;">Our Commitment to Excellence</h3>` | Structural/semantic HTML element. |
| 856 | `                    <div class="mission-grid">` | Grid layout container for responsive card/gallery alignment. |
| 857 | `                        <div class="mission-item">` | Structural/semantic HTML element. |
| 858 | `                            <div class="mission-icon">🎯</div>` | Structural/semantic HTML element. |
| 859 | `                            <h4 class="mission-title">Quality First</h4>` | Structural/semantic HTML element. |
| 860 | `                            <p class="mission-description">Every piece meets our rigorous standards for durability, comfort, and beauty</p>` | Paragraph text / supporting copy. |
| 861 | `                        </div>` | Structural/semantic HTML element. |
| 862 | `                        <div class="mission-item">` | Structural/semantic HTML element. |
| 863 | `                            <div class="mission-icon">🌱</div>` | Structural/semantic HTML element. |
| 864 | `                            <h4 class="mission-title">Sustainable Practices</h4>` | Structural/semantic HTML element. |
| 865 | `                            <p class="mission-description">Natural fibers, eco-friendly dyes, and responsible manufacturing processes</p>` | Paragraph text / supporting copy. |
| 866 | `                        </div>` | Structural/semantic HTML element. |
| 867 | `                        <div class="mission-item">` | Structural/semantic HTML element. |
| 868 | `                            <div class="mission-icon">👨‍👩‍👧‍👦</div>` | Structural/semantic HTML element. |
| 869 | `                            <h4 class="mission-title">Family Values</h4>` | Structural/semantic HTML element. |
| 870 | `                            <p class="mission-description">Three generations of expertise and personal attention to every client</p>` | Paragraph text / supporting copy. |
| 871 | `                        </div>` | Structural/semantic HTML element. |
| 872 | `                        <div class="mission-item">` | Structural/semantic HTML element. |
| 873 | `                            <div class="mission-icon">⚡</div>` | Structural/semantic HTML element. |
| 874 | `                            <h4 class="mission-title">Innovation</h4>` | Structural/semantic HTML element. |
| 875 | `                            <p class="mission-description">Blending traditional techniques with modern technology and design</p>` | Paragraph text / supporting copy. |
| 876 | `                        </div>` | Structural/semantic HTML element. |
| 877 | `                    </div>` | Structural/semantic HTML element. |
| 878 | `                </div>` | Structural/semantic HTML element. |
| 879 | `` |  |
| 880 | `                <!-- Values Section -->` | Structural/semantic HTML element. |
| 881 | `                <div style="margin-top: 4rem;">` | Structural/semantic HTML element. |
| 882 | `                    <div class="heritage-content fade-in" style="text-align: center; max-width: 800px; margin: 0 auto 4rem;">` | Structural/semantic HTML element. |
| 883 | `                        <span class="page-eyebrow">Our Philosophy</span>` | Structural/semantic HTML element. |
| 884 | `                        <h2>WEAVING A RESPONSIBLE FUTURE</h2>` | Secondary section heading. |
| 885 | `                        <p>` | Paragraph text / supporting copy. |
| 886 | `                            At Secretlinen, we celebrate masterful craftsmanship, iconic Italian design and continuous innovation. We believe design has the power to transform. From how we dream and think creatively to how we interact with the world, design encapsulates a meaningful global conversation. As artisans who have mastered our craft, we are now dedicating resources to integrate sustainability and social responsibility into our design processes in the name of respect for our environment and in an effort to improve our global community. ` | Content/whitespace or standard markup. |
| 887 | `                        </p>` | Structural/semantic HTML element. |
| 888 | `                        <p> Secretlinen’s path forward is based on our belief that, together with our colleagues, our partners and our industry at-large, we can bring about meaningful change that will create a positive impact on our world and future generations.` | Paragraph text / supporting copy. |
| 889 | `                        </p>` | Structural/semantic HTML element. |
| 890 | `                    </div>` | Structural/semantic HTML element. |
| 891 | `` |  |
| 892 | `                    <div class="values-grid">` | Grid layout container for responsive card/gallery alignment. |
| 893 | `                        <div class="value-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 894 | `                            <div class="value-number">01</div>` | Structural/semantic HTML element. |
| 895 | `                            <h3 class="value-title">Craftsmanship</h3>` | Structural/semantic HTML element. |
| 896 | `                            <p class="value-description">` | Paragraph text / supporting copy. |
| 897 | `                             Years of textile expertise passed through generations. Every stitch tells a story of dedication and attention to detail that defines true luxury.` | Content/whitespace or standard markup. |
| 898 | `                            </p>` | Structural/semantic HTML element. |
| 899 | `                        </div>` | Structural/semantic HTML element. |
| 900 | `` |  |
| 901 | `                        <div class="value-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 902 | `                            <div class="value-number">02</div>` | Structural/semantic HTML element. |
| 903 | `                            <h3 class="value-title">Innovation</h3>` | Structural/semantic HTML element. |
| 904 | `                            <p class="value-description">` | Paragraph text / supporting copy. |
| 905 | `                                Embracing new techniques while honoring traditional methods. We continuously evolve to meet the changing needs of hospitality and luxury living.` | Content/whitespace or standard markup. |
| 906 | `                            </p>` | Structural/semantic HTML element. |
| 907 | `                        </div>` | Structural/semantic HTML element. |
| 908 | `` |  |
| 909 | `                        <div class="value-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 910 | `                            <div class="value-number">03</div>` | Structural/semantic HTML element. |
| 911 | `                            <h3 class="value-title">Sustainability</h3>` | Structural/semantic HTML element. |
| 912 | `                            <p class="value-description">` | Paragraph text / supporting copy. |
| 913 | `                                Natural fibers, OEKO-TEX® certified dyes, and mindful processes. We believe luxury should be responsible and enduring.` | Content/whitespace or standard markup. |
| 914 | `                            </p>` | Structural/semantic HTML element. |
| 915 | `                        </div>` | Structural/semantic HTML element. |
| 916 | `` |  |
| 917 | `                        <div class="value-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 918 | `                            <div class="value-number">04</div>` | Structural/semantic HTML element. |
| 919 | `                            <h3 class="value-title">Collaboration</h3>` | Structural/semantic HTML element. |
| 920 | `                            <p class="value-description">` | Paragraph text / supporting copy. |
| 921 | `                                Working closely with clients to create bespoke solutions. Your vision becomes our mission, and your success is our pride.` | Content/whitespace or standard markup. |
| 922 | `                            </p>` | Structural/semantic HTML element. |
| 923 | `                        </div>` | Structural/semantic HTML element. |
| 924 | `` |  |
| 925 | `                        <div class="value-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 926 | `                            <div class="value-number">05</div>` | Structural/semantic HTML element. |
| 927 | `                            <h3 class="value-title">Excellence</h3>` | Structural/semantic HTML element. |
| 928 | `                            <p class="value-description">` | Paragraph text / supporting copy. |
| 929 | `                                Never compromising on quality, from raw material selection to final inspection. Excellence is not an act, but a habit.` | Content/whitespace or standard markup. |
| 930 | `                            </p>` | Structural/semantic HTML element. |
| 931 | `                        </div>` | Structural/semantic HTML element. |
| 932 | `` |  |
| 933 | `                        <div class="value-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 934 | `                            <div class="value-number">06</div>` | Structural/semantic HTML element. |
| 935 | `                            <h3 class="value-title">Heritage</h3>` | Structural/semantic HTML element. |
| 936 | `                            <p class="value-description">` | Paragraph text / supporting copy. |
| 937 | `                                Preserving traditional techniques while building for the future. Our legacy is woven into every textile we create.` | Content/whitespace or standard markup. |
| 938 | `                            </p>` | Structural/semantic HTML element. |
| 939 | `                        </div>` | Structural/semantic HTML element. |
| 940 | `                    </div>` | Structural/semantic HTML element. |
| 941 | `                </div>` | Structural/semantic HTML element. |
| 942 | `            </div>` | Structural/semantic HTML element. |
| 943 | `        </section>` | Structural/semantic HTML element. |
| 944 | `    </div>` | Structural/semantic HTML element. |
| 945 | `` |  |
| 946 | `    <!-- Contact Page -->` | Structural/semantic HTML element. |
| 947 | `    <div id="contact-page" class="page-content">` | Structural/semantic HTML element. |
| 948 | `        <!-- Page Header -->` | Structural/semantic HTML element. |
| 949 | `        <section class="page-header">` | Semantic section block improving structure and SEO. |
| 950 | `            <div class="container">` | Structural/semantic HTML element. |
| 951 | `                <span class="page-eyebrow">Get In Touch</span>` | Structural/semantic HTML element. |
| 952 | `                <h1>Connect With Secret Linen</h1>` | Primary page heading. |
| 953 | `                <p class="page-description">` | Paragraph text / supporting copy. |
| 954 | `                    Ready to transform your space with luxury textiles? Reach out to our team for consultations, partnerships, or any inquiries.` | Content/whitespace or standard markup. |
| 955 | `                </p>` | Structural/semantic HTML element. |
| 956 | `            </div>` | Structural/semantic HTML element. |
| 957 | `        </section>` | Structural/semantic HTML element. |
| 958 | `` |  |
| 959 | `        <section class="section">` | Semantic section block improving structure and SEO. |
| 960 | `            <div class="container">` | Structural/semantic HTML element. |
| 961 | `                <div class="contact-grid">` | Grid layout container for responsive card/gallery alignment. |
| 962 | `                    <div class="contact-info fade-in">` | Structural/semantic HTML element. |
| 963 | `                        <h3 style="margin-bottom: 2rem;">Visit Our Studio</h3>` | Structural/semantic HTML element. |
| 964 | `                        ` |  |
| 965 | `                        <div class="contact-item">` | Structural/semantic HTML element. |
| 966 | `                            <div class="contact-icon">📍</div>` | Structural/semantic HTML element. |
| 967 | `                            <div class="contact-details">` | Structural/semantic HTML element. |
| 968 | `                                <h4>Secret Linen Studio</h4>` | Structural/semantic HTML element. |
| 969 | `                                <p>SECRETLINEN-ADAMBAKKAM</p>` | Paragraph text / supporting copy. |
| 970 | `                                <p>#59, 1st Floor, Balaji Nagar Main Road</p>` | Paragraph text / supporting copy. |
| 971 | `                                <p>Adambakkam, Chennai</p>` | Paragraph text / supporting copy. |
| 972 | `                                <p>Zipcode: 600088</p>` | Paragraph text / supporting copy. |
| 973 | `                            </div>` | Structural/semantic HTML element. |
| 974 | `                        </div>` | Structural/semantic HTML element. |
| 975 | `` |  |
| 976 | `                        <div class="contact-item">` | Structural/semantic HTML element. |
| 977 | `                            <div class="contact-icon">⏰</div>` | Structural/semantic HTML element. |
| 978 | `                            <div class="contact-details">` | Structural/semantic HTML element. |
| 979 | `                                <h4>Business Hours</h4>` | Structural/semantic HTML element. |
| 980 | `                                <p><strong>Monday - Saturday:</strong> 10:00 AM - 9:00 PM</p>` | Paragraph text / supporting copy. |
| 981 | `                                <p><strong>Sunday:</strong> 11:00 AM - 6:00 PM</p>` | Paragraph text / supporting copy. |
| 982 | `                            </div>` | Structural/semantic HTML element. |
| 983 | `                        </div>` | Structural/semantic HTML element. |
| 984 | `` |  |
| 985 | `                        <div class="contact-item">` | Structural/semantic HTML element. |
| 986 | `                            <div class="contact-icon">📞</div>` | Structural/semantic HTML element. |
| 987 | `                            <div class="contact-details">` | Structural/semantic HTML element. |
| 988 | `                                <h4>Contact Information</h4>` | Structural/semantic HTML element. |
| 989 | `                                <p>Phone: +91-9003555940</p>` | Paragraph text / supporting copy. |
| 990 | `                                <p>Email: secretlinenindia@gmail.com</p>` | Paragraph text / supporting copy. |
| 991 | `                            </div>` | Structural/semantic HTML element. |
| 992 | `                        </div>` | Structural/semantic HTML element. |
| 993 | `` |  |
| 994 | `                        <div class="contact-item">` | Structural/semantic HTML element. |
| 995 | `                            <div class="contact-icon">💼</div>` | Structural/semantic HTML element. |
| 996 | `                            <div class="contact-details">` | Structural/semantic HTML element. |
| 997 | `                                <h4>Business Inquiries</h4>` | Structural/semantic HTML element. |
| 998 | `                                <p>Hospitality Partnerships</p>` | Paragraph text / supporting copy. |
| 999 | `                                <p>Corporate Gifting Programs</p>` | Paragraph text / supporting copy. |
| 1000 | `                                <p>Customization Projects</p>` | Paragraph text / supporting copy. |
| 1001 | `                            </div>` | Structural/semantic HTML element. |
| 1002 | `                        </div>` | Structural/semantic HTML element. |
| 1003 | `` |  |
| 1004 | `                        <div style="margin-top: 2rem;">` | Structural/semantic HTML element. |
| 1005 | `                            <a href="tel:+919003555940" class="btn btn-primary" style="display: inline-flex; margin-right: 1rem;">` | Button/CTA element styled as a pill with golden border. |
| 1006 | `                                Call Now` | Content/whitespace or standard markup. |
| 1007 | `                            </a>` | Structural/semantic HTML element. |
| 1008 | `                            <a href="mailto:secretlinenindia@gmail.com" class="btn btn-light">` | Button/CTA element styled as a pill with golden border. |
| 1009 | `                                Email Us` | Content/whitespace or standard markup. |
| 1010 | `                            </a>` | Structural/semantic HTML element. |
| 1011 | `                        </div>` | Structural/semantic HTML element. |
| 1012 | `                    </div>` | Structural/semantic HTML element. |
| 1013 | `` |  |
| 1014 | `                    <div class="contact-form fade-in">` | Structural/semantic HTML element. |
| 1015 | `                        <h3 style="margin-bottom: 2rem;">Send Us a Message</h3>` | Structural/semantic HTML element. |
| 1016 | `                        <form id="contactForm">` | Structural/semantic HTML element. |
| 1017 | `                            <div class="form-group">` | Structural/semantic HTML element. |
| 1018 | `                                <label class="form-label" for="name">Full Name *</label>` | Structural/semantic HTML element. |
| 1019 | `                                <input type="text" id="name" class="form-input" required>` | Structural/semantic HTML element. |
| 1020 | `                            </div>` | Structural/semantic HTML element. |
| 1021 | `` |  |
| 1022 | `                            <div class="form-group">` | Structural/semantic HTML element. |
| 1023 | `                                <label class="form-label" for="email">Email Address *</label>` | Structural/semantic HTML element. |
| 1024 | `                                <input type="email" id="email" class="form-input" required>` | Structural/semantic HTML element. |
| 1025 | `                            </div>` | Structural/semantic HTML element. |
| 1026 | `` |  |
| 1027 | `                            <div class="form-group">` | Structural/semantic HTML element. |
| 1028 | `                                <label class="form-label" for="phone">Phone Number</label>` | Structural/semantic HTML element. |
| 1029 | `                                <input type="tel" id="phone" class="form-input">` | Structural/semantic HTML element. |
| 1030 | `                            </div>` | Structural/semantic HTML element. |
| 1031 | `` |  |
| 1032 | `                            <div class="form-group">` | Structural/semantic HTML element. |
| 1033 | `                                <label class="form-label" for="company">Company/Organization</label>` | Structural/semantic HTML element. |
| 1034 | `                                <input type="text" id="company" class="form-input">` | Structural/semantic HTML element. |
| 1035 | `                            </div>` | Structural/semantic HTML element. |
| 1036 | `` |  |
| 1037 | `                            <div class="form-group">` | Structural/semantic HTML element. |
| 1038 | `                                <label class="form-label" for="service">Service Interest</label>` | Structural/semantic HTML element. |
| 1039 | `                                <select id="service" class="form-select">` | Structural/semantic HTML element. |
| 1040 | `                                    <option value="">Select a service</option>` | Structural/semantic HTML element. |
| 1041 | `                                    <option value="corporate-gifting">Corporate Gifting</option>` | Structural/semantic HTML element. |
| 1042 | `                                    <option value="hospitality">Hospitality Partnership</option>` | Structural/semantic HTML element. |
| 1043 | `                                    <option value="customization">Customization</option>` | Structural/semantic HTML element. |
| 1044 | `                                    <option value="consultation">Consultation</option>` | Structural/semantic HTML element. |
| 1045 | `                                    <option value="general">General Inquiry</option>` | Structural/semantic HTML element. |
| 1046 | `                                </select>` | Structural/semantic HTML element. |
| 1047 | `                            </div>` | Structural/semantic HTML element. |
| 1048 | `` |  |
| 1049 | `                            <div class="form-group">` | Structural/semantic HTML element. |
| 1050 | `                                <label class="form-label" for="message">Message *</label>` | Structural/semantic HTML element. |
| 1051 | `                                <textarea id="message" class="form-textarea" required></textarea>` | Structural/semantic HTML element. |
| 1052 | `                            </div>` | Structural/semantic HTML element. |
| 1053 | `` |  |
| 1054 | `                            <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">` | Button/CTA element styled as a pill with golden border. |
| 1055 | `                                Send Message` | Content/whitespace or standard markup. |
| 1056 | `                            </button>` | Button/CTA element styled as a pill with golden border. |
| 1057 | `                        </form>` | Structural/semantic HTML element. |
| 1058 | `                    </div>` | Structural/semantic HTML element. |
| 1059 | `                </div>` | Structural/semantic HTML element. |
| 1060 | `` |  |
| 1061 | `                <div class="map-section fade-in">` | Structural/semantic HTML element. |
| 1062 | `                    <h3 style="text-align: center; margin-bottom: 2rem;">Find Our Studio</h3>` | Structural/semantic HTML element. |
| 1063 | `                    <div class="map-container">` | Structural/semantic HTML element. |
| 1064 | `                        <iframe ` | Structural/semantic HTML element. |
| 1065 | `                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.347476188198!2d80.199374!3d13.010595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679e96f7e7c3%3A0x7ddbe0b8b84e3c1e!2sBalaji%20Nagar%2C%20Adambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600088!5e0!3m2!1sen!2sin!4v1647854328746!5m2!1sen!2sin" ` | Content/whitespace or standard markup. |
| 1066 | `                            allowfullscreen="" ` | Content/whitespace or standard markup. |
| 1067 | `                            loading="lazy" ` | Content/whitespace or standard markup. |
| 1068 | `                            referrerpolicy="no-referrer-when-downgrade">` | Content/whitespace or standard markup. |
| 1069 | `                        </iframe>` | Structural/semantic HTML element. |
| 1070 | `                    </div>` | Structural/semantic HTML element. |
| 1071 | `                </div>` | Structural/semantic HTML element. |
| 1072 | `            </div>` | Structural/semantic HTML element. |
| 1073 | `        </section>` | Structural/semantic HTML element. |
| 1074 | `    </div>` | Structural/semantic HTML element. |
| 1075 | `` |  |
| 1076 | `    <!-- Footer -->` | Structural/semantic HTML element. |
| 1077 | `    <footer>` | Footer area with info/links, consistent across pages. |
| 1078 | `        <div class="container">` | Structural/semantic HTML element. |
| 1079 | `            <div class="footer-content">` | Footer area with info/links, consistent across pages. |
| 1080 | `                <div class="footer-brand">` | Footer area with info/links, consistent across pages. |
| 1081 | `                    <div class="footer-logo">` | Footer area with info/links, consistent across pages. |
| 1082 | `                        <div class="logo-icon">SL</div>` | Structural/semantic HTML element. |
| 1083 | `                        <div class="logo-text">Secret Linen</div>` | Structural/semantic HTML element. |
| 1084 | `                    </div>` | Structural/semantic HTML element. |
| 1085 | `                    <p class="footer-description">` | Footer area with info/links, consistent across pages. |
| 1086 | `                        Years of crafting exceptional textiles for hospitality and refined living. Quiet luxury, woven into life.` | Content/whitespace or standard markup. |
| 1087 | `                    </p>` | Structural/semantic HTML element. |
| 1088 | `                </div>` | Structural/semantic HTML element. |
| 1089 | `                ` |  |
| 1090 | `                <div class="footer-links-column">` | Footer area with info/links, consistent across pages. |
| 1091 | `                    <h4 class="footer-heading">Collections</h4>` | Footer area with info/links, consistent across pages. |
| 1092 | `                    <ul class="footer-links">` | Footer area with info/links, consistent across pages. |
| 1093 | `                        <li><a href="/collections#hotels">Hotels</a></li>` | Structural/semantic HTML element. |
| 1094 | `                        <li><a href="/collections#hospitals">Hospitals</a></li>` | Structural/semantic HTML element. |
| 1095 | `                        <li><a href="/collections#spas">Spas</a></li>` | Structural/semantic HTML element. |
| 1096 | `                        <li><a href="/collections#salons">Salons</a></li>` | Structural/semantic HTML element. |
| 1097 | `                    </ul>` | Structural/semantic HTML element. |
| 1098 | `                </div>` | Structural/semantic HTML element. |
| 1099 | `                ` |  |
| 1100 | `                <div class="footer-links-column">` | Footer area with info/links, consistent across pages. |
| 1101 | `                    <h4 class="footer-heading">Services</h4>` | Footer area with info/links, consistent across pages. |
| 1102 | `                    <ul class="footer-links">` | Footer area with info/links, consistent across pages. |
| 1103 | `                        <li><a href="/services#gifting">Corporate Gifting</a></li>` | Structural/semantic HTML element. |
| 1104 | `                        <li><a href="/services#hospitality">Hospitality</a></li>` | Structural/semantic HTML element. |
| 1105 | `                        <li><a href="/services#customization">Customization</a></li>` | Structural/semantic HTML element. |
| 1106 | `                        <li><a href="/services#consultation">Consultation</a></li>` | Structural/semantic HTML element. |
| 1107 | `                    </ul>` | Structural/semantic HTML element. |
| 1108 | `                </div>` | Structural/semantic HTML element. |
| 1109 | `                ` |  |
| 1110 | `                <div class="footer-links-column">` | Footer area with info/links, consistent across pages. |
| 1111 | `                    <h4 class="footer-heading">Company</h4>` | Footer area with info/links, consistent across pages. |
| 1112 | `                    <ul class="footer-links">` | Footer area with info/links, consistent across pages. |
| 1113 | `                        <li><a href="#" class="nav-about">Our Story</a></li>` | Structural/semantic HTML element. |
| 1114 | `                        <li><a href="#" class="nav-contact">Contact</a></li>` | Structural/semantic HTML element. |
| 1115 | `                        <li><a href="/services">Services</a></li>` | Structural/semantic HTML element. |
| 1116 | `                        <li><a href="/collections">Collections</a></li>` | Structural/semantic HTML element. |
| 1117 | `                    </ul>` | Structural/semantic HTML element. |
| 1118 | `                </div>` | Structural/semantic HTML element. |
| 1119 | `            </div>` | Structural/semantic HTML element. |
| 1120 | `            ` |  |
| 1121 | `            <div class="footer-bottom">` | Footer area with info/links, consistent across pages. |
| 1122 | `                <p>&copy; 2024 Secret Linen. All rights reserved. Crafted with care in India.</p>` | Paragraph text / supporting copy. |
| 1123 | `            </div>` | Structural/semantic HTML element. |
| 1124 | `        </div>` | Structural/semantic HTML element. |
| 1125 | `    </footer>` | Footer area with info/links, consistent across pages. |
| 1126 | `` |  |
| 1127 | `    <script>` | Inline script starts; behaviors/handlers live here. |
| 1128 | `        // Page Navigation` | Content/whitespace or standard markup. |
| 1129 | `        document.addEventListener('DOMContentLoaded', function() {` | CSS selector block begins. |
| 1130 | `            const aboutPage = document.getElementById('about-page');` | Content/whitespace or standard markup. |
| 1131 | `            const contactPage = document.getElementById('contact-page');` | Content/whitespace or standard markup. |
| 1132 | `            const aboutLinks = document.querySelectorAll('.nav-about');` | Content/whitespace or standard markup. |
| 1133 | `            const contactLinks = document.querySelectorAll('.nav-contact');` | Content/whitespace or standard markup. |
| 1134 | `            ` |  |
| 1135 | `            // Initialize with About page active` | Content/whitespace or standard markup. |
| 1136 | `            function showAboutPage() {` | CSS selector block begins. |
| 1137 | `                aboutPage.classList.add('active');` | Content/whitespace or standard markup. |
| 1138 | `                contactPage.classList.remove('active');` | Content/whitespace or standard markup. |
| 1139 | `                ` |  |
| 1140 | `                // Update navigation active states` | Content/whitespace or standard markup. |
| 1141 | `                aboutLinks.forEach(link => link.classList.add('active'));` | Content/whitespace or standard markup. |
| 1142 | `                contactLinks.forEach(link => link.classList.remove('active'));` | Content/whitespace or standard markup. |
| 1143 | `                ` |  |
| 1144 | `                // Update page title` | Content/whitespace or standard markup. |
| 1145 | `                document.title = 'About \| Secret Linen - Heritage & Legacy';` | Content/whitespace or standard markup. |
| 1146 | `                ` |  |
| 1147 | `                // Update URL without refresh` | Content/whitespace or standard markup. |
| 1148 | `                history.pushState({ page: 'about' }, '', 'about.html');` | Content/whitespace or standard markup. |
| 1149 | `            }` | CSS selector block ends. |
| 1150 | `            ` |  |
| 1151 | `            function showContactPage() {` | CSS selector block begins. |
| 1152 | `                contactPage.classList.add('active');` | Content/whitespace or standard markup. |
| 1153 | `                aboutPage.classList.remove('active');` | Content/whitespace or standard markup. |
| 1154 | `                ` |  |
| 1155 | `                // Update navigation active states` | Content/whitespace or standard markup. |
| 1156 | `                contactLinks.forEach(link => link.classList.add('active'));` | Content/whitespace or standard markup. |
| 1157 | `                aboutLinks.forEach(link => link.classList.remove('active'));` | Content/whitespace or standard markup. |
| 1158 | `                ` |  |
| 1159 | `                // Update page title` | Content/whitespace or standard markup. |
| 1160 | `                document.title = 'Contact \| Secret Linen - Get In Touch';` | Content/whitespace or standard markup. |
| 1161 | `                ` |  |
| 1162 | `                // Update URL without refresh` | Content/whitespace or standard markup. |
| 1163 | `                history.pushState({ page: 'contact' }, '', 'about.html#contact');` | Content/whitespace or standard markup. |
| 1164 | `            }` | CSS selector block ends. |
| 1165 | `            ` |  |
| 1166 | `            // Navigation event listeners` | Content/whitespace or standard markup. |
| 1167 | `            aboutLinks.forEach(link => {` | CSS selector block begins. |
| 1168 | `                link.addEventListener('click', function(e) {` | CSS selector block begins. |
| 1169 | `                    e.preventDefault();` | Content/whitespace or standard markup. |
| 1170 | `                    showAboutPage();` | Content/whitespace or standard markup. |
| 1171 | `                });` | Content/whitespace or standard markup. |
| 1172 | `            });` | Content/whitespace or standard markup. |
| 1173 | `            ` |  |
| 1174 | `            contactLinks.forEach(link => {` | CSS selector block begins. |
| 1175 | `                link.addEventListener('click', function(e) {` | CSS selector block begins. |
| 1176 | `                    e.preventDefault();` | Content/whitespace or standard markup. |
| 1177 | `                    showContactPage();` | Content/whitespace or standard markup. |
| 1178 | `                });` | Content/whitespace or standard markup. |
| 1179 | `            });` | Content/whitespace or standard markup. |
| 1180 | `            ` |  |
| 1181 | `            // Handle browser back/forward buttons` | Button/CTA element styled as a pill with golden border. |
| 1182 | `            window.addEventListener('popstate', function(event) {` | CSS selector block begins. |
| 1183 | `                if (event.state && event.state.page === 'contact') {` | CSS selector block begins. |
| 1184 | `                    showContactPage();` | Content/whitespace or standard markup. |
| 1185 | `                } else {` | CSS selector block begins. |
| 1186 | `                    showAboutPage();` | Content/whitespace or standard markup. |
| 1187 | `                }` | CSS selector block ends. |
| 1188 | `            });` | Content/whitespace or standard markup. |
| 1189 | `            ` |  |
| 1190 | `            // Scroll animations` | Motion/animation for subtle, premium interactions. |
| 1191 | `            const fadeElements = document.querySelectorAll('.fade-in');` | Content/whitespace or standard markup. |
| 1192 | `            ` |  |
| 1193 | `            const fadeObserver = new IntersectionObserver((entries) => {` | CSS selector block begins. |
| 1194 | `                entries.forEach(entry => {` | CSS selector block begins. |
| 1195 | `                    if (entry.isIntersecting) {` | CSS selector block begins. |
| 1196 | `                        entry.target.classList.add('visible');` | Content/whitespace or standard markup. |
| 1197 | `                    }` | CSS selector block ends. |
| 1198 | `                });` | Content/whitespace or standard markup. |
| 1199 | `            }, { threshold: 0.1 });` | Content/whitespace or standard markup. |
| 1200 | `            ` |  |
| 1201 | `            fadeElements.forEach(element => {` | CSS selector block begins. |
| 1202 | `                fadeObserver.observe(element);` | Content/whitespace or standard markup. |
| 1203 | `            });` | Content/whitespace or standard markup. |
| 1204 | `            ` |  |
| 1205 | `            // Mobile menu toggle` | Content/whitespace or standard markup. |
| 1206 | `            const mobileToggle = document.querySelector('.mobile-toggle');` | Content/whitespace or standard markup. |
| 1207 | `            const mobileNav = document.querySelector('nav.mobile');` | Content/whitespace or standard markup. |
| 1208 | `            ` |  |
| 1209 | `            mobileToggle.addEventListener('click', function() {` | CSS selector block begins. |
| 1210 | `                mobileNav.classList.toggle('active');` | Content/whitespace or standard markup. |
| 1211 | `            });` | Content/whitespace or standard markup. |
| 1212 | `            ` |  |
| 1213 | `            // Close mobile menu when clicking on a link` | Content/whitespace or standard markup. |
| 1214 | `            document.querySelectorAll('nav.mobile a').forEach(link => {` | CSS selector block begins. |
| 1215 | `                link.addEventListener('click', () => {` | CSS selector block begins. |
| 1216 | `                    mobileNav.classList.remove('active');` | Content/whitespace or standard markup. |
| 1217 | `                });` | Content/whitespace or standard markup. |
| 1218 | `            });` | Content/whitespace or standard markup. |
| 1219 | `            ` |  |
| 1220 | `            // Contact form submission` | Content/whitespace or standard markup. |
| 1221 | `            const contactForm = document.getElementById('contactForm');` | Content/whitespace or standard markup. |
| 1222 | `            if (contactForm) {` | CSS selector block begins. |
| 1223 | `                contactForm.addEventListener('submit', function(e) {` | CSS selector block begins. |
| 1224 | `                    e.preventDefault();` | Content/whitespace or standard markup. |
| 1225 | `                    ` |  |
| 1226 | `                    // Get form data` | Content/whitespace or standard markup. |
| 1227 | `                    const name = document.getElementById('name').value;` | Content/whitespace or standard markup. |
| 1228 | `                    const email = document.getElementById('email').value;` | Content/whitespace or standard markup. |
| 1229 | `                    ` |  |
| 1230 | `                    // Simple validation` | Content/whitespace or standard markup. |
| 1231 | `                    if (!name \|\| !email) {` | CSS selector block begins. |
| 1232 | `                        alert('Please fill in all required fields.');` | Content/whitespace or standard markup. |
| 1233 | `                        return;` | Content/whitespace or standard markup. |
| 1234 | `                    }` | CSS selector block ends. |
| 1235 | `                    ` |  |
| 1236 | `                    // Simulate form submission` | Content/whitespace or standard markup. |
| 1237 | `                    const submitBtn = this.querySelector('button[type="submit"]');` | Button/CTA element styled as a pill with golden border. |
| 1238 | `                    const originalText = submitBtn.textContent;` | Content/whitespace or standard markup. |
| 1239 | `                    ` |  |
| 1240 | `                    submitBtn.textContent = 'Sending...';` | Content/whitespace or standard markup. |
| 1241 | `                    submitBtn.disabled = true;` | Content/whitespace or standard markup. |
| 1242 | `                    ` |  |
| 1243 | `                    setTimeout(() => {` | CSS selector block begins. |
| 1244 | `                        alert('Thank you for your message! We will get back to you within 24 hours.');` | Content/whitespace or standard markup. |
| 1245 | `                        contactForm.reset();` | Content/whitespace or standard markup. |
| 1246 | `                        submitBtn.textContent = originalText;` | Content/whitespace or standard markup. |
| 1247 | `                        submitBtn.disabled = false;` | Content/whitespace or standard markup. |
| 1248 | `                    }, 1500);` | Content/whitespace or standard markup. |
| 1249 | `                });` | Content/whitespace or standard markup. |
| 1250 | `            }` | CSS selector block ends. |
| 1251 | `            ` |  |
| 1252 | `            // Header scroll effect` | Content/whitespace or standard markup. |
| 1253 | `            window.addEventListener('scroll', function() {` | CSS selector block begins. |
| 1254 | `                const header = document.querySelector('header');` | Content/whitespace or standard markup. |
| 1255 | `                if (window.scrollY > 100) {` | CSS selector block begins. |
| 1256 | `                    header.style.background = 'rgba(253, 252, 248, 0.98)';` | Content/whitespace or standard markup. |
| 1257 | `                    header.style.padding = '0.5rem 0';` | Content/whitespace or standard markup. |
| 1258 | `                } else {` | CSS selector block begins. |
| 1259 | `                    header.style.background = 'rgba(253, 252, 248, 0.95)';` | Content/whitespace or standard markup. |
| 1260 | `                    header.style.padding = '0';` | Content/whitespace or standard markup. |
| 1261 | `                }` | CSS selector block ends. |
| 1262 | `            });` | Content/whitespace or standard markup. |
| 1263 | `        });` | Content/whitespace or standard markup. |
| 1264 | `    </script>` | Inline script ends. |
| 1265 | `` |  |

---

## Services.html

<details><summary><strong>Show original source</strong></summary>

```html
<!DOCTYPE html>
<html lang="en">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services | Secret Linen - Bespoke Textile Solutions</title>
    <meta name="description" content="Secret Linen offers bespoke textile services including corporate gifting, hospitality partnerships, customization, and consultation services.">
    <meta name="keywords" content="bespoke textiles, corporate gifting, hospitality linen, custom embroidery, luxury linens">
    <meta name="author" content="Secret Linen">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    
    <style>
        :root {
            /* Enhanced Color Palette */
            --ivory: #fdfcf8;
            --linen: #f5f1e8;
            --stone: #e8e2d6;
            --clay: #d8cdbc;
            --charcoal: #1a1a1a;
            --bronze: #a8926e;
            --bronze-light: #c4b59a;
            --sage: #a8b8a5;
            
            /* Typography */
            --serif: 'Playfair Display', serif;
            --sans: 'Inter', sans-serif;
            
            /* Spacing */
            --section-padding: clamp(80px, 10vw, 160px);
            --container-width: min(1400px, 94%);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html {
            scroll-behavior: smooth;
        }
        
        body {
            font-family: var(--sans);
            color: var(--charcoal);
            background-color: var(--ivory);
            line-height: 1.7;
            overflow-x: hidden;
            font-weight: 300;
        }
        
        h1, h2, h3, h4 {
            font-family: var(--serif);
            font-weight: 400;
            line-height: 1.1;
            letter-spacing: -0.02em;
        }
        
        h1 {
            font-size: clamp(3rem, 6vw, 5rem);
            font-weight: 300;
        }
        
        h2 {
            font-size: clamp(2.25rem, 4.5vw, 3.5rem);
        }
        
        h3 {
            font-size: clamp(1.5rem, 3vw, 2.25rem);
        }
        
        .container {
            width: var(--container-width);
            margin: 0 auto;
        }
        
        .section {
            padding: var(--section-padding) 0;
        }
        
        /* Enhanced Header */
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(253, 252, 248, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(232, 226, 214, 0.3);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.25rem 0;
            position: relative;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 14px;
            text-decoration: none;
            color: var(--charcoal);
            transition: transform 0.3s ease;
            z-index: 1001;
        }
        
        .logo:hover {
            transform: translateX(-4px);
        }
        
        .logo-icon {
            width: 44px;
            height: 44px;
            background: linear-gradient(135deg, var(--bronze), var(--bronze-light));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--ivory);
            font-family: var(--serif);
            font-size: 16px;
            font-weight: 500;
        }
        
        .logo-text {
            font-family: var(--serif);
            font-size: 1.4rem;
            font-weight: 400;
            letter-spacing: 0.02em;
        }
        
        /* Desktop Navigation */
        nav.desktop {
            display: flex;
        }
        
        nav.desktop ul {
            display: flex;
            list-style: none;
            gap: 2.5rem;
        }
        
        nav.desktop a {
            text-decoration: none;
            color: var(--charcoal);
            font-weight: 400;
            font-size: 0.95rem;
            letter-spacing: 0.02em;
            position: relative;
            padding: 0.5rem 0;
            transition: all 0.3s ease;
        }
        
        nav.desktop a:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background: var(--bronze);
            transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        nav.desktop a:hover {
            color: var(--bronze);
        }
        
        nav.desktop a:hover:after {
            width: 100%;
        }
        
        /* Mobile Navigation */
        .mobile-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--charcoal);
            transition: transform 0.3s ease;
            z-index: 1001;
            padding: 0.5rem;
        }
        
        .mobile-toggle:hover {
            transform: rotate(90deg);
        }
        
        nav.mobile {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(253, 252, 248, 0.98);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--stone);
            padding: 2rem 0;
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        nav.mobile.active {
            transform: translateY(0);
            opacity: 1;
        }
        
        nav.mobile ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        nav.mobile a {
            text-decoration: none;
            color: var(--charcoal);
            font-weight: 400;
            font-size: 1.1rem;
            padding: 0.75rem 0;
            display: block;
            transition: all 0.3s ease;
            border-bottom: 1px solid transparent;
        }
        
        nav.mobile a:hover {
            color: var(--bronze);
            border-bottom-color: var(--bronze);
        }
        
        /* Page Header */
        .page-header {
            padding: 160px 0 80px;
            background: linear-gradient(135deg, var(--ivory) 0%, var(--linen) 100%);
            text-align: center;
        }
        
        .page-eyebrow {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            color: var(--bronze);
            margin-bottom: 1.5rem;
            display: block;
            font-weight: 400;
        }
        
        .page-description {
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto;
            color: #555;
            font-weight: 300;
        }
        
        /* Service Navigation */
        .service-nav {
            position: sticky;
            top: 80px;
            background: var(--ivory);
            border-bottom: 1px solid var(--stone);
            z-index: 100;
        }
        
        .service-nav-container {
            display: flex;
            justify-content: center;
            gap: 3rem;
            padding: 2rem 0;
        }
        
        .service-link {
            text-decoration: none;
            color: var(--charcoal);
            font-weight: 400;
            padding: 0.75rem 1.5rem;
            transition: all 0.3s ease;
            position: relative;
            font-size: 0.95rem;
            letter-spacing: 0.02em;
        }
        
        .service-link.active {
            color: var(--bronze);
        }
        
        .service-link.active:after {
            content: '';
            position: absolute;
            bottom: -2rem;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 4px;
            background: var(--bronze);
            border-radius: 50%;
        }
        
        .service-link:hover {
            color: var(--bronze);
        }
        
        /* Service Sections */
        .service-section {
            scroll-margin-top: 140px;
        }
        
        .service-header {
            margin-bottom: 4rem;
        }
        
        .service-title {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }
        
        .service-icon {
            width: 70px;
            height: 70px;
            background: var(--bronze);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--ivory);
            font-size: 1.75rem;
        }
        
        .service-description {
            font-size: 1.2rem;
            color: #555;
            max-width: 700px;
            font-weight: 300;
            line-height: 1.6;
        }
        
        /* Service Features */
        .service-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2.5rem;
            margin-bottom: 5rem;
        }
        
        .feature-card {
            background: var(--ivory);
            border-radius: 0;
            padding: 3rem 2.5rem;
            border: 1px solid var(--stone);
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            overflow: hidden;
        }
        
        .feature-card:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: var(--bronze);
            transition: left 0.6s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-8px);
            border-color: var(--bronze);
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        
        .feature-card:hover:before {
            left: 0;
        }
        
        .feature-icon {
            width: 60px;
            height: 60px;
            background: var(--linen);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            color: var(--bronze);
            font-size: 1.5rem;
        }
        
        .feature-title {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            font-weight: 400;
        }
        
        .feature-description {
            color: #666;
            font-size: 1rem;
            line-height: 1.6;
            font-weight: 300;
        }
        
        /* Process Section */
        .process-section {
            background: var(--ivory);
            border-radius: 0;
            padding: 4rem 3rem;
            margin-top: 4rem;
            border: 1px solid var(--stone);
        }
        
        .process-title {
            text-align: center;
            margin-bottom: 4rem;
        }
        
        .process-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
        }
        
        .process-step {
            text-align: center;
            position: relative;
        }
        
        .step-number {
            width: 50px;
            height: 50px;
            background: var(--bronze);
            color: var(--ivory);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            font-weight: 500;
            font-size: 1.2rem;
        }
        
        .step-title {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            font-weight: 400;
        }
        
        .step-description {
            color: #666;
            font-size: 0.95rem;
            line-height: 1.5;
            font-weight: 300;
        }
        
        /* Case Studies */
        .case-studies {
            margin-top: 5rem;
        }
        
        .case-studies-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2.5rem;
        }
        
        .case-study {
            background: var(--ivory);
            border-radius: 0;
            overflow: hidden;
            border: 1px solid var(--stone);
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .case-study:hover {
            transform: translateY(-8px);
            border-color: var(--bronze);
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        
        .case-study-image {
            height: 220px;
            overflow: hidden;
        }
        
        .case-study-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .case-study:hover .case-study-image img {
            transform: scale(1.08);
        }
        
        .case-study-content {
            padding: 2.5rem;
        }
        
        .case-study-title {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            font-weight: 400;
        }
        
        .case-study-client {
            color: var(--bronze);
            font-weight: 500;
            margin-bottom: 1rem;
            display: block;
            font-size: 0.95rem;
        }
        
        .case-study-description {
            color: #666;
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
            line-height: 1.5;
            font-weight: 300;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            padding: 1rem 2rem;
            text-decoration: none;
            border-radius: 0;
            font-weight: 400;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border: 1px solid transparent;
            font-size: 0.95rem;
            letter-spacing: 0.02em;
            position: relative;
            overflow: hidden;
        }
        
        .btn:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.6s ease;
        }
        
        .btn:hover:before {
            left: 100%;
        }
        
        .btn-primary {
            background: var(--charcoal);
            color: var(--ivory);
            border-color: var(--charcoal);
        }
        
        .btn-primary:hover {
            background: var(--bronze);
            color: var(--ivory);
            border-color: var(--bronze);
            transform: translateY(-2px);
        }
        
        /* CTA Section */
        .cta-section {
            background: linear-gradient(135deg, var(--charcoal) 0%, #2a2a2a 100%);
            color: var(--ivory);
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .cta-section::before {
            content: '';
            position: absolute;
            top: -100px;
            right: -100px;
            width: 300px;
            height: 300px;
            background: var(--bronze);
            opacity: 0.05;
            border-radius: 50%;
        }
        
        .cta-section h2 {
            color: var(--ivory);
            margin-bottom: 1.5rem;
        }
        
        .cta-section p {
            font-size: 1.2rem;
            margin-bottom: 3rem;
            opacity: 0.9;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            font-weight: 300;
            line-height: 1.6;
        }
        
        .btn-light {
            background: var(--ivory);
            color: var(--charcoal);
            border-color: var(--ivory);
        }
        
        .btn-light:hover {
            background: var(--bronze);
            color: var(--ivory);
            border-color: var(--bronze);
        }
        
        /* Enhanced Footer */
        footer {
            background: var(--charcoal);
            color: var(--ivory);
            padding: 4rem 0 2rem;
            position: relative;
        }
        
        footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--bronze), transparent);
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 3rem;
            margin-bottom: 3rem;
        }
        
        .footer-brand {
            display: flex;
            flex-direction: column;
        }
        
        .footer-logo {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 1.5rem;
        }
        
        .footer-description {
            opacity: 0.7;
            line-height: 1.6;
            margin-bottom: 2rem;
            font-weight: 300;
            max-width: 400px;
        }
        
        .footer-heading {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            color: var(--ivory);
            font-weight: 400;
            letter-spacing: 0.02em;
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 0.75rem;
        }
        
        .footer-links a {
            color: rgba(253, 252, 248, 0.7);
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: 300;
            letter-spacing: 0.01em;
            font-size: 0.95rem;
        }
        
        .footer-links a:hover {
            color: var(--bronze);
        }
        
        .footer-contact {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            color: rgba(253, 252, 248, 0.7);
            font-size: 0.95rem;
        }
        
        .contact-item strong {
            color: var(--ivory);
            font-weight: 500;
        }
        
        .footer-bottom {
            border-top: 1px solid rgba(253, 252, 248, 0.1);
            padding-top: 2rem;
            text-align: center;
            opacity: 0.6;
            font-size: 0.9rem;
            font-weight: 300;
        }
        
        /* Enhanced Animations */
        .fade-in {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Enhanced Responsive Design */
        @media (max-width: 1200px) {
            .service-features {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .process-steps {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .case-studies-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .footer-content {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        @media (max-width: 768px) {
            nav.desktop {
                display: none;
            }
            
            .mobile-toggle {
                display: block;
            }
            
            nav.mobile {
                display: block;
            }
            
            .service-nav-container {
                flex-wrap: wrap;
                gap: 1.5rem;
            }
            
            .service-features {
                grid-template-columns: 1fr;
            }
            
            .process-steps {
                grid-template-columns: 1fr;
            }
            
            .case-studies-grid {
                grid-template-columns: 1fr;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .service-link.active:after {
                bottom: -1.5rem;
            }
            
            .process-section {
                padding: 3rem 2rem;
            }
            
            .footer-brand {
                text-align: center;
                align-items: center;
            }
        }
        
        @media (max-width: 480px) {
            .btn {
                padding: 1rem 2rem;
                width: 100%;
                justify-content: center;
            }
            
            .feature-card {
                padding: 2.5rem 2rem;
            }
            
            .case-study-content {
                padding: 2rem;
            }
        }
    </style>


    <!-- Header -->
    <header>
        <div class="container header-container">
            <a href="/home" class="logo">
                <div class="logo-icon">SL</div>
                <div class="logo-text">Secret Linen</div>
            </a>
            
            <!-- Desktop Navigation -->
            <nav class="desktop">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/collections">Collections</a></li>
                    <li><a href="/services" class="active">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/about#contact">Contact</a></li>
                </ul>
            </nav>
            
            <!-- Mobile Toggle -->
            <button class="mobile-toggle">☰</button>
            
            <!-- Mobile Navigation -->
            <nav class="mobile">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/collections">Collections</a></li>
                    <li><a href="/services" class="active">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/about#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <span class="page-eyebrow">Our Services</span>
            <h1>Bespoke Textile Solutions</h1>
            <p class="page-description">
                Tailored programs for hospitality, corporate gifting, and custom requirements. Experience the Secret Linen difference with our comprehensive service offerings.
            </p>
        </div>
    </section>

    <!-- Service Navigation -->
    <nav class="service-nav">
        <div class="container service-nav-container">
            <a href="#gifting" class="service-link active">Corporate Gifting</a>
            <a href="#hospitality" class="service-link">Hospitality</a>
            <a href="#customization" class="service-link">Customization</a>
            <a href="#consultation" class="service-link">Consultation</a>
        </div>
    </nav>

    <!-- Corporate Gifting Section -->
    <section id="gifting" class="section service-section">
        <div class="container">
            <div class="service-header">
                <div class="service-title">
                    <div class="service-icon">🎁</div>
                    <h2>Corporate Gifting</h2>
                </div>
                <p class="service-description">
                    Elevate every gesture with timeless Indian luxury. Turn thoughtful corporate gifts into lasting impressions with our bespoke linen collections.
                </p>
            </div>

            <div class="service-features">
                <div class="feature-card fade-in">
                    <div class="feature-icon">🎨</div>
                    <h3 class="feature-title">Signature Branding</h3>
                    <p class="feature-description">Custom monograms, brand colors, and personalized packaging that reflects your corporate identity and values.</p>
                </div>

                <div class="feature-card fade-in">
                    <div class="feature-icon">📦</div>
                    <h3 class="feature-title">Bulk Programs</h3>
                    <p class="feature-description">Scalable solutions for large corporate orders with consistent quality and timely delivery across multiple locations.</p>
                </div>

                <div class="feature-card fade-in">
                    <div class="feature-icon">💝</div>
                    <h3 class="feature-title">Luxury Packaging</h3>
                    <p class="feature-description">Elegant gift boxes, personalized notes, and premium presentation that makes every gift memorable.</p>
                </div>

                <div class="feature-card fade-in">
                    <div class="feature-icon">🔄</div>
                    <h3 class="feature-title">On-Demand Service</h3>
                    <p class="feature-description">Flexible ordering and quick turnaround for corporate events, client appreciation, and employee recognition programs.</p>
                </div>
            </div>

            <div class="process-section fade-in">
                <h3 class="process-title">Our Gifting Process</h3>
                <div class="process-steps">
                    <div class="process-step">
                        <div class="step-number">1</div>
                        <h4 class="step-title">Consultation</h4>
                        <p class="step-description">Understand your gifting objectives and brand requirements</p>
                    </div>
                    <div class="process-step">
                        <div class="step-number">2</div>
                        <h4 class="step-title">Customization</h4>
                        <p class="step-description">Design bespoke solutions with branding and personalization</p>
                    </div>
                    <div class="process-step">
                        <div class="step-number">3</div>
                        <h4 class="step-title">Production</h4>
                        <p class="step-description">Craft your gifts with premium materials and attention to detail</p>
                    </div>
                    <div class="process-step">
                        <div class="step-number">4</div>
                        <h4 class="step-title">Delivery</h4>
                        <p class="step-description">Coordinate seamless delivery with premium packaging</p>
                    </div>
                </div>
            </div>

            <div class="case-studies">
                <h3 style="text-align: center; margin-bottom: 3rem;">Success Stories</h3>
                <div class="case-studies-grid">
                    <div class="case-study fade-in">
                        <div class="case-study-image">
                            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80" alt="Corporate Gifting">
                        </div>
                        <div class="case-study-content">
                            <h4 class="case-study-title">Executive Welcome Kits</h4>
                            <span class="case-study-client">Fortune 500 Technology Company</span>
                            <p class="case-study-description">Custom linen robes and towels for executive onboarding packages across 12 countries.</p>
                        </div>
                    </div>

                    <div class="case-study fade-in">
                        <div class="case-study-image">
                            <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=600&q=80" alt="Client Appreciation">
                        </div>
                        <div class="case-study-content">
                            <h4 class="case-study-title">Client Appreciation</h4>
                            <span class="case-study-client">Premium Financial Services Firm</span>
                            <p class="case-study-description">Bespoke linen gift sets for top clients, featuring custom embroidery and luxury packaging.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Hospitality Partnerships Section -->
    <section id="hospitality" class="section service-section">
        <div class="container">
            <div class="service-header">
                <div class="service-title">
                    <div class="service-icon">🏨</div>
                    <h2>Hospitality Partnerships</h2>
                </div>
                <p class="service-description">
                    End-to-end linen programs for hotels, resorts, hospitals, and luxury accommodations. Partner with us for consistent quality and operational excellence.
                </p>
            </div>

            <div class="service-features">
                <div class="feature-card fade-in">
                    <div class="feature-icon">📊</div>
                    <h3 class="feature-title">Program Management</h3>
                    <p class="feature-description">Comprehensive linen programs with inventory management, replacement cycles, and quality control systems.</p>
                </div>

                <div class="feature-card fade-in">
                    <div class="feature-icon">⚡</div>
                    <h3 class="feature-title">Rapid Response</h3>
                    <p class="feature-description">Quick turnaround for replacements and emergency orders to maintain your operational standards.</p>
                </div>

                <div class="feature-card fade-in">
                    <div class="feature-icon">🎯</div>
                    <h3 class="feature-title">Brand Alignment</h3>
                    <p class="feature-description">Textiles that reflect your brand identity, from luxury resorts to medical facilities and wellness centers.</p>
                </div>

                <div class="feature-card fade-in">
                    <div class="feature-icon">📈</div>
                    <h3 class="feature-title">Performance Analytics</h3>
                    <p class="feature-description">Data-driven insights on linen performance, usage patterns, and optimization opportunities.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Customization Section -->
    <section id="customization" class="section service-section">
        <div class="container">
            <div class="service-header">
                <div class="service-title">
                    <div class="service-icon">✂️</div>
                    <h2>Customization Services</h2>
                </div>
                <p class="service-description">
                    Bespoke designs, embroidery, and custom sizing for unique requirements. Transform your vision into exceptional textile solutions.
                </p>
            </div>

            <div class="service-features">
                <div class="feature-card fade-in">
                    <div class="feature-icon">🧵</div>
                    <h3 class="feature-title">Custom Embroidery</h3>
                    <p class="feature-description">Precision embroidery with your logos, monograms, or custom designs on any textile product.</p>
                </div>

                <div class="feature-card fade-in">
                    <div class="feature-icon">🎨</div>
                    <h3 class="feature-title">Color Matching</h3>
                    <p class="feature-description">Exact color matching to your brand palette or specific design requirements.</p>
                </div>

                <div class="feature-card fade-in">
                    <div class="feature-icon">📏</div>
                    <h3 class="feature-title">Custom Sizing</h3>
                    <p class="feature-description">Bespoke dimensions and specifications tailored to your unique space and requirements.</p>
                </div>

                <div class="feature-card fade-in">
                    <div class="feature-icon">🔧</div>
                    <h3 class="feature-title">Technical Solutions</h3>
                    <p class="feature-description">Specialized finishes, treatments, and fabric modifications for specific applications.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Consultation Section -->
    <section id="consultation" class="section service-section">
        <div class="container">
            <div class="service-header">
                <div class="service-title">
                    <div class="service-icon">💬</div>
                    <h2>Professional Consultation</h2>
                </div>
                <p class="service-description">
                    Expert guidance on textile selection, space planning, and operational optimization from our experienced team.
                </p>
            </div>

            <div class="service-features">
                <div class="feature-card fade-in">
                    <div class="feature-icon">🛏️</div>
                    <h3 class="feature-title">Sleep Sanctuary Design</h3>
                    <p class="feature-description">Create optimal sleep environments with the right textile combinations for comfort and aesthetics.</p>
                </div>

                <div class="feature-card fade-in">
                    <div class="feature-icon">🏢</div>
                    <h3 class="feature-title">Space Planning</h3>
                    <p class="feature-description">Strategic textile selection and placement for hospitality spaces and commercial environments.</p>
                </div>

                <div class="feature-card fade-in">
                    <div class="feature-icon">⚙️</div>
                    <h3 class="feature-title">Operational Efficiency</h3>
                    <p class="feature-description">Optimize your linen operations for cost efficiency, durability, and guest satisfaction.</p>
                </div>

                <div class="feature-card fade-in">
                    <div class="feature-icon">📋</div>
                    <h3 class="feature-title">Quality Audits</h3>
                    <p class="feature-description">Comprehensive assessment of your current textile program with recommendations for improvement.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
        <div class="container">
            <h2>Ready to Transform Your Textile Experience?</h2>
            <p>Partner with Secret Linen for bespoke solutions that elevate your space and impress your guests. Our experts are ready to understand your unique requirements.</p>
            <a href="/about#contact" class="btn btn-light">Schedule Your Consultation</a>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <div class="logo-icon">SL</div>
                        <div class="logo-text">Secret Linen</div>
                    </div>
                    <p class="footer-description">
                        Crafting exceptional textile experiences through bespoke solutions, premium materials, and timeless Indian craftsmanship.
                    </p>
                    <div class="footer-contact">
                        <div class="contact-item">
                            <strong>Email:</strong> contact@secretlinen.com
                        </div>
                        <div class="contact-item">
                            <strong>Phone:</strong> +1 (555) 123-4567
                        </div>
                        <div class="contact-item">
                            <strong>Address:</strong> 123 Textile District, Mumbai, India
                        </div>
                    </div>
                </div>
                
                <div class="footer-links">
                    <h4 class="footer-heading">Quick Links</h4>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/collections">Collections</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/about">Our Story</a></li>
                        <li><a href="/about#contact">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    <h4 class="footer-heading">Services</h4>
                    <ul>
                        <li><a href="#gifting">Corporate Gifting</a></li>
                        <li><a href="#hospitality">Hospitality</a></li>
                        <li><a href="#customization">Customization</a></li>
                        <li><a href="#consultation">Consultation</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2023 Secret Linen. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile navigation toggle
        document.querySelector('.mobile-toggle').addEventListener('click', function() {
            document.querySelector('nav.mobile').classList.toggle('active');
        });

        // Service navigation highlighting
        const serviceLinks = document.querySelectorAll('.service-link');
        const serviceSections = document.querySelectorAll('.service-section');

        // Intersection Observer for service navigation
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    serviceLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${entry.target.id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        serviceSections.forEach(section => {
            observer.observe(section);
        });

        // Scroll animation for fade-in elements
        const fadeElements = document.querySelectorAll('.fade-in');

        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        fadeElements.forEach(element => {
            fadeObserver.observe(element);
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('nav.mobile a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('nav.mobile').classList.remove('active');
            });
        });
    </script>


```
</details>

| Line | Code | Comment |
|---:|---|---|
| 1 | `<!DOCTYPE html>` | Declares HTML5 document type for standards-compliant rendering. |
| 2 | `<html lang="en">` | Root element; `lang` attribute supports accessibility and SEO. |
| 3 | `` |  |
| 4 | `    <meta charset="UTF-8">` | Sets character encoding to UTF‑8. |
| 5 | `    <meta name="viewport" content="width=device-width, initial-scale=1.0">` | Configures responsive viewport for mobile scaling. |
| 6 | `    <title>Services \| Secret Linen - Bespoke Textile Solutions</title>` | Defines the browser tab title and helps SEO. |
| 7 | `    <meta name="description" content="Secret Linen offers bespoke textile services including corporate gifting, hospitality partnerships, customization, and consultation services.">` | Structural/semantic HTML element. |
| 8 | `    <meta name="keywords" content="bespoke textiles, corporate gifting, hospitality linen, custom embroidery, luxury linens">` | Structural/semantic HTML element. |
| 9 | `    <meta name="author" content="Secret Linen">` | Structural/semantic HTML element. |
| 10 | `    ` |  |
| 11 | `    <!-- Fonts -->` | Structural/semantic HTML element. |
| 12 | `    <link rel="preconnect" href="https://fonts.googleapis.com">` | Hints the browser to preconnect to a domain for faster font loading. |
| 13 | `    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` | Hints the browser to preconnect to a domain for faster font loading. |
| 14 | `    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">` | Loads Google Fonts stylesheet for premium typography. |
| 15 | `    ` |  |
| 16 | `    <style>` | Inline CSS block begins. |
| 17 | `        :root {` | CSS selector block begins. |
| 18 | `            /* Enhanced Color Palette */` | Content/whitespace or standard markup. |
| 19 | `            --ivory: #fdfcf8;` | CSS custom property (design token) for consistent theming. |
| 20 | `            --linen: #f5f1e8;` | CSS custom property (design token) for consistent theming. |
| 21 | `            --stone: #e8e2d6;` | CSS custom property (design token) for consistent theming. |
| 22 | `            --clay: #d8cdbc;` | CSS custom property (design token) for consistent theming. |
| 23 | `            --charcoal: #1a1a1a;` | CSS custom property (design token) for consistent theming. |
| 24 | `            --bronze: #a8926e;` | CSS custom property (design token) for consistent theming. |
| 25 | `            --bronze-light: #c4b59a;` | CSS custom property (design token) for consistent theming. |
| 26 | `            --sage: #a8b8a5;` | CSS custom property (design token) for consistent theming. |
| 27 | `            ` |  |
| 28 | `            /* Typography */` | Content/whitespace or standard markup. |
| 29 | `            --serif: 'Playfair Display', serif;` | CSS custom property (design token) for consistent theming. |
| 30 | `            --sans: 'Inter', sans-serif;` | CSS custom property (design token) for consistent theming. |
| 31 | `            ` |  |
| 32 | `            /* Spacing */` | Content/whitespace or standard markup. |
| 33 | `            --section-padding: clamp(80px, 10vw, 160px);` | CSS custom property (design token) for consistent theming. |
| 34 | `            --container-width: min(1400px, 94%);` | CSS custom property (design token) for consistent theming. |
| 35 | `        }` | CSS selector block ends. |
| 36 | `        ` |  |
| 37 | `        * {` | CSS selector block begins. |
| 38 | `            margin: 0;` | CSS declaration. |
| 39 | `            padding: 0;` | CSS declaration. |
| 40 | `            box-sizing: border-box;` | CSS declaration. |
| 41 | `        }` | CSS selector block ends. |
| 42 | `        ` |  |
| 43 | `        html {` | CSS selector block begins. |
| 44 | `            scroll-behavior: smooth;` | Smooth scroll between in‑page anchors. |
| 45 | `        }` | CSS selector block ends. |
| 46 | `        ` |  |
| 47 | `        body {` | CSS selector block begins. |
| 48 | `            font-family: var(--sans);` | CSS declaration. |
| 49 | `            color: var(--charcoal);` | CSS declaration. |
| 50 | `            background-color: var(--ivory);` | CSS declaration. |
| 51 | `            line-height: 1.7;` | CSS declaration. |
| 52 | `            overflow-x: hidden;` | CSS declaration. |
| 53 | `            font-weight: 300;` | CSS declaration. |
| 54 | `        }` | CSS selector block ends. |
| 55 | `        ` |  |
| 56 | `        h1, h2, h3, h4 {` | CSS selector block begins. |
| 57 | `            font-family: var(--serif);` | CSS declaration. |
| 58 | `            font-weight: 400;` | CSS declaration. |
| 59 | `            line-height: 1.1;` | CSS declaration. |
| 60 | `            letter-spacing: -0.02em;` | CSS declaration. |
| 61 | `        }` | CSS selector block ends. |
| 62 | `        ` |  |
| 63 | `        h1 {` | CSS selector block begins. |
| 64 | `            font-size: clamp(3rem, 6vw, 5rem);` | CSS declaration. |
| 65 | `            font-weight: 300;` | CSS declaration. |
| 66 | `        }` | CSS selector block ends. |
| 67 | `        ` |  |
| 68 | `        h2 {` | CSS selector block begins. |
| 69 | `            font-size: clamp(2.25rem, 4.5vw, 3.5rem);` | CSS declaration. |
| 70 | `        }` | CSS selector block ends. |
| 71 | `        ` |  |
| 72 | `        h3 {` | CSS selector block begins. |
| 73 | `            font-size: clamp(1.5rem, 3vw, 2.25rem);` | CSS declaration. |
| 74 | `        }` | CSS selector block ends. |
| 75 | `        ` |  |
| 76 | `        .container {` | CSS selector block begins. |
| 77 | `            width: var(--container-width);` | CSS declaration. |
| 78 | `            margin: 0 auto;` | CSS declaration. |
| 79 | `        }` | CSS selector block ends. |
| 80 | `        ` |  |
| 81 | `        .section {` | CSS selector block begins. |
| 82 | `            padding: var(--section-padding) 0;` | CSS declaration. |
| 83 | `        }` | CSS selector block ends. |
| 84 | `        ` |  |
| 85 | `        /* Enhanced Header */` | Content/whitespace or standard markup. |
| 86 | `        header {` | CSS selector block begins. |
| 87 | `            position: fixed;` | CSS declaration. |
| 88 | `            top: 0;` | CSS declaration. |
| 89 | `            left: 0;` | CSS declaration. |
| 90 | `            width: 100%;` | CSS declaration. |
| 91 | `            z-index: 1000;` | Layer stacking control to keep nav/modals above content. |
| 92 | `            background: rgba(253, 252, 248, 0.95);` | CSS declaration. |
| 93 | `            backdrop-filter: blur(20px);` | Applies frosted-glass effect for overlays or headers. |
| 94 | `            border-bottom: 1px solid rgba(232, 226, 214, 0.3);` | CSS declaration. |
| 95 | `            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 96 | `        }` | CSS selector block ends. |
| 97 | `        ` |  |
| 98 | `        .header-container {` | CSS selector block begins. |
| 99 | `            display: flex;` | CSS declaration. |
| 100 | `            justify-content: space-between;` | CSS declaration. |
| 101 | `            align-items: center;` | CSS declaration. |
| 102 | `            padding: 1.25rem 0;` | CSS declaration. |
| 103 | `            position: relative;` | CSS declaration. |
| 104 | `        }` | CSS selector block ends. |
| 105 | `        ` |  |
| 106 | `        .logo {` | CSS selector block begins. |
| 107 | `            display: flex;` | CSS declaration. |
| 108 | `            align-items: center;` | CSS declaration. |
| 109 | `            gap: 14px;` | CSS declaration. |
| 110 | `            text-decoration: none;` | CSS declaration. |
| 111 | `            color: var(--charcoal);` | CSS declaration. |
| 112 | `            transition: transform 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 113 | `            z-index: 1001;` | Layer stacking control to keep nav/modals above content. |
| 114 | `        }` | CSS selector block ends. |
| 115 | `        ` |  |
| 116 | `        .logo:hover {` | CSS selector block begins. |
| 117 | `            transform: translateX(-4px);` | CSS declaration. |
| 118 | `        }` | CSS selector block ends. |
| 119 | `        ` |  |
| 120 | `        .logo-icon {` | CSS selector block begins. |
| 121 | `            width: 44px;` | CSS declaration. |
| 122 | `            height: 44px;` | CSS declaration. |
| 123 | `            background: linear-gradient(135deg, var(--bronze), var(--bronze-light));` | CSS declaration. |
| 124 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 125 | `            display: flex;` | CSS declaration. |
| 126 | `            align-items: center;` | CSS declaration. |
| 127 | `            justify-content: center;` | CSS declaration. |
| 128 | `            color: var(--ivory);` | CSS declaration. |
| 129 | `            font-family: var(--serif);` | CSS declaration. |
| 130 | `            font-size: 16px;` | CSS declaration. |
| 131 | `            font-weight: 500;` | CSS declaration. |
| 132 | `        }` | CSS selector block ends. |
| 133 | `        ` |  |
| 134 | `        .logo-text {` | CSS selector block begins. |
| 135 | `            font-family: var(--serif);` | CSS declaration. |
| 136 | `            font-size: 1.4rem;` | CSS declaration. |
| 137 | `            font-weight: 400;` | CSS declaration. |
| 138 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 139 | `        }` | CSS selector block ends. |
| 140 | `        ` |  |
| 141 | `        /* Desktop Navigation */` | Content/whitespace or standard markup. |
| 142 | `        nav.desktop {` | CSS selector block begins. |
| 143 | `            display: flex;` | CSS declaration. |
| 144 | `        }` | CSS selector block ends. |
| 145 | `        ` |  |
| 146 | `        nav.desktop ul {` | CSS selector block begins. |
| 147 | `            display: flex;` | CSS declaration. |
| 148 | `            list-style: none;` | CSS declaration. |
| 149 | `            gap: 2.5rem;` | CSS declaration. |
| 150 | `        }` | CSS selector block ends. |
| 151 | `        ` |  |
| 152 | `        nav.desktop a {` | CSS selector block begins. |
| 153 | `            text-decoration: none;` | CSS declaration. |
| 154 | `            color: var(--charcoal);` | CSS declaration. |
| 155 | `            font-weight: 400;` | CSS declaration. |
| 156 | `            font-size: 0.95rem;` | CSS declaration. |
| 157 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 158 | `            position: relative;` | CSS declaration. |
| 159 | `            padding: 0.5rem 0;` | CSS declaration. |
| 160 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 161 | `        }` | CSS selector block ends. |
| 162 | `        ` |  |
| 163 | `        nav.desktop a:after {` | CSS selector block begins. |
| 164 | `            content: '';` | CSS declaration. |
| 165 | `            position: absolute;` | CSS declaration. |
| 166 | `            bottom: 0;` | CSS declaration. |
| 167 | `            left: 0;` | CSS declaration. |
| 168 | `            width: 0;` | CSS declaration. |
| 169 | `            height: 1px;` | CSS declaration. |
| 170 | `            background: var(--bronze);` | CSS declaration. |
| 171 | `            transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 172 | `        }` | CSS selector block ends. |
| 173 | `        ` |  |
| 174 | `        nav.desktop a:hover {` | CSS selector block begins. |
| 175 | `            color: var(--bronze);` | CSS declaration. |
| 176 | `        }` | CSS selector block ends. |
| 177 | `        ` |  |
| 178 | `        nav.desktop a:hover:after {` | CSS selector block begins. |
| 179 | `            width: 100%;` | CSS declaration. |
| 180 | `        }` | CSS selector block ends. |
| 181 | `        ` |  |
| 182 | `        /* Mobile Navigation */` | Content/whitespace or standard markup. |
| 183 | `        .mobile-toggle {` | CSS selector block begins. |
| 184 | `            display: none;` | CSS declaration. |
| 185 | `            background: none;` | CSS declaration. |
| 186 | `            border: none;` | CSS declaration. |
| 187 | `            font-size: 1.5rem;` | CSS declaration. |
| 188 | `            cursor: pointer;` | CSS declaration. |
| 189 | `            color: var(--charcoal);` | CSS declaration. |
| 190 | `            transition: transform 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 191 | `            z-index: 1001;` | Layer stacking control to keep nav/modals above content. |
| 192 | `            padding: 0.5rem;` | CSS declaration. |
| 193 | `        }` | CSS selector block ends. |
| 194 | `        ` |  |
| 195 | `        .mobile-toggle:hover {` | CSS selector block begins. |
| 196 | `            transform: rotate(90deg);` | CSS declaration. |
| 197 | `        }` | CSS selector block ends. |
| 198 | `        ` |  |
| 199 | `        nav.mobile {` | CSS selector block begins. |
| 200 | `            display: none;` | CSS declaration. |
| 201 | `            position: absolute;` | CSS declaration. |
| 202 | `            top: 100%;` | CSS declaration. |
| 203 | `            left: 0;` | CSS declaration. |
| 204 | `            width: 100%;` | CSS declaration. |
| 205 | `            background: rgba(253, 252, 248, 0.98);` | CSS declaration. |
| 206 | `            backdrop-filter: blur(20px);` | Applies frosted-glass effect for overlays or headers. |
| 207 | `            border-bottom: 1px solid var(--stone);` | CSS declaration. |
| 208 | `            padding: 2rem 0;` | CSS declaration. |
| 209 | `            transform: translateY(-100%);` | CSS declaration. |
| 210 | `            opacity: 0;` | CSS declaration. |
| 211 | `            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 212 | `        }` | CSS selector block ends. |
| 213 | `        ` |  |
| 214 | `        nav.mobile.active {` | CSS selector block begins. |
| 215 | `            transform: translateY(0);` | CSS declaration. |
| 216 | `            opacity: 1;` | CSS declaration. |
| 217 | `        }` | CSS selector block ends. |
| 218 | `        ` |  |
| 219 | `        nav.mobile ul {` | CSS selector block begins. |
| 220 | `            list-style: none;` | CSS declaration. |
| 221 | `            display: flex;` | CSS declaration. |
| 222 | `            flex-direction: column;` | CSS declaration. |
| 223 | `            gap: 1.5rem;` | CSS declaration. |
| 224 | `        }` | CSS selector block ends. |
| 225 | `        ` |  |
| 226 | `        nav.mobile a {` | CSS selector block begins. |
| 227 | `            text-decoration: none;` | CSS declaration. |
| 228 | `            color: var(--charcoal);` | CSS declaration. |
| 229 | `            font-weight: 400;` | CSS declaration. |
| 230 | `            font-size: 1.1rem;` | CSS declaration. |
| 231 | `            padding: 0.75rem 0;` | CSS declaration. |
| 232 | `            display: block;` | CSS declaration. |
| 233 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 234 | `            border-bottom: 1px solid transparent;` | CSS declaration. |
| 235 | `        }` | CSS selector block ends. |
| 236 | `        ` |  |
| 237 | `        nav.mobile a:hover {` | CSS selector block begins. |
| 238 | `            color: var(--bronze);` | CSS declaration. |
| 239 | `            border-bottom-color: var(--bronze);` | CSS declaration. |
| 240 | `        }` | CSS selector block ends. |
| 241 | `        ` |  |
| 242 | `        /* Page Header */` | Content/whitespace or standard markup. |
| 243 | `        .page-header {` | CSS selector block begins. |
| 244 | `            padding: 160px 0 80px;` | CSS declaration. |
| 245 | `            background: linear-gradient(135deg, var(--ivory) 0%, var(--linen) 100%);` | CSS declaration. |
| 246 | `            text-align: center;` | CSS declaration. |
| 247 | `        }` | CSS selector block ends. |
| 248 | `        ` |  |
| 249 | `        .page-eyebrow {` | CSS selector block begins. |
| 250 | `            font-size: 0.8rem;` | CSS declaration. |
| 251 | `            text-transform: uppercase;` | CSS declaration. |
| 252 | `            letter-spacing: 0.3em;` | CSS declaration. |
| 253 | `            color: var(--bronze);` | CSS declaration. |
| 254 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 255 | `            display: block;` | CSS declaration. |
| 256 | `            font-weight: 400;` | CSS declaration. |
| 257 | `        }` | CSS selector block ends. |
| 258 | `        ` |  |
| 259 | `        .page-description {` | CSS selector block begins. |
| 260 | `            font-size: 1.2rem;` | CSS declaration. |
| 261 | `            max-width: 600px;` | CSS declaration. |
| 262 | `            margin: 0 auto;` | CSS declaration. |
| 263 | `            color: #555;` | CSS declaration. |
| 264 | `            font-weight: 300;` | CSS declaration. |
| 265 | `        }` | CSS selector block ends. |
| 266 | `        ` |  |
| 267 | `        /* Service Navigation */` | Content/whitespace or standard markup. |
| 268 | `        .service-nav {` | CSS selector block begins. |
| 269 | `            position: sticky;` | Sticky element that stays fixed within its container on scroll. |
| 270 | `            top: 80px;` | CSS declaration. |
| 271 | `            background: var(--ivory);` | CSS declaration. |
| 272 | `            border-bottom: 1px solid var(--stone);` | CSS declaration. |
| 273 | `            z-index: 100;` | Layer stacking control to keep nav/modals above content. |
| 274 | `        }` | CSS selector block ends. |
| 275 | `        ` |  |
| 276 | `        .service-nav-container {` | CSS selector block begins. |
| 277 | `            display: flex;` | CSS declaration. |
| 278 | `            justify-content: center;` | CSS declaration. |
| 279 | `            gap: 3rem;` | CSS declaration. |
| 280 | `            padding: 2rem 0;` | CSS declaration. |
| 281 | `        }` | CSS selector block ends. |
| 282 | `        ` |  |
| 283 | `        .service-link {` | CSS selector block begins. |
| 284 | `            text-decoration: none;` | CSS declaration. |
| 285 | `            color: var(--charcoal);` | CSS declaration. |
| 286 | `            font-weight: 400;` | CSS declaration. |
| 287 | `            padding: 0.75rem 1.5rem;` | CSS declaration. |
| 288 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 289 | `            position: relative;` | CSS declaration. |
| 290 | `            font-size: 0.95rem;` | CSS declaration. |
| 291 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 292 | `        }` | CSS selector block ends. |
| 293 | `        ` |  |
| 294 | `        .service-link.active {` | CSS selector block begins. |
| 295 | `            color: var(--bronze);` | CSS declaration. |
| 296 | `        }` | CSS selector block ends. |
| 297 | `        ` |  |
| 298 | `        .service-link.active:after {` | CSS selector block begins. |
| 299 | `            content: '';` | CSS declaration. |
| 300 | `            position: absolute;` | CSS declaration. |
| 301 | `            bottom: -2rem;` | CSS declaration. |
| 302 | `            left: 50%;` | CSS declaration. |
| 303 | `            transform: translateX(-50%);` | CSS declaration. |
| 304 | `            width: 4px;` | CSS declaration. |
| 305 | `            height: 4px;` | CSS declaration. |
| 306 | `            background: var(--bronze);` | CSS declaration. |
| 307 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 308 | `        }` | CSS selector block ends. |
| 309 | `        ` |  |
| 310 | `        .service-link:hover {` | CSS selector block begins. |
| 311 | `            color: var(--bronze);` | CSS declaration. |
| 312 | `        }` | CSS selector block ends. |
| 313 | `        ` |  |
| 314 | `        /* Service Sections */` | Content/whitespace or standard markup. |
| 315 | `        .service-section {` | CSS selector block begins. |
| 316 | `            scroll-margin-top: 140px;` | CSS declaration. |
| 317 | `        }` | CSS selector block ends. |
| 318 | `        ` |  |
| 319 | `        .service-header {` | CSS selector block begins. |
| 320 | `            margin-bottom: 4rem;` | CSS declaration. |
| 321 | `        }` | CSS selector block ends. |
| 322 | `        ` |  |
| 323 | `        .service-title {` | CSS selector block begins. |
| 324 | `            display: flex;` | CSS declaration. |
| 325 | `            align-items: center;` | CSS declaration. |
| 326 | `            gap: 1.5rem;` | CSS declaration. |
| 327 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 328 | `        }` | CSS selector block ends. |
| 329 | `        ` |  |
| 330 | `        .service-icon {` | CSS selector block begins. |
| 331 | `            width: 70px;` | CSS declaration. |
| 332 | `            height: 70px;` | CSS declaration. |
| 333 | `            background: var(--bronze);` | CSS declaration. |
| 334 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 335 | `            display: flex;` | CSS declaration. |
| 336 | `            align-items: center;` | CSS declaration. |
| 337 | `            justify-content: center;` | CSS declaration. |
| 338 | `            color: var(--ivory);` | CSS declaration. |
| 339 | `            font-size: 1.75rem;` | CSS declaration. |
| 340 | `        }` | CSS selector block ends. |
| 341 | `        ` |  |
| 342 | `        .service-description {` | CSS selector block begins. |
| 343 | `            font-size: 1.2rem;` | CSS declaration. |
| 344 | `            color: #555;` | CSS declaration. |
| 345 | `            max-width: 700px;` | CSS declaration. |
| 346 | `            font-weight: 300;` | CSS declaration. |
| 347 | `            line-height: 1.6;` | CSS declaration. |
| 348 | `        }` | CSS selector block ends. |
| 349 | `        ` |  |
| 350 | `        /* Service Features */` | Content/whitespace or standard markup. |
| 351 | `        .service-features {` | CSS selector block begins. |
| 352 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 353 | `            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));` | CSS declaration. |
| 354 | `            gap: 2.5rem;` | CSS declaration. |
| 355 | `            margin-bottom: 5rem;` | CSS declaration. |
| 356 | `        }` | CSS selector block ends. |
| 357 | `        ` |  |
| 358 | `        .feature-card {` | CSS selector block begins. |
| 359 | `            background: var(--ivory);` | CSS declaration. |
| 360 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 361 | `            padding: 3rem 2.5rem;` | CSS declaration. |
| 362 | `            border: 1px solid var(--stone);` | CSS declaration. |
| 363 | `            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 364 | `            position: relative;` | CSS declaration. |
| 365 | `            overflow: hidden;` | CSS declaration. |
| 366 | `        }` | CSS selector block ends. |
| 367 | `        ` |  |
| 368 | `        .feature-card:before {` | CSS selector block begins. |
| 369 | `            content: '';` | CSS declaration. |
| 370 | `            position: absolute;` | CSS declaration. |
| 371 | `            top: 0;` | CSS declaration. |
| 372 | `            left: -100%;` | CSS declaration. |
| 373 | `            width: 100%;` | CSS declaration. |
| 374 | `            height: 2px;` | CSS declaration. |
| 375 | `            background: var(--bronze);` | CSS declaration. |
| 376 | `            transition: left 0.6s ease;` | Motion/animation for subtle, premium interactions. |
| 377 | `        }` | CSS selector block ends. |
| 378 | `        ` |  |
| 379 | `        .feature-card:hover {` | CSS selector block begins. |
| 380 | `            transform: translateY(-8px);` | CSS declaration. |
| 381 | `            border-color: var(--bronze);` | CSS declaration. |
| 382 | `            box-shadow: 0 20px 40px rgba(0,0,0,0.08);` | Shadow depth for premium, elevated look on cards/components. |
| 383 | `        }` | CSS selector block ends. |
| 384 | `        ` |  |
| 385 | `        .feature-card:hover:before {` | CSS selector block begins. |
| 386 | `            left: 0;` | CSS declaration. |
| 387 | `        }` | CSS selector block ends. |
| 388 | `        ` |  |
| 389 | `        .feature-icon {` | CSS selector block begins. |
| 390 | `            width: 60px;` | CSS declaration. |
| 391 | `            height: 60px;` | CSS declaration. |
| 392 | `            background: var(--linen);` | CSS declaration. |
| 393 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 394 | `            display: flex;` | CSS declaration. |
| 395 | `            align-items: center;` | CSS declaration. |
| 396 | `            justify-content: center;` | CSS declaration. |
| 397 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 398 | `            color: var(--bronze);` | CSS declaration. |
| 399 | `            font-size: 1.5rem;` | CSS declaration. |
| 400 | `        }` | CSS selector block ends. |
| 401 | `        ` |  |
| 402 | `        .feature-title {` | CSS selector block begins. |
| 403 | `            font-size: 1.3rem;` | CSS declaration. |
| 404 | `            margin-bottom: 1rem;` | CSS declaration. |
| 405 | `            font-weight: 400;` | CSS declaration. |
| 406 | `        }` | CSS selector block ends. |
| 407 | `        ` |  |
| 408 | `        .feature-description {` | CSS selector block begins. |
| 409 | `            color: #666;` | CSS declaration. |
| 410 | `            font-size: 1rem;` | CSS declaration. |
| 411 | `            line-height: 1.6;` | CSS declaration. |
| 412 | `            font-weight: 300;` | CSS declaration. |
| 413 | `        }` | CSS selector block ends. |
| 414 | `        ` |  |
| 415 | `        /* Process Section */` | Content/whitespace or standard markup. |
| 416 | `        .process-section {` | CSS selector block begins. |
| 417 | `            background: var(--ivory);` | CSS declaration. |
| 418 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 419 | `            padding: 4rem 3rem;` | CSS declaration. |
| 420 | `            margin-top: 4rem;` | CSS declaration. |
| 421 | `            border: 1px solid var(--stone);` | CSS declaration. |
| 422 | `        }` | CSS selector block ends. |
| 423 | `        ` |  |
| 424 | `        .process-title {` | CSS selector block begins. |
| 425 | `            text-align: center;` | CSS declaration. |
| 426 | `            margin-bottom: 4rem;` | CSS declaration. |
| 427 | `        }` | CSS selector block ends. |
| 428 | `        ` |  |
| 429 | `        .process-steps {` | CSS selector block begins. |
| 430 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 431 | `            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` | CSS declaration. |
| 432 | `            gap: 3rem;` | CSS declaration. |
| 433 | `        }` | CSS selector block ends. |
| 434 | `        ` |  |
| 435 | `        .process-step {` | CSS selector block begins. |
| 436 | `            text-align: center;` | CSS declaration. |
| 437 | `            position: relative;` | CSS declaration. |
| 438 | `        }` | CSS selector block ends. |
| 439 | `        ` |  |
| 440 | `        .step-number {` | CSS selector block begins. |
| 441 | `            width: 50px;` | CSS declaration. |
| 442 | `            height: 50px;` | CSS declaration. |
| 443 | `            background: var(--bronze);` | CSS declaration. |
| 444 | `            color: var(--ivory);` | CSS declaration. |
| 445 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 446 | `            display: flex;` | CSS declaration. |
| 447 | `            align-items: center;` | CSS declaration. |
| 448 | `            justify-content: center;` | CSS declaration. |
| 449 | `            margin: 0 auto 1.5rem;` | CSS declaration. |
| 450 | `            font-weight: 500;` | CSS declaration. |
| 451 | `            font-size: 1.2rem;` | CSS declaration. |
| 452 | `        }` | CSS selector block ends. |
| 453 | `        ` |  |
| 454 | `        .step-title {` | CSS selector block begins. |
| 455 | `            font-size: 1.2rem;` | CSS declaration. |
| 456 | `            margin-bottom: 1rem;` | CSS declaration. |
| 457 | `            font-weight: 400;` | CSS declaration. |
| 458 | `        }` | CSS selector block ends. |
| 459 | `        ` |  |
| 460 | `        .step-description {` | CSS selector block begins. |
| 461 | `            color: #666;` | CSS declaration. |
| 462 | `            font-size: 0.95rem;` | CSS declaration. |
| 463 | `            line-height: 1.5;` | CSS declaration. |
| 464 | `            font-weight: 300;` | CSS declaration. |
| 465 | `        }` | CSS selector block ends. |
| 466 | `        ` |  |
| 467 | `        /* Case Studies */` | Content/whitespace or standard markup. |
| 468 | `        .case-studies {` | CSS selector block begins. |
| 469 | `            margin-top: 5rem;` | CSS declaration. |
| 470 | `        }` | CSS selector block ends. |
| 471 | `        ` |  |
| 472 | `        .case-studies-grid {` | CSS selector block begins. |
| 473 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 474 | `            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));` | CSS declaration. |
| 475 | `            gap: 2.5rem;` | CSS declaration. |
| 476 | `        }` | CSS selector block ends. |
| 477 | `        ` |  |
| 478 | `        .case-study {` | CSS selector block begins. |
| 479 | `            background: var(--ivory);` | CSS declaration. |
| 480 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 481 | `            overflow: hidden;` | CSS declaration. |
| 482 | `            border: 1px solid var(--stone);` | CSS declaration. |
| 483 | `            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 484 | `        }` | CSS selector block ends. |
| 485 | `        ` |  |
| 486 | `        .case-study:hover {` | CSS selector block begins. |
| 487 | `            transform: translateY(-8px);` | CSS declaration. |
| 488 | `            border-color: var(--bronze);` | CSS declaration. |
| 489 | `            box-shadow: 0 20px 40px rgba(0,0,0,0.08);` | Shadow depth for premium, elevated look on cards/components. |
| 490 | `        }` | CSS selector block ends. |
| 491 | `        ` |  |
| 492 | `        .case-study-image {` | CSS selector block begins. |
| 493 | `            height: 220px;` | CSS declaration. |
| 494 | `            overflow: hidden;` | CSS declaration. |
| 495 | `        }` | CSS selector block ends. |
| 496 | `        ` |  |
| 497 | `        .case-study-image img {` | CSS selector block begins. |
| 498 | `            width: 100%;` | CSS declaration. |
| 499 | `            height: 100%;` | CSS declaration. |
| 500 | `            object-fit: cover;` | CSS declaration. |
| 501 | `            transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 502 | `        }` | CSS selector block ends. |
| 503 | `        ` |  |
| 504 | `        .case-study:hover .case-study-image img {` | CSS selector block begins. |
| 505 | `            transform: scale(1.08);` | CSS declaration. |
| 506 | `        }` | CSS selector block ends. |
| 507 | `        ` |  |
| 508 | `        .case-study-content {` | CSS selector block begins. |
| 509 | `            padding: 2.5rem;` | CSS declaration. |
| 510 | `        }` | CSS selector block ends. |
| 511 | `        ` |  |
| 512 | `        .case-study-title {` | CSS selector block begins. |
| 513 | `            font-size: 1.3rem;` | CSS declaration. |
| 514 | `            margin-bottom: 0.5rem;` | CSS declaration. |
| 515 | `            font-weight: 400;` | CSS declaration. |
| 516 | `        }` | CSS selector block ends. |
| 517 | `        ` |  |
| 518 | `        .case-study-client {` | CSS selector block begins. |
| 519 | `            color: var(--bronze);` | CSS declaration. |
| 520 | `            font-weight: 500;` | CSS declaration. |
| 521 | `            margin-bottom: 1rem;` | CSS declaration. |
| 522 | `            display: block;` | CSS declaration. |
| 523 | `            font-size: 0.95rem;` | CSS declaration. |
| 524 | `        }` | CSS selector block ends. |
| 525 | `        ` |  |
| 526 | `        .case-study-description {` | CSS selector block begins. |
| 527 | `            color: #666;` | CSS declaration. |
| 528 | `            font-size: 0.95rem;` | CSS declaration. |
| 529 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 530 | `            line-height: 1.5;` | CSS declaration. |
| 531 | `            font-weight: 300;` | CSS declaration. |
| 532 | `        }` | CSS selector block ends. |
| 533 | `        ` |  |
| 534 | `        .btn {` | Button/CTA element styled as a pill with golden border. |
| 535 | `            display: inline-flex;` | CSS declaration. |
| 536 | `            align-items: center;` | CSS declaration. |
| 537 | `            padding: 1rem 2rem;` | CSS declaration. |
| 538 | `            text-decoration: none;` | CSS declaration. |
| 539 | `            border-radius: 0;` | Rounded corners to soften components for luxury aesthetic. |
| 540 | `            font-weight: 400;` | CSS declaration. |
| 541 | `            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 542 | `            border: 1px solid transparent;` | CSS declaration. |
| 543 | `            font-size: 0.95rem;` | CSS declaration. |
| 544 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 545 | `            position: relative;` | CSS declaration. |
| 546 | `            overflow: hidden;` | CSS declaration. |
| 547 | `        }` | CSS selector block ends. |
| 548 | `        ` |  |
| 549 | `        .btn:before {` | Button/CTA element styled as a pill with golden border. |
| 550 | `            content: '';` | CSS declaration. |
| 551 | `            position: absolute;` | CSS declaration. |
| 552 | `            top: 0;` | CSS declaration. |
| 553 | `            left: -100%;` | CSS declaration. |
| 554 | `            width: 100%;` | CSS declaration. |
| 555 | `            height: 100%;` | CSS declaration. |
| 556 | `            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);` | CSS declaration. |
| 557 | `            transition: left 0.6s ease;` | Motion/animation for subtle, premium interactions. |
| 558 | `        }` | CSS selector block ends. |
| 559 | `        ` |  |
| 560 | `        .btn:hover:before {` | Button/CTA element styled as a pill with golden border. |
| 561 | `            left: 100%;` | CSS declaration. |
| 562 | `        }` | CSS selector block ends. |
| 563 | `        ` |  |
| 564 | `        .btn-primary {` | Button/CTA element styled as a pill with golden border. |
| 565 | `            background: var(--charcoal);` | CSS declaration. |
| 566 | `            color: var(--ivory);` | CSS declaration. |
| 567 | `            border-color: var(--charcoal);` | CSS declaration. |
| 568 | `        }` | CSS selector block ends. |
| 569 | `        ` |  |
| 570 | `        .btn-primary:hover {` | Button/CTA element styled as a pill with golden border. |
| 571 | `            background: var(--bronze);` | CSS declaration. |
| 572 | `            color: var(--ivory);` | CSS declaration. |
| 573 | `            border-color: var(--bronze);` | CSS declaration. |
| 574 | `            transform: translateY(-2px);` | CSS declaration. |
| 575 | `        }` | CSS selector block ends. |
| 576 | `        ` |  |
| 577 | `        /* CTA Section */` | Content/whitespace or standard markup. |
| 578 | `        .cta-section {` | CSS selector block begins. |
| 579 | `            background: linear-gradient(135deg, var(--charcoal) 0%, #2a2a2a 100%);` | CSS declaration. |
| 580 | `            color: var(--ivory);` | CSS declaration. |
| 581 | `            text-align: center;` | CSS declaration. |
| 582 | `            position: relative;` | CSS declaration. |
| 583 | `            overflow: hidden;` | CSS declaration. |
| 584 | `        }` | CSS selector block ends. |
| 585 | `        ` |  |
| 586 | `        .cta-section::before {` | CSS selector block begins. |
| 587 | `            content: '';` | CSS declaration. |
| 588 | `            position: absolute;` | CSS declaration. |
| 589 | `            top: -100px;` | CSS declaration. |
| 590 | `            right: -100px;` | CSS declaration. |
| 591 | `            width: 300px;` | CSS declaration. |
| 592 | `            height: 300px;` | CSS declaration. |
| 593 | `            background: var(--bronze);` | CSS declaration. |
| 594 | `            opacity: 0.05;` | CSS declaration. |
| 595 | `            border-radius: 50%;` | Rounded corners to soften components for luxury aesthetic. |
| 596 | `        }` | CSS selector block ends. |
| 597 | `        ` |  |
| 598 | `        .cta-section h2 {` | CSS selector block begins. |
| 599 | `            color: var(--ivory);` | CSS declaration. |
| 600 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 601 | `        }` | CSS selector block ends. |
| 602 | `        ` |  |
| 603 | `        .cta-section p {` | CSS selector block begins. |
| 604 | `            font-size: 1.2rem;` | CSS declaration. |
| 605 | `            margin-bottom: 3rem;` | CSS declaration. |
| 606 | `            opacity: 0.9;` | CSS declaration. |
| 607 | `            max-width: 600px;` | CSS declaration. |
| 608 | `            margin-left: auto;` | CSS declaration. |
| 609 | `            margin-right: auto;` | CSS declaration. |
| 610 | `            font-weight: 300;` | CSS declaration. |
| 611 | `            line-height: 1.6;` | CSS declaration. |
| 612 | `        }` | CSS selector block ends. |
| 613 | `        ` |  |
| 614 | `        .btn-light {` | Button/CTA element styled as a pill with golden border. |
| 615 | `            background: var(--ivory);` | CSS declaration. |
| 616 | `            color: var(--charcoal);` | CSS declaration. |
| 617 | `            border-color: var(--ivory);` | CSS declaration. |
| 618 | `        }` | CSS selector block ends. |
| 619 | `        ` |  |
| 620 | `        .btn-light:hover {` | Button/CTA element styled as a pill with golden border. |
| 621 | `            background: var(--bronze);` | CSS declaration. |
| 622 | `            color: var(--ivory);` | CSS declaration. |
| 623 | `            border-color: var(--bronze);` | CSS declaration. |
| 624 | `        }` | CSS selector block ends. |
| 625 | `        ` |  |
| 626 | `        /* Enhanced Footer */` | Content/whitespace or standard markup. |
| 627 | `        footer {` | CSS selector block begins. |
| 628 | `            background: var(--charcoal);` | CSS declaration. |
| 629 | `            color: var(--ivory);` | CSS declaration. |
| 630 | `            padding: 4rem 0 2rem;` | CSS declaration. |
| 631 | `            position: relative;` | CSS declaration. |
| 632 | `        }` | CSS selector block ends. |
| 633 | `        ` |  |
| 634 | `        footer::before {` | CSS selector block begins. |
| 635 | `            content: '';` | CSS declaration. |
| 636 | `            position: absolute;` | CSS declaration. |
| 637 | `            top: 0;` | CSS declaration. |
| 638 | `            left: 0;` | CSS declaration. |
| 639 | `            width: 100%;` | CSS declaration. |
| 640 | `            height: 1px;` | CSS declaration. |
| 641 | `            background: linear-gradient(90deg, transparent, var(--bronze), transparent);` | CSS declaration. |
| 642 | `        }` | CSS selector block ends. |
| 643 | `        ` |  |
| 644 | `        .footer-content {` | CSS selector block begins. |
| 645 | `            display: grid;` | Grid layout container for responsive card/gallery alignment. |
| 646 | `            grid-template-columns: 2fr 1fr 1fr;` | CSS declaration. |
| 647 | `            gap: 3rem;` | CSS declaration. |
| 648 | `            margin-bottom: 3rem;` | CSS declaration. |
| 649 | `        }` | CSS selector block ends. |
| 650 | `        ` |  |
| 651 | `        .footer-brand {` | CSS selector block begins. |
| 652 | `            display: flex;` | CSS declaration. |
| 653 | `            flex-direction: column;` | CSS declaration. |
| 654 | `        }` | CSS selector block ends. |
| 655 | `        ` |  |
| 656 | `        .footer-logo {` | CSS selector block begins. |
| 657 | `            display: flex;` | CSS declaration. |
| 658 | `            align-items: center;` | CSS declaration. |
| 659 | `            gap: 14px;` | CSS declaration. |
| 660 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 661 | `        }` | CSS selector block ends. |
| 662 | `        ` |  |
| 663 | `        .footer-description {` | CSS selector block begins. |
| 664 | `            opacity: 0.7;` | CSS declaration. |
| 665 | `            line-height: 1.6;` | CSS declaration. |
| 666 | `            margin-bottom: 2rem;` | CSS declaration. |
| 667 | `            font-weight: 300;` | CSS declaration. |
| 668 | `            max-width: 400px;` | CSS declaration. |
| 669 | `        }` | CSS selector block ends. |
| 670 | `        ` |  |
| 671 | `        .footer-heading {` | CSS selector block begins. |
| 672 | `            font-size: 1.1rem;` | CSS declaration. |
| 673 | `            margin-bottom: 1.5rem;` | CSS declaration. |
| 674 | `            color: var(--ivory);` | CSS declaration. |
| 675 | `            font-weight: 400;` | CSS declaration. |
| 676 | `            letter-spacing: 0.02em;` | CSS declaration. |
| 677 | `        }` | CSS selector block ends. |
| 678 | `        ` |  |
| 679 | `        .footer-links {` | CSS selector block begins. |
| 680 | `            list-style: none;` | CSS declaration. |
| 681 | `        }` | CSS selector block ends. |
| 682 | `        ` |  |
| 683 | `        .footer-links li {` | CSS selector block begins. |
| 684 | `            margin-bottom: 0.75rem;` | CSS declaration. |
| 685 | `        }` | CSS selector block ends. |
| 686 | `        ` |  |
| 687 | `        .footer-links a {` | CSS selector block begins. |
| 688 | `            color: rgba(253, 252, 248, 0.7);` | CSS declaration. |
| 689 | `            text-decoration: none;` | CSS declaration. |
| 690 | `            transition: all 0.3s ease;` | Motion/animation for subtle, premium interactions. |
| 691 | `            font-weight: 300;` | CSS declaration. |
| 692 | `            letter-spacing: 0.01em;` | CSS declaration. |
| 693 | `            font-size: 0.95rem;` | CSS declaration. |
| 694 | `        }` | CSS selector block ends. |
| 695 | `        ` |  |
| 696 | `        .footer-links a:hover {` | CSS selector block begins. |
| 697 | `            color: var(--bronze);` | CSS declaration. |
| 698 | `        }` | CSS selector block ends. |
| 699 | `        ` |  |
| 700 | `        .footer-contact {` | CSS selector block begins. |
| 701 | `            display: flex;` | CSS declaration. |
| 702 | `            flex-direction: column;` | CSS declaration. |
| 703 | `            gap: 1rem;` | CSS declaration. |
| 704 | `        }` | CSS selector block ends. |
| 705 | `        ` |  |
| 706 | `        .contact-item {` | CSS selector block begins. |
| 707 | `            display: flex;` | CSS declaration. |
| 708 | `            align-items: flex-start;` | CSS declaration. |
| 709 | `            gap: 0.75rem;` | CSS declaration. |
| 710 | `            color: rgba(253, 252, 248, 0.7);` | CSS declaration. |
| 711 | `            font-size: 0.95rem;` | CSS declaration. |
| 712 | `        }` | CSS selector block ends. |
| 713 | `        ` |  |
| 714 | `        .contact-item strong {` | CSS selector block begins. |
| 715 | `            color: var(--ivory);` | CSS declaration. |
| 716 | `            font-weight: 500;` | CSS declaration. |
| 717 | `        }` | CSS selector block ends. |
| 718 | `        ` |  |
| 719 | `        .footer-bottom {` | CSS selector block begins. |
| 720 | `            border-top: 1px solid rgba(253, 252, 248, 0.1);` | CSS declaration. |
| 721 | `            padding-top: 2rem;` | CSS declaration. |
| 722 | `            text-align: center;` | CSS declaration. |
| 723 | `            opacity: 0.6;` | CSS declaration. |
| 724 | `            font-size: 0.9rem;` | CSS declaration. |
| 725 | `            font-weight: 300;` | CSS declaration. |
| 726 | `        }` | CSS selector block ends. |
| 727 | `        ` |  |
| 728 | `        /* Enhanced Animations */` | Content/whitespace or standard markup. |
| 729 | `        .fade-in {` | CSS selector block begins. |
| 730 | `            opacity: 0;` | CSS declaration. |
| 731 | `            transform: translateY(40px);` | CSS declaration. |
| 732 | `            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);` | Motion/animation for subtle, premium interactions. |
| 733 | `        }` | CSS selector block ends. |
| 734 | `        ` |  |
| 735 | `        .fade-in.visible {` | CSS selector block begins. |
| 736 | `            opacity: 1;` | CSS declaration. |
| 737 | `            transform: translateY(0);` | CSS declaration. |
| 738 | `        }` | CSS selector block ends. |
| 739 | `        ` |  |
| 740 | `        /* Enhanced Responsive Design */` | Content/whitespace or standard markup. |
| 741 | `        @media (max-width: 1200px) {` | Responsive breakpoint adjusting layout for smaller screens. |
| 742 | `            .service-features {` | CSS selector block begins. |
| 743 | `                grid-template-columns: repeat(2, 1fr);` | CSS declaration. |
| 744 | `            }` | CSS selector block ends. |
| 745 | `            ` |  |
| 746 | `            .process-steps {` | CSS selector block begins. |
| 747 | `                grid-template-columns: repeat(2, 1fr);` | CSS declaration. |
| 748 | `            }` | CSS selector block ends. |
| 749 | `            ` |  |
| 750 | `            .case-studies-grid {` | CSS selector block begins. |
| 751 | `                grid-template-columns: repeat(2, 1fr);` | CSS declaration. |
| 752 | `            }` | CSS selector block ends. |
| 753 | `            ` |  |
| 754 | `            .footer-content {` | CSS selector block begins. |
| 755 | `                grid-template-columns: 1fr 1fr;` | CSS declaration. |
| 756 | `            }` | CSS selector block ends. |
| 757 | `        }` | CSS selector block ends. |
| 758 | `        ` |  |
| 759 | `        @media (max-width: 768px) {` | Responsive breakpoint adjusting layout for smaller screens. |
| 760 | `            nav.desktop {` | CSS selector block begins. |
| 761 | `                display: none;` | CSS declaration. |
| 762 | `            }` | CSS selector block ends. |
| 763 | `            ` |  |
| 764 | `            .mobile-toggle {` | CSS selector block begins. |
| 765 | `                display: block;` | CSS declaration. |
| 766 | `            }` | CSS selector block ends. |
| 767 | `            ` |  |
| 768 | `            nav.mobile {` | CSS selector block begins. |
| 769 | `                display: block;` | CSS declaration. |
| 770 | `            }` | CSS selector block ends. |
| 771 | `            ` |  |
| 772 | `            .service-nav-container {` | CSS selector block begins. |
| 773 | `                flex-wrap: wrap;` | CSS declaration. |
| 774 | `                gap: 1.5rem;` | CSS declaration. |
| 775 | `            }` | CSS selector block ends. |
| 776 | `            ` |  |
| 777 | `            .service-features {` | CSS selector block begins. |
| 778 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 779 | `            }` | CSS selector block ends. |
| 780 | `            ` |  |
| 781 | `            .process-steps {` | CSS selector block begins. |
| 782 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 783 | `            }` | CSS selector block ends. |
| 784 | `            ` |  |
| 785 | `            .case-studies-grid {` | CSS selector block begins. |
| 786 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 787 | `            }` | CSS selector block ends. |
| 788 | `            ` |  |
| 789 | `            .footer-content {` | CSS selector block begins. |
| 790 | `                grid-template-columns: 1fr;` | CSS declaration. |
| 791 | `                gap: 2rem;` | CSS declaration. |
| 792 | `            }` | CSS selector block ends. |
| 793 | `            ` |  |
| 794 | `            .service-link.active:after {` | CSS selector block begins. |
| 795 | `                bottom: -1.5rem;` | CSS declaration. |
| 796 | `            }` | CSS selector block ends. |
| 797 | `            ` |  |
| 798 | `            .process-section {` | CSS selector block begins. |
| 799 | `                padding: 3rem 2rem;` | CSS declaration. |
| 800 | `            }` | CSS selector block ends. |
| 801 | `            ` |  |
| 802 | `            .footer-brand {` | CSS selector block begins. |
| 803 | `                text-align: center;` | CSS declaration. |
| 804 | `                align-items: center;` | CSS declaration. |
| 805 | `            }` | CSS selector block ends. |
| 806 | `        }` | CSS selector block ends. |
| 807 | `        ` |  |
| 808 | `        @media (max-width: 480px) {` | Responsive breakpoint adjusting layout for smaller screens. |
| 809 | `            .btn {` | Button/CTA element styled as a pill with golden border. |
| 810 | `                padding: 1rem 2rem;` | CSS declaration. |
| 811 | `                width: 100%;` | CSS declaration. |
| 812 | `                justify-content: center;` | CSS declaration. |
| 813 | `            }` | CSS selector block ends. |
| 814 | `            ` |  |
| 815 | `            .feature-card {` | CSS selector block begins. |
| 816 | `                padding: 2.5rem 2rem;` | CSS declaration. |
| 817 | `            }` | CSS selector block ends. |
| 818 | `            ` |  |
| 819 | `            .case-study-content {` | CSS selector block begins. |
| 820 | `                padding: 2rem;` | CSS declaration. |
| 821 | `            }` | CSS selector block ends. |
| 822 | `        }` | CSS selector block ends. |
| 823 | `    </style>` | Inline CSS block ends. |
| 824 | `` |  |
| 825 | `` |  |
| 826 | `    <!-- Header -->` | Structural/semantic HTML element. |
| 827 | `    <header>` | Document head starts; metadata, fonts and styles live here. |
| 828 | `        <div class="container header-container">` | Structural/semantic HTML element. |
| 829 | `            <a href="/home" class="logo">` | Structural/semantic HTML element. |
| 830 | `                <div class="logo-icon">SL</div>` | Structural/semantic HTML element. |
| 831 | `                <div class="logo-text">Secret Linen</div>` | Structural/semantic HTML element. |
| 832 | `            </a>` | Structural/semantic HTML element. |
| 833 | `            ` |  |
| 834 | `            <!-- Desktop Navigation -->` | Structural/semantic HTML element. |
| 835 | `            <nav class="desktop">` | Navigation container (desktop/mobile menus, links). |
| 836 | `                <ul>` | Structural/semantic HTML element. |
| 837 | `                    <li><a href="/home">Home</a></li>` | Structural/semantic HTML element. |
| 838 | `                    <li><a href="/collections">Collections</a></li>` | Structural/semantic HTML element. |
| 839 | `                    <li><a href="/services" class="active">Services</a></li>` | Structural/semantic HTML element. |
| 840 | `                    <li><a href="/about">About</a></li>` | Structural/semantic HTML element. |
| 841 | `                    <li><a href="/about#contact">Contact</a></li>` | Structural/semantic HTML element. |
| 842 | `                </ul>` | Structural/semantic HTML element. |
| 843 | `            </nav>` | Structural/semantic HTML element. |
| 844 | `            ` |  |
| 845 | `            <!-- Mobile Toggle -->` | Structural/semantic HTML element. |
| 846 | `            <button class="mobile-toggle">☰</button>` | Button/CTA element styled as a pill with golden border. |
| 847 | `            ` |  |
| 848 | `            <!-- Mobile Navigation -->` | Structural/semantic HTML element. |
| 849 | `            <nav class="mobile">` | Navigation container (desktop/mobile menus, links). |
| 850 | `                <ul>` | Structural/semantic HTML element. |
| 851 | `                    <li><a href="/home">Home</a></li>` | Structural/semantic HTML element. |
| 852 | `                    <li><a href="/collections">Collections</a></li>` | Structural/semantic HTML element. |
| 853 | `                    <li><a href="/services" class="active">Services</a></li>` | Structural/semantic HTML element. |
| 854 | `                    <li><a href="/about">About</a></li>` | Structural/semantic HTML element. |
| 855 | `                    <li><a href="/about#contact">Contact</a></li>` | Structural/semantic HTML element. |
| 856 | `                </ul>` | Structural/semantic HTML element. |
| 857 | `            </nav>` | Structural/semantic HTML element. |
| 858 | `        </div>` | Structural/semantic HTML element. |
| 859 | `    </header>` | Structural/semantic HTML element. |
| 860 | `` |  |
| 861 | `    <!-- Page Header -->` | Structural/semantic HTML element. |
| 862 | `    <section class="page-header">` | Semantic section block improving structure and SEO. |
| 863 | `        <div class="container">` | Structural/semantic HTML element. |
| 864 | `            <span class="page-eyebrow">Our Services</span>` | Structural/semantic HTML element. |
| 865 | `            <h1>Bespoke Textile Solutions</h1>` | Primary page heading. |
| 866 | `            <p class="page-description">` | Paragraph text / supporting copy. |
| 867 | `                Tailored programs for hospitality, corporate gifting, and custom requirements. Experience the Secret Linen difference with our comprehensive service offerings.` | Content/whitespace or standard markup. |
| 868 | `            </p>` | Structural/semantic HTML element. |
| 869 | `        </div>` | Structural/semantic HTML element. |
| 870 | `    </section>` | Structural/semantic HTML element. |
| 871 | `` |  |
| 872 | `    <!-- Service Navigation -->` | Structural/semantic HTML element. |
| 873 | `    <nav class="service-nav">` | Navigation container (desktop/mobile menus, links). |
| 874 | `        <div class="container service-nav-container">` | Structural/semantic HTML element. |
| 875 | `            <a href="#gifting" class="service-link active">Corporate Gifting</a>` | Structural/semantic HTML element. |
| 876 | `            <a href="#hospitality" class="service-link">Hospitality</a>` | Structural/semantic HTML element. |
| 877 | `            <a href="#customization" class="service-link">Customization</a>` | Structural/semantic HTML element. |
| 878 | `            <a href="#consultation" class="service-link">Consultation</a>` | Structural/semantic HTML element. |
| 879 | `        </div>` | Structural/semantic HTML element. |
| 880 | `    </nav>` | Structural/semantic HTML element. |
| 881 | `` |  |
| 882 | `    <!-- Corporate Gifting Section -->` | Structural/semantic HTML element. |
| 883 | `    <section id="gifting" class="section service-section">` | Semantic section block improving structure and SEO. |
| 884 | `        <div class="container">` | Structural/semantic HTML element. |
| 885 | `            <div class="service-header">` | Structural/semantic HTML element. |
| 886 | `                <div class="service-title">` | Structural/semantic HTML element. |
| 887 | `                    <div class="service-icon">🎁</div>` | Structural/semantic HTML element. |
| 888 | `                    <h2>Corporate Gifting</h2>` | Secondary section heading. |
| 889 | `                </div>` | Structural/semantic HTML element. |
| 890 | `                <p class="service-description">` | Paragraph text / supporting copy. |
| 891 | `                    Elevate every gesture with timeless Indian luxury. Turn thoughtful corporate gifts into lasting impressions with our bespoke linen collections.` | Content/whitespace or standard markup. |
| 892 | `                </p>` | Structural/semantic HTML element. |
| 893 | `            </div>` | Structural/semantic HTML element. |
| 894 | `` |  |
| 895 | `            <div class="service-features">` | Structural/semantic HTML element. |
| 896 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 897 | `                    <div class="feature-icon">🎨</div>` | Structural/semantic HTML element. |
| 898 | `                    <h3 class="feature-title">Signature Branding</h3>` | Structural/semantic HTML element. |
| 899 | `                    <p class="feature-description">Custom monograms, brand colors, and personalized packaging that reflects your corporate identity and values.</p>` | Paragraph text / supporting copy. |
| 900 | `                </div>` | Structural/semantic HTML element. |
| 901 | `` |  |
| 902 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 903 | `                    <div class="feature-icon">📦</div>` | Structural/semantic HTML element. |
| 904 | `                    <h3 class="feature-title">Bulk Programs</h3>` | Structural/semantic HTML element. |
| 905 | `                    <p class="feature-description">Scalable solutions for large corporate orders with consistent quality and timely delivery across multiple locations.</p>` | Paragraph text / supporting copy. |
| 906 | `                </div>` | Structural/semantic HTML element. |
| 907 | `` |  |
| 908 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 909 | `                    <div class="feature-icon">💝</div>` | Structural/semantic HTML element. |
| 910 | `                    <h3 class="feature-title">Luxury Packaging</h3>` | Structural/semantic HTML element. |
| 911 | `                    <p class="feature-description">Elegant gift boxes, personalized notes, and premium presentation that makes every gift memorable.</p>` | Paragraph text / supporting copy. |
| 912 | `                </div>` | Structural/semantic HTML element. |
| 913 | `` |  |
| 914 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 915 | `                    <div class="feature-icon">🔄</div>` | Structural/semantic HTML element. |
| 916 | `                    <h3 class="feature-title">On-Demand Service</h3>` | Structural/semantic HTML element. |
| 917 | `                    <p class="feature-description">Flexible ordering and quick turnaround for corporate events, client appreciation, and employee recognition programs.</p>` | Paragraph text / supporting copy. |
| 918 | `                </div>` | Structural/semantic HTML element. |
| 919 | `            </div>` | Structural/semantic HTML element. |
| 920 | `` |  |
| 921 | `            <div class="process-section fade-in">` | Structural/semantic HTML element. |
| 922 | `                <h3 class="process-title">Our Gifting Process</h3>` | Structural/semantic HTML element. |
| 923 | `                <div class="process-steps">` | Structural/semantic HTML element. |
| 924 | `                    <div class="process-step">` | Structural/semantic HTML element. |
| 925 | `                        <div class="step-number">1</div>` | Structural/semantic HTML element. |
| 926 | `                        <h4 class="step-title">Consultation</h4>` | Structural/semantic HTML element. |
| 927 | `                        <p class="step-description">Understand your gifting objectives and brand requirements</p>` | Paragraph text / supporting copy. |
| 928 | `                    </div>` | Structural/semantic HTML element. |
| 929 | `                    <div class="process-step">` | Structural/semantic HTML element. |
| 930 | `                        <div class="step-number">2</div>` | Structural/semantic HTML element. |
| 931 | `                        <h4 class="step-title">Customization</h4>` | Structural/semantic HTML element. |
| 932 | `                        <p class="step-description">Design bespoke solutions with branding and personalization</p>` | Paragraph text / supporting copy. |
| 933 | `                    </div>` | Structural/semantic HTML element. |
| 934 | `                    <div class="process-step">` | Structural/semantic HTML element. |
| 935 | `                        <div class="step-number">3</div>` | Structural/semantic HTML element. |
| 936 | `                        <h4 class="step-title">Production</h4>` | Structural/semantic HTML element. |
| 937 | `                        <p class="step-description">Craft your gifts with premium materials and attention to detail</p>` | Paragraph text / supporting copy. |
| 938 | `                    </div>` | Structural/semantic HTML element. |
| 939 | `                    <div class="process-step">` | Structural/semantic HTML element. |
| 940 | `                        <div class="step-number">4</div>` | Structural/semantic HTML element. |
| 941 | `                        <h4 class="step-title">Delivery</h4>` | Structural/semantic HTML element. |
| 942 | `                        <p class="step-description">Coordinate seamless delivery with premium packaging</p>` | Paragraph text / supporting copy. |
| 943 | `                    </div>` | Structural/semantic HTML element. |
| 944 | `                </div>` | Structural/semantic HTML element. |
| 945 | `            </div>` | Structural/semantic HTML element. |
| 946 | `` |  |
| 947 | `            <div class="case-studies">` | Structural/semantic HTML element. |
| 948 | `                <h3 style="text-align: center; margin-bottom: 3rem;">Success Stories</h3>` | Structural/semantic HTML element. |
| 949 | `                <div class="case-studies-grid">` | Grid layout container for responsive card/gallery alignment. |
| 950 | `                    <div class="case-study fade-in">` | Structural/semantic HTML element. |
| 951 | `                        <div class="case-study-image">` | Structural/semantic HTML element. |
| 952 | `                            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80" alt="Corporate Gifting">` | Image element; ensure alt text for accessibility. |
| 953 | `                        </div>` | Structural/semantic HTML element. |
| 954 | `                        <div class="case-study-content">` | Structural/semantic HTML element. |
| 955 | `                            <h4 class="case-study-title">Executive Welcome Kits</h4>` | Structural/semantic HTML element. |
| 956 | `                            <span class="case-study-client">Fortune 500 Technology Company</span>` | Structural/semantic HTML element. |
| 957 | `                            <p class="case-study-description">Custom linen robes and towels for executive onboarding packages across 12 countries.</p>` | Paragraph text / supporting copy. |
| 958 | `                        </div>` | Structural/semantic HTML element. |
| 959 | `                    </div>` | Structural/semantic HTML element. |
| 960 | `` |  |
| 961 | `                    <div class="case-study fade-in">` | Structural/semantic HTML element. |
| 962 | `                        <div class="case-study-image">` | Structural/semantic HTML element. |
| 963 | `                            <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=600&q=80" alt="Client Appreciation">` | Image element; ensure alt text for accessibility. |
| 964 | `                        </div>` | Structural/semantic HTML element. |
| 965 | `                        <div class="case-study-content">` | Structural/semantic HTML element. |
| 966 | `                            <h4 class="case-study-title">Client Appreciation</h4>` | Structural/semantic HTML element. |
| 967 | `                            <span class="case-study-client">Premium Financial Services Firm</span>` | Structural/semantic HTML element. |
| 968 | `                            <p class="case-study-description">Bespoke linen gift sets for top clients, featuring custom embroidery and luxury packaging.</p>` | Paragraph text / supporting copy. |
| 969 | `                        </div>` | Structural/semantic HTML element. |
| 970 | `                    </div>` | Structural/semantic HTML element. |
| 971 | `                </div>` | Structural/semantic HTML element. |
| 972 | `            </div>` | Structural/semantic HTML element. |
| 973 | `        </div>` | Structural/semantic HTML element. |
| 974 | `    </section>` | Structural/semantic HTML element. |
| 975 | `` |  |
| 976 | `    <!-- Hospitality Partnerships Section -->` | Structural/semantic HTML element. |
| 977 | `    <section id="hospitality" class="section service-section">` | Semantic section block improving structure and SEO. |
| 978 | `        <div class="container">` | Structural/semantic HTML element. |
| 979 | `            <div class="service-header">` | Structural/semantic HTML element. |
| 980 | `                <div class="service-title">` | Structural/semantic HTML element. |
| 981 | `                    <div class="service-icon">🏨</div>` | Structural/semantic HTML element. |
| 982 | `                    <h2>Hospitality Partnerships</h2>` | Secondary section heading. |
| 983 | `                </div>` | Structural/semantic HTML element. |
| 984 | `                <p class="service-description">` | Paragraph text / supporting copy. |
| 985 | `                    End-to-end linen programs for hotels, resorts, hospitals, and luxury accommodations. Partner with us for consistent quality and operational excellence.` | Content/whitespace or standard markup. |
| 986 | `                </p>` | Structural/semantic HTML element. |
| 987 | `            </div>` | Structural/semantic HTML element. |
| 988 | `` |  |
| 989 | `            <div class="service-features">` | Structural/semantic HTML element. |
| 990 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 991 | `                    <div class="feature-icon">📊</div>` | Structural/semantic HTML element. |
| 992 | `                    <h3 class="feature-title">Program Management</h3>` | Structural/semantic HTML element. |
| 993 | `                    <p class="feature-description">Comprehensive linen programs with inventory management, replacement cycles, and quality control systems.</p>` | Paragraph text / supporting copy. |
| 994 | `                </div>` | Structural/semantic HTML element. |
| 995 | `` |  |
| 996 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 997 | `                    <div class="feature-icon">⚡</div>` | Structural/semantic HTML element. |
| 998 | `                    <h3 class="feature-title">Rapid Response</h3>` | Structural/semantic HTML element. |
| 999 | `                    <p class="feature-description">Quick turnaround for replacements and emergency orders to maintain your operational standards.</p>` | Paragraph text / supporting copy. |
| 1000 | `                </div>` | Structural/semantic HTML element. |
| 1001 | `` |  |
| 1002 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1003 | `                    <div class="feature-icon">🎯</div>` | Structural/semantic HTML element. |
| 1004 | `                    <h3 class="feature-title">Brand Alignment</h3>` | Structural/semantic HTML element. |
| 1005 | `                    <p class="feature-description">Textiles that reflect your brand identity, from luxury resorts to medical facilities and wellness centers.</p>` | Paragraph text / supporting copy. |
| 1006 | `                </div>` | Structural/semantic HTML element. |
| 1007 | `` |  |
| 1008 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1009 | `                    <div class="feature-icon">📈</div>` | Structural/semantic HTML element. |
| 1010 | `                    <h3 class="feature-title">Performance Analytics</h3>` | Structural/semantic HTML element. |
| 1011 | `                    <p class="feature-description">Data-driven insights on linen performance, usage patterns, and optimization opportunities.</p>` | Paragraph text / supporting copy. |
| 1012 | `                </div>` | Structural/semantic HTML element. |
| 1013 | `            </div>` | Structural/semantic HTML element. |
| 1014 | `        </div>` | Structural/semantic HTML element. |
| 1015 | `    </section>` | Structural/semantic HTML element. |
| 1016 | `` |  |
| 1017 | `    <!-- Customization Section -->` | Structural/semantic HTML element. |
| 1018 | `    <section id="customization" class="section service-section">` | Semantic section block improving structure and SEO. |
| 1019 | `        <div class="container">` | Structural/semantic HTML element. |
| 1020 | `            <div class="service-header">` | Structural/semantic HTML element. |
| 1021 | `                <div class="service-title">` | Structural/semantic HTML element. |
| 1022 | `                    <div class="service-icon">✂️</div>` | Structural/semantic HTML element. |
| 1023 | `                    <h2>Customization Services</h2>` | Secondary section heading. |
| 1024 | `                </div>` | Structural/semantic HTML element. |
| 1025 | `                <p class="service-description">` | Paragraph text / supporting copy. |
| 1026 | `                    Bespoke designs, embroidery, and custom sizing for unique requirements. Transform your vision into exceptional textile solutions.` | Content/whitespace or standard markup. |
| 1027 | `                </p>` | Structural/semantic HTML element. |
| 1028 | `            </div>` | Structural/semantic HTML element. |
| 1029 | `` |  |
| 1030 | `            <div class="service-features">` | Structural/semantic HTML element. |
| 1031 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1032 | `                    <div class="feature-icon">🧵</div>` | Structural/semantic HTML element. |
| 1033 | `                    <h3 class="feature-title">Custom Embroidery</h3>` | Structural/semantic HTML element. |
| 1034 | `                    <p class="feature-description">Precision embroidery with your logos, monograms, or custom designs on any textile product.</p>` | Paragraph text / supporting copy. |
| 1035 | `                </div>` | Structural/semantic HTML element. |
| 1036 | `` |  |
| 1037 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1038 | `                    <div class="feature-icon">🎨</div>` | Structural/semantic HTML element. |
| 1039 | `                    <h3 class="feature-title">Color Matching</h3>` | Structural/semantic HTML element. |
| 1040 | `                    <p class="feature-description">Exact color matching to your brand palette or specific design requirements.</p>` | Paragraph text / supporting copy. |
| 1041 | `                </div>` | Structural/semantic HTML element. |
| 1042 | `` |  |
| 1043 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1044 | `                    <div class="feature-icon">📏</div>` | Structural/semantic HTML element. |
| 1045 | `                    <h3 class="feature-title">Custom Sizing</h3>` | Structural/semantic HTML element. |
| 1046 | `                    <p class="feature-description">Bespoke dimensions and specifications tailored to your unique space and requirements.</p>` | Paragraph text / supporting copy. |
| 1047 | `                </div>` | Structural/semantic HTML element. |
| 1048 | `` |  |
| 1049 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1050 | `                    <div class="feature-icon">🔧</div>` | Structural/semantic HTML element. |
| 1051 | `                    <h3 class="feature-title">Technical Solutions</h3>` | Structural/semantic HTML element. |
| 1052 | `                    <p class="feature-description">Specialized finishes, treatments, and fabric modifications for specific applications.</p>` | Paragraph text / supporting copy. |
| 1053 | `                </div>` | Structural/semantic HTML element. |
| 1054 | `            </div>` | Structural/semantic HTML element. |
| 1055 | `        </div>` | Structural/semantic HTML element. |
| 1056 | `    </section>` | Structural/semantic HTML element. |
| 1057 | `` |  |
| 1058 | `    <!-- Consultation Section -->` | Structural/semantic HTML element. |
| 1059 | `    <section id="consultation" class="section service-section">` | Semantic section block improving structure and SEO. |
| 1060 | `        <div class="container">` | Structural/semantic HTML element. |
| 1061 | `            <div class="service-header">` | Structural/semantic HTML element. |
| 1062 | `                <div class="service-title">` | Structural/semantic HTML element. |
| 1063 | `                    <div class="service-icon">💬</div>` | Structural/semantic HTML element. |
| 1064 | `                    <h2>Professional Consultation</h2>` | Secondary section heading. |
| 1065 | `                </div>` | Structural/semantic HTML element. |
| 1066 | `                <p class="service-description">` | Paragraph text / supporting copy. |
| 1067 | `                    Expert guidance on textile selection, space planning, and operational optimization from our experienced team.` | Content/whitespace or standard markup. |
| 1068 | `                </p>` | Structural/semantic HTML element. |
| 1069 | `            </div>` | Structural/semantic HTML element. |
| 1070 | `` |  |
| 1071 | `            <div class="service-features">` | Structural/semantic HTML element. |
| 1072 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1073 | `                    <div class="feature-icon">🛏️</div>` | Structural/semantic HTML element. |
| 1074 | `                    <h3 class="feature-title">Sleep Sanctuary Design</h3>` | Structural/semantic HTML element. |
| 1075 | `                    <p class="feature-description">Create optimal sleep environments with the right textile combinations for comfort and aesthetics.</p>` | Paragraph text / supporting copy. |
| 1076 | `                </div>` | Structural/semantic HTML element. |
| 1077 | `` |  |
| 1078 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1079 | `                    <div class="feature-icon">🏢</div>` | Structural/semantic HTML element. |
| 1080 | `                    <h3 class="feature-title">Space Planning</h3>` | Structural/semantic HTML element. |
| 1081 | `                    <p class="feature-description">Strategic textile selection and placement for hospitality spaces and commercial environments.</p>` | Paragraph text / supporting copy. |
| 1082 | `                </div>` | Structural/semantic HTML element. |
| 1083 | `` |  |
| 1084 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1085 | `                    <div class="feature-icon">⚙️</div>` | Structural/semantic HTML element. |
| 1086 | `                    <h3 class="feature-title">Operational Efficiency</h3>` | Structural/semantic HTML element. |
| 1087 | `                    <p class="feature-description">Optimize your linen operations for cost efficiency, durability, and guest satisfaction.</p>` | Paragraph text / supporting copy. |
| 1088 | `                </div>` | Structural/semantic HTML element. |
| 1089 | `` |  |
| 1090 | `                <div class="feature-card fade-in">` | Card component wrapper providing framed content and shadows. |
| 1091 | `                    <div class="feature-icon">📋</div>` | Structural/semantic HTML element. |
| 1092 | `                    <h3 class="feature-title">Quality Audits</h3>` | Structural/semantic HTML element. |
| 1093 | `                    <p class="feature-description">Comprehensive assessment of your current textile program with recommendations for improvement.</p>` | Paragraph text / supporting copy. |
| 1094 | `                </div>` | Structural/semantic HTML element. |
| 1095 | `            </div>` | Structural/semantic HTML element. |
| 1096 | `        </div>` | Structural/semantic HTML element. |
| 1097 | `    </section>` | Structural/semantic HTML element. |
| 1098 | `` |  |
| 1099 | `    <!-- CTA Section -->` | Structural/semantic HTML element. |
| 1100 | `    <section class="section cta-section">` | Semantic section block improving structure and SEO. |
| 1101 | `        <div class="container">` | Structural/semantic HTML element. |
| 1102 | `            <h2>Ready to Transform Your Textile Experience?</h2>` | Secondary section heading. |
| 1103 | `            <p>Partner with Secret Linen for bespoke solutions that elevate your space and impress your guests. Our experts are ready to understand your unique requirements.</p>` | Paragraph text / supporting copy. |
| 1104 | `            <a href="/about#contact" class="btn btn-light">Schedule Your Consultation</a>` | Button/CTA element styled as a pill with golden border. |
| 1105 | `        </div>` | Structural/semantic HTML element. |
| 1106 | `    </section>` | Structural/semantic HTML element. |
| 1107 | `` |  |
| 1108 | `    <!-- Footer -->` | Structural/semantic HTML element. |
| 1109 | `    <footer>` | Footer area with info/links, consistent across pages. |
| 1110 | `        <div class="container">` | Structural/semantic HTML element. |
| 1111 | `            <div class="footer-content">` | Footer area with info/links, consistent across pages. |
| 1112 | `                <div class="footer-brand">` | Footer area with info/links, consistent across pages. |
| 1113 | `                    <div class="footer-logo">` | Footer area with info/links, consistent across pages. |
| 1114 | `                        <div class="logo-icon">SL</div>` | Structural/semantic HTML element. |
| 1115 | `                        <div class="logo-text">Secret Linen</div>` | Structural/semantic HTML element. |
| 1116 | `                    </div>` | Structural/semantic HTML element. |
| 1117 | `                    <p class="footer-description">` | Footer area with info/links, consistent across pages. |
| 1118 | `                        Crafting exceptional textile experiences through bespoke solutions, premium materials, and timeless Indian craftsmanship.` | Content/whitespace or standard markup. |
| 1119 | `                    </p>` | Structural/semantic HTML element. |
| 1120 | `                    <div class="footer-contact">` | Footer area with info/links, consistent across pages. |
| 1121 | `                        <div class="contact-item">` | Structural/semantic HTML element. |
| 1122 | `                            <strong>Email:</strong> contact@secretlinen.com` | Structural/semantic HTML element. |
| 1123 | `                        </div>` | Structural/semantic HTML element. |
| 1124 | `                        <div class="contact-item">` | Structural/semantic HTML element. |
| 1125 | `                            <strong>Phone:</strong> +1 (555) 123-4567` | Structural/semantic HTML element. |
| 1126 | `                        </div>` | Structural/semantic HTML element. |
| 1127 | `                        <div class="contact-item">` | Structural/semantic HTML element. |
| 1128 | `                            <strong>Address:</strong> 123 Textile District, Mumbai, India` | Structural/semantic HTML element. |
| 1129 | `                        </div>` | Structural/semantic HTML element. |
| 1130 | `                    </div>` | Structural/semantic HTML element. |
| 1131 | `                </div>` | Structural/semantic HTML element. |
| 1132 | `                ` |  |
| 1133 | `                <div class="footer-links">` | Footer area with info/links, consistent across pages. |
| 1134 | `                    <h4 class="footer-heading">Quick Links</h4>` | Footer area with info/links, consistent across pages. |
| 1135 | `                    <ul>` | Structural/semantic HTML element. |
| 1136 | `                        <li><a href="/home">Home</a></li>` | Structural/semantic HTML element. |
| 1137 | `                        <li><a href="/collections">Collections</a></li>` | Structural/semantic HTML element. |
| 1138 | `                        <li><a href="/services">Services</a></li>` | Structural/semantic HTML element. |
| 1139 | `                        <li><a href="/about">Our Story</a></li>` | Structural/semantic HTML element. |
| 1140 | `                        <li><a href="/about#contact">Contact</a></li>` | Structural/semantic HTML element. |
| 1141 | `                    </ul>` | Structural/semantic HTML element. |
| 1142 | `                </div>` | Structural/semantic HTML element. |
| 1143 | `                ` |  |
| 1144 | `                <div class="footer-links">` | Footer area with info/links, consistent across pages. |
| 1145 | `                    <h4 class="footer-heading">Services</h4>` | Footer area with info/links, consistent across pages. |
| 1146 | `                    <ul>` | Structural/semantic HTML element. |
| 1147 | `                        <li><a href="#gifting">Corporate Gifting</a></li>` | Structural/semantic HTML element. |
| 1148 | `                        <li><a href="#hospitality">Hospitality</a></li>` | Structural/semantic HTML element. |
| 1149 | `                        <li><a href="#customization">Customization</a></li>` | Structural/semantic HTML element. |
| 1150 | `                        <li><a href="#consultation">Consultation</a></li>` | Structural/semantic HTML element. |
| 1151 | `                    </ul>` | Structural/semantic HTML element. |
| 1152 | `                </div>` | Structural/semantic HTML element. |
| 1153 | `            </div>` | Structural/semantic HTML element. |
| 1154 | `            ` |  |
| 1155 | `            <div class="footer-bottom">` | Footer area with info/links, consistent across pages. |
| 1156 | `                <p>&copy; 2023 Secret Linen. All rights reserved. \| Privacy Policy \| Terms of Service</p>` | Paragraph text / supporting copy. |
| 1157 | `            </div>` | Structural/semantic HTML element. |
| 1158 | `        </div>` | Structural/semantic HTML element. |
| 1159 | `    </footer>` | Footer area with info/links, consistent across pages. |
| 1160 | `` |  |
| 1161 | `    <script>` | Inline script starts; behaviors/handlers live here. |
| 1162 | `        // Mobile navigation toggle` | Content/whitespace or standard markup. |
| 1163 | `        document.querySelector('.mobile-toggle').addEventListener('click', function() {` | CSS selector block begins. |
| 1164 | `            document.querySelector('nav.mobile').classList.toggle('active');` | Content/whitespace or standard markup. |
| 1165 | `        });` | Content/whitespace or standard markup. |
| 1166 | `` |  |
| 1167 | `        // Service navigation highlighting` | Content/whitespace or standard markup. |
| 1168 | `        const serviceLinks = document.querySelectorAll('.service-link');` | Content/whitespace or standard markup. |
| 1169 | `        const serviceSections = document.querySelectorAll('.service-section');` | Content/whitespace or standard markup. |
| 1170 | `` |  |
| 1171 | `        // Intersection Observer for service navigation` | Content/whitespace or standard markup. |
| 1172 | `        const observerOptions = {` | CSS selector block begins. |
| 1173 | `            root: null,` | Content/whitespace or standard markup. |
| 1174 | `            rootMargin: '-20% 0px -70% 0px',` | Content/whitespace or standard markup. |
| 1175 | `            threshold: 0` | Content/whitespace or standard markup. |
| 1176 | `        };` | Content/whitespace or standard markup. |
| 1177 | `` |  |
| 1178 | `        const observer = new IntersectionObserver((entries) => {` | CSS selector block begins. |
| 1179 | `            entries.forEach(entry => {` | CSS selector block begins. |
| 1180 | `                if (entry.isIntersecting) {` | CSS selector block begins. |
| 1181 | `                    serviceLinks.forEach(link => {` | CSS selector block begins. |
| 1182 | `                        link.classList.remove('active');` | Content/whitespace or standard markup. |
| 1183 | `                        if (link.getAttribute('href') === `#${entry.target.id}`) {` | CSS selector block begins. |
| 1184 | `                            link.classList.add('active');` | Content/whitespace or standard markup. |
| 1185 | `                        }` | CSS selector block ends. |
| 1186 | `                    });` | Content/whitespace or standard markup. |
| 1187 | `                }` | CSS selector block ends. |
| 1188 | `            });` | Content/whitespace or standard markup. |
| 1189 | `        }, observerOptions);` | Content/whitespace or standard markup. |
| 1190 | `` |  |
| 1191 | `        serviceSections.forEach(section => {` | CSS selector block begins. |
| 1192 | `            observer.observe(section);` | Content/whitespace or standard markup. |
| 1193 | `        });` | Content/whitespace or standard markup. |
| 1194 | `` |  |
| 1195 | `        // Scroll animation for fade-in elements` | Motion/animation for subtle, premium interactions. |
| 1196 | `        const fadeElements = document.querySelectorAll('.fade-in');` | Content/whitespace or standard markup. |
| 1197 | `` |  |
| 1198 | `        const fadeObserver = new IntersectionObserver((entries) => {` | CSS selector block begins. |
| 1199 | `            entries.forEach(entry => {` | CSS selector block begins. |
| 1200 | `                if (entry.isIntersecting) {` | CSS selector block begins. |
| 1201 | `                    entry.target.classList.add('visible');` | Content/whitespace or standard markup. |
| 1202 | `                }` | CSS selector block ends. |
| 1203 | `            });` | Content/whitespace or standard markup. |
| 1204 | `        }, {` | CSS selector block begins. |
| 1205 | `            threshold: 0.1` | Content/whitespace or standard markup. |
| 1206 | `        });` | Content/whitespace or standard markup. |
| 1207 | `` |  |
| 1208 | `        fadeElements.forEach(element => {` | CSS selector block begins. |
| 1209 | `            fadeObserver.observe(element);` | Content/whitespace or standard markup. |
| 1210 | `        });` | Content/whitespace or standard markup. |
| 1211 | `` |  |
| 1212 | `        // Close mobile menu when clicking on a link` | Content/whitespace or standard markup. |
| 1213 | `        document.querySelectorAll('nav.mobile a').forEach(link => {` | CSS selector block begins. |
| 1214 | `            link.addEventListener('click', () => {` | CSS selector block begins. |
| 1215 | `                document.querySelector('nav.mobile').classList.remove('active');` | Content/whitespace or standard markup. |
| 1216 | `            });` | Content/whitespace or standard markup. |
| 1217 | `        });` | Content/whitespace or standard markup. |
| 1218 | `    </script>` | Inline script ends. |
| 1219 | `` |  |