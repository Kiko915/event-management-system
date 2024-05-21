import Footer from "@/components/Footer";
import Image from "next/image";
import { titan } from "@/utils/Fonts";
import Link from "next/link";


export default function AuthPage() {
    return (
        <>
        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <Image
        alt="Event management system image"
        src="/bg-auth.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        width={1000}
        height={1000}
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <Link className="block text-white" href="/">
          <span className="sr-only">Home</span>
          <Image src="/logo-ems.png" alt="GoMommy EMS" width={200} height={200} />
        </Link>

        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to <span className={`${titan.className} text-[#9C3587]`}>Go Mommy</span>
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
        A cutting-edge web app designed to streamline event management for busy parents. Whether you are planning a birthday party, school event, or family gathering, Go Mommy provides an all-in-one solution to organize and manage every detail. 
        </p>
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
          <Link
            className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
            href="/"
          >
            <span className="sr-only">Home</span>
            <Image src="/logo-ems.png" alt="GoMommy EMS" width={200} height={200} />
          </Link>

          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to <span className={`${titan.className} text-[#9C3587]`}>Go Mommy</span>
          </h1>

          <p className="mt-4 leading-relaxed text-gray-500">
          a cutting-edge web app designed to streamline event management for busy parents. Whether you are planning a birthday party, school event, or family gathering, Go Mommy provides an all-in-one solution to organize and manage every detail. 
          </p>
        </div>

        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-6">
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

            <input
              type="password"
              id="Password"
              name="password"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" className="text-gray-700 underline"> terms and conditions </a>
              and 
              <a href="#" className="text-gray-700 underline ml-1">privacy policy</a>.
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-block shrink-0 rounded-md border border-[#9C3587] bg-[#9C3587] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#9C3587] focus:outline-none focus:ring active:text-[#762866]"
            >
              Login
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Don&apos;t have an account?
              <Link href="/auth/register" className="text-gray-700 underline ml-2">Register</Link>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
        <Footer />
        </>
    )
}