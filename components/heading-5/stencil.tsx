import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-heading-5",
  styleUrl: "bem.css",
  shadow: true,
})
export class Heading5 {
  render() {
    return (
      <h5 class="utrecht-heading-5">
        <slot></slot>
      </h5>
    );
  }
}