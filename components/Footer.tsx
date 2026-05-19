"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-emerald-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 border-b border-white/10 pb-16">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-2xl font-bold mb-6">
              Greenwich-UPJ Sustainability Project
            </h4>
            <p className="text-emerald-100/60 max-w-2xl text-lg italic leading-relaxed">
              &quot;Strengthening capacity in sustainable built environment
              education through responsible academic–industry engagement and
              digital innovation.&quot;
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-8">
              Navigation
            </h4>
            <ul className="space-y-4 font-bold">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#partners"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Our Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-emerald-100/40 font-bold">
          <p>
            © {new Date().getFullYear()} Greenwich-UPJ Sustainability Project.
            All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
