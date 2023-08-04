import Head from "next/head";
import React from "react";
import { ResolvingMetadata, type Metadata } from "next";
import { Merriweather, Noto_Serif, Inter } from "next/font/google";

import { GetItem } from "../../apis/GetDataHome";
import {getImg} from '../../utils/util';
import Contact from "../../components/Contact";
import Document from "../../components/Products/Document";
import Introduction from "../../components/Common/Introduction";
import ProductSystem from "../../components/Products/ProductSystem";
import { blogFont, blogTitleFont, blogDescriptionFont, systemStructure } from "../../utils/fonts";
import { type } from "os";
import { local } from "../../utils/http";

type Props = {
  params: {locale: string, id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const id = params.id;
  const product = await GetItem(Number(id));
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title:product?.data?.title,
    description:product?.data?.short_content,
    openGraph: {
      images: [`${getImg(product?.data?.gallery)}`, ...previousImages],
    },
  };
}

export default async function page({ params }: Props) {
  const data = await GetItem(Number(params.id));
  const languageChoose = params.locale;

  let dataFile = data?.data?.attributes;
  let dataContent = data?.data?.content;
  let titleContent = data?.data?.title;
  let descriptionContent = data?.data?.short_content;
  let catId = data?.data?.cat_id;
  const dataLanguage = data?.data?.multiple_language;

  if (languageChoose !== 'vi'){
    const multiLanguage = JSON.parse(dataLanguage);
    multiLanguage.map((item) => {
      if (item.lgn === languageChoose){
        dataContent = item.content;
        titleContent = item.title;
        descriptionContent = item.short_content
        return [dataContent, titleContent, descriptionContent];
      }
    });
  }

  return (
    <>
      <Head>
        <title>{titleContent}</title>
        <meta name="description">{descriptionContent}</meta>
        <meta property="og:image">{getImg(data?.data?.gallery)}</meta>
      </Head>
      <Introduction
        pageName={titleContent}
        description={descriptionContent}
        metaImage={getImg(data?.data?.gallery)}
        fontTitle={systemStructure.className}
      />
      <ProductSystem fontTitle={systemStructure.className} title={titleContent} catId={catId} />
      {dataFile &&
        <Document fontTitle={systemStructure.className} title={titleContent} content={dataFile} />
      }
      <Contact />
    </>
  );
}
