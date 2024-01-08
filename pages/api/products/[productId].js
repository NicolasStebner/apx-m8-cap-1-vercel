export default function nicolas(req,res){
  res.json({
    body:req.body,
    query: req.query,
    cookies: req.cookies,
    test: "productID"
  })
}