import React, { useEffect, useRef } from "react";
import appleMusic from "../Assets/ImagesFolder/AppMusic@2x.png";
import spotify from "../Assets/ImagesFolder/AppSpotify@2x.png";
import doppler from "../Assets/ImagesFolder/AppDoppler@2x.png";
import shelfCallOut from "../Assets/ImagesFolder/ShelfCallout@2x.png";
import contentBoxLastImg from "../Assets/ImagesFolder/ArtPetitBiscuit.jpg";
import contentBoxFirstImg from "../Assets/ImagesFolder/ArtSlowMagic.jpg";
import contentBoxSecondImg from "../Assets/ImagesFolder/ArtCarolinePolachek.jpg";
import contentBoxThirdImg from "../Assets/ImagesFolder/ArtChelseaCutler.jpg";
import content2LeftBg from "../Assets/ImagesFolder/ThemeIcon@2x.png";
import content2Left1 from "../Assets/ImagesFolder/ThemeUIActive@2x.png";
import content2Left2 from "../Assets/ImagesFolder/ThemeUI@2x.png";
import content2RightBg from "../Assets/ImagesFolder/ThemeFile@2x.png";
import content2Right1 from "../Assets/ImagesFolder/ThemeExport@2x.png";

import overlapImg1 from "../Assets/ImagesFolder/IconArrayHotkeys@2x.png";
import overlapImg2 from "../Assets/ImagesFolder/IconArrayWindow@2x.png";
import overlapImg3 from "../Assets/ImagesFolder/IconArrayInterface@2x.png";
import overlapImg4 from "../Assets/ImagesFolder/IconArrayLayout@2x.png";
import overlapImg5 from "../Assets/ImagesFolder/IconArrayTheme@2x.png";
import overlapImg6 from "../Assets/ImagesFolder/IconArrayTrack@2x.png";
import overlapImg7 from "../Assets/ImagesFolder/IconArrayPosition@2x.png";
import overlapImg8 from "../Assets/ImagesFolder/IconArrayArtwork@2x.png";
import overlapImg9 from "../Assets/ImagesFolder/IconArraySettings@2x.png";
import artworkLeft1 from "../Assets/ImagesFolder/IconArrayArtwork@2x.png";
import artworkRight1 from "../Assets/ImagesFolder/Artwork1@2x.jpg";
import artworkRight2 from "../Assets/ImagesFolder/Artwork2@2x.jpg";
import artworkRight3 from "../Assets/ImagesFolder/Artwork3@2x.jpg";
import typographyleft1 from "../Assets/ImagesFolder/IconArrayTrack@2x.png";
import typographyRight1 from "../Assets/ImagesFolder/Typography1@2x.jpg";
import typographyRight2 from "../Assets/ImagesFolder/Typography2@2x.jpg";
import intefaceLeft1 from "../Assets/ImagesFolder/IconArrayLayout@2x.png";
import intefaceLeft2 from "../Assets/ImagesFolder/IconArrayPosition@2x.png";
import intefaceLeft3 from "../Assets/ImagesFolder/IconArrayInterface@2x.png";
import intefaceRight1 from "../Assets/ImagesFolder/Interface1@2x.jpg"
import intefaceRight2 from "../Assets/ImagesFolder/Interface2@2x.jpg"

import settingsLeft1 from "../Assets/ImagesFolder/IconArrayWindow@2x.png"
import settingsLeft2 from "../Assets/ImagesFolder/IconArrayHotkeys@2x.png"
import settingsLeft3 from "../Assets/ImagesFolder/IconArraySettings@2x.png"

import settingsRight1 from "../Assets/ImagesFolder/Settings1@2x.jpg"
import settingsRight2 from "../Assets/ImagesFolder/Settings2@2x.jpg"
import settingsRight3 from "../Assets/ImagesFolder/Settings3@2x.jpg"

