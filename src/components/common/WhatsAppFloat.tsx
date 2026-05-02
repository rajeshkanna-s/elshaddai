import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919042988267?text=Hi%2C%20I%27m%20interested%20in%20your%20wood%20packing%20products.%20Please%20share%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
