import React, { SVGAttributes } from 'react';

// eslint-disable-next-line no-undef
export interface JSSVGProps extends SVGAttributes<HTMLOrSVGElement> {}

export function JSSVG({ ...props }: JSSVGProps) {
  return (
    <svg
      width="107"
      height="107"
      viewBox="0 0 107 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 106.733V0H106.733V106.733H0Z" fill="#FFC300" />
      <path d="M69.7854 79.8927C71.837 83.2251 74.0666 86.4182 78.7895 86.4182C82.7564 86.4182 84.8377 84.4466 84.8377 81.719C84.8377 78.4547 82.6852 77.2955 78.321 75.3951L75.9284 74.3752C69.0234 71.446 64.431 67.7755 64.431 60.0226C64.431 52.8774 69.901 47.44 78.4485 47.44C84.5353 47.44 88.9083 49.5479 92.0629 55.0684L84.6094 59.8328C82.9698 56.9036 81.1969 55.7503 78.4485 55.7503C75.6438 55.7503 73.8679 57.5203 73.8679 59.8328C73.8679 62.6909 75.6468 63.8472 79.753 65.6172L82.1456 66.6371C90.284 70.1029 94.8735 73.6429 94.8735 81.6004C94.8735 90.1746 88.1019 94.8738 79.0118 94.8738C70.1204 94.8738 65.0714 90.4118 62.2607 84.8884L69.7854 79.8927ZM35.4352 80.1358C36.9354 82.8219 39.2153 84.8884 42.4944 84.8884C45.6312 84.8884 47.4367 83.6491 47.4367 78.8313V47.437H57.3184V80.3493C57.3184 90.3317 51.5281 94.8738 43.0725 94.8738C35.4323 94.8738 29.9177 89.6973 27.6704 84.8884L35.4352 80.1358Z" fill="#EBF4FF" />
    </svg>

  );
}
