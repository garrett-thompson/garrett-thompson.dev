import { ExperienceHeader } from "../../components/experience-header";
import { List } from "../../components/list";
import { Body } from "../../components/typography";

export const StripeExperience = () => (
  <div>
    <ExperienceHeader
      dates="Mar 2022 - Sep 2022"
      company="Stripe"
      title="Full Stack Engineer"
    />
    <List
      className="mt-3"
      items={[
        <Body>
          Overhauled support ticket routing. Used data signals about the
          merchant to get their ticket to right people more accurately &
          quicker. This reduced both the time-to-resolution and number of touch
          points for merchants dealing with Stripe support.
        </Body>,
        <Body>
          Automated sending a "user pain index" survey to merchants after they
          complete an account intervention. I listened for completion events via
          Kafka and generated a survey link through the Qualtrics API.
        </Body>,
        <Body>
          Built the Account Status API that serves as the source of truth for
          all enabled/disabled capabilities for a Stripe merchant. This API
          powers the merchant-facing account status page, account status
          dashboards for platforms (like Lyft, Shopify, etc), and other internal
          automations & processes like support ticket routing.
        </Body>,
        <Body>
          Improved focus handling and keyboard accessibility of the new account
          onboarding flow at stripe.com/register.
        </Body>,
      ]}
    />
  </div>
);
