
export const products = [

  {
    id: "industrial-ductable-air-cooler",
    name: "Industrial Ductable Air Cooler",
    category: "air-coolers",
    categoryName: "Industrial Air Coolers",
    shortDescription:
      "High-capacity ductable air cooler (0.75 kW to 4.5 kW) delivering up to 25,000 CFM for large factory bays and multi-zone ducts.",
    description:
      "The GreenTech Industrial Ductable Air Cooler is engineered to deliver powerful, efficient cooling across large industrial spaces. Its ductable discharge allows cool fresh air to be distributed across long runs and multiple operator workstations. Built with pure copper motor, heavy-duty axial fan, and high-density 4-sided honeycomb cooling pads.",
    image: "/images/coolers/ductable-air-cooler.jpg",
    gallery: [
      "/images/coolers/ductable-air-cooler.jpg",
      "/images/coolers/ductable-air-cooler-2.jpg",
      "/images/coolers/cooler-3kw.jpg",
      "/images/coolers/top-discharge-cooler.jpg",
    ],
    features: [
      "Available in 0.75 kW, 1.1 kW, 1.5 kW, 3.0 kW and 4.5 kW power ratings",
      "Air delivery from 8,000 CFM up to 25,000 CFM",
      "Ductable design for multi-zone workshop distribution",
      "Electricity saver copper winding axial fan motor",
      "100% fresh air displacement with natural humidity control",
      "Durable weather-resistant ABS casing with heavy-duty castor wheels",
      "Low noise operation (70 dB)",
    ],
    specs: {
      type: "cooler-table",
      headers: ["Model Power", "Air Flow (CFM)", "Cooling Area", "Voltage", "Water Tank", "Water Cons."],
      rows: [
        ["0.75 kW", "8,000 CFM", "800 – 1,000 Sq Ft", "3 Phase 380/415V", "100 LTR", "8–10 L/H"],
        ["1.1 kW", "10,000 CFM", "1,200 – 1,500 Sq Ft", "3 Phase 380/415V", "20 LTR", "10–15 L/H"],
        ["1.5 kW", "12,000 CFM", "1,500 – 2,000 Sq Ft", "3 Phase 380/415V", "20 LTR", "15–20 L/H"],
        ["3.0 kW", "18,000 CFM", "2,000 – 2,500 Sq Ft", "3 Phase 380/415V", "20 LTR", "25–30 L/H"],
        ["4.5 kW", "25,000 CFM", "2,500 – 3,000 Sq Ft", "3 Phase 380/415V", "30 LTR", "30–35 L/H"],
      ],
    },
    benefits: [
      "Efficient Performance",
      "Durable Construction",
      "Industrial Applications",
      "Easy Maintenance",
    ],
    badge: "Bestseller",
  },
  {
    id: "top-discharge-air-cooler",
    name: "Top Discharge Industrial Air Cooler",
    category: "air-coolers",
    categoryName: "Industrial Air Coolers",
    shortDescription:
      "Upward ceiling discharge model (1.1 kW & 1.5 kW) for high-bay duct networks and open factory floors.",
    description:
      "The Top Discharge Air Cooler from GreenTech Solutions features an upward air discharge elbow hood, making it ideal for overhead duct routing and high-roof industrial sheds. Keeps shopfloors clutter-free while delivering uniform cool draft from above.",
    image: "/images/coolers/top-discharge-cooler.jpg",
    gallery: [
      "/images/coolers/top-discharge-cooler.jpg",
      "/images/coolers/cooler-1-1kw.jpg",
      "/images/coolers/ductable-air-cooler-2.jpg",
    ],
    features: [
      "Top discharge elbow for overhead factory duct networks",
      "Available in 1.1 kW (10,000 CFM) & 1.5 kW (12,000 CFM)",
      "Covers 1,200 to 2,000 sq ft floor space",
      "Axial aerodynamic fan blades for maximum throw",
      "3 Phase 380/415V continuous duty copper motor",
      "Low water consumption with auto float valve",
    ],
    specs: {
      type: "cooler-table",
      headers: ["Specification", "1.1 kW Model", "1.5 kW Model"],
      rows: [
        ["Power Rating", "1.1 kW", "1.5 kW"],
        ["Air Delivery", "10,000 CFM", "12,000 CFM"],
        ["Area Coverage", "1,200 – 1,500 Sq Ft", "1,500 – 2,000 Sq Ft"],
        ["Voltage / Phase", "380/415V, 3 Phase", "380/415V, 3 Phase"],
        ["Fan Type", "Heavy Axial", "Heavy Axial"],
        ["Air Discharge", "Top Elbow", "Top Elbow"],
      ],
    },
    benefits: [
      "Efficient Performance",
      "Durable Construction",
      "Industrial Applications",
      "Easy Maintenance",
    ],
    badge: "Ceiling Duct",
  },
  {
    id: "down-discharge-air-cooler",
    name: "Down Discharge Industrial Air Cooler",
    category: "air-coolers",
    categoryName: "Industrial Air Coolers",
    shortDescription:
      "Wall/window mounted down-discharge cooler with galvanized ducting for targeted floor & operator cooling.",
    description:
      "The Down Discharge (Down Position) Air Cooler distributes cool air directly downwards at floor level. Mounted on exterior wall brackets or roof eaves with galvanized sheet metal down ducts, it leaves 100% floor space available for machinery while targeting operator workstations.",
    image: "/images/coolers/down-discharge-cooler.jpg",
    gallery: [
      "/images/coolers/down-discharge-cooler.jpg",
      "/images/coolers/down-discharge-cooler-2.jpg",
      "/images/coolers/ductable-air-cooler.jpg",
    ],
    features: [
      "Downward air discharge into building windows or wall cutouts",
      "Targeted worker zone draft for injection moulding, packaging, and assembly lines",
      "Exterior wall bracket mountable saving 100% shopfloor space",
      "Heavy-duty galvanized sheet metal transition duct compatible",
      "Low water consumption with high-density cooling pads",
    ],
    specs: null,
    benefits: [
      "Targeted Cooling",
      "Saves Floor Space",
      "Heavy Duty",
      "Low Operating Cost",
    ],
    badge: "Wall Mount",
  },
  {
    id: "ss-heavy-duty-air-cooler",
    name: "Heavy Duty Stainless Steel Air Cooler",
    category: "air-coolers",
    categoryName: "Industrial Air Coolers",
    shortDescription:
      "Grade-304 Stainless Steel body with red structural steel frame for chemical, textile, and harsh environments.",
    description:
      "The GreenTech Stainless Steel Heavy Duty Industrial Air Cooler is engineered for severe factory environments where maximum corrosion resistance and durability are required. Featuring pure copper motor, 4-side high density cooling pads, and heavy gauge structural steel corner reinforcement.",
    image: "/images/coolers/stainless-steel-cooler.jpg",
    gallery: [
      "/images/coolers/stainless-steel-cooler.jpg",
      "/images/coolers/top-discharge-cooler.jpg",
      "/images/coolers/down-discharge-cooler.jpg",
    ],
    features: [
      "Grade 304 Stainless Steel heavy gauge metal body",
      "Structural corner frame reinforcement for extreme rigidity",
      "Corrosion-proof in high-humidity, dye houses, and chemical zones",
      "Heavy duty copper winding industrial motor",
      "100% fresh air displacement",
      "Heavy-duty lockable caster wheels for mobility",
    ],
    specs: null,
    benefits: [
      "Heavy Duty Construction",
      "Corrosion Resistant",
      "High Airflow Delivery",
      "Industrial Grade Reliability",
    ],
    badge: "Heavy Duty SS",
  },

  {
    id: "direct-drive-exhaust-fan",
    name: "Industrial Direct Drive Exhaust Fan (GTS-800 to GTS-1530)",
    category: "exhaust-fans",
    categoryName: "Industrial Exhaust Fans",
    shortDescription:
      "Heavy-duty direct drive exhaust fan series (800mm to 1530mm) delivering up to 18,000 CFM with zero belt maintenance.",
    description:
      "The GreenTech GTS Series Direct Drive Industrial Exhaust Fan is designed for continuous duty industrial ventilation. By coupling the high-torque motor directly to the impeller hub, belt slippage, adjustments, and belt wear are 100% eliminated. Fitted with front heavy protective safety cage and automatic gravity backdraft louvers.",
    image: "/images/exhaust-fans/direct-drive-fan.jpg",
    gallery: [
      "/images/exhaust-fans/direct-drive-fan.jpg",
      "/images/exhaust-fans/belt-drive-fan.jpg",
      "/images/exhaust-fans/fibercone-rooftop.jpg",
    ],
    features: [
      "Available in 800mm, 1000mm, 1380mm, and 1530mm square frame sizes",
      "High airflow extraction from 8,000 CFM up to 18,000 CFM",
      "Direct drive motor – zero belt replacement and zero maintenance downtime",
      "Heavy gauge galvanized steel frame with anti-corrosion coating",
      "1400 RPM high torque 3-Phase 380/415V motor",
      "Protective wire safety mesh on front side",
    ],
    specs: {
      type: "exhaust-table",
      headers: ["Model", "Blade Size", "Air Flow (CFM)", "Motor Speed", "Power", "Voltage"],
      rows: [
        ["GTS-800", "800 mm", "8,000 CFM", "1400 RPM", "550 W", "3 Phase 380/415V"],
        ["GTS-1000", "1000 mm", "12,000 CFM", "1400 RPM", "550 W", "3 Phase 380/415V"],
        ["GTS-1380", "1380 mm", "15,000 CFM", "1400 RPM", "1100 W", "3 Phase 380/415V"],
        ["GTS-1530", "1530 mm", "18,000 CFM", "1400 RPM", "1500 W", "3 Phase 380/415V"],
      ],
    },
    benefits: [
      "Zero Belt Maintenance",
      "High Extraction CFM",
      "Heavy Galvanized Steel",
      "24/7 Continuous Duty",
    ],
    badge: "Zero Maintenance",
  },
  {
    id: "belt-drive-exhaust-fan",
    name: "Industrial Belt Drive Exhaust Fan",
    category: "exhaust-fans",
    categoryName: "Industrial Exhaust Fans",
    shortDescription:
      "High-volume belt-driven heavy industrial fan for workshops, foundry sheds, and large warehouses.",
    description:
      "GreenTech Belt Drive Exhaust Fans are built for demanding industrial environments where higher static pressure, variable speed matching, and smooth continuous airflow extraction are required. Equipped with high-grade V-belts, cast iron pulleys, and heavy aerodynamic stainless/galvanized blades.",
    image: "/images/exhaust-fans/belt-drive-fan.jpg",
    gallery: [
      "/images/exhaust-fans/belt-drive-fan.jpg",
      "/images/exhaust-fans/direct-drive-fan.jpg",
    ],
    features: [
      "High volume air extraction with smooth start belt drive",
      "Heavy-duty galvanized square box casing with circular shroud",
      "High static pressure capability for ducted or louvred walls",
      "Automatic shut-off louvers prevent dust & rain backflow",
      "Low noise transmission to mounting structures",
    ],
    specs: null,
    benefits: [
      "High Static Pressure",
      "Smooth Operation",
      "Durable Construction",
      "Factory Standard",
    ],
    badge: "Heavy Duty",
  },
  {
    id: "fibercone-exhaust-fan",
    name: "Industrial Fibercone Aerodynamic Exhaust Fan (GTS-560 to GTS-1460)",
    category: "exhaust-fans",
    categoryName: "Industrial Exhaust Fans",
    shortDescription:
      "Corrosion-proof molded fiberglass cone exhaust fan series (560mm to 1460mm) delivering up to 18,000 CFM.",
    description:
      "The GreenTech GTS Series Industrial Fibercone Exhaust Fan features a molded fiberglass composite discharge cone that drastically increases air exhaust velocity while offering 100% corrosion immunity in chemical, dyeing, textile, poultry, and pharmaceutical facilities.",
    image: "/images/exhaust-fans/fibercone-fan.jpg",
    gallery: [
      "/images/exhaust-fans/fibercone-fan.jpg",
      "/images/exhaust-fans/fibercone-rooftop.jpg",
      "/images/exhaust-fans/fibercone-wall-mount.jpg",
    ],
    features: [
      "Molded aerodynamic fiberglass cone for maximum airflow velocity",
      "100% rust-proof and chemical-resistant housing",
      "Available across 6 sizes: GTS-560, GTS-660, GTS-850, GTS-1060, GTS-1260, and GTS-1460",
      "Airflow extraction from 6,000 CFM up to 18,000 CFM",
      "Aerodynamic 3-blade and 6-blade high-tensile impellers",
      "Quiet operation (60 to 70 dB)",
    ],
    specs: {
      type: "fibercone-table",
      headers: ["Model", "Fan Dia", "Blades", "Air Capacity", "Rated Power", "Size (mm)"],
      rows: [
        ["GTS-560", "380 mm / 15\"", "3 Pcs", "6,000 CFM", "0.37 kW", "560 × 560 × 450"],
        ["GTS-660", "480 mm / 19\"", "3 Pcs", "8,000 CFM", "0.37 kW", "660 × 660 × 450"],
        ["GTS-850", "640 mm / 25\"", "6 Pcs", "10,000 CFM", "0.55 kW", "850 × 850 × 450"],
        ["GTS-1060", "890 mm / 36\"", "6 Pcs", "12,000 CFM", "0.75 kW", "1060 × 1060 × 550"],
        ["GTS-1260", "1080 mm / 43\"", "6 Pcs", "15,000 CFM", "0.75 kW", "1260 × 1260 × 550"],
        ["GTS-1460", "1260 mm / 50\"", "6 Pcs", "18,000 CFM", "1.10 kW", "1460 × 1460 × 550"],
      ],
    },
    benefits: [
      "Corrosion Immunity",
      "High Discharge Velocity",
      "Energy Efficient",
      "Chemical & Textile Ready",
    ],
    badge: "Fiberglass Cone",
  },
  {
    id: "industrial-rooftop-exhaust-fan",
    name: "Industrial Rooftop Exhaust Fan Unit",
    category: "exhaust-fans",
    categoryName: "Industrial Exhaust Fans",
    shortDescription:
      "Heavy-duty aerodynamic rooftop cowl exhaust fan system for factory shed roofs and large warehouse ventilation.",
    description:
      "GreenTech Industrial Rooftop Exhaust Fans are engineered for roof-mounted installation across factory sheds and warehouses. Featuring an aerodynamic curved fiberglass weather hood, heavy-duty axial extraction impeller, and weatherproof rain cowl, they continuously expel rising heat, smoke, and industrial fumes without ducting bottlenecks.",
    image: "/images/exhaust-fans/rooftop-exhaust-fan.jpg",
    gallery: [
      "/images/exhaust-fans/rooftop-exhaust-fan.jpg",
      "/images/exhaust-fans/fibercone-rooftop.jpg",
      "/images/exhaust-fans/fibercone-fan.jpg",
    ],
    features: [
      "Aerodynamic curved fiberglass roof cowl discharge housing",
      "Direct roof curb mounting for maximum upward heat evacuation",
      "Weather-proof, UV-stabilized and rain-deflecting design",
      "High-CFM heavy-duty industrial motor with thermal protection",
      "Continuous 24/7 factory heat and fume removal",
      "Zero rainwater entry even during severe storms",
    ],
    specs: null,
    benefits: [
      "Direct Roof Mounting",
      "Continuous Heat Removal",
      "Weather & Storm Proof",
      "High Airflow Capacity",
    ],
    badge: "Rooftop Series",
  },

  {
    id: "high-bay-light",
    name: "Industrial High Bay Light",
    category: "industrial-lights",
    categoryName: "Industrial Lighting",
    shortDescription:
      "High-efficiency industrial high bay lighting for factories, warehouses, and industrial sheds.",
    description:
      "GreenTech Industrial High Bay Lights provide powerful, uniform illumination for high-ceiling industrial facilities. With energy-efficient LED technology, they deliver significant electricity savings compared to traditional metal halide or HID lighting.",
    image: "/images/industrial-lights/high-bay-light.jpg",
    gallery: [
      "/images/industrial-lights/high-bay-light.jpg",
      "/images/industrial-lights/category-lights.jpg",
    ],
    features: [
      "High lumen output for high-ceiling spaces",
      "Energy-efficient LED technology – up to 70% energy savings",
      "Long operating lifespan (50,000+ hours)",
      "Die-cast aluminium housing for superior heat dissipation",
      "IP65 rated for dust and water resistance",
      "Wide beam angle for uniform light distribution",
      "Instant start with no warm-up time",
    ],
    specs: null,
    benefits: [
      "Energy Saving",
      "Long Lifespan",
      "Industrial Applications",
      "Easy Maintenance",
    ],
    badge: "Bestseller",
  },
  {
    id: "street-light",
    name: "Industrial LED Street Light",
    category: "industrial-lights",
    categoryName: "Industrial Lighting",
    shortDescription:
      "Robust LED street lighting for factory campus roads, parking areas, and industrial perimeters.",
    description:
      "GreenTech Industrial LED Street Lights are engineered for outdoor industrial lighting requirements. Designed to withstand harsh outdoor conditions while providing bright, uniform illumination for safety and security across factory campuses.",
    image: "/images/industrial-lights/street-light.jpg",
    gallery: [
      "/images/industrial-lights/street-light.jpg",
      "/images/industrial-lights/category-lights.jpg",
    ],
    features: [
      "High-efficiency LED chips for maximum lumen output",
      "Weatherproof IP66 rated housing",
      "Surge protection up to 10 kV",
      "Corrosion-resistant powder-coated aluminium body",
      "Optimized optics for uniform road illumination",
      "Available in multiple wattages (30W to 200W)",
    ],
    specs: null,
    benefits: [
      "Energy Saving",
      "Durable Construction",
      "Industrial Applications",
      "Low Maintenance",
    ],
    badge: null,
  },
  {
    id: "flood-light",
    name: "Industrial LED Flood Light",
    category: "industrial-lights",
    categoryName: "Industrial Lighting",
    shortDescription:
      "Powerful LED floodlights for outdoor yards, building facades, and loading areas.",
    description:
      "GreenTech LED Flood Lights deliver intense, wide-angle illumination for large outdoor areas, loading bays, material storage yards, and security perimeters. Engineered for high durability and energy efficiency.",
    image: "/images/industrial-lights/flood-light.jpg",
    gallery: [
      "/images/industrial-lights/flood-light.jpg",
      "/images/industrial-lights/category-lights.jpg",
    ],
    features: [
      "High-power LED chips for wide area coverage",
      "Adjustable mounting bracket for flexible aiming",
      "Toughened glass lens with high impact resistance",
      "IP66 rated waterproof and dustproof design",
      "Effective heat sink for extended LED life",
      "Available in 50W, 100W, 150W, and 200W models",
    ],
    specs: null,
    benefits: [
      "High Brightness",
      "Weatherproof",
      "Energy Efficient",
      "Flexible Mounting",
    ],
    badge: null,
  },
  {
    id: "solar-street-light",
    name: "Solar Street Light",
    category: "industrial-lights",
    categoryName: "Industrial Lighting",
    shortDescription:
      "Self-powered solar LED street light with integrated solar panel, battery, and smart controller.",
    description:
      "GreenTech Solar Street Lights provide reliable, zero-electricity-cost lighting for industrial campus roads, perimeter walls, and remote factory areas. All-in-one design combines high-efficiency solar panel, long-life Lithium battery, and smart dusk-to-dawn controller.",
    image: "/images/industrial-lights/solar-street-light.jpg",
    gallery: [
      "/images/industrial-lights/solar-street-light.jpg",
      "/images/industrial-lights/category-lights.jpg",
    ],
    features: [
      "100% solar powered – zero electricity cost",
      "Integrated monocrystalline solar panel",
      "LiFePO4 battery for long cycle life (5+ years)",
      "Automatic dusk-to-dawn operation",
      "Motion sensor dimming for extended runtime",
      "Easy installation – no cabling or trenching needed",
      "IP65 rated for all-weather outdoor operation",
    ],
    specs: null,
    benefits: [
      "Zero Energy Cost",
      "Eco-Friendly",
      "Easy Installation",
      "Low Maintenance",
    ],
    badge: "Eco-Friendly",
  },

  {
    id: "qc-table",
    name: "QC & Garment Inspection Checking Table",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Specialized garment quality inspection table with blue inspection board, overhead light fixture, and switchboard.",
    description:
      "GreenTech QC Tables provide a dedicated workspace for garment quality control, thread checking, and piece measurement. Complete with contrast blue pinboard, overhead illumination lamp fixture, lower bottom storage shelf, and pre-wired switch box.",
    image: "/images/furniture/qc-table.jpg",
    gallery: [
      "/images/furniture/qc-table.jpg",
      "/images/furniture/work-table.jpg",
      "/images/furniture/tent-inspection-table.jpg",
    ],
    features: [
      "High-contrast blue pinboard for fabric & stitching inspection",
      "Overhead canopy with pre-wired tube light fixture",
      "Integrated electrical multi-pin switch box",
      "Heavy-gauge square tube steel frame with bottom storage shelf",
      "Smooth scratch-proof laminate worktop",
      "Ergonomic working height for standing or high-stool inspection",
    ],
    specs: null,
    benefits: [
      "Purpose Built",
      "Ergonomic Design",
      "Garment Industry",
      "Integrated Electric Box",
    ],
    badge: "Garment QC",
  },
  {
    id: "stitching-unit-table",
    name: "Stitching Unit Table",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Industrial stitching unit table for garment and textile sewing machine operations.",
    description:
      "GreenTech Stitching Unit Tables are designed for apparel shopfloor lines. Heavy-gauge steel construction provides zero vibration for sewing machine operations with organized cable and waste chutes.",
    image: "/images/furniture/stitching-table.jpg",
    gallery: ["/images/furniture/stitching-table.jpg"],
    features: [
      "Designed for industrial sewing machine mounting",
      "Stable heavy-gauge steel frame with anti-vibration rubber pads",
      "Smooth rounded edge work surface preventing fabric snagging",
      "Cable and pneumatic line routing provisions",
      "Easy assembly and modular line reconfiguration",
    ],
    specs: null,
    benefits: [
      "Vibration Free",
      "Ergonomic Height",
      "Garment Floor Standard",
      "Durable Finish",
    ],
    badge: null,
  },
  {
    id: "machine-butterfly-system",
    name: "Machine Butterfly Overhead System",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Overhead continuous power conduit and illumination framework for garment sewing lines.",
    description:
      "The GreenTech Machine Butterfly System is engineered for modern apparel production floors. It provides continuous overhead electrical trunking, task illumination brackets, and pneumatic airline hanging tracks directly above operator workstations for safe, tangle-free shopfloor efficiency.",
    image: "/images/furniture/butterfly-system.jpg",
    gallery: [
      "/images/furniture/butterfly-system.jpg",
      "/images/furniture/long-inspection-line.jpg",
    ],
    features: [
      "Modular overhead steel framework spanning sewing rows",
      "Pre-engineered electrical & LED light mounting channels",
      "Tangle-free aerial wiring channels keeping floors 100% clean",
      "Heavy duty anti-vibration floor/ceiling support uprights",
      "Quick reconfigurability for changing stitching lines",
    ],
    specs: null,
    benefits: [
      "Shopfloor Safety",
      "Continuous Power",
      "Optimal Illumination",
      "OEM Standard Setup",
    ],
    badge: "Garment Line",
  },
  {
    id: "heavy-duty-storage-rack",
    name: "Heavy Duty Pallet Storage Rack",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Multi-tier industrial pallet and raw material storage rack with blue uprights and high-visibility orange beams.",
    description:
      "GreenTech Heavy Duty Storage Racks provide high-density vertical storage for raw materials, fabric rolls, finished goods cartons, and heavy equipment. Built with roll-formed structural steel uprights and heavy beam connectors.",
    image: "/images/furniture/storage-rack.jpg",
    gallery: [
      "/images/furniture/storage-rack.jpg",
      "/images/furniture/fabric-roll-rack.jpg",
    ],
    features: [
      "Heavy-duty roll-formed steel upright columns",
      "High load capacity (up to 1,500+ kg per tier level)",
      "High-visibility orange powder-coated load beams",
      "Adjustable beam levels on 50mm pitch increments",
      "Forklift and hand pallet truck friendly design",
    ],
    specs: null,
    benefits: [
      "Vertical Density",
      "High Load Rating",
      "Safety Locking Pins",
      "Warehouse Standard",
    ],
    badge: "Heavy Duty",
  },
  {
    id: "worker-lunch-box-rack",
    name: "Worker Lunch Box Wire Mesh Rack",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Multi-compartment ventilated wire mesh pigeonhole rack for factory worker lunch boxes and personal items.",
    description:
      "The Worker Lunch Box Rack provides an organized, hygienic pigeonhole storage solution for worker lunch boxes in canteen and break areas. Ventilated steel wire grid design prevents foul odor, pest buildup, and food spoilage.",
    image: "/images/furniture/lunch-box-rack.jpg",
    gallery: ["/images/furniture/lunch-box-rack.jpg"],
    features: [
      "Individual ventilated wire mesh pigeonhole compartments",
      "Sturdy tubular steel frame construction",
      "Clear visual audit prevents misplaced items",
      "Pest-free, hygienic, and easy to wash",
      "Available in 24, 36, and 48 compartment setups",
    ],
    specs: null,
    benefits: [
      "Hygiene & Welfare",
      "Organized Canteen",
      "Ventilated Design",
      "Zero Rust Coating",
    ],
    badge: null,
  },
  {
    id: "raw-material-trolley",
    name: "Raw Material Deep Tub Trolley (450 Ltrs)",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Heavy-duty mobile deep poly tub cart for moving fabric cut pieces, bulk raw materials, and WIP inventory.",
    description:
      "The Raw Material Movement Trolley features a heavy-duty seamless molded deep polyethylene tub supported by an industrial steel undercarriage with heavy castor wheels. Perfect for wet or dry textiles, yarn cones, plastic granules, and auto components.",
    image: "/images/furniture/raw-material-trolley.jpg",
    gallery: ["/images/furniture/raw-material-trolley.jpg"],
    features: [
      "Seamless heavy-gauge impact-resistant poly tub (approx 450 Litres)",
      "Heavy-duty steel chassis undercarriage with reinforced wheel plates",
      "Smooth non-marking industrial swivel caster wheels",
      "Smooth interior prevents snagging or tearing delicate textiles",
      "Easy push-pull maneuvering across factory floors",
    ],
    specs: null,
    benefits: [
      "Bulk Volume",
      "Smooth Material Care",
      "Effortless Steering",
      "High Load Rating",
    ],
    badge: "450 Ltrs",
  },
  {
    id: "heavy-duty-loading-trolley",
    name: "Heavy Duty Slotted Platform Loading Trolley",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Rigid steel platform trolley with slotted base and ergonomic push handle for heavy cartons and freight.",
    description:
      "GreenTech Heavy Duty Platform Loading Trolleys are manufactured with thick prime sheet metal, perimeter reinforcement angle framing, and high-load industrial casters. Designed for daily loading bay, raw material warehouse, and transport operations.",
    image: "/images/furniture/loading-trolley.jpg",
    gallery: ["/images/furniture/loading-trolley.jpg"],
    features: [
      "Heavy-gauge steel platform with slotted ventilation/strap cutouts",
      "Ergonomic curved tubular push handle",
      "High load bearing 300 to 500+ kg capacity",
      "2 fixed + 2 swivel heavy-duty polyurethane wheels",
      "Scratch-resistant industrial powder coat finish",
    ],
    specs: null,
    benefits: [
      "Heavy Duty Load",
      "Effortless Gliding",
      "Puncture Proof Wheels",
      "Rugged Steel",
    ],
    badge: "500 kg Load",
  },
  {
    id: "tailor-work-stool",
    name: "Tailor Operator Work Stool",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Heavy-duty square steel operator stool with 4-side foot rest and anti-skid rubber feet for apparel workstations.",
    description:
      "Built with heavy-gauge square steel tube legs, reinforcement foot rest perimeter, and scratch-proof non-skid rubber shoes. Designed for 8-12 hour continuous factory shift comfort and endurance across sewing and checking lines.",
    image: "/images/furniture/tailor-stool.jpg",
    gallery: [
      "/images/furniture/tailor-stool.jpg",
      "/images/furniture/tailor-ergonomic-chair.jpg",
      "/images/furniture/inspection-stool.jpg",
    ],
    features: [
      "Heavy-gauge square tube steel welded frame",
      "Ergonomic sitting height for standard sewing machines",
      "Built-in 4-side perimeter foot rest bar",
      "Durable anti-skid heavy rubber base shoes",
      "High load bearing 150+ kg capacity with scratch-proof powder coat",
    ],
    specs: null,
    benefits: [
      "Shift Ergonomics",
      "Unbreakable Welds",
      "Floor Protection",
      "Space Saving",
    ],
    badge: null,
  },
  {
    id: "tailor-work-basket",
    name: "Tailor Angled Wire Mesh Work Basket",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Heavy-gauge black angled wire mesh work basket for holding fabric cut pieces and tailor bundles.",
    description:
      "GreenTech Tailor Work Baskets are designed specifically for garment production lines. Angled front access allows sewing operators to quickly retrieve and deposit cut pieces without fabric snagging or creasing.",
    image: "/images/furniture/tailor-basket.jpg",
    gallery: [
      "/images/furniture/tailor-basket.jpg",
      "/images/furniture/a-frame-wire-basket.jpg",
    ],
    features: [
      "Heavy-duty welded steel wire mesh structure",
      "Ergonomic angled access mouth for rapid piece handling",
      "Smooth de-burred finish prevents fabric snagging",
      "Rust-proof electrostatic black powder coating",
      "Can sit on table frames or standalone floor stands",
    ],
    specs: null,
    benefits: [
      "Operator Efficiency",
      "Fabric Protection",
      "Rigid Long Life",
      "Factory Standard",
    ],
    badge: null,
  },
  {
    id: "garment-bundle-stand",
    name: "Garment Bundle Slanted Stand",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Chrome/tubular garment bundle rack with slanted saddle pipes and lower wire mesh shelf for organized piece staging.",
    description:
      "Specialized tubular rack designed for intermediate piece staging between cutting lines and sewing lines. Slanted dual-level pipes keep garment bundles separated, numbered, and instantly accessible without fabric creasing.",
    image: "/images/furniture/bundle-stand.jpg",
    gallery: [
      "/images/furniture/bundle-stand.jpg",
      "/images/furniture/finishing-rack.jpg",
    ],
    features: [
      "Heavy-duty seamless tubular steel frame with saddle top rails",
      "Integrated lower wire mesh shelf for accessories and thread spools",
      "Prevents cut fabric mixing and creasing between operations",
      "Scratch-resistant powder coated / chrome finish",
      "Compact footprint fitting narrow sewing floor aisles",
    ],
    specs: null,
    benefits: [
      "Workflow Organization",
      "Zero Fabric Creasing",
      "Lower Storage Shelf",
      "Heavy Duty",
    ],
    badge: null,
  },
  {
    id: "steel-drawer-filing-cabinet",
    name: "4-Drawer Heavy Steel Filing Cabinet",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Dual-tone blue and grey heavy-gauge steel document and sample drawer cabinet with central locking system.",
    description:
      "GreenTech 4-Drawer Steel Filing Cabinets are manufactured with cold-rolled prime steel sheet. Fitted with smooth telescopic roller drawer slides, heavy recessed pull handles, and central multi-drawer security lock for factory office, HR records, and production sample archives.",
    image: "/images/furniture/steel-drawer-cabinet.jpg",
    gallery: ["/images/furniture/steel-drawer-cabinet.jpg"],
    features: [
      "4 spacious high-load telescopic drawers",
      "Dual-tone blue and silver-grey industrial powder coated finish",
      "Central key locking mechanism securing all 4 drawers simultaneously",
      "Anti-tilt interlock safety feature preventing tipping",
      "Durable recessed pull handles and label slots",
    ],
    specs: null,
    benefits: [
      "Secure Records",
      "Smooth Drawer Glide",
      "Durable CRCA Steel",
      "Factory Office Standard",
    ],
    badge: "Central Lock",
  },
  {
    id: "steel-almirah-heavy-duty",
    name: "Heavy Duty CRCA Durable Steel Almirah",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Heavy-gauge CRCA prime steel storage almirah with security locker, adjustable shelves, and 3-way lock.",
    description:
      "The GreenTech Durable Steel Almirah is engineered with heavy-gauge cold-rolled close annealed (CRCA) prime steel. Features dual reinforced doors, internal secret locker, multi-tier shelving, and multi-stage anti-corrosion powder coating.",
    image: "/images/furniture/steel-almirah.jpg",
    gallery: ["/images/furniture/steel-almirah.jpg"],
    features: [
      "High-grade CRCA prime steel sheet (0.8mm to 1.2mm thick)",
      "Three-way brass lock mechanism with duplicate keys",
      "Multiple adjustable storage compartments + lockable vault",
      "Full-height stiffeners on both doors preventing flex",
      "Anti-corrosive 7-tank phosphating and epoxy powder coating",
    ],
    specs: null,
    benefits: [
      "Maximum Durability",
      "High Security Locker",
      "Rust & Scratch Resistant",
      "Lifetime Structural Strength",
    ],
    badge: "Durable Steel",
  },
  {
    id: "industrial-work-tables",
    name: "Industrial Work Table with Overhead Light",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Heavy-duty modular assembly table with dual overhead LED light fixtures and spacious lower storage tier.",
    description:
      "GreenTech Industrial Work Tables are built for assembly line operations, packing stations, and factory workstations. Heavy-duty square tube steel construction, high-illumination dual overhead lamp gantry, and lower staging shelf ensure peak operator productivity.",
    image: "/images/furniture/work-table.jpg",
    gallery: [
      "/images/furniture/work-table.jpg",
      "/images/furniture/factory-workstation.jpg",
      "/images/furniture/tent-inspection-table.jpg",
    ],
    features: [
      "Heavy-gauge square tube steel framework",
      "Overhead lighting gantry with dual high-CRI light fixtures",
      "Extra wide scratch-resistant laminate worktop",
      "Full-length under-shelf storage tier for boxes and tools",
      "Pre-wired electrical wiring channels and switch mounting points",
      "Custom lengths and widths available",
    ],
    specs: null,
    benefits: [
      "Dual Overhead Light",
      "Ergonomic Design",
      "Spacious Under-shelf",
      "Modular Structure",
    ],
    badge: "Overhead Light",
  },
  {
    id: "good-finishing-stock-racks",
    name: "Good Finishing Garment Stock Racks",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Multi-tier tubular garment hanging pipe rack for finished apparel staging and wrinkle-free storage.",
    description:
      "GreenTech Good Finishing Stock Racks are designed for organized staging of finished shirts, jackets, and garments in apparel export units. Multi-tier hanging pipes provide instant accessibility while preventing creases.",
    image: "/images/furniture/finishing-rack.jpg",
    gallery: ["/images/furniture/finishing-rack.jpg"],
    features: [
      "Smooth round steel hanging pipe rails preventing hanger wear",
      "Multi-tier vertical height utilization for maximum garment density",
      "Rigid bolted or welded frame designed for heavy loads",
      "Available with heavy lockable casters for mobile movement",
    ],
    specs: null,
    benefits: [
      "Wrinkle-Free Staging",
      "Space Optimization",
      "Garment Industry Standard",
      "Heavy Hanging Load",
    ],
    badge: null,
  },
  {
    id: "three-tier-wire-trolley",
    name: "3-Tier Mobile Wire Mesh Logistics Trolley",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Multi-tier mobile wire shelf trolley with smooth swivel casters for internal material movement.",
    description:
      "Designed for transporting parts, accessories, fabric rolls, and tools across assembly stations. Features 3 heavy-duty wire shelves with perimeter retaining lips preventing components from falling during transit.",
    image: "/images/furniture/wire-mesh-trolley.jpg",
    gallery: ["/images/furniture/wire-mesh-trolley.jpg"],
    features: [
      "3 deep wire mesh storage tiers with retaining edges",
      "High-capacity tubular steel vertical posts",
      "4 smooth-gliding industrial swivel wheels with brake locks",
      "Ergonomic dual-side push handles",
      "Easy wash and lint-free design",
    ],
    specs: null,
    benefits: [
      "Mobile Efficiency",
      "Multi-Tier Capacity",
      "Zero Maintenance",
      "Effortless Steering",
    ],
    badge: null,
  },
  {
    id: "wire-mesh-storage-cage",
    name: "Industrial Rigid Wire Mesh Storage Cage",
    category: "furniture-storage",
    categoryName: "Factory Furniture & Storage",
    shortDescription:
      "Heavy-duty rigid wire mesh pallet container for bulk parts, yarn cones, and garment components.",
    description:
      "The GreenTech Industrial Wire Mesh Storage Cage provides high-visibility, ventilated bulk storage on factory shopfloors. Ideal for WIP goods, fabric bundles, auto parts, and inventory control.",
    image: "/images/furniture/wire-mesh-cage.jpg",
    gallery: ["/images/furniture/wire-mesh-cage.jpg"],
    features: [
      "High-tensile steel wire grid construction",
      "Reinforced angle steel base structure",
      "Full ventilation preventing mildew and humidity buildup",
      "Forklift and hand pallet truck friendly design",
      "Electro-galvanized / powder coated finish",
    ],
    specs: null,
    benefits: [
      "High Bulk Capacity",
      "Quick Visual Audit",
      "Ventilated Storage",
      "Heavy Duty",
    ],
    badge: null,
  },
];

