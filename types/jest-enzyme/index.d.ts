// Type definitions for jasmine-enzyme 3.6
// Project: https://github.com/blainekasten/enzyme-matchers/blob/master/packages/jasmine-enzyme/README.md
// Definitions by: Umar Bolatov <https://github.com/bolatovumar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
/// <reference types="jest" />
/// <reference types="react" />
declare function jestEnzyme(): void;
export default jestEnzyme;

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeChecked(): boolean;
      toBeDisabled(): boolean;
      toBeEmpty(): boolean;
      toBePresent(): boolean;
      toContainReact(reactInstance: JSX.Element): boolean;
      toHaveClassName(className: string): boolean;
      toHaveHTML(html: string): boolean;
      toHaveProp(propKey: string, propValue?: any): boolean;
      toHaveRef(refName: string): string;
      toHaveState(stateKey: string, stateValue?: any): boolean;
      toHaveStyle(styleKey: string, styleValue?: any): boolean;
      toHaveTagName(tagName: string): boolean;
      toHaveText(text?: string): boolean;
      toIncludeText(text: string): boolean;
      toHaveValue(value: any): boolean;
      toMatchElement(reactInstance: JSX.Element): boolean;
      toMatchSelector(selector: string): boolean;
    }
  }
}
