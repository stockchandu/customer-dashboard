import SideNav from "@/app/ui/dashboard/sidenav";
// Layout is a piece of reusable component ,layout could be sidenav , header and some common resuable 
// componenets but it's works as a skeleton of the UI 
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}