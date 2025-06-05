import React from "react";

const Loading = () => {
  return (
    <div class="alive-thunder">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 319 319"
        fill="none"
      >
        <path
          d="M254 38L113.571 139.922H148.488L86.2908 204.872H122.91L65 281L203.813 193.909H165.489L226.806 131.789H182.976L254 38Z"
          fill="url(#paint1_radial_101_158)"
        />
        <defs>
          <radialGradient
            id="paint1_radial_101_158"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(159.5 159.5) rotate(90) scale(169.115 131.534)"
          >
            <stop stop-color="#FFD88B" />
            <stop offset="1" stop-color="#FFA900" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Loading;
