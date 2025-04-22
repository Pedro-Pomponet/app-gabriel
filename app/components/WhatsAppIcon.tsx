interface WhatsAppIconProps {
  className?: string;
}

export function WhatsAppIcon({ className }: WhatsAppIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 16.64C16.13 17.15 15.34 17.15 14.83 16.64L12 13.81L9.17 16.64C8.66 17.15 7.87 17.15 7.36 16.64C6.85 16.13 6.85 15.34 7.36 14.83L10.19 12L7.36 9.17C6.85 8.66 6.85 7.87 7.36 7.36C7.87 6.85 8.66 6.85 9.17 7.36L12 10.19L14.83 7.36C15.34 6.85 16.13 6.85 16.64 7.36C17.15 7.87 17.15 8.66 16.64 9.17L13.81 12L16.64 14.83C17.15 15.34 17.15 16.13 16.64 16.64Z"/>
    </svg>
  );
} 