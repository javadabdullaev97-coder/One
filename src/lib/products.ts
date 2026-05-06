export interface StoreProduct {
  id: string;
  nameEn: string;
  category: string;
  price: number;
  updated: string;
  descriptionEn: string;
  includesEn: string[];
}

export const PRODUCTS: StoreProduct[] = [
  {
    id: "llc-formation",
    nameEn: "LLC Formation Pack",
    category: "Company Formation",
    price: 299,
    updated: "Mar 2025",
    descriptionEn:
      "Complete document set for registering an LLC in Uzbekistan — charter, founder decisions, and all registration forms.",
    includesEn: ["Company charter (bilingual)", "Founder's decision", "Application forms", "Regulatory checklist"],
  },
  {
    id: "jsc-formation",
    nameEn: "JSC Registration Pack",
    category: "Company Formation",
    price: 449,
    updated: "Jan 2025",
    descriptionEn:
      "Full package for joint-stock company formation, including prospectus templates and shareholder documentation.",
    includesEn: ["JSC charter", "Prospectus template", "Shareholder registry", "Board resolutions"],
  },
  {
    id: "shareholder-agreement",
    nameEn: "Shareholder Agreement",
    category: "Legal",
    price: 279,
    updated: "Apr 2026",
    descriptionEn:
      "Comprehensive SHA covering governance, drag-along/tag-along rights, dividends, and exit provisions under Uzbek law.",
    includesEn: ["Full SHA template", "Schedules", "Board charter", "Annotation guide"],
  },
  {
    id: "nda-bilateral",
    nameEn: "NDA — Bilateral",
    category: "Legal",
    price: 39,
    updated: "Apr 2026",
    descriptionEn:
      "Mutual non-disclosure agreement adapted for Uzbek law. Covers trade secrets, IP, and sensitive business information.",
    includesEn: ["Bilateral NDA", "Unilateral variant", "Usage guide"],
  },
  {
    id: "commercial-lease",
    nameEn: "Commercial Lease Agreement",
    category: "Legal",
    price: 89,
    updated: "Dec 2024",
    descriptionEn:
      "Bilingual commercial lease under Uzbek civil law — office, retail, and warehouse. Includes renewal and exit clauses.",
    includesEn: ["Standard lease", "Short-term variant", "Addendum templates"],
  },
  {
    id: "employment-contract",
    nameEn: "Employment Contract",
    category: "HR",
    price: 59,
    updated: "Feb 2026",
    descriptionEn:
      "Bilingual employment contract compliant with the Uzbekistan Labour Code. Covers fixed-term and open-ended positions.",
    includesEn: ["Standard contract", "Fixed-term variant", "Probation addendum"],
  },
  {
    id: "hr-policy-manual",
    nameEn: "HR Policy Manual",
    category: "HR",
    price: 199,
    updated: "Nov 2024",
    descriptionEn:
      "End-to-end HR policy framework adapted for Uzbek labour law — hiring, performance, termination, and benefits.",
    includesEn: ["12 policy modules", "Code of conduct", "Disciplinary procedure", "Leave policy"],
  },
  {
    id: "tax-compliance-starter",
    nameEn: "Tax Compliance Starter Pack",
    category: "Tax",
    price: 249,
    updated: "Mar 2026",
    descriptionEn:
      "Essential tax registration forms, VAT templates, and compliance calendar for businesses operating in Uzbekistan.",
    includesEn: ["Tax registration forms", "VAT return template", "Compliance calendar", "CIT worksheet"],
  },
  {
    id: "transfer-pricing",
    nameEn: "Transfer Pricing Documentation",
    category: "Tax",
    price: 399,
    updated: "Jan 2025",
    descriptionEn:
      "Master file and local file templates for transfer pricing compliance under Uzbek tax law and OECD guidelines.",
    includesEn: ["Master file template", "Local file template", "Benchmarking guide", "Policy statement"],
  },
  {
    id: "work-permit-pack",
    nameEn: "Work Permit Application Pack",
    category: "Compliance",
    price: 119,
    updated: "Apr 2026",
    descriptionEn:
      "Full documentation set for obtaining work permits for foreign nationals employed in Uzbekistan, including renewals.",
    includesEn: ["Application forms", "Document checklist", "Employer letter templates", "Extension guide"],
  },
  {
    id: "sez-entry-pack",
    nameEn: "SEZ Entry Pack",
    category: "Compliance",
    price: 449,
    updated: "Feb 2025",
    descriptionEn:
      "Full application package for entering a Special Economic Zone — investment plan templates and regulatory overview.",
    includesEn: ["SEZ application form", "Investment plan template", "Financial projections model", "Regulatory overview"],
  },
  {
    id: "due-diligence-pack",
    nameEn: "Investor Due Diligence Pack",
    category: "Finance",
    price: 499,
    updated: "Mar 2026",
    descriptionEn:
      "Comprehensive DD document request list and data room structure for M&A and investment transactions in Uzbekistan.",
    includesEn: ["DD request list", "Data room index", "Red flag checklist", "Legal opinion template"],
  },
];

export function getProductById(id: string): StoreProduct | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getAllProductIds(): string[] {
  return PRODUCTS.map((p) => p.id);
}
