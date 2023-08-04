"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useSearchParams   } from "next/navigation";
import Link from "next/link";

import { GetTreeCategoryData } from "../../apis/GetDataLogin";
import ProductSystemItem from "../../components/Products/ProductSystemItem";

interface ProductSystemProps {
  catId: number;
  title?: string
  fontfamily?: string;
  fontTitle?: string;
}

const ProductSystem: React.FC<ProductSystemProps> = ({ fontfamily, fontTitle, title, catId }) => {
  const pathname  = usePathname();
  const [ isLoading, setIsLoading ] = useState(false);
  const [treeCategory, setTreeCategory] = useState<any>([]);

  const parentItem = [];
  const childItem = [];

  const fetchData = async() => {
    setTreeCategory(await GetTreeCategoryData());
  };

  useEffect(() => {
    fetchData();
  }, []);

  treeCategory?.data?.forEach(obj => {
    if (obj.ParentId === catId){
      parentItem.push(obj);
    } else {
      childItem.push(obj);
    }
  });

  return (
    <section id="productSystem" className={`w-full ${fontfamily} mt-[72px]`}>
      <div className="container">
        <h2 className={`text-[28px] font-semibold text-center mb-[40px] ${fontTitle}`}>Danh mục chức năng {title}</h2>
        <div className="flex flex-wrap">
          {parentItem.map((parent) => {
            const imageParent = parent?.Image ? `${process.env.BACKEND_URL}${parent?.Image}` : '/images/common/icon-structure-default.png';
            return (
              <div key={parent.Id} className="w-1/2 px-[15px] mb-[48px] border-r-[1px] border-r-[#dee2e6] even:border-r-0">
                <h3 className={`text-center font-medium mb-[30px] text-[24px] underline leading-6 ${fontTitle}`}>
                  <Image src={imageParent} width={20} height={20} alt={parent.Title} className="inline mr-[5px] align-middle" />
                  {parent.Title}
                </h3>
                <ul className="flex flex-wrap">
                  {childItem.map((child) => (
                    <>
                      {child.ParentId === parent.Id &&
                        <ProductSystemItem key={child.Id} data={child}/>
                      }
                    </>
                  ))}
                </ul>
              </div>
            )
          })
          }
        </div>
      </div>
      
    </section>
  );
};

export default ProductSystem;
