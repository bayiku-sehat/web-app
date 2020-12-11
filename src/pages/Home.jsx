import React, { useEffect } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import "ol/ol.css";
import { Circle, Fill, Style } from "ol/style";
import { Feature, Map, Overlay, View } from "ol/index";
import { OSM, Vector as VectorSource } from "ol/source";
import { Point } from "ol/geom";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { useGeographic } from "ol/proj";

var shapefile = require("shapefile");

export const Home = () => {
  useGeographic();
  var place = [106.8266, -6.175]; //pinpoint jakarta
  // list data persebaran
  var place1 = [106.8266, -6.18];
  var point = new Point(place);
  var point1 = new Point(place1);

  useEffect(() => {
    shapefile
      .open("web-client/src/map/SHP_Indonesia_provinsi")
      .then((source) =>
        source.read().then(function log(result) {
          if (result.done) return;
          console.log(result.value);
          console.log("a");
          return source.read().then(log);
        })
      )
      .catch((error) => console.error(error.stack));
  });

  useEffect(() => {
    var map = new Map({
      target: "map",
      view: new View({
        center: place,
        zoom: 11,
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
              fill: new Fill({ color: "yellow" }),
            }),
          }),
        }),
      ],
    });
  }, [point]);

  return (
    <>
      <div class="wrapper row0">
        <Header />
        <div
          class="wrapper bgded overlay"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1434425937023-dd37d1512d9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTJ8fGJhYmllc3xlbnwwfDB8MHw%3D&w=1000&q=80)",
          }}
        >
          <div id="pageintro" class="hoc clear">
            <article>
              <p>Bayiku Sehat</p>
              <h3 class="heading">Mari Bersama Ceriakan Hari Mereka</h3>
              <p>Bayi Sehat, Indonesia Kuat</p>
              <footer>
                <a class="btn" href="#">
                  Jadi Donatur
                </a>
                <a class="btn" href="#">
                  Jadi Relawan
                </a>
              </footer>
            </article>
          </div>
        </div>

        {/* Fun Fact */}
        <div class="wrapper row2">
          <section class="hoc container clear">
            <div class="group center">
              <article class="one_third first">
                <h1 className="fs-1 fw-bolder">1/3</h1>
                <p className="fs-3 fw-bolder">
                  Anak Indonesia Menderita Stunting
                </p>
              </article>
              <article class="one_third">
                <h6 className="fs-1 fw-bolder">300 T </h6>
                <p className="fs-3 fw-bolder">
                  Kerugian Indonesia per tahun akibat stunting
                </p>
              </article>
              <article class="one_third">
                <h6 className="fs-1 fw-bolder">35%</h6>
                <p className="fs-3 fw-bolder">
                  Penderita stunting memiliki IQ kurang dari 70
                </p>
              </article>
            </div>
          </section>
        </div>
        {/* berita start */}
        <div class="wrapper row3">
          <main class="hoc container clear">
            <div class="sectiontitle">
              <h6 className="fs-1 fw-bolder">Seputar Stunting</h6>
              <p className="fs-5">Berita Terkini Mengenai Stunting</p>
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
            </ul>
            <div class="clear"></div>
          </main>
        </div>
        {/* peta persebaran */}
        <div class="wrapper gradient">
          <section id="cta" class="hoc container clear">
            <div class="sectiontitle">
              <h6 className="heading fs-1 fw-bolder">Peta Persebaran</h6>
              <p className="heading fs-5 fw-bolder">Stunting di Indonesia</p>
              <div id="map" class="map"></div>
            </div>
          </section>
        </div>

        {/* footer start */}
        <Footer />

        <a id="backtotop" href="#top">
          <i class="fas fa-chevron-up"></i>
        </a>
      </div>
    </>
  );
};
