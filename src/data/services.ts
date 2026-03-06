import { Car, HardHat, Stethoscope, Scale, Zap, AlertTriangle, ShieldAlert, Building, Briefcase, Home, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string[];
  keyPoints: string[];
}

export const services: ServiceData[] = [
  {
    slug: "personal-injury",
    icon: AlertTriangle,
    title: "Personal Injury Claims",
    description: "Fighting for the compensation you deserve after unexpected injuries. We handle all types of personal injury cases with aggressive, compassionate representation to get you the maximum recovery.",
    longDescription: [
      "At Shapiro Law Office, we understand that a personal injury can turn your life upside down. Whether you've been hurt in an accident, suffered due to someone else's negligence, or experienced harm from a dangerous product, our experienced attorneys are here to fight for your rights.",
      "We handle every aspect of your claim — from investigating the incident and gathering evidence to negotiating with insurance companies and, when necessary, taking your case to court. Our goal is always to secure the maximum compensation you're entitled to.",
      "With over 30 years of experience in New York personal injury law, we know how to build strong cases that get results. We work on a contingency fee basis, which means you don't pay unless we win.",
    ],
    keyPoints: [
      "Free initial consultation",
      "No win, no fee guarantee",
      "Aggressive negotiation with insurance companies",
      "Full litigation support if needed",
      "Over 30 years of proven results",
    ],
  },
  {
    slug: "slip-and-fall",
    icon: Building,
    title: "Slip and Fall Claims",
    description: "Holding negligent property owners accountable for unsafe conditions. We prove negligence in wet floors, poor lighting, uneven walkways, and other hazardous property conditions.",
    longDescription: [
      "Slip and fall accidents are among the most common causes of serious injury in New York. Property owners have a legal duty to maintain safe premises, and when they fail to do so, they can be held liable for any injuries that result.",
      "Our attorneys have extensive experience handling slip and fall cases involving wet floors, icy sidewalks, broken stairs, poor lighting, uneven surfaces, and other hazardous conditions. We know how to prove that a property owner knew or should have known about the danger and failed to address it.",
      "We work with investigators and expert witnesses to reconstruct the circumstances of your accident and build a compelling case for maximum compensation.",
    ],
    keyPoints: [
      "Thorough investigation of the accident scene",
      "Expert witness testimony",
      "Documentation of property owner negligence",
      "Recovery for medical bills, lost wages, and pain/suffering",
      "Experience with commercial and residential premises cases",
    ],
  },
  {
    slug: "workers-compensation",
    icon: HardHat,
    title: "Worker's Compensation",
    description: "Protecting your rights and lost wages after workplace injuries. We navigate the complex workers' comp system to maximize your benefits and ensure you receive proper medical care.",
    longDescription: [
      "If you've been injured on the job, you have the right to workers' compensation benefits — regardless of who was at fault. However, navigating the workers' comp system can be confusing and frustrating, especially when you're dealing with a serious injury.",
      "At Shapiro Law Office, we guide injured workers through every step of the process. We help you file your claim, ensure you receive proper medical treatment, and fight for the full benefits you're entitled to, including lost wages, medical expenses, and disability payments.",
      "If your claim has been denied or you're not receiving the benefits you deserve, we'll appeal on your behalf and aggressively advocate for your rights.",
    ],
    keyPoints: [
      "Help with initial claims and appeals",
      "Maximum medical benefits recovery",
      "Lost wage compensation",
      "Disability benefit advocacy",
      "Third-party liability claims when applicable",
    ],
  },
  {
    slug: "premises-liability",
    icon: ShieldAlert,
    title: "Premises Liability",
    description: "When property hazards lead to harm, we step in to help. We hold property owners accountable for injuries caused by dangerous or defective conditions on their premises.",
    longDescription: [
      "Property owners and managers have a legal obligation to maintain safe conditions for visitors, tenants, and customers. When they fail in this duty and someone is injured as a result, they can be held liable under New York's premises liability laws.",
      "Our firm handles a wide range of premises liability cases, including injuries from inadequate security, defective elevators and escalators, falling objects, toxic exposure, swimming pool accidents, and more.",
      "We conduct thorough investigations to identify all responsible parties and pursue maximum compensation for your injuries, including medical expenses, lost income, and pain and suffering.",
    ],
    keyPoints: [
      "Comprehensive premises investigations",
      "Identification of all liable parties",
      "Building code violation analysis",
      "Security negligence claims",
      "Recovery for all damages including future medical costs",
    ],
  },
  {
    slug: "product-liability",
    icon: Scale,
    title: "Product Liability",
    description: "Injured by a defective product? We'll fight for justice. We take on manufacturers, distributors, and retailers who put dangerous products into consumers' hands.",
    longDescription: [
      "When a defective or dangerous product causes injury, the manufacturers, distributors, and retailers responsible must be held accountable. Product liability cases can involve design defects, manufacturing defects, or failure to provide adequate warnings or instructions.",
      "At Shapiro Law Office, we have the resources and expertise to take on large corporations and their insurance companies. We work with product safety experts to analyze defects and build strong cases that demonstrate how a product failed and caused your injury.",
      "Whether you've been hurt by a defective medical device, a dangerous household product, a faulty vehicle component, or any other defective product, we're here to fight for the compensation you deserve.",
    ],
    keyPoints: [
      "Expert product defect analysis",
      "Cases against major manufacturers",
      "Design and manufacturing defect claims",
      "Failure to warn cases",
      "Class action and mass tort experience",
    ],
  },
  {
    slug: "medical-malpractice",
    icon: Stethoscope,
    title: "Medical Malpractice",
    description: "Pursuing accountability for medical errors and patient harm. Our medical experts reconstruct negligence in cases of surgical errors, misdiagnoses, and birth injuries.",
    longDescription: [
      "Medical professionals are held to high standards of care. When doctors, nurses, hospitals, or other healthcare providers fail to meet these standards and a patient is harmed as a result, it constitutes medical malpractice.",
      "Our attorneys work with leading medical experts to review your case, identify instances of negligence, and build a strong claim for compensation. We handle cases involving surgical errors, misdiagnosis, delayed diagnosis, medication errors, birth injuries, anesthesia errors, and more.",
      "Medical malpractice cases are complex and require specialized knowledge. With over 30 years of experience, Shapiro Law Office has the expertise to navigate these challenging cases and achieve meaningful results for our clients.",
    ],
    keyPoints: [
      "Collaboration with top medical experts",
      "Surgical error and misdiagnosis cases",
      "Birth injury representation",
      "Hospital negligence claims",
      "Medication and anesthesia error cases",
    ],
  },
  {
    slug: "catastrophic-injuries",
    icon: Briefcase,
    title: "Catastrophic Injuries",
    description: "Serious injuries demand serious representation — we deliver results. We fight for traumatic brain injuries, spinal cord damage, amputations, and permanent disabilities.",
    longDescription: [
      "Catastrophic injuries — such as traumatic brain injuries, spinal cord damage, amputations, severe burns, and permanent disabilities — can fundamentally change your life and the lives of your loved ones. These cases demand experienced legal representation that understands the full scope of your needs.",
      "At Shapiro Law Office, we work with medical professionals, life care planners, and economic experts to calculate the true cost of your injury, including future medical care, rehabilitation, lost earning capacity, and pain and suffering.",
      "We fight aggressively to ensure that you and your family receive the comprehensive compensation needed to move forward with dignity and security.",
    ],
    keyPoints: [
      "Traumatic brain injury expertise",
      "Spinal cord and paralysis cases",
      "Life care planning and future cost analysis",
      "Lost earning capacity calculations",
      "Compassionate, dedicated representation",
    ],
  },
  {
    slug: "real-estate",
    icon: Home,
    title: "Real Estate Transactions",
    description: "Clear, efficient, and secure handling of your property matters. We protect your interests in every real estate deal, from residential closings to commercial transactions.",
    longDescription: [
      "Real estate transactions are among the most significant financial decisions you'll make. Whether you're buying your first home, selling a property, or involved in a commercial real estate deal, having experienced legal representation is essential to protecting your interests.",
      "At Shapiro Law Office, we provide comprehensive real estate legal services, including contract review and negotiation, title searches, closing representation, and dispute resolution. We ensure that every detail is handled correctly so you can proceed with confidence.",
      "Our attorneys have deep knowledge of New York real estate law and work diligently to identify and address potential issues before they become problems.",
    ],
    keyPoints: [
      "Residential and commercial closings",
      "Contract review and negotiation",
      "Title search and insurance coordination",
      "Dispute resolution",
      "Landlord-tenant matters",
    ],
  },
  {
    slug: "motor-vehicle-accidents",
    icon: Car,
    title: "Motor Vehicle Accidents",
    description: "We fight for victims of reckless drivers, securing compensation for medical bills, lost wages, and pain/suffering. Our attorneys handle collisions involving cars, trucks, motorcycles, and rideshares.",
    longDescription: [
      "Motor vehicle accidents can cause devastating injuries and significant financial hardship. Whether you've been involved in a car crash, truck accident, motorcycle collision, or rideshare incident, our experienced attorneys are ready to fight for the compensation you deserve.",
      "We handle every aspect of your case, from dealing with insurance companies to pursuing litigation when necessary. Our team investigates the accident, gathers evidence, consults with accident reconstruction experts, and builds a strong case to maximize your recovery.",
      "New York's no-fault insurance system can be complex. We help you navigate the process and pursue additional compensation when your injuries meet the serious injury threshold.",
    ],
    keyPoints: [
      "Car, truck, and motorcycle accidents",
      "Rideshare (Uber/Lyft) accidents",
      "Accident reconstruction analysis",
      "Insurance company negotiations",
      "No-fault and serious injury threshold claims",
    ],
  },
  {
    slug: "rent-a-car-defense",
    icon: ShieldCheck,
    title: "Defense for Rent-A-Car Companies",
    description: "Specialized legal defense for rental car companies facing liability claims. We provide strategic representation to protect your business interests in accident and negligence cases.",
    longDescription: [
      "Rental car companies face unique legal challenges when their vehicles are involved in accidents. At Shapiro Law Office, we provide specialized defense representation for rental car companies, helping them navigate complex liability claims and protect their business interests.",
      "Our defense team understands the specific regulations and legal frameworks that apply to the rental car industry. We develop strategic defense plans tailored to each case, working to minimize exposure and achieve favorable outcomes.",
      "Whether defending against personal injury claims, property damage suits, or negligence allegations, we bring decades of experience and a thorough understanding of both sides of accident litigation.",
    ],
    keyPoints: [
      "Industry-specific legal expertise",
      "Strategic defense planning",
      "Liability exposure minimization",
      "Regulatory compliance guidance",
      "Claims management support",
    ],
  },
  {
    slug: "ebike-scooter-accidents",
    icon: Zap,
    title: "E-Bike & Scooter Accidents",
    description: "Specialized representation for electric bicycle and scooter crash victims across New York. We understand the unique laws governing these emerging transportation cases.",
    longDescription: [
      "The rise of e-bikes and electric scooters in New York has brought a new category of accident cases. These vehicles operate under unique regulations, and accidents involving them can raise complex legal questions about liability, insurance coverage, and applicable traffic laws.",
      "At Shapiro Law Office, we stay at the forefront of this evolving area of law. Whether you've been injured while riding an e-bike or scooter, or you were hit by one, we know how to build a strong case for compensation.",
      "We handle cases involving e-bike and scooter manufacturers, rental companies, negligent drivers, and municipalities that fail to provide safe infrastructure for these vehicles.",
    ],
    keyPoints: [
      "Expertise in emerging transportation law",
      "E-bike and scooter accident claims",
      "Manufacturer and rental company liability",
      "Insurance coverage analysis",
      "Municipal infrastructure negligence cases",
    ],
  },
];
