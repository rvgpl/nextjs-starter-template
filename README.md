# nextjs-starter-template

An opinionated starter template using NextJS framework

## Setup

1. Install dependencies using: `npm install`
2. Run locally using: `npm run dev`, server will be up and running on [http://localhost:3000](http://localhost:3000)


You can start editing the page by modifying `app/page.tsx` and delete `.gitkeep` files.

The suggested directory structure
```
.
├── app
│ ├── layout.tsx
│ └── page.tsx
├── components
│ ├── ui
│ │ ├── form.tsx
│ │ ├── button.tsx
│ │ └── ...
│ ├── layout
│ │ ├── nav.tsx
│ │ ├── header.tsx
│ └── ...
├── lib
│ ├── hooks
│ │ ├── use-debounce.ts
│ └── constants.ts
│ └── utils.ts
├── styles
│ └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Libraries used

- [nextjs](https://nextjs.org)
- [tailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [typescript](https://www.typescriptlang.org/)
- [zod](https://github.com/colinhacks/zod)
- [react-hook-form](https://github.com/react-hook-form/react-hook-form)
- [prettier](https://prettier.io/)
- [react v18](https://react.dev/)
- [eslint-plugin-next](https://nextjs.org/docs/app/building-your-application/configuring/eslint#eslint-plugin)
