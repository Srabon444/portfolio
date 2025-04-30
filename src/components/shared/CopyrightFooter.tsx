import copyrightData from "@/data/homePageData.json";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { Container } from "@/components/shared/Container";

const CopyrightFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-colors-footerText bg-[#1e483b] py-4 text-[15px] leading-5 font-normal">
      <Container>
        <div className="flex flex-col items-center justify-center gap-y-2 lg:flex-row lg:gap-y-0">
          {/* Part 1: This is the first part of the footer*/}
          <div className="flex flex-col items-center whitespace-normal text-white md:flex-row md:whitespace-nowrap">
            <div className="inline-flex items-center justify-center">
              <FaRegCopyright size={15} />
              &nbsp;
              {`Copyright ${currentYear}`}
              &nbsp;
            </div>
            <Link
              className="text-Success-500 underline"
              href={copyrightData.copyright.linkedIn}
              target="_blank"
            >
              Ashraful Islam.
            </Link>
          </div>

          {/* Part 2: This is the second part of the footer*/}
          <div className="flex flex-row items-center whitespace-nowrap text-white">
            &nbsp; Powered by &nbsp;
            {/*<Link*/}
            {/*  className="text-Success-500 underline"*/}
            {/*  href={copyrightData.copyright.linkedIn}*/}
            {/*  target="_blank"*/}
            {/*>*/}
            {/*  Ashraful Islam.*/}
            {/*</Link>*/}
            &nbsp;
            <FaHeart className="text-red-500" size={15} />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default CopyrightFooter;
