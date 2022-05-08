import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <div className="logo">
        <h3><Link to="/">portfolio</Link></h3>
    </div>

    <nav>
        <ul>
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>
              <Link to="/blog">作品説明</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default Header