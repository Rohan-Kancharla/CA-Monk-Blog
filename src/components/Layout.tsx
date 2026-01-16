import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const location = useLocation();
    const isCreatePage = location.pathname === "/create";

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Header */}
            <header className="border-b bg-white sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-blue-600 text-white px-3 py-1.5 rounded-md font-bold text-sm">
                            CA MONK
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            HOME
                        </Link>
                        <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            PORTFOLIO
                        </Link>
                        <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            EVENTS
                        </Link>
                        <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            JOB BOARD
                        </Link>
                        <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                            POSTS
                        </Link>
                    </nav>

                    <div className="flex items-center gap-3">
                        {!isCreatePage && (
                            <Link to="/create">
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                    CREATE
                                </Button>
                            </Link>
                        )}
                        <Button size="sm" variant="outline">
                            LOGIN
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 mt-auto">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Brand */}
                        <div>
                            <div className="bg-blue-600 text-white px-3 py-1.5 rounded-md font-bold text-sm inline-block mb-4">
                                CA MONK
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Empowering the next generation of financial advisors with tools, community, and knowledge.
                            </p>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm">RESOURCES</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/" className="hover:text-white transition-colors">Blog</Link></li>
                                <li><Link to="/" className="hover:text-white transition-colors">Webinars</Link></li>
                                <li><Link to="/" className="hover:text-white transition-colors">Case Studies</Link></li>
                            </ul>
                        </div>

                        {/* Platform */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm">PLATFORM</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/" className="hover:text-white transition-colors">Job Board</Link></li>
                                <li><Link to="/" className="hover:text-white transition-colors">Pricing Plans</Link></li>
                                <li><Link to="/" className="hover:text-white transition-colors">Referrals</Link></li>
                            </ul>
                        </div>

                        {/* Connect */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm">CONNECT</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/" className="hover:text-white transition-colors">LinkedIn</Link></li>
                                <li><Link to="/" className="hover:text-white transition-colors">Twitter</Link></li>
                                <li><Link to="/" className="hover:text-white transition-colors">Instagram</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                        <p>© 2024 CA Monk. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <Link to="/" className="hover:text-gray-300">Privacy Policy</Link>
                            <Link to="/" className="hover:text-gray-300">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
