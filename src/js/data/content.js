export const landingContent = {
  benefits: [
    {
      title: "Practical",
      icon: "spark",
      description:
        "Redeemable for groceries, daily essentials and household needs at over 220 FairPrice stores and online.",
    },
    {
      title: "Easy",
      icon: "bolt",
      description:
        "Send instantly or schedule ahead for birthdays, milestones and special moments with only a few clicks.",
    },
    {
      title: "Meaningful",
      icon: "heart",
      description:
        "Choose useful gifts and personalize each card with your message to make every delivery thoughtful.",
    },
  ],
  occasions: [
    {
      id: "birthday",
      label: "Birthday",
      themeClass: "occasion-birthday",
      title: "Birthday picks that feel useful and thoughtful",
      description:
        "Choose colourful card designs and schedule delivery so your gift arrives exactly on the special day.",
      cta: "Create birthday gift",
    },
    {
      id: "celebration",
      label: "Celebrations",
      themeClass: "occasion-celebration",
      title: "Celebrate personal wins and milestones",
      description:
        "Perfect for housewarmings, promotions and happy moments where practical support matters.",
      cta: "Send celebration card",
    },
    {
      id: "graduation",
      label: "Graduation",
      themeClass: "occasion-graduation",
      title: "Congratulate graduates with everyday value",
      description:
        "A practical gift that helps new graduates ease into their next chapter with essentials they can use.",
      cta: "Gift for graduates",
    },
    {
      id: "thinking-of-you",
      label: "Thinking of you",
      themeClass: "occasion-thinking",
      title: "A simple gesture for someone on your mind",
      description:
        "Send a warm message with a useful gift card when words alone are not enough.",
      cta: "Send thoughtful gift",
    },
    {
      id: "thanks",
      label: "Thank you",
      themeClass: "occasion-thanks",
      title: "Say thanks with everyday essentials",
      description:
        "From mentors to teammates, show appreciation with a practical card anyone can redeem easily.",
      cta: "Share a thank-you gift",
    },
    {
      id: "holidays",
      label: "Festive season",
      themeClass: "occasion-holidays",
      title: "Festive gifting made quick and flexible",
      description:
        "Great for end-of-year gifting with scheduled send options and a wide range of redemption channels.",
      cta: "Plan festive gifting",
    },
  ],
  deliveryCards: [
    {
      title: "eGift Cards",
      description: "Best for speed and convenience",
      themeClass: "delivery-egift",
      bullets: [
        "Instant purchase and delivery to email",
        "Personalize with card design and message",
        "Ideal for birthdays, milestones and last-minute surprises",
      ],
      action: "Send eGift now",
    },
    {
      title: "Physical Gift Cards",
      description: "Best for in-person moments",
      themeClass: "delivery-physical",
      bullets: [
        "Available for in-store collection from selected outlets",
        "Bulk corporate gifting options with custom values",
        "Great for employee rewards and event packs",
      ],
      action: "Find a store",
    },
  ],
  eGiftTabs: [
    {
      id: "egift-order",
      label: "How to order",
      steps: [
        {
          step: "Step 1",
          title: "Select Design",
          description: "Pick a card design based on the occasion and preferred style.",
          icon: "design",
        },
        {
          step: "Step 2",
          title: "Personalize",
          description: "Choose value, recipient details and include your custom message.",
          icon: "edit",
        },
        {
          step: "Step 3",
          title: "Pay and Send",
          description: "Complete payment and send immediately, or schedule for a future date.",
          icon: "send",
        },
      ],
    },
    {
      id: "egift-use",
      label: "How to use",
      steps: [
        {
          step: "Step 1",
          title: "Open email delivery",
          description: "Recipient opens the gift card email and taps the card link.",
          icon: "mail",
        },
        {
          step: "Step 2",
          title: "Present at checkout",
          description: "Show barcode or gift code to cashier during payment.",
          icon: "barcode",
        },
        {
          step: "Step 3",
          title: "Redeem balance",
          description: "Any remaining value stays in the card for the next purchase.",
          icon: "wallet",
        },
      ],
    },
    {
      id: "egift-view",
      label: "How to view",
      steps: [
        {
          step: "Step 1",
          title: "Open card details",
          description: "Access your gift card from the email or shared card link.",
          icon: "view",
        },
        {
          step: "Step 2",
          title: "Check balance",
          description: "View current available balance before making payment.",
          icon: "balance",
        },
        {
          step: "Step 3",
          title: "Track activity",
          description: "Review redemption history and upcoming expiry details.",
          icon: "history",
        },
      ],
    },
  ],
  physicalTabs: [
    {
      id: "physical-order",
      label: "How to order",
      columns: [
        {
          title: "Personal orders",
          icon: "store",
          steps: [
            "Visit any FairPrice cashier or customer service counter.",
            "Choose your card design and value from SGD 10 to SGD 500.",
            "Make payment and collect the card on the spot.",
          ],
        },
        {
          title: "Corporate orders",
          icon: "building",
          steps: [
            "Submit your request online via the corporate order portal.",
            "Our team confirms quantity and value within 2 to 3 working days.",
            "Complete payment and arrange delivery or collection.",
          ],
        },
      ],
    },
    {
      id: "physical-use",
      label: "How to use",
      columns: [
        {
          title: "In-store redemption",
          icon: "bag",
          steps: [
            "Present your card at any participating FairPrice checkout.",
            "Cashier deducts purchase amount from your card balance.",
            "Keep card for future purchases until value is fully redeemed.",
          ],
        },
        {
          title: "Corporate distribution",
          icon: "team",
          steps: [
            "Distribute cards as employee rewards or event gift packs.",
            "Assign card values by campaign, department or participant list.",
            "Track total issued cards through your corporate order records.",
          ],
        },
      ],
    },
    {
      id: "physical-view",
      label: "How to view",
      columns: [
        {
          title: "Balance enquiry",
          icon: "balance",
          steps: [
            "Check card balance at customer service counters in-store.",
            "Use available self-service tools where supported.",
            "Review remaining value after each successful redemption.",
          ],
        },
        {
          title: "Support and updates",
          icon: "help",
          steps: [
            "Contact customer support for card assistance and expiry details.",
            "Corporate buyers can request consolidated redemption support.",
            "Keep purchase records for replacement and verification workflows.",
          ],
        },
      ],
    },
  ],
  brands: [
    "FairPrice",
    "FairPrice Finest",
    "FairPrice Xtra",
    "FairPrice Shop",
    "Unity",
  ],
  faq: [
    {
      question: "What are FairPrice Group Gift Cards?",
      answer:
        "FairPrice Gift Cards are prepaid cards available in digital and physical formats, redeemable for groceries and daily essentials at participating FairPrice Group brands.",
    },
    {
      question: "Where can I redeem FairPrice Gift Cards?",
      answer:
        "Gift cards can be redeemed at participating FairPrice stores and selected channels. Redemption coverage depends on the card type and campaign setup.",
    },
    {
      question: "Can I include a personal message with eGift Cards?",
      answer:
        "Yes. You can personalize eGift Cards with a recipient name and custom message before checkout.",
    },
    {
      question: "Are there volume discounts for corporate purchases?",
      answer:
        "Corporate gifting packages can be tailored by order quantity and campaign needs. Contact the corporate team for current options and timelines.",
    },
    {
      question: "How do I check the remaining card balance?",
      answer:
        "For eGift Cards, balance can be viewed from the card link. For physical cards, balance can be checked at participating customer service counters and available support channels.",
    },
  ],
};
