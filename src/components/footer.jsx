import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div class="wrapper row4">
        <footer id="footer" class="hoc clear">
          <div class="one_third first">
            <h1 class="logoname">Bayiku Sehat</h1>
            <p class="btmspace-30 justify-content">
              Bayiku Sehat dikembangkan untuk memantau tumbuh kembang anak pada
              usia 1000 hari pertama. Bayiku Sehat memantau perkembangan anak
              ditinjau dari tinggi badan, berat badan, dan lingkar kepala Bayi.
              Bayiku Sehat juga dapat menghubungkan orang tua/wali Bayi dengan
              tenaga kesehatan. Bayiku Sehat mengacu pada data yang dimiliki
              oleh WHO. [<a href="#">&hellip;</a>]
            </p>
          </div>
          <div class="one_third">
            <h6 class="heading">Berperan Aktif</h6>
              {/* <DonationForm /> */}
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
    </>
  );
};
