/* eslint-disable @next/next/no-img-element */

export interface IProperty {
  image: string;
  title: string;
  type: string;
  location: string;
  price: string;
}

export default function PropertyCard({ property }: { property: IProperty }) {
  const { image, title, type, location, price } = property;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
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
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{type}</p>
        <p className="text-gray-700 text-base">{location}</p>
        <p className="text-gray-900 font-bold">{price}</p>
      </div>
    </div>
  );
}
