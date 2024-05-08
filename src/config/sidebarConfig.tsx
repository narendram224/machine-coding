export interface SidebarConfigType {
  label: string;
  isFolder: boolean;
  children: SidebarConfigType[] | null;
}

export const sidebarConfig: SidebarConfigType[] = [
  {
    label: "package.json",
    isFolder: false,
    children: null,
  },
  {
    label: "package.lock.json",
    isFolder: false,
    children: null,
  },
  {
    label: "src",
    isFolder: true,
    children: [
      {
        label: "component",
        isFolder: true,
        children: [
          {
            label: "ui",
            isFolder: true,
            children: [
              {
                label: "Button.tsx",
                isFolder: false,
                children: null,
              },
              {
                label: "Input.tsx",
                isFolder: false,
                children: null,
              },
              {
                label: "TextArea.tsx",
                isFolder: false,
                children: null,
              },
              {
                label: "Card.tsx",
                isFolder: false,
                children: null,
              },
            ],
          },
        ],
      },
      {
        label: "config.ts",
        isFolder: false,
        children: null,
      },
      {
        label: "hooks",
        isFolder: true,
        children: [
          {
            label: "useOrigin.tsx",
            isFolder: false,
            children: null,
          },
        ],
      },
    ],
  },
];
