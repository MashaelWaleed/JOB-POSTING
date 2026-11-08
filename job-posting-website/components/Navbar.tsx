"use client";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="bg-white shadow">
      <div className=" max-w-7xl mx-auto px-4 py-2 ">
        <div className="flex justify-between items-center h-8">
          <div className="flex ">
            <Link href="/" className="text-gray-800 hover:text-gray-600">
              <Image
                src="/logo.svg"
                alt="Job Posting Logo"
                width={170}
                height={170}
              />
            </Link>
          </div>

          <div className="font-semibold space-x-4 text-sm flex items-center">
            <Link
              href="/jobs"
              className="text-gray-800 hover:text-gray-600 mr-4"
            >
              Browse Jobs
            </Link>

            {session ? (
              <>
                <Link
                  href="/jobs/post"
                  className="text-gray-800 hover:text-gray-600 mr-4"
                >
                  Post a Job
                </Link>
                <Link
                  href="/dashboard"
                  className="text-gray-800 hover:text-gray-600 mr-4"
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => signOut()}
                  className="text-gray-800 hover:text-gray-600 mr-4"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link
                href="/auth/signin"
                className="text-gray-800 hover:text-gray-600 mr-4"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
