import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import FlashcardPresentation from './Flashcards';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light small navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://i.pinimg.com/736x/da/c7/58/dac758d7606690d057a9cbba5f259154.jpg"
              alt=""
              height={50}
              width={50}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/services"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Service1">
                      Service 1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Service2">
                      Service 2
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Service3">
                      Service 3
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Service4">
                      Service 4
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Service5">
                      Service 5
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Service6">
                      Service 6
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Service7">
                      Service 7
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Service8">
                      Service 8
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Service9">
                      Service 9
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Service10">
                      Service 10
                    </Link>
                  </li>

                  
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/testimonials">
                  Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user/create">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <button
          style={{ backgroundColor: 'black', color: 'white' }}
          className="btn float-end btn-sm"
        >
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </button>

        <div className="d-flex" style={{ height: 2 }}>
          <div className="vr  mx-3" />
        </div>
      </nav>
      <Carousel />
      <Portfolio />
      <div>
        <FlashcardPresentation />
      </div>
      <div>
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}
