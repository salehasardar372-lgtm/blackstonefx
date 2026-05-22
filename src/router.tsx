import { createRouter } from
  '@tanstack/react-router'
export const router =
  createRouter({
    routerTree: [],
  })
declare module '@tanstack/
  react-router' {
  interface Register {
router: typeof router
}
}
