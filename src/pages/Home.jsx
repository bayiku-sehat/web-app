import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "ol/ol.css";
import { Circle, Fill, Style } from "ol/style";
import { Feature, Map, Overlay, View } from "ol/index";
import { OSM, Vector as VectorSource } from "ol/source";
import { Point } from "ol/geom";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { useGeographic } from "ol/proj";

export const Home = () => {
  useGeographic();
  // list data persebaran
  var place = [-100,50];
  var place1 = [-120, 50];
  var point = new Point(place);
  var point1 = new Point(place1);

  useEffect(() => {
    var map = new Map({
      target: "map",
      view: new View({
        center: place,
        zoom: 8,
      }),
      layers: [
        // data1
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(point)],
          }),
          
          style: new Style({
            image: new Circle({
              radius: 9,
              fill: new Fill({ color: "red" }),
            }),
          }),
        }),
        // data2
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(point1)],
          }),
          
          style: new Style({
            image: new Circle({
              radius: 9,
              fill: new Fill({ color: "red" }),
            }),
          }),
        }),
      ],
    });
  });
  return (
    <>
      <div class="wrapper row0">
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
        <div class="wrapper row1">
          <header id="header" class="hoc clear">
            <div id="logo" class="one_half first">
              <h1 class="logoname">
                <Link to="/">
                  <img src="images/bayikusehat.png" alt="" />
                </Link>
              </h1>
            </div>
            <div class="one_half">
              <ul class="nospace clear">
                <li class="one_half first">
                  <div class="block clear">
                    <i class="fas fa-phone"></i>{" "}
                    <span>
                      <strong class="block">Call Us:</strong> +00 (123) 456 7890
                    </span>{" "}
                  </div>
                </li>
                <li class="one_half">
                  <div class="block clear">
                    <i class="far fa-clock"></i>{" "}
                    <span>
                      <strong class="block"> Mon. - Sat.:</strong> 08.00am -
                      18.00pm
                    </span>{" "}
                  </div>
                </li>
              </ul>
            </div>
          </header>
          <nav id="mainav" class="hoc clear">
            <ul class="clear">
              <li class="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <a class="drop" href="#">
                  Pages
                </a>
                <ul>
                  <li>
                    <a href="pages/gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="pages/full-width.html">Full Width</a>
                  </li>
                  <li>
                    <a href="pages/sidebar-left.html">Sidebar Left</a>
                  </li>
                  <li>
                    <a href="pages/sidebar-right.html">Sidebar Right</a>
                  </li>
                  <li>
                    <a href="pages/basic-grid.html">Basic Grid</a>
                  </li>
                  <li>
                    <a href="pages/font-icons.html">Font Icons</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="drop" href="#">
                  Dropdown
                </a>
                <ul>
                  <li>
                    <a href="#">Level 2</a>
                  </li>
                  <li>
                    <a class="drop" href="#">
                      Level 2 + Drop
                    </a>
                    <ul>
                      <li>
                        <a href="#">Level 3</a>
                      </li>
                      <li>
                        <a href="#">Level 3</a>
                      </li>
                      <li>
                        <a href="#">Level 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Level 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Link Text</a>
              </li>
              <li>
                <a href="#">Link Text</a>
              </li>
              <li>
                <a href="#">Link Text</a>
              </li>
              <li>
                <a href="#">Long Link Text</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* navbarend */}
        <div
          class="wrapper bgded overlay"
          // style={{background-image:url('images')}}
        >
          <div id="pageintro" class="hoc clear">
            {/* <!-- ################################################################################################ --> */}
            <article>
              <p>Bayiku Sehat</p>
              <h3 class="heading">Bayiku Sehat</h3>
              <p>Bayiku Sehat</p>
              <footer>
                <a class="btn" href="#">
                  Jadi Donatur
                </a>
                <a class="btn" href="#">
                  Jadi Relawan
                </a>
              </footer>
            </article>
            {/* <!-- ################################################################################################ --> */}
          </div>
        </div>

        {/* Fun Fact */}
        <div class="wrapper row2">
          <section class="hoc container clear">
            {/* <div class="sectiontitle">
              <h6 class="heading">Vitae congue at urna suspendisse</h6>
              <p>Vestibulum nisi ut lectus proin lectus ante fermentum sed</p>
            </div> */}
            <div class="group center">
              <article class="one_third first">
                <h1 class="heading">1/3</h1>
                <p>Anak Indonesia Menderita Stunting</p>
              </article>
              <article class="one_third">
                <h6 class="heading">300 T </h6>
                <p>Kerugian Indonesia per tahun akibat stunting</p>
              </article>
              <article class="one_third">
                <h6 class="heading">35%</h6>
                <p>Penderita stunting memiliki IQ kurang dari 70</p>
              </article>
            </div>
          </section>
        </div>
        {/* berita start */}
        <div class="wrapper row3">
          <main class="hoc container clear">
            <div class="sectiontitle">
              <h6 class="heading">Seputar Stunting</h6>
              <p>Berita Terkini Mengenai Stunting</p>
            </div>
            <ul class="nospace group overview">
              <li class="one_third">
                <figure>
                  <a href="#">
                    <img src="images/demo/348x261.png" alt="" />
                  </a>
                  <figcaption>
                    <h6 class="heading">Bayiku Sehat</h6>
                    <p>Bayiku Sehat</p>
                  </figcaption>
                </figure>
              </li>
              <li class="one_third">
                <figure>
                  <a href="#">
                    <img src="images/demo/348x261.png" alt="" />
                  </a>
                  <figcaption>
                    <h6 class="heading">Bayiku Sehat</h6>
                    <p>Bayiku Sehat</p>
                  </figcaption>
                </figure>
              </li>
              <li class="one_third">
                <figure>
                  <a href="#">
                    <img src="images/demo/348x261.png" alt="" />
                  </a>
                  <figcaption>
                    <h6 class="heading">Bayiku Sehat</h6>
                    <p>Bayiku Sehat</p>
                  </figcaption>
                </figure>
              </li>
              <li class="one_third">
                <figure>
                  <a href="#">
                    <img src="images/demo/348x261.png" alt="" />
                  </a>
                  <figcaption>
                    <h6 class="heading">Bayiku Sehat</h6>
                    <p>Bayiku Sehat</p>
                  </figcaption>
                </figure>
              </li>
              <li class="one_third">
                <figure>
                  <a href="#">
                    <img src="images/demo/348x261.png" alt="" />
                  </a>
                  <figcaption>
                    <h6 class="heading">Bayiku Sehat</h6>
                    <p>Bayiku Sehat</p>
                  </figcaption>
                </figure>
              </li>
              <li class="one_third">
                <figure>
                  <a href="#">
                    <img src="images/demo/348x261.png" alt="" />
                  </a>
                  <figcaption>
                    <h6 class="heading">Bayiku Sehat</h6>
                    <p>Bayiku Sehat</p>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <div class="clear"></div>
          </main>
        </div>
        {/* peta persebaran */}
        <div class="wrapper gradient">
          <section id="cta" class="hoc container clear">
            <div class="sectiontitle">
              <h6 class="heading">Peta Persebaran</h6>
              <p>Stunting di Indonesia</p>
              <div id="map" class="map"></div>
            </div>
          </section>
        </div>

        {/* footer start */}
        <div class="wrapper row4">
          <footer id="footer" class="hoc clear">
            <div class="one_third first">
              <h1 class="logoname">Bayiku Sehat</h1>
              <p class="btmspace-30 justify-content">
                Bayiku Sehat dikembangkan untuk memantau tumbuh kembang anak
                pada usia 1000 hari pertama. Bayiku Sehat memantau perkembangan
                anak ditinjau dari tinggi badan, berat badan, dan lingkar kepala
                Bayi. Bayiku Sehat juga dapat menghubungkan orang tua/wali Bayi
                dengan tenaga kesehatan. Bayiku Sehat mengacu pada data yang
                dimiliki oleh WHO. [<a href="#">&hellip;</a>]
              </p>
              {/* <ul class="faico clear">
                  <li>
                    <a class="faicon-dribble" href="#">
                      <i class="fab fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a class="faicon-facebook" href="#">
                      <i class="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a class="faicon-google-plus" href="#">
                      <i class="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a class="faicon-linkedin" href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a class="faicon-twitter" href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a class="faicon-vk" href="#">
                      <i class="fab fa-vk"></i>
                    </a>
                  </li>
                </ul> */}
            </div>
            <div class="one_third">
              <h6 class="heading">Berperan Aktif</h6>
              <ul class="nospace linklist">
                <li>
                  <Link to="/">Penggalangan Dana</Link>
                </li>
                <li>
                  <a href="#">Kerjasama</a>
                </li>
                <li>
                  <a href="#">Donasi</a>
                </li>
              </ul>
            </div>
            <div class="one_third">
              <h6 class="heading">Hubungi Kami</h6>
              <p class="nospace btmspace-15">
                Untuk Mendapatkan info terkini seputar Stunting di Indonesia
              </p>
              <form method="post" action="#">
                <fieldset>
                  <legend>Newsletter:</legend>
                  <input
                    class="btmspace-15"
                    type="text"
                    value=""
                    placeholder="Nama"
                  />
                  <input
                    class="btmspace-15"
                    type="text"
                    value=""
                    placeholder="Email"
                  />
                  <button type="submit" value="submit">
                    SUBMIT
                  </button>
                </fieldset>
              </form>
            </div>
          </footer>
        </div>

        <div class="wrapper row5">
          <div id="copyright" class="hoc clear">
            <p class="fl_left">
              Copyright &copy; 2020 - All Rights Reserved -{" "}
              <a href="#">Bayiku Sehat</a>
            </p>
          </div>
        </div>

        <a id="backtotop" href="#top">
          <i class="fas fa-chevron-up"></i>
        </a>
      </div>
    </>
  );
};
