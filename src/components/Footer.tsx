import { useEffect } from "react";

export function Footer() {
  return (
    <footer className="bg-footer py-10 mt-10 flex justify-center items-center lg:space-x-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-5 lg:px-96">
        <div className="w-fit">
          <p className="text-lg hover:underline mb-2 font-semibold">Contact</p>
          <a className="text-green-600" href="https://api.whatsapp.com/send?phone=918095944338&text=Hi,%20I'm%20Geetanjali.%20I%20started%20From%20Earth%20from%20my%20home%20in%202014.%20I'm%20happy%20to%20answer%20any%20questions%20you%20may%20have!">
            Whatsapp: +91 8095944338
          </a>
          <p>f.earthsoaps@gmail.com</p>
          <div className="flex gap-4 mt-2 lg:mt-5">
            <a
              className="w-10 h-10"
              target="_blank"
              href="https://www.instagram.com/fromearthsoaps/"
            >
              <img src="/images/instagram.jpg" />
            </a>
            <a
              className="w-10 h-10"
              target="_blank"
              href="https://www.facebook.com/fromearthproducts"
            >
              <img src="/images/facebook.jpg" />
            </a>
          </div>
        </div>

        <div className="w-fit">
          <p className="text-lg font-semibold mb-5">About Us</p>
          <p>
            From Earth uses the finest oils, butters and botanicals in its
            products. We take great pride in the making of these products
            keeping it as natural as possible without any added additives,
            harmful chemicals or harsh ingredients.
          </p>
        </div>
      </div>
    </footer>
  );
}