const Home = () => {

  // const scrollref=useRef(null)
  // useEffect(()=>{
  //   if(scrollref.current){
  //     scrollref.current.scrollTop=500
  //   }
  // },[])
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
          Now with <span> shelves and a progress bar.</span> See what's new in
          Sleeve 2.3
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
        <p id="new">
          NEW IN <span>2.0</span>
        </p>
        <h4>Themes. Unlimited themes.</h4>
        <p id="themes-content">
          Themes in Sleeve make creating and switching between customizations
          easy. Share your own creations with friends and install as many themes
          as you like with just a double-click.
        </p>
        <div id="contentBox">
          <div id="img-content">
            <div id="contentBox1">
              <img src={contentBoxFirstImg} alt="" />
              <span>
                <b>Eternal Sunshine</b>
              </span>
              <span>Forgotten Feels</span>
              <span>Slow Magic</span>
            </div>
            <div id="contentBox2">
              <img src={contentBoxSecondImg} alt="" />
              <div id="contentBox2-right">
                <span>
                  <b>Bunny Is a Rider</b>
                </span>
                <span style={{ opacity: "0.7" }}>
                  Desire, I Want to Turn Into You
                </span>
                <span style={{ opacity: "0.7" }}>Caroline Polachek</span>
                <span style={{ marginTop: "10px" }}>
                  <svg
                    viewBox="0 0 65 21"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    height="16"
                    class="transform-gpu"
                  >
                    <path d="M61.59 16.578c.625 0 .922-.297.922-.922V5.07c0-.648-.297-.93-.922-.93h-1.727c-.625 0-.93.305-.93.93v5c-.078-.273-.273-.5-.609-.703l-8.031-4.719c-.273-.156-.523-.265-.805-.265-.531 0-1 .406-1 1.195v9.555c0 .789.469 1.195 1 1.195.282 0 .54-.101.805-.265l8.031-4.72c.328-.202.531-.429.61-.702v5.015c0 .625.304.922.93.922h1.726ZM30.426 17.65c.694 0 1.037-.334 1.037-1.037V4.704c0-.73-.343-1.046-1.037-1.046h-1.951c-.695 0-1.038.343-1.038 1.046v11.91c0 .702.343 1.036 1.038 1.036h1.95Zm6.1 0c.694 0 1.036-.334 1.036-1.037V4.704c0-.73-.342-1.046-1.037-1.046h-1.95c-.695 0-1.038.343-1.038 1.046v11.91c0 .702.343 1.036 1.037 1.036h1.951ZM5.144 16.578c.617 0 .921-.297.921-.922v-5.015c.079.273.282.5.618.703l8.03 4.719c.266.164.516.265.798.265.539 0 1-.406 1-1.195V5.578c0-.789-.461-1.195-1-1.195-.282 0-.532.11-.797.265l-8.031 4.72c-.336.202-.54.429-.618.702v-5c0-.648-.304-.93-.921-.93H3.41c-.617 0-.922.305-.922.93v10.586c0 .625.305.922.922.922h1.735Z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div id="contentBox3">
              <img src={contentBoxThirdImg} alt="" />
              <div id="contentBox3-bottom">
                <span>
                  <svg
                    viewBox="0 0 65 21"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    height="16"
                    class="transform-gpu"
                  >
                    <path d="M61.59 16.578c.625 0 .922-.297.922-.922V5.07c0-.648-.297-.93-.922-.93h-1.727c-.625 0-.93.305-.93.93v5c-.078-.273-.273-.5-.609-.703l-8.031-4.719c-.273-.156-.523-.265-.805-.265-.531 0-1 .406-1 1.195v9.555c0 .789.469 1.195 1 1.195.282 0 .54-.101.805-.265l8.031-4.72c.328-.202.531-.429.61-.702v5.015c0 .625.304.922.93.922h1.726ZM30.426 17.65c.694 0 1.037-.334 1.037-1.037V4.704c0-.73-.343-1.046-1.037-1.046h-1.951c-.695 0-1.038.343-1.038 1.046v11.91c0 .702.343 1.036 1.038 1.036h1.95Zm6.1 0c.694 0 1.036-.334 1.036-1.037V4.704c0-.73-.342-1.046-1.037-1.046h-1.95c-.695 0-1.038.343-1.038 1.046v11.91c0 .702.343 1.036 1.037 1.036h1.951ZM5.144 16.578c.617 0 .921-.297.921-.922v-5.015c.079.273.282.5.618.703l8.03 4.719c.266.164.516.265.798.265.539 0 1-.406 1-1.195V5.578c0-.789-.461-1.195-1-1.195-.282 0-.532.11-.797.265l-8.031 4.72c-.336.202-.54.429-.618.702v-5c0-.648-.304-.93-.921-.93H3.41c-.617 0-.922.305-.922.93v10.586c0 .625.305.922.922.922h1.735Z"></path>
                  </svg>
                </span>
                <span>Are You Listening</span>
                <span>How To Be Human</span>
                <span>Chelsea Cutler</span>
              </div>
            </div>
            <div id="contentBox4">
              <img src={contentBoxLastImg} alt="" />
              <div id="contentBox4-bottom">
                <p>Creation Comes Alive</p>
                <span>Petit Biscuit</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="content2">
        <div id="left">
          <img id="bg-img" src={content2LeftBg} alt="" />
          <div id="left-left">
            <p className="content2-heading">Change it up</p>
            <p className="content2-para">
              Switch between themes <br /> with just a click.
            </p>
            <p className="content2-para">
              Modify the built-in themes or create your own using <br />
              Sleeve’s extensive preferences.
            </p>
          </div>
          <div id="left-right">
            <img id="left-1stimg" src={content2Left1} alt="" />
            <img id="left-2ndimg" src={content2Left2} alt="" />
          </div>
          <div id="left-right"></div>
        </div>
        <div id="right">
          <img id="rightbg-img" src={content2RightBg} alt="" />
          <div id="right-left">
            <p className="content2-heading">Shareable</p>
            <p className="content2-para">
              Export your themes and share them with friends using the handy new
              Sleeve Theme file format.
            </p>
            <p className="content2-para">
              Install themes from anywhere with a double-click or a drag and
              drop.
            </p>
          </div>
          <div id="right-right">
            <img id="right-1img" src={content2Right1} alt="" />
          </div>
        </div>
      </section>
      <section id="customization">
        <p id="coustum-heading"> CUSTOMIZATION</p>
        <h2>Countless ways to customize.</h2>
        <p id="coustum-intro">
          Customization is at the core of the Sleeve experience — choose from
          any combination of design choices, behaviors and settings to make
          Sleeve at home on your desktop.
        </p>
        <div id="img-overlap">
          <img src={overlapImg1} alt="" id="img1" />
          <img src={overlapImg2} alt="" id="img2" />
          <img src={overlapImg3} alt="" id="img3" />
          <img src={overlapImg4} alt="" id="img4" />
          <img src={overlapImg5} alt="" id="img5" />
          <img src={overlapImg6} alt="" id="img6" />
          <img src={overlapImg7} alt="" id="img7" />
          <img src={overlapImg8} alt="" id="img8" />
          <img src={overlapImg9} alt="" id="img9" />
        </div>
      </section>
      <section id="scroll-section">
        <div id="scroll-sectionContent">
          <div id="artwork">
            <div id="artwork-content">
              <img className="scorll-leftImg" src={artworkLeft1} alt="" />
              <h3
                className="scroll-sectionContent-heading"
                style={{ marginBottom: "6rem" }}
              >
                Artwork
              </h3>
              <p className="scroll-sectionContent-para">
                Scale artwork all the way up or all the way down. Round the
                corners or leave them square.
              </p>
              <p className="scroll-sectionContent-para">
                Choose shadow and lighting effects to bring your album artwork
                to life.
              </p>
              <p className="scroll-sectionContent-para">
                Or hide it completely.
              </p>
            </div>
            <div id="artwork-image">
              <img id="artworkRight1img" src={artworkRight1} alt="" />
              <img id="artworkRight2img" src={artworkRight2} alt="" />
              <img id="artworkRight3img" src={artworkRight3} alt="" />
            </div>
          </div>
          <div id="typography">
            <div id="typography-content">
              <img className="scorll-leftImg" src={typographyleft1} alt="" />
              <h3
                className="scroll-sectionContent-heading"
                style={{ marginBottom: "6rem" }}
              >
                Typography
              </h3>
              <p className="scroll-sectionContent-para">
                Pick the track info you want to display, and then exactly how to
                display it.
              </p>
              <p className="scroll-sectionContent-para">
                Choose the fonts, weights, sizes, and transparency to use for
                each line, along with customizing color and shadow.
              </p>
            </div>
            <div id="typography-image">
              <img id="typographyRight1" src={typographyRight1} alt="" />
              <img id="typographyRight2" src={typographyRight2} alt="" />
            </div>
          </div>
          <div id="interface">
            <div id="interface-content">
              <div id="interface-overlap">
                <img
                  className="scorll-leftImg"
                  id="interfaceLeft1"
                  src={intefaceLeft1}
                  alt=""
                />
                <img
                  className="scorll-leftImg"
                  id="interfaceLeft2"
                  src={intefaceLeft2}
                  alt=""
                />
                <img
                  className="scorll-leftImg"
                  id="interfaceLeft3"
                  src={intefaceLeft3}
                  alt=""
                />
              </div>
              <h3
                className="scroll-sectionContent-heading"
                style={{ marginBottom: "6rem" }}
              >
                Interface
              </h3>
              <p className="scroll-sectionContent-para">
                Customize the layout, alignment and position to fit your setup.
              </p>
              <p className="scroll-sectionContent-para">
                Show and hide playback controls. Add a backdrop layer and
                customize it.
              </p>
            </div>
            <div id="interface-image">
            <img id="intefaceRight1" src={intefaceRight1} alt="" />
            <img id="intefaceRight2" src={intefaceRight2} alt="" />

            </div>
          </div>
          <div id="settings">
            <div id="settings-content">
            <div id="interface-overlap">
                <img
                  className="scorll-leftImg"
                  id="interfaceLeft1"
                  src={settingsLeft1}
                  alt=""
                />
                <img
                  className="scorll-leftImg"
                  id="interfaceLeft2"
                  src={settingsLeft2}
                  alt=""
                />
                <img
                  className="scorll-leftImg"
                  id="interfaceLeft3"
                  src={settingsLeft3}
                  alt=""
                />
              </div>
              <h3
                className="scroll-sectionContent-heading"
                style={{ marginBottom: "6rem" }}
              >
                Settings
              </h3>
              <p className="scroll-sectionContent-para">
              Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it.
              </p>
              <p className="scroll-sectionContent-para">
              Show it in the Dock, choose from custom icons, or keep it on the Desktop only.
              </p>
              <p className="scroll-sectionContent-para">
              Set your custom keyboard shortcuts and integrate with the apps you use.
              </p>

            </div>
            <div id="settings-image">
            <img id="settingsRight1" src={settingsRight1} alt="" />
            <img id="settingsRight2" src={settingsRight2} alt="" />
            <img id="settingsRight3" src={settingsRight3} alt="" />
            </div>

          </div>
        </div>
        <div id="scroll-sectionBox">

        </div>
      </section>
      <section id="like-scroll">
        <p> INTEGRATIONS</p>
        <h2>Like, Scrobble.</h2>
      </section>
    </div>
  );
};

export default Home;
