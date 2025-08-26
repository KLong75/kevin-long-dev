"use client";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as MuiTooltip } from '@mui/material'

export default function GitHubContributionGrid() {
  const today = new Date().toISOString();
  const todayFormatted = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());
  const oneYearAgo = new Date();
  // oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  // const oneYearAgoFormatted = new Intl.DateTimeFormat("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // }).format(oneYearAgo);
  const oneYearAgoPlusOneDay = new Date(oneYearAgo);
  oneYearAgoPlusOneDay.setDate(oneYearAgoPlusOneDay.getDate() - 1);
  const oneYearAgoPlusOneDayFormatted = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(oneYearAgoPlusOneDay);

  return (
    <div>
      <GitHubCalendar
        username="KLong75"
        blockSize={15}
        blockMargin={5}
        colorScheme="dark"
        fontSize={16}
        renderBlock={(block, activity) => (
          <MuiTooltip title={`${activity.count} activities on ${activity.date}`}>
            {block}
          </MuiTooltip>
        )}
      />
      <span className="text-sm italic mt-2">
          {oneYearAgoPlusOneDayFormatted} - {todayFormatted}
      </span>
    </div>
  );
}

