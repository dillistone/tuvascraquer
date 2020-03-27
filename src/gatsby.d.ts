type GatsbyLinkProps = import("gatsby").GatsbyLinkProps
type NavigateFn = import("@reach/router").NavigateFn
type HistoryLocation = import("history").Location

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
// https://github.com/gatsbyjs/gatsby/issues/16682#issuecomment-523352028
type LinkProps = Omit<GatsbyLinkProps<{}>, "ref"> & { exact?: boolean }

interface GatsbyPageProps<S> {
  data: any
  uri: string
  path: string
  pageContext: {
    [key: string]: any
  }
  location: Window["location"] & HistoryLocation<S>
  navigate: NavigateFn
}

type GatsbyPage<S = {}> = React.FC<GatsbyPageProps<S>>

declare const graphql: (query: TemplateStringsArray) => void

declare namespace GatsbySsr {
  type OnRenderBody = (fns: {
    pathname: string
    setHeadComponents: (nodes: React.ReactNode) => void
    setHtmlAttributes: (attributes: object) => void
    setBodyAttributes: (attributes: object) => void
    setPreBodyComponents: (nodes: React.ReactNode) => void
    setPostBodyComponents: (nodes: React.ReactNode) => void
    setBodyProps: (props: object) => void
  }) => void
}