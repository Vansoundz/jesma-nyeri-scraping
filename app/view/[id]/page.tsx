import PropertyDetail from "@/components/PropertyDetail";
import axios from "axios";

export default async function View({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/listings/${id}`)).data;

  return (
    <div className="min-h-screen py-8">
      <PropertyDetail
        property={data.data}
      />
    </div>
  );
}
  