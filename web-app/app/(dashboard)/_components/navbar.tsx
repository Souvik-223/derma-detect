"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/features">
          <MenuItem setActive={setActive} active={active} item="Features">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Skin Disease detection</HoveredLink>
              <HoveredLink href="/">Interface Design</HoveredLink>
              <HoveredLink href="/">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/">Branding</HoveredLink>
            </div>
          </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="About">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Team"
              href="/team"
              src="/team.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Project Details"
              href="/features"
              src="/project.jpg"
              description="Production ready Tailwind css components for your next project"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Upload">
          <Link href="#upload">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#upload">Upload a File</HoveredLink>
            </div>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
