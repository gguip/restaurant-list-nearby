// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

import axios from "axios";

export const getPlacesData = async () => {
  const url = "https://restaurant-list.onrender.com/api/restaurants?populate=*";
  try {
    const {
      data: { data },
    } = await axios.get(url);
    console.log("🚀 ~ file: restaurants.ts:21 ~ getPlacesData ~ data:", data);
    return data;
  } catch (error) {
    console.log("🚀 ~ file: restaurants.ts:21 ~ getPlacesData ~ error:", error);
  }
};
