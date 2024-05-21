
export default function handler(
  req, 
  res
) {
  return res.status(401).end('UnAuthorized');
}
