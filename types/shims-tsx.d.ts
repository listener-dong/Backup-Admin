import Vue, { VNode } from "vue";

declare module "*.tsx" {
  import Vue from "vue";
  export default Vue;
}

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface ElementAttributesProperty {
      $props: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface IntrinsicAttributes {
      [elem: string]: any;
    }
  }
}

//shims-tsx.d.ts

// import Vue, { VNode } from "vue";

// declare global {
//   namespace JSX {
//     // tslint:disable no-empty-interface
//     interface Element extends VNode {}
//     // tslint:disable no-empty-interface
//     interface ElementClass extends Vue {}
//     interface IntrinsicElements {
//       [elem: string]: any;
//     }
//   }
// }
