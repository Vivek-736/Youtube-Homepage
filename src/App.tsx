import { Helmet } from "react-helmet-async"
import PageHeader from "./layouts/PageHeader"

const App = () => {
  return (
    <>
      <Helmet>
        <title>YouTube</title>
        <meta name="description" content="This is my React application" />
        <meta name="keywords" content="React, Vite, Helmet" />
      </Helmet>
      <div className="bg-[#0f0f0f]">
        <div className="max-h-screen flex flex-col">
          <PageHeader />
        </div>
      </div>
    </>
  )
}

export default App
