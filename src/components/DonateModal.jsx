import React from "react";
import { DonationForm } from "../components/DonationForm";

export const DonateModal = () => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <DonationForm />
        </div>
      </div>
    </div>
  );
};
