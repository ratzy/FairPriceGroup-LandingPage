export const landingContent = {
  benefits: [
    {
      title: "Practical",
      icon: "icon-practical.png",
      description:
        "Redeemable for groceries, daily essentials, and indulgences at over 200 FairPrice and Unity stores, or online.",
    },
    {
      title: "Easy",
      icon: "icon-easy.png",
      description:
        "Send instantly or schedule ahead. Use it in-store or online, partially or fully.",
    },
    {
      title: "Meaningful",
      icon: "icon-meaningful.png",
      description:
        "Bring warmth to any occasion. Choose your gift value and personalise it with your message.",
    },
  ],
  occasions: [
    {
      id: "birthday",
      label: "Birthday",
      image: "birthday.png",
      themeClass: "occasion-birthday",
    },
    {
      id: "celebration",
      label: "Celebrations",
      image: "celebration.png",
      themeClass: "occasion-celebration",
    },
    {
      id: "gratitude",
      label: "Gratitude",
      image: "gratitude.png",
      themeClass: "occasion-gratitude",
    },
    {
      id: "thinking-of-you",
      label: "Thinking of you",
      image: "thinking-of-you.png",
      themeClass: "occasion-thinking",
    },
    {
      id: "more",
      label: "And more",
      image: "and-more.png",
      themeClass: "occasion-more",
    },
  ],
  deliveryCards: [
    {
      title: "eGift Cards",
      description: "Best for speed and convenience",
      image: "eGiftCards.png",
      themeClass: "delivery-egift",
      bullets: [
        "Instant/scheduled delivery via Email",
        "Personal or bulk sending",
        "The thoughtful gift for every need, from a simple thank you to major milestones and celebrations",
      ],
      action: "Send eGift card",
    },
    {
      title: "Physical Gift Cards",
      description: "Best for in-person moments",
      image: "pGiftCards.png",
      themeClass: "delivery-physical",
      bullets: [
        "Available for in-store collection (personal gifting) or bulk delivery (corporate gifting)",
        "Bulk delivery requires a minimum spend and 5-7 working days lead time",
        "Great for everything from birthday gifts to corporate employee benefits",
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
          step: "1",
          title: "Select Design",
          description: "Pick from a wide range of designs made for every occasion.",
          image: "egift-step1.png",
        },
        {
          step: "2",
          title: "Personalise",
          description: "Choose the gift value, quantity and a personal message to make it special.",
          image: "egift-step2.png",
        },
        {
          step: "3",
          title: "Pay and send",
          description: "Create your order with major credit cards or PayNow. Your eGift Card is delivered instantly or on your chosen date.",
          image: "egift-step3.png",
        },
      ],
    },
    {
      id: "egift-use",
      label: "How to use",
      steps: [
        {
          step: "1",
          title: "Open email delivery",
          description: "Recipient opens the gift card email and taps the card link.",
          image: "egift-use-step1.png",
        },
        {
          step: "2",
          title: "Present at checkout",
          description: "Show barcode or gift code to cashier during payment.",
          image: "egift-use-step2.png",
        },
        {
          step: "3",
          title: "Redeem balance",
          description: "Any remaining value stays in the card for the next purchase.",
          image: "egift-use-step3.png",
        },
      ],
    },
    {
      id: "egift-view",
      label: "How to view",
      steps: [
        {
          step: "1",
          title: "Open card details",
          description: "Access your gift card from the email or shared card link.",
          image: "egift-view-step1.png",
        },
        {
          step: "2",
          title: "Check balance",
          description: "View current available balance before making payment.",
          image: "egift-view-step2.png",
        },
        {
          step: "3",
          title: "Track activity",
          description: "Review redemption history and upcoming expiry details.",
          image: "egift-view-step3.png",
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
