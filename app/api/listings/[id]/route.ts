import axios from "axios";
import * as cheerio from "cheerio";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // Navigate the page to a URL.
  
  const response = await axios.get(`https://www.jesmaestates.com/view/${id}`);
 
  const $ = cheerio.load(response.data);

  const title = $("h2.pipe").text().trim();
  const rent = ($("h3").text().trim().split(":")[1]).split("/")[0];
  const images = $("#grid-box.clearfix").find("img").map((index, element) => $(element).attr("src")).get();
  const features = $("nav.features_list:first-child .highlight").text().trim().split("\n").map((feature) => feature.trim());


  // const data = $("div#tri-col.clearfix")
  //   .map((index, element) => {
  //     const title =
  //       $(element).find("p.pipe").text().trim() ||
  //       $(element).find("span.pipe").text().trim().split("|")[0];
  //     const [type, location, price] = $(element)
  //       .find("h4")
  //       .text()
  //       .trim()
  //       .split("|");
  //     const link = $(element).find("a.a_button").attr("href")?.trim();
  //     const splitLink = link?.split("/");
  //     const id = splitLink?.[splitLink.length - 1];
  //     const image = $(element).find("img.latest").attr("src");

  //     return {
  //       id,
  //       image,
  //       title,
  //       type,
  //       location,
  //       price,
  //     };
  //   })
  //   .get()
  //   .filter((x) => !!x.id);
  const data = {
    title,
    rent,
    images,
    features,
  };

  return Response.json({ data });
}
