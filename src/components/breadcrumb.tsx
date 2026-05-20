"use client";

import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

import BreadCrumbNoLogged from "./breadcrumbNoLogged";
import BreadCrumbLogged from "./breadcrumbLogged";

type BreadCrumbProps = {
  userIsLoggedIn: boolean;
};

export default function BreadCrumb({ userIsLoggedIn }: BreadCrumbProps) {
  return (
    <nav className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {userIsLoggedIn ? <BreadCrumbLogged /> : <BreadCrumbNoLogged />}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </nav>
  );
}
