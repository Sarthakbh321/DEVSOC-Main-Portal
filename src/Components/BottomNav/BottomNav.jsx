import { SvgIcon, Tooltip } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./BottomNav.css";

function BottomNav(props) {
  const history = useHistory();

  useEffect(() => {
    console.log(history.location.pathname);
  }, [history.location]);
  return (
    <div className="app-nav">
      <div className="nav-tab-div">
        <div className="nav-tabs-container">
          <Link
            to="/app/dashboard"
            className={`nav-tab ${
              history.location.pathname === "/app/dashboard" ? "active" : null
            }`}
          >
            <Tooltip title="Dashboard">
              <SvgIcon viewBox="0 0 40 40" fill="none">
                <path
                  d="M1.84965 20.3502H3.69968V33.3C3.69968 35.3406 5.35917 37 7.39976 37H29.6002C31.6408 37 33.3003 35.3406 33.3003 33.3V20.3502H35.1504C35.5162 20.3501 35.8738 20.2415 36.178 20.0383C36.4821 19.835 36.7192 19.5461 36.8592 19.2081C36.9992 18.8701 37.0358 18.4982 36.9645 18.1394C36.8931 17.7806 36.717 17.451 36.4583 17.1922L19.808 0.542417C19.6363 0.370469 19.4324 0.234055 19.208 0.140981C18.9836 0.0479073 18.743 0 18.5 0C18.257 0 18.0164 0.0479073 17.792 0.140981C17.5676 0.234055 17.3637 0.370469 17.192 0.542417L0.541667 17.1922C0.283014 17.451 0.106879 17.7806 0.0355272 18.1394C-0.0358243 18.4982 0.000812077 18.8701 0.140805 19.2081C0.280797 19.5461 0.51786 19.835 0.822025 20.0383C1.12619 20.2415 1.4838 20.3501 1.84965 20.3502ZM14.7999 33.3V24.0501H22.2001V33.3H14.7999ZM18.5 4.46623L29.6002 15.5661V24.0501L29.6021 33.3H25.9002V24.0501C25.9002 22.0096 24.2407 20.3502 22.2001 20.3502H14.7999C12.7593 20.3502 11.0998 22.0096 11.0998 24.0501V33.3H7.39976V15.5661L18.5 4.46623Z"
                  fill={`${
                    history.location.pathname === "/app/dashboard" ? "url(#paint0_linear)" : "white"
                  }`}
                />
              </SvgIcon>
            </Tooltip>
          </Link>
          <Link
            to="/app/team"
            className={`nav-tab ${history.location.pathname === "/app/team" ? "active" : null}`}
          >
            <Tooltip title="Team">
              <SvgIcon viewBox="0 0 43 37">
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M27.8339 13.374C28.4862 13.3742 29.1157 13.6139 29.6029 14.0476C30.0901 14.4813 30.4011 15.0789 30.4767 15.7268L30.4954 16.0355V27.6609C30.5128 30.0878 29.578 32.4248 27.8917 34.1702C26.2053 35.9156 23.9019 36.9304 21.4759 36.9965C19.0498 37.0627 16.6945 36.1751 14.9155 34.5242C13.1365 32.8734 12.0757 30.5908 11.9607 28.1666L11.9474 27.6609V16.0355C11.9476 15.3832 12.1873 14.7537 12.621 14.2665C13.0548 13.7793 13.6523 13.4683 14.3002 13.3926L14.6089 13.374H27.8339ZM27.8339 16.0355H14.6089V27.6609C14.6051 29.3793 15.2704 31.0316 16.464 32.2678C17.6576 33.504 19.2856 34.2269 21.003 34.2833C22.7205 34.3397 24.3924 33.7252 25.6645 32.57C26.9367 31.4148 27.709 29.8096 27.8179 28.0947L27.8339 27.6609V16.0355ZM10.0019 13.374C9.61463 14.0422 9.37843 14.7871 9.3099 15.5564L9.28594 16.0355H2.65883V25.9895C2.65855 26.8146 2.86499 27.6268 3.2593 28.3516C3.65362 29.0765 4.22324 29.691 4.91616 30.1391C5.60908 30.5872 6.40321 30.8546 7.22604 30.9168C8.04888 30.9791 8.87419 30.8342 9.62661 30.4954C9.83953 31.371 10.1483 32.2094 10.5448 32.9972C9.42412 33.4679 8.20688 33.6629 6.99522 33.5659C5.78356 33.469 4.61281 33.0829 3.58121 32.44C2.5496 31.7971 1.68722 30.9162 1.06641 29.8711C0.445601 28.8261 0.0844679 27.6474 0.0133078 26.4339L0 25.9868V16.0355C8.59943e-05 15.3836 0.239418 14.7544 0.6726 14.2673C1.10578 13.7801 1.70269 13.4689 2.3501 13.3926L2.66149 13.374H9.99922H10.0019ZM32.4436 13.374H39.8532C40.5055 13.3742 41.135 13.6139 41.6222 14.0476C42.1094 14.4813 42.4204 15.0789 42.496 15.7268L42.5147 16.0355V25.9895C42.5147 27.2481 42.2023 28.4871 41.6053 29.5951C41.0084 30.7032 40.1456 31.6457 39.0945 32.338C38.0433 33.0303 36.8368 33.4508 35.583 33.5617C34.3293 33.6725 33.0676 33.4703 31.9113 32.9732C32.3052 32.1801 32.6139 31.3417 32.8242 30.4634C33.5471 30.8007 34.341 30.9579 35.138 30.9216C35.9349 30.8852 36.7112 30.6563 37.4004 30.2546C38.0897 29.8528 38.6713 29.2901 39.0957 28.6145C39.5201 27.939 39.7745 27.1707 39.8372 26.3754L39.8532 25.9895V16.0355H33.1569L33.1409 15.6389C33.0828 14.8409 32.8444 14.0665 32.4436 13.374ZM21.2174 0C22.7897 0 24.2977 0.624605 25.4095 1.73641C26.5213 2.84821 27.1459 4.35614 27.1459 5.92847C27.1459 7.5008 26.5213 9.00873 25.4095 10.1205C24.2977 11.2323 22.7897 11.8569 21.2174 11.8569C19.6451 11.8569 18.1372 11.2323 17.0253 10.1205C15.9135 9.00873 15.2889 7.5008 15.2889 5.92847C15.2889 4.35614 15.9135 2.84821 17.0253 1.73641C18.1372 0.624605 19.6451 0 21.2174 0ZM34.4903 1.67142C35.841 1.67142 37.1363 2.20797 38.0914 3.16305C39.0465 4.11813 39.583 5.4135 39.583 6.76418C39.583 8.11487 39.0465 9.41023 38.0914 10.3653C37.1363 11.3204 35.841 11.8569 34.4903 11.8569C33.1396 11.8569 31.8442 11.3204 30.8891 10.3653C29.9341 9.41023 29.3975 8.11487 29.3975 6.76418C29.3975 5.4135 29.9341 4.11813 30.8891 3.16305C31.8442 2.20797 33.1396 1.67142 34.4903 1.67142ZM7.98448 1.67142C9.33516 1.67142 10.6305 2.20797 11.5856 3.16305C12.5407 4.11813 13.0772 5.4135 13.0772 6.76418C13.0772 8.11487 12.5407 9.41023 11.5856 10.3653C10.6305 11.3204 9.33516 11.8569 7.98448 11.8569C6.63379 11.8569 5.33843 11.3204 4.38335 10.3653C3.42827 9.41023 2.89171 8.11487 2.89171 6.76418C2.89171 5.4135 3.42827 4.11813 4.38335 3.16305C5.33843 2.20797 6.63379 1.67142 7.98448 1.67142ZM21.2174 2.66149C20.351 2.66149 19.52 3.00569 18.9073 3.61837C18.2946 4.23105 17.9504 5.06202 17.9504 5.92847C17.9504 6.79493 18.2946 7.6259 18.9073 8.23858C19.52 8.85126 20.351 9.19545 21.2174 9.19545C22.0839 9.19545 22.9148 8.85126 23.5275 8.23858C24.1402 7.6259 24.4844 6.79493 24.4844 5.92847C24.4844 5.06202 24.1402 4.23105 23.5275 3.61837C22.9148 3.00569 22.0839 2.66149 21.2174 2.66149ZM34.4903 4.33291C33.8455 4.33291 33.2271 4.58906 32.7711 5.04501C32.3151 5.50096 32.059 6.11937 32.059 6.76418C32.059 7.40899 32.3151 8.0274 32.7711 8.48335C33.2271 8.9393 33.8455 9.19545 34.4903 9.19545C35.1351 9.19545 35.7535 8.9393 36.2094 8.48335C36.6654 8.0274 36.9215 7.40899 36.9215 6.76418C36.9215 6.11937 36.6654 5.50096 36.2094 5.04501C35.7535 4.58906 35.1351 4.33291 34.4903 4.33291ZM7.98448 4.33291C7.33966 4.33291 6.72126 4.58906 6.26531 5.04501C5.80935 5.50096 5.5532 6.11937 5.5532 6.76418C5.5532 7.40899 5.80935 8.0274 6.26531 8.48335C6.72126 8.9393 7.33966 9.19545 7.98448 9.19545C8.62929 9.19545 9.24769 8.9393 9.70364 8.48335C10.1596 8.0274 10.4157 7.40899 10.4157 6.76418C10.4157 6.11937 10.1596 5.50096 9.70364 5.04501C9.24769 4.58906 8.62929 4.33291 7.98448 4.33291Z"
                  fill={`${
                    history.location.pathname === "/app/team" ? "url(#paint0_linear)" : "white"
                  }`}
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="21.9999"
                    y1="27.5"
                    x2="21.9999"
                    y2="38.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3051FF" />
                    <stop offset="1" stop-color="#62D9FF" />
                  </linearGradient>
                </defs>
              </SvgIcon>
            </Tooltip>
          </Link>
          <Link
            className={`nav-tab ${
              history.location.pathname === "/app/submission" ? "active" : null
            }`}
          >
            <Tooltip title="Submissions starting soon">
              <SvgIcon viewBox="0 0 42 44" fill="none">
                <path
                  d="M39 26.6667V34.8889C39 35.9792 38.5669 37.0249 37.7959 37.7959C37.0249 38.5669 35.9792 39 34.8889 39H6.11111C5.02078 39 3.9751 38.5669 3.20412 37.7959C2.43313 37.0249 2 35.9792 2 34.8889V26.6667"
                  // stroke={`${
                  //   history.location.pathname === "/app/submission"
                  //     ? "url(#paint0_linear)"
                  //     : "white"
                  // }`}
                  stroke="gray"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.7777 12.2778L20.4999 2L10.2222 12.2778"
                  // stroke={`${
                  //   history.location.pathname === "/app/submission"
                  //     ? "url(#paint0_linear)"
                  //     : "white"
                  // }`}
                  stroke="gray"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.5 2V26.6667"
                  // stroke={`${
                  //   history.location.pathname === "/app/submission"
                  //     ? "url(#paint0_linear)"
                  //     : "white"
                  // }`}
                  stroke="gray"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </SvgIcon>
            </Tooltip>
          </Link>
          <Link
            to="/app/profile"
            className={`nav-tab ${
              history.location.pathname === "/app/profile" ||
              history.location.pathname === "/app/profile/edit"
                ? "active"
                : null
            }`}
          >
            <SvgIcon viewBox="0 0 44 44" fill="none">
              <path
                d="M36.6666 38.5V34.8333C36.6666 32.8884 35.894 31.0232 34.5187 29.6479C33.1434 28.2726 31.2782 27.5 29.3333 27.5H14.6666C12.7217 27.5 10.8564 28.2726 9.48114 29.6479C8.10587 31.0232 7.33325 32.8884 7.33325 34.8333V38.5"
                stroke={`${
                  history.location.pathname === "/app/profile" ||
                  history.location.pathname === "/app/profile/edit"
                    ? "url(#paint0_linear)"
                    : "white"
                }`}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M22.0001 20.1667C26.0502 20.1667 29.3334 16.8834 29.3334 12.8333C29.3334 8.78325 26.0502 5.5 22.0001 5.5C17.95 5.5 14.6667 8.78325 14.6667 12.8333C14.6667 16.8834 17.95 20.1667 22.0001 20.1667Z"
                stroke={`${
                  history.location.pathname === "/app/profile" ||
                  history.location.pathname === "/app/profile/edit"
                    ? "url(#paint1_linear)"
                    : "white"
                }`}
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint1_linear"
                  x1="22.0001"
                  y1="5.5"
                  x2="22.0001"
                  y2="20.1667"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3051FF" />
                  <stop offset="1" stop-color="#62D9FF" />
                </linearGradient>
              </defs>
            </SvgIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
