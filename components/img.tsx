export default function SquareImage({
  src = '',
  alt = '',
} ) {
  return (
    <div>
        <div className="aspect-square w-24 sm:w-28 md:w-36 lg:w-48 w" aria-hidden="true">
          <img src={src} alt={alt} className="w-full h-full object-cover block" />
        </div>
    </div>
  )
}