const idAliases = {
  "air-cooler-0-75kw": "industrial-ductable-air-cooler",
  "air-cooler-1-1kw": "top-discharge-air-cooler",
  "air-cooler-1-5kw": "top-discharge-air-cooler",
  "air-cooler-3kw": "industrial-ductable-air-cooler",
  "air-cooler-4-5kw": "industrial-ductable-air-cooler",
  "gts-800": "direct-drive-exhaust-fan",
  "gts-1000": "direct-drive-exhaust-fan",
  "gts-1380": "direct-drive-exhaust-fan",
  "gts-1530": "direct-drive-exhaust-fan",
  "gts-560": "fibercone-exhaust-fan",
  "gts-660": "fibercone-exhaust-fan",
  "gts-850": "fibercone-exhaust-fan",
  "gts-1060": "fibercone-exhaust-fan",
  "gts-1260": "fibercone-exhaust-fan",
  "gts-1460": "fibercone-exhaust-fan",
  "thread-cutting-checking-table": "qc-table",
  "factory-workstations": "industrial-work-tables",
  "tailor-work-tools": "tailor-work-stool",
  "storage-cabinets": "steel-almirah-heavy-duty",
};

export function getProductById(id) {
  if (!id) return null;
  const canonicalId = idAliases[id] || id;
  return products.find((p) => p.id === canonicalId) || null;
}

export function getProductsByCategory(categoryId) {
  if (!categoryId || categoryId === "all") return products;
  return products.filter((p) => p.category === categoryId);
}

export function getRelatedProducts(currentId, categoryId, limit = 3) {
  const canonicalId = idAliases[currentId] || currentId;
  return products
    .filter((p) => p.category === categoryId && p.id !== canonicalId)
    .slice(0, limit);
}

export const productOptions = products.map((p) => p.name).concat(["Other / Custom Requirement"]);
