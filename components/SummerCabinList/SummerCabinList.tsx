"use client";

import { SummerCabin, SummerCabinExtended } from "@/models/sommerhuse.types";
import { SummerCabinCard } from "../SummerCabin/SummerCabinCard";
import { useState } from "react";

export interface SummerCabinListProps {
  summerCabins: SummerCabinExtended[];
}
export function SummerCabinList({ summerCabins }: SummerCabinListProps) {
  const [selectedCity, setSelectedCity] = useState<string>("Alle byer");
  const [personsFilter, setPersonsFilter] = useState<number>(0);
  const [petsFilter, setPetsFilter] = useState<boolean>(true);

  const summerCabinCardList: SummerCabin[] = summerCabins.map((cabin) => {
    return {
      id: cabin.id,
      name: cabin.name,
      city: cabin.city,
      title: cabin.title,
      postalCode: cabin.postalCode,
      hasImages: cabin.hasImages,
      fromPrice: cabin.fromPrice,
      fromFeePrice: cabin.fromFeePrice,
      userRating: cabin.userRating,
      discountTotal: cabin.discountTotal,
      facilities: cabin.facilities,
      discountPercentage: cabin.discountPercentage,
      images: cabin.images,
      meta: cabin.meta,
      address1: cabin.address1,
      address2: cabin.address2,
      description: cabin.description,
    };
  });

  const availableCities = Array.from(
    new Set(
      summerCabinCardList
        .map((cabin) => cabin.city?.trim())
        .filter((city): city is string => Boolean(city)),
    ),
  ).sort((a, b) => a.localeCompare(b));

  const filteredCabins = summerCabinCardList.filter((cabin) => {
    const matchesCity =
      selectedCity === "Alle byer" || cabin.city?.trim() === selectedCity;
    const persons = cabin.facilities?.NumberOfPersons ?? 0;

    const petsAllowed = cabin.facilities?.PetsAllowed ?? false;

    return (
      matchesCity && persons >= personsFilter && (!petsFilter || petsAllowed)
    );
  });

  function handleCitySelect(city: string) {
    setSelectedCity(city);
  }

  return (
    <section className="grid grid-cols-12 w-full gap-6 px-4">
        <h1 className="text-2xl font-bold col-span-12">Sommerhuse på Vestkysten</h1>
      <section className="col-span-12 lg:col-span-2 flex flex-col gap-4">
        <div className="flex lg:flex-col gap-4">
        <select
          className="p-1 rounded-md w-1/2 lg:w-full text-sm border border-slate-400 duration-300 transition-all focus:rounded-b-none focus:ring-1 focus:ring-slate-600 focus:border-slate-600"
          onChange={(e) => setPersonsFilter(Number(e.target.value))}
          value={personsFilter}
        >
          <option value={0}>Antal personer</option>
          <option value={2}>2 personer</option>
          <option value={4}>4 personer</option>
          <option value={6}>6 personer</option>
          <option value={8}>8 personer</option>
          <option value={10}>10+ personer</option>
        </select>
        <label className="flex items-center gap-1 text-md">
          <input
            type="checkbox"
            checked={petsFilter}
            className="accent-slate-600 w-4 h-4 "
            onChange={(e) => setPetsFilter(e.target.checked)}
          />
          Husdyr tilladt
        </label>

        </div>
        <ul className="flex flex-wrap lg:flex-col gap-2">
          <li
            className={`px-3 py-1 rounded-full text-sm cursor-pointer text-white
                    ${
                      selectedCity === "Alle byer"
                        ? "bg-slate-900"
                        : "bg-slate-600"
                    }`}
            onClick={() => handleCitySelect("Alle byer")}
          >
            Alle byer
          </li>
          {availableCities.map((city) => (
            <li
              key={city}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer text-white
                ${selectedCity === city ? "bg-slate-900" : "bg-slate-600"}`}
              onClick={() => handleCitySelect(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      </section>
      <section className="col-span-12 lg:col-span-10 grid grid-cols-[repeat(auto-fill,minmax(max(280px,calc((100%-4*1.5rem)/4)),1fr))] gap-6">
        {filteredCabins.length > 0 ? (
          filteredCabins.map((cabin) => (
            <SummerCabinCard key={cabin.id} summerCabin={cabin} />
          ))
        ) : (
          <div className="col-span-full p-4 bg-slate-200 rounded-md h-48 flex flex-col items-center justify-center">
            <p className="text-left text-muted-foreground">
              Ingen sommerhuse fundet for de valgte kriterier 🥺
            </p>
          </div>
        )}
      </section>
    </section>
  );
}
