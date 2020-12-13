import React from 'react'

export const TopHead = () => {
  return (
    <div className="wrapper row0">
          <div id="topbar" class="hoc clear">
            <div class="fl_left">
              <ul class="nospace">
                <li>
                  <a href="index.html">
                    <i class="fas fa-home fa-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="#">TENTANG KAMI</a>
                </li>
                <li>
                  <a href="#">STUNTING DI INDONESIA</a>
                </li>
              </ul>
            </div>
            <div class="fl_right">
              <ul class="nospace">
                <li>
                  <i class="fas fa-phone rgtspace-5"></i> +(62)812-xxxx-xxxx
                </li>
                <li>
                  <i class="fas fa-envelope rgtspace-5"></i> info@domain.com
                </li>
              </ul>
            </div>
          </div>
        </div>

  )
}