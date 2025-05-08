import React from "react";
import './AppDownload.css'

const AppDownload = () => {
  return (
    <>
      <div class="p-5 my-5 text-center rounded-3" id="mobile-app">
        <h1 class="text-body-emphasis">For Better Experience Download <br/> App Here!</h1>{" "}
        <div class="d-inline-flex gap-2 mb-5 ">
          <a href="#" className="hover-scale">
            <img src="/play_store.png" alt="" />
          </a>
          <a href="#" className="hover-scale">
            <img src="/app_store.png" alt="" />
          </a>
        </div>{" "}
      </div>
    </>
  );
};

export default AppDownload;
