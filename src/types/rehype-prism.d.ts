// @mapbox/rehype-prism ships no type definitions.
declare module '@mapbox/rehype-prism' {
  import type { Plugin } from 'unified';
  const rehypePrism: Plugin<[{ ignoreMissing?: boolean; alias?: Record<string, string[]> }?]>;
  export default rehypePrism;
}
