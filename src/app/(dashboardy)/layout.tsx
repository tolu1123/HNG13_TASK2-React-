import { AppSidebar } from "@/components/app-sidebar"
import BreadCrumb from "@/components/universal/BreadCrumb";
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider
      className="bg-[#f4f5f7] max-w-[1440px] mx-auto"
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset className="bg-[#f4f5f7]">
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <BreadCrumb />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 w-full h-full">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
