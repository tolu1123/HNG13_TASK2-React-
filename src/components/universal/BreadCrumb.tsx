"use client";

import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

const replaceHyphensWithSpaces = (str: string): string => {
  return str.replace(/-/g, " ");
};

export default function BreadCrumb() {
  const pathname = usePathname();
  const getPath = () => {
    const title = replaceHyphensWithSpaces(pathname.slice(1))
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  }
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className='hidden md:block'>
          <BreadcrumbLink href='#'>
            {getPath()}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
