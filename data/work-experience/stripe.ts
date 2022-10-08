import { WorkExperienceData } from ".";

const stripeWorkExperience: WorkExperienceData = {
  company: "Stripe",
  roles: [
    {
      title: "Full Stack Developer",
      dates: "Nov 2018 - Apr 2019",
      achievements: [
        "Overhauled support ticket routing. Used data signals about the merchant to get their ticket to the right people more accurately & quickly. This reduced both the time-to-resolution and number of touch points for merchants dealing with Stripe support.",
        'Automated sending a "user pain index" survey to merchants after they complete an account intervention. I listened for completion events via Kafka and generated a survey link through the Qualtrics API.',
        "Built the Account Status API that serves as the source of truth for all enabled/disabled capabilities for a Stripe merchant. This API powers the merchant-facing account status page, account status dashboards for platforms (like Lyft, Shopify, etc), and other internal automations & processes like support ticket routing.",
        "Improved focus handling and keyboard accessibility of the new account onboarding flow at stripe.com/register.",
      ],
    },
  ],
};

export default stripeWorkExperience;
