import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-icon-twitter",
  styleUrl: "stencil.css",
  shadow: true,
})
export class IconTwitter {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-2 -2 44 44">
        <title>Twitter</title>
        <g>
          <path
            fill="currentColor"
            d="M33.096,11.147c-1.017,0.451-2.107,0.756-3.255,0.892c1.171-0.701,2.069-1.811,2.492-3.134 c-1.094,0.649-2.306,1.121-3.599,1.375c-1.032-1.102-2.506-1.79-4.135-1.79c-3.129,0-5.667,2.537-5.667,5.666 c0,0.445,0.049,0.876,0.146,1.291c-4.709-0.235-8.883-2.491-11.678-5.92c-0.487,0.838-0.767,1.811-0.767,2.85 c0,1.965,1,3.701,2.52,4.715c-0.928-0.028-1.802-0.285-2.566-0.708v0.071c0,2.744,1.954,5.034,4.544,5.556 c-0.474,0.13-0.976,0.2-1.493,0.2c-0.364,0-0.72-0.037-1.065-0.104c0.721,2.25,2.813,3.889,5.292,3.936 c-1.938,1.52-4.381,2.425-7.037,2.425c-0.457,0-0.907-0.026-1.35-0.079c2.507,1.606,5.485,2.545,8.687,2.545 c10.419,0,16.119-8.632,16.119-16.12c0-0.245-0.006-0.49-0.016-0.734C31.374,13.282,32.334,12.284,33.096,11.147z"
          />
        </g>
      </svg>
    );
  }
}