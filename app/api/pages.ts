

export default function handler(req: any, res: any) {
  const { method } = req

  switch (method) {
    case "POST":
      const {  } = 
      res.status(200).json({})
      break;
    default:
      res.setHeader("ALLOW", ["POST"])
      req.status(405).end(`Method '${method}' not allowed`)
  }
}

