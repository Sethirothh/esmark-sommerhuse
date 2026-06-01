import { SummerCabin } from "@/models/sommerhuse.types";

  export function getPercentageRatings(userRating: SummerCabin["userRating"]): number {
    if (!userRating) return 0;
    const percentage = (userRating.average / 5) * 100;
    return percentage;
  }

  export function formatNumberToCurrency(value: number | null | undefined): string {
    if (value === null || value === undefined) return "N/A";
    return new Intl.NumberFormat("da-DK", {
      style: "currency",
      currency: "DKK",
    }).format(value);
  }