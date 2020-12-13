import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataBabies } from "../store/action/BabiesAction";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { PetaSebaran } from "../components/PetaSebaran";
import { DonateModal } from "../components/DonateModal";
import { DonationForm } from "../components/DonationForm";
import { TopHead } from "../components/TopHead";

import "ol/ol.css";
import { Circle, Fill, Style } from "ol/style";
import { Feature, Map, Overlay, View } from "ol/index";
import { OSM, Vector as VectorSource } from "ol/source";
import { Point } from "ol/geom";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { useGeographic } from "ol/proj";

import CanvasJSReact from "../asset/canvasjs.react";

export const Home = () => {
  useGeographic();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.ReducerStunting.dataStunting);
  const dataLoading = useSelector((state) => state.ReducerStunting.dataLoading);

  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const dataNormal = [];
  const dataStunting = [];
  const dataLabel = [];
  // data diandaikan hasil dari fetching
  useEffect(() => {
    dispatch(fetchDataBabies());
  }, []);

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
  });

  if (dataLoading) {
    return <p>Loading... Please Wait</p>;
  }

  //memisahkan data berdasarkan status
  for (let i = 0; i < data.length; i++) {
    console.log(dataNormal);
    if (data[i].status == "normal") {
      dataNormal.push(data[i]);
    } else {
      dataStunting.push(data[i]);
    }
  }

  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y} anak",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y} anak",
        dataPoints: [
          { y: dataNormal.length, label: "Anak Normal" },
          { y: dataStunting.length, label: "Anak dengan Kasus Stunting" },
        ],
      },
    ],
  };

  // const options1 = {
  //   animationEnabled: true,
  //   title: {
  //     text: "Monthly Sales - 2017",
  //   },
  //   axisX: {
  //     valueFormatString: "MMM",
  //   },
  //   axisY: {
  //     title: "Sales (in USD)",
  //     prefix: "$",
  //   },
  //   data: [
  // {
  //   yValueFormatString: "$#,###",
  //   xValueFormatString: "MMMM",
  //   type: "spline",
  //   dataPoints: [
  //     { x: new Date(2017, 0), y: 25060 },
  //     { x: new Date(2017, 1), y: 27980 },
  //     { x: new Date(2017, 2), y: 42800 },
  //     { x: new Date(2017, 3), y: 32400 },
  //     { x: new Date(2017, 4), y: 35260 },
  //     { x: new Date(2017, 5), y: 33900 },
  //     { x: new Date(2017, 6), y: 40000 },
  //     { x: new Date(2017, 7), y: 52500 },
  //     { x: new Date(2017, 8), y: 32300 },
  //     { x: new Date(2017, 9), y: 42000 },
  //     { x: new Date(2017, 10), y: 37160 },
  //     { x: new Date(2017, 11), y: 38400 },
  //   ],
  // },
  // {
  // yValueFormatString: "$#,###",
  // xValueFormatString: "MMMM",
  // type: "spline",
  // dataPoints: [
  // { x: "22", y: 22000 },
  // { x: new Date(2017, 1), y: 27980 },
  // { x: new Date(2017, 2), y: 42800 },
  // { x: new Date(2017, 3), y: 32400 },
  // { x: new Date(2017, 4), y: 35260 },
  // { x: new Date(2017, 5), y: 33900 },
  // { x: new Date(2017, 6), y: 40000 },
  // { x: new Date(2017, 7), y: 52500 },
  // { x: new Date(2017, 8), y: 32300 },
  // { x: new Date(2017, 9), y: 42000 },
  // { x: new Date(2017, 10), y: 37160 },
  // { x: new Date(2017, 11), y: 38400 },
  //       ],
  //     },
  //   ],
  // };
  //define data label
  // for (let i = 0; i < data.length; i++) {
  //   dataLabel.push(data[i].createdAt);
  // }

  var place = [106.8266, -6.175]; //pinpoint jakarta
  // list data persebaran
  var place1 = [106.8266, -6.18];
  var point = new Point(place);
  var point1 = new Point(place1);

  return (
    <div className="d-flex">
      <div className="sidebar">
        <DonationForm style={{ height: "1000px" }} />
      </div>
      <div className="wrapper row0" style={{marginLeft:"400px"}}>
        <TopHead / >
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
              {/* <footer>
                <a
                  href="#"
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Jadi Donatur
                </a>
                <a class="btn" href="#">
                  Jadi Relawan
                </a>
              </footer> */}
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
              <p className="fs-5">
                Data Terkini Mengenai Stunting di Indonesia
              </p>
            </div>
            <div className="row one_third">
              <CanvasJSChart options={options} />
            </div>
            
            <div class="clear"></div>
          </main>
        </div>
        {/* peta persebaran */}
        <PetaSebaran />
        {/* footer start */}
        <Footer />

        <a id="backtotop" href="#top">
          <i class="fas fa-chevron-up"></i>
        </a>
        {/* <!-- Modal --> */}
        {/* <DonateModal /> */}
      </div>

      
    </div>
  );
};
