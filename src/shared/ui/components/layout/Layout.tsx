import { Link, Outlet } from 'react-router'

import { ROUTE_PATH } from '@core/constants/routes.constants'

export const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to={ROUTE_PATH.HOME} className="text-xl font-bold">
          Logo
        </Link>
        <div className="flex items-center gap-4">
          <Link to={ROUTE_PATH.HOME} className="hover:text-primary">
            Home
          </Link>
          <Link to={ROUTE_PATH.LOGIN} className="hover:text-primary">
            Login
          </Link>
          <Link to={ROUTE_PATH.REGISTER} className="hover:text-primary">
            Register
          </Link>
          <Link to={ROUTE_PATH.MY_PAGE} className="hover:text-primary">
            My Page
          </Link>
        </div>
      </nav>
    </header>

    <main className="flex-1 container mx-auto px-4 py-8">
      <Outlet />
    </main>

    <footer className="border-t">
      <div className="container mx-auto px-4 py-4 text-center text-muted-foreground">
        © 2024 My App. All rights reserved.
      </div>
    </footer>
  </div>
)
