import { Helmet } from "react-helmet-async"
import PageHeader from "./layouts/PageHeader"
import CategoryPills from "./components/CategoryPills"

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
          <div className="grid grid-cols-[auto, 1fr] flex-grow overflow-auto">
            <div>
              Sidebar
            </div>
            <div className="sticky top-0 z-10 pb-4">
              <CategoryPills />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
