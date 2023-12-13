export function Banner() {
  return (
    <div className="relative w-screen h-56 bg-blue-100">
      <img
        src="/images/fluffy_whipped_soap.jpg"
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <p className="text-center text-xl sm:text-base lg:text-3xl font-serif font-bold text-white">
          Good for you, good for your skin
        </p>
      </div>
    </div>
  );
}
