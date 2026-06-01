import { SummerCabinList } from '@/components/SummerCabinList/SummerCabinList';
import sommerhuse from '../public/sommerhuse.json';
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Sommerhus tilgængelighed",
  description: "Find og book sommerhuse på Esmarks platform",
};


export default function Home() {
  const summerCabins = sommerhuse.hits;

  return (
    <main className="w-full lg:max-w-350 mx-auto py-8">
      <SummerCabinList summerCabins={summerCabins} />
    </main>
  );
}
