"use client";

import * as React from "react";

import { useRouter } from "next/navigation";

import { GalleryVerticalEnd } from "lucide-react";
import { FiLogOut } from "@/icons";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

import { createClient } from "@/utils/supabase/client";
import { toastError } from "@/lib/toasts";

// This is sample data.
const data = {
  items: [
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "Ticket Management",
      url: "/ticket-management",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const supabase = createClient()
  const router = useRouter()
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toastError(error.message);
      return;
    }
    router.push("/login"); // redirect after signout
  };

  return (
    <Sidebar variant='floating' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <a href='#'>
                <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
                  <GalleryVerticalEnd className='size-4' />
                </div>
                <div className='flex flex-col gap-0.5 leading-none'>
                  <span className='font-medium'>TicketFlow</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className='gap-2'>
            {data.items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className='font-medium'>
                    {item.title}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          variant='ghost'
          className='w-full justify-start text-red-600 hover:text-red-700'
          onClick={handleSignOut}
        >
          <FiLogOut className='mr-2 h-4 w-4' />
          Sign Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
