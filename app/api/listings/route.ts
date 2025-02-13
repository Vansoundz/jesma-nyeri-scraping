import axios from "axios";
import * as cheerio from "cheerio";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const location = searchParams.get('location')
  // Navigate the page to a URL.
  console.log(`https://www.jesmaestates.com/search?estate=${location}`);
  let response;
  if (location) {
    response = await axios.get(`https://www.jesmaestates.com/search?estate=${location}`);
  } else {
    response = await axios.get("https://www.jesmaestates.com");
  }
  const $ = cheerio.load(response.data);

  const data = $("div#tri-col.clearfix")
    .map((index, element) => {
      const title =
        $(element).find("p.pipe").text().trim() ||
        $(element).find("span.pipe").text().trim().split("|")[0];
      const [type, location, price] = $(element)
        .find("h4")
        .text()
        .trim()
        .split("|");
      const link = $(element).find("a.a_button").attr("href")?.trim();
      const splitLink = link?.split("/");
      const id = splitLink?.[splitLink.length - 1];
      const image = $(element).find("img.latest").attr("src");

      return {
        id,
        image,
        title,
        type,
        location,
        price,
      };
    })
    .get()
    .filter((x) => !!x.id);

  return Response.json({ data });
}
