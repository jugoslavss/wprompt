declare module "wpromptjs" {
  var prompt: (
    text: string,
    options?: { raw?: boolean; questioner?: string }
  ) => Promise<string>;
  export = prompt;
  export function prompt(
    text: string,
    options?: { raw?: boolean; questioner?: string }
  ): Promise<string>;
  export const raw: true;
}
