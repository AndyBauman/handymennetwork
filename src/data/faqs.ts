export type Faq = { q: string; a: string; category: string };

export const faqCategories = [
  "Pricing & payment",
  "Booking & scheduling",
  "Trust & safety",
  "The menu & services",
  "Elderly & family help",
  "Property managers",
  "Handymen",
] as const;

/** Master FAQ set for SEO + FAQ schema */
export const allFaqs: Faq[] = [
  {
    category: "Pricing & payment",
    q: "How are your prices set?",
    a: "We set menu prices using local market rates for each repair type. The price you see is the price for the work described — not a starting guess.",
  },
  {
    category: "Pricing & payment",
    q: "Are there any hidden fees?",
    a: "No. Your total is shown before you book. If parts are extra (noted on the item), we tell you upfront on that menu line.",
  },
  {
    category: "Pricing & payment",
    q: "Do I pay before or after the work is done?",
    a: "You pay when you book so we can hold your spot and dispatch only available pros. Cancellations before arrival follow our refund policy.",
  },
  {
    category: "Pricing & payment",
    q: "What if the job takes longer than expected?",
    a: "If the work matches the menu description, the price stays the same. If something different is needed, your handyman explains options before doing extra work.",
  },
  {
    category: "Pricing & payment",
    q: "Do you charge a trip fee?",
    a: "Orders $75 and up typically have no separate trip fee in our launch markets. Check your cart at checkout for your address.",
  },
  {
    category: "Pricing & payment",
    q: "Can I tip my handyman?",
    a: "Yes. Tips are optional and go to your handyman. You can add a tip in the app after the job is complete.",
  },
  {
    category: "Pricing & payment",
    q: "What payment methods do you take?",
    a: "Major cards and common digital wallets through our secure checkout.",
  },
  {
    category: "Pricing & payment",
    q: "Do prices change by neighborhood?",
    a: "They can vary slightly by market. Enter your address to see accurate menu prices for your area.",
  },
  {
    category: "Booking & scheduling",
    q: "How fast can someone come?",
    a: "We only ping vetted handymen who are active and not on another job, so many requests get picked up quickly. If no one is free, we offer scheduling or next steps in the app.",
  },
  {
    category: "Booking & scheduling",
    q: "Can I schedule for a specific day and time?",
    a: "Yes. You can choose “schedule later” when instant help is not available.",
  },
  {
    category: "Booking & scheduling",
    q: "What if no one is available right now?",
    a: "We notify you within a few minutes with options: schedule later today, pick another time, or use Help in the app / Get help on the site.",
  },
  {
    category: "Booking & scheduling",
    q: "Can I cancel after booking?",
    a: "Yes. Cancel before your handyman is on the way for a full refund. After they are en route, a small fee may apply to cover their time.",
  },
  {
    category: "Booking & scheduling",
    q: "What is the cancellation policy?",
    a: "Full refund if you cancel before your handyman heads your way. If they are already driving, we may keep a small dispatch fee.",
  },
  {
    category: "Booking & scheduling",
    q: "Can I add another repair after I book?",
    a: "Yes. Add items to a new order or use Help in the app — we will combine when possible so you get one visit.",
  },
  {
    category: "Booking & scheduling",
    q: "Do you offer same-day service?",
    a: "Often, when enough handymen are active in your area. Book early in the day for the best chance of afternoon service.",
  },
  {
    category: "Trust & safety",
    q: "Are your handymen background checked?",
    a: "Yes. Verified pros pass a background check before taking jobs on Handymen Network.",
  },
  {
    category: "Trust & safety",
    q: "Are they insured?",
    a: "We require insurance for pros on the platform. General liability insurance and, where required, bonding are verified during vetting and periodically re-checked. If coverage lapses, the handyman is suspended from receiving offers; we don’t run a public “meet the handymen” directory on the website.",
  },
  {
    category: "Trust & safety",
    q: "How do you pick who comes to my home?",
    a: "We don’t have you pick from a list on the web. Your job is offered to vetted pros who are Active, in range, qualified for that menu item, and not on another job. From that pool we weigh reviews, reliability, and skill fit — similar to how delivery apps assign a shopper. If you have rated a handyman well in the past, they get priority \u2014 the system learns your preferences over time.",
  },
  {
    category: "Trust & safety",
    q: "Can I request a specific handyman?",
    a: "Not directly \u2014 but the system remembers. When you rate a handyman highly, our matching algorithm gives that pro priority on your future orders. If they are active and nearby, they will likely be the first to receive your request. Think of it as the platform learning who you trust.",
  },
  {
    category: "Trust & safety",
    q: "What if my preferred handyman is busy on another job?",
    a: "When you book, you can choose \u201cI can wait for a familiar pro\u201d and set a hold window of up to 2 hours. If your preferred handyman finishes their current job within that window and is in range, they get your request first. If the window passes or they are too far away, we match you with the next best-rated pro so your repair still gets done promptly.",
  },
  {
    category: "Trust & safety",
    q: "What if I am not satisfied with the work?",
    a: "Contact support. If the work does not match what was booked, we will make it right — including sending another pro when appropriate.",
  },
  {
    category: "Trust & safety",
    q: "Will I see who is coming?",
    a: "After a pro is assigned, the app shows what you need to recognize them safely for that visit. We don’t publish individual handyman marketing pages on our website.",
  },
  {
    category: "Trust & safety",
    q: "What if I feel unsafe?",
    a: "Call 911 for emergencies. For platform concerns, use Help in the app immediately so we can see your active order.",
  },
  {
    category: "Trust & safety",
    q: "Why isn’t there a phone number on the website?",
    a: "We keep support in the product (Help in the app) and on the Get help page, That way every request is tied to your order and our team can help you faster.",
  },
  {
    category: "Trust & safety",
    q: "Why can’t I browse handymen before I book?",
    a: "Handymen Network matches vetted pros automatically using skills, reviews, insurance, and availability — not a public directory. That reduces bias and keeps quality high.",
  },
  {
    category: "The menu & services",
    q: "What if my repair is not on the menu?",
    a: "Use “Not sure what you need?” for a short questionnaire or Help in the app. We will guide you to the closest menu item or a custom block of time.",
  },
  {
    category: "The menu & services",
    q: "Can I bundle multiple repairs?",
    a: "Yes. Bundles save money when listed on the menu. You can also add several items to your cart for one visit when a pro accepts.",
  },
  {
    category: "The menu & services",
    q: "Do you provide the materials?",
    a: "Each menu line says “basic materials included” or “you provide materials.” That way there is no guessing.",
  },
  {
    category: "The menu & services",
    q: "What is included in each repair?",
    a: "Every item lists what is included in plain English. Read the line before you add it to your list.",
  },
  {
    category: "The menu & services",
    q: "What if the handyman finds additional issues?",
    a: "They explain what they found and the options before doing work outside the menu item. Nothing extra without your OK.",
  },
  {
    category: "The menu & services",
    q: "Are parts included in the menu price?",
    a: "When parts are included, we say so. Otherwise, parts are extra and we note that on the item.",
  },
  {
    category: "The menu & services",
    q: "Do you do electrical or plumbing inside walls?",
    a: "Our menu focuses on common homeowner tasks. Licensed trade work depends on local rules — ask when booking if you are unsure.",
  },
  {
    category: "Elderly & family help",
    q: "Can I just call instead of using the app?",
    a: "We don’t publish a call center number on the website . A family member can book from their account, or you can email Get help for non-urgent assistance.",
  },
  {
    category: "Elderly & family help",
    q: "Can my son or daughter book for me?",
    a: "Yes. They can book under their account and add your address and phone for updates.",
  },
  {
    category: "Elderly & family help",
    q: "How do I know when the handyman is coming?",
    a: "We send simple text updates and show plain-language status in the app: on the way, arrived, working, done.",
  },
  {
    category: "Elderly & family help",
    q: "Is there someone I can talk to if I have questions?",
    a: "Use Help in the app first. For the website, open Get help — email is there for human support. We skip public phone numbers on marketing pages.",
  },
  {
    category: "Elderly & family help",
    q: "What if I need extra time to get to the door?",
    a: "Tell us in the notes when you book. Your handyman will wait courteously and knock again.",
  },
  {
    category: "Property managers",
    q: "Do you offer bulk pricing?",
    a: "Yes. See the Property Manager Pack and email from Get help for multi-unit pricing.",
  },
  {
    category: "Property managers",
    q: "Can I set up recurring service?",
    a: "We can set repeat visits for turnover and punch lists. Email accounts from Get help to set it up.",
  },
  {
    category: "Property managers",
    q: "Do you handle apartment turnovers?",
    a: "Yes. The Rental Turnover bundle is built for quick make-ready work.",
  },
  {
    category: "Property managers",
    q: "Can I get monthly invoicing?",
    a: "For qualified accounts, yes. Contact us with your portfolio size.",
  },
  {
    category: "Property managers",
    q: "Do you service multiple units at once?",
    a: "Yes. Book time blocks or multiple line items and note the property list in the details.",
  },
  {
    category: "Handymen",
    q: "How do I sign up as a handyman?",
    a: "Go to the Handyman section, complete verification (ID, insurance, background), then set your service area.",
  },
  {
    category: "Handymen",
    q: "How do I get jobs?",
    a: "Turn on Active when you are free. Nearby menu orders ping you first when you match skills and range.",
  },
  {
    category: "Handymen",
    q: "When do I get paid?",
    a: "Payouts run on a regular schedule after jobs are marked complete and any review window passes.",
  },
  {
    category: "Handymen",
    q: "Can I decline a job?",
    a: "Yes. Declining does not hurt you, but staying active when you are truly available helps your stats.",
  },
  {
    category: "Pricing & payment",
    q: "Is the menu price really final?",
    a: "For the described scope, yes. Changes in scope are agreed on before work starts.",
  },
  {
    category: "Booking & scheduling",
    q: "What happens if my handyman is late?",
    a: "The app updates ETA. If something changes, we notify you by text and in the tracker.",
  },
  {
    category: "Trust & safety",
    q: "Do you verify skills?",
    a: "We review experience and require insurance. Some categories may need proof of trade credentials where required by law.",
  },
  {
    category: "The menu & services",
    q: "Can I book just one hour of mixed tasks?",
    a: "Yes. Use the Honey-Do Blitz or Property Manager time blocks on the menu.",
  },
  {
    category: "The menu & services",
    q: "Do you work on rentals?",
    a: "Yes. Landlords and tenants can book; just make sure someone 18+ is present or access is arranged.",
  },
  {
    category: "Elderly & family help",
    q: "Will someone read the menu to me over the phone?",
    a: "We don’t list a public phone on the site. A trusted family member can book with you side by side, or email Get help and we’ll reply in plain language.",
  },
  {
    category: "Property managers",
    q: "Can I export receipts?",
    a: "Yes. Receipts live in your account under Projects and can be emailed as PDF.",
  },
  {
    category: "Handymen",
    q: "Is there a fee to be on the platform?",
    a: "We take a service fee per completed job. Details are in the pro agreement.",
  },
  {
    category: "Pricing & payment",
    q: "Do you charge sales tax?",
    a: "If your state requires tax on services, it is added clearly at checkout.",
  },
  {
    category: "Booking & scheduling",
    q: "Can I book for a family member’s house?",
    a: "Yes. Enter their address and make sure an adult is available at arrival.",
  },
  {
    category: "Trust & safety",
    q: "What COVID or illness precautions do you take?",
    a: "Pros are expected to follow current health guidance and respect requests like masks when reasonable.",
  },
  {
    category: "The menu & services",
    q: "Do you assemble IKEA and similar furniture?",
    a: "Yes. Pick the small or large assembly line that fits the piece.",
  },
  {
    category: "The menu & services",
    q: "Do you mount TVs on brick or stone?",
    a: "Tell us your wall type in the notes. Some surfaces need special anchors and may adjust price before acceptance.",
  },
  {
    category: "Elderly & family help",
    q: "I do not have email. Can I still book?",
    a: "Have a family member create the booking from their account with your address, or visit together on one device. Email is listed on Get help for written support.",
  },
  {
    category: "Property managers",
    q: "Do you integrate with property software?",
    a: "We are building integrations. Email partnerships for early access.",
  },
  {
    category: "Handymen",
    q: "How does the Active toggle work?",
    a: "When Active is on and you are not on a job, you can receive offers. Turn it off anytime.",
  },
  {
    category: "Pricing & payment",
    q: "Can I use HSA or insurance?",
    a: "Handyman repairs are usually not HSA-eligible. Home warranty claims are separate — check your plan.",
  },
  {
    category: "Booking & scheduling",
    q: "What if I need to reschedule?",
    a: "Use Help in the app or Get help on the site. We will find the next available window.",
  },
  {
    category: "Trust & safety",
    q: "Are pets OK?",
    a: "Yes. Mention pets in your notes so your handyman knows what to expect.",
  },
  {
    category: "The menu & services",
    q: "Do you remove old appliances?",
    a: "Not every market. Use Help in the app for haul-away options tied to an install.",
  },
  {
    category: "Elderly & family help",
    q: "Can I get a printed receipt mailed?",
    a: "We default to email. Use Get help to request postal mail if you need it.",
  },
  {
    category: "Property managers",
    q: "Do you offer W-9 for vendors?",
    a: "Yes for business accounts on request.",
  },
  {
    category: "Handymen",
    q: "What gear do I need?",
    a: "Standard handyman tools for menu items you accept. The job screen lists expectations.",
  },
  {
    category: "Pricing & payment",
    q: "Why is my neighbor’s price slightly different?",
    a: "Markets and demand can adjust prices slightly. Everyone sees their own accurate total at checkout.",
  },
  {
    category: "Booking & scheduling",
    q: "Do you remind me before arrival?",
    a: "Yes. SMS and push reminders when your handyman is on the way.",
  },
  {
    category: "The menu & services",
    q: "Do you do seasonal gutter work?",
    a: "Yes. See gutter cleaning on the Exterior menu.",
  },
  {
    category: "Trust & safety",
    q: "What if something in my home gets damaged?",
    a: "Report it through Help in the app immediately while the handyman is still on site if possible. Every handyman on our platform is an independent contractor who is required to carry general liability insurance and, where applicable, a surety bond as a condition of being vetted and approved. Property damage caused during a service is the sole responsibility of the handyman and is covered under their insurance policy. We will connect you with the handyman's insurer and facilitate the claims process, but Handymen Network is a technology platform that connects customers with independent professionals \u2014 we are not the service provider and do not assume liability for work performed by contractors on the platform.",
  },
  {
    category: "Trust & safety",
    q: "Are handymen on the platform insured and bonded?",
    a: "Yes. Every handyman must provide proof of current general liability insurance before they are approved to receive jobs. Where required by state or local law, a surety bond is also mandatory. We verify coverage during our vetting process and periodically re-verify. If a handyman\u2019s insurance lapses, they are automatically suspended from receiving new offers until coverage is restored.",
  },
  {
    category: "Trust & safety",
    q: "Who is liable if something goes wrong during a repair?",
    a: "Handymen on the platform operate as independent contractors and are solely responsible for the quality, safety, and outcome of their work. Handymen Network provides the technology to connect you with vetted professionals but does not employ, supervise, or direct the handyman\u2019s work. Any claims for property damage, personal injury, or workmanship issues are between you and the handyman, covered by the handyman\u2019s required insurance. We facilitate the process and can provide the handyman\u2019s insurance information upon request.",
  },
  {
    category: "Trust & safety",
    q: "What insurance do handymen need to be on the platform?",
    a: "At minimum, general liability insurance with coverage adequate for residential repair work. Depending on the services they offer and local regulations, additional coverage such as a surety bond or workers\u2019 compensation may be required. We verify all documentation before a handyman\u2019s first job and conduct periodic re-checks.",
  },
  {
    category: "Elderly & family help",
    q: "Can I use a tablet instead of a phone?",
    a: "Yes. The site works in the browser on tablets and computers.",
  },
];

export function faqsForHomepage(): Faq[] {
  return allFaqs.slice(0, 16);
}

export function faqsByCategory(cat: string): Faq[] {
  return allFaqs.filter((f) => f.category === cat);
}
