import type { Metadata } from "next";
import { AdminApp } from "@/components/admin/AdminApp";

export const metadata: Metadata = {
  title: "Admin — Portfolio CMS",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <section className="min-h-screen pt-16 sm:pt-20">
      <div className="container-site py-12">
        <AdminApp />
      </div>
    </section>
  );
}
