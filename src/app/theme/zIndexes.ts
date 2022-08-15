export const zIndexes = {
  modal: 900,
} as const;

export type ZIndex = keyof typeof zIndexes;
