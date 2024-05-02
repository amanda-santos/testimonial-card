import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-br from-gray-50 to-[#D2D6DB] justify-center">
      <div className="flex flex-col bg-white p-6 max-w-[340px] max-h-60 gap-4 rounded-lg border-2 border-neutral-200 m-6 mt-64">
        <header className="flex gap-4">
          <Image
            src="/assets/profile-thumbnail.png"
            alt="Sarah Dole"
            width={48}
            height={48}
          />

          <div className="flex flex-col">
            <h1 className="text-lg font-semibold text-neutral-900 line-clamp-1">
              Sarah Dole
            </h1>
            <span className="text-sm text-neutral-600">@sarahdole</span>
          </div>
        </header>

        <p className="text-base line-clamp-5 text-neutral-600">
          I&apos;ve been searching for high-quality abstract images for my
          design projects, and I&apos;m thrilled to have found this platform.
          The variety and depth of creativity are astounding!
        </p>
      </div>
    </main>
  );
}
