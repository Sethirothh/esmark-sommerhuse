import { SummerCabin } from "@/models/sommerhuse.types";
import Image from "next/image";
import { StarRating } from "../StarRating/StarRating";
import {
  formatNumberToCurrency,
  getPercentageRatings,
} from "@/utils/functions";

export interface SummerCabinCardProps {
  summerCabin: SummerCabin;
}

export function SummerCabinCard({ summerCabin }: SummerCabinCardProps) {
  const {
    title,
    city,
    postalCode,
    fromPrice,
    fromFeePrice,
    userRating,
    facilities,
  } = summerCabin;

  return (
    <article
      className="rounded-md relative flex flex-col justify-between bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      title={title}
    >
      <Image
        src={"/images/placeholder.jpg"} // Replace with actual image URL from `images` when available
        alt={title || "Summer cabin"}
        title={title + " - " + city}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <a
        href="#" // Replace with actual link to cabin details page when available
        className="text-sm text-slate-800 after:content-[''] after:absolute after:inset-0"
      >
        <div className="p-4 relative flex flex-col gap-2 pb-14">
          <h2 className="text-md md:text-lg font-bold ">{title}</h2>

          <span className="text-sm font-semibold text-blue-400 fill-blue-400 absolute bottom-0 left-0 p-2">
            <StarRating
              percentage={getPercentageRatings(userRating)}
              size={16}
            />
          </span>
          <p className="text-sm font-semibold">
            {postalCode} - {city}
          </p>
          <ul>
            <li>Personer: {facilities?.NumberOfPersons || "N/A"}</li>
            <li>Soveværelser: {facilities?.Bedrooms || "N/A"}</li>
            {facilities?.PetsAllowed && (
              <>
                <li>Husdyr tilladt: {facilities?.PetsMaxCount || "0"}</li>
                {facilities?.MoreDogsOnRequest && (
                  <li className="text-xs text-gray-500 mt-2">
                    Åben for mere end én hund ved forespørgsel
                  </li>
                )}
              </>
            )}
          </ul>
          <div className="absolute bottom-0 right-0 p-2">
            {fromPrice && (
              <p className="text-sm font-bold text-blue-400">
                Fra {formatNumberToCurrency(fromPrice)}
              </p>
            )}
            {fromFeePrice && (
              <p className="text-sm text-gray-500">
                + {formatNumberToCurrency(fromFeePrice)} i gebyr
              </p>
            )}
          </div>
        </div>
      </a>
    </article>
  );
}
