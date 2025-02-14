/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export interface IProperty {
  image: string;
  title: string;
  type: string;
  location: string;
  price: string;
  id: string;
}

export default function PropertyCard({ property }: { property: IProperty }) {
  const { image, title, type, location, price, id } = property;
  return (
    <div className="max-w-sm rounded overflow-hidden">
      {!image ? (
        <div className="w-full h-48 object-cover grid place-items-center bg-gray-100">
          <div className="text-gray-500 text-2xl font-bold">No Image</div>
        </div>
      ) : (
        <img
          loading="lazy"
          className="w-full h-48 object-cover"
          src={
            image?.includes("https")
              ? image
              : `https://www.jesmaestates.com/${image}`
          }
          alt={title}
        />
      )}

      <div className="px-2 py-4 border-x-[1px] border-b-8 border-amber-200">
        <p className="text-gray-500 font-bold">{price}</p>
        <Link href={`/view/${id}`} className="font-bold text-xl cursor-pointer hover:text-amber-900 text-amber-500">
          {title}
        </Link>
        <div className="flex gap-2">
          <small className="text-gray-700 text-base">{type}</small>
          <small className="text-gray-700 text-base">{location}</small>
        </div>
      </div>
    </div>
  );
}
