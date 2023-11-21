import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <h1 className="h1-bold">Hello world!</h1>
      <h2 className="h2-bold">Hello world!</h2>
      <h3 className="h3-bold">Hello world!</h3>
    </div>
  );
}
