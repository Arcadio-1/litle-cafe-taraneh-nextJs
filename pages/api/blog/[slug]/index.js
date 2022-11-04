import { getSinglePost } from "..";

function handler(req, res) {
  if (req.method === "GET") {
    const slug = req.query.slug;
    try {
      const data = getSinglePost(slug);
      if (!data) {
        throw new Error("post is not found");
      }
      res.status(202).json({ message: "success", postData: data });
    } catch (error) {
      res.status(404).json({ error: error, postData: null });
    }
  }
}
export default handler;
