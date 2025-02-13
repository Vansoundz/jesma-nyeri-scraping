import axios from "axios";
import * as cheerio from "cheerio";
export const dynamic = "force-static";

export async function GET() {
  // Navigate the page to a URL.
  const response = await axios.get("https://www.jesmaestates.com");
  const $ = cheerio.load(response.data);

  const data = $("nav ul li")
    .map((index, element) => {
      const href = $(element).find("a").attr("href");
      const splitHref = href?.split("/");
      return {
        label: $(element).text().trim(),
        href: splitHref?.[splitHref.length - 1],
      };
    })
    .get();
  return Response.json({ data });
}
