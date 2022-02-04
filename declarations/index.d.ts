declare module wpromptjs {
  export default function (
    text: string,
    { raw, questioner }: { raw: boolean; questioner: string }
  ): Promise<string>;
  export function prompt(
    text: string,
    { raw, questioner }: { raw: boolean; questioner: string }
  ): Promise<string>;
  export const raw: true;
}
