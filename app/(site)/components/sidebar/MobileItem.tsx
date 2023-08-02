"use client";

import clsx from "clsx";
import Link from "next/link";

interface MobileItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({
  href,
  label,
  icon: Icon,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <div>
      <Link
        onClick={handleClick}
        href={href}
        className={clsx(
          `
          group
          flex 
          justify-center
          gap-x-3
          text-sm
          leading-6
          font-semibold
          w-full
          p-4
          text-gray-500
          hover:text-black
          hover:bg-gray-100
          `,
          active && "bg-gray-100 text-black"
        )}
      >
        <Icon className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default MobileItem;
