import { Montserrat } from "@next/font/google";
import {  ResolvingMetadata  ,type Metadata} from 'next';

import Logo3i from'@/public/images/logo/logo.png';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const fontBase = Montserrat({ subsets: ["latin"] });

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  const previousImages = (await parent).openGraph?.images || []

  return {
    openGraph: {
      images: [Logo3i.src, ...previousImages],
    },
  }
}

export default function Home() {
  return (
    <>
      Admin Page
    </>
  );
}
