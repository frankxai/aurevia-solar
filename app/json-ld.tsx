export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aurevia",
    "url": "https://aurevia-solar.vercel.app",
    "description": "Objektbezogene Beratung für die Energieautonomie von Wohnhäusern, Höfen und privaten Anwesen in Niedersachsen und im Harz."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
