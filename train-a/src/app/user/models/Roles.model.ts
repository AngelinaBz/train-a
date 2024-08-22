export const roles = ['manager', 'user'] as const;

export type Role = (typeof roles)[number];
