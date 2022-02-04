declare module wpromptjs {
  export default function (
    text: string,
    options: { raw: boolean; questioner: string }
  ): Promise<string>;
  export function prompt(
    text: string,
    options: { raw: boolean; questioner: string }
  ): Promise<string>;
  export const raw: true;
}
