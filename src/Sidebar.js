import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => (
  <div className="sidebar">
    <div>
      <Link to="/hexagon">
        hexagon
      </Link>
    </div>

    <div>
      <Link to="/hexagon-6p">
        hexagon 6p
      </Link>
    </div>

    <div>
      <Link to="/hexagon-12p">
        hexagon 12p
      </Link>
    </div>

    <div>
      <Link to="/hexagon-6L">
        hexagon 6L
      </Link>
    </div>

    <div>
      <Link to="/hexagon-6M">
        hexagon 6M
      </Link>
    </div>

    <div>
      <Link to="/hexagon-6s">
        hexagon 6s
      </Link>
    </div>

    <div>
      <Link to="/hexagon-6sm">
        hexagon 6sm
      </Link>
    </div>

    <div>
      <Link to="/hexagon-6smm">
        hexagon 6smm
      </Link>
    </div>

    <div>
      <Link to="/hexagon-6C">
        hexagon 6C
      </Link>
    </div>

    <div>
    <Link to="/hexagon-6CM">
      hexagon 6CM
    </Link>
  </div>
  </div>
);

export default Sidebar;
