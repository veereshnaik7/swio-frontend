import React from "react";
import appleMusic from "../Assets/ImagesFolder/AppMusic@2x.png";
import spotify from "../Assets/ImagesFolder/AppSpotify@2x.png";
import doppler from "../Assets/ImagesFolder/AppDoppler@2x.png";
import shelfCallOut from "../Assets/ImagesFolder/ShelfCallout@2x.png";

const Home = () => {
  return (
    <div>
      <section id="intro">
        <h1>
          Sleeve <span id="s2">2</span>
        </h1>
        <h2>The ultimate music accessory for your Mac.</h2>
        <p id="icons-para">
          Sleeve sits on the desktop, displaying and controlling the music
          you’re currently playing in{" "}
          <img
            className="intro-icons"
            src={appleMusic}
            alt="apple-music"
            height="24px"
            width="24px"
          />{" "}
          Apple Music,{" "}
          <img
            className="intro-icons"
            src={spotify}
            alt="spotify"
            height="24px"
            width="24px"
          />{" "}
          Spotify, and{" "}
          <img
            className="intro-icons"
            src={doppler}
            alt="doppler"
            height="24px"
            width="24px"
          />{" "}
          Doppler.
        </p>
        <div id="button">
          <button id="mac">
            <svg
              viewBox="0 0 22 27"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="27"
              class="relative top-[-2px]"
            >
              <path
                d="M15.946 6.528c-.675 0-1.308.102-1.902.305-.593.203-1.128.409-1.605.618-.477.209-.895.313-1.256.313-.372 0-.788-.099-1.247-.296-.46-.197-.951-.392-1.474-.583a4.836 4.836 0 0 0-1.675-.287c-1.117 0-2.196.304-3.237.914C2.51 8.12 1.657 9.02.994 10.21S0 12.87 0 14.623c0 1.636.276 3.258.829 4.865.552 1.608 1.218 2.968 1.997 4.083.675.94 1.332 1.746 1.972 2.42C5.438 26.662 6.182 27 7.03 27c.558 0 1.044-.093 1.457-.279.413-.185.849-.37 1.308-.557.46-.185 1.032-.278 1.719-.278.71 0 1.273.09 1.692.27.419.18.826.36 1.221.54.396.18.902.27 1.518.27.919 0 1.707-.349 2.364-1.045a19.36 19.36 0 0 0 1.84-2.28c.652-.952 1.12-1.817 1.405-2.595.285-.777.433-1.19.445-1.236a77.33 77.33 0 0 1-.584-.313c-.367-.197-.786-.508-1.257-.931-.47-.424-.884-.984-1.238-1.68-.355-.696-.532-1.544-.532-2.542 0-.87.14-1.622.418-2.254.28-.633.605-1.155.977-1.567.372-.412.71-.725 1.012-.94a7.78 7.78 0 0 0 .506-.374c-.605-.87-1.276-1.494-2.015-1.871-.738-.378-1.416-.607-2.032-.688-.617-.081-1.053-.122-1.309-.122Zm-.96-2.21a6.773 6.773 0 0 0 1.03-1.75A5.321 5.321 0 0 0 16.417.54c0-.21-.017-.39-.052-.54-.675.023-1.384.226-2.129.61a5.92 5.92 0 0 0-1.849 1.444c-.384.43-.727.972-1.03 1.628a4.792 4.792 0 0 0-.453 2.028c0 .104.006.203.017.296.012.093.024.156.035.191.117.024.239.035.367.035.616 0 1.268-.183 1.954-.548a5.639 5.639 0 0 0 1.71-1.367Z"
                fill="currentColor"
              ></path>
            </svg>{" "}
            <span>Mac App Store</span>
          </button>
          <button>
            Buy Directly <span id="price">$5.99</span>
          </button>
        </div>
        <p id="sub">
          No subscriptions. No in-app <br /> purchases. Requires macOS 11 Big
          Sur <br /> or later.
        </p>
        <p id="call-Out">
          {" "}
          <img
            src={shelfCallOut}
            alt="callout-img"
            height="62px"
            width="62px"
          />
          Now with  <span> shelves and a progress bar.</span> See what's new in Sleeve
          2.3
          <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            class="text-gray-400 flex-shrink-0"
          >
            <path
              d="M10 .25C4.615.25.25 4.615.25 10a9.75 9.75 0 0 0 19.5 0c0-5.385-4.365-9.75-9.75-9.75Zm0 1.5a8.25 8.25 0 1 1 0 16.5 8.25 8.25 0 0 1 0-16.5Z"
              fill="currentColor"
            ></path>
            <path
              d="m10.75 13 3-3m0 0-3-3m3 3h-7.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </p>
      </section>

      <section id="content">

      </section>
    </div>

  );
};

export default Home;
