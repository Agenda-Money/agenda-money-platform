import { SVGProps } from "react";

export const AfricaIcon = ({ size = 24, className = "", ...props }: { size?: number | string, className?: string } & SVGProps<SVGSVGElement>) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor" className={className} {...props}>
    <path d="m201.56 19.495l-87.79 9.131l-73.745 94.814v52.676l56.186 61.805l64.615-13.344l49.164 9.832l-10.535 37.926l33.711 61.103l-16.855 42.842l39.79 116.225l53.62-8.768l49.164-55.484l4.213-38.629l31.605-23.879l-6.322-69.531l83.594-106.994l-51.989 7.263l-79.363-138.359l-125.016-8.428zm252.346 319.8l-14.402 20.86l-13.408.496c-11.849 24.321-12.598 38.019-13.907 66.547l17.383 4.471l21.852-52.147z" />
  </svg>
);

export const InclusionIcon = ({ size = 24, className = "", ...props }: { size?: number | string, className?: string } & SVGProps<SVGSVGElement>) => (
  <svg width={size} height={size} viewBox="0 0 640 512" fill="currentColor" className={className} {...props}>
    <g transform="translate(0, -60)">
      <path d="M144 0a80 80 0 1 1 0 160a80 80 0 1 1 0-160m368 0a80 80 0 1 1 0 160a80 80 0 1 1 0-160M0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7M405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7c0 11.8-9.6 21.3-21.3 21.3H405.4zM224 224a96 96 0 1 1 192 0a96 96 0 1 1-192 0m-96 261.3c0-73.6 59.7-133.3 133.3-133.3h117.3c73.7 0 133.4 59.7 133.4 133.3c0 14.7-11.9 26.7-26.7 26.7H154.6c-14.7 0-26.7-11.9-26.7-26.7z" />
    </g>
    <path d="M80 104c0-22.1-17.9-40-40-40S0 81.9 0 104v221.5c0 25.5 10.1 49.9 28.1 67.9l99.9 99.9c12 12 28.3 18.7 45.3 18.7H240c26.5 0 48-21.5 48-48v-78.9c0-29.7-11.8-58.2-32.8-79.2l-25.3-25.3l-15.2-15.2l-32-32c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l32 32l15.2 15.2c11 11 9.2 29.2-3.7 37.8c-9.7 6.5-22.7 5.2-31-3.1l-51.2-51.1c-12-12-18.7-28.3-18.7-45.3zm480 0v160.2c0 17-6.7 33.3-18.7 45.3l-51.1 51.1c-8.3 8.3-21.3 9.6-31 3.1c-12.9-8.6-14.7-26.9-3.7-37.8l15.2-15.2l32-32c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-32 32l-15.2 15.2l-25.3 25.3c-21 21-32.8 49.5-32.8 79.2V464c0 26.5 21.5 48 48 48h66.7c17 0 33.3-6.7 45.3-18.7l99.9-99.9c18-18 28.1-42.4 28.1-67.9L640 224V104c0-22.1-17.9-40-40-40s-40 17.9-40 40" />
  </svg>
);

// Flexible Terms: A document with a checkmark
export const FlexibleTermsIcon = ({ size = 24, className = "", ...props }: { size?: number | string, className?: string } & SVGProps<SVGSVGElement>) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <g>
      <path d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.81A6.5 6.5 0 0 0 4 11.498V4a2 2 0 0 1 2-2z" />
      <path d="M13.5 2.5V8a.5.5 0 0 0 .5.5h5.5zm-1.5 15a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L5.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708" />
    </g>
  </svg>
);

// Transparent Pricing: A price tag
export const PricingIcon = ({ size = 24, className = "", ...props }: { size?: number | string, className?: string } & SVGProps<SVGSVGElement>) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M19.75 2A2.25 2.25 0 0 1 22 4.25v5.462a3.25 3.25 0 0 1-.952 2.298l-8.5 8.503a3.255 3.255 0 0 1-4.597.001L3.489 16.06a3.25 3.25 0 0 1-.004-4.596l8.5-8.51a3.25 3.25 0 0 1 2.3-.953zM17 5.502a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" />
  </svg>
);
