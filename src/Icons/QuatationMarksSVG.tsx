import React, { SVGAttributes } from 'react';

// eslint-disable-next-line no-undef
export interface QuatationMarksSVGProps extends SVGAttributes<HTMLOrSVGElement> {}

export function QuatationMarksSVG({ ...props }: QuatationMarksSVGProps) {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.9594 13.2354C8.95393 13.2354 0.00146484 22.1878 0.00146484 33.1934C0.00146484 43.8103 8.33321 52.5182 18.8018 53.1198C18.983 55.0768 18.847 60.4038 13.7425 67.814C13.3566 68.373 13.4267 69.1269 13.9059 69.6061C15.9947 71.695 17.2857 73.0105 18.1892 73.9306C19.3717 75.1337 19.9114 75.683 20.701 76.3999C20.9688 76.6429 21.3066 76.7651 21.6459 76.7651C21.9754 76.7651 22.3036 76.6498 22.5687 76.4204C31.4635 68.6806 41.3444 52.6885 39.9148 33.0917C39.0771 21.5864 30.6849 13.2354 19.9594 13.2354ZM21.6595 73.4376C21.2765 73.06 20.8397 72.6151 20.1956 71.9599C19.4129 71.1622 18.339 70.0689 16.7102 68.4347C22.9052 58.889 21.7351 52.0899 21.2229 51.1148C20.9798 50.652 20.4812 50.3402 19.9594 50.3402C10.5057 50.3402 2.81396 42.6485 2.81396 33.1934C2.81396 23.7396 10.5057 16.0479 19.9594 16.0479C29.1688 16.0479 36.3813 23.3016 37.1104 33.2949C38.7172 55.3364 25.6174 69.6474 21.6595 73.4376Z" fill="#FFC300" />
      <path d="M89.86 33.0917V33.0903C89.0194 21.5864 80.626 13.2354 69.9033 13.2354C58.8977 13.2354 49.9438 22.1878 49.9438 33.1934C49.9438 43.8103 58.277 52.5182 68.7469 53.1198C68.9282 55.0754 68.7908 60.3996 63.685 67.814C63.2991 68.373 63.3692 69.1269 63.8484 69.6061C65.929 71.6867 67.2171 72.9996 68.1207 73.9183C69.3086 75.1295 69.8511 75.6816 70.6448 76.4011C70.9126 76.6429 71.2518 76.7651 71.5897 76.7651C71.9193 76.7651 72.2475 76.6498 72.5125 76.419C81.4073 68.6791 91.2881 52.6873 89.86 33.0917ZM71.6033 73.4376C71.2174 73.0572 70.7767 72.6096 70.127 71.9477C69.3443 71.151 68.2746 70.0608 66.6526 68.4347C72.8476 58.8876 71.679 52.0899 71.1681 51.1148C70.9249 50.6534 70.4252 50.3402 69.9033 50.3402C60.4481 50.3402 52.7563 42.6485 52.7563 33.1934C52.7563 23.7396 60.4481 16.0479 69.9033 16.0479C79.1111 16.0479 86.3251 23.3016 87.0556 33.2964V33.2949C88.661 55.3335 75.5612 69.6474 71.6033 73.4376Z" fill="#FFC300" />
    </svg>

  );
}