"use client";

import { Section } from "@/components/section";
import { RiTreasureMapLine } from "react-icons/ri";
import { Timeline } from "@/components/timeline";

const MyJourneyPage = () => (
  <Section title="My journey" Icon={RiTreasureMapLine}>
    <Timeline />
  </Section>
);

export default MyJourneyPage;
