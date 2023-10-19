"use client";

import headerNavLinks from "@/data/headerNavLinks";
import CustomLink from "../Link/Link";
import siteMetadata from "@/data/siteMetadata";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <div className="mt-3">
      <header className="flex items-center justify-between shadow-md p-2 md:p-4 mb-8 bg-zinc-200/90 dark:bg-zinc-700/40 rounded-lg transition-colors duration-100">
        <div>
          <CustomLink href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3"></div>
              {typeof siteMetadata.headerTitle === "string" ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block -mt-2">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </CustomLink>
        </div>
        <div className="flex items-center leading-5 space-x-4 sm:space-x-4">
          {headerNavLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <CustomLink
                key={link.title}
                href={link.href}
                className={`hidden sm:block p-2 text-black font-extrabold text-lg dark:text-gray-100 hover:bg-gray-400/50 hover:dark:bg-zinc-700 hover:rounded-md ${
                  pathname.startsWith(link.href)
                    ? "bg-gray-400/50 dark:bg-zinc-700 rounded-md"
                    : ""
                }`}
              >
                {link.title}
              </CustomLink>
            ))}
        </div>
      </header>
    </div>
  );
}
