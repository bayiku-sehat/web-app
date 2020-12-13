import React from "react";

export const DonationForm = () => {
  return (
  
      <div class="donation-container fix">
        <div class="donation-box">
          <div class="title">Formulir Donasi</div>

          <div class="fields">
            <input type="text" id="firstName" placeholder="Nama Depan"/>
            <input type="text" id="lastName" placeholder="Nama Belakang"/>
            <input type="text" id="email" placeholder="Email"/>
          </div>

          <div class="amount">
            <div class="button">Rp 50.000</div>
            <div class="button">Rp 150.000</div>
            <div class="button">Rp 300.000</div>
            <div class="button">
              Rp
              <input type="text" class="set-amount" placeholder=""/>
            </div>
          </div>

          <div class="switch">
            <input
              type="radio"
              class="switch-input"
              name="view"
              value="One-Time"
              id="one-time"
              checked=""
            />
            <label for="one-time" class="switch-label switch-label-off">
              One-Time
            </label>
            <input
              type="radio"
              class="switch-input"
              name="view"
              value="Monthly"
              id="monthly"
            />
            <label for="monthly" class="switch-label switch-label-on">
              Monthly
            </label>
            <span class="switch-selection"></span>
          </div>
          <div class="checkboxes">
            <input type="checkbox" id="receipt" class="checkbox" />
            <label for="receipt">Email Me A Receipt</label>
            <br />
            <input type="checkbox" id="anon" class="checkbox" />
            <label for="anon">Give Anonymously</label>
            <br />
            <input type="checkbox" id="list" class="checkbox" />
            <label for="list">Add Me To Email List</label>
          </div>
          <div class="confirm"></div>
          <div class="donate-button">
            <i class="fa fa-credit-card"></i> Berdonasi
          </div>
        </div>
      </div>
  );
};
