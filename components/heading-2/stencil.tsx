import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-heading-2",
  styleUrl: "bem.css",
  shadow: true,
})
export class Heading2 {
  render() {
    return (
      <h2 class="utrecht-heading-2">
        <slot></slot>
      </h2>
    );
  }
}