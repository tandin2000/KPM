import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { intersectingAnimation } from "../../lib/helpers";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";

const VideoAreaTwo = () => {
  useEffect(() => {
    intersectingAnimation();
  }, []);

  return (
    <section className="video-area inner-video-area has-animation pb-130">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-md-7 order-0 order-lg-2">
            <div className="video-img-wrap">
              <img src="/img/images/video_img01.png" alt="" />
              <img src="/img/images/video_img02.png" alt="" />
            
            </div>
          </div>

          <div className="col-lg-7">
            <div className="video-content">
              <div className="section-title mb-50">
                <span className="sub-title">
                  <svg
                    viewBox="0 0 41 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.2826 37.5886C36.6662 36.9737 38.8185 36.205 40.8939 36.205C38.8185 36.205 36.6662 35.4363 35.2826 34.8213C34.6676 33.4377 33.8989 31.2854 33.8989 29.21C33.8989 31.2854 33.1303 33.4377 32.5153 34.8213C31.1317 35.4363 28.9794 36.205 26.9039 36.205C28.9794 36.205 31.1317 36.9737 32.5153 37.5886C33.1303 38.9722 33.8989 41.1246 33.8989 43.2C33.8989 41.1246 34.6676 38.9722 35.2826 37.5886Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M31.2085 13.5288C33.4377 12.5295 36.8968 11.2996 40.279 11.2996C36.8968 11.2996 33.4377 10.0698 31.2085 9.07046C30.2093 6.84128 28.9794 3.38221 28.9794 0C28.9794 3.38221 27.7495 6.84128 26.7502 9.07046C24.521 10.0698 21.0619 11.2996 17.6797 11.2996C21.0619 11.2996 24.521 12.5295 26.7502 13.5288C27.7495 15.758 28.9794 19.2171 28.9794 22.5993C28.9794 19.2171 30.2093 15.758 31.2085 13.5288Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M16.6036 31.7467C19.2939 30.5936 23.5986 28.9794 27.6726 28.9794C23.5986 28.9794 19.2939 27.442 16.6036 26.2121C15.3737 23.5986 13.8363 19.294 13.8363 15.22C13.8363 19.294 12.2989 23.5986 11.069 26.289C8.37865 27.442 4.07402 29.0563 0 29.0563C4.07402 29.0563 8.37865 30.5936 11.069 31.8235C12.2989 34.4371 13.8363 38.7417 13.8363 42.8926C13.8363 38.7417 15.3737 34.4371 16.6036 31.7467Z"
                      fill="currentcolor"
                    />
                  </svg>
                  Why Choose us
                </span>
                <h2 className="title">
                Reasons why you should choose us
                </h2>
              </div>


              <ul className="list-wrap">
                <li>
                  <div className="list-item">
                  <div className="services-icon"> 
                 <svg id="fi_3135763" enable-background="new 0 0 512 512"  viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m258.773 181.506h-191.984c-4.142 0-7.499 3.358-7.499 7.499 0 4.142 3.357 7.499 7.499 7.499h191.985c4.142 0 7.499-3.358 7.499-7.499s-3.357-7.499-7.5-7.499z"></path><path d="m258.773 234.202h-191.984c-4.142 0-7.499 3.358-7.499 7.499s3.357 7.499 7.499 7.499h191.985c4.142 0 7.499-3.358 7.499-7.499s-3.357-7.499-7.5-7.499z"></path><path d="m258.773 286.897h-191.984c-4.142 0-7.499 3.358-7.499 7.499s3.357 7.499 7.499 7.499h191.985c4.142 0 7.499-3.358 7.499-7.499s-3.357-7.499-7.5-7.499z"></path><path d="m266.273 347.093c0-4.142-3.357-7.499-7.499-7.499h-191.985c-4.142 0-7.499 3.358-7.499 7.499s3.357 7.499 7.499 7.499h191.985c4.142 0 7.499-3.357 7.499-7.499z"></path><path d="m66.789 416.821c-4.142 0-7.499 3.358-7.499 7.499s3.357 7.499 7.499 7.499h96.238c4.142 0 7.499-3.358 7.499-7.499s-3.357-7.499-7.499-7.499z"></path><path d="m345.194 92.853v-24.334c0-9.27-7.541-16.812-16.812-16.812h-153.967c-9.27 0-16.811 7.542-16.811 16.812v24.334c0 9.27 7.541 16.811 16.811 16.811h13.002c4.142 0 7.499-3.358 7.499-7.499 0-4.142-3.357-7.499-7.499-7.499h-13.002c-.999 0-1.812-.813-1.812-1.812v-24.335c0-.999.813-1.813 1.812-1.813h153.967c1 0 1.813.813 1.813 1.813v24.334c0 .999-.813 1.812-1.813 1.812h-105.905c-4.142 0-7.499 3.358-7.499 7.499 0 4.142 3.357 7.499 7.499 7.499h105.906c9.27.002 16.811-7.54 16.811-16.81z"></path><path d="m401.268 457.296c-4.142 0-7.499 3.358-7.499 7.499v10.099c0 12.189-9.917 22.107-22.108 22.107h-331.762c-12.189 0-22.107-9.917-22.107-22.107v-360.466c0-1.623.19-3.215.529-4.764h68.283c14.256 0 25.854-11.598 25.854-25.854v-68.282c1.549-.339 3.14-.529 4.763-.529h254.439c12.19 0 22.108 9.917 22.108 22.107v99.842c0 4.142 3.357 7.499 7.499 7.499s7.499-3.358 7.499-7.499v-99.843c.001-20.459-16.645-37.105-37.105-37.105h-254.439c-9.911 0-19.23 3.86-26.238 10.868l-77.323 77.323c-7.008 7.008-10.867 16.326-10.867 26.238v360.466c0 20.46 16.645 37.105 37.105 37.105h331.762c20.46 0 37.106-16.646 37.106-37.105v-10.099c0-4.142-3.357-7.5-7.499-7.5zm-303.808-431.692v58.206c0 5.986-4.87 10.856-10.856 10.856h-58.206z"></path><path d="m503.982 267.999c5.264-7.727 6.626-17.258 3.737-26.15s-9.594-15.802-18.394-18.958c-5.838-2.094-9.733-7.454-9.919-13.654-.283-9.345-4.784-17.857-12.349-23.353-7.563-5.495-17.051-7.144-26.023-4.526-5.958 1.738-12.255-.31-16.051-5.215-5.721-7.395-14.365-11.636-23.715-11.636-9.349 0-17.994 4.241-23.716 11.636-3.796 4.906-10.097 6.951-16.05 5.215-8.973-2.62-18.46-.969-26.025 4.526-7.564 5.496-12.063 14.007-12.347 23.352-.187 6.2-4.081 11.559-9.92 13.654-8.8 3.156-15.505 10.067-18.393 18.958-2.889 8.892-1.527 18.424 3.737 26.15 3.492 5.127 3.492 11.751 0 16.877-5.264 7.727-6.626 17.258-3.737 26.15 2.888 8.892 9.593 15.802 18.393 18.959 5.839 2.095 9.734 7.454 9.92 13.654.261 8.596 4.2 16.673 10.81 22.158 4.361 3.62 9.6 5.885 15.083 6.642v68.278c0 5.761 3.125 11.086 8.154 13.895 5.023 2.807 11.198 2.682 16.107-.341l27.505-16.932c.448-.277.715-.152.962 0l27.503 16.932c4.907 3.02 11.08 3.15 16.108.34 5.03-2.81 8.154-8.135 8.154-13.895v-68.279c5.481-.756 10.72-3.021 15.081-6.64 6.611-5.485 10.551-13.561 10.812-22.159.186-6.2 4.081-11.56 9.919-13.654 8.801-3.156 15.506-10.067 18.394-18.959 2.889-8.892 1.527-18.423-3.737-26.15-3.496-5.124-3.496-11.748-.003-16.875zm-66.867 173.499-27.504-16.932c-5.113-3.147-11.569-3.152-16.687 0l-27.504 16.931c-.626.381-1.399-.058-1.399-.782v-69.701c5.156-.597 10.268 1.501 13.531 5.718 5.723 7.394 14.367 11.635 23.717 11.635 9.349 0 17.993-4.241 23.714-11.635 3.264-4.218 8.377-6.315 13.532-5.718v69.701c0 .729-.783 1.164-1.4.783zm54.472-148.176c2.632 3.862 3.312 8.625 1.868 13.069s-4.795 7.898-9.194 9.476c-11.682 4.19-19.472 14.913-19.847 27.318-.133 4.361-2.05 8.292-5.397 11.07-3.763 3.123-8.859 4.301-13.781 2.865-11.913-3.476-24.52.62-32.116 10.434-2.859 3.695-7.18 5.815-11.853 5.815-4.672 0-8.993-2.119-11.854-5.815-5.799-7.496-14.52-11.656-23.623-11.656-2.818 0-5.674.399-8.49 1.221-4.97 1.448-10.051.234-13.784-2.865-3.347-2.778-5.264-6.709-5.395-11.069-.376-12.405-8.166-23.128-19.849-27.319-4.398-1.578-7.748-5.031-9.193-9.475-1.444-4.444-.764-9.208 1.868-13.07 6.987-10.257 6.987-23.51 0-33.767-2.632-3.862-3.312-8.626-1.868-13.071 1.444-4.444 4.795-7.898 9.193-9.475 11.683-4.191 19.473-14.914 19.849-27.319.141-4.671 2.389-8.925 6.17-11.671 3.779-2.747 8.519-3.571 13.008-2.263 11.91 3.477 24.52-.62 32.114-10.434 2.86-3.696 7.18-5.816 11.854-5.816 4.673 0 8.993 2.119 11.853 5.815 7.595 9.815 20.199 13.911 32.115 10.435 4.486-1.31 9.226-.485 13.007 2.262 3.781 2.746 6.031 7.001 6.171 11.671.376 12.405 8.166 23.129 19.848 27.319 4.399 1.577 7.749 5.031 9.194 9.475 1.444 4.444.764 9.209-1.868 13.07-6.989 10.258-6.989 23.513 0 33.77z"></path><path d="m401.268 213.583c-34.658 0-62.854 28.196-62.854 62.854s28.196 62.854 62.854 62.854c34.657 0 62.853-28.196 62.853-62.854s-28.196-62.854-62.853-62.854zm0 110.71c-26.388 0-47.856-21.468-47.856-47.855s21.468-47.856 47.856-47.856 47.855 21.468 47.855 47.856-21.468 47.855-47.855 47.855z"></path></g></g></svg>
        </div>
                    <Link to="/stamcarpet">
                    Licensed Gas Contractor
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="list-item">
                    <div className="services-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" id="fi_3125480" data-name="Layer 1" viewBox="0 0 512 512" width="50" ><path d="M440.806,435.05H419.867a6,6,0,0,0-5.2,3L404.2,456.184a6,6,0,0,0,0,6l10.469,18.133a6,6,0,0,0,5.2,3h20.939a6,6,0,0,0,5.2-3l10.47-18.133a6,6,0,0,0,0-6L446,438.05A6,6,0,0,0,440.806,435.05Zm-3.464,36.267H423.331l-7-12.133,7-12.134h14.011l7,12.134Z"></path><path d="M291.433,296.482A202.222,202.222,0,0,1,241.5,276.688l-12.471-6.853v-5.642a68.139,68.139,0,0,0,21.91-40.106l4.446-28.361a18.4,18.4,0,0,0,9.129-33.11,120.762,120.762,0,0,0,4.8-18.992h2.051a17.6,17.6,0,0,0,5.427-34.35A104.241,104.241,0,0,0,256.7,51.7a94.814,94.814,0,0,0-46.085-33.763l.655-6.318A6,6,0,0,0,205.3,5H159.721a6,6,0,0,0-5.968,6.619l.655,6.319a94.761,94.761,0,0,0-46.089,33.846,104.537,104.537,0,0,0-20.073,57.487,17.6,17.6,0,0,0,5.417,34.353h1.546a93.469,93.469,0,0,0,4.446,14.525l2.274,5.717a18.4,18.4,0,0,0,10.642,31.86l4.446,28.361a68.09,68.09,0,0,0,19.131,37.479v10.351l-12.484,6.269a5.964,5.964,0,0,0-2.1,1.055l-1.226.615a214.209,214.209,0,0,1-46.75,16.626A83.807,83.807,0,0,0,9.151,378.27V501a6,6,0,0,0,6,6H349.869a6,6,0,0,0,6-6V378.27A83.807,83.807,0,0,0,291.433,296.482ZM68.985,495H21.151V378.27a71.824,71.824,0,0,1,47.834-67.911ZM150.646,32.284a76.223,76.223,0,0,1,11.785-4.221,6,6,0,0,0,4.426-6.417L166.375,17h32.27l-.482,4.646a6,6,0,0,0,4.426,6.417,76.684,76.684,0,0,1,11.785,4.215v8.2A48.57,48.57,0,0,1,183.459,85.71a48.433,48.433,0,0,1-32.813-45.932ZM117.97,58.915a85.277,85.277,0,0,1,20.676-19.907v.77a60.409,60.409,0,0,0,41.82,57.584l1.243.4a5.988,5.988,0,0,0,3.808-.032,60.569,60.569,0,0,0,40.857-57.261V38.986a85.158,85.158,0,0,1,20.68,19.857,92.078,92.078,0,0,1,17.659,49.566h-164.4A92.4,92.4,0,0,1,117.97,58.915ZM93.663,131.624a5.608,5.608,0,1,1,0-11.215H271.357a5.608,5.608,0,1,1,0,11.215H250.036a.192.192,0,0,0-.024,0H93.663Zm163.469,12c-.269,1.435-.572,2.864-.9,4.287v-4.287Zm-145.414,0v12.383l-.913-2.294a81.433,81.433,0,0,1-3.263-10.089Zm17.155,78.605-5.227-33.342a6,6,0,0,0-5.928-5.071h-3.313a6.424,6.424,0,1,1,0-12.847h3.313a6,6,0,0,0,6-6V143.624H244.234v21.345a6,6,0,0,0,6,6h3.15a5.942,5.942,0,0,0,3.468,1.114c.092,0,.183-.017.275-.021a6.421,6.421,0,0,1-3.58,11.754h-3.313a6,6,0,0,0-5.927,5.071l-5.227,33.342a55.777,55.777,0,0,1-110.207,0Zm19.275,51.655v-2.772c1.284.8,2.594,1.567,3.937,2.283a67.669,67.669,0,0,0,63.782,0c.39-.208.773-.425,1.158-.64v24.093a47.01,47.01,0,0,1-68.877,0V277.109A5.957,5.957,0,0,0,148.148,273.884Zm-16.9,13.921,4.9-2.46v13.778A6,6,0,0,0,137.571,303a59.007,59.007,0,0,0,90.031,0,6,6,0,0,0,1.423-3.879v-15.6l4.745,2.607v45.55a51.26,51.26,0,0,1-102.52,0ZM235.85,495H139.144V442.443a122.946,122.946,0,0,0,96.706.164Zm48.185,0H247.85V433.134a6,6,0,0,0-8.779-5.318,110.946,110.946,0,0,1-103.129-.191,6,6,0,0,0-8.8,5.308V495H80.985V306.989a228.155,228.155,0,0,0,38.265-13.321v38.016a63.26,63.26,0,0,0,126.52,0V292.435a210.318,210.318,0,0,0,38.265,14.542Zm59.834,0H296.035V310.36a71.822,71.822,0,0,1,47.834,67.91Z"></path><path d="M182.51,349.135a7.909,7.909,0,1,0-7.908-7.908A7.917,7.917,0,0,0,182.51,349.135Z"></path><path d="M182.51,373.948a7.909,7.909,0,1,0-7.908-7.909A7.917,7.917,0,0,0,182.51,373.948Z"></path><path d="M501.116,197.526l-.244-.261a6,6,0,0,0-9.812,1.553l-29.56,29.56-38.278-7.109-7.109-38.279L446.7,152.407a6,6,0,0,0,0-8.489l-.26-.26a6,6,0,0,0-3.682-1.728,66.29,66.29,0,0,0-42.172,121.686V421.8a47.817,47.817,0,1,0,59.516,0V269.887a66.216,66.216,0,0,0,42.549-67.2A6,6,0,0,0,501.116,197.526ZM466.153,459.184a35.817,35.817,0,1,1-35.817-35.816A35.857,35.857,0,0,1,466.153,459.184ZM412.578,414.8V269.725a66.208,66.208,0,0,0,35.516,3.453V414.8a47.645,47.645,0,0,0-35.516,0Zm62.368-168.472a54.295,54.295,0,1,1-47.159-91.984l-22.393,22.393a6,6,0,0,0-1.656,5.339l8.439,45.434a6,6,0,0,0,4.8,4.8l45.434,8.439a6,6,0,0,0,5.338-1.656l22.4-22.4A54.049,54.049,0,0,1,474.946,246.329Z"></path><path d="M172.8,64.947h21.526a6,6,0,0,0,0-12H172.8a6,6,0,0,0,0,12Z"></path><path d="M172.8,45.1h21.526a6,6,0,0,0,0-12H172.8a6,6,0,0,0,0,12Z"></path></svg>
                    </div>
                    <Link to="/waxing">
                    Licensed Plumber
                    </Link>
                  </div>
                </li>
               

              </ul>

              <Link to="/services" className="btn">
                Discover MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAreaTwo;
