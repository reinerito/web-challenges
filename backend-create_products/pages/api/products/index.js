import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    // Get query parameters from the URL
    const { minPrice, maxPrice } = request.query;

    // Create a filter object
    const filter = {};

    // If minPrice is provided, add it to the filter
    if (minPrice) {
      filter.price = { $gte: Number(minPrice) };
    }

    // If maxPrice is provided, add it to the filter
    if (maxPrice) {
      filter.price = { ...filter.price, $lte: Number(maxPrice) };
    }

    // Find products with the filter
    const products = await Product.find(filter);
    response.status(200).json(products);
    return;
  }

  if (request.method === "POST") {
    try {
      const productData = request.body;
      const product = await Product.create(productData);
      response.status(201).json({ status: "Product created." });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
