import Image from "next/image";
import Link from "next/link";
import type { Profile } from "../api/profiles/types";

async function getData() {
  const res = await fetch("http://localhost:3000/api/profiles", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Profile() {
  // const table = useReactTable();

  async function filterProfiles() {
    const data = (await getData()) as Profile[];
    return data.map((profile) => {
      return {
        id: profile.id,
        name: profile.name,
        title: "None",
        department: "None",
        email: profile.email,
        role: "User",
        image:
          profile.image_url ??
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      };
    });
  }

  let profiles = await filterProfiles();

  return (
    <main className="py-4 pt-4">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Profiles
            </h1>
            <p className="mt-2 max-w-[100ch] text-sm text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              eligendi, veritatis quia voluptates cum fugit. Nobis veritatis rem
              vero delectus.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Ajouter Profile
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Nom
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Titre
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {profiles?.map((profile) => (
                    <tr key={profile.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <Image
                              height={40}
                              width={40}
                              className="aspect-square rounded-full"
                              src={profile.image}
                              alt={`${profile.name} avatar image`}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {profile.name}
                            </div>
                            <div className="text-gray-500">{profile.email}</div>
                          </div>
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{profile.title}</div>
                        <div className="text-gray-500">
                          {profile.department}
                        </div>
                      </td>

                      <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:hidden md:block">
                        <span className="rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 md:inline-flex">
                          Active
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {profile.role}
                      </td>

                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:justify-center sm:pr-0 md:flex md:items-center md:justify-around  ">
                        <Link
                          href="#"
                          className="hidden text-orange-600 hover:text-orange-900 sm:hidden md:block"
                        >
                          Edit<span className="sr-only">, {profile.name}</span>
                        </Link>
                        <Link
                          href={`/profiles/${profile.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Open<span className="sr-only">, {profile.name}</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
