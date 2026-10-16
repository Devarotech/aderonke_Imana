/**
 * vCard (.vcf) Generator for Yetunde Aderonke Imana
 * Generates an executive vCard 3.0 file for instant phone contact saving
 */

export function generateVCard(): string {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Imana;Yetunde;Aderonke;;Esq.',
    'FN:Yetunde Aderonke Imana',
    'ORG:Federal Ministry of Justice;Complex Casework Group\\, Chambers of the HAGF',
    'TITLE:Chief State Counsel / Prosecutor',
    'TEL;TYPE=CELL,VOICE,PREF:+2348055817314',
    'EMAIL;TYPE=INTERNET,PREF:ronkeimana@gmail.com',
    'ADR;TYPE=WORK:;;Federal Ministry of Justice\\, Maitama / Central Area;Abuja;Federal Capital Territory;;Nigeria',
    'URL;TYPE=LinkedIn:https://www.linkedin.com/in/aderonke-imana-011323179',
    'URL;TYPE=Instagram:https://www.instagram.com/aderonkeimana/',
    'NOTE:Prosecutor & Chief State Counsel\\, Complex Casework Group\\, Chambers of the Honourable Attorney-General of the Federation.',
    'END:VCARD',
  ].join('\r\n');
}

export function downloadVCard(): void {
  const vcardText = generateVCard();
  const blob = new Blob([vcardText], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Yetunde_Aderonke_Imana_Counsel.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
