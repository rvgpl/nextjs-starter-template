import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between bg-blue-100 bg-gradient-to-b p-24">
      <div className="text-center">
        <h2 className="mt-5 text-4xl font-bold">NextJS Starter</h2>
        <h3 className="mt-2 text-xl">Go ahead create some routes & interfaces 🖖🏼</h3>
        <Button className="my-5">Let&apos;s go 🚀</Button>
      </div>
    </main>
  );
}
