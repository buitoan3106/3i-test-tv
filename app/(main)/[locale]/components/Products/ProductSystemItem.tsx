"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons"
import { BsFiletypeDoc, BsFilePpt } from "react-icons/bs";
import { SiMicrosoftexcel } from "react-icons/si";

import { GetListCmsItem } from "../../apis/GetDataLogin";
import Modal from "../Modals/Modal";
import useModal from "../../hooks/useModal";
import DocumentFile from "./DocumentFile";

interface User { 
  Id:string,
  Title:string,
  Image: string
}

interface ProductSystemItemProps {
  data: User;
}

interface FileProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const ProductSystemItem: React.FC<ProductSystemItemProps> = ({ data }) => {
  console.log('system child: ', data);
  const [listCmsItem, setListCmsItem] = useState<any>({});
  const [selectedItemId, setSelectedItemId] = useState(null);

  const fetchData = async() => {
    setListCmsItem(await GetListCmsItem(data.Id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const bodyReactElement: React.ReactElement = <div dangerouslySetInnerHTML={{ __html: listCmsItem?.data?.Object[0]?.full_text }} />;
  const bodyContent = (
    <div className="w-full">{bodyReactElement}</div>
  )

  const attachments = (
    <ul className="px-0 py-[15px]">
      {listCmsItem?.data?.Object[0]?.attachments.map((file) => (
        <li key={file.id} className="inline mr-[10px] pr-[10px] border-r-[1px] border-[#71bc42] last:border-r-0">
          <DocumentFile type={file.file_name} icon={BsFiletypeDoc} label={file.file_name} link={`${process.env.BACKEND_UR}${file.file_url}`} />
        </li>
      ))}
    </ul>
  )

  const handleOpenModal = (id) => {
    setSelectedItemId(id);
  }

  const handleClose = () => {
    setSelectedItemId(null);
  }

  return (
    <li className="w-1/2 mb-[10px] px-[3px]" id={data.Id}>
      <span
        onClick={() => handleOpenModal(data.Id)}
        className="cursor-pointer block py-[10px] border-[1px] border-[transparent] border-b-[#f5f5f5] hover:border-b-[#5ab46c] hover:shadow-[0px_0px_2px_1px_rgba(0,0,0,0.1)]"
      >
        {data?.Image ?
          <Image src={`${process.env.BACKEND_URL}/${data?.Image}`} width={20} height={20} alt={data.Title} className="inline mr-[5px] align-middle" />
          :
          <Image src="/images/common/icon-structure-default.png" width={20} height={20} alt={data.Title} className="inline mr-[5px] align-middle" />
        }
        <span className="inline align-middle uppercase text-[11px]">{data.Title}</span>
      </span>
      {selectedItemId === data.Id &&
        <Modal id={data.Id} isOpen={true} onClose={handleClose} title={`Chi tiết về ${listCmsItem?.data?.Object[0]?.title}`} body={bodyContent} attachments={attachments} modalWidth="w-3/6 lg:w-4/6 xl:w-4/6 " />
      }
    </li>
  );
};

export default ProductSystemItem;
