export default function Yuzaname({ title, className }:any) {
  return (
    <p className={className}>
      <span className="opacity-50">t/</span>
      {title}
    </p>
  )
}
