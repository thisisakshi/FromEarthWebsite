import { getInquiryWhatsAppLink } from "../data/helpers";

export function BulkOrder() {
  return (
    <div className="flex items-center justify-center px-5">
      <div className="text-center w-fit lg:w-2/4">
        <p className="text-bold text-xl">Want to place a bulk order?</p>
        <p className="text-lg mt-3">
          We take bulk orders for corporate, wedding and other occasional
          gifting. For related or other inquiries, reach out to us directly at <br/>
          <a className="text-green-600" href={getInquiryWhatsAppLink("bulk orders")}>
            +91 8095944338
          </a>
        </p>
      </div>
    </div>
  );
}
