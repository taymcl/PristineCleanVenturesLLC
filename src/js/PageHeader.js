import React, {useEffect} from 'react';
import '../css/PageHeader.css'; // Import the CSS file

const PageHeader = () => {
  useEffect(() => {
    document.querySelector('.navbar-nav').classList.add('fade-in');
    document.querySelector('.name').classList.add('fade-in');
  }, []);

    return (
    <div>
      <div className="header">
        <h1 className="name">Pristine Clean Ventures LLC</h1>
      </div>
      <div className="navBar">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light w-100">
              {/* Remove the "mx-auto" class from the navbar-nav */}
              <ul className="navbar-nav w-100 d-flex justify-content-between">
                <li className="col-md-4">
                  <a href="/" className="nav-link">Home</a>
                </li>
                <li className="col-md-4">
                  <a href="/about" className="nav-link">About</a>
                </li>
                <li className="col-md-4">
                  <a href="/contact" className="nav-link">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;