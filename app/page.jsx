import Users from "@/components/Users";

export const metadata = {
  title: "Home Page",
};

export default function HomePage() {
  // server component
  return (
    <section>
      {/* client component */}
      <Users />
    </section>
  );
}
