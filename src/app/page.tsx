"use client";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: ["300", "400", "800"],
  subsets: ["latin"],
});

export default function Home() {
  let user = {
    isLoggedIn: true,
    username: "Dali Khaled",
    email: "dali@gmail.com",
    img_url:
      "https://media.licdn.com/dms/image/D4E03AQHtjSUI2EyLAg/profile-displayphoto-shrink_800_800/0/1674498144785?e=1687392000&v=beta&t=_vHmGGIHbSXoDDJhbXt2esJdtlr2JZeoAfhHU8nPC18",
  };

  //Use Clerk
  function signIn() {}
  function signOut() {}

  return (
    <main
      className={`flex h-screen flex-col dark:bg-bgdark-primary ${poppins.className}`}
    >
      <div
        className={`flex ${
          user.isLoggedIn ? "justify-between" : "place-content-center"
        } p-8`}
      >
        {user.isLoggedIn && (
          <div className="flex items-center justify-center gap-3">
            <Image
              src={`${user.img_url}`}
              alt={`${user.username} profile picture`}
              width={128}
              priority
              height={128}
              className="h-12 w-12 rounded-full sm:w-12 md:h-32 md:w-32"
            />
            <div
              id="infos"
              className="tracking-wide text-bgdark-primary dark:text-slate-400"
            >
              <h1 className="text-base md:text-2xl">{user.username}</h1>
              <h3 className="text-xs md:text-base">{user.email}</h3>
              {/* tags */}
            </div>
          </div>
        )}
        <div className="grid place-items-center">
          {user.isLoggedIn ? (
            <button
              //TODO: modal open on click
              onClick={signOut}
              type="button"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={signIn}
              type="button"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
      <div className="h-full ">
        <p>settings/appearance -dark/light
user inforamtion:
	role: director/employee/hr
	auth-role: admin/user 
	projects*
	team*

upload profile image</p>
      </div>
    </main>
  );
}
