import PropertyCard, { IProperty } from "@/components/PropertyCard";
import Chip from "../components/Chip";
import axios from "axios";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ location: string }>;
}) {
  const { location } = await searchParams;

  const [locations, listings] = await Promise.all([
    (
      await axios.get<{ data: string[] }>("http://localhost:3000/api/locations")
    ).data,
    (
      await axios.get<{ data: IProperty[] }>(
        `http://localhost:3000/api/listings${
          !!location ? "?location=" + location : ""
        }`
      )
    ).data,
  ]);

  return (
    <div className="">
      <main className="">
        {/* Render Chips */}
        <div className="flex gap-2 overflow-x-auto py-2 px-4 w-full sticky top-16 z-50 bg-amber-50">
          {locations.data.map((item: string, index: number) => (
            <Chip key={index} label={item} isSelected={location === item} />
          ))}
        </div>

        {/* Render Property Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 px-4 m-b-16 w-full">
          {listings.data.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </main>
    </div>
  );
}
